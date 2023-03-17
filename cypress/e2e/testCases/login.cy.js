import Login from "../pageObjects/login";

const login = new Login()

it('visit login page', function () {
    login.login()
}); 