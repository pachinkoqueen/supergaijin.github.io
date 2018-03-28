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

//DAY ONE BUTTONS
$('.button-draft-script').on('click', function() {
	$('.checklist-draft-script, .button-draft-script')
		.find('[data-fa-i2svg]')
		.toggleClass('fa-circle ')
		.toggleClass('fa-check-circle')
		localStorage.setItem('draft-script','complete')
	});

$('.button-write-screener').on('click', function() {
	$('.checklist-write-screener, .button-write-screener')
		.find('[data-fa-i2svg]')
		.toggleClass('fa-circle ')
		.toggleClass('fa-check-circle')
		localStorage.setItem('write-screener','complete')
	});

$('.button-define-recruit-pool').on('click', function() {
	$('.checklist-define-recruit-pool, .button-define-recruit-pool')
		.find('[data-fa-i2svg]')
		.toggleClass('fa-circle ')
		.toggleClass('fa-check-circle')
		localStorage.setItem('define-recruit-pool','complete')
	});

$('.button-send-screener').on('click', function() {
	$('.checklist-send-screener, .button-send-screener')
		.find('[data-fa-i2svg]')
		.toggleClass('fa-circle ')
		.toggleClass('fa-check-circle')
		localStorage.setItem('send-screener','complete')
	});

//DAY TWO BUTTONS
$('.button-schedule-recruits').on('click', function() {
	$('.checklist-schedule-recruits, .button-schedule-recruits')
		.find('[data-fa-i2svg]')
		.toggleClass('fa-circle ')
		.toggleClass('fa-check-circle')
		localStorage.setItem('schedule-recruits','complete')
	});

$('.button-set-up-room').on('click', function() {
	$('.checklist-set-up-room, .button-set-up-room')
		.find('[data-fa-i2svg]')
		.toggleClass('fa-circle ')
		.toggleClass('fa-check-circle')
		localStorage.setItem('set-up-room','complete')
	});

$('.button-refine-script').on('click', function() {
	$('.checklist-refine-script, .button-refine-script')
		.find('[data-fa-i2svg]')
		.toggleClass('fa-circle ')
		.toggleClass('fa-check-circle')
		localStorage.setItem('refine-script','complete')
	});

$('.button-qa-prototype').on('click', function() {
	$('.checklist-qa-prototype, .button-qa-prototype')
		.find('[data-fa-i2svg]')
		.toggleClass('fa-circle ')
		.toggleClass('fa-check-circle')
		localStorage.setItem('qa-prototype','complete')
	});

$('.button-remind-team').on('click', function() {
	$('.checklist-remind-team, .button-remind-team')
		.find('[data-fa-i2svg]')
		.toggleClass('fa-circle ')
		.toggleClass('fa-check-circle')
		localStorage.setItem('remind-team','complete')
	});

//DAY THREE BUTTONS
$('.button-interview-users').on('click', function() {
	$('.checklist-interview-users, .button-interview-users')
		.find('[data-fa-i2svg]')
		.toggleClass('fa-circle ')
		.toggleClass('fa-check-circle')
		localStorage.setItem('interview-users','complete')
	});

$('.button-send-incentives').on('click', function() {
	$('.checklist-send-incentives, .button-send-incentives')
		.find('[data-fa-i2svg]')
		.toggleClass('fa-circle ')
		.toggleClass('fa-check-circle')
		localStorage.setItem('send-incentives','complete')
	});

$('.button-review-with-team').on('click', function() {
	$('.checklist-review-with-team, .button-review-with-team')
		.find('[data-fa-i2svg]')
		.toggleClass('fa-circle ')
		.toggleClass('fa-check-circle')
		localStorage.setItem('review-with-team','complete')
	});

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


var itemsComplete = localStorage.getItem('share-findings')

	if (itemsComplete = 'complete') {
		console.log(itemsComplete);

		// $('.button-share-findings').on('click', function() {
		// 	$('.checklist-share-findings, .button-share-findings')
		// 		.find('[data-fa-i2svg]')
		// 		.toggleClass('fa-circle ')
		// 		.toggleClass('fa-check-circle')
	};


//...and don't delete this little guy below
});



 // ===================
 //   JQUERY GRAVEYARD
 // ===================

// "complete"
// var itemsComplete = localStorage.getItem('share-findings')
// undefined
// itemsComplete
// "complete"
// if itemsComplete = 'complete' {
// VM713:1 Uncaught SyntaxError: Unexpected identifier
// if itemsComplete = 'complete' { console.log('yes')}
// VM755:1 Uncaught SyntaxError: Unexpected identifier
// if (itemsComplete = 'complete') { console.log('yes')}

	// if (itemsComplete = 'complete') {
	// 	$('.button-share-findings').on('click', function() {
	// 		$('.checklist-share-findings, .button-share-findings')
	// 			.find('[data-fa-i2svg]')
	// 			.toggleClass('fa-circle ')
	// 			.toggleClass('fa-check-circle')
	// });
	// }


// console.log('Local storage setup')
// if (typeof(Storage) !== 'undefined') {
// 	//put all the rest of the code in here
// 	// Store
// 	localStorage.setItem('extend-research','complete')
// 	//Retrieve
// 	document.getElementById('result')
// } else {
// 	//Sorry! No web storage support
// }

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