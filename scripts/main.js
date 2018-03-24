// let's test this

console.log('We are connected YAY')


//make sure we don't execute anything until the page fully loads
$(document).ready(function() {
//put all functions in here


//ABOUT SLIDER
//on default hide the about content
//when user clicks on about tab, slide up to reveal the about div
//when user clicks on about tab again, slide down and hide about div
//seems like a toggle is a good idea

console.log('About Slider')
$('.about').hide();
	$('.about-tab').click(function() {
		$('.about').slideToggle(1000);
	});


//CHECKOFF FUNCTIONALITY
//first check to see if local storage is supported
//when user clicks on Completed button
//replace the undone icon in checklist with done icon
//change button state to status-complete
//toggle functionality
//if user clicks on status-complete
//replace done icon in checklist with undone icon
//change button state to status-incomplete

console.log('Local storage setup')
if (typeof(Storage) !== 'undefined') {
	//put all the rest of the code in here
	// Store
	localStorage.setItem('draft-script','complete')
	//Retrieve
	document.getElementById('result')
} else {
	//Sorry! No web storage support
}



//STICKY CHECKLIST

//localStorage.setItem('write-screener','completed')
// var itemsToComplete = {
// 	writeScreener: true,
// 	otherThing: false,
// }

// localStorage.setItem('items-to-complete',JSON.stringify(itemsToComplete)

// var fromLocalStorage = localStorage.getItem('items-to-complete')

// window.addEventListener('scroll', (e) => console.log(e))
// is the same as
// window.addEventListener('scroll', function(e) {
//   console.log(e)
// })
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