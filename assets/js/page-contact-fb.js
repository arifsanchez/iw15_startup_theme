	if(null==pathToLoadingImage||pathToLoadingImage==""||pathToLoadingImage=="undefined")
		var pathToLoadingImage = '..assets/img/loading-big.gif';;
	
	if(null==famaxWidgetWidth||famaxWidgetWidth==""||famaxWidgetWidth=="undefined")
		var famaxWidgetWidth = 640;
	
	if (typeof famaxWidgetHeight !== 'undefined') {
		if(null!=famaxWidgetHeight&&famaxWidgetHeight!=""&&famaxWidgetHeight!="undefined")
			$('html > head').append('<style>#famax{overflow-y:auto;height:'+famaxWidgetHeight+'px;}</style>');	
	}
	
	if(null==famaxColumns||famaxColumns==""||famaxColumns=="undefined")
		var famaxColumns = 3;
	
	if(null==fbAccessToken||fbAccessToken==""||fbAccessToken=="undefined")
		var fbAccessToken = "678348505523367|EfejCdTfIH5GYAW-2hurYoD2L98";


	var famaxPageId;

	function loadFamax() {
		$('#fb-menu-title').append('<span class="famax-pageTitle"></span>');
		$('#fb-footer-title').append('<span class="famax-pageTitle"></span>');

		var famaxColumnsHTML = '';
		var columnWidth = 100/famaxColumns;
		for(var i =1; i<=famaxColumns; i++) {
			famaxColumnsHTML+='<div id="famax-video-list-div'+i+'" style="width:'+columnWidth+'%;" class="famax-video-list-div"></div>';
		}
		
		$('#famax').append('<div id="famax-encloser">'+famaxColumnsHTML+'</div>');
		
		$('#famax').append('<div id="famax-lightbox"><div id="picasa-lightbox-wrapper"><div id="picasa-lightbox-image"><img id="picasa-img-lightbox" src=""><iframe id="famax-video-lightbox" width="640" height="360" src="" frameborder="0" allowfullscreen></iframe></div><div id="picasa-lightbox-helper"></div></div></div>');
		
		$('#famax-lightbox').click(function(){
			$('#picasa-img-lightbox').attr('src','');
			$('#famax-video-lightbox').attr('src','');
			$('#famax-lightbox').hide();
			$('#famax-img-lightbox').hide();
			$('#famax-video-lightbox').hide();
		});

		$('#famax-lightbox').hide();
		$('#famax-img-lightbox').hide();
		$('#famax-video-lightbox').hide();
	}
		
	
		$(document).ready(function() {
		
			var style = '<style>.famax-showing {color:black;font-weight:normal;}.famax-duration {background-color: black;color: white;padding: 2px 3px;font-weight: bold;position: absolute;bottom: 0;right: 0;opacity: 0.8;}#famax-header {background-color:rgb(53,53,53);font:24px Arial;color:white;line-height:25px;height:90px;text-align:left;border: 1px solid rgb(53,53,53);}.famax-stat {float:right;margin:10px;font:10px Arial;color:#ccc;margin-top: 25px;text-align: center;}#famax-stat-holder {float:right;height:100%;}.famax-stat-count {font: 18px Arial;}#famax-channel-desc {text-align:left;}#famax {font-size: 14px;text-align:center; }.famax-video-tnail,.famax-pic-tnail,.famax-link-tnail {min-height:50px;width:100%; background-repeat:no-repeat; background-size:cover;position: relative;}.famax-video-tnail-box {width:94%;margin:3%;float:left;overflow:hidden;box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 1px 3px rgba(0, 0, 0, 0.2);cursor:pointer;cursor:hand;}#famax-encloser {padding: 0.5%;display: inline-block;}.famax-video-list-div{text-align:left;display: inline-block;float:left;	}.famax-video-list-title {color:#000;display: inline-block;padding:2% 10px; padding-bottom: 10px;}.famax-video-list-views {color:#555;padding:1% 10px; padding-bottom: 3%;display:inline-block;font-size:12px;}.famax-playlist-sidebar {background-color:rgba(0,0,0,0.8);float:right;max-width:50%;height:100%;color:white;text-align:center;}.famax-playlist-video-count {	display:inline-block;margin:3%;margin-top:5%;height:20%;}.famax-playlist-sidebar-video {opacity:1;width:22%;height:50px;float:left;background-color:rgb(230,230,230);display:inline-block;margin:1%;background-size:cover;background-position: center center;background-repeat:no-repeat;}.famax-tab {background-color:rgb(230,230,230);color:#666;text-shadow:0 1px 0 #fff;display: inline-block;margin: 5px;margin-top: 10px;padding: 5px;cursor:pointer;cursor:hand;}#famax-tabs {text-align:left;background-color:rgb(230,230,230);padding-left: 10px;border-left: 1px solid #cccccc;border-right: 1px solid #cccccc;}#famax-lightbox {position:fixed;background-color:rgba(0,0,0,0.9);z-index:100;width:100%;height:100%;left:0;top:0;}#famax-video-lightbox {opacity:1;}#famax-header a {float:left;text-decoration: none;color: inherit;}#famax-encloser a {font-weight:normal; color:#555;}</style>';
			$('html > head').append(style);		
			
			var lightboxStyle = '<style>#famax-lightbox {position:fixed;background-color:rgba(0,0,0,0.9);z-index:100;width:100%;height:100%;left:0;top:0;}#picasa-img-lightbox {opacity:1; max-width:1000px; max-height:700px; z-index:200;cursor:pointer;cursor:mouse;}#picasa-lightbox-wrapper {height: 100%;width: 100%;white-space: nowrap;}#picasa-lightbox-image {display: inline-block;vertical-align: middle;white-space: normal;z-index:120;}#picasa-lightbox-helper {display: inline-block;vertical-align: middle;height: 100%;}#famax-video-lightbox{}</style>';
			$('html > head').append(lightboxStyle);		
			
			var extraStyle = '<style>.famax-pic-train {width: 100%;border: none;display: block;margin: 2%;}._1y4 {height: 26px;left: 50%;margin: -13px 0 0 -17px;position: absolute;top: 50%;width: 35px;}.link-img,.video-img {width:100%;}.load-more-wrapper {}#load-more {border: 1px solid gainsboro;display: block;padding: 10px 0;text-align: center;color: #555;font: 13px arial,sans-serif;font-weight: bold;float: left;width: 96%;margin: 5px 2%;cursor: pointer;cursor: mouse;}.load-more:hover {background-color: rgb(223, 221, 221);}.famax-like-wrapper{display:inline-block; margin-top:15px;}</style>';
			$('html > head').append(extraStyle);		

			var style='<style>::-webkit-scrollbar {width: 10px;}::-webkit-scrollbar-button {display:none;}::-webkit-scrollbar-track-piece {background: #888}::-webkit-scrollbar-thumb {background: #eee}</style>';
			$('html > head').append(style);		

			prepareFBdata();
			
		});

		function prepareFBdata() {
			famaxPageName = facebookPageUrl.substring(facebookPageUrl.lastIndexOf("/")+1);
			famaxPageId = getIdFromName(famaxPageName);
			//console.log
			
			loadFamax();
			
			var graphUrl = "https://graph.facebook.com/"+famaxPageName+"/feed?fields=name,description,message,full_picture,created_time,picture&limit=3&access_token="+fbAccessToken;
			getPageDetails(graphUrl);
			
			var fqlUrl = "http://graph.facebook.com/"+famaxPageId;
			
			getPageInfo(fqlUrl);
			
		}
		
		function getPageDetails(graphUrl) {
			//console.log(fqlUrl);
			fqlPending = 1;

			$.ajax({
				url: graphUrl,
				type: "GET",
				async: true,
				cache: true,
				dataType: 'jsonp',
				success: function(response) { showFeeds(response);},
				error: function(html) { alert(html); },
				beforeSend: setHeader
			});		
		}
		
		function getPageInfo(fqlUrl) {
			//console.log(fqlUrl);

			$.ajax({
				url: fqlUrl,
				type: "GET",
				async: true,
				cache: true,
				dataType: 'jsonp',
				success: function(response) { showInfo(response);},
				error: function(html) { alert(html); },
				beforeSend: setHeader
			});		
		}
		
		
	function showFeeds(response) {
		console.log(response);
		var streamArray = response.data;
		var post_id;
		var message;
		var pix_src;
		
		var fbPost;
	
		for(var i=0;i<streamArray.length;i++) {
			post_id = streamArray[i].id;
			message = streamArray[i].message;
			pix_src = streamArray[i].picture;
			created_time = streamArray[i].created_time;

			if(null==message||message==""||message=="undefined")
				continue;

			fbPost = {post_id:post_id,message:message,pix_src:pix_src,created_time:created_time};
			
			showPost(fbPost);
		
		}
		
		fqlPending = 0;
		//famaxLastCreatedTime = created_time;
		//$('#load-more').text('Load More..');
	
	}
	
	function showPost(fbPost) {
		//console.log(fbPost);
		var fbPicAspectRatio = 0;
		var attachment_display
		var famax_video_tnail;
		var fbAttachmentList= fbPost.fbAttachmentList;
		var attachment_name = fbPost.attachment_name;
		var famaxPicTrain='';
		
		var message = fbPost.message;
		if(null!=message&&message!=""&&message!="undefined"){
		
			//convert links to anchors--------------------------------------
			var linkStartIndex;
			var leftLinkSeparator;
			var index;
			var parsedLink = "";
			var messageLength = message.length;
			if(message.indexOf("http://")!=-1){
				linkStartIndex=message.indexOf("http://");
				//alert(leftLinkSeparator);
				leftLinkSeparator=message.charAt(linkStartIndex-1);
				index=linkStartIndex;
				while(message.charAt(index)!=leftLinkSeparator){
					parsedLink += message.charAt(index++);
					if(message.charAt(index)==" " || index>=messageLength || message.charAt(index)=="\n" || message.charAt(index)=="\r\n")
						break;
				}
				message=message.replace(parsedLink,'<p>'+parsedLink+'</p>');
				//alert(parsedLink);
				//alert(message);
			} else if(message.indexOf("https://")!=-1){
				linkStartIndex=message.indexOf("https://");
				leftLinkSeparator=message.charAt(linkStartIndex-1);
				index=linkStartIndex;
				while(message.charAt(index)!=leftLinkSeparator){
					parsedLink += message.charAt(index++);
					if(message.charAt(index)==" " || index>=messageLength || message.charAt(index)=="\n" || message.charAt(index)=="\r\n")
						break;
				}
				message=message.replace(parsedLink,'<p>'+parsedLink+'</p>');
			} else if(message.indexOf("www.")!=-1){
				linkStartIndex=message.indexOf("www.");
				leftLinkSeparator=message.charAt(linkStartIndex-1);
				index=linkStartIndex;
				while(message.charAt(index)!=leftLinkSeparator){
					parsedLink += message.charAt(index++);
					if(message.charAt(index)==" " || index>=messageLength || message.charAt(index)=="\n" || message.charAt(index)=="\r\n")
						break;
				}
				message=message.replace(parsedLink,'<p>'+parsedLink+'</p>');
			}

			//---------------------------------------------------------------
			
		}

		var pixSrc = fbPost.pix_src;
		//console.log(pixSrc);
		if(null!=pixSrc&&pixSrc!=""&&pixSrc!="undefined"){
			famax_video_tnail = '<center><img class="img-circle" src="' +pixSrc+ '" style="width: 200px; height: 200px;"></center>';
		} else {

		}
		
		var famaxColumn = getNextFamaxColumn();
		
		if(null!=famaxPicTrain&&famaxPicTrain!="undefined"&&famaxPicTrain!="") {
			famaxPicTrain = '<div class="famax-pic-train" id="famax-pic-train-'+fbPost.post_id+'">'+famaxPicTrain+'</div>';
		}

		$('#famax-video-list-div'+famaxColumn).append('<div class="famax-video-tnail-box">'+famax_video_tnail+famaxPicTrain+'<span class="famax-video-list-title">'+message+'</span><br/></div>');


		$('.famax-pic-tnail').click(function(){
			showPicLightbox(this.getAttribute('data-picSrc'));
		});
		
		$('.famax-video-tnail').click(function(){
			showVideoLightbox(this.getAttribute('data-videoSrc'));
		});
		
		$('.famax-playlist-sidebar-video').click(function(){
			var tmpPicSrc = this.getAttribute('data-picSrc');
			if(tmpPicSrc.indexOf("_s.")!=-1)
				tmpPicSrc=tmpPicSrc.replace("_s.","_n.");
			showPicLightbox(tmpPicSrc);
		});
		
		if(fbPicAspectRatio!=0) {
			var famaxTnailWidth = $('#'+fbPost.post_id).css('width');
			famaxTnailWidth=famaxTnailWidth.substring(0,famaxTnailWidth.indexOf("px"));
			var famaxTnailHeight = famaxTnailWidth/fbPicAspectRatio;
			$('#'+fbPost.post_id).css({'height':famaxTnailHeight+'px'});
		}		
		

	}	
	
	function getIdFromName(pageName) {
		var graphLink = "https://graph.facebook.com/"+pageName;
		var objectId;
		
		$.ajax({
			type: "GET",
			url: graphLink,
			async: false,
			beforeSend: function(x) {
				if(x && x.overrideMimeType) {
					x.overrideMimeType("application/j-son;charset=UTF-8");
				}
			},
			dataType: "json",
			success: function(response){
				objectId = response.id;
			}
		});		
		return objectId;
	}
			
	function setHeader(xhr) {
		if(xhr && xhr.overrideMimeType) {
			xhr.overrideMimeType("application/j-son;charset=UTF-8");
		}
	}
		
	
	
	function getNextFamaxColumn() {
		var lowestHeight = $('#famax-video-list-div1').height();
		var tempHeight = 0;
		var columnNumber = 1;
	
		for(var i =1; i<=famaxColumns; i++) {
			tempHeight = $('#famax-video-list-div'+i).height();
			//console.log("height: "+tempHeight+"   col: "+i);
			if(tempHeight<lowestHeight) {
				lowestHeight=tempHeight;
				columnNumber=i;
			}

		}
		
		return columnNumber;
	}
	
	function showPicLightbox(picSrc) {
		$('#famax-img-lightbox').show();
		$('#famax-lightbox').show();
		showLoadingInLightbox();
		setTimeout(function(){$('#picasa-img-lightbox').attr('src',picSrc);},10);
	}

	function showVideoLightbox(videoSrc) {
		$('#famax-video-lightbox').show();		
		//console.log(videoSrc);
		$('#famax-lightbox').show();
		//showLoadingInLightbox();
		setTimeout(function(){$('#famax-video-lightbox').attr('src',videoSrc);},10);
	}
		
	function showLoadingInLightbox() {
		$('#picasa-img-lightbox').attr('src','');
		$('#picasa-img-lightbox').attr('src',pathToLoadingImage);
	}		
	
	function showInfo(response) {
		//console.log(response);

		var pageName = response.name;
		var pagePic = "https://graph.facebook.com/"+response.id+"/picture";
		var pageLikes = response.likes;
		var pageTalkingAboutCount = response.talking_about_count;
		var pageLink = response.link;
		//var channelDesc = response.entry.summary.$t;
		
		$('.famax-pageTitle').append('<b>'+pageName+'</b>');

		$('#famax-header').append('<a target="_blank" href="'+pageLink+'"><img style="vertical-align:middle; height:60px; margin:15px; display:inline-block;" src="'+pagePic+'"/>'+pageName+'</a>&nbsp;&nbsp;&nbsp;');
		
		$('#famax-header').append('<div class="famax-like-wrapper"><iframe src="http://www.facebook.com/plugins/like.php?href=http%3A%2F%2Fwww.facebook.com%2F'+famaxPageId+'&amp;send=false&amp;layout=box_count&amp;width=200&amp;show_faces=false&amp;font&amp;colorscheme=light&amp;action=like&amp;height=90&amp;appId=384323531651193" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:100px; height:70px;" allowTransparency="true"></iframe></div>');
		
		$('#famax-stat-holder').append('<div class="famax-stat"><span class="famax-stat-count">'+getReadableNumber(pageTalkingAboutCount)+'</span><br/>Talking About Us</div><div class="famax-stat"><span class="famax-stat-count">'+getReadableNumber(pageLikes)+'</span><br/> Likes </div>');
		
	}	
		
	function getReadableNumber(number) {
		if(null==number||number==""||number=="undefined")
			return "?";
			
		number=number.toString();
		var readableNumber = '';
		var count=0;
		for(var k=number.length; k>=0;k--) {
			readableNumber+=number.charAt(k);
			if(count==3&&k>0) {
				count=1;
				readableNumber+=',';
			} else {
				count++;
			}
		}
		return readableNumber.split("").reverse().join("");
	}