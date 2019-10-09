const otp = require('./otp.js'),
      secret = otp.generateKey(),
      QRCode = require('qrcode')

const elem = {
  canvas: document.getElementById('img-qr-code'),
  cpf: document.getElementById('txt-cpf'),
  issuer: document.getElementById('txt-issuer'),
  token: document.getElementById('txt-otp-token'),
  btnGenerate: document.getElementById('btn-generate'),
  btnCheckToken: document.getElementById('btn-check-token'),
  validation: document.getElementById('token-validation')
}

generateQrCode = () => {
  let uri = otp.generateOtpURI(secret, elem.cpf.value, elem.issuer.value)

  QRCode.toCanvas(elem.canvas, uri, function (error) {
    if (error) console.error(error)
    console.log('success!', uri)
  })
}

validateOtpToken = () => {
  otp.isValidTokenOTP(secret, elem.token.value) 
    ? elem.validation.style.backgroundColor = 'green' 
    : elem.validation.style.backgroundColor = 'red'
}

elem.btnGenerate.addEventListener('click', generateQrCode)
elem.btnCheckToken.addEventListener('click', validateOtpToken)
