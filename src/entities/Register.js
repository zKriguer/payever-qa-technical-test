const { By } = require("selenium-webdriver");
const DefaultMethods = require("./DefaultMethods");

class Register extends DefaultMethods {
  constructor(driver) {
    super(driver);
    this.firstNameInput = By.css('input[formcontrolname="firstName"]');
    this.lastNameInput = By.css('input[formcontrolname="lastName"]');
    this.emailInput = By.css('input[formcontrolname="email"]');
    this.passwordInput = By.css('input[formcontrolname="password"]');
    this.confirmPasswordInput = By.css('input[formcontrolname="confirmPass"]');
    this.submitButton = By.css("button.signup-button");
  }

  async enterRegistrationDetails(
    firstName,
    lastName,
    email,
    password,
    confirmPassword
  ) {
    await this.sendKeysValue(this.firstNameInput, firstName);
    await this.sendKeysValue(this.lastNameInput, lastName);
    await this.sendKeysValue(this.emailInput, email);
    await this.sendKeysValue(this.passwordInput, password);
    await this.sendKeysValue(this.confirmPasswordInput, confirmPassword);
  }
}

module.exports = Register;
