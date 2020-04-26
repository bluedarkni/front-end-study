import { SERVERURL, appId } from '../config';

const wxRequest = (params) => {
  let {
    url,
    data = {},
    header,
    method = 'GET',
    token,
    serialId,
    serverUrl,
    showToast = true
  } = params;
  // 合并header
  let _header = {};
  if (token) {
    _header = {
      'Authorization': `Bearer ${token}`,
      serialId,
    };
  }
  if (header) {
    Object.assign(_header, header);
  }

  const res = new Promise((resolve, reject) => {
    wx.request({
      url: `${serverUrl || SERVERURL}/${url}`,
      data,
      header: _header,
      method,
      success: res => {
        if (/2\d{2}$/.test(res.statusCode)) {
          resolve(res);
        } else {
          const { ecode, emsg = '', msg = '' } = res.data;
          if (!url.includes('log/front')) {
            uploadLog({ errCode: ecode, errMsg: emsg, requestUrl: url });
          }
          reject(res);
          wx.showToast({
            icon: 'none',
            title: emsg || msg,
            duration: 3000
          })
        }
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: JSON.stringify(err),
          duration: 3000
        })
        reject(err);
      },
      complete: res => {
        // console.log(res);
      }
    });
  });
  return res;
}

module.exports = {
  request,
  wxRequest
};
