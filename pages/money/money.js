// pages/yuyue/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr: [
      { src: "../../img/z1.png",srcc: "../../img/zz1.png", txt: "电信宽带" },
      { src: "../../img/z2.png",srcc: "../../img/zz2.png", txt: "电信联通" },
      { src: "../../img/z3.png",srcc: "../../img/zz3.png", txt: "电信移动" },
    ],
    brr: [
      { txt: "50M" },
      { txt: "100M" },
      { txt: "200M" },
      { txt: "300M" },
      { txt: "500M" },
      { txt: "1000M" }
    ],
    crr: [
      { tim: "1", txt: '宽带速率1000M' },
      { tim: "2", txt: '宽带速率1000M' },
      { tim: "3", txt: '宽带速率1000M' },
      { tim: "4", txt: '宽带速率1000M' },
    ],
    drr: [
      { tim: "1", txt: "客户选号",src: "../../img/bxx.png" },
      { tim: "2", txt: "客户选号",src: "../../img/bxx.png" },
      { tim: "3", txt: "客户选号",src: "../../img/bxx.png" },
      { tim: "4", txt: "客户选号" },
    ],
    idx:0,
    indx:0
  },
  goback() {
    wx.navigateBack({ delata: 1 })
  },
  chooseThis(e) {
    this.setData({
      idx: e.currentTarget.dataset.index
    })
  },
  goIndex(e) {
    let index = e.currentTarget.dataset.index; 
    // console.log('每个index',index)
    this.setData({
      indx: index
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