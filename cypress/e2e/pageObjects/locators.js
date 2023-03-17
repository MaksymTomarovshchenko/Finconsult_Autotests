
class Locators {

    visitLoginPageURL(){
        cy.visit('https://finconsult.fly.dev/')
    }
    visitOnboarding1PageURL(){
        cy.visit('https://finconsult.fly.dev/onboarding/1')
    }
    visitOnboarding3PageURL(){
        cy.visit('https://finconsult.fly.dev/onboarding/3')
    }
    visitOnboarding4PageURL(){
        cy.visit('https://finconsult.fly.dev/onboarding/4')
    }
    getCreateNewUserButton(){
        return cy.get('.text-component').contains('Создать аккаунт')
    }
    getName() {
        return cy.get('[name="name"]')
    }
    getCompanyFullName(){
        return cy.get('[name="fullName"]')
    }
    getCompanyShortName(){
        return cy.get('[name="shortName"]')
    }
    getTaxNumber(){
        return cy.get('[name="taxNumber"]')
    }
    getEyeButton(){
        return cy.get('[class="eye-icon"]')
    }
    getCheckboxNecessary(){
        return cy.get('[class="text-component err-msg regular"]')
    }
    getCheckbox(){
        return cy.get('[type="checkbox"]')
    }
    getLinkPrivacyPolicy(){
        return cy.get('[class="text-component link-accent regular"]')
    }
    getTitle(){
        return cy.get('[class="legal-data"]')
    }
    getTitle2(){
        return cy.get('[class="form-block"]')
    }
    getTitle3(){
        return cy.get('[class="content"]')
    }
    getTitle4(){
        return cy.get('[class="page"]').should('contain.text','Сводные показатели')
    }
    getCloseButton(){
        return cy.get('[class="close-btn"]')
    }
    getLinkRegistration(){
        return cy.get('[href="/signup"]').should('contain.text','зарегистрируйтесь.')
    }
    getLinkLogin(){
        return cy.get('[class="text-component link-accent bold pointer regular"]')
    }
    getNextButton(){
        return cy.get('.main-button').contains('Далее')
    }
    getSaveButton(){
        return cy.get('.main-button').contains('Сохранить')
    }
    getEmailField(){
        return cy.get('[name="email"]')
    }
    getPasswordField(){
        return cy.get('[name="password"]')
    }
    getPasswordConfirmField(){
        return cy.get('[name="confirmPassword"]')
    }
    getWrongTitle1(){
        return cy.get('.label-itself')
    }
    getWrongTitle2(){
        return cy.get('.error-msg')
    }
    getLoginButton(){
        return cy.get('.main-button').contains('Вход')
    }
    getContactPhone(){
        return cy.get('[name="contactInfo.phone"]')
    }
    getContactEmail(){
        return cy.get('[name="contactInfo.email"]')
    }
    getContactWebsite(){
        return cy.get('[name="contactInfo.website"]')
    }
    getContactPerson(){
        return cy.get('[name="contactInfo.contactPerson"]')
    }
    getSelector(){
        return cy.get('[class="icon"]')
    }
    getSelectorData(){
        return cy.get('[class="text-component select-item regular"]')
    }
    getCity(){
        return cy.get('[name="legalAddress.city"]')
    }
    getCity2(){
        return cy.get('[name="communicationAddress.city"]')
    }
    getAdress(){
        return cy.get('[name="legalAddress.addressLine"]')
    }
    getAdress2(){
        return cy.get('[name="communicationAddress.addressLine"]')
    }
    getPostalCode(){
        return cy.get('[name="legalAddress.zipCode"]')
    }
    getPostalCode2(){
        return cy.get('[name="communicationAddress.zipCode"]')
    }

    getTitleAccountingCurrency(){
        return cy.get('[class="accounting-currency"').should('contain.text','Валюта учета')
    }
    //+Добавить новый счёт
    getNewAccountButton(){
        return cy.get('[class="text-component bold regular"]')
    }
    getCalendar(){
        return cy.get('[class="calendar-icon"]')
    }
    getStartBalance(){
        return cy.get('[name="startBalance"]')
    }
    getDescription(){
        return cy.get('[name="description"]')
    }
    getRSell(){
        return cy.get('[class="r-cell"]')
    }
    getDeleteButton(){
        return cy.get('[class="text-component red-accent regular"]')
    }
    getIncomeItem(){
        return cy.get('[name="incomeItem"]')
    }
}
export default Locators