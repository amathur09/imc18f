var isSerious = 0; // 1 = serious , 2 = not Serious, 0 = not assigned



$(document).ready(function() {
	
	
	
	var nonSeriousSignificant = $("#nonSeriousSignificant");
	var seriousSignificant = $("#seriousSignificant");
	var divOutcomes = $("#divOutcomes");
	var generateChartButton = $("#generateChartButton");
	var drugName = $("#inputSearchCriteria");
	var resetButton = $("#resetButton");
	
	//var selectOutcomes = $("#selectOutcomes");

	nonSeriousSignificant.off("click"); // unbinding the on click at the end of the function
	nonSeriousSignificant.on("click",function(){
		divOutcomes.fadeOut();
		setStateNonSerious();
		});
	
	seriousSignificant.off("click"); // unbinding the on click at the end of the function
	seriousSignificant.on("click",function(){
		divOutcomes.fadeIn();
		setStateSerious();
		});
	
	populateDrugNameField();
	
	generateChartButton.off("click");
	generateChartButton.on("click",createRequestURL);
	
	resetButton.off("click");
	resetButton.on("click",resetFields);
	
	/*var myAjaxCall = $.ajax({
		type:"get",
		url: "http://api.fda.gov/drug/event.json?&count=patient.drug.drugindication",
		crossDomain :true
	 });
	
	myAjaxCall.done (function (jData, status, jqXHR) {
		console.log(jData);
		//alert("success");
	});
	
	myAjaxCall.fail(function(jqXHR, status, error){
		console.log(jqXHR);
		//alert("fail");
	});*/
	
}); //  END OF READY

function populateDrugNameField() {
	/**
	 * TODO : make a call to this url 
	 * 
	 *  url: https://api.fda.gov/drug/event.json?&count=patient.drug.medicinalproduct
	 *  
	 *  pull all the "terms", put it in an array, and use that array to populate the jq ui auto complete.
	 */
	
	var getAllMedicinalProducts = $.ajax({
		type:"get",
		url: "http://api.fda.gov/drug/event.json?&count=patient.drug.medicinalproduct",
		crossDomain :true
	 });
	
	getAllMedicinalProducts.done(getAllMedicinalProductsSuccess);
	
	getAllMedicinalProducts.fail(getAllMedicinalProductsFail);
	
}

function getAllMedicinalProductsSuccess (jData, status, jqXHR) {
	var arrayOfAllMedicinalProducts = [];
	
	for (var i =0 ; i<jData.results.length; i++) {
		arrayOfAllMedicinalProducts.push(jData.results[i].term);
	}
	
	$("#inputSearchCriteria").autocomplete({
		source:arrayOfAllMedicinalProducts
	});
}

function getAllMedicinalProductsFail (jqXHR, status, error) {
	/**
	 * TODO : handle Failure with care
	 */
	
	alert("the call has failed! Refresh the page");
}


