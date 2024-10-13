
const preloader = document.getElementById('preloader')
const container = document.getElementById('container')

window.addEventListener('load', function() {
  container.style.display = 'flex'
  preloader.style.display = 'none'
})

const clientWidth = window.innerWidth
const html = document.querySelector('html')
const rootFontSize = Math.floor(clientWidth / 80)
html.style.fontSize = rootFontSize.toString() + 'px'

function getValue(elementID) {
  const value = document.getElementById(elementID).value
  return value
}

const kirim = document.getElementById('kirim')
kirim.addEventListener('click', function() {
  const nama = getValue('nama')
  const email = getValue('email')
  const pesan = getValue('pesan')

  if(!nama) return ''
  if(!email) return ''
  if(!pesan) return ''

  window.location.href = `http://wa.me/6285641025159?text=Nama:%20${nama}%0AEmail:%20${email}%0APesan:%20${pesan}`
})