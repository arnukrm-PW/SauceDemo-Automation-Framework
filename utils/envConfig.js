const ENV_URL = {
    dev:"https://www.saucedemo.com/",
    qa:"https://www.saucedemo.com/",
    stage:"https://www.saucedemo.com/",
    prod:"https://www.saucedemo.com/"
}

const ENV = process.env.ENV || "prod"

const base_URL = (ENV_URL)[ENV]

module.exports={
ENV_URL,
ENV,
base_URL

}