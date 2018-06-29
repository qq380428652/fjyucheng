// pages/goods/goods.js
// const { classify } = require('../../utils/dataInfo.js');//测试数据
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: ['活酵母系列', '冰肌如玉系列', '冷龄蜜系列', '苹果机系列', '逆龄系列'],
    goods: [],
    activeIndex: 0
  },
  selectClassify(e) {
    this.setData({
      activeIndex: e.currentTarget.id
    })
    this.getGoods(e.currentTarget.id);
  },
  getGoods(index) {
    // 获取产品
    let _this = this;

    wx.getStorage({
      key: 'getAllGoods',
      success: (res) => {
        for (let i in res.data) {
          if (res.data[i].type[0] == index) {
            _this.data.goods.push(res.data[i])
            _this.setData({
              goods: _this.data.goods
            })
          } else {
            _this.setData({
              goods: []
            })
          }
        }
      },
      fail: (res) => {
        app.getData('getAllGoods');
        _this.getGoods(_this.data.activeIndex);
      }
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getGoods(this.data.activeIndex);
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