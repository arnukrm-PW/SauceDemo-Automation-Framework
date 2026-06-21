const cartLocators = require('../locators/cartLocator')

class CartPOM {

    constructor(page) {
        this.page = page
    }
    async func_clickOnContinueShopping() {
        await this.page.locator(cartLocators.continueShoping).click()

    }
    async func_getcartPageElements() {
        

        return {
            cartpage: this.page.locator(cartLocators.yourCart),
            shoppingcart: this.page.locator(cartLocators.continueShoping),
            checkout: this.page.locator(cartLocators.checkoutButton)
        }
    }
    async func_getCartProducts() {
        const allNames = await this.page.locator(cartLocators.productNameCart).allTextContents()
        const allDescription = await this.page.locator(cartLocators.productDescCart).allTextContents()
        const allPrice = await this.page.locator(cartLocators.priceCart).allTextContents()
        const allCartProducts = allNames.map((_, i) => ({

            Names: allNames[i].trim(),
            Description: allDescription[i].trim(),
            Price: allPrice[i].trim()
        }))
        return allCartProducts

    }

    async func_removeProductfromCart(){
        await this.page.locator(cartLocators.removeButton).first().click()
    }
    async func_getfirstProductDetails(){
        return {
            name: await this.page.locator(cartLocators.productNameCart).textContent(),
            description: await this.page.locator(cartLocators.productDescCart).textContent(),
            price:await this.page.locator(cartLocators.priceCart).textContent()
        }
    }
    async func_clickOnCheckOutLink(){
        await this.page.locator(cartLocators.checkoutButton).click()
    }
}
module.exports = CartPOM
