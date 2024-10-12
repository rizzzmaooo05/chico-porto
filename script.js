// const clientWidth = window.innerWidth
// const html = document.querySelector('html')
// const rootFontSize = Math.floor(clientWidth / 80)
// html.style.fontSize = rootFontSize.toString() + 'px'

// const navigasi = document.getElementById('navigasi')
// navigasi.style.width = (0.2 * clientWidth).toString() + 'px'

// const container = document.getElementById('container')
// container.style.width = (0.8 * clientWidth).toString() + 'px'
// container.style.marginLeft = navigasi.style.width

const preloader = document.getElementById('preloader')
const container = document.getElementById('container')

window.addEventListener('load', function() {
  container.style.display = 'flex'
  preloader.style.display = 'none'
})