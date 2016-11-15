module.exports = (secret) => {
  const siphr = require('siphr')(secret);
  return {
    stringify: function stringify(object) {
      return JSON.stringify(siphr.mask(object));
    },

    parse: function parse(jsonString) {
      return siphr.unmask(JSON.parse(jsonString));
    },
  };
};
