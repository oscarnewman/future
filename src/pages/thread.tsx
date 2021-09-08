import Badge from '@/components/Badge'
import { useScrollToElement } from '@/hooks/useScrollToElement'
import { cx } from '@/utilities/classes'
import {
	ArrowCircleUpIcon,
	ChevronLeftIcon,
	PaperAirplaneIcon,
} from '@heroicons/react/outline'
import {
	BadgeCheckIcon,
	BookmarkIcon,
	CameraIcon,
	ChevronRightIcon,
	VideoCameraIcon,
} from '@heroicons/react/solid'
import Link from 'next/link'
import React, {
	forwardRef,
	useRef,
	useState,
	useEffect,
	useLayoutEffect,
} from 'react'

type Props = {}

const initialChats = [
	{
		me: false,
		text: 'Hey there! How can I help you today?',
	},
	{
		me: true,
		text: "I've got this werid pain in my arm.",
	},
	{
		me: true,
		text: 'It started this morning after I fell off of my bike when I was trying to jump over a car from a ramp I made.',
	},
	{
		me: false,
		text: 'Hmmm, ok. Sounds like you might have just sprained something.',
	},
	{
		me: false,
		text: "I think we're going to need some imaging for this. Let's get you in-person asap.",
	},
]

const NamePlate = () => (
	<div className="flex gap-4 flex-1 items-center">
		<img
			src="https://st.depositphotos.com/3489481/4889/i/950/depositphotos_48892981-stock-photo-headshot-happy-smiling-male-doctor.jpg"
			className="w-12 h-12 object-cover rounded-full shadow-lg"
			alt=""
		/>
		<div>
			<h1 className="text-2xl font-bold">Roger Federer, NP</h1>
			<p className="text-gray-500">City Bay Urgent Care</p>
		</div>
	</div>
)

const Chat = ({ me, children }) => {
	return (
		<div
			className={cx('flex items-center gap-2', {
				'me flex-row-reverse': me,
				them: !me,
			})}
		>
			<img
				src={
					me
						? 'https://thumbs.dreamstime.com/b/portrait-concentrated-person-smile-look-camera-wear-white-green-stripes-isolated-blue-color-background-209299398.jpg'
						: 'https://st.depositphotos.com/3489481/4889/i/950/depositphotos_48892981-stock-photo-headshot-happy-smiling-male-doctor.jpg'
				}
				className="w-6 h-6 object-cover invisible self-end rounded-full shadow-lg img"
				alt=""
			/>
			<div
				className={cx('px-2 py-2 rounded-xl  chat', {
					'bg-gray-100 text-gray-900 rounded-bl-none': !me,
					'text-white bg-pink-600 rounded-br-none': me,
				})}
			>
				{children}
			</div>

			<style jsx>{`
				:last-child .img {
					visibility: visible;
				}

				:not(:last-child) .chat {
					@apply rounded-xl;
				}
			`}</style>
		</div>
	)
}

