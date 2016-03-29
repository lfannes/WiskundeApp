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
      function maakRandomGetalTussen0En(max)
      {
        var randomGetal = Math.random()*(max+1);
        var afgerondGetal = Math.floor(randomGetal);
        return afgerondGetal;
      }

      Session.set('term1', maakRandomGetalTussen0En(10));

      Session.set('term2', maakRandomGetalTussen0En(10));
    },
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
