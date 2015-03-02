'use strict';

angular.module('lcsStalker')

.controller('MainCtrl', function($scope) {

    $scope.teams = [{
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

    $scope.players = [{
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

    $scope.currentTeam = null;

    $scope.editingPlayer = null;

    function setCurrentTeam(team) {
        $scope.currentTeam = team || null;

        cancelCreating();
        cancelEditing();
    }

    function setEditingPlayer(player) {
        $scope.editingPlayer = angular.copy(player);
    }

    $scope.setEditingPlayer = setEditingPlayer;

    function updatePlayer(player) {
        var index = _.findIndex($scope.players, function(b){
            return b.id == player.id;
        });

        $scope.players[index] = player;

        $scope.editingPlayer = null;
        $scope.isEditing = false;
    }

    function isSelectedPlayer(playerId) {
        return $scope.editingPlayer !== null && $scope.editingPlayer.id === playerId
    }

    $scope.updatePlayer = updatePlayer;

    function isCurrentTeam(team) {
        return $scope.currentTeam !== null && team.name === $scope.currentTeam.name;
    }

    $scope.setCurrentTeam = setCurrentTeam;
    $scope.isCurrentTeam = isCurrentTeam;
    $scope.isSelectedPlayer = isSelectedPlayer;

    function deletePlayer(player) {
        _.remove($scope.players, function(b) {
            return b.id == player.id;
        });
    }

    $scope.deletePlayer = deletePlayer;

    // -------------------
    // Creating and Editing States
    // -------------------

    $scope.isCreating = false;
    $scope.isEditing = false;

    function startCreating() {
        $scope.isCreating = true;
        $scope.isEditing = false;

        resetCreateForm();
    }

    function cancelCreating() {
        $scope.isCreating = false;
    }

    function shouldShowCreating() {
        return $scope.currentTeam && !$scope.isEditing;
    }

    $scope.startCreating = startCreating;
    $scope.cancelCreating = cancelCreating;
    $scope.shouldShowCreating = shouldShowCreating;

    function startEditing() {
        $scope.isCreating = false;
        $scope.isEditing = true;
    }

    function cancelEditing() {
        $scope.isEditing = false;
    }

    function shouldShowEditing() {
        return $scope.isEditing && !$scope.isCreating;
    }

    $scope.startEditing = startEditing;
    $scope.cancelEditing = cancelEditing;
    $scope.shouldShowEditing = shouldShowEditing;

    ///////////////////////
    //  CRUD             //
    ///////////////////////

    function resetCreateForm() {
        $scope.newPlayer = {
            name: '',
            team: ''
        }
    }

    function createPlayer(player) {
        player.id = $scope.players.length;
        $scope.players.push( player );

        resetCreateForm();
    }

    $scope.createPlayer = createPlayer;

});