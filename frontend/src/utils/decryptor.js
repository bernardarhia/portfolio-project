import CryptoJS from 'crypto-js'


function encrypt(data){
   return CryptoJS.AES.encrypt(data, process.env.REACT_APP_SUPER_WEIRD_SECRET).toString();
   
}
 
function decrypt(data){
    const bytes  = CryptoJS.AES.decrypt(data, process.env.REACT_APP_SUPER_WEIRD_SECRET);
    return bytes.toString(CryptoJS.enc.Utf8);
     
}
export {encrypt, decrypt}