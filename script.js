"use strict"

function decToBase(valor){
    let base = document.querySelector('.escolha select#box2').value
    let num = valor;
    let rest = [];
    let divisor;
    let unir = ''
    let expl = '\n\n'
    if(base == 'binario'){
        divisor = 2;
        convert();
    }else if(base == 'octal'){
        divisor = 8;
        convert();
    }else if(base == 'hexadecimal'){
        return decToHexa(num);
    }else{
        return num;
    }
    function convert(){   
        do{
            num = parseInt(num);
            if(num != 0){
                let div = num/divisor
                let resto = num%divisor
                rest.push(resto);
                expl = expl + `\n${parseInt(num)} ÷ ${divisor} = ${parseInt(div)} | resto = ${resto}\n`
                num = div;
            }
        }while(num != 0);
        
        for(let i = rest.length; i > 0; i--){
            unir = unir.toString() + rest[i-1].toString();
        }
    }   return unir + expl;
}

function decToHexa(valor){
    let divisor = 16;
    let num = valor;
    let rest = [];
    let unir = ''
    let expl = '\n\n'
    
    do{
        num = parseInt(num);
        if(num != 0){
            let div = num/divisor
            let resto = num%divisor
            let save_resto = resto
            switch(resto){
                case 10:
                    resto = 'A';
                    break;
                case 11:
                    resto = 'B';
                    break;
                case 12:
                    resto = 'C';
                    break;
                case 13:
                    resto = 'D';
                    break;
                case 14:
                    resto = 'E';
                    break;
                case 15:
                    resto = 'F';
                    break;
                default:
                    resto = resto;
            }
            rest.push(resto);
            if(resto != save_resto){expl = expl + `\n${parseInt(num)} ÷ ${divisor} = ${parseInt(div)} | resto = ${save_resto} (${resto})\n`}
            else{expl = expl + `\n${parseInt(num)} ÷ ${divisor} = ${parseInt(div)} | resto = ${resto}\n`}
            num = div;
        }
    }while(num != 0);
    for(let i = rest.length; i > 0; i--){
        unir = unir.toString() + rest[i-1].toString();
    }
    return unir + expl;
}

function click_button(){
    let response = document.querySelector('.result p');
    let submiter = document.querySelector('.conversion button');
    submiter.addEventListener('click', () => {
        let valor = document.querySelector('.entrada input').value;
        if(/^\d+$/.test(valor) == true){
        response.textContent = 'RESULTADO: ' + decToBase(valor);
        }else{
            response.textContent = 'INSIRA UM VALOR VÁLIDO'
        }
    })
}

click_button();

