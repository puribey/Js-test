// drag and drop 

console.log("hola");

$(document).ready(function(){

// Sorts list elements 

	$('.content').sortable({
	    placeholder: 'block-placeholder',
	    update: function (event, ui) {
	        // turn the dragged item into a "block"
	        ui.item.addClass('block');
	    }
	});


// Changes images 

	$('.itemImage').click(function(e) {
    	$(this).click();
	});
	$('.imageUpload').change(function(){
    fasterPreview( this );
	});

// Delete elements 

	$('.btn-delete').click(function(){

	});

});



function fasterPreview( uploader ) {
    if ( uploader.files && uploader.files[0] ){
          $('.itemImage').attr('src', 
             window.URL.createObjectURL(uploader.files[0]) );
    }
}

