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
      cmd.execSync('yarn link', {
        stdio: 'inherit',
      })
      // sanity check on yarn
      cmd.execSync('yarn', {
        stdio: 'inherit',
      })
      // link react
      cmd.execSync('cd node_modules/react ; yarn link', {
        stdio: 'inherit',
      })
      // link react-dom
      cmd.execSync('cd ../../node_modules/react-dom ; yarn link', {
        stdio: 'inherit',
      })
      // ---- setup link for main project
      cmd.execSync(`cd ${mainProjectPath}`, {
        stdio: 'inherit',
      })
      // prep/clean up
      cmd.execSync('rm -rf node_modules/@ocupop/4p-common ; rm -rf node_modules/react ; rm -rf node_modules/react-dom', {
        stdio: 'inherit',
      })
      // setup links
      cmd.execSync('yarn link @ocupop/4p-common ; yarn link react ; yarn link react-dom', {
        stdio: 'inherit',
      })
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
      await shelljs.exec('rm -rf node_modules/@ocupop/4p-common ; rm -rf node_modules/react ; rm -rf node_modules/react-dom ; rm yarn.lock')
      await shelljs.exec('yarn install')
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


// cd /Users/cdnicoll/gitrepo/_ocupop/4p-common
// yarn link
// yarn install
// cd node_modules/react
// yarn link
// cd ../../node_modules/react-dom
// yarn link
// cd /Users/cdnicoll/gitrepo/_ocupop/4p-admin
// rm -rf node_modules/@ocupop/4p-common
// rm -rf node_modules/react
// rm -rf node_modules/react-dom
// yarn link @ocupop/4p-common
// yarn link react
// yarn link react-dom
