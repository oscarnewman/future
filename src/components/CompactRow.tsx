import { cx } from '@/utilities/classes'
import { ChevronRightIcon } from '@heroicons/react/solid'
import { ReactNode } from 'react'

type Props = {
	kicker?: ReactNode
	title: ReactNode
	subtitle: ReactNode
	imageUrl?: string
	icon?: ReactNode
	trailingItem?: ReactNode
	tone?: 'info' | 'promote'
	onClick?: () => void
}

function ProviderRow({
	kicker,
	title,
	subtitle,
	imageUrl,
	icon,
	trailingItem,
	onClick,
	tone = 'info',
}: Props) {
	return (
		<button
			onClick={onClick}
			className={cx(
				'w-full text-left px-2 sm:px-4 py-4 flex items-center space-x-4',
				'transition duration-75 ',
				{
					'bg-transparent hover:bg-gray-50 active:bg-gray-100': tone === 'info',
					'bg-purple-50 hover:bg-purple-100 active:bg-purple-50':
						tone === 'promote',
				}
			)}
		>
			{imageUrl ? (
				<img
					src={imageUrl}
					className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover shadow-lg"
					alt=""
				/>
			) : (
				icon
			)}
			<div className="flex flex-1 justify-between items-center">
				<div className="space-y-px">
					<div>
						{kicker && (
							<span className="text-gray-500 text-xs uppercase tracking-wide">
								{kicker}
							</span>
						)}
						<p className="font-medium">{title}</p>
					</div>
					<p className="text-sm items-center text-gray-500">{subtitle}</p>
				</div>
				<div className="flex items-center text-sm space-x-2 text-gray-500">
					{trailingItem}
					<ChevronRightIcon className="h-6 text-gray-400" />
				</div>
			</div>
		</button>
	)
}

export default ProviderRow