const BookingChat = () => {
	return (
		<div className={cx('flex items-center gap-2')}>
			<div className="w-6 h-6 flex-shrink-0 bg-pink-500 self-end rounded-full shadow-lg img flex items-center justify-center">
				<BadgeCheckIcon className="w-4 h-4 flex-0 text-white" />
			</div>
			<div className="rounded-xl border border-gray-100 px-3 py-3 space-y-3">
				<p className="text-gray-500 text-sm">
					Next available appointments near you
				</p>
				<div className="space-y-6">
					<div>
						<div className="pb-4">
							<div className="text-sm font-bold flex items-center gap-1">
								<span className="flex items-center gap-1">
									City Bay Urgent Care
								</span>
								<BadgeCheckIcon className="h-4 text-pink-600 mr-1" />
								<Badge tone="promote" size="small">
									$90+
								</Badge>
							</div>
							<p className="text-gray-500 text-sm font-normal">
								0.3 miles from you
							</p>
						</div>
						<div className="flex gap-2 flex-wrap">
							<button className="bg-pink-50 text-pink-700 px-2 py-1 text-sm rounded">
								3:00 pm
							</button>
							<button
								className="bg-pink-50 text-pink-700 px-2 py-1 text-sm rounded"
								disabled
							>
								3:20 pm
							</button>
							<button className="bg-pink-50 text-pink-700 px-2 py-1 text-sm rounded">
								3:40 pm
							</button>
							<button className="bg-pink-50 text-pink-700 px-2 py-1 text-sm rounded">
								4:00 pm
							</button>
							<button className="bg-pink-50 text-pink-700 px-2 py-1 text-sm rounded">
								4:20 pm
							</button>
						</div>
					</div>
					<div>
						<div className="pb-4">
							<p className="text-sm font-bold">
								Dignity Health{' '}
								<Badge size="small" tone="promote">
									$120+
								</Badge>
							</p>
							<p className="text-gray-500 text-sm font-normal">
								1.6 miles from you
							</p>
						</div>
						<div className="flex gap-2 flex-wrap">
							<button className="bg-pink-50 text-pink-700 px-2 py-1 text-sm rounded">
								3:00 pm
							</button>
							<button
								className="bg-pink-50 text-pink-700 px-2 py-1 text-sm rounded"
								disabled
							>
								3:20 pm
							</button>
							<button className="bg-pink-50 text-pink-700 px-2 py-1 text-sm rounded">
								3:40 pm
							</button>
							<button className="bg-pink-50 text-pink-700 px-2 py-1 text-sm rounded">
								4:00 pm
							</button>
							<button className="bg-pink-50 text-pink-700 px-2 py-1 text-sm rounded">
								4:20 pm
							</button>
						</div>
					</div>
					<button className="w-full text-pink-600 text-sm flex justify-between items-center py-1">
						<span>See more options</span>{' '}
						<ChevronRightIcon className="h-5 text-gray-400" />
					</button>
				</div>
			</div>
			<style jsx>{`
				:last-child .img {
					visibility: visible;
				}

				:not(:last-child) .chat {
					@apply rounded-xl;
				}
			`}</style>
		</div>
	)
}
const TelemedChat = () => {
	return (
		<div className={cx('flex items-center gap-2 ')}>
			<div className="w-6 h-6 bg-pink-500 flex-shrink-0 self-end rounded-full shadow-lg img flex items-center justify-center">
				<BadgeCheckIcon className="w-4 h-4 text-white" />
			</div>
			<div className="rounded-xl border border-gray-100 px-3 py-3 space-y-4">
				<p className="text-gray-500 text-sm">
					Talk to a licensed provider for{' '}
					<Badge tone="promote" size="small">
						$40
					</Badge>
				</p>
				<div className="space-y-1">
					<p className="text-sm font-bold">Call Roger right now</p>
					<button className="w-full flex items-center justify-center bg-pink-600 text-white px-2 py-2 rounded-lg">
						<VideoCameraIcon className="h-5 text-pink-300 mr-2" />
						Talk to Roger
					</button>
				</div>
				<div className="space-y-1">
					<p className="text-sm font-bold">Schedule a telemed visit later</p>
					<div className="flex gap-2 flex-wrap">
						<button className="bg-pink-50 flex items-center justify-center text-pink-700 px-2 py-1 text-sm rounded">
							<VideoCameraIcon className="h-3 text-pink-300 mr-1" />
							3:00 pm
						</button>
						<button
							className="bg-pink-50 flex items-center justify-center text-pink-700 px-2 py-1 text-sm rounded"
							disabled
						>
							<VideoCameraIcon className="h-3 text-pink-300 mr-1" />
							3:20 pm
						</button>
						<button className="bg-pink-50 flex items-center justify-center text-pink-700 px-2 py-1 text-sm rounded">
							<VideoCameraIcon className="h-3 text-pink-300 mr-1" />
							3:40 pm
						</button>
						<button className="bg-pink-50 flex items-center justify-center text-pink-700 px-2 py-1 text-sm rounded">
							<VideoCameraIcon className="h-3 text-pink-300 mr-1" />
							4:00 pm
						</button>
						<button className="bg-pink-50 flex items-center justify-center text-pink-700 px-2 py-1 text-sm rounded">
							<VideoCameraIcon className="h-3 text-pink-300 mr-1" />
							4:20 pm
						</button>
					</div>
					<p className="text-sm text-gray-500 max-w-md">
						You will be matched with the first avaialble provider
					</p>
					<button className="w-full text-pink-600 text-sm flex justify-between items-center py-1">
						<span>See more options</span>{' '}
						<ChevronRightIcon className="h-5 text-gray-400" />
					</button>
				</div>
			</div>
			<style jsx>{`
				:last-child .img {
					visibility: visible;
				}

				:not(:last-child) .chat {
					@apply rounded-xl;
				}
			`}</style>
		</div>
	)
}

