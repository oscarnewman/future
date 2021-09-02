import {
	ChatIcon,
	ClipboardIcon,
	VideoCameraIcon,
} from '@heroicons/react/solid'
import { formatDistanceToNow, formatRelative } from 'date-fns'
import React from 'react'
import CompactRow from './CompactRow'
import { DateTime } from 'luxon'

type Props = {
	clinicName: string
	providerName: string
	date: Date
	avatarUrl: string
	preview: {
		message: string
		icons: Array<'video' | 'chat' | 'prescription'>
	}
}

const iconClass = 'inline h-4 mr-1 text-sm text-gray-300'

function ProviderChatRow({
	clinicName,
	providerName,
	date,
	avatarUrl,
	preview,
}: Props) {
	const l = DateTime.fromJSDate(date)
	const dateString = l.toRelative()
	return (
		<CompactRow
			title={providerName}
			imageUrl={avatarUrl}
			trailingItem={<span className="hidden md:block">{dateString}</span>}
			kicker={
				<div className="space-x-[4px]">
					<span>{clinicName}</span>
					<span className="md:hidden">•</span>
					<span className="md:hidden">{dateString}</span>
				</div>
			}
			subtitle={
				<>
					{preview.icons.map(
						(icon, i) =>
							({
								video: <VideoCameraIcon key={i} className={iconClass} />,
								chat: <ChatIcon key={i} className={iconClass} />,
								prescription: <ClipboardIcon key={i} className={iconClass} />,
							}[icon])
					)}
					{preview.message}
				</>
			}
		/>
	)
}

export default ProviderChatRow
