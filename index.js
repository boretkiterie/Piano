const pianokeys = document.querySelectorAll(.key)
function playSound(){
    new Audio ('24piano-keys\key24.mp3').play()
}
pianokeys.forEach(pianokey => {
    pianokey.addEventListener('click', playSound)
})