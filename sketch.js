$(document).ready(function () {
    for (var i = 0; i <= 10; i++) {
        $('<div />', {
            'class' : 'sameDiv',
            'id'    : 'div' + i
        }).appendTo('body');
    }
});