//Defining the array and the printing function
let answers=[];
function printItems(arr){
    for(let i=0;i<arr.length;i++){
        console.log(arr[i])
    }
}
//Defining a function to check the empty answers
function checkAnswer(answer){
    if(answer == null || answer == ''){
        return 'invalid'
    }else{
        return answer;
    }
}
// Q1 Ask the user to enter his/her name as input.
let nameInput =prompt('Enter your Name');
answers.push(checkAnswer(nameInput));
// Q2 Ask the user to enter his/her gender as input. The answer should be either (male or female).
let title = '';
let gender = prompt('Please enter the gender');
if(!(gender.toLocaleLowerCase() == 'male' || gender.toLocaleLowerCase() == 'female')){
    alert('gender is not specific');
 }
 if(gender.toLocaleLowerCase() =='male'){
    title = 'Mr'
 } else if (gender.toLocaleLowerCase() == 'female'){
    title = 'Ms'
 }
answers.push(checkAnswer(gender));
// Q3 Ask the user to enter his/her age as input and alert the user if the age is less than or equal to zero.
let age = prompt('Please enter your age')
if(age <= 0){
    alert('The age is not valid if it is zero or less')
}
answers.push(checkAnswer(age));
// Q4 yes/no - The coding hobby
let codingHobby = prompt('Do you find yourself a person who has a passion of coding?')
answers.push(checkAnswer(codingHobby));
// Q5 yes/no - The studying field
let studyField = prompt('Did you study something related to the coding?')
answers.push(checkAnswer(studyField));
// Q6 yes/no - The social media ads
let ads = prompt('Did you hear about us via social media?')
answers.push(checkAnswer(ads))
// Q7 Ask the user to confirm if he wants to skip the welcoming message.
let welcomingMsg = confirm('Do you want the welcoming message?');
if (welcomingMsg == true){
    alert(`Hello ${title} ${nameInput}`)
}
// Alert a welcoming message with the name of the user and the title Mr if the user
// is male and Ms if the user is female, and if the gender input is
// not correct alert the welcoming message without the title, according to the confirmation.

//Printing the array items - the answers
printItems(answers);
