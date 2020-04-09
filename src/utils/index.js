import request from './apiRequest';

const getNumberArray = (length) => Array.from(Array(length).keys());

export {
  request,
  getNumberArray,
}