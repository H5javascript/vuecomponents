/**
 * Created by bao on 2018/1/11.
 */
import Mock from  'mockjs'
import loginApi from  './login'
Mock.mock(/\/login/, 'post', loginApi.loginByUsername)
Mock.mock(/\/user\/info/, 'post', loginApi.getUserInfo)