document.onload = (e) => {
    
}

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img.blur-boic')

    images.forEach(img => {
        img.style.position = 'relative'
        img.style.zIndex = '2'

        var boic = document.createElement('img')

        boic.setAttribute('src', img.getAttribute('src'))
        boic.style.position = 'absolute'
        boic.style.top = '0'
        boic.style.left = '0'
        boic.style.transform = 'scale(1.05)'
        boic.style.zIndex = '1'
        boic.style.filter = 'blur(30px)'

        img.parentElement.appendChild(boic)
    })
})