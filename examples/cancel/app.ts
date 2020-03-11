import axios, { Canceler } from '../../src/index'

const CancelToken = axios.CancelToken
const source = CancelToken.source()

axios.get('/cancel/get', {
  cancelToken: source.token
}).catch(function(e) {
  if(axios.isCancel(e)) {
    console.log(e.message, 'genall')
  }
})

setTimeout(() => {
  source.cancel('genaller ooooooo')
  axios.post('/cancel/post', {a:1}, {
    cancelToken: source.token}).catch(function (e) {
      if(axios.isCancel(e)) {
        console.log(e.message)
      }
  })
},100)
