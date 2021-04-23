import axios from "axios";
import queryString from "query-string";
import { get, isEmpty } from "lodash";
import cookieService from "./cookieService";
import devConfig from "configs/dev.config";
import prodConfig from "configs/prod.config";

class RestClientService {
  token: string;
  domain: string;
  defaultContentType: string;
 
  constructor() {
    this.token = null;
    this.domain = "";
    this.defaultContentType = "application/json";
  }

  getToken() {
    return cookieService.getCookie("token");
  }

  setDomain(domain:any) {
    this.domain = domain;
  }

  createAuthorization() {
    return `Bearer ${this.getToken()}`;
  }

  createHeaders(options = { contentType: "application/json" }) {
    return {
      "Content-Type": get(options, "contentType", this.defaultContentType),
      Authorization: this.createAuthorization(),
    };
  }

  createApi(url:any, query = {}) {
    return `${this.domain}${url}${
      !isEmpty(query) ? `?${queryString.stringify(query)}` : ""
    }`;
  }

  asyncGet(url:any, query = {}, options = { contentType: "application/json" }) {
    return axios.get(this.createApi(url, query), {
      headers: this.createHeaders(options),
    });
  }

  asyncPost(url:any, data = {}, options = { contentType: "application/json" }) {
    return axios.post(this.createApi(url), data, {
      headers: this.createHeaders(options),
    });
  }

  asyncAll(requests:any) {
    return axios
      .all(
        requests.map((req:any) => {
          if (req.method === "get") {
            return this.asyncGet(req.url, req.query || {}, req.options || {});
          }

          return this.asyncPost(req.url, req.data || {}, req.options || {});
        })
      )
      .then(
        axios.spread((...responses) =>
          responses.map((res) => get(res, "data", null))
        )
      );
  }
}

const restClientService = new RestClientService();
restClientService.setDomain(
  // process.env.NODE_ENV === "development"
  //   ? devConfig.BACKEND_ADDRESS
  //   : prodConfig.BACKEND_ADDRESS
  "http://206.189.145.95:5000"
);

export default restClientService;
