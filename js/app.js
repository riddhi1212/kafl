var main = function() {
	console.log("in main");
	$('#found-post-btn').click(function(){
		console.log('btn clicked');
		var name = $('#found-name').val();
		$('<li>').text(name).addClass('list-group-item').prependTo('.found-people-list');
	});
	$('#find-post-btn').click(function(){
		console.log('btn clicked');
		var name = $('#find-name').val();
		$('<li>').text(name).addClass('list-group-item').prependTo('.find-people-list');
	});
}

$(document).ready(main);