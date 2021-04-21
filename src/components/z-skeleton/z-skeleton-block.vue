<template>
	<div class="z-skeleton-block z-skeleton-item" :style="styles" />
</template>

<script>
export default {
	name: 'z-skeleton-block',

	props: {
		width: String,
		height: String,
		size: {
			type: String,
			default: '50px',
		},
		radius: {
			type: String,
			default: '5px',
		},
		color: {
			type: String,
			default: '#f5f5f5',
		},
		margin: {
			type: String,
			default: '10px',
		},
	},

	setup(props) {
		const { width, height, size, radius, color, margin } = props
		return {
			styles: {
				width: width || size,
				height: height || size,
				borderRadius: radius,
				background: color,
				'--margin': margin,
			},
		}
	},
}
</script>

<style scoped>
.z-skeleton-block {
	flex: none;
	margin: var(--margin);
}
</style>
