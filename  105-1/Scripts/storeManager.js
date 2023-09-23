const KEY = 'users';

function saveUser(user) {
    let users= readUsers(user);
    users.push(user);//joining the new users with the users list
    let val = JSON.stringify(user);

    localStorage.setItem(KEY, val);

}
function readUsers() {
    let data = localStorage.getItem(KEY);
    console.log(data);
    if (!data) {//not data?
        return [];//creating an array

    } else {
        let usersList = JSON.parse(data);
        
        return usersList;

    }
}