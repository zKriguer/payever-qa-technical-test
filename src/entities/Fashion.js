const { By } = require("selenium-webdriver");
const DefaultMethods = require("./DefaultMethods");

class Fashion extends DefaultMethods {
  constructor(driver) {
    super(driver);
    this.nameInput = By.css('input[formcontrolname="name"]');
    this.phoneNumberInput = By.css('input[formcontrolname="phoneNumber"]');
    this.submitButton = By.css("button.signup-button");
  }

  async enterPageFashionDetails(name, phoneNumber) {
    await this.sendKeysValue(this.nameInput, name).then(() =>
      this.sendKeysValue(this.phoneNumberInput, phoneNumber)
    );
  }
}

module.exports = Fashion;
