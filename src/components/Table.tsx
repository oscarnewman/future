import React, { ReactNode } from 'react'
import DesktopOnlyPadding from './DesktopOnlyPadding'

type Props = {
	children: ReactNode
	title?: ReactNode
}

function Table({ children, title }: Props) {
	return (
		<div className="space-y-6">
			{title && <h2 className="text-2xl font-bold px-4">{title}</h2>}
			<DesktopOnlyPadding>
				<div className="space-y-0 divide-y divide-gray-100 rounded-none sm:rounded-xl overflow-hidden border border-gray-100">
					{children}
				</div>
			</DesktopOnlyPadding>
		</div>
	)
}

export default Table
