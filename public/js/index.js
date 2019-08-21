import '../styles/main.scss';
require('webpack-jquery-ui');

$(() => {
    $('h1').click(function() {
        $(this).toggleClass('green', 500);
    })
})