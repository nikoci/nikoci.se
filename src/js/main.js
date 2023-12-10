document.addEventListener('DOMContentLoaded', (e) => {
    const wButtons = document.querySelectorAll('.w-button')
    wButtons.forEach(wbtn => {
        checkTSHeight(wbtn)
        wbtn.addEventListener('click', (e) => wButtonClick(wbtn, e))
    })
})

const checkTSHeight = (wbtn) =>  {
    const href = wbtn.getAttribute('data-href')
    if (href.startsWith('textselector')) {
        const textSelector = wbtn.parentElement.parentElement.querySelector('.textselector')
        const itemShowing = textSelector.querySelector('.show')

        if (itemShowing != null) {
            const height = getStyle(itemShowing, 'height')

            textSelector.style.height = height
        }
    }
}

const wButtonClick = (wbtn, e) => {
    const wButtons = document.querySelectorAll('.w-button')
    const href = wbtn.getAttribute('data-href')
    wButtons.forEach(wb => {
        wb.classList.remove('active-skill-button')
    })
    wbtn.classList.add('active-skill-button')
    

    if (href.startsWith('textselector')) {
        const textSelector = wbtn.parentElement.parentElement.querySelector('.textselector')
        const itemShowing = textSelector.querySelector('.show')

        itemShowing.classList.remove('show')

        const itemToShow = textSelector.querySelector(href.replace(/textselector/i, ''))
        itemToShow.classList.add('show')
    }
    checkTSHeight(wbtn)
}

const getStyle = (element, cssRule) => {
    var strValue = ""
    if(document.defaultView && document.defaultView.getComputedStyle){
        strValue = document.defaultView.getComputedStyle(element, "").getPropertyValue(cssRule)
    }
    else if(element.currentStyle){
        cssRule = cssRule.replace(/\-(\w)/g, function (strMatch, p1){
            return p1.toUpperCase()
        });
        strValue = element.currentStyle[cssRule]
    }
    return strValue;
}