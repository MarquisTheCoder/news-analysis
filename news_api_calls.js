const { titleIs } = require("selenium-webdriver/lib/until")

const NewsApi = require("newsapi");
class NewsApi{
    static #api_url = "";

    constructor(asset, newsTopic){
        this.asset = asset;
        this.newsTopic = newsTopic;
    }
}