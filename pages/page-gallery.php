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
								<li class="active"><a href="page-gallery.php?fb=<?php echo $pageName; ?>">Gallery</a></li>
								<li><a href="page-contact.php?fb=<?php echo $pageName; ?>">Contact</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- MENU NAVBAR ================================================== -->

		<!-- PAGE CONTENT ================================================== -->
		<div class="container gallery">

		<!-- Page Heading Row-->
		<div class="row">
			<div class="col-lg-12">
				<h1 class="page-header">Gallery
				</h1>
			</div>
		</div>
		<!-- /.row -->

		<!-- Gallery Row -->
		<div class="row">
			<div class="col-md-3 portfolio-item">
				<a href="#">
					<img class="img-responsive" src="http://placehold.it/750x450/00C5C2/000000" alt="">
				</a>
			</div>
			<div class="col-md-3 portfolio-item">
				<a href="#">
					<img class="img-responsive" src="http://placehold.it/750x450" alt="">
				</a>
			</div>
			<div class="col-md-3 portfolio-item">
				<a href="#">
					<img class="img-responsive" src="http://placehold.it/750x450" alt="">
				</a>
			</div>
			<div class="col-md-3 portfolio-item">
				<a href="#">
					<img class="img-responsive" src="http://placehold.it/750x450/00C5C2/000000" alt="">
				</a>
			</div>
		</div>
		<!-- /.row -->

		<!-- Gallery Row -->
		<div class="row">
			<div class="col-md-3 portfolio-item">
				<a href="#">
					<img class="img-responsive" src="http://placehold.it/750x450" alt="">
				</a>
			</div>
			<div class="col-md-3 portfolio-item">
				<a href="#">
					<img class="img-responsive" src="http://placehold.it/750x450/00C5C2/000000" alt="">
				</a>
			</div>
			<div class="col-md-3 portfolio-item">
				<a href="#">
					<img class="img-responsive" src="http://placehold.it/750x450" alt="">
				</a>
			</div>
			<div class="col-md-3 portfolio-item">
				<a href="#">
					<img class="img-responsive" src="http://placehold.it/750x450" alt="">
				</a>
			</div>
		</div>
		<!-- /.row -->

		<!-- Gallery Row -->
		<div class="row">
			<div class="col-md-3 portfolio-item">
				<a href="#">
					<img class="img-responsive" src="http://placehold.it/750x450" alt="">
				</a>
			</div>
			<div class="col-md-3 portfolio-item">
				<a href="#">
					<img class="img-responsive" src="http://placehold.it/750x450" alt="">
				</a>
			</div>
			<div class="col-md-3 portfolio-item">
				<a href="#">
					<img class="img-responsive" src="http://placehold.it/750x450/00C5C2/000000" alt="">
				</a>
			</div>
			<div class="col-md-3 portfolio-item">
				<a href="#">
					<img class="img-responsive" src="http://placehold.it/750x450" alt="">
				</a>
			</div>
		</div>
		<!-- /.row -->

		<hr>

		<!-- Pagination -->
		<div class="row text-center">
			<div class="col-lg-12">
				<ul class="pagination">
					<li>
						<a href="#">&laquo;</a>
					</li>
					<li class="active">
						<a href="#">1</a>
					</li>
					<li>
						<a href="#">2</a>
					</li>
					<li>
						<a href="#">3</a>
					</li>
					<li>
						<a href="#">4</a>
					</li>
					<li>
						<a href="#">5</a>
					</li>
					<li>
						<a href="#">&raquo;</a>
					</li>
				</ul>
			</div>
		</div>
		<!-- /.row -->

		<hr>
		<!-- PAGE CONTENT ================================================== -->

		<!-- FOOTER ================================================== -->
			<footer>
				<p class="pull-right"><a href="#">Privacy</a> · <a href="#">Terms</a> · <a href="#">Back to top</a></p>
				<p>© 2015 <span id="fb-footer-title"></span>· We have logged your IP : <span id="ipinfo"></span></p>
			</footer>
		<!-- FOOTER ================================================== -->

		</div>
		<!-- CONTENT AREA # END -->

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
		<script src="../assets/js/page-gallery-fb.js"></script>
	</body>
</html>