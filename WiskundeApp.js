function maakRandomGetalTussen0En(max)
{
  var randomGetal = Math.random()*(max+1);
  var afgerondGetal = Math.floor(randomGetal);
  return afgerondGetal;
}

if (Meteor.isClient) {
  Session.setDefault('term1', maakRandomGetalTussen0En(10));
  Session.setDefault('term2', maakRandomGetalTussen0En(10));
  Session.setDefault('juisteScore', 0);
  Session.setDefault('fouteScore', 0);

  Template.som.helpers({
    term1: function () {
      return Session.get('term1');
    },
    term2: function () {
      return Session.get('term2');
    }
  });
  Template.score.helpers({
    juisteScore: function () {
      return Session.get('juisteScore');
    },
    fouteScore: function () {
      return Session.get('fouteScore');
    }
  });
  Template.som.events({
    'submit .antwoord-formulier': function (event) {
      event.preventDefault();
      var juistAntwoord = Session.get('term1')+ Session.get('term2');
      var userAntwoord = Number(event.target.antwoord.value);
      if (userAntwoord == juistAntwoord)
      {
        Session.set('juisteScore', Session.get('juisteScore')+1);
        alert('Je hebt het goed gedaan!!!');
      }
      else
      {
        Session.set('fouteScore', Session.get('fouteScore')+1);
        alert('Sorry, je hebt het mis. Het was ' +juistAntwoord);
      }

      Session.set('term1', maakRandomGetalTussen0En(10));
      Session.set('term2', maakRandomGetalTussen0En(10));
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
