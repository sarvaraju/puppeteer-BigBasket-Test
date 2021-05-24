const puppeteer = require('puppeteer');

(async () => {
    // set some options (set headless to false so we can see 
    // this automated browsing experience)
    let launchOptions = { headless: false, args: ['--start-maximized'] };

    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();

    // set viewport and user agent (just in case for nice viewing)
    await page.setViewport({width: 1366, height: 768});
    await page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36');

    // go to the target web
    await page.goto('https://www.bigbasket.com/auth/login/?nc=close');

	//Deperecated wait Method
	//await page.waitFor(500000);
	
    // wait for element defined by XPath appear in page
    await page.waitForXPath("(//span[@class='login-icon login-icon-close'])[1]");

    // evaluate XPath expression of the target selector (it return array of ElementHandle)
    let elHandle = await page.$x("(//span[@class='login-icon login-icon-close'])[1]");
	

   const loginclose = (await page.$x("/html/body/div[1]/div/div/div/button/span"))[0];

    loginclose.click();

//await page.waitFor(100000);

await page.waitForXPath("(/html/body/div[1]/div[1]/nav/div/div/ul/li[1]/a/i)[1]");

  const categorydropdown = (await page.$x("/html/body/div[1]/div[1]/nav/div/div/ul/li[1]/a/i"))[0];

    categorydropdown.click();
	
	
	await page.waitForXPath("/html/body/div[1]/div[1]/nav/div/div/ul/li[1]/ul/li/mega-nav-template/div/ul/li[4]/a");

  const selectbeverage = (await page.$x("/html/body/div[1]/div[1]/nav/div/div/ul/li[1]/ul/li/mega-nav-template/div/ul/li[4]/a"))[0];

    selectbeverage.click();
	
	await page.waitForXPath("/html/body/div[1]/div[3]/product-deck/section/div[2]/div[4]/div[1]/div/div/div[2]/div/div[28]/product-template/div/div[4]/div[1]/a");

  const selectproduct = (await page.$x("/html/body/div[1]/div[3]/product-deck/section/div[2]/div[4]/div[1]/div/div/div[2]/div/div[28]/product-template/div/div[4]/div[1]/a"))[0];

   await selectproduct.click();
   
   await new Promise(x => setTimeout(x, 1000));
 await selectproduct.click({ clickCount: 2 });

	await page.waitForXPath("/html/body/div[1]/div/div[2]/div[2]/div[3]/div[2]/div[1]/span");

  const Addtobaseket = (await page.$x("/html/body/div[1]/div/div[2]/div[2]/div[3]/div[2]/div[1]/span"))[0];

   await Addtobaseket.click();
 
 
 await page.waitForXPath("/html/body/div[1]/div/div[1]/div[2]/div[2]/div/div[2]/div[1]/div[1]/input");

  const searchttxtbox = (await page.$x("/html/body/div[1]/div/div[1]/div[2]/div[2]/div/div[2]/div[1]/div[1]/input"))[0];

   await searchttxtbox.click();
   
   await page.type("[name='search']", "Tea", {delay:500})
   
    	await page.waitForXPath("/html/body/div[1]/div/div[1]/div[2]/div[2]/div/div[2]/div[1]/div[1]/button");

  const searchicon = (await page.$x("/html/body/div[1]/div/div[1]/div[2]/div[2]/div/div[2]/div[1]/div[1]/button"))[0];

   await searchicon.click();
   
 const list = ['1','2','3','4','5','6','7', '8','9']
   
   for(let i = 4; i <=8; i++) {
	   
	   console.log(list[i])
	      // Value i not incrementing in second iteration in below line :82
   await page.waitForXPath("/html/body/div[1]/div[3]/product-deck/section/div[2]/div[4]/div[1]/div/div[1]/div[2]/div/div["+ i + "]/product-template/div/div[4]/div[3]/div/div[3]/div[2]/div[2]/button");
console.log(list[i])
  const addproduct = (await page.$x("/html/body/div[1]/div[3]/product-deck/section/div[2]/div[4]/div[1]/div/div[1]/div[2]/div/div["+ i + "]/product-template/div/div[4]/div[3]/div/div[3]/div[2]/div[2]/button"))[0];

   await addproduct.click();
   
   //await new Promise(x => setTimeout(x, 10000));
 //await addproduct.click({ clickCount: 2 });
 
 await page.reload();
 console.log(list[i])
 
 
 
  //await page.waitForXPath("/html/body/div[1]/div[3]/product-deck/section/div[2]/div[4]/div[1]/div/div[1]/div[2]/div/div["+ i + "]/product-template/div/div[4]/div[3]/div/div[3]/div[2]/div[2]/button");

   }
 


   
   

   
   //await page.waitForSelector('#productSearch');
   
   //const newInputValue = "test 123";
   
  //await page.evaluate(val => document.querySelector('#productSearch').value = val, newInputValue);
 
	
	

    // prepare to get the textContent of the selector above (use page.evaluate)
   // let lamudiNewPropertyCount = await page.evaluate(el => el.textContent, elHandle[0]);

//    console.log('Total Property Number is:', lamudiNewPropertyCount);

    // close the browser
   // await browser.close();
})();