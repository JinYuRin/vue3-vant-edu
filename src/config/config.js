const config = {
  baseURL: 'https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd/api',
  //  自定义登陆成功的判断
  isLoginSuccessed: (result) => {
    return result?.data?.errno === 0
  },
  isRegisterSuccessed: (result) => {
    return result?.data?.errno === 0
  }
}
export default config
// export const config = config
// const config = () => {
//   return {
//     baseURL: 'https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd/api',
//     //  自定义登陆成功的判断
//     isLoginSuccessed: (result) => {
//       return result?.data?.errno === 0
//     }
//   }
// }
// export default config

// 为什么这样子的外部引用时解构赋值失败了,其实import的解构赋值是和普通的解构不同的
// 怎么样才能正确导出模块被解构赋值，写成函数可以吗
// export default {
//   baseURL: config.baseURL,
//   isLoginSuccessed: config.isLoginSuccessed
// }
