import Locators from "./locators"

const locators = new Locators()

class Creating_new_user {

    Creating_new_user(){
        //Переход на страницу логина
        locators.visitLoginPageURL()
        locators.getCreateNewUserButton().click()
        locators.getLinkLogin().click()
        locators.getTitle2().should('contain','Вход')
        //Обязательность полей
        locators.visitLoginPageURL()
        locators.getCreateNewUserButton().click()
        locators.getNextButton().click()
        locators.getWrongTitle1().eq(0).should('contain.text','Имя')
        locators.getWrongTitle2().eq(0).should('contain.text',' - обязательно')
        locators.getWrongTitle1().eq(1).should('contain.text','Email')
        locators.getWrongTitle2().eq(1).should('contain.text',' - обязательно')
        locators.getWrongTitle1().eq(2).should('contain.text','Пароль')
        locators.getWrongTitle2().eq(2).should('contain.text',' - обязательно')
        locators.getWrongTitle1().eq(3).should('contain.text','Подтверждение пароля')
        locators.getWrongTitle2().eq(3).should('contain.text',' - обязательно')
        locators.getCheckboxNecessary().should('contain.text','Вам необходимо согласиться с политикой конфиденциальности')
        //Валидация поля Имя
        locators.getName().type('123')
        locators.getNextButton().click()
        locators.getWrongTitle1().should('contain.text','Имя')
        locators.getWrongTitle2().should('contain.text',' - можно использовать только буквы')
        locators.getName().clear()
        locators.getName().type('Test!')
        //Валидация поля Email
        locators.getEmailField().type('@gmail.com')
        locators.getNextButton().click()
        locators.getWrongTitle1().should('contain.text','Email')
        locators.getWrongTitle2().should('contain.text',' - не валидный емейл адрес')
        locators.getEmailField().clear()
        locators.getEmailField().type('test@gmailcom')
        locators.getNextButton().click()
        locators.getWrongTitle1().should('contain.text','Email')
        locators.getWrongTitle2().should('contain.text',' - не валидный емейл адрес')
        locators.getEmailField().clear()
        locators.getEmailField().type('testgmail.com')
        locators.getNextButton().click()
        locators.getWrongTitle1().should('contain.text','Email')
        locators.getWrongTitle2().should('contain.text',' - не валидный емейл адрес')
        locators.getEmailField().clear()
        locators.getEmailField().type('test@.com')
        locators.getNextButton().click()
        locators.getWrongTitle1().should('contain.text','Email')
        locators.getWrongTitle2().should('contain.text',' - не валидный емейл адрес')
        locators.getEmailField().clear()
        locators.getEmailField().type('user.test.keen1@gmail.com')
        locators.getNextButton().click()
        //Валидация поля Пароль
        locators.getPasswordField().type('123')
        locators.getNextButton().click()
        locators.getWrongTitle1().should('contain.text','Пароль')
        locators.getWrongTitle2().should('contain.text',' - должен содержать минимум 5 символов')
        locators.getPasswordField().clear()
        locators.getPasswordField().type('Test123!')
        locators.getEyeButton().eq(0).click()
        locators.getNextButton().click()
        //Валидация поля Подтвердите пароль
        locators.getPasswordConfirmField().type('Test123')
        locators.getNextButton().click()
        locators.getWrongTitle1().should('contain.text','Подтверждение пароля')
        locators.getWrongTitle2().should('contain.text',' - пароли не совпадают')
        locators.getPasswordConfirmField().clear()
        locators.getPasswordConfirmField().type('Test123!')
        locators.getEyeButton().eq(1).click()
        locators.getNextButton().click()
        //Линк политика конфиденциальности
        locators.getLinkPrivacyPolicy().click()
        locators.getTitle().should('contain.text','РЕГЛАМЕНТ  ВЕБ-ПЛАТФОРМЫ')
        locators.getCloseButton().click()
        locators.getCheckbox().click()
        locators.getCheckbox().click()
        locators.getNextButton().click()
        locators.getTitle2().should('contain.text','Подтвердите email')
           }

}
export default Creating_new_user