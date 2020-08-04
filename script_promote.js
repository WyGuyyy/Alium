var boxIndex = 0;
showBox();

function showBox() {
  var i;
  var boxArr = document.getElementsByClassName("slideBox");
  console.log(boxArr.length)
  for (i = 0; i < boxArr.length; i++) {
    boxArr[i].style.display = "none";
  }
  boxIndex++;
  if (boxIndex > boxArr.length) {boxIndex = 1}
  boxArr[boxIndex-1].style.display = "flex";
  setTimeout(showBox, 10000); // Change image every 2 seconds
}