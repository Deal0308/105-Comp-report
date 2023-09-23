function login(){

// get the email and password from the index.html
let email = $("#txtEmail").val();
let pass = $("#txtPass").val();
//get the users from LS
let usersArray= readUsers();
let flag;


    for( let i=0; i<usersArray.length; i++){

        let user = usersArray[i];
        if(email===user.email && pass===user.password){
            
            window.location= "users.html";
            flag=true;
            break;
    
        }
        else{
            flag=false;
    }
}
    if(flag==false){
        alert("Invalid credentials");
    }
}

function init(){
    $("#btnLogin").click(login);
}
window.onload=init;