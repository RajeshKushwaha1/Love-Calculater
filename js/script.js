function validate() {
    var name1 = document.getElementById("name1").value;
    var name2 = document.getElementById("name2").value;
    if (name1.trim() == "" && name2.trim() == "") {
        document.getElementById("name1").style.border = "2px solid black";
        document.getElementById("name2").style.border = "2px solid black";
        document.getElementById("lbl1").style.display = "block";
        document.getElementById("lbl2").style.display = "block";
        document.getElementById("lbl1").style.color = "black";
        document.getElementById("lbl2").style.color = "black";
    } else if (name1.trim() == "") {
        document.getElementById("lbl1").style.display = "block";
        document.getElementById("lbl1").style.color = "red";
        document.getElementById("lbl2").style.display = "none";
        document.getElementById("name2").style.border = "2px solid green";
        document.getElementById("name1").style.border = "2px solid red";
    } else if (name2.trim() == "") {
        document.getElementById("lbl2").style.display = "block";
        document.getElementById("lbl2").style.color = "red";
        document.getElementById("lbl1").style.display = "none";
        document.getElementById("name1").style.border = "2px solid green";
        document.getElementById("name2").style.border = "2px solid red";
    } else {
        document.getElementById("name1").style.border = "2px solid green";
        document.getElementById("name2").style.border = "2px solid green";
        document.getElementById("lbl1").style.display = "none";
        document.getElementById("lbl2").style.display = "none";
        document.getElementById("firstName").innerHTML = name1;
        document.getElementById("secondName").innerHTML = name2;
        var percent = LoveCalculator();

        function Output() {
            $(".show_Love_Percentage").css("display", "block");
            $(".img-container").css("display", "block");

            if (percent < 50) {
                document.getElementById("Result-Category").src = "../imgs/Below_50.png";
            } else if (percent >= 50 && percent <= 70) {
                document.getElementById("Result-Category").src = "../imgs/Above_50.png";
            } else if (percent >= 70 && percent < 90) {
                document.getElementById("Result-Category").src = "../imgs/Above_70.png";
            } else {
                document.getElementById("Result-Category").src = "../imgs/Above_90.png";
            }
        }
        Output();
        document.getElementById("result").innerHTML = percent + " %";


    }
}

function LoveCalculator() {
    var number = Math.floor((Math.random() * 10) + 1);
    number = number * 10;
    return number;
}

// $(".check-btn").click(() => {
//     document.getElementsByClassName("show_Love_Percentage").style.display = "block";
//     document.getElementsByClassName("img-container").style.display = "block";
//     // $(".show_Love_Percentage").css("display", "block");
//     // $(".img-container").css("display", "block");
//     if (percent < 50) {
//         document.getElementById("Result-Category").src = "../imgs/Below_50.png";
//     } else if (percent >= 50 && percent <= 70) {
//         document.getElementById("Result-Category").src = "../imgs/Above_50.png";
//     } else if (percent >= 70 && percent < 90) {
//         document.getElementById("Result-Category").src = "../imgs/Above_70.png";
//     } else {
//         document.getElementById("Result-Category").src = "../imgs/Above_70.png";
//     }
// })



function isNumberKey(e) {
    var keyCode = (e.keyCode ? e.keyCode : e.which);
    if (keyCode > 47 && keyCode < 58) {
        e.preventDefault();
    }
}