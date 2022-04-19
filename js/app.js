// Ask the user to enter his/her name as input.
let nameInput =prompt('Enter your Name');
// Ask the user to enter his/her gender as input. The answer should be either (male or female).
let title = '';
let gender = prompt('Please enter the gender');
if(!(gender.toLocaleLowerCase() == 'male' || gender.toLocaleLowerCase() == 'female')){
    alert('gender is not specific');
 }
 if(gender.toLocaleLowerCase() =='male'){
    title = 'Mr'
    console.log(title)
 } else if (gender.toLocaleLowerCase() == 'female'){
    title = 'Ms'
    console.log(title)
 }

// Ask the user to enter his/her age as input and alert the user if the age is less than or equal to zero.
let age = prompt('Please enter your age')
if(age <= 0){
    alert('The age is not valid if it is zero or less')
}
// Ask the user to confirm if he wants to skip the welcoming message.
let welcomingMsg = confirm('Do you want the welcoming message?');
if (welcomingMsg == true){
    alert(`Hello ${title} ${nameInput}`)
}
// Alert a welcoming message with the name of the user and the title Mr if the user
// is male and Ms if the user is female, and if the gender input is
// not correct alert the welcoming message without the title, according to the confirmation.

