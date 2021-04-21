<template>
	<div>
		<p>新闻模板：</p>
		<z-skeleton template="news" />
		<p>人物介绍模板：</p>
		<z-skeleton template="person" />
		<p>首页模板：</p>
		<z-skeleton template="home" />
		<p>个人中心模板：</p>
		<z-skeleton template="mine" />

		<!-- <z-skeleton-text />
		<z-skeleton-block /> -->
	</div>
</template>

<script>
export default {}
</script>

<style>
p {
	margin: 10px;
}
</style>
