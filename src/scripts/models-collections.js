var appContainer = document.querySelector('#app-container')
var Backbone = require('Backbone')

var UserModel = Backbone.Model.extend({
          idAttribute: 'email'

})


var UserCollection = Backbone.Collection.extend({
        url: '',
        model: UserModel,
        parse: function(rawJSONRes){
            return rawJSONRes.results

        },
        initialize: function(qryStr){
          this.url ="https://randomuser.me/api?" + qryStr

        }

})
module.exports= UserCollection
