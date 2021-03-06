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
		<meta name="author" content="InstaWeb">

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
		<!-- CONTENT AREA # START -->

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
							<a class="navbar-brand" href="page-home.php?fb=<?php echo $pageName; ?>"><span id="fb-menu-title"></span></a>
						</div>
						<div class="navbar-collapse collapse">
							<ul class="nav navbar-nav">
								<li><a href="page-home.php?fb=<?php echo $pageName; ?>">Home</a></li>
								<li><a href="page-about.php?fb=<?php echo $pageName; ?>">About</a></li>
								<li><a href="page-gallery.php?fb=<?php echo $pageName; ?>">Gallery</a></li>
								<li class="active"><a href="page-contact.php?fb=<?php echo $pageName; ?>">Contact</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- MENU NAVBAR ================================================== -->

		<!-- PAGE CONTENT ================================================== -->
		<div class="container contact">
			<!-- Page Heading Row-->
			<div class="row">
				<div class="col-lg-12">
					<h1 class="page-header">Contact Us
					</h1>
				</div>
			</div>
			<!-- Page Heading /.row -->

			<!-- MAP Row -->
			<div class="row">
				<div class="col-lg-12 map">
					<div id="map-placement"></div>
				</div>
			</div>
			<!-- MAP /.row -->

			<!-- Contact Form & Detail -->
			<div class="row">
			  <div class="col-md-12">
			  <form role="form" action="" method="post" >
				<div class="col-lg-6">
				  <div class="form-group">
					<label for="InputName">Your Name</label>
					<div class="input-group">
					  <input type="text" class="form-control" name="InputName" id="InputName" placeholder="Enter Name" required>
					  <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span></div>
				  </div>
				  <div class="form-group">
					<label for="InputEmail">Your Email</label>
					<div class="input-group">
					  <input type="email" class="form-control" id="InputEmail" name="InputEmail" placeholder="Enter Email" required  >
					  <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span></div>
				  </div>
				  <div class="form-group">
					<label for="InputMessage">Message</label>
					<div class="input-group"
			>
					  <textarea name="InputMessage" id="InputMessage" class="form-control" rows="5" required></textarea>
					  <span class="input-group-addon"><i class="glyphicon glyphicon-pencil"></i></span></div>
				  </div>
				  <input type="submit" name="submit" id="submit" value="Submit" class="btn btn-info pull-right">
				</div>
			  </form>
			  <hr class="featurette-divider hidden-lg">
			  <div class="col-lg-5 col-md-push-1">
				<address>
				<h3><span class="FBpagePageName"></span></h3>
				<p class="lead">
					<span id="FBpageAddress"></span>
				</p>
				</address>
			  </div>
			</div>
			<!-- Contact Form & Detail ./ row -->
			<hr>
		<!-- PAGE CONTENT ================================================== -->

		<!-- FOOTER ================================================== -->
			<footer>
				<p class="pull-right"><a href="#">Privacy</a> · <a href="#">Terms</a> · <a href="#">Back to top</a></p>
				<p>© 2014 <span id="fb-footer-title"></span>· We have logged your IP : <span id="ipinfo"></span></p>
				</footer>
		<!-- FOOTER ================================================== -->

		</div>
		<!-- CONTENT AREA # END -->

		<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
		<script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
		<!-- Include all compiled plugins (below), or include individual files as needed -->
		<script src="../assets/js/bootstrap.min.js"></script>
		<!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
		<script src="../assets/js/ie10-viewport-hacks.js"></script>

		<!-- Script JS # base on theme -->
		<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>
		<script src="../assets/js/google-map.js"></script>
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
		<script src="../assets/js/page-contact-fb.js"></script>
	</body>
</html>