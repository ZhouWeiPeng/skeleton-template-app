/**
 * 这里定义了一下比较常用的样式模板，
 * 可以按照格式定义自己想要的模板
 */

/**
 * 生成重复数据
 * @param {Any} val* 任意数据
 * @param {Int} num* 重复次数
 * @returns Array<any>
 */
function repeat(val, num) {
  return new Array(num).fill(val)
}

export default new Map([
  // 新闻列表模板
  ['news', repeat({
    type: 'row',
    children: [{
      type: 'block',
      size: '100px',
      radius: '10px'
    },
    {
      type: 'text',
      line: 4
    }]
  }, 3)
  ],
  // 人物介绍模板
  ['person', [
    {
      type: 'row',
      margin: '10px 10px 0',
      children: [{
        type: 'block',
        size: '60px',
        radius: '50%'
      },
      {
        type: 'text',
        line: 3,
        begin: 0,
        end: 0
      }]
    },
    {
      type: 'text',
      line: 3,
      begin: 0,
      end: 0,
      margin: '6px 10px 10px'
    }
  ]],
  // 首页模板
  ['home', [
    {
      type: 'block',
      width: 'auto',
      height: '100px',
    },
    {
      type: 'row',
      space: '30px',
      children: repeat({
        type: 'block',
        size: 'calc((100vw - 10px * 2 - 30px * 3) / 4)',
        radius: '50%'
      }, 4)
    },
    ...repeat({
      type: 'row',
      children: [{
        type: 'block',
        size: '100px',
        radius: '10px'
      },
      {
        type: 'text',
        line: 4
      }]
    }, 3)
  ]],
  // 个人中心模板
  ['mine', [
    {
      type: 'block',
      size: '100px',
      radius: '50%',
      margin: '10px auto'
    },
    {
      type: 'row',
      space: '30px',
      children: repeat({
        type: 'block',
        width: 'calc((100vw - 10px * 2 - 30px * 3) / 4)',
        height: '30px'
      }, 4)
    },
    ...repeat({
      type: 'row',
      children: [{
        type: 'block',
        size: '50px',
        radius: '50%'
      },
      {
        type: 'text',
        line: 2,
        begin: 0,
        end: 0
      }]
    }, 3),
  ]]
])