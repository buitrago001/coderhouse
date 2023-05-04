class User {
    firstName;
    lastName;
    phoneNumber;
    email;
    password;
    role;

    constructor(firstName, lastName, phoneNumber, email, password, role)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.password = password;
        this.role = role;
    }

    createUser = (userInformation) => {
        // todo adjust function/method to work with a array of object
        const newUser = Object.fromEntries(userInformation);
        return newUser;
    }

    deleteUser = (email) =>{
// todo pending to create and test function
    }

    userSearch = (email, userArray) => { // function for individual object
        // todo adjust function/method to work with a array of object
        // let userArray = Object.values(user);
        // if(email == userArray[3]) {
        //     return true;
        // } else{
        //     return false;
        // }
    }

    userType = (user) =>{
        // search if userName is client or employee
        let userArray = Object.values(user);
            return userArray[5];
    }
}