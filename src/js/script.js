
var games = [
{"name":"Dixit","description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt quis praesentium est dolore amet dolorem! Deleniti doloribus in earum facere repudiandae enim atque sunt est aspernatur! Optio ipsa eum velit.","image":"https://www.lacitadelledesjeux.ch/1675-large_default/dixit-multi.jpg"},
{"name":"Forbidden Desert","description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus rem iure ipsa possimus praesentium maiores dicta. Non quos nostrum, praesentium pariatur, culpa vitae consectetur sit, commodi consequuntur ducimus maxime. Quo?","image":"https://cf.geekdo-images.com/jRdt_WBPfk8yMGn6AI1UMzhje24=/fit-in/1200x630/pic1528722.jpg"},
{"name":"Sushi Go!","description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus rem iure ipsa possimus praesentium maiores dicta. Non quos nostrum, praesentium pariatur, culpa vitae consectetur sit, commodi consequuntur ducimus maxime. Quo?","image":"https://www.brettspielversand.de/media/image/product/9340/md/sushi-go-party.jpg"},
];

// Trying to use local storage // NOT WORKING
localStorage.setItem('games', JSON.stringify(games));
var StoreGames = localStorage.getItem('games');
console.log(StoreGames);

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
var pcount = '<p>You now have '+listItem.length+' games in your list</p>'
wishlist.append(listItem);
itemCount.append(pcount);


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
		listItem.pop();
		//console.log(listItem.length);
		itemCount.empty().append('<p>You now have '+listItem.length+' games in your list</p>');
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
    // open
    $('[data-popup-open]').on('click', function(e)  {
    	e.preventDefault();
        var targeted_popup_class = jQuery(this).attr('data-popup-open');
        $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
    });
 
    // close
    $('[data-popup-close]').on('click', function(e)  {
    	 e.preventDefault();
        var targeted_popup_class = jQuery(this).attr('data-popup-close');
        $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
    });


});

//  Creating new items 

	$("#save").on('click',function (e) { 
		e.preventDefault();
		var imageDefault = "http://via.placeholder.com/320x320";
	    var game = $("#game").val();
	    console.log(game);
	    var desc = $("#desc").val();
	    console.log(desc);
	    
	    // I can append div but i don't know how to make edit and erase work
	    var newgame = '<div class="block" id="item_">'+
		'	<div class="item-img" id="img-1"><img class="itemImage profileImage" src="'+ imageDefault +'"/><input class="imageUpload edit_" type="file" name="picture" placeholder="Photo" required="" capture disabled>'+
		'	</div>'+
		'	<div class="item-about">'+
		'		<h3><input type="text" value="'+ game +'" class="h3-input" name="title" disabled></h3>'+
		'		<textarea name="info" value="item-description" class="edit_" maxlength="300" rows="5" cols="50" disabled>'+ desc +'</textarea>'+
		'		<button class="btn-edit" data-edit=".edit_">Edit</button>'+
		'		<button class="btn-delete" data-delete="#item_">Delete</button>'+
		'	</div>'+

		'</div>';
		wishlist.append(newgame);
		listItem.push(newgame);
		itemCount.empty().append('<p>You now have '+listItem.length+' games in your list</p>');
	});



});// ends document.ready 

// Preview of images

function fasterPreview( uploader ) {
    if ( uploader.files && uploader.files[0] ){
    	$(uploader).closest(".block").find('img').attr('src', 
             window.URL.createObjectURL(uploader.files[0]) );
    }
}



