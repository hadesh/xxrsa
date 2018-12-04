import BASE64 from "./base64.js"
import RSAKey from "./xxrsa.js"

class MyRSA {
  static encrypt(data, key) {

      var rsa = new RSAKey();
      // rsa.setPublic(key);
      // console.log("aaa :", data, key);
      rsa.setPublic(key, "10001");
      var res = rsa.encrypt(data);
      var b64res = BASE64.xhex2b64(res);
      return b64res;
  }
}

export default MyRSA;