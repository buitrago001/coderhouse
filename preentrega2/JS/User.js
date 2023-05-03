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

    newUser = (userInformation) => {
        for (i = 0; i<userInformation.length; i++)
        {
            this.firstName = userInformation[i]
        }
    }

    deleteUser = (email) =>{

    }

    searchUser = (email, password) => {
        // search function within the object array
        return false;
    }

    userType = (userName) =>{
        // search if userName is client or employee
        return 'empleado';
    }
}