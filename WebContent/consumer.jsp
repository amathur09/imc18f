<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
		<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
		<title>Adverse Events</title>
		
		<!-- LIBRARY SCRIPTS -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
		<script src="js/lib/jquery-ui.js"></script>
		<script src="js/lib/jquery-ui.js"></script>
		<script src="http://d3js.org/d3.v3.min.js"></script>
		<script src="js/lib/listgroup.js"></script>
		<!-- LIBRARY STYLESHEETS -->
		<LINK REL="stylesheet" TYPE="text/css" HREF="css/lib/jquery-ui.css">
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
			<div class ="carousel slide">
			<div class="row">
			<div class="col-md-3"></div>
				<div class="col-md-6">
					<div class="consumerHeader">
					<h2>Consumer</h2>
					<p>This application allows you to search the FDA data through the following filters. Select the Drug Name, the seriousness of the event, the possible outcome that you wish. Click on "Generate Chart" and the visulization will appear below. </p>
					</div>
				</div>
			<div class="col-md-3"></div>
			</div>
			</div>
			
			<hr class="featurette-divider-thin">
			
			<div class="row">
				<div class="col-md-4">
				<div class="row ">
					<div class="col-md-1"></div>
						<div class="col-md-10 well">
		  					<legend>Search: Drug Name</legend>
		  					<input id="inputSearchCriteria" type="text" class="form-control margin-bottom-20" placeholder="eg. Asprin">
		  					
		  					<legend>Filter By:</legend>
		  					<label>Significance of the event</label>
								<div>
									<button type="button" class="btn btn-default" id="seriousSignificant">Serious</button>
									<button type="button" class="btn btn-default" id="nonSeriousSignificant">Non-Serious</button>
								</div>
							
							<hr class="featurette-divider-thin">
							<div class="divOutcomesPlaceholder">
									<div id="divOutcomes">
										<label>Outcomes</label>
										<select id="selectOutcomes" class="list-group" multiple>
											<option value="seriousnessdeath">Death</option>
										    <option value="seriousnesslifethreatening">Life-threatening</option>
										    <option value="seriousnesshospitalization">Hospitalization</option>
										    <option value="seriousnessdisabling">Disabling</option>
										    <option value="seriousnesscongenitalanomali">Congenital Anomaly</option>
										    <option value="seriousnessother">Other</option>
										</select>
									</div>
								</div>
								
								<div>
									<button type="button" class="btn btn-info wide" id="generateChartButton" >Generate Chart</button>
								</div>
								<div>
									<button type="button" class="btn btn-success wide btn-xs" id="resetButton">Reset All Fields</button>
								</div>
						</div>
						
					<div class="col-md-1"></div>
				</div>
				</div>
				
				<div class="col-md-8">
						<div id="searchBreadCrumbs">
						<ul class="breadcrumb"></ul>
						</div>
						<div class="row">
							<svg class="chart"></svg>
						</div>
				</div>
				<!-- <div class="col-md-1"></div> -->
				
			</div>
		</div>
		
		<footer class="bottomFooter">
      			<div class="container">
        			<p class="text-muted">Place sticky footer content here.</p>
      			</div>
   			</footer>

</body>
</html>