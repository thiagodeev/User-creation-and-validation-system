export class User{
    static numberOfUsers = 0;

    constructor(name, email){
        this.#name = name;
        this.#email = email;

        User.numberOfUsers ++;
    };

    get name(){
        return this.#name;
    };

    get email(){
        return this.#email
    };
};