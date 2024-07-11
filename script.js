function pesquisar() {
    const nomepersonagem = document.getElementById('nomepersonagem').value //pega o nome e guarda na variavel
    if (nomepersonagem == ''){ // se o usúario não digitar nada... 
        alert(`Pesquise um nome`)  // ...recebe um alerta
}   
    else {   // se o usuário digitar um nome do personagem o codigo entra no else...
    const url = `https://swapi.dev/api/people/?search=${nomepersonagem}` //... e busca o nome do personagem na API

    fetch(url)
        .then(response => response.json()) // Converte a resposta da API para JSON
        .then(data => {   //Executa função com os dados em JSON
            const personagemDataDiv = document.getElementById('personagemData') //Seleciona o elemento HTML e atribui no personagemDataDiv
            personagemDataDiv.innerHTML = '' //remove os dados do elemento HTML que estavam na div

        if (data.results.length > 0) { //verifica se há dados na API
                const personagem = data.results[0] //acessa e armazena os dados da API
                personagemDataDiv.innerHTML = `
                    <h2>${personagem.name}</h2>
                    <p>Altura: ${personagem.height} cm</p>
                    <p>Peso: ${personagem.mass} kg</p>
                    <p>Cor do cabelo: ${personagem.hair_color}</p>
                    <p>Cor do corpo: ${personagem.skin_color}</p>
                    <p>Cor dos olhos: ${personagem.eye_color}</p>
                    <p>Ano de nascimento (ou construção no caso de droids): ${personagem.birth_year}</p>
                `  /*As linhas de cima alteram o elemento html para os dados da API*/
                
            } else { //Caso o usuário digite um nome de um personagem que não exista na API
                personagemDataDiv.innerHTML = '<p>Personagem não encontrado</p>'
            }
        })
        .catch(error => {
            console.error('Error fetching character data:', error)
        });
}}
