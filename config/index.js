// this is to make sure we are not missing any variables from .env

process.env.PORT = 3000
process.env.NODE_ENV = "dev"
process.env.LOG_TYPE = "dev"

if (!process.env.NODE_ENV) {
  throw new Error("NODE_ENV required from env")
}
if (!process.env.PORT) {
  throw new Error("PORT required from env")
}
if (!process.env.LOG_TYPE) {
  throw new Error("LOG_TYPE required from env")
}

const config = {
  env: process.env.NODE_ENV,
  port: process.env.PORT || 3000,
  logType: process.env.LOG_TYPE
}

module.exports.config = config
