/* eslint-disable camelcase */

export type ApiResponse<T> = T

export type Page = {
	path_id: string
	path: string
}
export type Campaign = {
	name: string
	slug: string
	callout: string
	description: string
}

export type GetPageResponse = Page & {
	campaign: Campaign
	anonymous_user: {
		user_hash: string
	}
	children: Page[]
}
