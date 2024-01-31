import type { Plugin } from 'vite'

const GITHUB_BLOB_URL = 'https://github.com/shy1118999/guodu-data-panel/blob/main/src'

export function MarkdownTransform(): Plugin {
  return {
    name: 'docs-md-transform',
    enforce: 'pre',
    async transform(code, id) {
      if (!id.match(/\.md\b/))
        return null
      // 获取src以后的路径
      return code.replace(/\<demo \/\>/, () => {
        const path = GITHUB_BLOB_URL + id.replace(/.*src/, '').replace(/index\.md$/, 'demo.vue')

        return `
<script setup>
import demo from './demo.vue'
</script>
## 示例

[示例源码](${path})

<demo />
`
      })
    },
  }
}
