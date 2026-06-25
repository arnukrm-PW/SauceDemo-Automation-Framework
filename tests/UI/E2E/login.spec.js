const{test,expect} = require("@playwright/test")
const LoginPage = require('../../../pages/loginPOM')
const ProductLocators = require('../../../pages/productPOM')
const{waitForElement,captureFailure} = require('../../../utils/dynamicWait')
const productLocator = require("../../../locators/productLocator")

test("login test",async ({page})=>{
const loginPage = new LoginPage(page)
const productPage = new ProductLocators(page)


// Navigate to App
    await page.goto(process.env.APPURL)

  // Login to App 
await loginPage.func_login(process.env.SD_USERNAME,process.env.SD_PASSWORD)
 //await page.waitForSelector(".inventory_list")
 //test.setTimeout(60000)
 try{await waitForElement(page,"#react-burger-menu-btn") 

 }catch(error){
await captureFailure(page,"ProductPageBurgerMenu")
throw error
 }

 
 
 //await productPage.waitForElement(page,productLocator.burgerMenu)
 await expect(page).toHaveURL(/inventory/)

// About Page
   await productPage.func_aboutPage()
await expect(page).toHaveURL("https://saucelabs.com/")
await productPage.prevPage()
// logout
await productPage.func_logout()
await expect(page).toHaveURL("https://www.saucedemo.com/")
})