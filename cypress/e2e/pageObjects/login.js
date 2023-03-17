import Locators from "./locators";

const locators = new Locators()
class Login {
    login(){
        //Открыть ссылку
        locators.visitLoginPageURL()
        //Ввод правильного логина и незаполнение пароля
        locators.getEmailField().type('user.test.keen1@gmail.com')
        locators.getLoginButton().click()
        locators.getWrongTitle1().should('contain.text','Пароль')
        locators.getWrongTitle2().should('contain.text',' - обязательно')
        locators.getEmailField().clear();
        //Ввод правильного пароля и незаполнение логина
        locators.getPasswordField().type('Test123!')
        locators.getEyeButton().click()
        locators.getLoginButton().click()
        locators.getWrongTitle1().should('contain.text','Email')
        locators.getWrongTitle2().should('contain.text',' - обязательно')
        locators.getPasswordField().clear();
        //Ввод неправильного пароля и валидного логина
        locators.getEmailField().type('user.test.keen1@gmail.com')
        locators.getPasswordField().type('Test123')
        locators.getLoginButton().click()
        locators.getTitle3().should('contain.text','Введен неверный пароль, ')
        locators.getPasswordField().clear();
        //Ввод неправильного логина и валидного пароля
        locators.getPasswordField().type('Test123!')
        locators.getEmailField().clear();
        locators.getEmailField().type('test.keen1@gmail.com')
        locators.getLoginButton().click()
        locators.getTitle3().should('contain.text','Такого пользователя нет, ')
        //Работа ссылки на регистрацию
        locators.getLinkRegistration().eq(0).click()
        locators.getTitle2().should("contain.text",'Создать аккаунт')
        locators.getLinkLogin().click()
        locators.getTitle2().should('contain','Вход')
        locators.getEmailField().clear();
        locators.getPasswordField().clear();
        //Вход с вводом правильного пароля в E-mail и наоборот
        locators.getEmailField().type('Test123!')
        locators.getPasswordField().type('user.test.keen1@gmail.com')
        locators.getLoginButton().click()
        //Ввод валидных логина и пароля
        locators.getEmailField().clear();
        locators.getPasswordField().clear();
        locators.getEmailField().type('user.test.keen1@gmail.com')
        locators.getPasswordField().type('Test123!')
        //Нажать кнопку Вход
        locators.getLoginButton().click()
          }
}
export default Login