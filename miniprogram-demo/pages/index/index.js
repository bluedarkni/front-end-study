import { serverUrl } from "../../config.js"
const app = getApp()
// const api = require('../../utils/api')
Page({
  data: {
    // userInfo: { name: "zhansgan", age: 18 }
    userInfo: {}
  },

  getData: function () {
    wx.request({
      url: 'https://sanweishidai.xyz',
      data: {
        //请求参数
      },
      header: {
        //请求头
        'content-type': 'application/json'
      },
      timeout: 5000,
      method: "GET",
      // dataType: 返回数据格式 默认json
      success: function (res) {
        console.info(res.data);
        console.info(res.statusCode)
        //成功执行的函数
      },
      fail: function (err) {
        err.getMsg
        // 失败执行的函数
      },
      complete: function () {
        // 始终执行的函数
      }


    })
  },

  getMsg: function () {
    this.setData({ userInfo: { name: "zhansgan", age: 18 } })
    // this.data.userInfo = { name: "zhansgan", age: 18 }
    console.info(this.data.userInfo)
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })


    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })

  }

  // getMsg: function() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // }



  // getMsg: async function(){
  // let res = await api.request({
  //   url: 'test-demo'
  // });
  // if (res.statusCode === 200 && res.data) {
  //   let content = res.data.content
  //   this.userInfo({content})
  // }
  // wx.request({
  //   url: serverUrl + "/test-demo",
  //   data: {

  //   },
  //   header: {
  //     'content-type': 'application/json'
  //   },
  //   success(res) {
  //     this.userInfo(res.data)
  //   }
  // })
  //   this.userInfo = {name:"zhansgan",age:18}
  //   wx.hideLoading()
  // }
})