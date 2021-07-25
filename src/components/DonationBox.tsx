import { cx } from '@/utilities/classes'
import { PropsWithChildren } from 'react'

function Button({ children }: PropsWithChildren<{}>) {
	return (
		<button
			className={cx(
				'flex-row flex-1 justify-center rounded-lg font-bold gap-2 flex-shrink-0 flex bg-gradient-to-b from-white to-brown-200 shadow-button text-brown-800',
				'text-center py-4 px-6 active:translate-y-0.5 active:shadow-button-active active:bg-gray-100 transform focus:outline-none focus:ring-4',
				'active:from-brown-50 active:to-brown-50 transition-all duration-75'
			)}
		>
			{children}
		</button>
	)
}

type Props = {}

function DonationBox(props: Props) {
	return (
		<div className="bg-brown-200 rounded-2xl p-4 space-y-3">
			<h2 className="font-bold text-lg">Donate</h2>
			<p className="">
				Share this link to get credit for everyone who gives from your link{' '}
				<strong>
					and everyone who gives to a link someone you opened your link shared.
				</strong>
			</p>

			<div className="flex flex-wrap space-x-3 justify-items-stretch">
				<Button>$5</Button>
				<Button>$15</Button>
				<Button>$25</Button>
				<Button>$50</Button>
				<Button>Custom</Button>
			</div>
		</div>
	)
}

export default DonationBox
