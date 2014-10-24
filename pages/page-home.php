<?php
	$pageName = $_GET['fb'];
?>

<!DOCTYPE html>
<html lang="en">
	<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="">
	<meta name="author" content="instaweb">

	<!-- Bootstrap required-->
	<link href="../assets/css/bootstrap.min.css" rel="stylesheet">
	<!-- Bootstrap theming stylesheet-->
	<link href="../assets/theme-css/starter.css" rel="stylesheet">

	<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
	<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
	<!--[if lt IE 9]>
		<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
		<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	<![endif]-->
	</head>

	<body>

	<!-- Container -->

	<!-- MENU NAVBAR ================================================== -->
	<div class="navbar-wrapper">
		<div class="container">
		<div class="navbar navbar-inverse navbar-static-top" role="navigation">
			<div class="container">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					</button>
					<a class="navbar-brand" href="#"><span id="fb-menu-title"></span></a>
				</div>
				<div class="navbar-collapse collapse">
					<ul class="nav navbar-nav">
					<li class="active"><a href="page-home.php?fb=<?php echo $pageName; ?>">Home</a></li>
					<li><a href="page-about.php?fb=<?php echo $pageName; ?>">About</a></li>
					<li><a href="page-gallery.php?fb=<?php echo $pageName; ?>">Gallery</a></li>
					<li><a href="page-contact.php?fb=<?php echo $pageName; ?>">Contact</a></li>
					</ul>
				</div>
			</div>
		</div>

		</div>
	</div>
	<!-- MENU NAVBAR ================================================== -->

	<!-- SLIDER ================================================== -->
	<div id="myCarousel" class="carousel slide" data-ride="carousel">
		<!-- Navigation Indicators -->
		<ol class="carousel-indicators">
			<li data-target="#myCarousel" data-slide-to="0" class=""></li>
			<li data-target="#myCarousel" data-slide-to="1" class=""></li>
			<li data-target="#myCarousel" data-slide-to="2" class="active"></li>
		</ol>
		<!-- Navigation Indicators -->

		<!-- Slider Items - Will call image, short title and description into the following slider set -->
		<div class="carousel-inner">
			<!-- Slider #1 -->
			<div class="item">
				<img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="First slide">
				<div class="container">
				<div class="carousel-caption">
					<h1>FB Content From : <span class="fb-mid-title"></span></h1>
					<p>Note: If you're viewing this page via a <code>file://</code> URL, the "next" and "previous" Glyphicon buttons on the left and right might not load/display properly due to web browser security rules.</p>
					<p><a class="btn btn-lg btn-primary" href="#" role="button">Sign up today</a></p>
				</div>
				</div>
			</div>
			<!-- Slider #1 -->

			<!-- Slider #2 -->
			<div class="item">
				<img src="data:image/gif;base64,R0lGODlhAQABAIAAAGZmZgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Second slide">
				<div class="container">
				<div class="carousel-caption">
					<h1>FB Content From : <span class="fb-mid-title"></span></h1>
					<p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
					<p><a class="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
				</div>
				</div>
			</div>
			<!-- Slider #2 -->

			<!-- Slider #3 -->
			<div class="item active">
				<img src="data:image/gif;base64,R0lGODlhAQABAIAAAFVVVQAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Third slide">
				<div class="container">
				<div class="carousel-caption">
					<h1>FB Content From : <span class="fb-mid-title"></span></h1>
					<p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
					<p><a class="btn btn-lg btn-primary" href="#" role="button">Browse gallery</a></p>
				</div>
				</div>
			</div>
			<!-- Slider #3 -->
		</div>

		<a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev"><span class="glyphicon glyphicon-chevron-left"></span></a>
		<a class="right carousel-control" href="#myCarousel" role="button" data-slide="next"><span class="glyphicon glyphicon-chevron-right"></span></a>
	</div>

	<!-- /. END SLIDER ================================================== -->



	<!-- NEWSFEED ================================================== -->
	<!-- Calling newsfeed with php function -->

	<div class="container marketing">
		<div class="row">
			<div id="famax">
			</div>

		</div>
		<!-- NEWSFEED ================================================== -->

		<!-- FOOTER ================================================== -->
		<footer>
			<p class="pull-right"><a href="#">Privacy</a> · <a href="#">Terms</a> · <a href="#">Back to top</a></p>
			<p>© 2015 <span id="fb-footer-title"></span>· We have logged your IP : <span id="ipinfo"></span></p>
		</footer>

	</div>

	<!-- Content Container # END -->

	<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
	<script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
	<!-- Include all compiled plugins (below), or include individual files as needed -->
	<script src="../assets/js/bootstrap.min.js"></script>
	<!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
	<script src="../assets/js/ie10-viewport-hacks.js"></script>

	<!-- Script JS # base on theme -->
	<script src="../assets/js/check-ip.js"></script>
	<script src="http://stage.instaweb.my/call/kweri.php?callback=getip"></script>

	<!-- FB Calling Initiated -->

	<script type="text/javascript">

		//mandatory----------------
		var facebookPageUrl = "https://www.facebook.com/<?php echo $pageName; ?>";

		function displayFamax() {
			$('#famax').empty();
			facebookPageUrl=$('#facebookPageUrl').val();
			famaxColumns=$('#famaxColumns').val();
			prepareFBdata();
		}
	</script>
	<script src="../assets/js/page-home-fb.js"></script>
	</body>
</html>
