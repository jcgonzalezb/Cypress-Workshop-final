# Cypress Workshop final exercise

> This project is a program which allows basic tests on the Demoblaze web page.

## Objectives

- Create a web automation framework following the architectural and
clean coding best practices and using cypress (any version), cucumber, and allure reporter, to test the web page: https://www.demoblaze.com/. The framework should include test cases for the following functionalities:

1. Test the featured items Carousel. It should be in a feature including at least 3 scenarios.

2. Test Navigation to all header links. It should be in a feature including at least 3
scenarios.

3. Test the categories Selection, product Selection, Adding product to cart, Buying cart,
Removing element from cart. All of the defined scenarios for these functionalities should
be on a feature.

Rules:
- The exercise must be delivered using a new, personal github repository (globant github
or public github), Good git practices should be used.
- The framework should be organized using best practices, and following what suits best
to the software under test. All architectural decisions should be correctly fundamented.
An architecture diagram of the framework must be included on the repo.
- All defined scenarios must be tagged in any way you decide, including at least tags for
organization, and for different suites (regression, smoke, sanity). Tags for using hooks
are optional.
- The framework must include at least the use of: cy.request, cy.intercept, POM, fixtures.
- Test cases to implement should be designed following best practices and correct
organization.

## Table of content

* [Environment](#environment)
* [Installation](#installation)
* [Usage](#usage)
* [Bugs](#bugs)
* [Author](#author)
* [License](#license)

##  Environment
This project was developed on Visual Studio Code 1.74.2, Node.js 18.12.1, Cypress 9.7.0, Allure 2.13.8 and cypress-cucumber-preprocessor 4.3.1.

## Installation

Before cloning the repository, it is necessary to install Node.js version 16 or higher.

1. Clone this repository in the folder of your choose

```
$   git clone "https://github.com/jcgonzalezb/Cypress-Workshop-final.git"
```

2. Access the 'Cypress-Workshop-final' directory:

```
$   cd Cypress-Workshop-final
```

3. Run the following commands to start Node.js and install Cypress and Cucumber:

```
$   npm init -y
$   npm install --save-dev cypress@9.7.0 cypress-cucumber-preprocessor

```

4. To verify the installation, run the following command:

```
$   npx cypress verify
```

The following message should be visible to be sure that Cypress was installed properly.

```
✔  Verified Cypress! C:\Users\juancamilo.gonzalez\AppData\Local\Cypress\Cache\9.7.0\Cypress
```

5. To install Allure, access the 'Cypress-Workshop-final' directory and run the following commands:

```
$   npm install --save-dev @shelex/cypress-allure-plugin

$   npm install -g allure-commandline --save-dev

```

6. To verify the installation, run the following command:

```
$   npx allure
```

7. For this particular project, some configurations should be done. Go to cypress.json file and add the following information.

```
{
    "baseUrl": "https://www.demoblaze.com/",
    "testFiles": "**/*.feature",
    "defaultCommandTimeout": 15000
}
```

8. Go to package.json file and add the following information:

```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev:test": "npx cypress run"
  },
```

```
  "cypress-cucumber-preprocessor": {
    "nonGlobalStepDefinitions": true,
    "filterSpecs": true
  }
```

9. Go to index.js file inside the plugins folder and add the following information:

```
/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars

const cucumber = require('cypress-cucumber-preprocessor').default
const allureWriter = require('@shelex/cypress-allure-plugin/writer')

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  on('file:preprocessor', cucumber())
  allureWriter(on, config)
  return config
}
```

10. Go to index.js file inside the support folder and add the following information:

```
// Import commands.js using ES2015 syntax:
import './commands'
import '@shelex/cypress-allure-plugin'

// Alternatively you can use CommonJS syntax:
// require('./commands')
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

```

## Usage

According to the objectives described above, the three tests created are:

- Featured Items Carousel Test
- Header Test
- Buy Items Test

1. To run the tests on the terminal in Cypress without the reports, access the 'Cypress-Workshop-final' directory and run the following command:

```
$   npm run dev:test
```

The terminal should display the results of the all the tests.

```
====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ √  POM/Tests/buyItemsTest.feature           00:12        4        4        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ √  POM/Tests/featuredItemsCarouselTest      00:03        4        4        -        -        - │
  │    .feature                                                                                    │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ √  POM/Tests/headerTest.feature             00:04        6        6        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    √  All specs passed!                        00:20       14       14        -        -        -

```

2. To run the tests on a browser and check each one of them in detail, run the following command:

```
$   npx cypress open
```

3. To run the tests on the terminal in Cypress with the reports, access the 'Cypress-Workshop-final' directory and run the following command:

```
$   npx cypress run --env allure=true
```

After the execution is done, the folder 'allure-results' was created.

4. To generate the reports, run the following command:

```
$   allure serve allure-results/
```

## Bugs

No known bugs at this time.

## Author

- Juan Camilo González <a href="https://twitter.com/juankter" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="juankter" height="30" width="40" /></a>
  <a href="https://bit.ly/2MBNR0t" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="https://bit.ly/2mbnr0t" height="30" width="40" /></a>

## License

Public Domain. No copy write protection.