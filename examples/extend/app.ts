import axios from '../../src/axios'

// axios({
//   url: '/extend/post',
//   method: 'post',
//   data: {
//     msg: 'henderson'
//   }
// })
//
// axios.request({
//   url:'/extend/post',
//   method: 'post',
//   data: {
//     msg: 'henderson2'
//   }
// })
//
// axios.get('/extend/get')



// 函数重载
axios({
  url: '/extend/post',
  method: 'post',
  data: {
    msg: 'henderson'
  }
})

axios('/extend/post',{
  method: 'post',
  data: {
    msg: 'henderson2'
  }
})
