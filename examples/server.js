const express = require('express')
const bodyParser = require('body-parser')

const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const WebpackConfig = require('./webpack.config')

const app = express()
const compiler = webpack(WebpackConfig)

app.use(webpackDevMiddleware(compiler, {
  publicPath: '/__build__/',
  stats: {
    colors: true,
    chunks: false
  }
}))

app.use(webpackHotMiddleware((compiler)))
app.use(express.static(__dirname))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extend: true}))

const router = express.Router()

registerRouter()
registerInterceptorRouter()

app.use(router)

const port = process.env.PORT || 3000

module.exports = app.listen(port, () => {
  console.log(`genal chen is listening on http://localhost:${port}`)
})

function registerRouter() {
  router.get('/simple/get', function(req, res) {
    res.json({
      msg: 'Hello world'
    })
  })

  router.get('/base/get', function(req, res) {
    res.json(req.query)
  })

  router.post('/base/post', function(req, res) {
    res.json(req.body)
  })

  router.post('/base/buffer', function(req, res) {
    let msg = []
    req.on('data', (chunk) => {
      if (chunk) {
        msg.push(chunk)
      }
    })
    req.on('end', () => {
      let buf = Buffer.concat(msg)
      res.json(buf.toJSON())
    })
  })

  router.get('/error/get', function (req, res) {
    if(Math.random() > 0.5) {
      res.json({
        msg: 'Henderson Hello'
      })
    } else {
      res.status(500)
      res.end()
    }
  })

  router.get('/error/timeout', function (req, res) {
    setTimeout(() => {
      res.json({
        msg: 'Henderson Hello'
      })
    },3000)
  })

  router.get('/extend/get', function(req, res) {
    res.end("hello genaller")
  })

  router.post('/extend/post', function(req, res) {
    res.json(req.body)
  })
}

function registerInterceptorRouter() {
  router.get('/interceptor/get', function (req, res) {
    res.end('hello genaller')
  })
}












