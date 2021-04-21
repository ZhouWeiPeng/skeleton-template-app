import { h, defineAsyncComponent } from 'vue'
import templateMap from './template.map.js'

export default {
	name: 'z-skeleton',

	props: {
		template: {
			type: String,
			validator: val => templateMap.get(val) !== undefined,
		},
		options: {
			type: Array,
		},
		// animate: {
		// 	type: Boolean,
		// 	default: false
		// },
		// disableFadeEnter: {
		// 	type: Boolean,
		// 	default: false
		// }
	},

	setup(props, { slots }) {
		// console.log('默认插槽内容', slots.default)

		const snippetsMap = new Map([
			['row', defineAsyncComponent(() => import('./z-skeleton-row.vue'))],
			['block', defineAsyncComponent(() => import('./z-skeleton-block.vue'))],
			['text', defineAsyncComponent(() => import('./z-skeleton-text.vue'))],
		])

		const renderOptions = props.options || templateMap.get(props.template)

		function generateRenderFn(data) {
			const { type, ...otherProps } = data
			if (type != 'row') return h(snippetsMap.get(type), otherProps)
			const { children, ...rowOtherProps } = otherProps
			return h(snippetsMap.get('row'), rowOtherProps, {
				default: () => children.map(generateRenderFn),
			})
		}

		const rootAttrs = {
			className: 'z-skeleton',
		}

		return () => h('div', rootAttrs, renderOptions.map(generateRenderFn))
	}
}
