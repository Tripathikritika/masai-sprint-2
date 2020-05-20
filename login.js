var buttons ;


function submitButton(){

    event.preventDefault()

    var name = document.getElementById('nameInput').value

    var password = document.getElementById('pwdInput').value

    if( name === 'admin' && password === 'masaiteam@1234') {

        window.open('index.html');
    }

    else {

        var res = document.getElementById('res')
        res.style.color = "red"
        res.textContent = "TRY AGAIN WITH CORRECT PASSWORD :) " 

    }
}

