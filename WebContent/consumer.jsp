<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
		<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
		<title>Adverse Events</title>
		
		<!-- LIBRARY SCRIPTS -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
		<script src="js/lib/bootstrap.js"></script>
		<script src="http://d3js.org/d3.v3.min.js"></script>
		<script src="js/lib/listgroup.js"></script>
		<!-- LIBRARY STYLESHEETS -->
		<LINK REL="stylesheet" TYPE="text/css" HREF="css/lib/bootstrap.css">
		
		<!-- CUSTOM STYLESHEETS -->
		<LINK REL="stylesheet" TYPE="text/css" HREF="css/consumer.css">
		
		<!-- CUSTOM SCRIPTS -->
		<script src="js/consumer.js"></script>
</head>
<body>

	<!-- NAVIGATION BAR -->
	<div class="navbar-wrapper">
			<div class="container">
				<nav class="navbar navbar-default navbar-static-top">
					<div class="container">
						<div class="navbar-header">
							<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
							<a class="navbar-brand" href="#"><img src="img/18flogo.png" alt="RxEffexS" width="100" height="130"></a>
						</div>
						<div id="navbar" class="navbar-collapse collapse">
							<ul class="nav navbar-nav navbar-right">
								<li><a href="index.jsp">Home</a></li>
								<li class="active"><a href="consumer.jsp">Consumer</a></li>
								<li><a href="maintainence.jsp">Medical Professionals</a></li>
								<li><a href="maintainence.jsp">Researchers</a></li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
	</div>
	<!-- NAVIGATION BAR END -->	
	
	<!-- WEB PAGE CONTENT -->	
		<div class="container content">
		<div class="row">
			<div class="col-md-12">
				<div class="consumerHeader">
				<h2>Consumer</h2>
				<p>Text to explain the user how to use the following form</p>
				</div>
			</div>
		</div>
		
		<hr class="featurette-divider">
		
		<div class="row">
			<div class="col-md-4">
			<div class="row">
				<div class="col-md-2"></div>
					<div class="col-md-8 form_section">
	  					<label for="inputSearchCriteria">Drug Name:</label>
	  					<input class="form-control" id="inputSearchCriteria" type="text">
					</div>
				<div class="col-md-2"></div>
			</div>
			</div>
			
			<div class="col-md-4">
			<div class="row">
				<div class="col-md-2"></div>
				<div class="col-md-8 form_section">
					<div class="row">
						<label>Significance of the event</label>
						<div>
							<button type="button" class="btn btn-danger">Serious</button>
							<button type="button" class="btn btn-primary">Non-Serious</button>
						</div>
					</div>
				</div>
				<div class="col-md-2"></div>
			</div>	
			</div>
			
			<div class="col-md-4">
			<div class="row">
				<div class="col-md-2"></div>
				<div class="col-md-8 form_section">
					<label>Outcomes</label>
					<select class="list-group" multiple>
					    <option selected="selected">Cras justo odio</option>
					    <option>Dapibus ac facilisis in</option>
					    <option selected="selected">Morbi leo risus</option>
					    <option>Porta ac consectetur ac</option>
					    <option>Vestibulum at eros</option>
					</select>
				</div>
				<div class="col-md-2"></div>
			</div>
			</div>
		</div>
		<hr class="featurette-divider">
		
		<div class="row">
			<div class="col-md-12">
				<svg class="chart"></svg>
			</div>
		</div>
		</div>
		
		<footer class="bottomFooter">
      			<div class="container">
        			<p class="text-muted">Place sticky footer content here.</p>
      			</div>
   			</footer>

</body>
</html>