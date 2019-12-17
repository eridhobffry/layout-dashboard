$('#add-return-reason').click(function() {
    $('.block-reasons:last').before('<div class="block-reasons"><input class="form-control" value="" id="" type="text" name="returnReason"> <span class="remove"><i class="fa fa-trash text-red"></i></span></div>');
});
$('.optionBox-reason').on('click','.remove',function() {
 	$(this).parent().remove();
});

$( "#next-to-2" ).click(function() {
    $( "#trigger-2" ).trigger( "click" );
  });
$( "#next-to-3" ).click(function() {
    $( "#trigger-3" ).trigger( "click" );
  });
  