var myScroll;
var mySlide;

function loaded() {
	setTimeout(function(){mySlide = new iScroll('slider-wrapper', {
		snap: true,
		momentum: false,
		hScrollbar: false,
		onScrollEnd: function () {
			document.querySelector('#indicator > li.active').className = '';
			document.querySelector('#indicator > li:nth-child(' + (this.currPageX+1) + ')').className = 'active';
		}
	});}, 0);
	setTimeout(function(){scroll2 = new iScroll('wrapper');}, 0);

	/*mySlide = new iScroll();

	myScroll = new iScroll('description');*/
}

document.addEventListener('DOMContentLoaded', loaded, false);
document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
window.onorientationchange = function(event) {
	event.preventDefault();
};
/*window.onload = function() {
	setTimeout(function() {
	window.scrollTo(0, 1);
}, 100);
};*/