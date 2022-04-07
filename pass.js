hash = "U2FsdGVkX1/J8Qdjm7E/wzKqwHKCZQqTUdAsMGqNDYo=";

function encrypt(message = '', key = ''){
    var message = CryptoJS.AES.encrypt(message, key);
    return message.toString();
}

function decrypt(message = '', key = ''){
    var code = CryptoJS.AES.decrypt(message, key);
    var decryptedMessage = code.toString(CryptoJS.enc.Utf8);
    return decryptedMessage;
}

document.getElementById("passButton").addEventListener("click", 
    function() {
        if(document.getElementById("passText").value ===decrypt(hash)){
            window.location.replace("calendario.html");
        }
        else{
            console.log("Error");
        }
    }, false);

