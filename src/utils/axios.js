import axios from 'axios';
import { getEndPoint } from '@/utils/getEndPoint';
import config from '@/utils/config';

const isDevelopment = process.env.NODE_ENV === 'development';

const httpRegx = /^http(s*):\/\//;
const customProxyRegx = /^\/api[a-zA-Z-_]*/;
const defaultProxy = '/proxy';
const endpoint = getEndPoint();

function withProxy(url = '') {
  if (httpRegx.test(url)) {
    return url;
  }

  if (customProxyRegx.test(url)) {
    return isDevelopment ? url : url.replace(customProxyRegx, '');
  } else {
    return isDevelopment ? defaultProxy + url : url;
  }
}

function getToken() {
  return global.storage.load({
    key: 'token',
    autoSync: true
  }).then(token => {
    return token;
  }).catch(() => {
    return '';
  });
}

const axiosIns = axios.create({
  timeout: 10000,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }
});

axiosIns.interceptors.request.use(
  config => {
    // url加上时间戳，去服务器获取数据
    if (config.url.indexOf('?') > -1) {
      config.url += ('&t=' + new Date().getTime());
    } else {
      config.url += ('?t=' + new Date().getTime());
    }

    // 考虑web和react-native的情况
    let token = '';
    if (endpoint === 'web') {
      token = window.localStorage.getItem('token');
    } else if ( endpoint === 'react-native') {
      token = getToken();
    }

    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
      config.url += ('&Authorization=Bearer ' + token);
    } else {
      // 需要检查token
      if (config.headers.need_check_token) {
        if (endpoint === 'web') {
          return window.onNeedAuthorizeCallback && window.onNeedAuthorizeCallback(config);
        } else if ( endpoint === 'react-native') {
          return global.onNeedAuthorizeCallback && global.onNeedAuthorizeCallback(config);
        }
      }
    }
    // 有token（过期和没过期）、不需要token和没有token的情况都包含
    config.url = withProxy(config.url);
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axiosIns.interceptors.response.use(
  response => {
    if (response.data[config.status_code_key_name] === config.success_code_value) {
      return response.data;
    } else if (response.data[config.status_code_key_name] === config.expired_code_value) {
      // token过期或者没有token跳登录，考虑web和react-native的情况
      if (endpoint === 'web') {
        Promise.reject(response.data);
        return window.onAuthorizedErrorCallback && window.onAuthorizedErrorCallback(response.data);
      } else if ( endpoint === 'react-native') {
        Promise.reject(response.data);
        return global.onAuthorizedErrorCallback && global.onAuthorizedErrorCallback(response.data);
      }
    } else {
      return Promise.reject(response.data);
    }
  },
  error => {
    let ret = {
      data: {},
      msg: error.message
    };
    ret[config.status_code_key_name] = -1;

    return Promise.reject(ret);
  }
);

export const get = axiosIns.get;
export const post = axiosIns.post;
export const all = axiosIns.all;
export const spread = axiosIns.spread;
