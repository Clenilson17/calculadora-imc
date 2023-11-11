const button =document.getElementById('button');
const nome = document.getElementById('nome');
const peso =  document.getElementById('peso');
const altura = document.getElementById('altura');
const resultado = document.getElementById('resultado');

const getTex = (imc) => {
     if(imc > 40) return 'obesidade grau III';
     if(imc > 35) return 'obesidade grau II';
     if(imc > 30) return 'obesidade grau I';
     if(imc > 25) return 'levemente acima do peso';
     if(imc > 18.5) return 'peso ideal';
     return 'Abaixo do peso';
    }
    
    const imcCalc = () => {
        if(!peso.value || !altura.value || !nome.value) return resultado.textContent = 'preencha todos os campos';
        const valorImc =(+peso.value /(+ altura.value * +altura.value)).toFixed(1);
        resultado.textContent = `${nome.value} - ${getTex(valorImc)}`;
    }
 
button.addEventListener('click',imcCalc);

    

