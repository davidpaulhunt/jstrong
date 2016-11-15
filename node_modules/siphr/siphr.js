const crypto = require('crypto');

module.exports = (secret) => {
  return {
    mask: function mask(source) {
      if (Object.prototype.toString.call(source) !== '[object Object]') {
        const value = source.toString();
        const cipher = crypto.createCipher('aes256', secret);
        cipher.update(value, 'utf8', 'base64');
        return cipher.final('base64');
      }

      const target = {};
      for (const key in source) {
        if (source.hasOwnProperty(key)) {
          target[_mask(key)] = _mask(source[key]);
        }
      }
      return target;
    },

    unmask: unmask(source) {
      if (Object.prototype.toString.call(source) !== '[object Object]') {
        const decipher = crypto.createDecipher('aes256', secret);
        decipher.update(source, 'base64', 'utf8');
        const value = decipher.final('utf8');
        if (isNaN(value)) {
          return value;
        }

        return parseInt(value, 10);
      }

      const target = {};
      for (const key in source) {
        if (source.hasOwnProperty(key)) {
          target[_unmask(key)] = _unmask(source[key]);
        }
      }
      return target;
    },
  };
};
