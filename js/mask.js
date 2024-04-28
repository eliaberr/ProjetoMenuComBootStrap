$("#telefone").mask("(99) 9999-99999");



function calc(){
    const myModal = document.getElementById('myModal')
    const myInput = new bootstrap.Modal(myModal);
    myInput.show();

    total = 0

    bifeComBatata = document.getElementById("bifeComBatata").value
    coxaDeFrango = document.getElementById("coxaDeFrango").value
    carneDePanela = document.getElementById("carneDePanela").value

    farofa = document.getElementById("farofa").value
    salada = document.getElementById("salada").value
    torresmo = document.getElementById("torresmo").value

    saida = document.getElementById("dadosFinal")

    telefone = document.getElementById("telefone").value
    nome = document.getElementById("nome").value
    email = document.getElementById("email").value

    saida.innerHTML = `<p>Segue os Dados do Seu Pedido.</p>`;

    if (bifeComBatata > 0) {
        saida.innerHTML += `<li>Prato: Bife Com Batata - Preço Unitário: R$ 30,00 - Quantidade: ${bifeComBatata} - Total: R$ ${30 * bifeComBatata},00</li>`;
        total += 30 * bifeComBatata;
    }

    if (coxaDeFrango > 0) {
        saida.innerHTML += `<li>Prato: Coxa De Frango - Preço Unitário: R$ 25,00 - Quantidade: ${coxaDeFrango} - Total: R$ ${25 * coxaDeFrango},00</li>`;
        total += 25 * coxaDeFrango;
    }

    if (carneDePanela > 0) {
        saida.innerHTML += `<li>Prato: Carne de Panela - Preço Unitário: R$ 22,00 - Quantidade: ${carneDePanela} - Total: R$ ${22 * carneDePanela},00</li>`;
        total += 22 * carneDePanela;
    }

    if (farofa > 0) {
        saida.innerHTML += `<li>Prato: Farofa - Preço Unitário: R$ 10,00 - Quantidade: ${farofa} - Total: R$ ${10 * farofa},00</li>`;
        total += 10 * farofa;
    }

    if (salada > 0) {
        saida.innerHTML += `<li>Prato: Salada - Preço Unitário: R$ 8,00 - Quantidade: ${salada} - Total: R$ ${8 * salada},00</li>`;
        total += 8 * salada;
    }

    if (torresmo > 0) {
        saida.innerHTML += `<li>Prato: Torresmo - Preço Unitário: R$ 12,00 - Quantidade: ${torresmo} - Total: R$ ${12 * torresmo},00</li>`;
        total += 12 * torresmo;
    }
    
    if (total == 0) {
        saida.innerHTML += `<h2 class="text-danger">Voçê Não escolheu o seu Pedido</h2></ul>`;
    }else{
        saida.innerHTML += `<p class="mt-5">Caro ${nome}</p>  
        <p>O Seu pedido foi Realizado </p> 
        <ul>`;
        saida.innerHTML += `<h2 class="text-success">Preço Final: R$${total},00</h2></ul>`;
    }

    

    
    
}