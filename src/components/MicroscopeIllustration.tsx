type Props = {}

function MicroscopeIllustration(props: Props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 60 60"
			className="heroicon-microscope heroicon heroicon-sm text-pink-500"
		>
			<path
				className="heroicon-microscope-base heroicon-component-accent heroicon-component-fill"
				fill="currentColor"
				d="M29 54v-8a6 6 0 1 0-12 0v8H9l-3 6h48l-3-6H29z"
			/>
			<rect
				className="heroicon-microscope-tube heroicon-component-accent heroicon-component-fill"
				width="8"
				height="12"
				x="34"
				y="10"
				fill="currentColor"
			/>
			<rect
				className="heroicon-microscope-stage heroicon-component-accent heroicon-component-fill"
				width="16"
				height="4"
				x="30"
				y="36"
				fill="currentColor"
			/>
			<path
				className="heroicon-microscope-arm heroicon-component-fill"
				fill="#FFFFFF"
				d="M33 48h5v-2h1v3h-6v1h-3v-4a7 7 0 0 0-8-6.93V19a6 6 0 0 1 6-6h5v6h-2a3 3 0 1 0-6 0v16a4 4 0 0 0 4 4v2h4v7zm-10 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
			/>
			<polygon
				className="heroicon-microscope-ocular heroicon-component-fill"
				fill="#FFFFFF"
				points="41 10 41 6 40 5 40 1 36 1 36 5 35 6 35 10"
			/>
			<polygon
				className="heroicon-microscope-lens heroicon-component-fill"
				fill="#FFFFFF"
				points="41 22 41 28 40 28 40 32 36 32 36 28 35 28 35 22"
			/>
			<rect
				className="heroicon-microscope-mirror heroicon-component-accent heroicon-component-fill"
				width="9"
				height="3"
				x="34"
				y="43"
				fill="currentColor"
			/>
			<path
				className="heroicon-shadows"
				fill="#000000"
				d="M29 40h5v3h-5v-3zm6-18h6v3h-6v-3zm2 23h3v3h-3v-3z"
				opacity=".2"
			/>
			<path
				className="heroicon-outline"
				fill="#4A4A4A"
				fillRule="nonzero"
				d="M41 2v2l1 1v4h1v14h-1v6h-1v4h-6v-4h-1v-6h-1v-2h-4v-2a1 1 0 1 0-2 0v16c0 1.1.9 2 2 2v-2h18v6H35v2h8v3h-3v4h-5v2h-5v2h21l2 4 1 2H6l1-2 2-4h7v-8a7 7 0 0 1 4-6.33V19a8 8 0 0 1 8-8h5V9h1V5l1-1V0h6v2zM18 54h10v-8a5 5 0 0 0-10 0v8zm12 2H10.24l-1 2h41.52l-1-2H30zm5-11h7v-1h-7v1zm0 2h2v-1h-2v1zm0 2h4v-3h-1v2h-3v1zm-4-8h-2v-2a4 4 0 0 1-4-4V19a3 3 0 1 1 6 0h2v-6h-5a6 6 0 0 0-6 6v20.07A7 7 0 0 1 30 46v4h3v-9h-2zm5-14h4v-4h-4v4zm1 2v2h2v-2h-2zm4-9h-6v1h6v-1zm-6-9v1h6v-1h-6zm0 8h6v-6h-6v6zm1-10h4V5.83l-.41-.42-.59-.58V2h-2v2.83l-.59.58-.41.42V9zm-5 28v2h14v-2H31zm-8 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm1-2a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"
			/>
		</svg>
	)
}

export default MicroscopeIllustration
