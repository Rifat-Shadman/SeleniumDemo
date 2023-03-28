const{Builder, By, Key} = require("selenium-webdriver");
require("chromedriver");
var should = require("chai").should();
const ltCapabilites = require("../capabilities");
//describe block

describe("add todo tests", ()=>{

    //user
    const USERNAME = ltCapabilites.capabilities.user;
    //key
    const KEY = ltCapabilites.capabilities.accessKey;
    //capabilities
    const capabilities = ltCapabilites.capabilities;
    //host
    const GRID_HOST = 'hub.lambdatest.com/wd/hub';
    const gridUrl = 'https://' + USERNAME + ':' + KEY + '@' + GRID_HOST;

    beforeEach(function(){
        const driver = new Builder().usingServer(gridUrl).withCapabilities(capabilities).build();
    })
    
    afterEach(async function(){
        await driver.quit();
    })

    //it block
    it("successfully adds another todo to application", async function(){
        //launching the browser
        // let driver = await new Builder().forBrowser("chrome").build();
        let inputString = "Learn Cypress for E2E Testing";
        //navigate to the todo app
        await driver.get("https://lambdatest.github.io/sample-todo-app");

        //locate the input field and add a todo
        //*[@id="sampletodotext"]
        
        await driver.findElement(By.id("sampletodotext")).sendKeys(inputString, Key.ENTER);

        //assertion using chai
        let todoText = await driver.findElement(By.xpath("//li[last()]")).getText().then(function(value){return value});
        todoText.should.equal(inputString);
    
        // await driver.findElement(By.id())
        //close the browser
        
    });


    it("successfully adds another todo to application", async ()=>{
        //launching the browser
        // let driver = await new Builder().forBrowser("chrome").build();
        let inputString = "This will fail. I only want to see what a failure report looks like";
        //navigate to the todo app
        await driver.get("https://lambdatest.github.io/sample-todo-app");

        //locate the input field and add a todo
        //*[@id="sampletodotext"]
        
        await driver.findElement(By.id("sampletodotext")).sendKeys(inputString, Key.ENTER);

        //assertion using chai
        let todoText = await driver.findElement(By.xpath("//li[last()]")).getText().then(function(value){return value});
        todoText.should.equal(inputString);
    
        // await driver.findElement(By.id())
        //close the browser
    });
    
})




    
