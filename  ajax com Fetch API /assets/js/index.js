
fetch('ajax_info.html')
    .then(resposta => {
        if(resposta.status !== 200) throw new Error('ERRO 404 nosso')
        return resposta.text()
    })
    .then(html => {
        document.addEventListener('click',function() {
            const form = document.querySelector('form').remove();
            const result = document.querySelector('.resultado');

            result.innerHTML = html
        })
    })
    .catch(e => console.warn(e))