var games = [
{"name":"Dixit","description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt quis praesentium est dolore amet dolorem! Deleniti doloribus in earum facere repudiandae enim atque sunt est aspernatur! Optio ipsa eum velit.","image":"https://www.lacitadelledesjeux.ch/1675-large_default/dixit-multi.jpg"},
{"name":"Forbidden Desert","description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus rem iure ipsa possimus praesentium maiores dicta. Non quos nostrum, praesentium pariatur, culpa vitae consectetur sit, commodi consequuntur ducimus maxime. Quo?","image":"https://cf.geekdo-images.com/jRdt_WBPfk8yMGn6AI1UMzhje24=/fit-in/1200x630/pic1528722.jpg"},
{"name":"Sushi Go!","description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus rem iure ipsa possimus praesentium maiores dicta. Non quos nostrum, praesentium pariatur, culpa vitae consectetur sit, commodi consequuntur ducimus maxime. Quo?","image":"https://cf.geekdo-images.com/jRdt_WBPfk8yMGn6AI1UMzhje24=/fit-in/1200x630/pic1528722.jpg"},
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
	var wishlist = $('#wishlist');
	var itemCount = $('#item-count');
	wishlist.append(listItem);
	itemCount.append('<p>You now have '+games.length+' games in your list</p>');

});


// $("#newItem").seralize(); => me traigo los datos del form en forma de json 

