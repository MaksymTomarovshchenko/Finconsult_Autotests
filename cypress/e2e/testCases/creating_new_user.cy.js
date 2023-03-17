import creating_new_user from "../pageObjects/creating_new_user";

const Creating_new_user = new creating_new_user()

it('creating new user page', function () {
    Creating_new_user.Creating_new_user()
});