import { Page } from '@/lib/apiTypes'
import * as d3 from 'd3'
import { useEffect, useRef } from 'react'

const duration = 750
const height = 600
const width = 600

type Props = {
	pages: Page[]
}

type TreeValue = {
	name: string
	value: number
	type: string
	level: string
	children?: TreeValue[]
}
const treeData: TreeValue = {
	name: 'Eve',
	value: 15,
	type: 'black',
	level: 'yellow',
	children: [
		{
			name: 'Cain',
			value: 10,
			type: 'grey',
			level: 'red',
		},
		{
			name: 'Seth',
			value: 10,
			type: 'grey',
			level: 'red',
			children: [
				{
					name: 'Enos',
					value: 7.5,
					type: 'grey',
					level: 'purple',
				},
				{
					name: 'Noam',
					value: 7.5,
					type: 'grey',
					level: 'purple',
				},
			],
		},
		{
			name: 'Abel',
			value: 10,
			type: 'grey',
			level: 'blue',
		},
		{
			name: 'Awan',
			value: 10,
			type: 'grey',
			level: 'green',
			children: [
				{
					name: 'Enoch',
					value: 7.5,
					type: 'grey',
					level: 'orange',
				},
			],
		},
		{
			name: 'Azura',
			value: 10,
			type: 'grey',
			level: 'green',
		},
	],
}

function TreeView(props: Props) {
	/* The useRef Hook creates a variable that "holds on" to a value across rendering
       passes. In this case it will hold our component's SVG DOM element. It's
       initialized null and React will assign it later (see the return statement) */
	const d3Container = useRef(null)

	const data = {
		value: 10,
	}

	/* The useEffect Hook is for running side effects outside of React,
       for instance inserting elements into the DOM using D3 */
	useEffect(() => {
		if (d3Container.current) {
			const svg = d3
				.select(d3Container.current)
				.attr('width', width)
				.attr('height', height)
				.style('border', '1px solid black')
		}
	}, [])

	const draw = () => {
		const svg = d3.select(d3Container.current)

		// Give the data to this cluster layout:
		const root = d3.hierarchy(data).sum(function (d) {
			return d.value
		})

		d3
			.treemap()
			.size([width, height])
			.paddingTop(28)
			.paddingRight(7)
			.paddingInner(3)(root)
	}

	useEffect(() => {
		draw()
	}, [data])

	return <svg ref={d3Container} />
}

export default TreeView
