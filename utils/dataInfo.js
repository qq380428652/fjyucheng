
const classify = [
  {
    name: '活酵母系列',
    child: [
      {
        name: '亮白保湿面膜舒缓面部护理套装',
        coverImg: '/pages/images/2017122660362985.jpg',
        imgContentList: [
          '/pages/images/201712261644311999.jpg',
          '/pages/images/201712261644326496.jpg'
        ]
      }, {
        name: '活酵母雪绒花大礼盒',
        coverImg: '/pages/images/201712261642452452.jpg',
        imgContentList: [
          '/pages/images/201712261642452452.jpg',
          '/pages/images/201712261642453033.jpg',
          '/pages/images/201712261642463076.jpg',
          '/pages/images/20171226164246597.jpg',
          '/pages/images/201712261642468495.jpg',
          '/pages/images/201712261642461952.jpg',
          '/pages/images/20171226164247365.jpg',
          '/pages/images/201712261642479086.jpg',
          '/pages/images/201712261642472462.jpg',
          '/pages/images/201712261642476400.jpg',
          '/pages/images/20171226164247492.jpg',
          '/pages/images/201712261642483558.jpg',
          '/pages/images/201712261642482695.jpg'
        ]
      }, {
        name: '黑白礼盒深度补水保湿套组',
        coverImg: '/pages/images/2017122660112089.jpg',
        imgContentList: [
          '/pages/images/201712261640104783.jpg',
          '/pages/images/201712261640126633.jpg',
          '/pages/images/201712261640139514.jpg',
          '/pages/images/201712261640155276.jpg',
          '/pages/images/201712261640159816.jpg'
        ]
      }, {
        name: '活酵母面膜乳50ml',
        coverImg: '/pages/images/2017122659844365.jpg',
        imgContentList: [
          '/pages/images/201712261626388990.jpg',
          '/pages/images/201712261626384883.jpg',
          '/pages/images/201712261626386419.jpg',
          '/pages/images/201712261626382405.jpg',
          '/pages/images/201712261626387269.jpg'
        ]
      }
    ]
  }, {
    name: '冰肌如玉系列',
    child: []
  }, {
    name: '冷龄蜜系列',
    child: []
  }, {
    name: '苹果机系列',
    child: []
  }, {
    name: '逆龄系列',
    child: []
  }
];

const goodsDetail = ([index1,index2]) =>{
  let goods = classify[index1].child[index2];
  return goods;
}


module.exports = {
  classify,
  goodsDetail
}