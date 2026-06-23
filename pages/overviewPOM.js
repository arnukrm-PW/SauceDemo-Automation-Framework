const overviewLocator = require('../locators/overviewLocators')

class OverviewPOM {
    constructor(page) {
        this.page = page
    }

    async getURLandUIElements_Overview() {
        return {
            overviewTitle: await this.page.locator(overviewLocator.overviewTitle).textContent(),
            cancelButton: await this.page.locator(overviewLocator.cancelButton),
            finishButton: await this.page.locator(overviewLocator.finishButton).textContent(),
            paymentInformation: await this.page.locator(overviewLocator.paymentInformation).textContent(),
            shippingInformation: await this.page.locator(overviewLocator.shippingInformation).textContent(),
            priceTotal: await this.page.locator(overviewLocator.priceTotal).textContent(),
            taxDetails: await this.page.locator(overviewLocator.taxDetails).textContent(),
            totalDetails: await this.page.locator(overviewLocator.totalDetails).textContent()

        }
    }
 async func_getAllProductDetails_Overview(){
        const allNames = await this.page.locator(overviewLocator.cartProductName).allTextContents()
        const allDescription = await this.page.locator(overviewLocator.cartProductDescription).allTextContents()
        const allPrice = await this.page.locator(overviewLocator.cartProductPrice).allTextContents()
        const allOverviewProducts = allNames.map((_,i)=>({
            
            O_Names : allNames[i].trim(),
            O_Description : allDescription[i].trim(),
            O_Price : allPrice[i].trim()
        }))
        return  allOverviewProducts
    
    }
    async getItemTotal_Overview(){
        const price = await this.page.locator(overviewLocator.priceTotal).textContent()
        return  parseFloat(price?.replace("Item total: $","").trim() )
    }
    async getTax_Overview(){
        const tax = await this.page.locator(overviewLocator.taxDetails).textContent()
        return  parseFloat(tax?.replace("Tax: $","").trim())
    
    }
    async getTotal_Overview()
    {
        const total = await this.page.locator(overviewLocator.totalDetails).textContent()
        return parseFloat(total?.replace("Total: $","").trim())
    
    }
    async cancel(){
        await this.page.locator(overviewLocator.cancelButton).click()
    }
    async finish(){
        await this.page.locator(overviewLocator.finishButton).click()
    }

}
module.exports = OverviewPOM