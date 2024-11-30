# Automation_Using_Cypress

1. download and install nodejs (node--version, npm --version)
2. VS Code
3. new folder open with VS code
4. npm -i init => create package.json
5. install cypress => npm install cypress --save -dev
6. start cypress -> npx cypress open OR node_modules/.bin/cypress open

Run Script=>
1. npx cypress open
2. npx cypress run
3. npx cypress run --headed
4. npx cypress run --spec D:\Automation_Cypress\cypress\e2e\MyFirstTest.cy.js
5. npx cypress run --browser chrome

Flow Diagram
===============
Spec File(cy.js) -------> describe blocks(test suites) ------> it blocks(test) 

# Part 1:
1. Frontend web automation testing tool.
2. modern web application e.g. React js, angular js
3. any appliaction which runs on browser
4. java script
5. doesn't use any selenium
6. open source (test runner(locally installed) - free, dashboard - paid)
7. Nodejs and comes with npm modules
8. Who can use cypress (DEV & QA)
9.   end to end test
10.   integretion test
11.   unit test
12.   API testing
13. Features: time travel, debuggablity, automatic waits(built-in waits), consistence results, screenshots & videos, cross browser testing- locally & remotely
14. Limitations:
15.  can't open window based or mobile application
16.  limited support
17.  javascript/typescript
18.  reading/writing data into file is difficult
19. Cypress requires -> Node.js 18.x, 20.x, 22.x and above

# Part 2:
1. All test cases called here specification (spec) file.
2. write spec inside e2e folder
3. run 'npx cypress open' -> open the window & shows list down all the browsers (which is download in local system).
   1. cypress
    2. downloads folder
    3. e2e folder
    4. fixtures
    5. support
  6. node_modules
  7. cypress.config.js
  8. package-loack.json
  9. package.json

4. create new file inside cypress/e2e/ "MyFirstCypressTest.cy.js".
5. Extension should be ".cy.js"

# Part 3: Writing & Excuting tests
1. describe , it  --->from Mocha
Arrow function

describe('Suite Name', () => {
  it('TC 1', () => {
    expect(true).to.equal(true)
  }),
  it('TC 2', () => {
    expect(true).to.equal(true)
  })
})

OR

describe('Suite Name', function () {
  it('TC 1', () => {
    expect(true).to.equal(true)
  }),
  it('TC 2', function ()  {
    expect(true).to.equal(true)
  })
})

2. expect --> from CHAI
3. Run the tests
   1. npx cypress open   -->  select the browser -> click on the file to run
   2. npx cypress run    --> bydefault tests will run on headless mode with ELECTRON browser
   3. npx cypress run --headed  --> run on without headless mode
   4. npx cypress run --spec cypress/e2e/MyFirstTest.cy.js  -->  run only one file form     command line
   5. npx cypress run --browser chrome   --> run tests on CHROME browser

4. test suites -----> test cases ----> Test steps
   spec file (cy.js) --> describe blocks (test suites) ---> it blocks (test cases)

# Part 4: Locators
1. Css locator ---> bydefault support by cypress -->'cy.get(locator)' method
2. Xpath locator --> used xpath plugin in cypress -->'cy.xpath(xpath locator)' method
3. Used locator to identify the elements using 

# NOTE:
1. Once we run any spec, if we change any stpes inside the code then cypress RUNNER window directly run the particular spec when we clik on save. NO need to run the test again and again.

-- To work with XPATH
1. npm install -D cypress-xpath  ------> install xpath plugin 
2. add reference inside the 'commands.js' file
// Used all the cypress methods suggestions
/// <reference types="cypress" />  

// Used all the cypress-xpath methods suggestions
/// <reference types="cypress-xpath" />

3. add "require('cypress-xpath')" inside support/e2e.js file

# Part 5: Cypress Assertions (Validations)
1. Implicit Assertions (built-in Assertions)
      should
      and

 eq
 have.length
 contain
 exist
 include
 have.value

2. Explicit Assertions -> custom assertion, not built-in assertion in cypress

      expect -- BDD
      assert -- TDD

3. We can directly get the elements locator from the cypress INSPECT itself.
  cy.get('.orangehrm-login-branding > img')

# Part 6: Cypress folder structure

cypress          ----> main cypress folder
  downloads       ----> downloaded files
  e2e                ----> Tests
    File.cy.ts      ---->  test files
  fixtures           ---->  Static Test Data
  screenshots      ---->  Captured screenshots
  support           ---->  Reusable scripts
    commands.js     ---->  Custom commands/Overwrite existing commands
    e2e.js          ----> Loads before tests
videos                 ------> Videos
node_modules           ----> Modules for cypress
cypress.config.js      ----> CYpress configurations
package-lock.json      ---->
package.json            ----> Dependencies for cypress

# Part 7: Interacting with Elements | Radio Buttons & Checkboxes

# Part 8: DropDowns

1. have.value --> used for simple 'select' dropdown
2. have.text  --> used for span dropdown

# Part 9: Alerts
1. by default cypress close the alerts window by using 'OK' button of alert window, but for any validation we need to write the code.

  1. simple alert
  2. confirm alert
  3. Prompt alert
  4. Authenticated alert

