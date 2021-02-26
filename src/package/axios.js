import axios from 'axios'
axios.defaults.baseURL = 'http://api.duyiedu.com'
axios.interceptors.request.use(function (request) {
  // console.log(request)
  request.params = {
    ...request.params,
    appkey: 'marty_1590670262789'
  }
  return request
}, function (error) {
  return Promise.reject(error)
})

axios.interceptors.response.use(function (res) {
    if(res.status === 200){
        res.params = {
          ...res.params,
          appkey: 'marty_1590670262789'
        }
        return res.data;
    }
    return res;
}, function (error) {
  return Promise.reject(error)
})



export default axios
