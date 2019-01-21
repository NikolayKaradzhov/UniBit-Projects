 function picture(){ 
    var x = document.getElementById("BMW1");
    if (x.style.display === "none") {
        x.style.display = "table-caption";
    } else {
        x.style.display = "none";
    }
}

function changeButtonGalleryName() {
                var elem = document.getElementById("b3");
                if (elem.innerHTML == "Gallery"){
                    elem.innerHTML = "Close Gallery";
                }
                else {
                    elem.innerHTML = "Gallery";
                }
        }

        function showImage(){
            document.getElementById('bigpic1').style.visibility=document.getElementById('bigpic1').style.visibility == 'visible'? 'hidden' : 'visible';
        }
        function showImage1(){
            document.getElementById('bigpic2').style.visibility=document.getElementById('bigpic2').style.visibility == 'visible'? 'hidden' : 'visible';
        }
        function showImage2(){
            document.getElementById('bigpic3').style.visibility=document.getElementById('bigpic3').style.visibility == 'visible'? 'hidden' : 'visible';
        }