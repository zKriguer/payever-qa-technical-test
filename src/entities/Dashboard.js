const { By } = require("selenium-webdriver");
const DefaultMethods = require("./DefaultMethods");

class Dashboard extends DefaultMethods {
  constructor(driver) {
    super(driver);
    this.appStoreButton = By.css("button.welcome-screen-content-button");
    this.appElements = By.css("div.icons__title");
  }

  async clickGetStarted() {
    await this.clickOnWebElement(this.appStoreButton);
  }

  async isAppPresent(appLocator) {
    const elements = await this.driver.findElements(appLocator);
    return elements.length > 0;
  }
}

module.exports = Dashboard;
