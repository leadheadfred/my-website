const assert = require('assert');
const driver = require('./../../driver');
const uri = 'file:///C:/Users/fred.hallows/OneDrive - ROQ IT/Desktop/More VSC/HTML Project';

const {
    After,
    Before,
    Given,
    Then,
    When
} = require('@cucumber/cucumber');
const { getSystemErrorMap } = require('util');
const { headless } = require('./../../driver');

Before({timeout: 8000}, async function() {
    this.driver = driver;
    this.headless = await driver.headless(uri);
});

After({timeout: 8000}, async function() {
    await this.headless.quit();
});
Given(`the loaded website`,async function (){});

When(`the button button is pressed`, async function () {await this.driver.createButton(this.headless)})

Then(`there is another button`, async function () {
    const expected = headless.findElement(webdriver.By.css(`.button1`))
    assert(expected!=null)
})