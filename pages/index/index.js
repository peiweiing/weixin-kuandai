// pages/yuyue/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    autoplay: false,
    interval: 500,
    duration: 500,
    imgUrls:[
      { src:"../../img/sd1.png" },
      { src:"../../img/sd1.png" },
    ],
    arr:[
      { src: "../../img/s1.png", txt: "优惠套餐" },
      { src: "../../img/s2.png", txt: "宽带预约" },
      { src: "../../img/s3.png", txt: "手机靓号" },
      {src:"../../img/s4.png",txt:"手机维修"},
    ],
    brr:[
      { txt: "[更新]", text: "乌鲁木齐联通获得AAAB号", time: "3天前" },
      { txt: "[更新]", text: "乌鲁木齐联通获得AAAB号", time: "2019-09-27" },
    ],
    crr:[
      { src: "../../img/sx1.png", text: "靓号排行", txt: '每周靓号排行' }, 
      { src: "../../img/sx2.png", text: "私人定制", txt: '定制6位生日号' }
    ]
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