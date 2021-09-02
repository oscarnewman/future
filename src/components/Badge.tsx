import { cx } from '@/utilities/classes'
import { ReactNode } from 'react'

type Props = {
	tone: 'success' | 'promote'
	children: ReactNode
}

function Badge({ tone, children }: Props) {
	return (
		<span
			className={cx(
				'text-xs sm:text-sm uppercase font-bold tracking-wide px-2 py-1 rounded bg-green-100 text-green-800 inline-block',
				{
					'bg-green-100 text-green-800': tone === 'success',
					'bg-purple-50 text-purple-800': tone === 'promote',
				}
			)}
		>
			{children}
		</span>
	)
}

export default Badge
