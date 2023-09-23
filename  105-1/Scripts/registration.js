//1) create the constructor
function User(email,password,fname,lname,age,g1,g2,g3){
    this.email = email;
    this.password = password;
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.g1 = g1;
    this.g2 = g2
    this.g3 = g3;


}
//create validation function
function isValid(email, password, fname, lname, age, g1, g2, g3){
    let validation = true;
    inputEmail.classList.remove("alert-error");
    inputPassword.classList.remove("alert-error");
    inputFname.classList.remove("alert-error");
    inputLname.classList.remove("alert-error");
    inputAge.classList.remove("alert-error");
    input101.classList.remove("alert-error");
    input102.classList.remove("alert-error");
    input103.classList.remove("alert-error");
}


function register(){
    //getting the values from the inputs
    let inputEmail=$('#txtEmail').val('');
    let inputPass=$('#txtPassword').val('');
    let inputFname=$('#txtFirstName').val('');
    let inputLname=$('#txtLastName').val('');
    let inputAge=$('#txtAge').val('');
    let input101=$('#txt101').val('');
    let input102=$('#txt102').val('');
    let input103=$('#txt103').val('');

    //3) create a new user
    let user = new User(inputEmail, inputPass, inputFname, inputLname, inputAge, input101, input102, input103);

    
    //4) display it on the console
    saveUser(user);





}

function init(){
    //2) trigger the btnRegister and execute the register function
    $('#btnRegister').on('click',register);    

}
window.onload = init;