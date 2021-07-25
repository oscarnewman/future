import DonationBox from '@/components/DonationBox'
import ShareLinkBox from '@/components/ShareLinkBox'
import Timeline from '@/components/Timeline'
import Stack from '@/components/ui/Stack'
import { trunk } from '@/lib/api'
import { ApiResponse, GetPageResponse } from '@/lib/apiTypes'
import { cx } from '@/utilities/classes'
import { formatMinorAmmount } from '@/utilities/currency'
import { generatePageLink } from '@/utilities/links'
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import nookies from 'nookies'
import React from 'react'
import { HiBadgeCheck, HiChevronRight, HiMenuAlt3 } from 'react-icons/hi'

type Props = {
	pageData: GetPageResponse
}

function PagePage({ pageData }: Props) {
	if (!pageData) {
		return <div>Not found</div>
	}

	const showFundraisingTools = pageData.total_raised > 0 || pageData.people > 0

	return (
		<div className="max-w-screen-md mx-auto px-6 py-12 space-y-6">
			<Head>
				<title>GivingTree | {pageData.campaign.name}</title>
				<link
					rel="icon"
					href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌳</text></svg>"
				/>
			</Head>

			<nav className="flex justify-between">
				<p className="text-base flex items-center">
					<span>🎁🌳</span> <HiChevronRight className="text-brown-400" />
					<p className="text-brown-700">#{pageData.campaign.slug}</p>
				</p>
				<button className="text-brown-600 text-lg">
					<HiMenuAlt3 />
				</button>
			</nav>
			<div className="flex items-center gap-2">
				<div className="rounded-full w-20 h-20  relative overflow-hidden shadow-button border-2 border-brown-600">
					<Image
						src="https://images.unsplash.com/photo-1597378609917-e189e392f559?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
						layout="fill"
					/>
				</div>
				<div>
					<h1 className="text-xl flex items-center font-bold text-brown-900 gap-2">
						{pageData.campaign.name} <HiBadgeCheck className="text-red-600" />
					</h1>
					<p className="text-muted">{pageData.campaign.callout}</p>
				</div>
			</div>
			<div className="flex justify-around items-stretch">
				<div className="flex items-center gap-2 text-brown-600">
					<span>🎁</span> {formatMinorAmmount(pageData.campaign_raised, 0)}{' '}
					raised
				</div>
				<div className="w-px bg-brown-300" />
				<div className="flex items-center gap-2 text-brown-600">
					<span>❤️</span> {pageData.campaign.views} views
				</div>
				<div className="w-px bg-brown-300" />
				<div className="flex items-center gap-2 text-brown-600">
					<span>🌲</span> {pageData.campaign.branches} branches
				</div>
			</div>

			{showFundraisingTools && (
				<Stack space={6}>
					<div className="grid grid-cols-3 gap-4">
						<div className="bg-white shadow-lg rounded-2xl p-4">
							<p className="text-6xl text-brown-900">
								{formatMinorAmmount(pageData.total_raised, 0)}
							</p>
							<p className="font-bold text-sm text-muted">
								Raised because of your link
							</p>
						</div>
						<div className="bg-white shadow-lg rounded-2xl p-4">
							<p className="text-6xl text-brown-900">{pageData.branches}</p>
							<p className="font-bold text-sm text-muted">
								Sub-campaigns linked to you
							</p>
						</div>
						<div className="bg-white shadow-lg rounded-2xl p-4">
							<p className="text-6xl text-brown-900">{pageData.views}</p>
							<p className="font-bold text-sm text-muted">
								People have seen this cause
							</p>
						</div>
					</div>

					<ShareLinkBox
						link={generatePageLink({
							slug: pageData.campaign.slug,
							pageId: pageData.path_id,
						})}
					/>

					<div className="space-y-4">
						<p className="text-xl text-brown-800 font-bold">Your Impact</p>
						<Timeline page={pageData} />
					</div>
				</Stack>
			)}

			{!showFundraisingTools && (
				<div className="space-y-6">
					<DonationBox />

					<div className="space-y-2 ">
						<p className="text-xl text-brown-800 font-bold">This Cause</p>
						{pageData.campaign.description.split('\n').map((par, id) => (
							<p className="text-muted" key={id}>
								{par}
							</p>
						))}
					</div>

					<ShareLinkBox
						link={generatePageLink({
							slug: pageData.campaign.slug,
							pageId: pageData.path_id,
						})}
					/>
				</div>
			)}
		</div>
	)
}

export async function getServerSideProps(
	context: GetServerSidePropsContext<{ slug: string; key: string }>
): Promise<GetServerSidePropsResult<{ pageData: GetPageResponse }>> {
	const cookies = nookies.get(context)

	try {
		// eslint-disable-next-line camelcase
		const { user_hash } = cookies
		const result = await trunk.post<ApiResponse<GetPageResponse>>(
			`/pages/${context.params.slug}`,
			{
				user_hash,
				parent: context.params.key,
			}
		)
		console.log(result)

		nookies.set(context, 'user_hash', result.data.user.hash, {
			maxAge: 60 * 60 * 24 * 365 * 10,
			path: '/',
		})

		if (result.data.path_id !== context.params.key) {
			return {
				redirect: {
					destination: `/${context.params.slug}/${result.data.path_id}`,
					permanent: false,
				},
			}
		}

		return {
			props: { pageData: result.data },
		}
	} catch (e) {
		console.error(e)
		return {
			notFound: true,
		}
	}
}

export default PagePage
