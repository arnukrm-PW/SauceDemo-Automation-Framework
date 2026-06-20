const { test, expect } = require('@playwright/test')
const ProductPOM = require('../pages/productPOM')
const LoginPOM = require('../pages/loginPOM')
const CartPOM = require('../pages/cartPOM')
const loginLocators = require('../locators/loginLocators')
const productLocator = require('../locators/productLocator')
const cartLocators = require('../locators/cartLocator')
const testData = require('../test-data/testData')


test.describe("cart page validation", () => {

    let loginPageRef;
    let productPageRef;
    let cartPageRef;
    test.beforeEach(async ({ page }) => {

        loginPageRef = new LoginPOM(page)
        productPageRef = new ProductPOM(page)
        cartPageRef = new CartPOM(page)

        // Navigate to App
        await page.goto(process.env.APPURL)

        // Login to App 
        await loginPageRef.func_login(process.env.SD_USERNAME, process.env.SD_PASSWORD)
        await page.waitForSelector(".inventory_list")
        await expect(page).toHaveURL(/inventory/)

    })

    

})