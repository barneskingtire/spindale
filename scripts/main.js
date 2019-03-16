//makes icons pop up when scrolled to
let popIcons = () => {
	console.log("popIcons is working");
  let points = document.getElementsByClassName('point');
  for(let index = 0; index < points.length; index++){
    points[index].style.opacity = 100;
		points[index].style.transform="scale(1)"
  }
}

window.onload = function(){
	window.addEventListener("scroll", function(){
		let pointsHeight = document.getElementsByClassName('bullet-points')[0].offsetTop;
		console.log('scroll happened to ' + this.scrollY + " - " + pointsHeight);
		if(this.scrollY >= pointsHeight - 1000){
			popIcons();
		}
	});
};
