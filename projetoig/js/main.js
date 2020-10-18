var validar = 0;
function validaResp(resp){
    if(resp == "sim"){
        return validar = true;
    }
    else{
        return validar = false;
    }
}


var resp = prompt ("Você está preparado para conhecer meu site IG?");
validaResp(resp);
