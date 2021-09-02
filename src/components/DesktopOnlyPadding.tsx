import { ReactNode } from 'react'

type Props = {
	children: ReactNode
}

function DesktopOnlyPadding({ children }: Props) {
	return <div className="px-0 sm:px-6">{children}</div>
}

export default DesktopOnlyPadding
