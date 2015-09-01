//Problem: It looks gross in smaller browser widths and small devices
//Solution: to hide the text links and swap them out with a more appropiate navigation


// Create a select and append to menu
var $select = $('<select></select>');
var $menu   = $('#menu');

$menu.append($select);
// Circle over menu links
$menu.find("a").each(function () {
	var $link    = $(this);
	//Option value is href link
	var href     = $link.attr('href');
	//Option text is text of link
	var textLink = $link.text();	
	//Create an option
	var $newOption = $('<option value="' + href + '">' + textLink + ' </option>');
	///Append option to select
	$select.append($newOption);
});
//Create button 
	//Bind click to button 
	//Go to select's location
//Modify CSS to hide links on small width resolution and show button and select
	//Also hides select and button on larger width and shows links
//Deal with selected options depending on current page

