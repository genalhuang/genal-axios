import axios, { Canceler } from '../../src/index'

// const CancelToken = axios.CancelToken
// const source = CancelToken.source()
//
// axios.get('/cancel/get', {
//   cancelToken: source.token
// }).catch(function(e) {
//   if(axios.isCancel(e)) {
//     console.log(e.message, 'genall')
//   }
// })
//
// setTimeout(() => {
//   source.cancel('genaller ooooooo')
//   axios.post('/cancel/post', {a:1}, {
//     cancelToken: source.token}).catch(function (e) {
//       if(axios.isCancel(e)) {
//         console.log(e.message)
//       }
//   })
// },100)

document.cookie = 'a=b'
axios.get('/more/get').then(res => {
  console.log(res)
})
axios.post('http://127.0.0.1:3001/more/server2',{},{
  withCredentials:true
}).then(res => {
  console.log(res)
})
