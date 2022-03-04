export class User{
    static usersNumber = 0;

    constructor(name, email){
        this.#name = name;
        this.#email = email;

        User.usersNumber ++;
    };

    get name(){
        return this.#name;
    };

    get email(){
        return this.#email
    };
};