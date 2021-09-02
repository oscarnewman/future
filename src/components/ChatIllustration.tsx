import React from 'react'

type Props = {
	className?: string
}

function ChatIllustration(props: Props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 60 60"
			className="heroicon-phone-chat heroicon heroicon-sm"
			{...props}
		>
			<rect
				className="heroicon-phone-chat-edge heroicon-component-accent text-pink-500"
				width="36"
				height="60"
				x="12"
				fill="currentColor"
				rx="4"
			/>
			<rect
				className="heroicon-phone-chat-screen text-pink-500"
				width="28"
				height="46"
				x="16"
				y="7"
				fill="#FFFFFF"
			/>
			<path
				className="heroicon-phone-chat-bubbles text-pink-500"
				fill="#FFFFFF"
				d="M0 16a3 3 0 0 1 3-3h20a3 3 0 0 1 3 3v2l3 3-3 3v2a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V16zm60 18v10a3 3 0 0 1-3 3H37a3 3 0 0 1-3-3v-2l-3-3 3-3v-2a3 3 0 0 1 3-3h20a3 3 0 0 1 3 3z"
			/>
			<path
				className="heroicon-phone-chat-dots heroicon-component-accent text-pink-500"
				fill="currentColor"
				d="M8 23a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm5 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm5 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm24 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm5 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm5 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
			/>
			<path
				className="heroicon-shadows"
				fill="#000000"
				d="M48 50H37a3 3 0 0 1-3-3v-2l-3-3 1.5-1.5L34 42v2a3 3 0 0 0 3 3h11v3zM12 32h11a3 3 0 0 0 3-3v-2l3-3-1.5-1.5L26 24v2a3 3 0 0 1-3 3H12v3z"
				opacity=".2"
			/>
			<path
				className="heroicon-outline"
				fill="#4A4A4A"
				fillRule="nonzero"
				d="M57 31a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-9v9a4 4 0 0 1-4 4H16a4 4 0 0 1-4-4V29H3a3 3 0 0 1-3-3V16a3 3 0 0 1 3-3h9V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v27h9zM16 2a2 2 0 0 0-2 2v9h2V7h28v24h2V4a2 2 0 0 0-2-2H16zm30 45h-2v6H16V29h-2v27c0 1.1.9 2 2 2h28a2 2 0 0 0 2-2v-9zm-12-3v-2l-1.59-1.59L31 39l1.41-1.41L34 36v-2a3 3 0 0 1 3-3h6V8H17v5h6a3 3 0 0 1 3 3v2l1.59 1.59L29 21l-1.41 1.41L26 24v2a3 3 0 0 1-3 3h-6v23h26v-5h-6a3 3 0 0 1-3-3zM24 18.83V16a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1v-2.83l.59-.58L26.17 21l-1.58-1.59-.59-.58zm12 18l-.59.58L33.83 39l1.58 1.59.59.58V44a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V34a1 1 0 0 0-1-1H37a1 1 0 0 0-1 1v2.83zM32 4v1h-4V4h4zm-3.5 50h3a1.5 1.5 0 0 1 0 3h-3a1.5 1.5 0 0 1 0-3zm3 1h-3a.5.5 0 1 0 0 1h3a.5.5 0 1 0 0-1zM10 21a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm-2 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm5 1a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm1-2a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm-2 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm24 19a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm1-2a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm-2 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm5 1a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm1-2a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"
			/>
		</svg>
	)
}

export default ChatIllustration
