var randomNumber1 = Math.floor(Math.random() * 5) + 1; //1-5
var randomNumber2 = Math.floor(Math.random() * 5) + 1;
var randomNumber3 = Math.floor(Math.random() * 5) + 1;
var randomNumber4 = Math.floor(Math.random() * 5) + 1;

//QS id check and change src 
document.querySelector("#myImage").setAttribute("src", "image" + randomNumber1 + ".jpg");
document.querySelector("#myPic").setAttribute("src", "image" + randomNumber2 + ".jpg");
document.querySelector("#myPic4").setAttribute("src", "image" + randomNumber3 + ".jpg");
document.querySelector("#myPic5").setAttribute("src", "image" + randomNumber4 + ".jpg");


//try

var result = 0;

var img_src = document.getElementById("myImage").src;

var k=0;

if (img_src == 'http://127.0.0.1:5500/image1.jpg') {
    let click_count = 0;
    const ima = document.getElementById("myImage");
    ima.addEventListener("click", function () {
        click_count++;
        if (click_count == 1) {
            alert("Image has been clicked 1 times,Move to next");
            k=1;
        }
        if (click_count == 2) {
            alert("Now Page will be reload ** Please try again **");
            location.reload();
        }
    });
}

else if (img_src == 'http://127.0.0.1:5500/image2.jpg') {
    let click_count = 0;
    const ima = document.getElementById("myImage");
    ima.addEventListener("click", function () {
        click_count++;
        if (click_count == 2) {
            alert("Image has been clicked 2 times,Move to next");
            k=1;
        }
        if (click_count == 3) {
            alert("Now Page will be reload ** Please try again **");
            location.reload();
        }
    });
}

else if (img_src == 'http://127.0.0.1:5500/image3.jpg') {
    let click_count = 0;
    const ima = document.getElementById("myImage");
    ima.addEventListener("click", function () {
        click_count++;
        if (click_count == 3) {
            alert("Image has been clicked 3 times,Move to next");
            k=1;
        }
        if (click_count == 4) {
            alert("Now Page will be reload ** Please try again **");
            location.reload();
        }
    });
}

else if (img_src == 'http://127.0.0.1:5500/image4.jpg') {
    let click_count = 0;
    const ima = document.getElementById("myImage");
    ima.addEventListener("click", function () {
        click_count++;
        if (click_count == 4) {
            alert("Image has been clicked 4 times,Move to next");
            k=1;
        }
        if (click_count == 5) {
            alert("Now Page will be reload ** Please try again **");
            location.reload();
        }
    });
}

else if (img_src == 'http://127.0.0.1:5500/image5.jpg') {
    let click_count = 0;
    const ima = document.getElementById("myImage");
    ima.addEventListener("click", function () {
        click_count++;
        if (click_count == 5) {
            alert("Image has been clicked 5 times,Move to next");
            k=1;
        }
        if (click_count == 6) {
            alert("Now Page will be reload ** Please try again **");
            location.reload();
        }
    });
}

var img_src2 = document.getElementById("myPic").src;

var l=0;

if (img_src2 == 'http://127.0.0.1:5500/image1.jpg') {
    let click_count = 0;
    const ima = document.getElementById("myPic");
    ima.addEventListener("click", function () {
        click_count++;
        if (click_count == 1) {
            alert("Image has been clicked 1 times,Move to next");
            l=1;
        }
        if (click_count == 2) {
            alert("Now Page will be reload ** Please try again **");
            location.reload();
        }
    });
}

else if (img_src2 == 'http://127.0.0.1:5500/image2.jpg') {
    let click_count = 0;
    const ima = document.getElementById("myPic");
    ima.addEventListener("click", function () {
        click_count++;
        if (click_count == 2) {
            alert("Image has been clicked 2 times,Move to next");
            l=1;
        }
        if (click_count == 3) {
            alert("Now Page will be reload ** Please try again **");
            location.reload();
        }
    });
}

else if (img_src2 == 'http://127.0.0.1:5500/image3.jpg') {
    let click_count = 0;
    const ima = document.getElementById("myPic");
    ima.addEventListener("click", function () {
        click_count++;
        if (click_count == 3) {
            alert("Image has been clicked 3 times,Move to next");
            l=1;
        }
        if (click_count == 4) {
            alert("Now Page will be reload ** Please try again **");
            location.reload();
        }
    });
}

else if (img_src2 == 'http://127.0.0.1:5500/image4.jpg') {
    let click_count = 0;
    const ima = document.getElementById("myPic");
    ima.addEventListener("click", function () {
        click_count++;
        if (click_count == 4) {
            alert("Image has been clicked 4 times,Move to next");
            l=1;
        }
        if (click_count == 5) {
            alert("Now Page will be reload ** Please try again **");
            location.reload();
        }
    });
}

