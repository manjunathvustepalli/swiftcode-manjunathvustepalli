var app = angular.module('chatApp', ['ngMaterial']);
app.controller('chatController', function ($scope) {
    $scope.messages = [
        {
            'sender': 'USER',
            'text': 'Hello'
        },
        {
            'sender': 'BOT',
            'text': 'Hi what can i do for u'
        },
        {
            'sender': 'USER',
            'text': 'Do a google search'
        },
        {
            'sender': 'BOT',
            'text': 'Im on it boss'
        }
    ];

});