function createRequestURL() {
	/**
	 * TODO : 
	 * 1. search for the 3 input fields
	 * 2. get the values if they are not null,
	 * 3. create a request URL just like 
	 * 
	 */
	var isFirstSearchCriteria = true;
	var searchWithThisCustomizedURL = "http://api.fda.gov/drug/event.json?";
	var urlOnlyForDrug = "";
	var urlOnlyForSerious = "";
	var urlOnlyForNonSerious = "";
	var arrayOfAllGetCalls=[];
	
	var userInputDrugName = $("#inputSearchCriteria").val();
	if (userInputDrugName != "") { // user has entered some value. use it in the search url. else do nothing.
		
		if (isFirstSearchCriteria) {
			searchWithThisCustomizedURL = searchWithThisCustomizedURL + "&search=";
			isFirstSearchCriteria = false;
		} 
		searchWithThisCustomizedURL = searchWithThisCustomizedURL + "medicinalproduct:" + userInputDrugName;
		urlOnlyForDrug = searchWithThisCustomizedURL + "&count=patient.reaction.reactionmeddrapt.exact";
		arrayOfAllGetCalls.push({"urlOnlyForDrug" : urlOnlyForDrug});
	}
	
	
	if(isSerious !== 0) { // user has set either serious or non serious.
		if (isFirstSearchCriteria) {
			searchWithThisCustomizedURL = searchWithThisCustomizedURL + "search=";
			isFirstSearchCriteria = false;
		} else { // something has already been appended to the url b4 this, so add "+AND+" , before the next search criteria is appended
			searchWithThisCustomizedURL = searchWithThisCustomizedURL + "+AND+";
		}
		
		if (isSerious == 1) {
			searchWithThisCustomizedURL = searchWithThisCustomizedURL + "serious:1";
			urlOnlyForSerious = searchWithThisCustomizedURL + "&count=patient.reaction.reactionmeddrapt.exact";
			arrayOfAllGetCalls.push({"urlOnlyForSerious":urlOnlyForSerious});
		} else { //
			searchWithThisCustomizedURL = searchWithThisCustomizedURL + "serious:2";
			urlOnlyForNonSerious = searchWithThisCustomizedURL + "&count=patient.reaction.reactionmeddrapt.exact";
			arrayOfAllGetCalls.push({"urlOnlyForNonSerious":urlOnlyForNonSerious});
		}
	} 
	
	var selectedValues = $("#selectOutcomes").val();
	var arrayOfUrls = [];
	var searchWithThisIndivuidualURL = searchWithThisCustomizedURL;
	
	var theUnionOfSelectedOutcomes="";
	if (selectedValues != null) {
		searchWithThisCustomizedURL = searchWithThisCustomizedURL + "+AND+";
		for (var i = 0 ; i < selectedValues.length ; i++) {
			
			
			if (i == 0 && i == selectedValues.length-1) { // is the first element and the last element at the same time (user selects only one element)
				theUnionOfSelectedOutcomes = theUnionOfSelectedOutcomes+ "(" +selectedValues[i]+":1)";
			} else if (i == 0) { // only first
				theUnionOfSelectedOutcomes = theUnionOfSelectedOutcomes+ "(" +selectedValues[i]+":1";
			} else if ( i == selectedValues.length-1) { // is only the last element
				theUnionOfSelectedOutcomes = theUnionOfSelectedOutcomes+selectedValues[i]+":1"+")";
			} else { // is the middle element
				theUnionOfSelectedOutcomes = theUnionOfSelectedOutcomes+selectedValues[i]+":1";
			}
			
			
			
			//searchWithThisCustomizedURL = searchWithThisCustomizedURL + selectedValues[i]+":1";
			arrayOfUrls.push(searchWithThisIndivuidualURL+"+AND+"+selectedValues[i]+":1" +"&count=patient.reaction.reactionmeddrapt.exact");
			
			if (i !== (selectedValues.length-1)) {
				//searchWithThisCustomizedURL = searchWithThisCustomizedURL + "+AND+";
				theUnionOfSelectedOutcomes = theUnionOfSelectedOutcomes + "+";
			}
		}
		
		arrayOfAllGetCalls.push({"allOutcomeURL" : arrayOfUrls});
		
	}
	
	
	searchWithThisCustomizedURL = searchWithThisCustomizedURL + theUnionOfSelectedOutcomes + "&count=patient.reaction.reactionmeddrapt.exact";
	
	
	makeAjaxCallForThisURL(searchWithThisCustomizedURL);
	
	makeIndividualAjaxCallsForThisObject(arrayOfAllGetCalls);
	
	//var searchWithThisCustomizedURL = "http://api.fda.gov/drug/event.json?search=medicinalproduct:hcl+AND+serious:1+AND+seriousnesshospitalization:1&count=patient.reaction.reactionmeddrapt.exact"
	
	
}

function makeAjaxCallForThisURL(searchWithThisCustomizedURL) {
	var ajaxGetCustomResults = $.ajax({
		type:"get",
		url: searchWithThisCustomizedURL,
		crossDomain :true
	 });
	ajaxGetCustomResults.done(ajaxGetCustomResultsSuccess);
	ajaxGetCustomResults.fail(ajaxGetCustomResultsFail);
}

