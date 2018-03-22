// let's test this

console.log('We are connected YAY')


//make sure we don't execute anything until the page fully loads
$(document).ready(function() {
//put all functions in here

//on default hide the about content
//when user clicks on about tab, slide up to reveal the about div
//when user clicks on about tab again, slide down and hide about div
//seems like a toggle is a good idea

$('.about').hide();
	$('.about-tab').click(function() {
		$('.about').slideToggle(1000);
	});



//localStorage.setItem('write-screener','completed')
// var itemsToCo,plete = {
// 	writeScreener: true,
// 	otherThing: false,
// }

// localStorage.setItem('items-to-complete',JSON.stringify(itemsToComplete)

// var fromLocalStorage = localStorage.getItem('items-to-complete')
//...and don't delete this little guy below
});




 // ===================
 //   JQUERY GRAVEYARD
 // ===================
//failed toggle efforts
//NOPE
	// $('.about').hide();
	// $('.about-tab').click(function(){
	// 	$('.about-tab').slideUp(1000, function() {
	// 		// $('.about-tab').click(function() {
	// 		// 	$('.about').slideDown(1000).hide('.about');
	// 		// });			
	// 	})
	// });



//this kinda works but the tab disappears
	// $('.about').hide();
	// $('.about-tab').click(function(){
	// 	$('.about-tab').slideUp(1000, function() {
	// 		$('.about').slideDown(1000).show('.about');
	// 	})
	// 	// .hide('.hide');
	// });