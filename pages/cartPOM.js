const cartLocators =require('../locators/cartLocator')

class CartPOM{

constructor(page){
    this.page=page
}    
async func_clickOnContinueShopping(){
    await this.page.locator(cartLocators.continueShoping).click()

}
async func_getcartPageElements(){
    return{
        cartpage: this.page.locator(cartLocators.yourCart),
        shoppingcart: this.page.locator(cartLocators.continueShoping),
        checkout: this.page.locator(cartLocators.checkoutButton)
    }
}
async func_getCartProducts(){
    const allNames = await this.page.locator(cartLocators.productName).allTextContents()
        const allDescription = await this.page.locator(cartLocators.productDesc).allTextContents()
        const allPrice = await this.page.locator(cartLocators.productPrice).allTextContents()
        const allCartProducts = allNames.map((_,i)=>({
            
            Names : allNames[i].trim(),
            Description : allDescription[i].trim(),
            Price : allPrice[i].trim()
        }))
        return allCartProducts
    
    }
}
module.exports=CartPOM
