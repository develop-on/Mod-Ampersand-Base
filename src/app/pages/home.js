var PageView = require('./base');
var template = require('../../templates/pages/home.hbs');


module.exports = PageView.extend({
    pageTitle: 'home',
    template: template
});
