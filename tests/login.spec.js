const{test,expect} = require("@playwright/test")
const LoginPage = require('../pages/loginPOM')
const ProductLocators = require('../pages/productPOM')

test("login test",async ({page})=>{
const loginPage = new LoginPage(page)
const productPage = new ProductLocators(page)


// Navigate to App
    await page.goto(process.env.APPURL)

  // Login to App 
await loginPage.func_login(process.env.SD_USERNAME,process.env.SD_PASSWORD)
 await page.waitForSelector(".inventory_list")
   await expect(page).toHaveURL(/inventory/)

// About Page
   await productPage.func_aboutPage()
await expect(page).toHaveURL("https://saucelabs.com/")
await productPage.prevPage()
// logout
await productPage.func_logout()
await expect(page).toHaveURL("https://www.saucedemo.com/")
})