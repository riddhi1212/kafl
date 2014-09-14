var main = function() {
	console.log("in main");
	$('#found-post-btn').click(function(){
		var name = $('#found-name').val();

		if (name.length === 0) return;

		var age = $('#found-age').val();
		var by = $('#found-by').val();
		var div = $('<div>').addClass('row');
		$('<p>').addClass('col-md-4').text(name).appendTo(div);
		$('<p>').addClass('col-md-4').text(age).appendTo(div);
		$('<p>').addClass('col-md-4').text(by).appendTo(div);
		$('<li>').append(div).addClass('list-group-item').prependTo('.found-people-list'); 		

//		$('<li>').text(name).addClass('list-group-item').prependTo('.found-people-list');
		$('#found-name').val('');
		$('#found-age').val('');
		$('#found-tel').val('');
		$('#found-by').val('');
	});
	$('#find-post-btn').click(function(){
		var name = $('#find-name').val();
		if (name.length === 0) return;
		$('<li>').text(name).addClass('list-group-item').prependTo('.find-people-list');

		$('#find-name').val('');
		$('#find-age').val('');
		$('#find-tel').val('');
	});
}

$(document).ready(main);