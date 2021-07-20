import { trunk } from '@/lib/api'
import { ApiResponse, GetPageResponse } from '@/lib/apiTypes'
import { cx } from '@/utilities/classes'
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import { useRouter } from 'next/router'
import nookies from 'nookies'

type Props = {
	pageData: GetPageResponse
}

function PagePage({ pageData }: Props) {
	if (!pageData) {
		return <div>Not found</div>
	}
	return (
		<div className="max-w-screen-md mx-auto px-6 py-12 space-y-6">
			<h1 className="text-xl">
				🎁🌳/ <strong>{pageData.campaign.name}</strong>
			</h1>
			<p className="text-muted">This is your giving, summarized</p>

			<div className="bg-page-raised p-4 space-y-3">
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
						className="w-full p-3 font-mono border-black border disabled:text-black disabled:border-black  shadow-offset-black"
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
							'bg-green-300 font-bold text-black font-mono p-3 border-black border rounded-none shadow-offset-black',
							'active:bg-green-400 active:shadow-none active:translate-y-[2px] active:translate-x-[2px]'
						)}
					>
						Share
					</button>
				</div>
			</div>

			{pageData.children.map(child => (
				<div key={child.path_id}>
					<code>{child.path_id}</code>
				</div>
			))}
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
