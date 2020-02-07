// pages/yuyue/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr: [
      { src: "../../img/w1.png", txt: "价格透明" },
      { src: "../../img/w2.png", txt: "上门服务" },
      { src: "../../img/w3.png", txt: "闪电回返" },
      { src: "../../img/w4.png", txt: "售后服务" },
    ],
    brr: [
      { src: "../../img/wx1.png",srcc: "../../img/ww1.png", txt: "手机换屏幕" },
      { src: "../../img/wx2.png",srcc: "../../img/ww2.png", txt: "手机换电池" },
      { src: "../../img/wx3.png",srcc: "../../img/ww3.png", txt: "手机换外壳" },
      { src: "../../img/wx4.png",srcc: "../../img/ww4.png", txt: "电脑装系统" },
      { src: "../../img/wx5.png",srcc: "../../img/ww5.png", txt: "电脑升级" },
      { src: "../../img/wx6.png",srcc: "../../img/ww6.png", txt: "上网故障" },
      { src: "../../img/wx7.png",srcc: "../../img/ww7.png", txt: "数据恢复" },
      { src: "../../img/wx8.png",srcc: "../../img/ww8.png", txt: "预约购机" },
      { src: "../../img/wx9.png",srcc: "../../img/ww9.png", txt: "其他故障" },
    ],
    crr: [
      { tim: "1", txt: '系统生成维修价位预测故障报价' },
      { tim: "2", txt: '本服务保修180天' },
    ],
    drr: [
      { tim: "1", txt: "客户选号", src: "../../img/gxx.png" },
      { tim: "2", txt: "客户选号", src: "../../img/gxx.png" },
      { tim: "3", txt: "客户选号", src: "../../img/gxx.png" },
      { tim: "4", txt: "客户选号" },
    ],
    idx:0
  },

  goback() {
    wx.navigateBack({ delata: 1 })
  },
  chooseThis(e) {
    this.setData({
      idx: e.currentTarget.dataset.index
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