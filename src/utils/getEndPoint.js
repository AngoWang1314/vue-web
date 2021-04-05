/**
 * @desc 运行终端获取
 * @return {String}
 */
export function getEndPoint() {
  if (window) {
    return 'web';
  }
  if (global) {
    return 'react-native';
  }
}
