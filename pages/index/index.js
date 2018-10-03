//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [{
      url: '../images/ban1.jpg'
    }, {
      url: '../images/ban2.jpg'
    }, {
      url: '../images/ban3.jpg'
    }, {
      url: '../images/ban4.jpg'
    }, {
      url: '../images/ban5.jpg'
    }],
    indicatorDots: false,
    autoplay: true,
    circular: true,
    interval: 3000,
    duration: 1000,
    partner: []
  },
  stopTouchMove() {
    return false
  },
  getBanner() {

  },
  getImgContent() {
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
  onLoad: function() {
    this.getBanner();
    this.getImgContent();
  }
})