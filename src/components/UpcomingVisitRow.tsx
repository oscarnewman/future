import { LocationMarkerIcon } from '@heroicons/react/solid'
import { intlFormat } from 'date-fns'
import React from 'react'
import CompactRow from './CompactRow'

type Props = {
	clinicName: string
	distanceMi: number
	date: Date
	imageUrl: string
}

const iconClass = 'inline h-4 mr-1 text-sm text-gray-300'

function UpcomingVisitRow({ clinicName, distanceMi, imageUrl, date }: Props) {
	const dateString = intlFormat(date, {
		weekday: 'long',
		month: 'long',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
	})
	return (
		<CompactRow
			tone="promote"
			title={dateString}
			imageUrl={imageUrl}
			kicker="You have an upcoming visit"
			subtitle={
				<div className="space-x-1">
					<LocationMarkerIcon className={iconClass} />
					<span>
						{clinicName}, {distanceMi} mi from you
					</span>
				</div>
			}
		/>
	)
}

export default UpcomingVisitRow
