// uploading profile page and profile menu
	$('.profilePage').click(function(){
		$('.uploadColumn').load('profileparts/profilemenu.html');
	});
// back to main page
(function(){
	$('.main').click(function(){
		$('.uploadContainer').load('profileparts/mainslogan.html');
	});
});
