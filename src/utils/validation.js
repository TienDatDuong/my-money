export default class Validation {
    static checkEmail(email) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
            {
            return (true)
            }
        return (false)  
    }

    static minLength(string, length) {
        if (string.length < length) {
            return false;
        }
        return true;
    }

    static checkEmpty(string){
        if(!!string){
            return false
        }
        return true
    }
}