// pages/yuyue/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winHeight: '100%',
    toView: 'productBox',
    nowstatus: 'productBox',
    arr: [
      { src: "../../img/z1.png", txt: "电信宽带" },
      { src: "../../img/z2.png", txt: "电信宽带" },
      { src: "../../img/z3.png", txt: "电信宽带" },
    ],
    brr: [
      { num: "", txt: "" },
      { num: "", txt: "" },
    ],
    crra: [
        { txt: '电信59套餐 1100全国通话20G全国流量' },
        { txt: '炒锅套餐0.15元/分钟，0.3元/条' },
    ],
    crrb: [
        { txt: '电信99套餐 1100全国通话20G全国流量' },
        { txt: '炒锅套餐0.15元/分钟，0.3元/条' },
    ],
    drr: [
      { tim: "1", txt: "客户选号", src: "../../img/rxx.png" },
      { tim: "2", txt: "客户选号", src: "../../img/rxx.png" },
      { tim: "3", txt: "客户选号", src: "../../img/rxx.png" },
      { tim: "4", txt: "客户选号" },
    ],
    foot:[
      {title:"温馨提示",
        text: "根据国家工信部相关规定，所有手机号销售都需要提供身份证实名验证，到营业厅实名过户，国家工信部《电话用户真实身份信息登记锁定》（工业和信息化部令第25号）、电话“黑卡”专项行动工作方案."},
    ]
  },

  toViewClick: function (e) {
    this.setData({
      toView: e.target.dataset.hash,
      nowstatus: e.target.dataset.hash
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winHeight: res.windowHeight - (res.windowWidth * 90 / 750) + 'px'
        })
      },
    })
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