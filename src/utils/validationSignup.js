import Validation from "./validation";

export default class singupValidation {
    constructor(email, password,fullName) { 
        this.email = email;
        this.password = password;
        this.fullName = fullName;
    }

    checkValidation() {
        let error = [];
        if(Validation.checkEmpty(this.fullName)){
            error['checkEmptyName'] = 'Name is required'
        }

        if(!Validation.checkEmail(this.email)) {
            error['email'] = 'Invalid email';
        }

        if(!Validation.minLength(this.password, 6)) {
            error['password'] = 'Password must be at least 6 characters';
        }
        return error;
    }
}