const express = require("express")
const logger = require("morgan")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const compress = require("compression")
const cors = require("cors")
const path = require("path")

const app = express()

const { config } = require("./config")

app.use(logger(config.logType))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cookieParser())
app.use(compress())

app.use(cors())

app.disable("x-powered-by")

app.use(express.static(path.join(__dirname, "public")))
app.use("/health", require("./routes/health"))

// Public routes
app.use("/public", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"))
})

// catch 404 and forward to error handler
app.use((req, res) => {
  res.status(404).end()
})

// error handler
// no stack-traces leaked to user in production
app.use((err, req, res) => {
  if (config.env !== "production") {
    res.status(500).send(err)
  }
})

module.exports = app
