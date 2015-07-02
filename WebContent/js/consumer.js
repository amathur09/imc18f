var isSerious = 0; // 1 = serious , 2 = not Serious, 0 = not assigned
$(document).ready(function () {
	var nonSeriousSignificant = $("#nonSeriousSignificant");
	var seriousSignificant = $("#seriousSignificant");
	var divOutcomes = $("#divOutcomes");
	var generateChartButton = $("#generateChartButton");
	var resetButton = $("#resetButton");
	//var selectOutcomes = $("#selectOutcomes");
	nonSeriousSignificant.off("click"); // un-binding the on click at the end of the function
	nonSeriousSignificant.on("click", function () {
		divOutcomes.fadeOut();
		setStateNonSerious();
	});
	seriousSignificant.off("click"); // un-binding the on click at the end of the function
	seriousSignificant.on("click", function () {
		divOutcomes.fadeIn();
		setStateSerious();
	});
	populateDrugNameField();
	generateChartButton.off("click");
	generateChartButton.on("click", createRequestURL);
	resetButton.off("click");
	resetButton.on("click", resetFields);
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
		type: "get",
		url: "https://api.fda.gov/drug/event.json?&count=patient.drug.medicinalproduct",
		crossDomain: true
	});
	getAllMedicinalProducts.done(getAllMedicinalProductsSuccess);
	getAllMedicinalProducts.fail(getAllMedicinalProductsFail);
}
/**
 * @param jData : json response
 * @param status : text status - 200 if OK
 * @param jqXHR : HMLHttpResponse object
 */
function getAllMedicinalProductsSuccess(jData, status, jqXHR) {
	var arrayOfAllMedicinalProducts = [];
	for (var i = 0; i < jData.results.length; i++) {
		arrayOfAllMedicinalProducts.push(jData.results[i].term);
	}
	$("#inputSearchCriteria").autocomplete({
		source: arrayOfAllMedicinalProducts
	});
}

function getAllMedicinalProductsFail(jqXHR, status, error) {
	/**
	 * TODO : handle Failure with care
	 */
	alert("You seem to have connectivity issues! The list of medicinal products did not load. Please refresh the page and try again.");
}

function createRequestURL() {
	/**
	 * TODO : 
	 * 1. search for the 3 input fields
	 * 2. get the values if they are not null,
	 * 3. create a request URL just like the one FDA website so it can be used in the query.
	 * 
	 */
	var isFirstSearchCriteria = true;
	var baseURL = "https://api.fda.gov/drug/event.json?";
	var searchWithThisCustomizedURL = baseURL;
	var userInputDrugName = $("#inputSearchCriteria").val();
	if (userInputDrugName != "") { // user has entered some value. use it in the search url. else do nothing.
		if (isFirstSearchCriteria) {
			searchWithThisCustomizedURL = searchWithThisCustomizedURL + "&search=";
			isFirstSearchCriteria = false;
		}
		searchWithThisCustomizedURL = searchWithThisCustomizedURL + "medicinalproduct:" + userInputDrugName;
		urlOnlyForDrug = searchWithThisCustomizedURL + "&count=patient.reaction.reactionmeddrapt.exact";
	}
	if (isSerious !== 0) { // user has set either serious or non serious.
		if (isFirstSearchCriteria) {
			searchWithThisCustomizedURL = searchWithThisCustomizedURL + "search=";
			isFirstSearchCriteria = false;
		} else { // something has already been appended to the url b4 this, so add "+AND+" , before the next search criteria is appended
			searchWithThisCustomizedURL = searchWithThisCustomizedURL + "+AND+";
		}
		if (isSerious == 1) {
			searchWithThisCustomizedURL = searchWithThisCustomizedURL + "serious:1";
			urlOnlyForSerious = searchWithThisCustomizedURL + "&count=patient.reaction.reactionmeddrapt.exact";
		} else { //
			searchWithThisCustomizedURL = searchWithThisCustomizedURL + "serious:2";
			urlOnlyForNonSerious = searchWithThisCustomizedURL + "&count=patient.reaction.reactionmeddrapt.exact";
		}
	}
	var selectedValues = $("#selectOutcomes").val();
	var theUnionOfSelectedOutcomes = "";
	if (selectedValues != null) {
		if (searchWithThisCustomizedURL !== baseURL) {
			searchWithThisCustomizedURL = searchWithThisCustomizedURL + "+AND+";
		} else {
			searchWithThisCustomizedURL = searchWithThisCustomizedURL + "&search=";
		}
		for (var i = 0; i < selectedValues.length; i++) {
			if (i == 0 && i == selectedValues.length - 1) { // is the first element and the last element at the same time (user selects only one element)
				theUnionOfSelectedOutcomes = theUnionOfSelectedOutcomes + "(" + selectedValues[i] + ":1)";
			} else if (i == 0) { // only first
				theUnionOfSelectedOutcomes = theUnionOfSelectedOutcomes + "(" + selectedValues[i] + ":1";
			} else if (i == selectedValues.length - 1) { // is only the last element
				theUnionOfSelectedOutcomes = theUnionOfSelectedOutcomes + selectedValues[i] + ":1" + ")";
			} else { // is the middle element
				theUnionOfSelectedOutcomes = theUnionOfSelectedOutcomes + selectedValues[i] + ":1";
			}
			if (i !== (selectedValues.length - 1)) {
				theUnionOfSelectedOutcomes = theUnionOfSelectedOutcomes + "+";
			}
		}
	}
	searchWithThisCustomizedURL = searchWithThisCustomizedURL + theUnionOfSelectedOutcomes + "&count=patient.reaction.reactionmeddrapt.exact";
	makeAjaxCallForThisURL(searchWithThisCustomizedURL);
}
/**
 * 
 * @param searchWithThisCustomizedURL : the url that was constructed depending on user's selection
 */
