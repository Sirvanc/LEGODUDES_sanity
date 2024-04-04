import {createClient} from '@sanity/client'

export const client = createClient({
  projectId: "tj8klx6q",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-03-07"
})