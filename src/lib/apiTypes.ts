/* eslint-disable camelcase */

export type ApiResponse<T> = T

export type Page = {
	path_id: string
	path: string
}

export type GetPageResponse = Page & {
	campaign: {
		name: string
		slug: string
	}
	anonymous_user: {
		user_hash: string
	}
	children: Page[]
}