function makeAjaxCallForThisURL(searchWithThisCustomizedURL) {
	var ajaxGetCustomResults = $.ajax({
		type: "get",
		url: searchWithThisCustomizedURL,
		crossDomain: true
	});
	ajaxGetCustomResults.done(ajaxGetCustomResultsSuccess);
	ajaxGetCustomResults.fail(ajaxGetCustomResultsFail);
}

/**
 * Convert the recieved data into the chart redable data.
 * @param jData
 * @param status
 * @param jqXHR
 */
function ajaxGetCustomResultsSuccess(jData, status, jqXHR) {
	if ("error" in jData) { // query did not yield any result
		// show an error message
	} else { //we have result! rejoice!
		var customResult = jData.results;
		customResult = customResult.slice(0, 10);
		convertDataToChartReadable(customResult);
	}
}

/**
 * Show error
 * @param jqXHR
 * @param status
 * @param error
 */
function ajaxGetCustomResultsFail(jqXHR, status, error) {
	$(".chart").css("display", "none");
	$(".placeholder").css("display", "none");
	$("#ajaxErrorNoReturnData").fadeIn();
}

/**
 * 
 * @param customResult : data received from the ajax call the FDA website. 
 */
function convertDataToChartReadable(customResult) {
	var labels = [];
	var series = [];
	var values = [];
	for (var i = 0; i < customResult.length; i++) {
		labels.push(customResult[i].term);
		values.push(customResult[i].count);
	}
	series.push({
		"label": "Total",
		"values": values
	});
	var dataForGraph = {
		"labels": labels,
		"series": series
	};
	initializeBreadCrumbs();
	renderGraph(dataForGraph);
}

/**
 * According to the user selection, update the user criteria in form of breadcrumbs
 */
