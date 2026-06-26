const { test, expect } = require('@playwright/test')
const ProductPOM = require('../../../pages/productPOM')
const LoginPOM = require('../../../pages/loginPOM')
const CartPOM = require('../../../pages/cartPOM')
const loginLocators = require('../../../locators/loginLocators')
const productLocator = require('../../../locators/productLocator')
const cartLocators = require('../../../locators/cartLocator')
const testData = require('../../../test-data/testData')


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
    test("TC_01 validate cart page URL and UI elements", async ({ page }) => {
        await productPageRef.func_addfirstProducttoCart()
        await productPageRef.func_gotoCartPage()
        expect(page).toHaveURL("https://www.saucedemo.com/cart.html")

        const ui = await cartPageRef.func_getcartPageElements()
        await expect(ui.cartpage).toBeVisible()
        await expect(ui.shoppingcart).toBeVisible()
        await expect(ui.checkout).toBeVisible()

    })
    test("TC_02 validate continue shopping cart", async ({ page }) => {
        await productPageRef.func_addfirstProducttoCart()
        await productPageRef.func_gotoCartPage()
        const ui = await cartPageRef.func_getcartPageElements()
        await expect(ui.cartpage).toBeVisible()
        await expect(ui.shoppingcart).toBeVisible()
        await expect(ui.checkout).toBeVisible()

        await cartPageRef.func_clickOnContinueShopping()
        await expect(page).toHaveURL(/inventory/)

    })
    test("TC_03 validate first product in cart page ", async ({ page }) => {
        const productDetails = await productPageRef.func_getfirstProductDetails()
        await productPageRef.func_addfirstProducttoCart()
        await productPageRef.func_gotoCartPage()
        const cartDetails = await cartPageRef.func_getfirstProductDetails()
        await expect(productDetails).toEqual(cartDetails)

    })
    test("TC_04 validate ALL product in cart page ", async ({ page }) => {
        const productDetails = await productPageRef.func_getAllProductDetails()
        console.log(productDetails)
        await productPageRef.func_addAllProductstoCart()
        await productPageRef.func_gotoCartPage()
        const cartProductDetails=await cartPageRef.func_getCartProducts()
        console.log(cartProductDetails)

        expect(productDetails).toEqual(cartProductDetails)
    })
    test("TC_05 validate specific product in cart page ", async ({ page }) => {
     const productdetails =   await productPageRef.func_getSpecificProductDetails(testData)
await productPageRef.func_addSpecificProducts(testData)
await productPageRef.func_gotoCartPage()
const cartProductDetails = await cartPageRef.func_getCartProducts()
expect(productdetails).toEqual(cartProductDetails)
    })
    test("TC_06 validate Remove product functionality ", async ({ page }) => {
const products = await productPageRef.func_getSpecificProductDetails(testData)
console.log(products.length)
await productPageRef.func_addSpecificProducts(testData)
await productPageRef.func_gotoCartPage()
const cartProducts = await cartPageRef.func_getCartProducts()
expect(products).toEqual(cartProducts)
await cartPageRef.func_removeProductfromCart()
const revisedProducts=await cartPageRef.func_getCartProducts()
console.log(revisedProducts.length)
expect(products).not.toEqual(revisedProducts)

    })
test("TC_07 Navigate to CheckOut Page",async ({page})=>{
    await productPageRef.func_addfirstProducttoCart()
    await productPageRef.func_gotoCartPage()
    await cartPageRef.func_clickOnCheckOutLink()
   await expect(page).toHaveURL(/checkout/)
})

})