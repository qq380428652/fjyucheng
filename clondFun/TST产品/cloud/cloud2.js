var AV = require('leanengine');

/**
 * TST介绍
 */
/**
 * TST图片介绍内容
 */
AV.Cloud.define('imgContent', function (request) {
  let query = new AV.Query('introduct');
  if (request.params.type) {
    query.contains('type', request.params.type);
  }
  return query.find().then((results) => {
    return results
  }, (err) => {
    console.log(err)
  })
});
/**
 * 提交申请代理
 */
AV.Cloud.define('applicationAgent', function (request) {
  // 声明类型
  var Agent = AV.Object.extend('agent');
  // 新建对象
  var agent = new Agent();
  // 设置
  for (const key in request.params) {
    agent.set(key, request.params[key]);
  }
  return agent.save().then(function (agent) {
    console.log('objectId is ' + agent.id);
    return { status: 200, msg: '提交成功' }
  }, function (error) {
    console.error(error);
    return { status: 201, msg: '提交失败' }
  });
});