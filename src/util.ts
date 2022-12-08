import axios from 'axios';
import { Options } from './types';

export const baseURL = 'https://gregeoip.com/';
export const availableGeoIPParams = ['location', 'security', 'timezone', 'currency', 'device'];
export const availableLanguages = ['EN', 'AR', 'DE', 'FR', 'ES', 'JA', 'ZH', 'RU'];
export const availableFormats = ['JSON', 'XML', 'CSV', 'Newline'];
export const availableCountryParams = ['language', 'flag', 'currency', 'timezone'];

export const serialize = (obj: any) => {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
    }
  return str.join('&');
};

export const makeHttpRquest = (endpoint: string, options: any, callback: Function) => {
  options.source = 'JS-Package';

  axios
    .get(baseURL + '/' + endpoint + '?' + serialize(options))
    .then(function (response) {
      if (response.status === 200) {
        callback(response.data);
      } else {
        throw new Error('An unknown error occurred while sending the request to GRE GeoIP API.');
      }
    })
    .catch(function (error) {
      console.error(error);
      throw new Error('An unknown error occurred while sending the request to GRE GeoIP API.');
    });
};
