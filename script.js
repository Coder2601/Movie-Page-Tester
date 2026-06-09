var name = "";
// Number, String, Boolean(true, false)

const lastName = "";

function switchScreen(){
    document.getElementById("page-1").style.display = "none";
    document.getElementById("page-2").style.display = "block";
}

function showFeedbackForm(){
    document.getElementById("feedbackForm").style.display = "block";
    document.getElementById("fillFdbckBtn").style.display = "none";
}

function closeFeedback(){
    document.getElementById("feedbackForm").style.display = "none";
    document.getElementById("fillFdbckBtn").style.display = "inherit";
}


document.addEventListener("keypress", (e)=>{
    console.log(e.key, e.code); 
    
    if(e.key == "Enter"){
        var response = prompt("How are you feeling today?");
        console.log(response);
    }
    else{
        alert("Press Enter to update your status..");
    }
})


for(var i=1; i <= 5; i++){
    console.log(i);
}