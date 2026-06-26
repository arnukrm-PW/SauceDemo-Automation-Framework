const {test,expect} = require('@playwright/test')
const {getUsers01} =require('../../utils/api')
const { firstName } = require('../../locators/checkoutLocator')

test("TC01 get user details",async ({request})=>{

   const response =  await request.get("https://jsonplaceholder.typicode.com/users")
    console.log(await response.json())

    expect(response.status()).toBe(200)
})

test("TC 02 getuser details",async ({})=>{

 const response = await getUsers01()
 //console.log(response)
 expect(await response.status()).toBe(200)
 //validate jsonbody
 const jsonBody = await response.json()
 expect.soft(Array.isArray(jsonBody)).toBeTruthy()
console.log(jsonBody.length)
expect(jsonBody.length).toBe(10)
//validate first User
const firstUser = jsonBody[0]
console.log(firstUser)
expect(firstUser.name).toBe("Leanne Graham")
expect(firstUser.id).toBeDefined()
expect(firstUser.email).toContain("@")
expect(firstUser.company.name).toBe("Romaguera-Crona")
//validate schema / typeof
expect(typeof firstUser.id).toBe("number")
expect(typeof firstUser.name).toBe("string")

//negative Testing
expect(firstUser.id).not.toBe("")


})


