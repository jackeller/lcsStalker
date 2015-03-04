angular.module('lcsStalker.models.players', [

    ])
    .service('PlayersModel', function(){
        var model = this,
            players = [{
                "id": 0,
                "name": "Marcus 'Dyrus' Hill",
                "team": "TSM"
            }, {
                "id": 1,
                "name": "Søren 'Bjergsen' Bjerg",
                "team": "TSM"
            }, {
                "id": 2,
                "name": "Darshan 'Zion Spartan' Upadhyaya",
                "team": "CLG"
            }, {
                "id": 3,
                "name": "Alan 'KiWiKiD' Nguyen",
                "team": "DIG"
            }, {
                "id": 4,
                "name": "An 'Balls' Le",
                "team": "C9"
            }, {
                "id": 5,
                "name": "Will 'Meteos' Hartman",
                "team": "C9"
            }, {
                "id": 6,
                "name": "Hai 'Hai' Lam",
                "team": "C9"
            }, {
                "id": 7,
                "name": "Zachary 'Sneaky' Scuderi",
                "team": "C9"
            }, {
                "id": 8,
                "name": "Daerek 'LemonNation' Hart",
                "team": "C9"
            }];

        model.getPlayers = function() {
            return players;
        }
    })
;