# MEIA ENTRADA OTP
This is a simple library to implement features based on OTP (One-Time Password) algorithms, more specific TOTP algorithm. OTP algorithms are commonly used to implement two factor authentication (2FA).
There are two algorithms: HOTP(HMAC-based One-Time Password) and TOTP(Time-Based One-Time Password):
- **HOTP**
	This algorithm generates a otp code based in a secret, current timestamp and a event counter, see [RFC 4226](https://www.ietf.org/rfc/rfc4226.txt "RFC 4226").
- **TOTP**
	This algorithm generates the otp code based in a secret and current timestamp. see [RFC 6238](https://www.ietf.org/rfc/rfc6238.txt "RFC 6238")

## To install
To install and save this  dependencie in ***package.json***:
```javascript
npm i meiaentrada-otp --save
```
To simple install:
```javascript
npm i meiaentrada-otp
```

## Knowledge
- **secret:**
	A unique key value per user to generate otp values;
	For example: *"secret_of_client_01"*

- **holder:**
	A value to represent a people or entity that is using otp value like a client.
	For example: *"bank_01"*

- **issuer:**
	A value to represent the website or enterprise that is generating otp values to clients.
	For example: *"bank_client_01"*

- **otp value:**
	A positive number with 6 characters.
	For example: *"123456"*

## Methods
`generateKey()`
Generates a 32-character (160-bit) base32 key

`generateOtpURI(secret, holder, issuer)`
Generate a URI base on OTPAUTH protocol - [for more info](https://github.com/google/google-authenticator/wiki/Key-Uri-Format "UR FORMAT"). There is only a exception, the holder information is present on the URI params.

`isValidTokenOTP(secret, otpValue)`
Validates a time-based token within a +/- 30 second (90 seconds) window.
Return true or false in according with secret, current timestamp and otp value.

`generateTokenOTP(secret)`
Generates a 6-digit (20-bit) decimal time-based token

## Usage
```javascript
const otp = require('meiaentrada-otp');

const secret = otp.generateKey();
console.log(secret); // "igxo jj5n gpuj gv4c lotw ve7d tmlu xftb"

const holder = 'user_01';
const issuer = 'enterprise_01';

const uri = otp.generateOtpURI(secret, holder, issuer);
console.log(uri); // otpauth://totp/enterprise_01:user_01?secret=7MEYUZ52337HOOKX25GE3RVIMQ6MJK4O&issuer=enterprise_01&algorithm=SHA1&digits=6&period=30&holder=user_01

const otpCode = otp.generateTokenOTP(secret);
console.log(otpCode); // 774729

let isValidToken = otp.isValidTokenOTP(secret, otpCode);
console.log(isValidToken); // true

isValidToken = otp.isValidTokenOTP('wrong-secret', otpCode);
console.log(isValidToken); // false
```
