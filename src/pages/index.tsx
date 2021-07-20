import { cx } from '@/utilities/classes'
import { IoShareSharp } from 'react-icons/io5'

type Props = {}

function Home(props: Props) {
	return (
		<div className="max-w-screen-md mx-auto px-6 py-12 space-y-6">
			<h1 className="text-xl">
				🎁🌳/ <strong>Climate Change</strong>
			</h1>
			<p className="text-muted">This is your giving, summarized</p>

			<div className="bg-page-raised p-4 space-y-3">
				<h2 className="font-bold text-lg">Share your Tree</h2>
				<p className="">
					Share this link to get credit for everyone who gives from your link{' '}
					<strong>
						and everyone who gives to a link someone you opened your link
						shared.
					</strong>
				</p>

				<div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
					<input
						type="text"
						className="w-full p-3 font-mono border-black border-2 border-b-4 disabled:text-black disabled:border-black"
						disabled
						value="givingtr.ee/climate/V1StGXR8"
					/>
					<button
						onClick={async () => {
							try {
								await navigator.share?.({
									url: 'https://givingtr.ee/climate/V1StGXR8',
									title: 'Give to Climate Change',
								})
							} catch (e) {
								console.log(e)
							}
						}}
						className={cx(
							'bg-green-300 font-bold text-black font-mono p-3 border-black border-2 border-b-4 rounded-none',
							'active:bg-green-400 translate-y-0  active:-pt-2'
						)}
					>
						Share
					</button>
				</div>
			</div>
		</div>
	)
}

export default Home