else if (img_src == 'http://127.0.0.1:5500/image5.jpg') {
    let click_count = 0;
    const ima = document.getElementById("myPic");
    ima.addEventListener("click", function () {
        click_count++;
        if (click_count == 5) {
            alert("Image has been clicked 5 times,Move to next");
            l=1;
        }
        if (click_count == 6) {
            alert("Now Page will be reload ** Please try again **");
            location.reload();
        }
    });
}

var img_src = document.getElementById("myPic4").src;

var m=0;

if (img_src == 'http://127.0.0.1:5500/image1.jpg') {
    let click_count = 0;
    const ima = document.getElementById("myPic4");
    ima.addEventListener("click", function () {
        click_count++;
        if (click_count == 1) {
            alert("Image has been clicked 1 times,Move to next");
            m=1;
        }
        if (click_count == 2) {
            alert("Now Page will be reload ** Please try again **");
            location.reload();
        }
    });
}

else if (img_src == 'http://127.0.0.1:5500/image2.jpg') {
    let click_count = 0;
    const ima = document.getElementById("myPic4");
    ima.addEventListener("click", function () {
        click_count++;
        if (click_count == 2) {
            alert("Image has been clicked 2 times,Move to next");
            m=1;
        }
        if (click_count == 3) {
            alert("Now Page will be reload ** Please try again **");
            location.reload();
        }
    });
}

else if (img_src == 'http://127.0.0.1:5500/image3.jpg') {
    let click_count = 0;
    const ima = document.getElementById("myPic4");
    ima.addEventListener("click", function () {
        click_count++;
        if (click_count == 3) {
            alert("Image has been clicked 3 times,Move to next");
            m=1;
        }
        if (click_count == 4) {
            alert("Now Page will be reload ** Please try again **");
            location.reload();
        }
    });
}

else if (img_src == 'http://127.0.0.1:5500/image4.jpg') {
    let click_count = 0;
    const ima = document.getElementById("myPic4");
    ima.addEventListener("click", function () {
        click_count++;
        if (click_count == 4) {
            alert("Image has been clicked 4 times,Move to next");
            m=1;
        }
        if (click_count == 5) {
            alert("Now Page will be reload ** Please try again **");
            location.reload();
        }
    });
}

else if (img_src == 'http://127.0.0.1:5500/image5.jpg') {
    let click_count = 0;
    const ima = document.getElementById("myPic4");
    ima.addEventListener("click", function () {
        click_count++;
        if (click_count == 5) {
            alert("Image has been clicked 5 times,Move to next");
            m=1;
        }
        if (click_count == 6) {
            alert("Now Page will be reload ** Please try again **");
            location.reload();
        }
    });
}
// This is the last id **


var img_src = document.getElementById("myPic5").src;

var n=0;


if (img_src == 'http://127.0.0.1:5500/image1.jpg') {
    let click_count = 0;
    const ima = document.getElementById("myPic5");
    ima.addEventListener("click", function () {
        click_count++;
        if (click_count == 1) {
            alert("Image has been clicked 1 times,Move to next");
            n = 1;
        }
        if (click_count == 2) {
            alert("Now Page will be reload ** Please try again **");
            location.reload();
        }
    });
}

else if (img_src == 'http://127.0.0.1:5500/image2.jpg') {
    let click_count = 0;
    const ima = document.getElementById("myPic5");
    ima.addEventListener("click", function () {
        click_count++;
        if (click_count == 2) {
            alert("Image has been clicked 2 times,Move to next");
            n = 1;
        }
        if (click_count == 3) {
            alert("Now Page will be reload ** Please try again **");
            location.reload();
        }
    });
}

else if (img_src == 'http://127.0.0.1:5500/image3.jpg') {
    let click_count = 0;
    const ima = document.getElementById("myPic5");
    ima.addEventListener("click", function () {
        click_count++;
        if (click_count == 3) {
            alert("Image has been clicked 3 times,Move to next");
            n = 1;
        }
        if (click_count == 4) {
            alert("Now Page will be reload ** Please try again **");
            location.reload();
        }
    });
}

else if (img_src == 'http://127.0.0.1:5500/image4.jpg') {
    let click_count = 0;
    const ima = document.getElementById("myPic5");
    ima.addEventListener("click", function () {
        click_count++;
        if (click_count == 4) {
            alert("Image has been clicked 4 times,Move to next");
            n = 1;
        }
        if (click_count == 5) {
            alert("Now Page will be reload ** Please try again **");
            location.reload();
        }
    });
}

else if (img_src == 'http://127.0.0.1:5500/image5.jpg') {
    let click_count = 0;
    const ima = document.getElementById("myPic5");
    ima.addEventListener("click", function () {
        click_count++;
        if (click_count == 5) {
            alert("Image has been clicked 5 times,Move to next");
            n = 1;
        }
        if (click_count == 6) {
            alert("Now Page will be reload ** Please try again **");
            location.reload();
        }
    });
}


function myFunction() {
  if (k==1 && l==1 && m==1 && n==1){
    window.location.href = "https://www.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0";
  }
}
