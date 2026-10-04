const eras = [
  {
    year: 2002,
    title: 'I Brought You My Bullets, You Brought Me Your Love',
    titleFont: '"Special Elite", monospace',
    description: 'Raw, gritty, basement-show energy.',
    cover: 'bullety_cover.jpg',
    alt: 'I Brought You My Bullets, You Brought Me Your Love album cover',
    songName: 'Vampires Will Never Hurt You',
    songFile: 'vampires.mp3' ,
    backgroundColor: '#0d0d0d',
    titleColor: '#e8e0d5',
    accentColor: '#9a948c'

  },
  {
    year: 2004,
    title: 'Three Cheers for Sweet Revenge',
    titleFont: '"Pirata One", serif',
    description: 'Vampire romance. Red, black, dramatic.',
    cover: 'three_cheers.jpg',
    alt: 'Three Cheers for Sweet Revenge album cover',
    songName: 'Helena',
    songFile: 'helena.mp3' ,
    backgroundColor: '#6b0f1a',
    titleColor: '#e8e0d5',
    accentColor: '#8a4a52'
  },
  {
    year: 2006,
    title: 'The Black Parade',
    titleFont: '"Cinzel", serif',
    description: 'Grand, theatrical, a funeral march.',
    cover: 'black_parade.webp',
    alt: 'The Black Parade album cover',
    songName: 'Welcome to the Black Parade',
    songFile: 'blackparade.mp3' , 
    backgroundColor: '#000000',
    titleColor: '#f2f2f2',
    accentColor: '#9a9a9a'
  },
  {
    year: 2010,
    title: 'Danger Days: The True Lives of the Fabulous Killjoys',
    titleFont: '"Bangers", sans-serif',
    description: 'Loud desert neon. Rebellion in full color.',
    cover: 'danger_days.jpg',
    alt: 'Danger Days: The True Lives of the Fabulous Killjoys album cover',
    songName: 'Na Na Na',
    songFile: 'nanana.mp3' ,
    backgroundColor: '#f0d98a',
    titleColor: '#111111',
    accentColor: '#ff2e63'
  }
]

let currentAlbum = 0;



//set all variables for function//
const albumName = document.querySelector('#albumname')

const albumDesc = document.querySelector('#description')

const albumArt = document.querySelector('#albumart')

const albumYear = document.querySelector('#album-year')

const headerCount = document.querySelector('#numbers')

const albumSong = document.querySelector('#playfavsong') 

const rightArrow = document.querySelector('#arrowgofwd')

const backArrow = document.querySelector('#arrowgoback')

const dots = document.querySelectorAll('.dot')

const player = new Audio()


albumSong.addEventListener('click', function nextSong() { 
if (player.paused) {
player.play()
albumSong.textContent = `Pause ${eras[currentAlbum].songName}`
}
else { 
player.pause()
albumSong.textContent = `Play ${eras[currentAlbum].songName}`
}
})



function updateEra() {
  albumName.textContent = eras[currentAlbum].title
  albumDesc.textContent = eras[currentAlbum].description
  albumArt.src = eras[currentAlbum].cover
  albumArt.alt = eras[currentAlbum].alt
  albumYear.textContent = `ERA 0${currentAlbum + 1} - ${eras[currentAlbum].year}`
  headerCount.textContent = `0${currentAlbum + 1}/0${eras.length}`
  albumSong.textContent = `Play ${eras[currentAlbum].songName}`
  albumName.style.fontFamily = eras[currentAlbum].titleFont
  player.pause()
  player.src = eras[currentAlbum].songFile
  document.documentElement.style.setProperty('--bg', eras[currentAlbum].backgroundColor)
  document.documentElement.style.setProperty('--title', eras[currentAlbum].titleColor)
  document.documentElement.style.setProperty('--accent' , eras[currentAlbum].accentColor)
  

  dots.forEach(function(dot) {
    dot.classList.remove('active')
    
  })
  dots[currentAlbum].classList.add('active')
}

rightArrow.addEventListener('click', function goNext() {
  currentAlbum++
  if (currentAlbum === eras.length) {
    currentAlbum = 0
  }
  updateEra()
})

backArrow.addEventListener('click', function goBack() {
  currentAlbum--
  if (currentAlbum < 0) {
    currentAlbum = eras.length - 1
  }
  updateEra()
})

dots.forEach(function(dot, index) {
  dot.addEventListener('click', function goToDot() {
    currentAlbum = index
     updateEra ()
  })
})

updateEra()



