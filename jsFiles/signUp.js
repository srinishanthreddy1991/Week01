/**
 * Created by srini on 6/12/2017.
 */

function signUp() {

    signUpUser = document.getElementById(email);
    signUpPass = document.getElementById(pass);
    signUpRePass = document.getElementById(repass);

    if(signUpUser === ""){
        window.alert("Enter email id")
        return false;
    }
    if(signUpPass === ""){
        window.alert("Enter password")
        return false;
    }
    if(signUpRePass === ""){
        window.alert("Re-Enter password")
        return false;
    }
    if(signUpPass !== signUpRePass){
        window.alert("Passwords does not match");
        return false;
    }
    if(signUpUser !== "" && signUpPass !== "" && signUpRePass !== ""){

        var hashValue = signUpUser + signUpPass;

        signUpHashValue = hashValue.hashCode()

        alert(signUpHashValue);
        return true;

    }else {
        return false;
    }
}

function reset() {
    document.getElementById(email).value="";
    document.getElementById(pass).value="";
    document.getElementById(repass).value="";
    return false;
}