/* eslint-disable camelcase */

export type ApiResponse<T> = T

export type Timestamps = {
	created_at: string
	updated_at: string
}

export type Page = Timestamps & {
	path_id: string
	path: string
	donation_amount: number
}
export type Campaign = Timestamps & {
	name: string
	slug: string
	callout: string
	description: string
	branches: number
	views: number
}

export type AnonymousUser = Timestamps & {
	user_hash: string
}

export type User = Timestamps & {
	hash: string
	anonymous: boolean
}

export type PageChildren = {
	path: string
	path_id: string
	donation_amount: number
	views: number
	total_raised: number
	total_views: number
	non_leaf_children: number
}

export type GetPageResponse = Page & {
	campaign: Campaign
	views: number
	people: number
	branches: number
	total_raised: number
	campaign_raised: number
	anonymous_user: AnonymousUser
	children: PageChildren[]
	user: User
}
