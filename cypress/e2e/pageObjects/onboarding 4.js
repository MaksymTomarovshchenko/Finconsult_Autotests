import Locators from "./locators";

const locators = new Locators()

class Onboarding4 {
    Onboarding4(){
        //Открыть ссылку на четвертую страницу онбординга
        locators.visitLoginPageURL()
        locators.getEmailField().type('user.test.keen1@gmail.com')
        locators.getPasswordField().type('Test123!')
        locators.getLoginButton().click()
        if (locators.getTitle4()) {
            locators.visitOnboarding4PageURL()}
        //Добавить новую статью доходов
        locators.getNewAccountButton().click()
        locators.getIncomeItem().type('Статья дохода автотест один')
        locators.getDescription().eq(1).type('Описание для статьи доходов автотеста')
        locators.getSaveButton().click()
        //Редактирование статьи
        locators.getRSell().eq(26).should('contain.text','Описание для статьи доходов автотеста').click()
        locators.getIncomeItem().clear()
        locators.getIncomeItem().type('Статья дохода автотест')
        locators.getSaveButton().click()
        //Удаление статьи
        locators.getRSell().eq(26).should('contain.text','Описание для статьи доходов автотеста').click()
        locators.getDeleteButton().should('contain.text','Удалить').click()
    }
}
export default Onboarding4
