let m2 = 3000
let metragem = 123;
let quartos = 1;

    function calcularImovel (metragem, quartos){
        
        if (quartos == 3) {
            return metragem * (m2 * 1.5) 

        } else if (quartos == 2){
            return metragem * (m2 * 1.2)

        } else{
            return metragem * (m2 * 1)
        }

    }

let preco = calcularImovel(metragem, quartos);
console.log(`A casa custa R$ ${preco}`);
