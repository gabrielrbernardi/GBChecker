var x;
function strLenth(){
    x = document.getElementById("textIn").value;
    var tam, tamMax;
    tam = x.length;
    tamMax = document.getElementById("tamMax").value;
    if(tamMax == ""){
        document.getElementById("status").innerHTML = "DENTRO do permitido";
        document.getElementById("status").style.color = "rgb(27, 255, 35)";
    }else{
        if(tam <= tamMax){
            document.getElementById("status").innerHTML = "DENTRO do permitido";
            document.getElementById("status").style.color = "rgb(27, 255, 35)";
        }else{
            document.getElementById("status").innerHTML = "FORA do permitido";
            document.getElementById("status").style.color = "rgb(255, 0, 0)";
        }
    }
    document.getElementById("res").innerHTML = tam;
}

//Autocheck first checkbox
document.getElementById("data-1").checked = true;
document.getElementById("out-1").checked = true;

function checkOut(){
    var radios = document.getElementsByName("out");
    var choose;
    for(var i = 0; i < radios.length; i++){
        if(radios[i].checked){
            choose = radios[i].value;
            break;
        }
    }
    if(choose == "nao"){
        document.getElementById("container").style.display = "none";
        document.getElementById("textOut").value = "";

    }else{
        document.getElementById("container").style.display = "inline";
    }
}

function radioCheck(){
    var radios = document.getElementsByName("type");
    var choose;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            choose = radios[i].value;
            break;
        }
    }
    if(choose == "none"){
        // document.getElementById("textOut").value = "";
        // var tam = x.length;
        // for(var i = 0; i <= tam; i++){
        //     document.getElementById("textOut").value = tam;    
        // }
        document.getElementById("textOut").value = "";
    }else if(choose == "uppercase"){
        var content = x.toUpperCase();
        document.getElementById("textOut").value = content;
    }else if(choose == "lowercase"){
        var content = x.toLowerCase();
        document.getElementById("textOut").value = content;
    }
    
    // document.getElementById("textOut").value = radios[i].value;

}

function clearText(){
    document.getElementById("textIn").value = "";
}

function checkMobile(){
    if (detectmob == true){
        document.getElementById("teste").innerHTML = "IS MOBILE";
    }else{
        document.getElementById("teste").innerHTML = "NOT IS MOBILE";
    }
    var totLargura = window.innerWidth;
    var relLargura = screen.width;
    var totAltura = window.innerHeight;
    var relAltura = screen.height;
    document.getElementById("largura").innerHTML = totLargura + " -=- " + relLargura;
    document.getElementById("altura").innerHTML = totAltura + " -=- " + relAltura;
}

function detectmob() { 
    function detectmob() {
        if(window.innerWidth <= 800 && window.innerHeight <= 600) {
          return true;
        } else {
          return false;
        }
     }
}