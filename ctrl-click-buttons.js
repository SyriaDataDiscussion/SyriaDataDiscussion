$(document).ready(function(){
	$(document).keydown(function(event){
		if(event.which=="17") cntrlIsPressed = true;
	});

	$(document).keyup(function(){
		cntrlIsPressed = false;
	});

	var cntrlIsPressed = false;
	
	$("input[type='checkbox']").change(function(){
		/*alert("Change Event");*/
		if (cntrlIsPressed)
		{
			/*alert("Control + Click");*/
			/*alert($(this).attr("name"));*/
			var input_id = "#" + $(this).attr("id");
			var input_name = $(this).attr("name");
			/*alert(input_id);*/
			/*alert(input_name);*/
			/*alert($("input[name='" + $(this).attr("name") + "']").prop("checked"));*/
			/*$(input_class).prop("checked", false);*/
			/*$(input_class).attr("checked", true);*/
			/*var not_part = ":not(" + $(this).attr("id") + ")";*/
			/*$(input_class + not_part).prop("checked", false);*/
			/*$("input[name='filter-location']:not(#filter-location-Syria)").attr("checked", false);*/
			/*alert("input[name='" + $(this).attr("name") + "']");*/
			/*alert("input[name='" + $(this).attr("name") + "']:not(#" + $(this).attr("id") + ")");*/
			$("input[name='" + $(this).attr("name") + "']").prop("checked", true);
			$("input[name='" + $(this).attr("name") + "']:not(#" + $(this).attr("id") + ")").prop("checked", false);
			cntrlIsPressed = false;
		}
	});
});