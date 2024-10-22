// Function for calculating grades
const calculate = () => {
    // Input from User
    let chemistry =document.querySelector("#chemistry").value; 
    let physics=document.querySelector("#physics").value;
    let maths=document.querySelector("#maths").value;
    let english=document.querySelector("#english").value;
    let comp_sci=document.querySelector("#computer_science").value;
    
    // calculating Grades

    let grades="";

    let totalgrades = parseFloat(chemistry)+ parseFloat(physics) + parseFloat(maths) + parseFloat(english)+ parseFloat(comp_sci);

    let percentage=(totalgrades/500)*100;

    if (percentage <=100 && percentage >=80 ){
        grades="A";
    } else if (percentage <=79 && percentage >=60){
        grades="B";
    } else if (percentage <=59 && percentage >=40){
        grades="C";
    }else {
        grades="F";
    }

    // Checking if the values are empty, if yes
    // show please fill them

    if ( chemistry=="" || physics=="" || maths=="" || english=="" || comp_sci=="" ){
        document.querySelector("#showdata").innerHTML = "Please enter all marks";
    } else{
        // Checking the condition for the fail and pass
        if (percentage >= 39.5){
            document.querySelector("#showdata").innerHTML= `Out of 500 your total is ${totalgrades} and percentage is ${percentage}%. Your grade is ${grades}. You Passed.`;
        } else{
            document.querySelector("#showdata").innerHTML=`Out of 500 your total is ${totalgrades} and percentage is ${percentage}%. Your grade is ${grades}. You Failed.`;
        }
    }
};