/*** Which FB Page **/
var FBpageName = function () {
	// This function is anonymous, is executed immediately and
	// the return value is assigned to QueryString!
	var query_string = {};
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i=0;i<vars.length;i++) {
	var pair = vars[i].split("=");
		// If first entry with this name
	if (typeof query_string[pair[0]] === "undefined") {
		query_string[pair[0]] = pair[1];
		// If second entry with this name
	} else if (typeof query_string[pair[0]] === "string") {
		var arr = [ query_string[pair[0]], pair[1] ];
		query_string[pair[0]] = arr;
		// If third or later entry with this name
	} else {
		query_string[pair[0]].push(pair[1]);
	}
	}
	return query_string;
} ();

/** * Retrieve public data for this page ***/
$(document).ready(function(){
	/* Dapatkan data tanpa Access Token FB */
	$.getJSON('https://graph.facebook.com/' + FBpageName.fbPageName, function(fbResults) {

		/*Assign Title dekat page*/
		var pgtit = document.createElement("title");
		var fbtit = document.createTextNode(fbResults.name);
		pgtit.appendChild(fbtit);
		document.head.appendChild(pgtit);

		/*Assign about , description if any*/
		if(document.getElementById('FBpageAbout') !== null){
			document.getElementById('FBpageAbout').innerHTML = fbResults.about;
			console.log('FBpageAbout: AVAILABLE');
		}

		if(document.getElementById('FBpageDescription') !== null){
			document.getElementById('FBpageDescription').innerHTML = fbResults.description;
			console.log('FBpageDescription: AVAILABLE');
		}

		if(document.getElementById('FBpageAddress') !== null){
			if(typeof fbResults.location =='object'){
				var lokasi = fbResults.location;
				document.getElementById('FBpageAddress').innerHTML = lokasi.street;
				console.log(lokasi.street);
			} else {
				/*notify user need to add address location*/
				document.getElementById('FBpageAddress').innerHTML = "Liked by " + fbResults.likes + " customers.";
			}
		}

		/*assign fb name to most places in page element */
		if(document.getElementsByClassName("FBpagePageName") !== null){
			console.log('FBpagePageName: AVAILABLE');
			var PageName = document.getElementsByClassName("FBpagePageName");
			for(i=0;i<PageName.length;i++)
			{
				PageName[i].innerHTML = fbResults.name;
			}
		}
	});


});

/** * Retrieve jSon data from kweri-fb and assigned to specific placement id***/
/*function getfbFeeds(json){
	var fbFeeds = jQuery.parseJSON(json) , container = document.getElementById('FBfeeds');

	$.each(JSON.parse(json),function(idx,obj){
		console.log("Title: " + this.name);
		alert(obj.Name);
	})
}*/

function getFBpix(json){
	var FBpix, container = document.getElementById('FBpagePhoto');

	try {
		FBpix = jQuery.parseJSON(json);
		container.innerHTML = '<img class="img-circle" src="' + FBpix.pixURL + '"></img';
	} catch(e) {
		container.innerHTML = "error " + e;
	}
}
