// Create emploee constructor
class Employee {
    constructor (name, id,email){
        this.name = name;
        this.id = id;
        this.email = email
    }

    // Running the function getName that will give back input
    getName(){
        return this.name;
    }

    // Running the function to get ID input
    getId(){
        return this.id;
    }

    //Returning email
    getEmail(){
        return this.email;
    }

    //return role 'employee'
    getRole(){
        return 'Employee';
    }
};

module.exports = Employee