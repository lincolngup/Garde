/*
 * Bootstrap's default setting is to keep the menu open when you click on a menu
 * item. This code overrides that behaviour by calling by calling .collapse('hide').
 * The use of the "in" class ensure this only gets called if the menu is already
 * expanded.
 */
$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
});