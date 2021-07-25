import { GetPageResponse } from '@/lib/apiTypes'
import { formatMinorAmmount } from '@/utilities/currency'
import { formatRelative, parseISO } from 'date-fns'
import { ReactNode } from 'react'

type Props = {
	page: GetPageResponse
}

type TimelineItemProps = {
	icon: ReactNode
	content: ReactNode
	noDivider?: boolean
}

function TimelineItem({ icon, content, noDivider }: TimelineItemProps) {
	return (
		<div className="flex">
			<style jsx>{`
				.timeline-line:last-child {
					display: none;
				}
			`}</style>
			<div className="flex flex-col items-center mr-2">
				<div className="w-8 h-8 pl-px pt-px flex-shrink-0 bg-brown-200 flex items-center justify-center rounded-full">
					{icon}
				</div>
				{!noDivider && (
					<div className="py-2 relative h-full w-0.5 flex" aria-hidden="true">
						<span className="w-full h-full bg-brown-300" />
					</div>
				)}
			</div>
			<div className="pt-1 pb-12">{content}</div>
		</div>
	)
}

function Timeline({ page }: Props) {
	const fruitfulChildren = page.children.filter(child => !!child.total_raised)
	return (
		<ul className="list">
			<TimelineItem
				icon="🌳"
				content={
					<div>
						<p>
							Your link created{' '}
							<span className="text-muted">
								{formatRelative(parseISO(page.created_at), new Date())}
							</span>
						</p>
						<p />
					</div>
				}
			/>
			<TimelineItem
				icon="🎁"
				content={
					<div>
						<p>You gave {formatMinorAmmount(page.donation_amount, 0)}</p>
						<p />
					</div>
				}
			/>
			<TimelineItem
				icon="👀"
				content={<p>{page.people} people viewed your page or its children</p>}
				noDivider={fruitfulChildren.length === 0}
			/>
			{fruitfulChildren.map((child, i) =>
				child.donation_amount !== child.total_raised ? (
					<TimelineItem
						key={child.path}
						icon="🪵"
						noDivider={i === fruitfulChildren.length - 1}
						content={
							<p>
								Anonymous user{' '}
								<button className="font-mono text-sm text-muted hover:bg-brown-100 active:bg-brown-200 p-1 rounded cursor-pointer">
									@{child.path_id}
								</button>{' '}
								rasied {formatMinorAmmount(child.total_raised, 0)}{' '}
								<span className="text-muted">
									with{' '}
									{child.non_leaf_children > 0
										? `${child.non_leaf_children} sub-campaign${
												child.non_leaf_children !== 1 ? 's' : ''
										  } and `
										: ''}
									{child.total_views} total views
								</span>
							</p>
						}
					/>
				) : (
					<TimelineItem
						key={child.path}
						icon="🍎"
						noDivider={i === fruitfulChildren.length - 1}
						content={
							<p>
								Anonymous user{' '}
								<button className="font-mono text-sm text-muted hover:bg-brown-100 active:bg-brown-200 p-1 rounded cursor-pointer">
									@{child.path_id}
								</button>{' '}
								gave {formatMinorAmmount(child.total_raised, 0)}
							</p>
						}
					/>
				)
			)}
		</ul>
	)
}

export default Timeline
