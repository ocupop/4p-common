# 4p-common
## Install
```bash
npm install --save 4p-common
```

## Commands

## Components
### Fields
Formik Fields:
- AddressInput
- CreateSelect
- CurrencyInput
- ... @TODO add the rest and link to

## Usage
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

### example/
A sandbox within this project to develop against. We pull components in from the `src/` directory and demonstrate how they're used