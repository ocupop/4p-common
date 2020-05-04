# 4p-common
## Install
```bash
npm install --save @ocupop/4p-common
```

## Commands
  - `./`
    - `yarn start`: rolls up the `src` directory and watches for changes

  - `./example`
    - `yarn start`: Starts the demo application

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
### src/
Where our common components will be setup and created

---
### example/
A sandbox within this project to develop against. We pull components in from the `src/` directory and demonstrate how they're used

## Publishing
```
$ npm login <login with ocupop creds>
# [ ] Make sure to push changes to git first
# [ ] Make sure to bump the version number
$ npm publish
```