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
   cypress
    downloads folder
    e2e folder
    fixtures
    support
   node_modules
   cypress.config.js
   package-loack.json
   package.json

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

        







 
