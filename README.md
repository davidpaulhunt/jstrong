JSTRONG
=======

Addition to siphr explicitly for JSON objects.

Possible use cases:
* web tokens
* application level encryption before persisting to database

### Installation

Using npm:
```
$ npm install --save jstrong
```

### Usage

```js
const jstrong = require('jstrong')(MY_SECRET_KEY);

const user = {
  id: 1, username: 'Homer Simpson', home_town: 'Springfield',
};

const strongUser = jstrong.stringify(user); // => '{"sFHg6oX9AMI7ejBsw==":"v7Shp9Tylui==",...}'

const plainUser = jstrong.parse(strongUser); // => { id: 1, ... }
```
