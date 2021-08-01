import axios from 'axios'
import errorsMessage from '../config/errorsMessage'
import config from '../config/config'

const { baseURL } = config

class Http {
  //  尝试使用对象传参吗?
  //  condition是判断后端接口返回的信息是否没错
  //  success和fail分别是condition判断后的回调函数
  //  如果不需要做判断直接取数据就不要传condition
  //  直接执行默认的success返回result而fail永不执行不用担心undefined
  //  e直接就是请求失败了，操作相对固定,也可以抽象
  static async post (url, data = {}, condition = () => true, success = result => result, fail) {
    try {
      const result = await axios.post(url, data,
        //  await获取promise的then函数的参数回调函数下的resolve(content)函数的content
        {
          baseURL,
          headers: { Content_type: 'application/json' }
        })//  可以了解一下第三个参数config是什么
      //   result?.data?.errno === 0
      return condition(result) ? success(result) : fail(result)// 三元表达式能执行函数或者赋值吗
      //  由于接口不同,判定成功的条件也不同，可以封装或者写成接口(TS可用)
    } catch (e) {
      alert(errorsMessage.requestFailed)
    }
    // if (result?.data?.errno === 0) {
    //   return result.data
    // } else {
    //   alert('登陆失败')
    // }
  }

  static async get (url, condition = () => true, success = result => result, fail) {
    try {
      const result = await axios.get(url,
        //  await获取promise的then函数的参数回调函数下的resolve(content)函数的content
        {
          baseURL,
          headers: { Content_type: 'application/json' }
        })//  可以了解一下第三个参数config是什么
      //   result?.data?.errno === 0
      return condition(result) ? success(result) : fail(result)// 三元表达式能执行函数或者赋值吗
      //  由于接口不同,判定成功的条件也不同，可以封装或者写成接口(TS可用)
    } catch (e) {
      alert(errorsMessage.requestFailed)
    }
    // if (result?.data?.errno === 0) {
    //   return result.data
    // } else {
    //   alert('登陆失败')
    // }
  }
}

export { Http }
