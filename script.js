let attendence = document.getElementById('Attendence');
let assingments = document.getElementById("Assignments");
let presentation = document.getElementById("Presentation");
let quiz = document.getElementById("Quiz");
let mid = document.getElementById("Midterm");
let calculateButton = document.getElementById("Calculate");

// results
let Aplus = document.getElementById("4.00");
let A = document.getElementById("3.75");
let Aminus = document.getElementById("3.50");
let Bplus = document.getElementById("3.25");
let B = document.getElementById("3.00");
let Bminus = document.getElementById("2.75");
let Cplus = document.getElementById("2.50");
let C = document.getElementById("2.25");
let D = document.getElementById("2.00");



calculateButton.addEventListener('click', function(){

    let attendenceMark = parseFloat(attendence.value);
    attendenceMark = (attendenceMark * 7) / 100;
    console.log(attendenceMark);

    let assingmentMark = parseFloat(assingments.value);
    let presentationMark = parseFloat(presentation.value);
    let quizMark = parseFloat(quiz.value);
    let midMark = parseFloat(mid.value);

    if( attendenceMark > 100 || assingmentMark > 5 || presentationMark > 8 
        || quizMark > 15 || midMark > 25 ){

            alert("Wrong Input , check your marks");
        }

    let totalMarks = attendenceMark + assingmentMark + presentationMark + quizMark + midMark;
    console.log(totalMarks);


    let ap = 80 - totalMarks;
    if( ap <= 0) Aplus.textContent = "0";
    else Aplus.textContent = ap.toFixed(2);

    let a = 75 - totalMarks;
    if( a <= 0) A.textContent = "0";
    else A.textContent = a.toFixed(2);

    let am = 70 - totalMarks;
    if( am <= 0) Aminus.textContent = "0";
    else Aminus.textContent = am.toFixed(2);

    let bp = 65 - totalMarks;
    if( bp <= 0) BplustextContent = "0";
    else Bplus.textContent = bp.toFixed(2);

    let b = 60 - totalMarks;
    if( b <= 0) B.textContent = "0";
    else B.textContent = b.toFixed(2);

    let bm = 55 - totalMarks;
    if( bm <= 0) Bminus.textContent = "0";
    else Bminus.textContent = bm.toFixed(2);

    let cp = 50 - totalMarks;
    if( cp <= 0) Cplus.textContent = "0";
    else Cplus.textContent = cp.toFixed(2);

    let c = 45 - totalMarks;
    if( c <= 0) C.textContent = "0";
    else C.textContent = c.toFixed(2);

    let d = 40 - totalMarks;
    if( d <= 0) D.textContent = "0";
    else D.textContent = d.toFixed(2);





    





})

let form = document.getElementById("inputform");
form.addEventListener('submit', function(e){
    e.preventDefault();

})
