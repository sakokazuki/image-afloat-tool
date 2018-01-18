'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./lib/image-afloat-tool.min.js');
} else {
  const f = function(){console.log("production");}
  module.exports = f;
}
