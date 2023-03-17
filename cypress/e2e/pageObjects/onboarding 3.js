import Locators from "./locators";

const locators = new Locators()

class Onboarding3 {
    Onboarding3(){
        //Открыть ссылку на третью страницу онбординга
        locators.visitLoginPageURL()
        locators.getEmailField().type('user.test.keen1@gmail.com')
        locators.getPasswordField().type('Test123!')
        locators.getLoginButton().click()
        if (locators.getTitle4()) {
                locators.visitOnboarding3PageURL()}
        //Добавить новый счёт
        locators.getNewAccountButton().click()
        //Обязательность полей
        locators.getSaveButton().click()
        //!!!!!!!!!!!!!!!!!!!!!Обязательность поля ТипСчета!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        //locators.getWrongTitle1().should('contain.text','Тип счета')
        //locators.getWrongTitle2().eq(0).should('contain.text',' - обязательно')
        locators.getWrongTitle1().should('contain.text','Наименование')
        locators.getWrongTitle2().eq(0).should('contain.text',' - обязательно')
        locators.getWrongTitle1().should('contain.text','Стартовый баланс (пример: 34745,72)')
        locators.getWrongTitle2().eq(1).should('contain.text',' - обязательно')
        //locators.getCalendar().click()
        locators.getSelector().click()
        locators.getSelectorData().eq(0).should('contain.text','Наличный').click()
        locators.getName().type('Счёт для автотеста один')
        locators.getStartBalance().type('1000')
        locators.getDescription().eq(1).type('Счёт не редактированый')
        locators.getSaveButton().click()
        locators.getRSell().eq(47).should('contain.text','Счёт для автотеста один')
        //Редактирование счёта
        locators.getRSell().eq(47).should('contain.text','Счёт для автотеста один').click()
        locators.getSelector().click()
        locators.getSelectorData().eq(1).should('contain.text','Безналичный').click()
        locators.getName().clear()
        locators.getName().type('Счёт для автотеста')
        locators.getStartBalance().clear()
        locators.getStartBalance().type('1001')
        locators.getDescription().eq(1).clear()
        locators.getDescription().eq(1).type('Счёт уже отредактированый')
        locators.getSaveButton().click()
        //Удаление счета
        locators.getRSell().eq(47).should('contain.text','Счёт для автотеста').click()
        locators.getDeleteButton().should('contain.text','Удалить').click()
        locators.getRSell().should('not.contain.text','Счёт для автотеста')
    }
}
export default Onboarding3