import {createClient} from '@sanity/client'

export const client = createClient({
  //Hvis du har hentet dette prosjektet fra GitHub, må du endre
  //projectId til din egen prosjektid fra sanity.io/manage
  projectId: "v652wzsh",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-03-07"
})

//skpqBdV3vPbZmhtp00euoGre6FW5G5UQ5NBNxdtHoN6Nnb9zBjCvwuxAhjVZxknfKpZxLEbgu4zoeJIMoGbqd3dkLErRFBXfiaEga0J1RyO6E3pWW7soRX3tArg6OrtIOsSaWv5aWEOsTVCJWB6vhy80l2NTHuYBhiHqT9Fw3THZPA2mqvWR

export const writeClient = createClient({
  projectId: "v652wzsh",
  dataset: "production",
  useCdn: false,
  apiVersion: "2022-03-07",
  token: "skpqBdV3vPbZmhtp00euoGre6FW5G5UQ5NBNxdtHoN6Nnb9zBjCvwuxAhjVZxknfKpZxLEbgu4zoeJIMoGbqd3dkLErRFBXfiaEga0J1RyO6E3pWW7soRX3tArg6OrtIOsSaWv5aWEOsTVCJWB6vhy80l2NTHuYBhiHqT9Fw3THZPA2mqvWR"
})