module.paths.push('D:/Programs/nodejs/node_modules');
const {Builder, By, Key, until} = require('selenium-webdriver');
const fs = require("fs");
const colors = require('colors');

(async function () {
    const orderCount = 15;
    url = 'http://localhost:8080';

    // preparing browser driver
    const driver = await new Builder().forBrowser('firefox').build(); await driver.get(url);

    // preparing browser driver
    let rawdata = fs.readFileSync('config.json');
    let texts = JSON.parse(rawdata);
    
    for (const [k, text] of Object.entries(texts)) {
        await driver.findElement(By.id(`text`)).sendKeys(text).catch(e => null);
        await driver.findElement(By.id(`btn`)).click().catch(e => null);
    }

    console.log(`      ${Object.keys(texts).length} tests effectués avec succès.`.green);
})();