export function generatePageLink({
	slug,
	pageId,
}: {
	slug: string
	pageId: string
}) {
	return `givingtr.ee/${slug}/${pageId}`
}
