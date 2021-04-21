<template>
	<div class="z-skeleton-text z-skeleton-item" :style="{ '--margin': margin, '--space': space }">
		<div
			v-for="...[, index] in line"
			:key="index"
			class="z-skeleton-text-item"
			:style="index == 0 ? beginStyles : index == line - 1 ? endStyles : middleStyles"
		/>
	</div>
</template>

<script>
export default {
	name: 'z-skeleton-text',

	props: {
		begin: {
			type: [String, Number],
			default: '10%',
		},
		end: {
			type: [String, Number],
			default: '10%',
		},
		lineHeight: {
			type: String,
			default: '20px',
		},
		line: {
			type: Number,
			default: 3,
		},
		radius: {
			type: String,
			default: '3px',
		},
		color: {
			type: String,
			default: '#f5f5f5',
		},
		margin: {
			type: String,
			default: '10px',
		},
		space: {
			type: String,
			default: '6px',
		},
	},

	setup(props) {
		const { begin, end, lineHeight, radius, color } = props

		const middleStyles = {
			height: lineHeight,
			borderRadius: radius,
			background: color,
		}

		const beginStyles = {
			...middleStyles,
			marginLeft: begin,
		}

		const endStyles = {
			...middleStyles,
			marginRight: end,
		}

		return {
			middleStyles,
			beginStyles,
			endStyles,
		}
	},
}
</script>

<style scoped>
.z-skeleton-text {
	flex: auto;
	margin: var(--margin);
}
.z-skeleton-text-item + .z-skeleton-text-item {
	margin-top: var(--space);
}
</style>
