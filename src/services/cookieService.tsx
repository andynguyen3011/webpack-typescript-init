import { parseCookies, setCookie, destroyCookie } from "nookies";

class CookieService {
  getCookie(field:string) {
    return parseCookies(null)[field];
  }

  updateCookie = (field:string, value:string) => {
    setCookie(null, field, value, { path: "/" });
  };

  deleteCookie = (field:string) => {
    destroyCookie(null, field, { path: "/" });
  };
}

export default new CookieService();
