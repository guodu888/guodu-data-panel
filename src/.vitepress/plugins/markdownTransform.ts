import type { Plugin } from 'vite'

export function MarkdownTransform(): Plugin {
  return {
    name: 'docs-md-transform',
    enforce: 'pre',
    async transform(code, id) {
      if (!id.match(/\.md\b/))
        return null

      return code.replace(/\<demo \/\>/, `
<script setup>
import demo from './demo.vue'
</script>
## 示例

<ClientOnly>
  <demo />
</ClientOnly>
`)
    },
  }
}
