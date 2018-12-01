
$('.grid').masonry({
    itemSelector: '.grid-item'
});
var $grid = $('.grid').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows'
});

$('.filter-button-group').on('click', 'p', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({filter: filterValue});

});
$('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'p', function() {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $( this ).addClass('is-checked');
    });
});



