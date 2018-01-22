'use strict';

if (process.env.NODE_ENV === 'production') {
  const f = function(){console.log("production");}
  module.exports = f;
} else {
  module.exports = require('./lib/image-afloat-tool.js');
}
