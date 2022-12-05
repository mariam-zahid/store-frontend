/* eslint-disable no-underscore-dangle */

import Axios from "axios";
import queryString from "querystring";

export const hostname = () => {
  let hostUrl = "";

  // hostUrl = "https://api.shivazhandloom.com/api";
  hostUrl = "http://localhost:5000/api";
  return hostUrl;
};

/**
 * Use this to get backend appliation domain
 * @returns
 */
// export const hostnameBackend = () => 'https://api.shivazhandloom.com';

const hostUrl = hostname();
export const makeUrl = ({ uri, pathParams, query, version }, host) => {
  return `${host || hostUrl}${version}${uri
    .split("/")
    .map((param) =>
      param.charAt(0) === ":"
        ? encodeURI(pathParams?.[param.slice(1)] || "")
        : param
    )
    .join("/")}${query ? `?${queryString.stringify(query)}` : ""}`;
};

export const getDefaultHeaders = () => ({
  authorization: localStorage.getItem("accessToken") || null,
  "Content-Type": "application/json",
});

export const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
});

const callAxios = ({ uriEndPoint, pathParams, query, body, apiHostUrl }) =>
  Axios({
    method: uriEndPoint.method,
    url: makeUrl({ ...uriEndPoint, pathParams, query }, apiHostUrl),
    withCredentials: true,
    headers: {
      ...getDefaultHeaders(),
      ...uriEndPoint.headerProps,
    },
    data: body || {},
  });

export function callApi({ uriEndPoint, pathParams, query, body, apiHostUrl }) {
  return new Promise((resolve, reject) => {
    callAxios({
      uriEndPoint,
      pathParams,
      query,
      body,
      apiHostUrl,
    })
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        console.log(err);
        // if (!err.response) {
        //   reject({ isServerUnreachable: true });

        //   return;
        // }
        reject(err);
      });
  });
}
