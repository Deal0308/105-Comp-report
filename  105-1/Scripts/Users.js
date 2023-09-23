function displayUsers(userArray){
    let tr="";
    let colorCode = "green";
    for(var i=0;i<userArray.length;i++){
        let gpa=0;
        let user = userArray[i];
        gpa=Number(user.g1)+Number(user.g2)+Number(user.g3)/3;
        tr=`
        <tr>
            <td>${user.email}</td>
            <td>${user.fname}</td>
            <td>${user.lname}</td>
            <td>${user.g1}</td>
            <td>${user.g2}</td>
            <td>${user.g3}</td>
            <td style="color:${SAP(gpa)};">${gpa.toFixed(2)}</td>

        </tr>
        `
        
        ; $("#usersTable").append(tr);
    }

}

function SAP(gpa){
    let colorCode="";
    if(gpa>95){
        colorCode="green"
    }
    if(gpa<80){
        colorCode="red";
    }
    return colorCode;
}
function init(){
    console.log("Listing)");
    let users = readUsers();//getting from ls
    displayUsers(users);//call back to display
}

window.onload = init;