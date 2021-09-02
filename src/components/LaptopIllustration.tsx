type Props = {}

function LaptopIllustration(props: Props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 60 60"
			className="heroicon-laptop heroicon heroicon-sm text-pink-500"
		>
			<path
				className="heroicon-laptop-body heroicon-component-fill"
				fill="#FFFFFF"
				d="M55 47V11a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v36H1v2a2 2 0 0 0 2 2h54a2 2 0 0 0 2-2v-2h-4z"
			/>
			<rect
				className="heroicon-laptop-screen-edge heroicon-component-accent heroicon-component-fill"
				width="46"
				height="34"
				x="7"
				y="11"
				fill="currentColor"
			/>
			<rect
				className="heroicon-laptop-screen heroicon-component-fill"
				width="42"
				height="28"
				x="9"
				y="15"
				fill="#FFFFFF"
			/>
			<rect
				className="heroicon-shadows"
				width="56"
				height="2"
				x="2"
				y="49"
				fill="#000000"
				opacity=".2"
			/>
			<path
				className="heroicon-outline"
				fill="#4A4A4A"
				fillRule="nonzero"
				d="M56 46h4v3a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3v-3h4V11a3 3 0 0 1 3-3h46a3 3 0 0 1 3 3v35zm-3-36H7a1 1 0 0 0-1 1v35h48V11a1 1 0 0 0-1-1zM2 48v1a1 1 0 0 0 1 1h54a1 1 0 0 0 1-1v-1H2zm5-37h46v34H7V11zm1 1v32h44V12H8zm1 3h42v28H9V15zm1 1v26h40V16H10zm18-3h4v1h-4v-1zm3.93 10.79l-4 6.92-.86-.5 4-6.92.86.5zm1 3l-4 6.92-.86-.5 4-6.92.86.5z"
			/>
		</svg>
	)
}

export default LaptopIllustration
