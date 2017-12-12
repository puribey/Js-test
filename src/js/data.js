var games = [
{"name":"Dixit","description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt quis praesentium est dolore amet dolorem! Deleniti doloribus in earum facere repudiandae enim atque sunt est aspernatur! Optio ipsa eum velit.","image":"https://www.lacitadelledesjeux.ch/1675-large_default/dixit-multi.jpg"},
{"name":"Forbidden Desert","description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus rem iure ipsa possimus praesentium maiores dicta. Non quos nostrum, praesentium pariatur, culpa vitae consectetur sit, commodi consequuntur ducimus maxime. Quo?","image":"https://cf.geekdo-images.com/jRdt_WBPfk8yMGn6AI1UMzhje24=/fit-in/1200x630/pic1528722.jpg"},
];

console.log(games);

var listItem = games.map(function(game,i){
 	return '<div class="block" id="item_'+i+'">'+
'	<div class="item-img" id="img-1"><img class="itemImage" src="'+ game.image +'" /><input class="imageUpload" type="file" name="profile_photo" placeholder="Photo" required="" capture>'+
'	</div>'+
'	<div class="item-about">'+
'		<h3><input type="text" value="'+ game.name +'" class="h3-input" disabled></h3>'+
'		<textarea name="text" value="item-description" class="edit_'+i+'" maxlength="300" rows="5" cols="50" disabled>'+ game.description +'</textarea>'+
'		<button class="btn-edit" data-edit=".edit_'+i+'">Edit</button>'+
'		<button class="btn-save">Save</button>'+
'		<button class="btn-delete" data-delete="#item_'+i+'">Delete</button>'+
'	</div>'+

'</div>';
});

$(document).ready(function(){
	var wishlist = $('#wishlist');
	wishlist.append(listItem);
});

/*
var listItem =[];

for( var i = 0; i< jdata.length; i++){
	var g = jdata[i];

var item = '<div class="block">'+
'	<div class="item-img" id="img-1"><img class="itemImage" src="'+ g.image +'" /><input class="imageUpload" type="file" name="profile_photo" placeholder="Photo" required="" capture>'+
'	</div>'+
'	<div class="item-about">'+
'		<h3><input type="text" value="'+ g.name +'" class="h3-input" disabled></h3>'+
'		<textarea name="text" value="item-description" maxlength="300" rows="5" cols="50" disabled>'+ g.description +'</textarea>'+
'		<button class="btn-edit">Edit</button>'+
'		<button class="btn-save">Save</button>'+
'		<button class="btn-delete">Delete</button>'+
'	</div>'+
'</div>';

listItem.push(item);
}


games.forEach(function(game){
	var item = '<div class="block">'+
'	<div class="item-img" id="img-1"><img class="itemImage" src="'+ game.image +'" /><input class="imageUpload" type="file" name="profile_photo" placeholder="Photo" required="" capture>'+
'	</div>'+
'	<div class="item-about">'+
'		<h3><input type="text" value="'+ game.name +'" class="h3-input" disabled></h3>'+
'		<textarea name="text" value="item-description" maxlength="300" rows="5" cols="50" disabled>'+ game.description +'</textarea>'+
'		<button class="btn-edit">Edit</button>'+
'		<button class="btn-save">Save</button>'+
'		<button class="btn-delete">Delete</button>'+
'	</div>'+
'</div>';

listItem.push(item);
});

*/

