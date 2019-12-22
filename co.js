function thu() {
    var txt = prompt("Please enter some text: ");
    var newTxt = "";
    var newTxt2 = "";

    for (var i = 0; i < txt.length; i++) {
        if (txt.charAt(i) == " ") { newTxt = newTxt.concat(" ") }
        else if (txt.charAt(i) === "z") {
            newTxt = newTxt.concat("a");//checks for "z" and sets to "a"
        } else {
            newTxt = newTxt.concat(String.fromCharCode(txt.charAt(i).charCodeAt(0) + 1));
        }//converts letter to the next letter in the alphabet
    }

    // checks for vowels and sets to upper case
    for (var i = 0; i < newTxt.length; i++) {
        switch (newTxt.charAt(i)) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                newTxt2 = newTxt2 + (newTxt.charAt(i).toUpperCase()); break;
            default:
                newTxt2 = newTxt2 + newTxt.charAt(i);
                break;
        }
    }
    document.getElementById("thu").innerHTML = newTxt2;
    console.log(newTxt2);
}