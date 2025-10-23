const tela = document.querySelector('.tela');
const botões = document.querySelectorAll('.btn');

botões.forEach(boton => {
    boton.addEventListener('click', () => {

        const botonApretado = boton.textContent;

        if(boton.id === 'excluir') {
            tela.textContent = '0';
            return;

            }

            if(boton.id === 'igual') {
                try {
                    tela.textContent = eval(tela.textContent);
                } catch {
                    tela.textContent = 'ERROR';
                }
                return;
            }

            if(tela.textContent === '0' || tela.textContent === 'EROOR') {
                tela.textContent = botonApretado
            } else {
                tela.textContent += botonApretado;
            }

    })
})