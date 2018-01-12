/**
 * 为参数对象设置token(不允许其他地方使用，其他地方)
 * @param params
 */
export function _setToken(params) {
  if (params == null) {
    params = {}
  }
  params.token = getStore('token')
  return params
}

/**
 * 存储store数据
 * @param key
 * @param value value必须是字符串
 */
export function store(key, value) {
  sessionStorage.setItem(key, value)
}

/**
 * 获取store数据
 * @param key
 */
export function getStore(key) {
  return sessionStorage.getItem(key)
}

/**
 * 清除stroe数据
 * @param key
 */
export function deleteStore(key) {
  sessionStorage.removeItem(key)
}

/**
 * 缓存json对象
 * @param key
 * @param jsonObj
 */
export function storeJsonObj(key, jsonObj) {
  store(key, JSON.stringify(jsonObj))
}

/**
 * 获取缓存json对象
 * @param key
 */
export function getStoreJsonObj(key) {
  var jsonStr = getStore(key)
  return JSON.parse(jsonStr)
}
