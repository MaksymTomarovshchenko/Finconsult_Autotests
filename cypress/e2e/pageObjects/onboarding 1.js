import Locators from "./locators";

const locators = new Locators()

class Onboarding1{
    Onboarding1(){
       //Открыть ссылку на первую страницу онбординга
        locators.visitLoginPageURL()
        locators.getEmailField().type('user.test.keen1@gmail.com')
        locators.getPasswordField().type('Test123!')
        locators.getLoginButton().click()
        if (locators.getTitle4()) {
                locators.visitOnboarding1PageURL()}
        //Обязательность полей
        locators.getCompanyFullName().clear()
        locators.getCompanyShortName().clear()
        locators.getTaxNumber().clear()
        if(locators.getContactPhone()) {
                locators.getCheckbox().eq(0).click()
                locators.getCheckbox().eq(0).click()}
        if(locators.getSelector().eq(0)) {
            locators.getCheckbox().eq(1).click()
            locators.getCheckbox().eq(1).click()}
        if(locators.getSelector().eq(1)) {
            locators.getCheckbox().eq(2).click()
            locators.getCheckbox().eq(2).click()}
        //locators.getCheckbox().eq(1).click()
        //locators.getCheckbox().eq(2).click()
        locators.getNextButton().click()
        locators.getWrongTitle1().eq(0).should('contain.text','Наименование')
        locators.getWrongTitle2().eq(0).should('contain.text',' - обязательно')
        locators.getWrongTitle1().eq(1).should('contain.text','Сокращенное название')
        locators.getWrongTitle2().eq(1).should('contain.text',' - обязательно')
        locators.getWrongTitle1().eq(2).should('contain.text','Налоговый номер')
        locators.getWrongTitle2().eq(2).should('contain.text',' - обязательно')
        locators.getWrongTitle1().eq(4).should('contain.text','Номер телефона')
        locators.getWrongTitle2().eq(3).should('contain.text',' - обязательно')
        locators.getWrongTitle1().eq(5).should('contain.text','Email')
        locators.getWrongTitle2().eq(4).should('contain.text',' - обязательно')
        locators.getWrongTitle1().eq(10).should('contain.text','Почтовый индекс')
        locators.getWrongTitle2().eq(5).should('contain.text',' - обязательно')
        locators.getWrongTitle1().eq(13).should('contain.text','Почтовый индекс')
        locators.getWrongTitle2().eq(6).should('contain.text',' - обязательно')
        //Ввод валидных данных Фирмы
        locators.getCompanyFullName().type('Тестовая компания')
        locators.getCompanyShortName().type('Тест')
        locators.getTaxNumber().type('123456')
        //Ввод валидной Контактной информации
        locators.getContactPhone().type('+380999999999')
        locators.getContactEmail().type('user.test.keen1@gmail.com')
        locators.getContactWebsite().type('https://finconsult.fly.dev/')
        locators.getContactPerson().type('Тестовое лицо')
        //Ввод валидного Юридического адреса
        locators.getSelector().eq(0).click()
        locators.getSelectorData().eq(0).should('contain.text','Польша').click()
        locators.getCity().type('Варшава')
        locators.getAdress().eq(0).type('ул. Перспективная, 41, кв.128')
        locators.getPostalCode().eq(0).type('010101')
        //Ввод валидного адреса Корреспонденции
        locators.getSelector().eq(1).click()
        locators.getSelectorData().eq(1).should('contain.text','Польша').click()
        locators.getCity2().type('Краков')
        locators.getAdress2().type('ул. Неперспективная, 14, кв.256')
        locators.getPostalCode2().type('121212')
        locators.getNextButton().click()
        locators.getTitleAccountingCurrency()
            }
}
export default Onboarding1