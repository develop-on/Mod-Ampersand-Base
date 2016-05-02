var app = require('ampersand-app');
var PageView = require('./base');
var template = require('../../templates/pages/personAdd.hbs');
var PersonForm = require('../forms/person');


module.exports = PageView.extend({
    pageTitle: 'add person',
    template: template,
    subviews: {
        form: {
            container: 'form',
            prepareView: function (el) {
                return new PersonForm({
                    el: el,
                    submitCallback: function (data) {
                        app.people.create(data, {
                            wait: true,
                            success: function () {
                                app.navigate('/collections');
                                app.people.fetch();
                            }
                        });
                    }
                });
            }
        }
    }
});