function Thread(props: Props) {
	const [text, setText] = useState('')
	const [chats, setChats] = useState(initialChats)

	const sorted = chats.reduce((acc, el) => {
		if (acc.length === 0) return [{ me: el.me, chats: [el] }]

		const last = acc[acc.length - 1]
		if (last.me === el.me)
			return [
				...acc.slice(0, acc.length - 1),
				{ ...last, chats: [...last.chats, el] },
			]

		return [...acc, { me: el.me, chats: [el] }]
	}, [])

	const scrollRef = useRef<HTMLDivElement>(null)
	const offsetRef = useRef<HTMLFormElement>(null)
	const inputRef = useRef<HTMLInputElement>(null)

	useEffect(() => {
		scrollRef.current?.scrollIntoView()
	}, [chats])

	return (
		<div className="max-w-screen-md mx-auto flex flex-col justify-start  h-full relative w-full min-h-full scrollbars-hidden">
			<div className="space-y-3 px-4 sticky top-0 bg-white py-4 border-b border-gray-100">
				<Link href="/">
					<button className="text-pink-500 flex gap-1">
						<ChevronLeftIcon className="h-6 text-pink-500" /> Back
					</button>
				</Link>
				<nav className="flex justify-between">
					<div>
						<NamePlate />
					</div>
					<div className="w-10 h-10 bg-pink-600 rounded-full text-white flex items-center justify-center">
						ON
					</div>
				</nav>
			</div>

			<div className="overflow-scroll flex flex-1 flex-col-reverse">
				<main className="px-4 flex-1 flex pt-6 flex-col space-y-4 bg-white ">
					{sorted?.map((group, i) => (
						<div key={i} className="space-y-1">
							{group.chats.map((chat, j) => (
								<Chat key={chat.text + i + j} me={chat.me}>
									{chat.text}
								</Chat>
							))}
						</div>
					))}
					<div className="space-y-2">
						<BookingChat />
						<TelemedChat />
					</div>
					<div ref={scrollRef} />
				</main>
			</div>

			<form
				ref={offsetRef}
				onSubmit={e => {
					e.preventDefault()
					if (!text.trim()) return
					setChats([...chats, { me: true, text }])
					setText('')
					inputRef.current?.focus()
				}}
				className="sticky bottom-0 py-2 sm:py-4 w-full border-t bg-white border-gray-100 focus-within:border-gray-300"
			>
				<label>
					<div className="flex items-center px-4">
						<label className="cursor-pointer">
							<CameraIcon className="h-6 text-gray-400" />
							<input type="file" accept="image/*" className="hidden" />
						</label>
						<input
							autoCapitalize="true"
							autoCorrect="true"
							ref={inputRef}
							value={text}
							onChange={e => setText(e.target.value)}
							type="text"
							className="w-full border-none flex-1 focus:outline-none focus:border-none focus:ring-0"
							placeholder="Enter your message"
						/>
						<button type="submit" className="text-pink-600">
							Send
						</button>
					</div>
				</label>
			</form>
		</div>
	)
}

export default Thread
