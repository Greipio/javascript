import axios from 'axios';

export const baseURL = 'https://v2.greipapi.com';
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

const unwrapResponse = (body: any) => {
  if (body?.success === true && body.data !== undefined) {
    return body.data;
  }
  return body;
};

export const makeHttpRquest = (
  endpoint: string,
  options: any,
  callback: (data: object) => void,
  headers?: any,
) => {
  options.source = 'JS-Package';
  const token = options.key;
  delete options.key;

  const requestHeaders: Record<string, string> = { ...(headers || {}) };
  if (token) {
    requestHeaders.Authorization = `Bearer ${token}`;
  }

  const axiosConfig =
    Object.keys(requestHeaders).length > 0 ? { headers: requestHeaders } : undefined;

  const path = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  const query = serialize(options);

  axios
    .get(`${baseURL}${path}${query ? `?${query}` : ''}`, axiosConfig)
    .then((response) => {
      if (response.status === 200) {
        callback(unwrapResponse(response.data));
      } else {
        throw new Error('An unknown error occurred while sending the request to Greip API.');
      }
    })
    .catch(() => {
      throw new Error('An unknown error occurred while sending the request to Greip API.');
    });
};

export const makePostRquest = (endpoint: string, options: any, callback: (data: object) => void) => {
  options.source = 'JS-Package';
  const token = options.key;
  delete options.key;

  const headers = token ? { Authorization: `Bearer ${token}` } : undefined;
  const path = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;

  axios
    .post(`${baseURL}/${path}`, options, headers ? { headers } : undefined)
    .then((response) => {
      if (response.status === 200) {
        callback(unwrapResponse(response.data));
      } else {
        throw new Error('An unknown error occurred while sending the request to Greip API.');
      }
    })
    .catch(() => {
      throw new Error('An unknown error occurred while sending the request to Greip API.');
    });
};

export const getGFP = () => {
  try {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const primaryLanguage = navigator.language;
    const preferredLanguages = navigator.languages;
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const plugins =
      typeof navigator.plugins !== 'undefined' ? Array.from(navigator.plugins).map((plugin) => plugin.name) : null;

    const gfpData = JSON.stringify({
      timezone,
      primary_language: primaryLanguage,
      preferred_languages: preferredLanguages,
      screen_width: screenWidth,
      screen_height: screenHeight,
      plugins,
    });

    return gfpData;
  } catch (error) {
    return null;
  }
};
