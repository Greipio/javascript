import axios from 'axios';

export const baseURL = 'https://greipapi.com';
export const availableGeoIPParams = ['location', 'security', 'timezone', 'currency', 'device'];
export const availableLanguages = ['EN', 'AR', 'DE', 'FR', 'ES', 'JA', 'ZH', 'RU'];
export const availableFormats = ['JSON', 'XML', 'CSV', 'Newline'];
export const availableCountryParams = ['language', 'flag', 'currency', 'timezone'];

export const serialize = (obj: any) => {
  const str = [];
  for (const p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
    }
  return str.join('&');
};

export const makeHttpRquest = (endpoint: string, options: any, callback: (data: object) => void, headers?: any) => {
  options.source = 'JS-Package';

  axios
    .get(baseURL + endpoint + '?' + serialize(options), {
      headers,
    })
    .then((response) => {
      if (response.status === 200) {
        callback(response.data);
      } else {
        throw new Error('An unknown error occurred while sending the request to Greip API.');
      }
    })
    .catch((error) => {
      throw new Error('An unknown error occurred while sending the request to Greip API.');
    });
};

export const makePostRquest = (endpoint: string, options: any, callback: (data: object) => void) => {
  options.source = 'JS-Package';

  axios
    .post(baseURL + '/' + endpoint, options)
    .then((response) => {
      if (response.status === 200) {
        callback(response.data);
      } else {
        throw new Error('An unknown error occurred while sending the request to Greip API.');
      }
    })
    .catch((error) => {
      throw new Error('An unknown error occurred while sending the request to Greip API.');
    });
};

export const getGFP = () => {
  try {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const primary_language = navigator.language;
    const preferred_languages = navigator.languages;
    const screen_width = window.screen.width;
    const screen_height = window.screen.height;
    const plugins =
      typeof navigator.plugins !== 'undefined' ? Array.from(navigator.plugins).map((plugin) => plugin.name) : null;

    let gfpData = {
      timezone,
      primary_language,
      preferred_languages,
      screen_width,
      screen_height,
      plugins,
    };

    const gfp_data = JSON.stringify(gfpData);

    return gfp_data;
  } catch (error) {
    return null;
  }
};
