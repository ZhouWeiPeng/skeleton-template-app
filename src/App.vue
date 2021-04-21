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
	</div>
</template>

<script>
import zSkeleton from './components/z-skeleton/index.js'

export default {
	components: {
		zSkeleton,
	},
}
</script>

<style>
body {
	margin: 0;
}

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	overflow: hidden;
}

p {
	margin: 10px;
}
</style>
