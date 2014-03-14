var table;
var num_rows;

$(document).ready(function(){
	//get table
	table = document.getElementById("view-table");

	//get number of rows
	num_rows = table.rows.length;
	/*alert("num_rows = " + num_rows);*/
	
/*alert("sort-rows.js activated!");*/
	
		var temp_table = new Array();
		var temp_num_rows = num_rows;
		/*alert("Initialization of Temp Table Complete");*/
		
		//add table to temp_table, excluding first header row
		for (var r = 0; r < num_rows; r++)
		{
			/*alert("Adding Table to Temp_Table with r = " + r);*/			
			temp_table[r] = [$(table.rows[r].cells[0]).html(), $(table.rows[r].cells[1]).html(), $(table.rows[r].cells[2]).html(), $(table.rows[r].cells[3]).html(), $(table.rows[r].cells[4]).html(), $(table.rows[r].cells[5]).html(), $(table.rows[r].cells[6]).html(), $(table.rows[r].cells[7]).html(), $(table.rows[r].cells[8]).html()];
			
			//Print out temp_table
			/*for (var c = 0; c < 9; c++){alert("temp_table["+r+"]["+c+"] = " + temp_table[r][c]);}		*/
		}
	
		/*alert("harrr");			*/
		
		//Create Sorting Guide
		var sort_guide = new Array();
		sort_guide[0] = [$("#first-sort").val().substring(0,1), $("#first-sort").val().substring(1,2)];
		sort_guide[1] = [$("#second-sort").val().substring(0,1), $("#second-sort").val().substring(1,2)];
		sort_guide[2] = [$("#third-sort").val().substring(0,1), $("#third-sort").val().substring(1,2)];
		sort_guide[3] = [$("#fourth-sort").val().substring(0,1), $("#fourth-sort").val().substring(1,2)];
		sort_guide[4] = [$("#fifth-sort").val().substring(0,1), $("#fifth-sort").val().substring(1,2)];
		sort_guide[5] = [$("#sixth-sort").val().substring(0,1), $("#sixth-sort").val().substring(1,2)];
	

		/*alert("tharrr");			*/
	
		//Switch A to 1 and D to -1
		for (i = 0; i < sort_guide.length; i++)
		{
			if (sort_guide[i][1] == "A")
			{
				sort_guide[i][1] = 1;
			}
			else if (sort_guide[i][1] == "D")
			{
				sort_guide[i][1] = -1;
			}
			else
			{
			}
			
			/*alert("sort_guide[i][0] = " + sort_guide[i][0]);
			alert("sort_guide[i][1] = " + sort_guide[i][1]);*/
			//0, 1, 3, 4, 5, 6
		}		
		//Note: First element of Sort Guide says which column to sort by, second element says which direction
		
		//SORT
		/*alert(" Number(sort_guide[0][0]) = " + Number(sort_guide[0][0]) + " Number(sort_guide[0][1]) = " + Number(sort_guide[0][1]) + " Number(sort_guide[1][0]) = " + Number(sort_guide[1][0]) + " Number(sort_guide[1][1]) = " + Number(sort_guide[1][1]));*/
		
		function sort_guide_wrapper(sort_guide) {
			return function(a,b){
				for (var i = 0; i < 6; i++)
				{
					if (Number(sort_guide[i][0]) === 6)
					{
						var temp_a = a[6].toLowerCase();
						var temp_b = b[6].toLowerCase();
						
						if (temp_a == "real-time") temp_a = 0;
						else if (temp_a == "minutely") temp_a = 1;
						else if (temp_a == "hourly") temp_a = 2;
						else if (temp_a == "daily") temp_a = 3;
						else if (temp_a == "weekly") temp_a = 4;
						else if (temp_a == "bi-weekly") temp_a = 5;
						else if (temp_a == "monthly") temp_a = 6;
						else if (temp_a == "bi-monthly") temp_a = 7;
						else if (temp_a == "quarterly") temp_a = 8;
						else if (temp_a == "yearly") temp_a = 9;
						else if (temp_a == "decennially") temp_a = 10;
						else if (temp_a == "as needed") temp_a = 11;
						else if (temp_a == "irregular") temp_a = 12;
						else if (temp_a == "once") temp_a = 13;
						else if (temp_a == "unknown") temp_a = 14;
						else temp_a = 15;
						
						if (temp_b == "real-time") temp_b = 0;
						else if (temp_b == "minutely") temp_b = 1;
						else if (temp_b == "hourly") temp_b = 2;
						else if (temp_b == "daily") temp_b = 3;
						else if (temp_b == "weekly") temp_b = 4;
						else if (temp_b == "bi-weekly") temp_b = 5;
						else if (temp_b == "monthly") temp_b = 6;
						else if (temp_b == "bi-monthly") temp_b = 7;
						else if (temp_b == "quarterly") temp_b = 8;
						else if (temp_b == "yearly") temp_b = 9;
						else if (temp_b == "decennially") temp_b = 10;
						else if (temp_b == "as needed") temp_b = 11;
						else if (temp_b == "irregular") temp_b = 12;
						else if (temp_b == "once") temp_b = 13;
						else if (temp_b == "unknown") temp_b = 14;
						else temp_b = 15;
						
						if (temp_a < temp_b) return (-1 * Number(sort_guide[i][1]));
						if (temp_a > temp_b) return (1 * Number(sort_guide[i][1]));						
					}
					else
					{	
						if (a[Number(sort_guide[i][0])].toLowerCase() < b[Number(sort_guide[i][0])].toLowerCase()) return (-1 * Number(sort_guide[i][1]));
						if (a[Number(sort_guide[i][0])].toLowerCase() > b[Number(sort_guide[i][0])].toLowerCase()) return (1 * Number(sort_guide[i][1]));
					}
				}
				return 0;
			}		
		}


		
		temp_table.sort(sort_guide_wrapper(sort_guide));
		
		/*alert("Finished Running Sorting Algorithm");*/

		
		var d = 0;

		//Add temp_table_body back to table
		for (var r = 0; r < num_rows; r++)
		{
			for (var c = 0; c < 9; c++)
			{
				$(table.rows[r].cells[c]).html(temp_table[r][c]);
			}
			d = r;
		}
		/*alert("Added temp_table back to the table that appears on screen");*/
	
	
	
	
	
	$("select").on('change',function(){	
		/*alert("sort-rows.js activated!");*/
	
		var temp_table = new Array();
		var temp_num_rows = num_rows;
		/*alert("Initialization of Temp Table Complete");*/
		
		//add table to temp_table, excluding first header row
		for (var r = 0; r < num_rows; r++)
		{
			/*alert("Adding Table to Temp_Table with r = " + r);*/			
			temp_table[r] = [$(table.rows[r].cells[0]).html(), $(table.rows[r].cells[1]).html(), $(table.rows[r].cells[2]).html(), $(table.rows[r].cells[3]).html(), $(table.rows[r].cells[4]).html(), $(table.rows[r].cells[5]).html(), $(table.rows[r].cells[6]).html(), $(table.rows[r].cells[7]).html(), $(table.rows[r].cells[8]).html()];
			
			//Print out temp_table
			/*for (var c = 0; c < 9; c++){alert("temp_table["+r+"]["+c+"] = " + temp_table[r][c]);}		*/
		}
	
		/*alert("harrr");			*/
		
		//Create Sorting Guide
		var sort_guide = new Array();
		sort_guide[0] = [$("#first-sort").val().substring(0,1), $("#first-sort").val().substring(1,2)];
		sort_guide[1] = [$("#second-sort").val().substring(0,1), $("#second-sort").val().substring(1,2)];
		sort_guide[2] = [$("#third-sort").val().substring(0,1), $("#third-sort").val().substring(1,2)];
		sort_guide[3] = [$("#fourth-sort").val().substring(0,1), $("#fourth-sort").val().substring(1,2)];
		sort_guide[4] = [$("#fifth-sort").val().substring(0,1), $("#fifth-sort").val().substring(1,2)];
		sort_guide[5] = [$("#sixth-sort").val().substring(0,1), $("#sixth-sort").val().substring(1,2)];
	

		/*alert("tharrr");			*/
	
		//Switch A to 1 and D to -1
		for (i = 0; i < sort_guide.length; i++)
		{
			if (sort_guide[i][1] == "A")
			{
				sort_guide[i][1] = 1;
			}
			else if (sort_guide[i][1] == "D")
			{
				sort_guide[i][1] = -1;
			}
			else
			{
			}
			
			/*alert("sort_guide[i][0] = " + sort_guide[i][0]);
			alert("sort_guide[i][1] = " + sort_guide[i][1]);*/
			//0, 1, 3, 4, 5, 6
		}		
		//Note: First element of Sort Guide says which column to sort by, second element says which direction
		
		//SORT
		/*alert(" Number(sort_guide[0][0]) = " + Number(sort_guide[0][0]) + " Number(sort_guide[0][1]) = " + Number(sort_guide[0][1]) + " Number(sort_guide[1][0]) = " + Number(sort_guide[1][0]) + " Number(sort_guide[1][1]) = " + Number(sort_guide[1][1]));*/
		
		function sort_guide_wrapper(sort_guide) {
			return function(a,b){
				for (var i = 0; i < 6; i++)
				{
					if (Number(sort_guide[i][0]) === 6)
					{
						var temp_a = a[6].toLowerCase();
						var temp_b = b[6].toLowerCase();
						
						if (temp_a == "real-time") temp_a = 0;
						else if (temp_a == "minutely") temp_a = 1;
						else if (temp_a == "hourly") temp_a = 2;
						else if (temp_a == "daily") temp_a = 3;
						else if (temp_a == "weekly") temp_a = 4;
						else if (temp_a == "bi-weekly") temp_a = 5;
						else if (temp_a == "monthly") temp_a = 6;
						else if (temp_a == "bi-monthly") temp_a = 7;
						else if (temp_a == "quarterly") temp_a = 8;
						else if (temp_a == "yearly") temp_a = 9;
						else if (temp_a == "decennially") temp_a = 10;
						else if (temp_a == "as needed") temp_a = 11;
						else if (temp_a == "irregular") temp_a = 12;
						else if (temp_a == "once") temp_a = 13;
						else if (temp_a == "unknown") temp_a = 14;
						else temp_a = 15;
						
						if (temp_b == "real-time") temp_b = 0;
						else if (temp_b == "minutely") temp_b = 1;
						else if (temp_b == "hourly") temp_b = 2;
						else if (temp_b == "daily") temp_b = 3;
						else if (temp_b == "weekly") temp_b = 4;
						else if (temp_b == "bi-weekly") temp_b = 5;
						else if (temp_b == "monthly") temp_b = 6;
						else if (temp_b == "bi-monthly") temp_b = 7;
						else if (temp_b == "quarterly") temp_b = 8;
						else if (temp_b == "yearly") temp_b = 9;
						else if (temp_b == "decennially") temp_b = 10;
						else if (temp_b == "as needed") temp_b = 11;
						else if (temp_b == "irregular") temp_b = 12;
						else if (temp_b == "once") temp_b = 13;
						else if (temp_b == "unknown") temp_b = 14;
						else temp_b = 15;
						
						if (temp_a < temp_b) return (-1 * Number(sort_guide[i][1]));
						if (temp_a > temp_b) return (1 * Number(sort_guide[i][1]));						
					}
					else
					{	
						if (a[Number(sort_guide[i][0])].toLowerCase() < b[Number(sort_guide[i][0])].toLowerCase()) return (-1 * Number(sort_guide[i][1]));
						if (a[Number(sort_guide[i][0])].toLowerCase() > b[Number(sort_guide[i][0])].toLowerCase()) return (1 * Number(sort_guide[i][1]));
					}
				}
				return 0;
			}		
		}


		
		temp_table.sort(sort_guide_wrapper(sort_guide));
		
		/*alert("Finished Running Sorting Algorithm");*/

		
		var d = 0;

		//Add temp_table_body back to table
		for (var r = 0; r < num_rows; r++)
		{
			for (var c = 0; c < 9; c++)
			{
				$(table.rows[r].cells[c]).html(temp_table[r][c]);
			}
			d = r;
		}
		/*alert("Added temp_table back to the table that appears on screen");*/

	});
});