function ajaxGetCustomResultsSuccess (jData, status, jqXHR) {
	if ("error" in jData) { // query did not yield any result
		// show an error message
	} else { //we have result! rejoice!
		var customResult = jData.results;
		customResult = customResult.slice(0,10);
		convertDataToChartReadable(customResult);
	}
}

function ajaxGetCustomResultsFail (jqXHR, status, error) {
	/**
	 * TODO : handle Failure with care
	 */
	
	alert("the call has failed! Refresh the page");
}


function makeIndividualAjaxCallsForThisObject(arrayOfAllGetCalls) {
	var arrayOfAllGetCalls;
	
	
	
	
	
	
	
	
}


function convertDataToChartReadable(customResult) {
	var labels = [];
	var series = [];
	var values = [];
	
	for ( var i=0 ; i<customResult.length ; i++) {
		labels.push(customResult[i].term);
		values.push(customResult[i].count);
	}
	
	series.push({"label" : "Total","values":values});
	var dataForGraph = {"labels":labels,"series":series};
	
	initializeBreadCrumbs();
	
	renderGraph(dataForGraph);
}

function initializeBreadCrumbs() {
	$(".breadcrumb").html("");
	
	var breadCrumbHtml ="";
	var drugName = $("#inputSearchCriteria").val();
	var selectedValues = $("#selectOutcomes").val();
	
	if (drugName !=null) {
		breadCrumbHtml = breadCrumbHtml + "<li> "+drugName+" </li>";
	}
	
	if (isSerious != 0) {
		if (isSerious == 1) {
			breadCrumbHtml = breadCrumbHtml + "<li> serious </li>";
		} else {
			breadCrumbHtml = breadCrumbHtml + "<li> non-serious </li>";
		}
	}
	
	var allOutComes="";
	if (selectedValues != null) {
		for (var i = 0 ; i < selectedValues.length ; i++) {

			if (i == 0 && i == selectedValues.length-1) { // is the first element and the last element at the same time (user selects only one element)
				allOutComes = allOutComes+ "<li> " +selectedValues[i]+" </li>";
			} else if (i == 0) { // only first
				allOutComes = allOutComes+ "<li> " +selectedValues[i];
			} else if ( i == selectedValues.length-1) { // is only the last element
				allOutComes = allOutComes+selectedValues[i]+" </li>";
			} else { // is the middle element
				allOutComes = allOutComes+selectedValues[i];
			}
			
			if (i !== (selectedValues.length-1)) {
				allOutComes = allOutComes + ", ";
			}
		}
		
		breadCrumbHtml = breadCrumbHtml + allOutComes;
	}
	
	$(".breadcrumb").append(breadCrumbHtml);
	
}


