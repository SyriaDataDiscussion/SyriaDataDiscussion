var table;
var num_rows;

$(document).ready(function(){
	//get table
	table = document.getElementById("view-table");
	
	$("input").on('keyup change',function(){
	/*alert("filter-rows activated!");*/
	
	//get number of rows
	num_rows = table.rows.length;
	/*num_rows = 2;*/
	/*alert("num_rows = " + num_rows);*/
	
	//get filter terms
	var searchTerm;
	var locTerms = new Array();
	var themeTerms = new Array();
	var formatTerms = new Array();
	
	/*alert("Number of checked boxes is " + $("input[name='filter-location']:checked").length);*/
	
	searchTerm = document.getElementById("filter-term").value;
	/*alert("searchTerm = " + searchTerm);*/
	
	for (var a = 0; a < $("input[name='filter-location']:checked").length; a++)
	{
		locTerms[a] = $("input[name='filter-location']:checked + label").eq(a).text();
	}

	for (var a = 0; a < $("input[name='filter-theme']:checked").length; a++)
	{
		themeTerms[a] = $("input[name='filter-theme']:checked + label").eq(a).text();
	}
	
	for (var a = 0; a < $("input[name='filter-format']:checked").length; a++)
	{
		formatTerms[a] = $("input[name='filter-format']:checked + label").eq(a).text();
	}
	
	var search_matched = new Array();
	var location_matched = new Array();
	var theme_matched = new Array();
	var format_matched = new Array();

	//check if user entered a search term
	//see if search term matches
	for (var r = 0; r < num_rows; r++)
	{
		if (searchTerm === "")
		{
			/*alert("NO SEARCH TERM");*/
			search_matched[r] = true;
		}
		else
		{
			/*alert("Search Term Exists");*/
			//mash of all the text in the row
			var mash = "";
			for (var b = 0; b < 9; b++)
			{
				/*alert("Mashing");*/
				mash = mash + $(table.rows[r].cells[b]).html();
				/*alert("mash = " + mash);*/
			}
		
			search_matched[r] = false;
		
			if(mash.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1)
			{
				/*alert("MATCHED Search");*/
				search_matched[r] = true;
			}
		}		
	}

	//see if location matches
	for (var r = 0; r < num_rows; r++)
	{
		var x = $(table.rows[r].cells[3]).html();			
		for (var b = 0; b < locTerms.length; b++)
		{
			/*alert("x =" + x);
			alert(locTerms[b]);*/
			//if matched, set loc_matched to true, and break out of loop
			location_matched[r] = false;
			if(x.indexOf(locTerms[b]) !== -1)
			{
			/*	alert("MATCHED LOCATION");*/
				location_matched[r] = true;
				break;
			}
		}
	}
	
	
	//see if theme matches
	for (var r = 0; r < num_rows; r++)
	{
		var x = $(table.rows[r].cells[4]).html();
		/*alert("for r = " + r + " x is " + x);*/
		for (var b = 0; b < themeTerms.length; b++)
		{
			/*alert("x =" + x);
			alert(locTerms[b]);*/
			//if matched, set loc_matched to true, and break out of loop
			theme_matched[r] = false;
			if(x.indexOf(themeTerms[b]) !== -1)
			{
				/*alert("MATCHED THEME");*/
				theme_matched[r] = true;
				break;
			}
		}
		/*if (r === 2) alert("theme_matched[r] with r = " + r + " == " + theme_matched[r]);*/
		
	}	
	
	
	//see if format matches
	for (var r = 0; r < num_rows; r++)
	{
		var x = $(table.rows[r].cells[5]).html();
		for (var b = 0; b < formatTerms.length; b++)
		{
			/*alert("x =" + x);
			alert(locTerms[b]);*/
			//if matched, set loc_matched to true, and break out of loop
			format_matched[r] = false;
			if(x.indexOf(formatTerms[b]) !== -1)
			{
				/*alert("Matched Format");*/
				format_matched[r] = true;
				break;
			}
		}
	}	
	
	
	/*alert("about to determine display");*/
	//determine whether to display row
	for (var r = 0; r < num_rows; r++)
	{
		/*alert("search_matched[r]&&location_matched[r]&&format_matched[r]&&theme_matched[r] with r = " + r + " --" + search_matched[r]+location_matched[r]+format_matched[r]+theme_matched[r]);*/
		if (search_matched[r]&&location_matched[r]&&format_matched[r]&&theme_matched[r])
		{
			$(table.rows[r]).show();
		}
		else
		{
			$(table.rows[r]).hide();
		}
	}
	
	});
});