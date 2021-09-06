var myIndex = 0;
split();
function split() {
    var i;
    var x = document.getElementsByClassName("carousel-item");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(split, 3000);
};
