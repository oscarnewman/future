import { cx } from '@/utilities/classes'
import { ReactNode } from 'react'

type Props = {
	tone: 'success' | 'promote'
	size?: 'small' | 'base'
	children: ReactNode
}

function Badge({ tone, children, size = 'base' }: Props) {
	return (
		<span
			className={cx(
				' uppercase font-bold tracking-wide rounded bg-green-100 text-green-800 inline-block',
				{
					'bg-green-100 text-green-800': tone === 'success',
					'bg-purple-50 text-purple-800': tone === 'promote',
					'px-2 py-1 text-xs sm:text-sm': size === 'base',
					'px-1 py-0.5 text-xs': size === 'small',
				}
			)}
		>
			{children}
		</span>
	)
}

export default Badge
