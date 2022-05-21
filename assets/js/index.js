const requisição = obj => {
    return new Promise ((resolve,rejeita) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url ,true);
        xhr.send();
        
        xhr.addEventListener('load', () => {
            if(xhr.status >= 200 && xhr.status <= 300 ) {
                resolve(xhr.responseText)
            } else { 
                rejeita(xhr.statusText)
            };
        });
    });
};

document.addEventListener('click', e => {
    const elemento = e.target;
    const tag = elemento.tagName.toLowerCase();

    if(tag === 'button'){
        e.preventDefault
        carregaPagina(elemento)
    }
})

async function carregaPagina(elemento){
    const href = elemento.getAttribute('href');

    const objConfig = {
        method: 'GET',
        url: href
    }
    try {
        const response = await requisição(objConfig);
        resposta(response);
      } catch(e) {
        console.log(e);
      }
}

function resposta(response){
    const conteiner = document.querySelector('.resultado');
    conteiner.innerHTML = response
}
