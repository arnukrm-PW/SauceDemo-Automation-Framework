const checkoutCompleteLocators = require('../locators/checkoutCompleteLocators')

class CheckoutCompletePOM {
    constructor(page) {
        this.page = page
    }
    async func_goBackHometoProductPage() {
        await this.page.locator(checkoutCompleteLocators.backHOMEButton).click()
       // await this.page.waitForTimeout(5000)
    }
    async func_getfinalPageInfo() {
        return {
            pageInfo: await this.page.locator(checkoutCompleteLocators.pageInfo).textContent(),
            thankyouInfo: await this.page.locator(checkoutCompleteLocators.thankyouInfo).textContent(),
            thankyouDescription: await this.page.locator(checkoutCompleteLocators.thankyouDescription).textContent()

        }
    }
    async func_getSuccessMessageText() {
      return  await this.page.locator(checkoutCompleteLocators.thankyouInfo).textContent()
    }


}
module.exports = CheckoutCompletePOM