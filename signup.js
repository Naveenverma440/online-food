function login() {
    window.location.href=("login.html");
}

function signup() {
    
    var database = document.getElementById("form1");
    var name = database.name.value;
    var username = database.username.value;
    var password = database.password.value;

    let data = {
        name:name,
        username: username,
        password: password
        
 }
console.log(username)
    if (username.length == 0 || name.length == 0 || password.length == 0) {
        alert("put all credential");
    } else {
        let arr;
        arr = localStorage.getItem("mainData");

        if (arr == null) {
            arr ={}
        } else {
            arr = JSON.parse(localStorage.getItem("mainData"))
        }
        arr.push(data);
        localStorage.setItem("mainData", JSON.stringify(arr));

        alert("signup sucessfully");
        window.location.href=("login.html");

    }

} 