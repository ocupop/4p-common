# 4p-common
## Install
```bash
npm install --save @ocupop/4p-common
```

## Commands
  `yarn start`: rolls up the `src` directory and watches for changes
  
  `yarn test`: Tests the components using jest

  `yarn build`: Compiles the components for distribution


## Components
### Fields
Formik Fields:
- AddressInput
- CreateSelect
- CurrencyInput
- ... @TODO add the rest and link to

## Usage
@TODO This needs to be updated with examples
```jsx
import React, { Component } from 'react'

import MyComponent from '4p-common'

class Example extends Component {
  render () {
    return (
      <MyComponent />
    )
  }
}
```

## Developing
### ./
Where our common components will be setup and created. You'll want to run `yarn start` to roll the changes each time there are updates to them

You can either develop within the `/example` directory which links to the repo within it's package file.

It's also possible to run run `yarn link:common` which allows us to work in another project. (Note, if it fails make sure to run `yarn` within the `link/` directory

### Example
```bash
## 4p-common project
4p-common [feature/webpack] % yarn link:common
yarn run v1.17.3
$ node -r esm ./link/setup.js
? What do you want to do (Use arrow keys)
❯ Link Project
  Unlink Porject
```

---

### example/
A sandbox within this project to develop against. We pull components in from the `src/` directory and demonstrate how they're used. To develop, within this directory run `yarn start` to start the application. Note that the root level component directory needs to be watching for component changes.

The 4P-Common component is simply [linked](https://docs.npmjs.com/cli/link.html) and pulls in changes.


## Publishing
```
$ npm login <login with ocupop creds>
# [ ] Make sure to push changes to git first
# [ ] Make sure to bump the version number
$ npm publish
```
