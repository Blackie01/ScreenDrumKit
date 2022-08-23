// This function removes the transition on each button after click event
function removeTransition(e){
    this.classList.remove('playing');
}

document.querySelectorAll('.key').forEach (a =>{
    let audio = a.querySelector('audio');
    const keys = a.querySelector('button');
    a.addEventListener('click', event => {
        audio.play();
        audio.currentTime = 0;
        keys.classList.add('playing')
        keys.addEventListener('transitionend', removeTransition)
    }); 
})



// I found the answer here: https://codereview.stackexchange.com/questions/165300/play-audio-files-when-buttons-are-clicked-in-simon-says
