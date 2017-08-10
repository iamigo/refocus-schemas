# refocus-schemas

Schemas for validating Refocus artifacts using Joi.

Joi (https://github.com/hapijs/joi) has comprehensive API documentation on
using `validate`/`assert`/`attempt` to perform the validation.

## Installation

```
npm install --save refocus-schemas
```

## Usage

The module exports all the schemas in a nested structure like this:
- refocus
 - ApiLink
 - Aspect
 - Sample
 - Subject
- refocus-collector
 - TransformArgs

### Example

To validate an Aspect:

```
const Aspect = require('refocus-schemas').refocus.Aspect;

const myAspect = {
  name: 'Foo',
  timeout: '5m',
};

Aspect.validate(myAspect, (res) => {
  if (res.error) {
    console.log(res.error);
  }
});
```
