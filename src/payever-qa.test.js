const { Builder, By, until } = require("selenium-webdriver");
const { expect } = require("chai");
const Register = require("./entities/Register");
const Santander = require("./entities/Santander");
const Fashion = require("./entities/Fashion");
const Dashboard = require("./entities/Dashboard");

describe("Test Sequence", () => {
  let driver;
  let register;
  let santander;
  let fashion;
  let dashboard;
  const baseUrl = "https://commerceos.staging.devpayever.com/registration";

  before(async () => {
    driver = await new Builder().forBrowser("chrome").build();
    register = new Register(driver);
    santander = new Santander(driver);
    fashion = new Fashion(driver);
    dashboard = new Dashboard(driver);
  });

  it("Test 1 - Fashion page registry", async () => {
    await driver.get(`${baseUrl}/fashion}`);

    await driver.wait(until.elementLocated(register.firstNameInput));
    await register.enterRegistrationDetails(
      "Kriguer",
      "Freitas",
      "kriguerfreitas2012@gmail.com",
      "*newQa123",
      "*newQa123"
    );
    await register.clickSubmitButton();

    await driver.wait(until.elementLocated(fashion.nameInput));
    await fashion.enterPageFashionDetails("Test", "1234567890");
    await fashion.clickSubmitButton();

    await driver.wait(until.elementLocated(dashboard.appStoreButton));
    await dashboard.clickGetStarted();

    await driver.wait(until.elementLocated(dashboard.appElements));
    const expectedFeatures = [
      "Transactions",
      "Checkout",
      "Connect",
      "Products",
      "Shop",
      "Message",
      "Settings",
    ];
    for (let icon of expectedFeatures) {
      const appLocator = By.xpath(`//div[contains(text(), '${icon}')]`);
      const isAppPresent = await dashboard.isAppPresent(appLocator);
      expect(isAppPresent).to.be.true;
    }
  });

  it("Test 2 - Santander Registry", async () => {
    await driver.get(`${baseUrl}/fashion}`);

    await driver.wait(until.elementLocated(register.firstNameInput));
    await register.enterRegistrationDetails(
      "Kriguer",
      "Freitas",
      "kriguerfreitas2020@gmail.com",
      "*newQa123",
      "*newQa123"
    );
    await register.clickSubmitButton();
    await driver.wait(until.elementLocated(santander.nameInput));
    await santander.enterPageSantanderDetails(
      "Test",
      "1234567890",
      "BR99999699"
    );
    await santander.selectIndustry();
    await santander.clickSubmitButton();

    await driver.wait(until.elementLocated(dashboard.appStoreButton));
    await dashboard.clickGetStarted();

    await driver.wait(until.elementLocated(dashboard.appStoreButton));
    await dashboard.clickGetStarted();

    await driver.wait(until.elementLocated(dashboard.appElements));
    const expectedFeatures = [
      "Transactions",
      "Checkout",
      "Connect",
      "Point of Sale",
      "Settings",
    ];
    for (let icon of expectedFeatures) {
      const appLocator = By.xpath(`//div[contains(text(), '${icon}')]`);
      const isAppPresent = await dashboard.isAppPresent(appLocator);
      expect(isAppPresent).to.be.true;
    }
  });

  after(async () => {
    await driver.quit();
  });
});
