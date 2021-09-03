import { cx } from '@/utilities/classes'
import { ChevronRightIcon } from '@heroicons/react/solid'
import React, { ReactNode } from 'react'

type Props = {
	illustration: ReactNode
	title: ReactNode
	badges?: ReactNode
	subtitle: ReactNode
}

function ServiceRow({ illustration, title, badges, subtitle }: Props) {
	return (
		<button
			className={cx(
				'w-full text-left p-4 flex items-center space-x-4 sm:space-x-6 hover:bg-gray-50',
				'transition duration-75 active:bg-gray-100'
			)}
		>
			<div className="text-4xl sm:text-6xl rounded-full bg-gray-50 p-4">
				{illustration}
			</div>
			<div className="flex flex-1 justify-between items-center">
				<div className="space-y-px">
					<div>
						<p className="font-medium text-base sm:text-lg flex flex-wrap space-y-2 sm:space-y-0 sm:space-x-2 flex-col-reverse sm:flex-row items-start">
							<span>{title}</span>
							<div className="flex flex-wrap gap-1">{badges}</div>
						</p>
					</div>
					<p className="flex items-center text-sm sm:text-base text-gray-500">
						{subtitle}
					</p>
				</div>
				<div className="flex items-center space-x-2 ml-1">
					<ChevronRightIcon className="h-4 sm:h-6 text-gray-400" />
				</div>
			</div>
		</button>
	)
}

export default ServiceRow
