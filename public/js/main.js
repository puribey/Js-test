function fasterPreview(e){e.files&&e.files[0]&&$(".itemImage").attr("src",window.URL.createObjectURL(e.files[0]))}console.log("hola"),$(document).ready(function(){$(".content").sortable({placeholder:"block-placeholder",update:function(e,t){t.item.addClass("block")}}),$(".itemImage").click(function(e){$(this).click()}),$(".imageUpload").change(function(){fasterPreview(this)}),$(".btn-delete").click(function(){})});