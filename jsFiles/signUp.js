/**
 * Created by srini on 6/12/2017.
 */

function reset() {
    document.getElementById(email).value="";
    document.getElementById(pass).value="";
    document.getElementById(repass).value="";
    return false;
}

// var signUpUser;
function signUp() {
    signUpUser = document.getElementById("email").value;
    signUpPass = document.getElementById("pass").value;
    signUpRePass = document.getElementById("repass").value;

    if(signUpPass !== signUpRePass){
        window.alert("Passwords does not match");
        return false;
    }
    else {
        if(signUpUser !== "" && signUpPass !== "" && signUpRePass !== ""){

            var hashValue = signUpUser + signUpPass;

            signUpHashValue = hashValue.hashCode()

            alert(signUpHashValue);

            //return true;
            location.href="../htmlFiles/home.html";
            window.location="../htmlFiles/home.html";
        }
    }

}

