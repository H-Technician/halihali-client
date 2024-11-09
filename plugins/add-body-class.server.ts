// plugins/add-body-class.server.ts
import { useRoute } from '#app'
import { useHead } from '#imports'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(() => {
  const route = useRoute()

  if (/^\/platform\/.+$/.test(route.path) || /^\/space\/.+$/.test(route.path)) {
    useHead({
      bodyAttrs: {
        class: 'owner'
      }
    })
  }

  if (/dynamic\/.+$/.test(route.path) || /dynamic/.test(route.path)) {
    useHead({
      bodyAttrs: {
        class: 'dynamic-owner'
      }
    })
  }

  if (/message\/.+$/.test(route.path) || /message/.test(route.path)) {
    useHead({
      bodyAttrs: {
        class: 'message-owner'
      }
    })
  }
})