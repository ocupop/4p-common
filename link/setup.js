import inquirer from 'inquirer'
import { PathPrompt } from 'inquirer-path'
import cmd from 'child_process'
import shelljs from 'shelljs'

inquirer.registerPrompt('path', PathPrompt)

const choices = {
  link: 'Link Project',
  unlink: 'Unlink Porject',
}

const setupLink = async () => {
  await inquirer
    .prompt([
      {
        type: 'path',
        name: 'mainProjectPath',
        message: 'Path to main project you want to work with: ',
      },
    ])
    .then(async (value) => {
      const { mainProjectPath } = value
      // link the main project
      await shelljs.exec('yarn link')
      // sanity check on yarn
      await shelljs.exec('yarn install --force')
      // link react
      await shelljs.cd('node_modules/react')
      await shelljs.exec('yarn link')
      // link react-dom
      await shelljs.cd('../../node_modules/react-dom')
      await shelljs.exec('yarn link')
      // ---- setup link for main project
      await shelljs.cd(mainProjectPath)
      // prep/clean up
      await shelljs.exec('rm -rf node_modules/@ocupop/4p-common ; rm -rf node_modules/react ; rm -rf node_modules/react-dom')
      // setup links
      await shelljs.exec('yarn link @ocupop/4p-common ; yarn link react ; yarn link react-dom')
    })
}

const unlink = async () => {
  await inquirer
    .prompt([
      {
        type: 'path',
        name: 'mainProjectPath',
        message: 'Path to main project you want to work with: ',
      },
    ])
    .then(async (value) => {
      const { mainProjectPath } = value
      // ---- setup link for main project
      await shelljs.cd(mainProjectPath)
      // await shelljs.exec('rm -rf node_modules/@ocupop/4p-common ; rm -rf node_modules/react ; rm -rf node_modules/react-dom ; rm yarn.lock')
      await shelljs.exec('yarn unlink @ocupop/4p-common ; yarn unlink react ; yarn unlink react-dom')
      await shelljs.exec('yarn install --force')
    })
}

const main = async () => {
  await inquirer
    .prompt([
      {
        type: 'list',
        choices: Object.values(choices),
        name: 'seed',
        message: 'What do you want to do',
      },
    ])
    .then(async (value) => {
      const choice = Object.keys(choices).find((key) => choices[key] === value.seed) // Getting the key based off the value
      if (choice === 'link') {
        setupLink()
      } else if (choice === 'unlink') {
        unlink()
      }
    })
}

main()