function initializeBreadCrumbs() {
	$(".breadcrumb").html("");
	var breadCrumbHtml = "";
	var drugName = $("#inputSearchCriteria").val();
	var selectedValues = $("#selectOutcomes").val();
	if (drugName != null) {
		breadCrumbHtml = breadCrumbHtml + "<li> " + drugName + " </li>";
	}
	if (isSerious != 0) {
		if (isSerious == 1) {
			breadCrumbHtml = breadCrumbHtml + "<li> serious </li>";
		} else {
			breadCrumbHtml = breadCrumbHtml + "<li> non-serious </li>";
		}
	}
	var allOutComes = "";
	if (selectedValues != null) {
		var currentOutcomeRealName = "";
		for (var i = 0; i < selectedValues.length; i++) {
			switch (selectedValues[i]) {
				default:;
			case "seriousnessdeath":
					currentOutcomeRealName = "results in death";
				break;
			case "seriousnesslifethreatening":
					currentOutcomeRealName = "life-threatening";
				break;
			case "seriousnesshospitalization":
					currentOutcomeRealName = "caused/prolonged hospitalization";
				break;
			case "seriousnessdisabling":
					currentOutcomeRealName = "disabling/incapacitating";
				break;
			case "seriousnesscongenitalanomali":
					currentOutcomeRealName = "congenital anomaly/birth defect";
				break;
			case "seriousnessother":
					currentOutcomeRealName = "other medically important condition";
				break;
			}
			if (i == 0 && i == selectedValues.length - 1) { // is the first element and the last element at the same time (user selects only one element)
				allOutComes = allOutComes + "<li> " + currentOutcomeRealName + " </li>";
			} else if (i == 0) { // only first
				allOutComes = allOutComes + "<li> " + currentOutcomeRealName;
			} else if (i == selectedValues.length - 1) { // is only the last element
				allOutComes = allOutComes + currentOutcomeRealName + " </li>";
			} else { // is the middle element
				allOutComes = allOutComes + currentOutcomeRealName;
			}
			if (i !== (selectedValues.length - 1)) {
				allOutComes = allOutComes + ", ";
			}
		}
		breadCrumbHtml = breadCrumbHtml + allOutComes;
	}
	$(".breadcrumb").append(breadCrumbHtml);
}


/**
 * Use D3 library to generate the chart.
 * @param dataForGraph : converted data so it is readable by d3 graph.
 */

function renderGraph(dataForGraph) {
	$(".chart").html("");
	$(".placeholder").css("display", "none");
	$("#ajaxErrorNoReturnData").css("display", "none");
	$(".chart").fadeIn();
	$("#exitLinktoFares").fadeIn();
	var data = dataForGraph;
	var chartWidth = $(".chartWell").width() * 5 / 7,
		barHeight = 20,
		groupHeight = barHeight * data.series.length,
		gapBetweenGroups = 15,
		spaceForLabels = $(".chartWell").width() * 2 / 7;
	// Zip the series data together (first values, second values, etc.)
	var zippedData = [];
	for (var i = 0; i < data.labels.length; i++) {
		for (var j = 0; j < data.series.length; j++) {
			zippedData.push(data.series[j].values[i]);
		}
	}
	// Color scale
	var color = d3.scale.category20();
	var chartHeight = barHeight * zippedData.length + gapBetweenGroups * data.labels.length;
	var x = d3.scale.linear().domain([0, d3.max(zippedData)]).range([0, chartWidth]);
	var y = d3.scale.linear().range([chartHeight + gapBetweenGroups, 0]);
	var yAxis = d3.svg.axis().scale(y).tickFormat('').tickSize(0).orient("left");
	// Specify the chart area and dimensions
	var chart = d3.select(".chart").attr("width", spaceForLabels + chartWidth).attr("height", chartHeight);
	// Create bars
	var bar = chart.selectAll("g").data(zippedData).enter().append("g").attr("transform", function (d, i) {
		return "translate(" + spaceForLabels + "," + (i * barHeight + gapBetweenGroups * (0.5 + Math.floor(i / data.series.length))) + ")";
	});
	// Create rectangles of the correct width
	bar.append("rect").attr("fill", function (d, i) {
		return color(i % data.series.length);
	}).attr("class", "bar").attr("width", x).attr("height", barHeight - 1);
	// Add text label in bar
	bar.append("text").attr("x", function (d) {
		return x(d) - 3;
	}).attr("y", barHeight / 2).attr("fill", "red").attr("dy", ".35em").text(function (d) {
		return d;
	});
	// Draw labels
	bar.append("text").attr("class", "label").attr("x", function (d) {
		return -10;
	}).attr("y", groupHeight / 2).attr("dy", ".35em").text(function (d, i) {
		if (i % data.series.length === 0) return data.labels[Math.floor(i / data.series.length)];
		else return "";
	});
	chart.append("g").attr("class", "y axis").attr("transform", "translate(" + spaceForLabels + ", " + -gapBetweenGroups / 2 + ")").call(yAxis);
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
	$("#selectOutcomes").val("");
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