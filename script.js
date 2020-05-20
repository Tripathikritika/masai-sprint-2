 var buttons ; 
 var slNum = 0 ;
 var count = 0;

 
function functionShow() {

   count ++ ;
   event.preventDefault()

   var name = document.getElementById('nameInput').value

   var gender = document.getElementById('genderInput').value
   
   var sectionName = document.getElementById('section').value

   var description = document.getElementById('descInput').value

  // var subj = document.getElementById('subject').value

   var typeOfExam = document.getElementById('exam').value

   var marksOne =  document.getElementById('commandMarks').value

   var marksTwo =  document.getElementById('cssMarks').value
   
   var marksThree =  document.getElementById('algoMarks').value

   var marksFour =  document.getElementById('gitmarks').value

   var marksFive =  document.getElementById('htmlMarks').value

   var marksSix =  document.getElementById('jsMarks').value

   var marksSeven =  document.getElementById('mathsMarks').value

   var marksEight =  document.getElementById('skillathonMarks').value

   

   var table = document.createElement("table");

   for(var i = 0 ; i < count ; i ++){
      slNum += 1;

      break

   } 

         /* This part is for Slnum */
   var headOne = document.getElementById('colOne') 
   
   var rowOne = document.createElement('tr')

   rowOne.style.color = "antiquewhite"
   rowOne.style.fontSize = "12px"
   rowOne.textContent = slNum
   headOne.append(rowOne)
  

      /* This part is for Name */
   var headtwo = document.getElementById('coltwo')

   var rowTwo = document.createElement('tr')

   rowTwo.style.color = "antiquewhite"
   rowTwo.style.fontSize = "12px"

   rowTwo.textContent = name
   headtwo.append(rowTwo)
    

      /* This part is for Gender */
   var headthree = document.getElementById('colThree')
   
   var rowThree = document.createElement('tr')

   rowThree.style.color = "antiquewhite"
   rowThree.style.fontSize = "12px"

   rowThree.textContent = gender
   headthree.append(rowThree)
  

   /* This part is for Section */
   var headFour = document.getElementById('colFour')

   

   var rowFour = document.createElement('tr')

   rowFour.style.color = "antiquewhite"
   rowFour.style.fontSize = "12px"

   rowFour.textContent = sectionName
   headFour.append(rowFour)

  /* This part is for Type of exam */
   var headFifteen = document.getElementById('colFifteen')

   var rowFifteen = document.createElement('tr')

   rowFifteen.style.color = "antiquewhite"
   rowFifteen.style.fontSize = "12px"

   rowFifteen.textContent = typeOfExam
   headFifteen.append(rowFifteen)
      

   /* This part is for firstMarks */
   var headSix = document.getElementById('colSix')

   var rowSix = document.createElement('tr')

   rowSix.style.color = "antiquewhite"
   rowSix.style.fontSize = "12px"

   rowSix.textContent = marksOne
   headSix.append(rowSix)

   /* This part is for SeondMarks */
   var headSeventh = document.getElementById('colSeven')

   var rowSeventh = document.createElement('tr')

   rowSeventh.style.color = "antiquewhite"
   rowSeventh.style.fontSize = "12px"

   rowSeventh.textContent = marksTwo
   headSeventh.append(rowSeventh)

   /* This part is for thirdMarks */
   var headEight = document.getElementById('colEight')

   var rowEigth = document.createElement('tr')

   rowEigth.style.color = "antiquewhite"
   rowEigth.style.fontSize = "12px"

   rowEigth.textContent = marksThree
   headEight.append(rowEigth)
   console.log(rowEigth)

   /* This part is forFourth Marks */
   var headNinth = document.getElementById('colNine')

   var rowNinth = document.createElement('tr')

   rowNinth.style.color = "antiquewhite"
   rowNinth.style.fontSize = "12px"

   rowNinth.textContent = marksFour
   headNinth.append(rowNinth)

   /* This part is for FifthMarks */
   var headtenth = document.getElementById('colTen')

   var rowtenth = document.createElement('tr')

   rowtenth.style.color = "antiquewhite"
   rowtenth.style.fontSize = "12px"
   
   rowtenth.textContent = marksFive
   headtenth.append(rowtenth)

   /* This part is for SixthMarks */
   var headEleventh= document.getElementById('colEleven')

   var rowEleventh = document.createElement('tr')

   rowEleventh.style.color = "antiquewhite"
   rowEleventh.style.fontSize = "12px"

   rowEleventh.textContent = marksSix
   headEleventh.append(rowEleventh)

   /* This part is for Seventh marks */
   var headTwelth = document.getElementById('colTwelve')

  

   var rowTwelth = document.createElement('tr')

   rowTwelth.style.color = "antiquewhite"
   rowTwelth.style.fontSize = "12px"

   rowTwelth.textContent = marksSeven
   headTwelth.append(rowTwelth)

   /* This part is for EigthMarjst */
   var headThirtheen = document.getElementById('colThirteen')

   var rowthirtheen = document.createElement('tr')

   rowthirtheen.style.color = "antiquewhite"
   rowthirtheen.style.fontSize = "12px"

   rowthirtheen.textContent = marksEight
   headThirtheen.append(rowthirtheen)

   /* This part is for Description */
   var headFourteen = document.getElementById('colFourteen')

   
   var rowFourteen = document.createElement('tr')

   rowFourteen.style.color = "antiquewhite"
   rowFourteen.style.fontSize = "12px"


   rowFourteen.textContent = description
   headFourteen.append(rowFourteen)
   
   render(table)
}
 
function render (element){

   var target = document.getElementById('table')
   target.append(element)

}

