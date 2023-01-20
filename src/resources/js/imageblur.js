document.onload = (e) => {
    
}

document.addEventListener('DOMContentLoaded', function() {
    const containers = document.querySelectorAll('.blur-boic')

    containers.forEach(container => {
        var fgimg, bgimg, imgurl;

        container.style.position = 'relative'

        imgurl = container.getAttribute('data-src')

        bgimg = document.createElement('img')
        bgimg.setAttribute('src', imgurl)
        bgimg.style.position = 'absolute'
        bgimg.style.top = '0'
        bgimg.style.left = '0'
        bgimg.style.width = 'inherit'
        bgimg.style.height = 'inherit'
        bgimg.style.transform = 'scale(1.05)'
        bgimg.style.zIndex = '1'
        bgimg.style.filter = 'blur(30px)'

        fgimg = document.createElement('div')
        fgimg.style.zIndex = '2'
        fgimg.style.position = 'relative'
        fgimg.style.backgroundImage = `url(${imgurl})`
        fgimg.style.backgroundSize = 'cover'
        fgimg.style.backgroundPosition = 'center'
        fgimg.style.backgroundRepeat = 'no-repeat'
        fgimg.style.borderRadius = '8px'
        fgimg.style.width = 'inherit'
        fgimg.style.height = 'inherit'
        
        container.appendChild(fgimg)
        container.appendChild(bgimg)
    })
})

function getStyle(oElm, strCssRule){
    var strValue = "";
    if(document.defaultView && document.defaultView.getComputedStyle){
        strValue = document.defaultView.getComputedStyle(oElm, "").getPropertyValue(strCssRule);
    }
    else if(oElm.currentStyle){
        strCssRule = strCssRule.replace(/\-(\w)/g, function (strMatch, p1){
            return p1.toUpperCase();
        });
        strValue = oElm.currentStyle[strCssRule];
    }
    return strValue;
}