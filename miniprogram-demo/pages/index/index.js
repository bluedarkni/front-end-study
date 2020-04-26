import {serverUrl} from "../../config.js"
const app = getApp()
// const api = require('../../utils/api')
Page({
  data: {
    userInfo: {}
  },

  // getMsg: function() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // }



  getMsg: async function(){
    // let res = await api.request({
    //   url: 'test-demo'
    // });
    // if (res.statusCode === 200 && res.data) {
    //   let content = res.data.content
    //   this.userInfo({content})
    // }
    wx.request({
      url: serverUrl + "/test-demo",
      data: {

      },
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        this.userInfo(res.data)
      }
    })
  }
})