$(document).ready(function(){
$('#darkButton').click(function(){
    $('body').toggleClass("darkMode");
    $(this).text($(this).text() == 'Dark Mode' ? 'Light Mode' : 'Dark Mode');
    $('.darkText').toggleClass("dark");

 });
});
