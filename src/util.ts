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

const performanceTiming = () => {
  const start = performance.now();
  for (let i = 0; i < 1000000; i++) {}
  const end = performance.now();
  return end - start > 10; // Adjust threshold based on testing
};

const IndexedDBAvailability = (): Promise<boolean> => {
  return new Promise<boolean>((resolve) => {
    const dbName = 'incognitoTestDB';
    const request = indexedDB.open(dbName);

    request.onsuccess = () => {
      indexedDB.deleteDatabase(dbName);
      resolve(false); // Not in Incognito mode
    };

    request.onerror = () => {
      resolve(true); // Likely in Incognito mode
    };
  });
};

const LSSSCheck = () => {
  try {
    const testKey = 'greipIncognitoTest';
    window.localStorage.setItem(testKey, 'test');
    window.localStorage.removeItem(testKey);
    return false; // Not in Incognito mode
  } catch (e) {
    return true; // Likely in Incognito mode
  }
};

const FileSystemAPIQuotaCheck = async () => {
  try {
    const storage = await navigator.storage.estimate();
    return !storage.quota || storage.quota < 120000000; // Incognito mode often has a very small quota
  } catch (e) {
    return false;
  }
};

const ServiceWorkerCheck = () => {
  return !('serviceWorker' in navigator);
};

export const detectIncognito = async (callback: (is_incognito: boolean) => void) => {
  if (performanceTiming()) {
    callback(true);
    return true;
  }

  await IndexedDBAvailability().then((is_incognito: boolean) => {
    callback(is_incognito);
    return is_incognito;
  });

  if (LSSSCheck()) {
    callback(true);
    return true;
  }

  if (await FileSystemAPIQuotaCheck()) {
    callback(true);
    return true;
  }

  if (ServiceWorkerCheck()) {
    callback(true);
    return true;
  }

  callback(false);
  return false;
};
