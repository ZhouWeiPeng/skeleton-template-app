<template>
	<div class="z-skeleton-row" :style="{ margin, '--space': space }">
		<slot />
	</div>
</template>

<script>
export default {
	name: 'z-skeleton-row',

	props: {
		margin: {
			type: String,
			default: '10px',
		},
		space: {
			type: String,
			default: '10px',
		},
	},
}
</script>

<style scoped>
.z-skeleton-row {
	display: flex;
	align-items: center;
}
.z-skeleton-row:deep(.z-skeleton-item) {
	margin: 0;
}
.z-skeleton-row:deep(.z-skeleton-item + .z-skeleton-item) {
	margin-left: var(--space);
}
</style>
