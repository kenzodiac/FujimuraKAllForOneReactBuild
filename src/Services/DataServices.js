//fetch url function that takes in a url and returns the response from the called API
// async function UrlCall(url) {
//     const response = await fetch(url);
//     const data = await response.text();
//     return data;
// }

//Mini Ch 1: Say Hello
async function HelloApi(nameInput){
    var letters = /^[a-zA-Z\s-]+$/;
    if (nameInput.match(letters)){
        const response = await fetch(`https://kfujimuraallforonesprintapi.azurewebsites.net/MiniCh1/Hello/${nameInput}`);
        const data = await response.text();
        return data;
    } else {
        return "Enter a valid response";
    }
}

//Mini Ch 2: Add Two Numbers
async function AddApi(num1, num2) {
    var letters = /^-?\d+$/;
    if (num1.match(letters) && num2.match(letters)) {
        const response = await fetch(`https://kfujimuraallforonesprintapi.azurewebsites.net/MiniCh2/Add2Numbers/${num1}/${num2}`);
        const data = await response.text();
        return data;
    } else {
        return "Enter a valid response. (Hint: Use only whole numbers.)";
    }
}

//Mini Ch 3: Asking Questions
// async function QuestionsApi(nameInput, timeInput){
//     if (nameInput.value && timeInput.value) {
//         names = nameInput.value;
//         time = timeInput.value;
//         askingQuestionsUrl = `https://kfujimuraallforonesprintapi.azurewebsites.net/MiniCh3/AskingQuestions/${names}/${time}`;
//         await UrlCall(askingQuestionsUrl);
//     } else {
//         questionsReturn.textContent = "Enter a valid response. (Did you fill in both fields?)";
//     }
// }

//Mini Ch 4: Grearer or Less Than
// async function GreaterThanApi(numInput1, numInput2){
//     var letters = /^-?(\.\d+|\d+(\.\d+)?)$/;
//     if (numInput1.value.match(letters) && numInput2.value.match(letters)){
//         num1 = numInput1.value;
//         num2 = numInput2.value;
//         greaterThanUrl = `https://kfujimuraallforonesprintapi.azurewebsites.net/MiniCh4/GreaterThan/${num1}/${num2}`;
//         greaterThanReturn.textContent = UrlCall(greaterThanUrl);
//     } else {
//         greaterThanReturn.textContent = "Enter a valid response. (Hint: remember to fill both fields.)";
//     }
// }

//Mini Ch 5: Mad Lib
// async function MadLibApi(name1Input, verb1Input, sport1Input, musicGenre1Input, pet1Input, petName1Input, name2Input, verb2Input, hobby1Input, musicGenre2Input){
//     if (name1Input.value && verb1Input.value && sport1Input.value && musicGenre1Input.value && pet1Input.value && petName1Input.value && name2Input.value && verb2Input.value && hobby1Input.value && musicGenre1Input.value) {
//         name1 = name1Input.value;
//         verb1 = verb1Input.value;
//         sport1 = sport1Input.value;
//         musicGenre1 = musicGenre1Input.value;
//         pet1 = pet1Input.value;
//         petName1 = petName1Input.value;
//         name2 = name2Input.value;
//         verb2 = verb2Input.value;
//         hobby1 = hobby1Input.value;
//         musicGenre2 = musicGenre2Input.value;
//         madLibUrl = `https://kfujimuraallforonesprintapi.azurewebsites.net/MiniCh5/MadLib/${name1}/${verb1}/${sport1}/${musicGenre1}/${pet1}/${petName1}/${name2}/${verb2}/${hobby1}/${musicGenre2}`;
//         madLibReturn.textContent = await UrlCall(madLibUrl);
//     } else {
//         madLibReturn.textContent = "Enter a valid response. (Hint: remember to fill ALL fields.)";
//     }
// }

//Mini Ch 6: Odd or Even
// async function OddEvenApi(numInput){
//     var letters = /^-?\d+$/;
//     if (numInput.value.match(letters)){
//         savedInput = numInput.value;
//         oddEvenUrl = `https://kfujimuraallforonesprintapi.azurewebsites.net/MiniCh6/oddOrEven/${savedInput}`;
//         oddEvenReturn.textContent = await UrlCall(oddEvenUrl);
//     } else {
//         oddEvenReturn.textContent = "Enter a valid response. (Hint: Only whole numbers can be odd or even.)";
//     }
// }

//Mini Ch 7: Reverse It
// async function ReverseApi(stringInput){
//     if (stringInput.value) {
//         savedInput = stringInput.value;
//         reverseItUrl = `https://kfujimuraallforonesprintapi.azurewebsites.net/MiniCh7/ReverseIt/${savedInput}`;
//         reverseReturn.textContent = await UrlCall(reverseItUrl);
//     } else {
//         reverseReturn.textContent = "Enter a valid response. (Text field can't be empty!)";
//     }
// }

//Mini Ch 8: Student Directory
// async function DirectoryApi(input){
//     if (stringInput.value) {
//         savedInput = stringInput.value;
//         directoryUrl = `https://kfujimuraallforonesprintapi.azurewebsites.net/MiniCh8/GetStudentByAnything/${savedInput}`;
//         let storedData = await UrlCall(directoryUrl);
//         firstNameReturn.textContent = storedData.firstName;
//         lastNameReturn.textContent = storedData.lastName;
//         slackNameReturn.textContent = storedData.slackName;
//         emailReturn.textContent = storedData.email;
//         hobbiesReturn.textContent = storedData.hobbies;
//     } else {
//         firstNameReturn.textContent = "N/A";
//         lastNameReturn.textContent = "N/A";
//         slackNameReturn.textContent = "N/A";
//         emailReturn.textContent = "N/A";
//         hobbiesReturn.textContent = "Make sure to enter a value in the input field!";
//     }
// }

//Mini Ch 9: Restaurant Picker
// async function RestaurantPickerApi(input){
//     savedInput = input;
//     restaurantUrl = `https://kfujimuraallforonesprintapi.azurewebsites.net/MiniCh9/RestaurantPicker/${savedInput}`;
//     restaurantReturn.textContent = await UrlCall(restaurantUrl);
// }

export { HelloApi, AddApi/*, QuestionsApi, GreaterThanApi, MadLibApi, OddEvenApi, ReverseApi, DirectoryApi, RestaurantPickerApi*/ };