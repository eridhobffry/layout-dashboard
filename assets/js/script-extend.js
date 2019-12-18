$('#add-return-reason').click(function() {
    $('.block-reasons:last').before('<div class="block-reasons section-bottom-20">' +
    '<div class="range">'+
        '<div class="cell-lg-10">'+
        '<input class="form-control" value="" id="retourneReasons" type="text" name="retourneReasons">'+
        '</div>'+
        '<div class="cell-lg-2 text-left">'+
        '<span class="remove"><i class="fa fa-trash text-red"></i></span>'+
        '</div>'+
    '</div>'+
    '</div>');
});
$('.optionBox-reason').on('click','.remove',function() {
 	$(this).parent().parent().parent().remove();
});

$('#add-return-condition').click(function() {
    $('.block-conditions:last').before('<div class="block-conditions section-bottom-20">' +
    '<div class="range">'+
        '<div class="cell-lg-10">'+
        '<input class="form-control" value="" id="retourneoConditions" type="text" name="retourneoConditions">'+
        '</div>'+
        '<div class="cell-lg-2 text-left">'+
        '<span class="remove-condition"><i class="fa fa-trash text-red"></i></span>'+
        '</div>'+
    '</div>'+
    '</div>');
});
$('.optionBox-condition').on('click','.remove-condition',function() {
 	$(this).parent().parent().parent().remove();
});

$( "#next-to-2" ).click(function() {
    $( "#trigger-2" ).trigger( "click" );
  });
$( "#next-to-3" ).click(function() {
    $( "#trigger-3" ).trigger( "click" );
  });
  