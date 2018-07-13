"use strict";

/*when a user checks a checkbox, add this to the output div*/
$("input[type='checkbox']").bind("change", function() {
    var countryList = 'GeoIP.Country IN ["';
    $("input[type='checkbox']").each(function(index, value) {
	        if (this.checked) {
		            /*add*/ /*get label text associated with checkbox*/
		            countryList += ($('label[for="'+this.name+'"]').attr('for') + '", "');
	        }
    });

	var checked = $('input[type="checkbox"]').is(":checked");
    if (countryList.length > 0 && checked ) {
		// console.log(countryList);
	    countryList = countryList.substring(0,countryList.length-3) + '] ';
    } else {
		var countryList = '';
	}
	    
	$('#output').html(countryList);
});