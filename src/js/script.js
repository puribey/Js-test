
var games = [
{"name":"Dixit","description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt quis praesentium est dolore amet dolorem! Deleniti doloribus in earum facere repudiandae enim atque sunt est aspernatur! Optio ipsa eum velit.","image":"https://www.lacitadelledesjeux.ch/1675-large_default/dixit-multi.jpg"},
{"name":"Forbidden Desert","description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus rem iure ipsa possimus praesentium maiores dicta. Non quos nostrum, praesentium pariatur, culpa vitae consectetur sit, commodi consequuntur ducimus maxime. Quo?","image":"https://cf.geekdo-images.com/jRdt_WBPfk8yMGn6AI1UMzhje24=/fit-in/1200x630/pic1528722.jpg"},
{"name":"Sushi Go!","description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus rem iure ipsa possimus praesentium maiores dicta. Non quos nostrum, praesentium pariatur, culpa vitae consectetur sit, commodi consequuntur ducimus maxime. Quo?","image":"https://www.brettspielversand.de/media/image/product/9340/md/sushi-go-party.jpg"},
];


var listItem = games.map(function(game,i){
 	return '<div class="block" id="item_'+i+'">'+
'	<div class="item-img" id="img-1"><img class="itemImage profileImage" src="'+ game.image +'"/><input class="imageUpload edit_'+i+'" type="file" name="picture" placeholder="Photo" required="" capture disabled>'+
'	</div>'+
'	<div class="item-about">'+
'		<h3><input type="text" value="'+ game.name +'" class="h3-input" name="title" disabled></h3>'+
'		<textarea name="info" value="item-description" class="edit_'+i+'" maxlength="300" rows="5" cols="50" disabled>'+ game.description +'</textarea>'+
'		<button class="btn-edit" data-edit=".edit_'+i+'">Edit</button>'+
'		<button class="btn-delete" data-delete="#item_'+i+'">Delete</button>'+
'	</div>'+

'</div>';

});


$(document).ready(function(){

// Sorts list elements 

	$('.content').sortable({
	    placeholder: 'block-placeholder',
	    update: function (event, ui) {
	        // turn the dragged item into a "block"
	        ui.item.addClass('block');
	    }
	});

// Item Counter and append listItem

var wishlist = $('#wishlist');
var itemCount = $('#item-count');
wishlist.append(listItem);
itemCount.append('<p>You now have '+games.length+' games in your list</p>');


// Changes images 

	$(".profileImage").click(function(e) {
    	$(this).closest(".block").find(".imageUpload").click();
	});

	$(".imageUpload").change(function(){
    	fasterPreview( this );
	});


// Delete elements 
	
	$('.btn-delete').on('click',function(){
		var dataDelete =  $(this).data("delete");
		$(dataDelete).fadeOut();

	});

// Edit elements

	$('.btn-edit').on('click',function(e){
		var btnEdit =  $(this).data("edit");

		$('textarea').prop("disabled",true);
		$('input').prop("disabled",true)
		$(btnEdit).prop("disabled",false);
	});

// Pop up

$(function() {
    //----- OPEN
    $('[data-popup-open]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-open');
        $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
 
        e.preventDefault();
    });
 
    //----- CLOSE
    $('[data-popup-close]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-close');
        $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
 
        e.preventDefault();
    });


});

});// ends document.ready 


function fasterPreview( uploader ) {
    if ( uploader.files && uploader.files[0] ){
    	$(uploader).closest(".block").find('img').attr('src', 
             window.URL.createObjectURL(uploader.files[0]) );
    }
}


