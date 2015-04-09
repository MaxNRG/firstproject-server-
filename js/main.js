$('document').ready(function(){
	$('.uploadColumn').load('profileparts/mainslogan.html');
});

$('body').vegas({
    slides: [
        { src: 'css/images/kai.jpg' },
        { src: 'css/images/centopani.jpg' },
        { src: 'css/images/mcgrath.jpg' }
    ]
});


// show , hide profile & log in blocks
$(document).ready(function (){
	$(".createProfile").click(function (){
		if($(".profileBlock").css("display") == "none"){
			$(".profileBlock").show("normal");
		} else if ($(".profileBlock").css("display") == "block" ){
			$(".profileBlock").hide("normal");
		}
	});

	$(".logInProfile").click(function (){
		if($(".logInBlock").css("display") == "none"){
			$(".logInBlock").show("normal");
		} else if ($(".logInBlock").css("display") == "block"){
			$(".logInBlock").hide("normal");
		}
	});

});


// getting data
(function(){
	var profileBtn = document.getElementById('profileButton');

	profileBtn.onclick = function (){
		var userObj = {
			name : document.getElementById('userName').value,
			email : document.getElementById('userEmail').value,
			password : document.getElementById('userPassword').value,
			age : document.getElementById('userAge').value,
			weight : document.getElementById('userWeight').value,
			height : document.getElementById('userHeight').value
		}
		localStorage.setItem(localStorage.length, JSON.stringify(userObj));
		userObj = {};

		$(".profileBlock").hide("normal");
	};
})();

// set data from local storage to session storage
(function(){
	var logInBtn = document.getElementById('logInButton'),
			usersArr = [];

	logInBtn.onclick = function (){
		var	logInEmail = document.getElementById('logInEmail').value;
		var	logInPw = document.getElementById('logInPassword').value;

		for( var i = 0; i < localStorage.length; i++){
			usersArr.push(JSON.parse(localStorage[i]));
		}
		for( var k = 0; k < usersArr.length; k++){
			if(usersArr[k].email === logInEmail && usersArr[k].password === logInPw){
				sessionStorage.setItem(1, JSON.stringify(usersArr[k]));
			}	
		}

		$(".logInBlock").hide("normal");
		document.getElementById('logInEmail').value = "";
		document.getElementById('logInPassword').value = "";
	}
})();



