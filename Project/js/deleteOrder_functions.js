  $(document).ready(function() {
//When clicking on delete order, all the li items from the different lists in the receipt are emptied. After that the total sum is calculated again.
deleteEntry  = function (id){
	
	
	$("#overview li[id*='" + id + "']").remove();
	$("#price li[id2*='" + id + "']").remove();
	$("#amount li[id2*='" + id + "']").remove();
	$("#amountPrice li[id2*='" + id + "']").remove();
	
	// deduct article from price 
	
	$("#total").empty();
    $("#total").append((TotalSum('#totalPerBeer li')));
	
}

$("#btnDeleteAll").click(function(){
	
$('#overview li').remove();
	$('#price li').remove();
	$('#amount li').remove();
	$('#amountPrice li').remove();
	$("#total").empty();
});
})