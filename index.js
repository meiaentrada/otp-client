const authenticator = require('authenticator'),
    window = 30,
    digits = 6,
    algo = 'SHA1'

generateTokenOTP = (secret) => authenticator.generateToken(secret)

isValidTokenOTP = (secret, otpValue) => {
    let delta = authenticator.verifyToken(secret, otpValue);
    return delta !== null && delta.delta == 0
}

generateOtpURI = (secret, holder, issuer) => authenticator.generateTotpUri(secret, holder, issuer, algo, digits, window) + "&holder=" + holder

generateKey = () => authenticator.generateKey()

module.exports = {
    generateKey,
    generateOtpURI,
    isValidTokenOTP,
    generateTokenOTP
}