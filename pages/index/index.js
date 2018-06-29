//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [],
    indicatorDots: true,
    autoplay: true,
    circular: true,
    interval: 3000,
    duration: 1000,
    partner: []
  },
  getBanner(){
    // 获取轮播图
    wx.getStorage({
      key: 'getBanner',
      success: (res) => {
        this.setData({
          imgUrls: res.data
        })
      },
      fail: (res) => {
        app.getData('getBanner');
        this.getBanner();
      }
    });
  },
  getImgContent(){
    // 获取明星合伙人
    wx.getStorage({
      key: 'imgContent',
      success: (res) => {
        for (let i in res.data) {
          if (res.data[i].type == '明星合伙人') {
            this.setData({
              partner: res.data[i].imgContentList
            })
          }
        }
      },
      fail: (res) => {
        app.getData('imgContent');
        this.getImgContent();
      }
    })
  },
  onLoad: function () {
    this.getBanner();
    this.getImgContent();
  }
})