function renderGraph(dataForGraph) {
	$(".chart").html("");
	var data = dataForGraph;
	
	var data1 = {
	  "labels": [
	    'Nausea', 'Upper respitory issue', 'Heart Attack',
	    'Vommiting', 'Fatigue'
	  ],
	  "series": [
	    {
		  "label": 'Total',
		  "values": [140, 48, 150, 120, 130]
		},
		/*
	    {
	      label: '<serious/non-Serious>',
	      values: [100, 40, 22, 70, 73]
	    },
	    {
		      label: '<outcome 1>',
		      values: [40, 40, 22, 70, 73]
		    },
		    {
			      label: '<outcome 2>',
			      values: [15, 40, 22, 70, 73]
			    },
			    {
				      label: '<outcome 3>',
				      values: [15, 40, 22, 70, 73]
				    },
				    {
					      label: '<outcome 4>',
					      values: [8, 40, 22, 70, 73]
					    },
					    {
						      label: '<outcome 5>',
						      values: [2, 40, 22, 70, 73]
						    },
						    {
							      label: '<outcome 6>',
							      values: [10, 40, 22, 70, 73]
							    },*/
	    ]
	};


	var chartWidth       = 550,
	    barHeight        = 20,
	    groupHeight      = barHeight * data.series.length,
	    gapBetweenGroups = 15,
	    spaceForLabels   = 250,
	    spaceForLegend   = 0;

	// Zip the series data together (first values, second values, etc.)
	var zippedData = [];
	for (var i=0; i<data.labels.length; i++) {
	  for (var j=0; j<data.series.length; j++) {
	    zippedData.push(data.series[j].values[i]);
	  }
	}

	// Color scale
	var color = d3.scale.category20();
	var chartHeight = barHeight * zippedData.length + gapBetweenGroups * data.labels.length;

	var x = d3.scale.linear()
	    .domain([0, d3.max(zippedData)])
	    .range([0, chartWidth]);

	var y = d3.scale.linear()
	    .range([chartHeight + gapBetweenGroups, 0]);

	var yAxis = d3.svg.axis()
	    .scale(y)
	    .tickFormat('')
	    .tickSize(0)
	    .orient("left");

	// Specify the chart area and dimensions
	var chart = d3.select(".chart")
	    .attr("width", spaceForLabels + chartWidth + spaceForLegend)
	    .attr("height", chartHeight);

	// Create bars
	var bar = chart.selectAll("g")
	    .data(zippedData)
	    .enter().append("g")
	    .attr("transform", function(d, i) {
	      return "translate(" + spaceForLabels + "," + (i * barHeight + gapBetweenGroups * (0.5 + Math.floor(i/data.series.length))) + ")";
	    });

	// Create rectangles of the correct width
	bar.append("rect")
	    .attr("fill", function(d,i) { return color(i % data.series.length); })
	    .attr("class", "bar")
	    .attr("width", x)
	    .attr("height", barHeight - 1);

	// Add text label in bar
	bar.append("text")
	    .attr("x", function(d) { return x(d) - 3; })
	    .attr("y", barHeight / 2)
	    .attr("fill", "red")
	    .attr("dy", ".35em")
	    .text(function(d) { return d; });

	// Draw labels
	bar.append("text")
	    .attr("class", "label")
	    .attr("x", function(d) { return - 10; })
	    .attr("y", groupHeight / 2)
	    .attr("dy", ".35em")
	    .text(function(d,i) {
	      if (i % data.series.length === 0)
	        return data.labels[Math.floor(i/data.series.length)];
	      else
	        return "";});

	chart.append("g")
	      .attr("class", "y axis")
	      .attr("transform", "translate(" + spaceForLabels + ", " + -gapBetweenGroups/2 + ")")
	      .call(yAxis);

	// Draw legend
	var legendRectSize = 18,
	    legendSpacing  = 4;

	var legend = chart.selectAll('.legend')
	    .data(data.series)
	    .enter()
	    .append('g')
	    .attr('transform', function (d, i) {
	        var height = legendRectSize + legendSpacing;
	        var offset = -gapBetweenGroups/2;
	        var horz = spaceForLabels + chartWidth + 40 - legendRectSize;
	        var vert = i * height - offset;
	        return 'translate(' + horz + ',' + vert + ')';
	    });

	legend.append('rect')
	    .attr('width', legendRectSize)
	    .attr('height', legendRectSize)
	    .style('fill', function (d, i) { return color(i); })
	    .style('stroke', function (d, i) { return color(i); });

	legend.append('text')
	    .attr('class', 'legend')
	    .attr('x', legendRectSize + legendSpacing)
	    .attr('y', legendRectSize - legendSpacing)
	    .text(function (d) { return d.label; });

	
}


/**
 * Utility functions
 */


function setStateSerious() {
	isSerious = 1;
	$("#seriousSignificant").removeClass("btn-default").addClass("btn-primary");
	$("#nonSeriousSignificant").removeClass("btn-primary").addClass("btn-default");
	
}

function setStateNonSerious() {
	isSerious = 2;
	$(".list-group-item").removeClass("active");
	$("#nonSeriousSignificant").removeClass("btn-default").addClass("btn-primary");
	$("#seriousSignificant").removeClass("btn-primary").addClass("btn-default");
}

function clearSignificanceState() {
	isSerious = 0;
	$("#nonSeriousSignificant").removeClass("btn-primary").addClass("btn-default");
	$("#seriousSignificant").removeClass("btn-primary").addClass("btn-default");
}

function resetFields() {
	clearSignificanceState();
	$("#divOutcomes").fadeIn();
	$("#inputSearchCriteria").val("");
	$(".list-group-item").removeClass("active");
}



