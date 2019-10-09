const authenticator = require('authenticator'),
      window = 30,
      digits = 6,
      algo = 'SHA1'

generateTokenOTP = (secret) => authenticator.generateToken(secret)

isValidTokenOTP = (secret, token) => {
    let delta = authenticator.verifyToken(secret, token);
    return delta !== null && delta.delta == 0
}

generateOtpURI = (secret, user, issuer) => authenticator.generateTotpUri(secret, user, issuer, algo, digits, window)

generateKey = () => authenticator.generateKey()

module.exports = {
    generateKey,
    generateOtpURI,
    isValidTokenOTP,
    generateTokenOTP
}