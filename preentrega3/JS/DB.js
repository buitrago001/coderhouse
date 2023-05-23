const customerUserTest = new User(
    'User',
    31111111,
    'John User',
    'client_test@test.com',
    '123456C',
    'client'
)

const employeeUserTest = new User(
    'employee',
    31111111,
    'John Employee',
    'employee_test@test.com',
    '123456E',
    'employee'
)

const adminUserTest = new User(
    'admin',
    31111111,
    'John admin',
    'admin_test@test.com',
    '123456A',
    'admin'
)

const userArray = [customerUserTest, employeeUserTest, adminUserTest]