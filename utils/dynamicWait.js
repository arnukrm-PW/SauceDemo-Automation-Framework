

async function waitForElement(page, locator){
    await page.locator(locator).waitFor({state:'visible',timeout:500})
    
} 

async function captureFailure(page,testName){

await page.screenshot({
    path:`reports/${testName}.png`})

}
module.exports={waitForElement,captureFailure}