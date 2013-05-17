var Backbone = require('backbone');
var Collection = require('./collection');
var Img = require('./image');

module.exports = Collection.extend({
    model: Img,
    url: '/_/images'
});
