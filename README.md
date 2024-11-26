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







 
