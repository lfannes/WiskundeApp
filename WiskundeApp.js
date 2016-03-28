if (Meteor.isClient) {
  Session.setDefault('term1', 1);
  Session.setDefault('term2', 0);

  Template.som.helpers({
    term1: function () {
      return Session.get('term1');
    },
   term2: function () {
      return Session.get('term2');
    } 
  });

  Template.som.events({
    'click button': function () {
      var randomTerm1 = Math.random() *11;
      var AfrondenTerm1 = Math.floor(randomTerm1);
      Session.set('term1', AfrondenTerm1);

      var randomTerm2 = Math.random() *101;
      var AfrondenTerm2 = Math.floor(randomTerm2);
      Session.set('term2', AfrondenTerm2);
    },
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
