// pages/join/join.js
const AV = require('../../av/av-weapp-min.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  validate(val) {
    let msg;
    if (!val.wxname) {
      msg = '微信号不能为空';
      this.showModal(msg);
      return false
      
    } else if (!val.mobile) {
      msg = '手机号不能为空';
      this.showModal(msg);
      return false

    } else if (!val.IDname) {
      msg = '身份证姓名不能为空';
      this.showModal(msg);
      return false

    } else if (!val.IDnumber) {
      msg = '身份证不能为空';
      this.showModal(msg);
      return false

    } else if (!(/^1[34578]{1}\d{9}$/.test(val.mobile))) {
      msg = '手机号格式不对';
      this.showModal(msg);
      return false

    }
    return true
  },
  showModal(msg){
    wx.showModal({
      title: '提示',
      content: msg,
      showCancel: false,
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  /**
   * 表单提交 
   */
  formSubmit: function (e) {
    // console.log('form发生了submit事件，携带数据为：', e.detail.value)
    let vali = this.validate(e.detail.value);
    if (!vali) return
    AV.Cloud.run('applicationAgent', e.detail.value).then((data) => {
      wx.showToast({
        title: data.msg,
        icon: 'success',
        duration: 2000
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})