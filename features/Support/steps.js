const assert = require('assert');
const driver = require('./../../driver');
const uri = 'file:///C:/Users/fred.hallows/OneDrive - ROQ IT/Desktop/More VSC/HTML Project/index.html';
const webdriver = require('selenium-webdriver')

const {
    After,
    Before,
    Given,
    Then,
    When
} = require('@cucumber/cucumber');
const { getSystemErrorMap } = require('util');
const { headless } = require('./../../driver');
let oldColor=5;

Before({timeout: 8000}, async function() {
    this.driver = driver;
    this.headless = await driver.headless(uri);
});

After({timeout: 8000}, async function() {
    await this.headless.quit();
});
Given(`the loaded website`,async function (){});

When(`the button button is pressed`, async function () {
    oldColor=await this.driver.newButton(this.headless)
});
When(`the change background color button is pressed`, async function ()
{
    await this.driver.newColor(this.headless)
})
Then(`there should be one more button`, async function () {
    const expected = webdriver.By.css('#button1')
    console.log(await expected)
    assert(expected!=null)
});
Then(`the background color should change`, async function (){
    const newColor=this.headless.By.css('background-color')
    assert(oldColor!=newColor)
});
Then('the title should be {string}', async function(title) {
    assert(title == await this.headless.getTitle())
})
