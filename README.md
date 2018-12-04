# xxrsa
```
import myRSA from './myRSA.js';

let res = myRSA.encrypt(content, publickey);
console.log("onEncrypt:", res);
```

publickey is modulus:
use openssl :
`openssl rsa -in privatekey.pem -noout -modulus`

or

`openssl rsa -pubin -in taxipubtest.txt -text -noout -modulus`


http://www-cs-students.stanford.edu/~tjw/jsbn/