# Part 10:  Handling Child Tabs
1. Approach 1: removing target attribute to handles the tabs elements
2. Approach 2: get the href attribute, the simply use visit() method
   Limitation: the main domain should be same for Approah 2.
3. go back to main tab  ----> cy.go('back')

# Part 11: Handling iFrames

1. Appraoch 1: 
     // get iframe locator
     // since actual element is present inside the '#document
     // get the document
     // check document is visible or not
     // wrap that element
2. Appraoch 2: Using custom command
3. Approach 3: using cypress-iframe plugin
     npm install -D cypress-iframe
     import 'cypress-iframe';

1. {ctrl + a } => to select all the text

# Part 12: Handling Tables
1. beforeEach login scenario
2. Check number of Rows & Columns
3. Check cell data from specific Rows & Columns
4. Read all the Rows & Columns data in the first page
5. Pagination

# Part 13: Handling Mouse
1. Mouse hover --> .trigger('mouseover')
2. Right click --> .trigger('contextmenu')
              ------> .rightclick()
3. Double click  --> .trigger('dblclick')
                ----> .dblclick()
4. Drag & drop using plugin
   ------> npm install --save-dev @4tw/cypress-drag-drop
   ------> import '@4tw/cypress-drag-drop'
    1. source & destination element
    2. Forces Cypress to interact with the element, bypassing visibility checks. ->  { force: true }
       ---> since the elements are hidden
5. Scrolling page 
  -----> .scrollIntoView() // scroll faster
  -----> .scrollIntoView({duration:2000}) // scroll within 2 sec
        
# Part 14: Handling File

1. plugin
  ---> npm install --save-dev cypress-file-upload
2. .attachFile('test.pdf') --> it's take file from the 'fixtures' folder ONLY.
3. File upload - Rename  At run time----> 
    .attachFile({filePath: 'test.pdf', fileName:  'MyFile.pdf'})
4. File upload - Drag & Drop
      .attachFile('test.pdf', {subjectType: 'drag-n-drop'})
5. Multiple files upload
      .attachFile(['test.pdf', 'test_01.pdf'])
6. File upload - Shadow dom --> Dom contains another DOM.
      cy.get(".smart-browse-input", {includeShadowDom: true}).attachFile('test_01.pdf')

# Part 15: Hooks & Tags
Hooks
-------------
1. before()  ---> runs only once before all
2. after() ---> runs only once after all
3. beforeEach() ---> runs each time before it() block
4. afterEach() ---> runs each time after it() block

Tags
----------
1. it.skip()
2. it.only()

# Part 16: Fixtures & Data Driven Testing (Using JSON Data)

1. Direct access
 Read fixture file data 'orangehrm.json' file
       cy.fixture('orangehrm').then( (data)=>{
       cy.get("input[name='username']").type(data.username)
       })

2. Access thorugh HOOKs for multiple it() blocks

    let orangehrmDataJson;
    before(()=>{
        cy.fixture('orangehrm').then((data)=>{
            orangehrmDataJson=data
        })
    })

3. Data driven testing -> multiple sets of data -> create array of JSON

    cy.fixture('orangehrm_ddt').then((data)=>{ // all orangehrm_ddt.json file data store in 'data'
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')


            data.forEach( (userdata)=>{  // get one by one data inside 'userdata'
                cy.get("input[name='username']").type(userdata.username)
            })
    })

# Part 17: How To Create Custom commands 

  --> support/commands.js file path inside cypress

1. create new command
2. overwrite the command
3. custom command for reusable method like LOGIN

# Part 18: Browser Navigation | go() & reload()

1. cy.go('back')   
2. cy.go('forward') 
3. cy.go(-1) --------> back
4. cy.go(1) --------> forward

# Part 19: How To Capture Screenshots & Videos on Test

NOTE: 
1. Bydefault all the screenshot store inside 'screenshots' folder
2. for failed TCs, cypress automatically capture the screenshots on failure scenario only ------->  Only when you execute from CLI

npx cypress run --spec cypress/e2e/19_How\ To\ CaptureScreenshots\&Videos.cy.js

3. Video recording is disabled by default on failure scenario only ------->  Only when you execute from CLI inside "cypress.config.js"

  "video: true"

4. If enabled, Cypress records a video for each spec file when running tests during cypress run. Videos are not recorded during cypress open.


5. screenshot(fileName) method
  --->cy.screenshot('homePage')
cy.get("a[href='/key_presses']").screenshot('keyPressWord_sc') // get particular elements screenshort

# Part 20: How To Generate HTML Reports|Headed & Headless mode execution

1. install cypress-mochawesome-reporter
    npm i --save-dev cypress-mochawesome-reporter
2. Change cypress reporter & setup hooks

Edit config file (cypress.config.js by default)

const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});

3. Add to cypress/support/e2e.js

import 'cypress-mochawesome-reporter/register';

4.  run file ---> it will created cypress/reports/html/index.html
   npx cypress run --spec cypress/e2e/19_CaptureScreenshots\&Videos.cy.js 

# Part 21: Page Object Model Pattern in Cypress























 
