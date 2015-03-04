angular.module('lcsStalker.models.teams', [

])
    .service('TeamsModel', function() {
        var model = this,
        teams = [{
            "id": 0,
            "name": "TSM"
        }, {
            "id": 1,
            "name": "C9"
        }, {
            "id": 2,
            "name": "CLG"
        }, {
            "id": 3,
            "name": "DIG"
        }];

        model.getTeams = function() {
            return teams;
        }
    })
;