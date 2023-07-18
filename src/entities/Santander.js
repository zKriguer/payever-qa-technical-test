const { By } = require("selenium-webdriver");
const DefaultMethods = require("./DefaultMethods");
class Santander extends DefaultMethods {
  constructor(driver) {
    super(driver);
    this.nameInput = By.css("input.ng-tns-c170-8.ng-untouched");
    this.industryInput = By.css("input.mat-autocomplete-trigger");
    this.industryOption = By.css("#mat-option-1");
    this.phoneNumberInput = By.css("input[pephoneinputfilter]");
    this.vatIdInput = By.css("input.ng-tns-c170-14.ng-untouched");
    this.submitButton = By.css("button.signup-button");
  }

  async enterPageSantanderDetails(name, phoneNumber, vatId) {
    await this.sendKeysValue(this.nameInput, name);
    await this.sendKeysValue(this.phoneNumberInput, phoneNumber);
    await this.sendKeysValue(this.vatIdInput, vatId);
  }

  async selectIndustry() {
    await this.focusOnWebElement(this.industryInput);
    await this.clickOnWebElement(this.industryInput);
    await this.focusOnWebElement(this.industryOption);
    await this.clickOnWebElement(this.industryOption);
  }
}

module.exports = Santander;
