const assert = require('assert');
const jstrong = require('../jstrong')('password');

const obj = { id: 1, username: 'Homer Simpson', home_town: 'Springfield' };
const weakObj = JSON.stringify(obj);
const strongObj = jstrong.stringify(obj);

assert.notEqual(strongObj, weakObj);

const plainObj = jstrong.parse(strongObj);

assert.deepEqual(plainObj, obj);