function renderDOM (element){

   var target = document.getElementById('average')
   target.appendChild(element)

}

function functionAverage() {

   event.preventDefault()

   var marksOne =  document.getElementById('commandMarks').value

   var marksTwo =  document.getElementById('cssMarks').value
   
   var marksThree =  document.getElementById('algoMarks').value

   var marksFour =  document.getElementById('gitmarks').value

   var marksFive =  document.getElementById('htmlMarks').value

   var marksSix =  document.getElementById('jsMarks').value

   var marksSeven =  document.getElementById('mathsMarks').value

   var marksEight =  document.getElementById('skillathonMarks').value

   var avg = document.getElementById('average')

   var totalMarks = (Number(marksOne) + Number(marksTwo) + Number(marksThree) + Number(marksFour) + Number(marksFive) + Number(marksSix) +Number(marksSeven) + Number(marksEight)  )
  
   avg.textContent = "Average:" + parseInt(totalMarks / 8 )
   avg.style.border = '1px solid black'


   renderDOM(avg)
}

function functionMinumum() {

   event.preventDefault()

   var marksOne =  document.getElementById('commandMarks').value

   var marksTwo =  document.getElementById('cssMarks').value
   
   var marksThree =  document.getElementById('algoMarks').value

   var marksFour =  document.getElementById('gitmarks').value

   var marksFive =  document.getElementById('htmlMarks').value

   var marksSix =  document.getElementById('jsMarks').value

   var marksSeven =  document.getElementById('mathsMarks').value

   var marksEight =  document.getElementById('skillathonMarks').value

   var minimum = Math.min(Number(marksOne), Number(marksTwo), Number(marksThree) , Number(marksFour) , Number(marksFive) , Number(marksSix) , Number(marksSeven) , Number(marksEight));

   var mini = document.getElementById('average')
   mini.style.border = '1px solid black'

   mini.textContent = "Minimum:" + parseInt(minimum)

   renderDOM(mini)


}

function functionMaximum() {

   event.preventDefault()

   var marksOne =  document.getElementById('commandMarks').value

   var marksTwo =  document.getElementById('cssMarks').value
   
   var marksThree =  document.getElementById('algoMarks').value

   var marksFour =  document.getElementById('gitmarks').value

   var marksFive =  document.getElementById('htmlMarks').value

   var marksSix =  document.getElementById('jsMarks').value

   var marksSeven =  document.getElementById('mathsMarks').value

   var marksEight =  document.getElementById('skillathonMarks').value

   var maximum = Math.max(Number(marksOne), Number(marksTwo), Number(marksThree) , Number(marksFour) , Number(marksFive) , Number(marksSix) , Number(marksSeven) , Number(marksEight));

   var maxi = document.getElementById('average')
   maxi.style.border = '1px solid black'

   maxi.textContent = "Maximum:" + parseInt(maximum)

   renderDOM(maxi)



}

function functionGrade () {

   
   event.preventDefault()

   var marksOne =  document.getElementById('commandMarks').value

   var marksTwo =  document.getElementById('cssMarks').value
   
   var marksThree =  document.getElementById('algoMarks').value

   var marksFour =  document.getElementById('gitmarks').value

   var marksFive =  document.getElementById('htmlMarks').value

   var marksSix =  document.getElementById('jsMarks').value

   var marksSeven =  document.getElementById('mathsMarks').value

   var marksEight =  document.getElementById('skillathonMarks').value

   var grades = document.getElementById('average')

   var totalMarks = (Number(marksOne) + Number(marksTwo) + Number(marksThree) + Number(marksFour) + Number(marksFive) + Number(marksSix) +Number(marksSeven) + Number(marksEight)  )
  
   var marks = parseInt(totalMarks / 8 )
   console.log(marks)
   grades.style.border = '1px solid black'
  

   if ( marks >= 90 && marks <= 100 ) {

      grades.textContent = "Grade Obtained is A " 
     
     
   }

   else if (marks >= 80 && marks < 90) {

      grades.textContent = "Grade Obtained is B " 
    
   }

   else if (marks >= 70 && marks < 80) {

      grades.textContent = "Grade Obtained is C " 
     
   }

   else if (marks >= 60 && marks < 70) {

      grades.textContent = "Grade Obtained is D " 
     
   }

   else if (marks >= 50 && marks < 60 ) {
      
      grades.textContent = "Grade Obtained is E "
  
   }

   else if (marks <= 40 ) {

      grades.textContent = "Grade Obtained is F "
    
   }
   renderDOM(grades)
   // var division = document.createElement('div')
   // division.innerHTML = " Disclaimer : * A: Excellent, 91-100%  " + "\n" +
   //                                  "  * B: Very Good, 81-90% " +"\n" +
   //                                  "  * C: Good , 70-80%" +"\n" +
   //                                  "  * D : Fair " + "\n" +
   //                                  "  * E: barely passed " + "\n" +
   //                                  "  * F : failed"
   
   // renderDOM(division)
 
}

window.addEventListener ( 'load' , function (){

   buttons = document.getElementById('showButton')
   buttons.addEventListener('click', functionShow)

   var averageBtn = document.getElementById('averageButton')
   averageBtn.addEventListener('click', functionAverage)

   var minimumBtn = document.getElementById('minButton')
   minimumBtn.addEventListener('click', functionMinumum)
   
   var maximumBtn = document.getElementById('maxButton')
   maximumBtn.addEventListener('click', functionMaximum)

   var gradeBtn = document.getElementById('gradeButton')
   gradeBtn.addEventListener('click', functionGrade)


 })