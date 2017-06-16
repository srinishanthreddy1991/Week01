/**
 * Created by srini on 6/14/2017.
 */

//variable declaration
var signUpUser;
var signUpPass;
var signUpRePass;

var signInUser;
var signInPass;

var signUpHashValue;
var signInHashValue;


String.prototype.hashCode = function(){
    var hash = 0;
    if (this.length == 0) return hash;
    for (i = 0; i < this.length; i++) {
        char = this.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}










