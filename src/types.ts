export interface Options {
  ips?: string[];
  ip?: string;
  source?: string;
  key?: string;
  params?: string[];
  format?: string;
  lang?: string;
  mode?: string;
  countryCode?: string;
  text?: string;
  asn?: string;
  email?: string;
  phone?: string;
  data?: {
    [key: string]: string | number | string[] | object | boolean;
  };
}


