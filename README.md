# MEIA ENTRADA OTP

### to install
```javascript
npm install meiaentrada-otp --save
```

## Methods
`generateKey()`
Gera uma string na base32 de 32 caracteres (120 bits)

`generateOtpURI(secret, user, issuer)`
Gera uma URI dentro dos padróes estabelecidos [aqui](https://github.com/google/google-authenticator/wiki/Key-Uri-Format "UR FORMAT")

`isValidTokenOTP(secret, token)`
Valida o token baseado no tempo com uma janela de tempo de aproximadamente 30 segundos

`generateTokenOTP()`
