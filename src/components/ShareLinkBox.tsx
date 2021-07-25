import { cx } from '@/utilities/classes'

type Props = {
	link: string
}

function ShareLinkBox({ link }: Props) {
	return (
		<div className="bg-brown-200 rounded-2xl p-4 space-y-3">
			<h2 className="font-bold text-lg">
				Get credit when your friends and followers give
			</h2>
			<p className="">
				Any time someone opens your link, your total amount rasied will include
				whatever they give. And if they share their own links to their networks,
				you will get credit for that giving as well. Any time someone gives from
				a link that can be traced back to your own, it gets added to your total
				impact.
			</p>

			<div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
				<input
					type="text"
					className={cx(
						'rounded-lg font-bold font-mono flex bg-white border-none w-full shadow-button text-brown-900',
						'py-4 px-6 transform focus:outline-none focus:ring-4'
					)}
					disabled
					value={link}
				/>
				<button
					className={cx(
						'flex-row rounded-lg font-bold gap-2 flex-shrink-0 flex bg-gradient-to-b from-white to-brown-200 shadow-button text-brown-800',
						'text-center py-4 px-6 active:translate-y-0.5 active:shadow-button-active active:bg-gray-100 transform focus:outline-none focus:ring-4',
						'active:from-brown-50 active:to-brown-50 transition-all duration-75'
					)}
				>
					<span>🪵</span>
					<span>Share your branch</span>
				</button>
			</div>
		</div>
	)
}

export default ShareLinkBox
