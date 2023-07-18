class DefaultMethods {
  constructor(driver) {
    this.driver = driver;
  }

  async focusOnWebElement(locator) {
    const element = await this.driver.findElement(locator);
    await this.driver.executeScript("arguments[0].focus();", element);
  }

  async clickOnWebElement(locator) {
    await this.driver.findElement(locator).click();
  }

  async sendKeysValue(locator, text) {
    await this.focusOnWebElement(locator);
    await this.driver.findElement(locator).sendKeys(text);
  }

  async clickSubmitButton() {
    await this.clickOnWebElement(this.submitButton);
  }
}

module.exports = DefaultMethods;
