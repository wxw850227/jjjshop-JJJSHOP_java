import request from '@/utils/request'

let AccessApi = {
  /*商城列表*/
  shopList(data, errorback) {
    return request._postBody('/admin/shop/index', data, errorback);
  },
  /*添加商城*/
  addShop(data, errorback) {
    return request._postBody('/admin/shop/add', data, errorback);
  },
  /*修改商城*/
  editShop(data, errorback) {
    return request._postBody('/admin/shop/edit', data, errorback);
  },
  /*启用商城*/
  updateStatus(data, errorback) {
    return request._post('/admin/shop/updateStatus', data, errorback);
  },
  /*进入商城*/
  storeEnter(data, errorback) {
    return request._post('/admin/shop/enter', data, errorback);
  },
  /*删除商城*/
  deleteShop(data, errorback) {
    return request._post('/admin/shop/delete', data, errorback);
  },
  /*启用商城*/
  updateWxStatus(data, errorback) {
    return request._post('/admin/shop/updateWxStatus', data, errorback);
  },
}

export default AccessApi;
