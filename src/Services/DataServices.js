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
async function QuestionsApi(nameInput, timeInput){
    if (nameInput && timeInput) {
        const response = await fetch(`https://kfujimuraallforonesprintapi.azurewebsites.net/MiniCh3/AskingQuestions/${nameInput}/${timeInput}`);
        const data = await response.text();
        return data;
    } else {
        return "Enter a valid response. (Did you fill in both fields?)";
    }
}

//Mini Ch 4: Grearer or Less Than
async function GreaterThanApi(numInput1, numInput2){
    var letters = /^-?(\.\d+|\d+(\.\d+)?)$/;
    if (numInput1.match(letters) && numInput2.match(letters)){
        const response = await fetch(`https://kfujimuraallforonesprintapi.azurewebsites.net/MiniCh4/GreaterThan/${numInput1}/${numInput2}`);
        const data = await response.text();
        return data;
    } else {
        return "Enter a valid response. (Hint: remember to fill both fields.)";
    }
}

//Mini Ch 5: Mad Lib
async function MadLibApi(name1Input, verb1Input, sport1Input, musicGenre1Input, pet1Input, petName1Input, name2Input, verb2Input, hobby1Input, musicGenre2Input){
    if (name1Input && verb1Input && sport1Input && musicGenre1Input && pet1Input && petName1Input && name2Input && verb2Input && hobby1Input && musicGenre1Input) {
        const response = await fetch(`https://kfujimuraallforonesprintapi.azurewebsites.net/MiniCh5/MadLib/${name1Input}/${verb1Input}/${sport1Input}/${musicGenre1Input}/${pet1Input}/${petName1Input}/${name2Input}/${verb2Input}/${hobby1Input}/${musicGenre2Input}`);
        const data = await response.text();
        return data;
    } else {
        return "Enter a valid response. (Hint: remember to fill ALL fields.)";
    }
}

// Mini Ch 6: Odd or Even
async function OddEvenApi(numInput){
    var letters = /^-?\d+$/;
    if (numInput.match(letters)){
        const response = await fetch(`https://kfujimuraallforonesprintapi.azurewebsites.net/MiniCh6/oddOrEven/${numInput}`);
        const data = await response.text();
        return data;
    } else {
        return "Enter a valid response. (Hint: Only whole numbers can be odd or even.)";
    }
}

//Mini Ch 7: Reverse It
async function ReverseApi(stringInput){
    if (stringInput) {
        const response = await fetch(`https://kfujimuraallforonesprintapi.azurewebsites.net/MiniCh7/ReverseIt/${stringInput}`);
        const data = await response.text();
        return data;
    } else {
        return "Enter a valid response. (Text field can't be empty!)";
    }
}

//Mini Ch 8: Student Directory
async function DirectoryApi(input){
    if (input) {
        const response = await fetch(`https://kfujimuraallforonesprintapi.azurewebsites.net/MiniCh8/GetStudentByAnything/${input}`);
        const data = await response.json();
        return data;
    } else {
        return {firstName: "N/A", lastName: "N/A", slackName: "N/A", email: "N/A", hobbies: "Make sure to enter a value in the input field!"};
    }
}

//Mini Ch 9: Restaurant Picker
async function RestaurantPickerApi(input){
        const response = await fetch(`https://kfujimuraallforonesprintapi.azurewebsites.net/MiniCh9/RestaurantPicker/${input}`);
        const data = await response.text();
        return data;
}

export { HelloApi, AddApi, QuestionsApi, GreaterThanApi, MadLibApi, OddEvenApi, ReverseApi, DirectoryApi, RestaurantPickerApi };