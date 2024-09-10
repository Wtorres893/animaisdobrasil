function pesquisar() {
    let section = document.getElementById ("resultados-pesquisa")
    
    let campoPesquisa = document.getElementById ("campo-pesquisa").value

    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um animal.</p>"
        return
    }
    
    campoPesquisa = campoPesquisa.toLowerCase() 

    console.log(campoPesquisa)
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    for (dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
                <h2>
                  <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descrição-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
            `;
        }
        
         }
         
         if(!resultados) {
             resultados = "<p>Nada foi encontrado</p>"
         }
    
    section.innerHTML = resultados
}





    
    
      
    