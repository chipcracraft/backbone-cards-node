var Backbone = require('Backbone')
var UserCollection = require('./models-collections.js')
var ViewTemplateConstructor = require('./view.js')
var cardsTemplateFn = require('./cardsTemp.js')



var AppRouter = Backbone.Router.extend({

        routes: {
          "nationality/:nat/gender/:gender" : "showNatGender",
          "gender/:gender" : "showUsrGender",
          "nationality/:nat" : "showUsrNation",
          "" : "showHomePage"

        },



          showNatGender: function(nat,gen){
            var coll = new UserCollection("results=24&nationality="+nat+"&gender="+gen)
            console.log(coll.url)
            coll.fetch().then(function(){
              var view= new ViewTemplateConstructor('#app-container',cardsTemplateFn)
              view.render(coll)
            })

          },



        showUsrNation: function(nat){
          var coll = new UserCollection("results=24&nat="+ nat)
            coll.fetch().then(function(){
              var view= new ViewTemplateConstructor('#app-container', cardsTemplateFn)
              view.render(coll)
            })
        },

    showHomePage: function(){

      var coll = new UserCollection("results=24")

      coll.fetch().then(function(){
        var view = new ViewTemplateConstructor('#app-container', cardsTemplateFn)
        view.render(coll)

      })

    },
      initialize: function(){
        Backbone.history.start()
      }
})
var app = new AppRouter()
