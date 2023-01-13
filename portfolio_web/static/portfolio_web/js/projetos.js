const ver_mais = () => {
    button_ver_mais = document.querySelector(".button_vermais")
    button_ver_mais.addEventListener('click',()=> {
    body = document.querySelector(".body")
    body.style.animationPlayState = "running"
   
    background = document.createElement('div')
    background.classList.add('modal-background')

    container = document.createElement('div')
    container.classList.add('modal-container')
    
    close_btn = document.createElement('a')
    close_btn.classList.add('close_btn')
    close_btn.innerText = 'X'
    container.appendChild(close_btn)
    background.appendChild(container)
    body.appendChild(background)

    titulo = document.createElement('h3')
    texto = document.createElement('p')
    data = document.createElement('h4')
    img = document.createElement('img')
    repositorio = document.createElement('a')
    projeto_link = document.createElement('a')

    })
}







const loadpage = () => {
    ver_mais()
}


addEventListener('DOMContentLoaded',loadpage)