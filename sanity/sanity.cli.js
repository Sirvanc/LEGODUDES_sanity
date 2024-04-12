import {createClient} from '@sanity/client'

export const client = createClient({
  api: {
    projectId: 'v652wzsh',
    dataset: 'production'
  }
})
