var data = [
    {   
        name: "naveen",
        username: "naveenverma440@gmail.com",
        password: "123"
    },

      {
        name: "rahul",
        username: "rahul440@gmail.com",
        password: "1237"
    },
        {
        name: "ankit",
        username: "ankit440@gmail.com",
        password: "1234"
    }
]

// if (localStorage.getItem("form") == null) {
//     localStorage.setItem("mainData", JSON.stringify(data));
// }

function login(e) {
    
    e.preventDefault();
    let flag = document.getElementById("form");
    let name = flag.username.value;
    let passkey = flag.password.value;


    let collect = JSON.parse(localStorage.getItem("mainData"));
    
    
    for (let i = 0; i < collect.length; i++) {
        console.log(collect[i].username)
        if ((collect[i].username == name) && (collect[i].password == passkey)) {
            window.location.href = "menu.html";
            break;
        }
        else if(i == collect.length -1 && ((collect[i]).username !=name) && (collect[i].password != passkey)) {
            let warning = document.createElement("p");
            warning.innerHTML = "incorrect credential";
            

            warning.style.color = "red";
            let warn = document.getElementById("pass");

            alert("incorrect credential")
        }

    }
}


function signup() {
    window.location.href ="signup.html"
}