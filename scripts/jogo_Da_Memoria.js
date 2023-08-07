const wCards = document.querySelectorAll('.memory-card');

let wHasFlippedCard = false;
let wPrimeiraCarta, wSegundaCarta;
let wLock = false
let wVerificaVitoria = 0

function flipCard() {
    if (wLock) return
    if (this === wPrimeiraCarta) return;
    this.classList.add('flip');

    if (!wHasFlippedCard) {
        wHasFlippedCard = true;
        wPrimeiraCarta = this;
        return;
    }

    wSegundaCarta = this;
    fVerificaCartas();
}

function fVerificaCartas() {
    if (wPrimeiraCarta.dataset.framework === wSegundaCarta.dataset.framework) {
        fDesabilitaClick();
        wVerificaVitoria ++
        if(wVerificaVitoria == 6){
            
        }
        return;
    }
    fReviraCarta();
}

function fDesabilitaClick() {
    wPrimeiraCarta.removeEventListener('click', flipCard);
    wSegundaCarta.removeEventListener('click', flipCard);
    fResetaCartas()
}

function fReviraCarta() {
    wLock = true;
    setTimeout(() => {
        wPrimeiraCarta.classList.remove('flip');
        wSegundaCarta.classList.remove('flip');
        fResetaCartas()
    }, 1500);
}

function fResetaCartas() {
    [wHasFlippedCard, wLock] = [false, false];
    [wPrimeiraCarta, wSegundaCarta] = [null, null];
}

(function fEmbaralhador(){
    wCards.forEach(card=>{
        let wRandom = Math.floor(Math.random()*12)
        card.style.order = wRandom
    })
})()

wCards.forEach(card => card.addEventListener('click', flipCard));