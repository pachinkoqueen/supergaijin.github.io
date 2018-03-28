//let's test this

console.log('We are connected YAY')


//make sure we don't execute anything until the page fully loads
$(document).ready(function() {
//put all functions in here


//ABOUT SLIDER
//on default hide the about content
//when user clicks on about tab, slide up to reveal the about div
//when user clicks on about tab again, slide down and hide about div
//seems like a toggle is a good idea

console.log('About slider')
$('.about').hide();
	$('.about-tab').click(function() {
		$('.about').slideToggle(1000);
	});


//checklist changing icon class


//DAY FOUR BUTTONS
//i'm sure there's a better way to do this
$('.button-share-findings').on('click', function() {
	$('.checklist-share-findings, .button-share-findings')
		.find('[data-fa-i2svg]')
		.toggleClass('fa-circle ')
		.toggleClass('fa-check-circle')
		localStorage.setItem('share-findings','complete')
	});

$('.button-keep-going').on('click', function() {
	$('.checklist-keep-going, .button-keep-going')
		.find('[data-fa-i2svg]')
		.toggleClass('fa-circle')
		.toggleClass('fa-check-circle')
		localStorage.setItem('keep-going','complete')
	});


$('.button-extend-research').on('click', function() {
	$('.checklist-extend-research, .button-extend-research')
		.find('[data-fa-i2svg]')
		.toggleClass('fa-circle')
		.toggleClass('fa-check-circle')
		localStorage.setItem('extend-research','complete')
	});


// localStorage.getItem('draft-script')
// "complete"
var itemsComplete = localStorage.getItem('extend-research')
// undefined
// itemsComplete
// "complete"
// if itemsComplete = 'complete' {
// VM713:1 Uncaught SyntaxError: Unexpected identifier
// if itemsComplete = 'complete' { console.log('yes')}
// VM755:1 Uncaught SyntaxError: Unexpected identifier
// if (itemsComplete = 'complete') { console.log('yes')}

	if (itemsComplete = 'complete') {
		$('.button-share-findings').on('click', function() {
			$('.checklist-share-findings, .button-share-findings')
				.find('[data-fa-i2svg]')
				.toggleClass('fa-circle ')
				.toggleClass('fa-check-circle')
				// localStorage.setItem('share-findings','complete')
	});
	}

//CHECKOFF FUNCTIONALITY
//NOTE DOES NOT APPEAR IN MOBILE
//first check to see if local storage is supported
//when user clicks on completed button
//replace the undone icon (css class far fa-circle) in checklist with done icon (css class far fa-check-circle)
//change button state (css class button-incomplete) to status-complete (css class button-complete)
//toggle functionality
//if user clicks on status-complete
//replace done icon in checklist with undone icon
//change button state to status-incomplete

console.log('Local storage setup')
if (typeof(Storage) !== 'undefined') {
	//put all the rest of the code in here
	// Store
	localStorage.setItem('extend-research','complete')
	//Retrieve
	document.getElementById('result')
} else {
	//Sorry! No web storage support
}








//...and don't delete this little guy below
});



 // ===================
 //   JQUERY GRAVEYARD
 // ===================


localStorage.getItem('draft-script')
"complete"
var one = localStorage.getItem('draft-script')
undefined
one
"complete"
if(one === true) {
	alert('yep')
}






//STICKY CHECKLIST

// localStorage.setItem('write-screener','completed')
// var itemsToComplete = {
// 	writeScreener: true,
// 	otherThing: false,
// }

// localStorage.setItem('items-to-complete',JSON.stringify(itemsToComplete)

// var fromLocalStorage = localStorage.getItem('items-to-complete')




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