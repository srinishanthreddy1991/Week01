/**
 * Created by srini on 6/16/2017.
 */
function signIn() {

    signInUser = document.getElementById(inEmail).value;
    signInPass = document.getElementById(inPass).value;

    if(signInUser === ""){
        window.alert("Enter email id")
        return false;
    }
    if(signInPass === ""){
        window.alert("Enter password")
        return false;
    }
    if(signInUser !== "" && signInPass !== ""){

        signInHashValue = signInUser + signInPass;

        alert(signInHashValue.hashCode());

        if(signUpHashValue === signInHashValue){
            return true;
        }else {
            return false;
        }
    }
}