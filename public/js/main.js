function fasterPreview(e){e.files&&e.files[0]&&$("#profileImage").attr("src",window.URL.createObjectURL(e.files[0]))}var games=[{name:"Dixit",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt quis praesentium est dolore amet dolorem! Deleniti doloribus in earum facere repudiandae enim atque sunt est aspernatur! Optio ipsa eum velit.",image:"https://www.lacitadelledesjeux.ch/1675-large_default/dixit-multi.jpg"},{name:"Forbidden Desert",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus rem iure ipsa possimus praesentium maiores dicta. Non quos nostrum, praesentium pariatur, culpa vitae consectetur sit, commodi consequuntur ducimus maxime. Quo?",image:"https://cf.geekdo-images.com/jRdt_WBPfk8yMGn6AI1UMzhje24=/fit-in/1200x630/pic1528722.jpg"},{name:"hello",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus rem iure ipsa possimus praesentium maiores dicta. Non quos nostrum, praesentium pariatur, culpa vitae consectetur sit, commodi consequuntur ducimus maxime. Quo?",image:"https://cf.geekdo-images.com/jRdt_WBPfk8yMGn6AI1UMzhje24=/fit-in/1200x630/pic1528722.jpg"}],listItem=games.map(function(e,t){return'<div class="block" id="item_'+t+'">\t<div class="item-img" id="img-1"><img class="itemImage" src="'+e.image+'" id="profileImage" /><input class="imageUpload edit_'+t+'" id="imageUpload" type="file" name="picture" placeholder="Photo" required="" capture disabled>\t</div>\t<div class="item-about">\t\t<h3><input type="text" value="'+e.name+'" class="h3-input" name="title" disabled></h3>\t\t<textarea name="info" value="item-description" class="edit_'+t+'" maxlength="300" rows="5" cols="50" disabled>'+e.description+'</textarea>\t\t<button class="btn-edit" data-edit=".edit_'+t+'">Edit</button>\t\t<button class="btn-save">Save</button>\t\t<button class="btn-delete" data-delete="#item_'+t+'">Delete</button>\t</div></div>'});$(document).ready(function(){var e=$("#wishlist"),t=$("#item-count");e.append(listItem),t.append("<p>You now have "+games.length+" games in your list</p>")}),$(document).ready(function(){$(".content").sortable({placeholder:"block-placeholder",update:function(e,t){t.item.addClass("block")}}),$("#profileImage").click(function(e){$("#imageUpload").click()}),$("#imageUpload").change(function(){fasterPreview(this)}),$(".btn-delete").on("click",function(){var e=$(this).data("delete");$(e).fadeOut()}),$(".btn-edit").on("click",function(){var e=$(this).data("edit");$("textarea").prop("disabled",!0),$("input").prop("disabled",!0),$(e).prop("disabled",!1)}),$(function(){$("[data-popup-open]").on("click",function(e){var t=jQuery(this).attr("data-popup-open");$('[data-popup="'+t+'"]').fadeIn(350),e.preventDefault()}),$("[data-popup-close]").on("click",function(e){var t=jQuery(this).attr("data-popup-close");$('[data-popup="'+t+'"]').fadeOut(350),e.preventDefault()})})});