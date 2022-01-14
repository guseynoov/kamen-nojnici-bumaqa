const siyahi = ["bumaqa.jpg", "nojnici.jpg", "kamen.jpg"]

//DOM a muraciyet edirik Document Object Model
const bumaqa = document.getElementById('bumaqa')
const nojnici = document.getElementById('nojnica')
const kamen = document.getElementById('kamen')

const viborKomputera = document.getElementById('vibor-komputera')

const neticeniYaz = document.getElementById('netice')

bumaqa.onclick = seciminiEle
nojnici.onclick = seciminiEle
kamen.onclick = seciminiEle

function seciminiEle() {



}

function randomSecim() {
	const say = Math.round(Math.random() * 2)
}