const wBtn = document.getElementById("btnContraste")
var wAtivo = false
wBtn.addEventListener('click', function () {
    var wElements = document.querySelectorAll("*");
    if (!wAtivo) {
        wAtivo = true
        wElements.forEach((el) => {
            el.style.backgroundColor = 'black'
            el.style.color = 'white'
        })
    } else {
        wAtivo = false  
        wElements.forEach((el) => {
            el.style.backgroundColor = 'white'
            el.style.color = ''
        })
    }
})