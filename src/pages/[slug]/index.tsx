import { trunk } from '@/lib/api'
import { ApiResponse, GetPageResponse } from '@/lib/apiTypes'
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import { useRouter } from 'next/router'
import nookies from 'nookies'

type Props = {}

function PagePage(props: Props) {
	const router = useRouter()
	return (
		<div>
			<pre>{JSON.stringify(router.query)}</pre>
		</div>
	)
}

export async function getServerSideProps(
	context: GetServerSidePropsContext<{ slug: string }>
): Promise<GetServerSidePropsResult<{}>> {
	const cookies = nookies.get(context)

	try {
		// eslint-disable-next-line camelcase
		const { user_hash } = cookies
		const result = await trunk.post<ApiResponse<GetPageResponse>>(
			`/pages/${context.params.slug}`,
			{
				user_hash,
			}
		)
		console.log(result.data)

		nookies.set(context, 'user_hash', result.data.user.hash, {
			maxAge: 60 * 60 * 24 * 365 * 10,
		})

		return {
			redirect: {
				destination: `/${context.params.slug}/${result.data.path_id}`,
				permanent: false,
			},
		}
	} catch (e) {
		return {
			notFound: true,
		}
	}
}

export default PagePage
