export const isProd = process.env.NODE_ENV === "production"

const dev = {
  api: {
    url: 'localhost',
    port: 3000,
    prefix: 'api'
  },
  getApiurl: () => {
    return `http://${dev.api.url}:${dev.api.port}${dev.api.prefix ? '/' + dev.api.prefix :''}`
  },
}

const prod = {
  api: {
    url: 'localhost',
    port: 3000,
    prefix: 'api'
  },
  getApiurl: () => {
    return `http://${prod.api.url}:${prod.api.port}${prod.api.prefix ? '/' + prod.api.prefix :''}`
  },
}



export const env = isProd ? prod : dev