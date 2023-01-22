try{
    console.log('try');
    console.log(name);
    throw {
        name: 'name is Stephan',
        message: 'wrong name'
    }
}
catch(err){
    console.log(err.name)
}

let submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    // show success message
    let successMessage = document.getElementById("success-message");
    successMessage.style.display = "block";
});
