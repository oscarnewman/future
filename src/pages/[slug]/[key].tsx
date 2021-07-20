import { trunk } from '@/lib/api'
import { ApiResponse, GetPageResponse } from '@/lib/apiTypes'
import { cx } from '@/utilities/classes'
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import Head from 'next/head'
import nookies from 'nookies'
import {
	HiChevronRight,
	HiMenuAlt3,
	HiBadgeCheck,
	HiOutlineCash,
	HiOutlineUserGroup,
} from 'react-icons/hi'
import Image from 'next/image'

type Props = {
	pageData: GetPageResponse
}

function PagePage({ pageData }: Props) {
	if (!pageData) {
		return <div>Not found</div>
	}
	return (
		<div className="max-w-screen-md mx-auto px-6 py-12 space-y-6">
			<Head>
				<title>{pageData.campaign.name} | GivingTree</title>
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
					<span>🎁</span> $2,400 raised
				</div>
				<div className="w-[1px] bg-brown-300" />
				<div className="flex items-center gap-2 text-brown-600">
					<span>❤️</span> 3.4k views
				</div>
				<div className="w-[1px] bg-brown-300" />
				<div className="flex items-center gap-2 text-brown-600">
					<span>🌳</span> 823 trees
				</div>
			</div>

			<div className="bg-brown-200 rounded-2xl p-4 space-y-3">
				<h2 className="font-bold text-lg">Donate</h2>
				<p className="">
					Share this link to get credit for everyone who gives from your link{' '}
					<strong>
						and everyone who gives to a link someone you opened your link
						shared.
					</strong>
				</p>
				<div className="flex flex-wrap space-x-3 justify-items-stretch">
					<button
						onClick={async () => {
							try {
								// await navigator.share?.({
								// 	url: `https://givingtr.ee/${pageData.campaign.slug}/${pageData.path_id}`,
								// 	title: 'Give to' + pageData.campaign.name,
								// })
							} catch (e) {}
						}}
						className={cx(
							'flex-row flex-1 justify-center rounded-lg font-bold gap-2 flex-shrink-0 flex bg-gradient-to-b from-white to-brown-200 shadow-button text-brown-800',
							'text-center py-4 px-6 active:translate-y-0.5 active:shadow-button-active active:bg-gray-100 transform focus:outline-none focus:ring-4',
							'active:from-brown-50 active:to-brown-50 transition-all duration-75'
						)}
					>
						$5
					</button>
					<button
						onClick={async () => {
							try {
								// await navigator.share?.({
								// 	url: `https://givingtr.ee/${pageData.campaign.slug}/${pageData.path_id}`,
								// 	title: 'Give to' + pageData.campaign.name,
								// })
							} catch (e) {}
						}}
						className={cx(
							'flex-row flex-1 justify-center rounded-lg font-bold gap-2 flex-shrink-0 flex bg-gradient-to-b from-white to-brown-200 shadow-button text-brown-800',
							'text-center py-4 px-6 active:translate-y-0.5 active:shadow-button-active active:bg-gray-100 transform focus:outline-none focus:ring-4',
							'active:from-brown-50 active:to-brown-50 transition-all duration-75'
						)}
					>
						$15
					</button>
					<button
						onClick={async () => {
							try {
								// await navigator.share?.({
								// 	url: `https://givingtr.ee/${pageData.campaign.slug}/${pageData.path_id}`,
								// 	title: 'Give to' + pageData.campaign.name,
								// })
							} catch (e) {}
						}}
						className={cx(
							'flex-row flex-1 justify-center rounded-lg font-bold gap-2 flex-shrink-0 flex bg-gradient-to-b from-white to-brown-200 shadow-button text-brown-800',
							'text-center py-4 px-6 active:translate-y-0.5 active:shadow-button-active active:bg-gray-100 transform focus:outline-none focus:ring-4',
							'active:from-brown-50 active:to-brown-50 transition-all duration-75'
						)}
					>
						$25
					</button>
					<button
						onClick={async () => {
							try {
								// await navigator.share?.({
								// 	url: `https://givingtr.ee/${pageData.campaign.slug}/${pageData.path_id}`,
								// 	title: 'Give to' + pageData.campaign.name,
								// })
							} catch (e) {}
						}}
						className={cx(
							'flex-row flex-1 justify-center rounded-lg font-bold gap-2 flex-shrink-0 flex bg-gradient-to-b from-white to-brown-200 shadow-button text-brown-800',
							'text-center py-4 px-6 active:translate-y-0.5 active:shadow-button-active active:bg-gray-100 transform focus:outline-none focus:ring-4',
							'active:from-brown-50 active:to-brown-50 transition-all duration-75'
						)}
					>
						$50
					</button>
					<button
						onClick={async () => {
							try {
								// await navigator.share?.({
								// 	url: `https://givingtr.ee/${pageData.campaign.slug}/${pageData.path_id}`,
								// 	title: 'Give to' + pageData.campaign.name,
								// })
							} catch (e) {}
						}}
						className={cx(
							'flex-row flex-1 justify-center rounded-lg font-bold gap-2 flex-shrink-0 flex bg-gradient-to-b from-white to-brown-200 shadow-button text-brown-800',
							'text-center py-4 px-6 active:translate-y-0.5 active:shadow-button-active active:bg-gray-100 transform focus:outline-none focus:ring-4',
							'active:from-brown-50 active:to-brown-50 transition-all duration-75'
						)}
					>
						Custom
					</button>
				</div>
			</div>
			<div className="space-y-2 ">
				{pageData.campaign.description.split('\n').map((par, id) => (
					<p className="text-muted" key={id}>
						{par}
					</p>
				))}
			</div>

			<div className="bg-brown-200 rounded-2xl p-4 space-y-3">
				<h2 className="font-bold text-lg">Share your Tree</h2>
				<p className="">
					Share this link to get credit for everyone who gives from your link{' '}
					<strong>
						and everyone who gives to a link someone you opened your link
						shared.
					</strong>
				</p>

				<div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
					<input
						type="text"
						// className="w-full p-3 font-mono border-black border disabled:text-black disabled:border-black  shadow-offset-black"
						className={cx(
							'rounded-lg font-bold font-mono flex bg-white border-none w-full shadow-button text-brown-900',
							'py-4 px-6 transform focus:outline-none focus:ring-4'
						)}
						disabled
						value={`givingtr.ee/${pageData.campaign.slug}/${pageData.path_id}`}
					/>
					<button
						onClick={async () => {
							try {
								// await navigator.share?.({
								// 	url: `https://givingtr.ee/${pageData.campaign.slug}/${pageData.path_id}`,
								// 	title: 'Give to' + pageData.campaign.name,
								// })
							} catch (e) {}
						}}
						className={cx(
							'flex-row rounded-lg font-bold gap-2 flex-shrink-0 flex bg-gradient-to-b from-white to-brown-200 shadow-button text-brown-800',
							'text-center py-4 px-6 active:translate-y-0.5 active:shadow-button-active active:bg-gray-100 transform focus:outline-none focus:ring-4',
							'active:from-brown-50 active:to-brown-50 transition-all duration-75'
						)}
					>
						<span>🪵</span>
						<span>Share your branch</span>
					</button>
				</div>
			</div>

			<p className="text-xl text-brown-800 font-bold">Your branches</p>

			<div className="flex flex-col">
				<img
					src="/base.png"
					style={{ imageRendering: 'pixelated' }}
					height={90}
					width={90}
					alt=""
				/>
				<img
					src="/trunk.png"
					style={{ imageRendering: 'pixelated' }}
					height={90}
					width={90}
					alt=""
				/>
				{pageData.children.map(child => (
					<div key={child.path_id} className="flex">
						<img
							src="/trunk.png"
							style={{ imageRendering: 'pixelated' }}
							height={90}
							width={90}
							alt=""
						/>
						<code>{child.path_id}</code>
					</div>
				))}
			</div>
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

		nookies.set(context, 'user_hash', result.data.anonymous_user.user_hash, {
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
		return {
			notFound: true,
		}
	}
}

export default PagePage
