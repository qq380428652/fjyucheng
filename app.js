//app.js
const AV = require('./av/av-weapp-min.js');
var APP_ID = 'v1PjNMrBL3dxqRkzG1U5pNv7-gzGzoHsz';
var APP_KEY = 'nC8eT7skRjYcLn8SHawV5D4w';

AV.init({
  appId: "v1PjNMrBL3dxqRkzG1U5pNv7-gzGzoHsz",
  appKey: "nC8eT7skRjYcLn8SHawV5D4w"
});
App({
  onLaunch: function () {
    this.getData('getBanner');
    this.getData('imgContent');

  },
  getData(name, data) {
    let _this = this;
    wx.getStorage({
      key: name,
      fail: function (res) {
        AV.Cloud.run(name, data || '').then((results) => {
          console.log(results)
          wx.setStorage({
            key: name,
            data: results,
          })
          _this.getData(name);
        }, (err) => {
          console.log(err)
        })
      },
    })

  }

})