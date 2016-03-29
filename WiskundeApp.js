function maakRandomGetalTussen0En(max)
{
  var randomGetal = Math.random()*(max+1);
  var afgerondGetal = Math.floor(randomGetal);
  return afgerondGetal;
}

if (Meteor.isClient) {
  Session.setDefault('term1', maakRandomGetalTussen0En(10));
  Session.setDefault('term2', maakRandomGetalTussen0En(10));

  Template.som.helpers({
    term1: function () {
      return Session.get('term1');
    },
   term2: function () {
      return Session.get('term2');
    } 
  });

  Template.som.events({
    'submit .antwoord-formulier': function (event) {
      var juistAntwoord = Session.get('term1')+ Session.get('term2');
      var userAntwoord = Number(event.target.antwoord.value);
      if (userAntwoord == juistAntwoord)
      {
        alert('Je hebt het goed gedaan!!!');
      }
      else
      {
        alert('Sorry, je hebt het mis. Het was ' +juistAntwoord);
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
