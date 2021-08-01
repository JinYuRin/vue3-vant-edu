class ToastEntity {
  message = ''
  isShowToast = false

  constructor (message) {
    this.message = message
  }

  /**
   * @param message
   * @returns {ToastEntity}
   * @private
   */
  static _getToast (message) {
    return new ToastEntity(message)
  }

  static getToastMixin (message) {
    const toast = ToastEntity._getToast(message)
    return {
      data: () => {
        return {
          message: toast.message,
          isShowToast: toast.isShowToast
        }
      },
      methods: {
        //  本来还想写完请求失败的Toast，还是算了
        showToast () {
          this.isShowToast = true
          setTimeout(() => {
            this.isShowToast = false
          }, 2000)
        }
      }
    }
  }
}

export {
  ToastEntity
}
