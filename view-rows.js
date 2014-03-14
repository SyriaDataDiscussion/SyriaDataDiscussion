var window_width;

//On Page Load
$(document).ready(function(){
	window_width = $(window).width();
	if (window_width <= 700)
	{	
		/*alert("Page loaded with width of less than 700px.");
		alert("Will hide all siblings of title");*/
		$("table#view-table tbody tr td:first-child").siblings().css({"display": "none", "width": "100%"});
		$("table#view-table tbody tr td:first-child").css({"display": "block", "width": "100%"});
	}
});

//On Screen Resize
$(window).resize(function(){
	/*alert("PAGE WAS JUST RESIZED to a WIDTH of " + $(window).width());	*/
	if (window_width <= 700)
	{
		//FROM SMALL VIEW TO BIG VIEW
		if ($(window).width() > 700)
		{
			$("table#view-table tbody tr td").css({"display": "table-cell", "width": "auto"});
		}
	}
	else
	{
		//FROM BIG VIEW TO SMALL VIEW
		if ($(window).width() < 700)
		{
			$("table#view-table tbody tr td:first-child").siblings().css({"display": "none", "width": "100%"});
			$("table#view-table tbody tr td:first-child").css({"display": "block", "width": "100%"});
		}
	}
	
	window_width = $(window).width();
});

// Click Title to Expand Information Below
$(document).ready(function(){
	$("table#view-table tbody tr td:first-child").click(function(){
		if ($(window).width() <= 700)
		{
			/*alert("table#view-table tbody tr td:first-child clicked!");*/
			/*alert("Index is " + $(this).index());*/
			if($(this).siblings().is(":visible"))
			{
				$(this).siblings().css({"display": "none", "width": "100%"});
			}
			else
			{
				$(this).siblings().css({"display": "block", "width": "100%"});
			}
		}	
	});
});