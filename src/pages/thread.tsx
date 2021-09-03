import { useScrollToElement } from '@/hooks/useScrollToElement'
import { cx } from '@/utilities/classes'
import {
	ArrowCircleUpIcon,
	ChevronLeftIcon,
	PaperAirplaneIcon,
} from '@heroicons/react/outline'
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
		text: 'What happens when you shake your arms like a polaroid picture?',
	},
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
		text: 'What happens when you shake your arms like a polaroid picture?',
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

const Chat = ({ me, children }, ref) => {
	return (
		<div
			ref={ref}
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

				/* .them + .them .img {
					visibility: visible;
				}

				:not(.them + .them) .chat {
					@apply rounded-bl-xl;
				}

				.me + .me .img {
					visibility: visible;
				}

				:not(.me + .me) .chat {
					@apply rounded-br-xl;
				} */
			`}</style>
		</div>
	)
}
const ChatRef = React.forwardRef(Chat)

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

	const scroll = useScrollToElement(scrollRef.current, {
		triggerAutomatically: false,
		vertical: {
			offsetElement: offsetRef,
		},
	})

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

			<div className="overflow-scroll flex flex-col-reverse">
				<main className="px-4 flex-1 flex pt-6 flex-col space-y-4 bg-white ">
					{sorted?.map((group, i) => (
						<div key={i} className="space-y-1">
							{group.chats.map((chat, j) => (
								<ChatRef key={chat.text + i + j} me={chat.me}>
									{chat.text}
								</ChatRef>
							))}
						</div>
					))}
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
				className="sticky bottom-0 py-2 w-full border-t bg-white border-gray-100 focus-within:border-gray-300"
			>
				<label>
					<div className="flex px-4">
						<input
							autoFocus
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
