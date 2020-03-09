import axios from '../../src/index'

axios.interceptors.request.use(config => {
  config.headers.test += '1'
  return config
})
axios.interceptors.request.use(config => {
  config.headers.test += '2'
  return config
})
axios.interceptors.request.use(config => {
  config.headers.test += '3'
  return config
})


axios.interceptors.response.use(res => {
  res.data += ' 憨憨1 \n'
  return res
})
axios.interceptors.response.use(res => {
  res.data += ' 憨憨2 \n '
  return res
})
axios.interceptors.response.use(res => {
  res.data += ' 憨憨3 \n '
  return res
})

axios({
  url: '/interceptor/get',
  method: 'get',
  headers: {
    test: ''
  }
}).then(res => {
  console.log(res.data)
})















