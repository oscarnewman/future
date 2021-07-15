/* eslint-disable camelcase */

export type ApiResponse<T> = T

export type GetPageResponse = {
	path_id: string
	path: string
	campaign: {
		name: string
		slug: string
	}
	anonymous_user: {
		user_hash: string
	}
}
