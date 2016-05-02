var View = require('ampersand-view');
var template = require('../../templates/includes/person.hbs');


module.exports = View.extend({
    template: template,
    bindings: {
        'model.fullName': '[data-hook~=name]',
        'model.avatar': {
            type: 'attribute',
            hook: 'avatar',
            name: 'src'
        },
        'model.editUrl': {
            type: 'attribute',
            hook: 'action-edit',
            name: 'href'
        },
        'model.viewUrl': {
            type: 'attribute',
            hook: 'name',
            name: 'href'
        }
    },
    events: {
        'click [data-hook~=action-delete]': 'handleRemoveClick'
    },
    handleRemoveClick: function () {
        this.model.destroy();
        return false;
    }
});
