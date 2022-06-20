let big = document.querySelector('.big');
let small = document.querySelector('.small');
let img = document.querySelector('.desc_img');
const audio = new Audio();

big.addEventListener('click', function(e){
    audio.src = 'sounds/big.mp3';
    img.style.backgroundImage = 'url(img/big.png)';
    audio.play();
})

small.addEventListener('click', function(e){
    audio.src = 'sounds/small.mp3';
    img.style.backgroundImage = 'url(img/small.png)';
    audio.play();
})

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var recognition = new SpeechRecognition();
recognition.lang = 'en-US';
recognition.interimResults = false;

var micro = document.querySelector('.micro');
var desc_text = document.querySelector('.desc_text');
recognition.addEventListener('result', function(e){
    const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('')
    console.log(transcript);
    desc_text.textContent = transcript;
    if(transcript.includes('big')){
        big.style.background = 'green';
    }
    if (transcript.includes('small')){
        small.style.background = 'green';
    }
    if (transcript.includes('apple')){
        apple.style.background = 'green';
    }
    if (transcript.includes('tom')){
        tom.style.background = 'green';
    }
    if (transcript.includes('also')){
        also.style.background = 'green';
    }
    if (transcript.includes('gray')){
        gray.style.background = 'green';
    }
    if (transcript.includes('cherry')){
        cherry.style.background = 'green';
    }
    if (transcript.includes('phone')){
        phone.style.background = 'green';
    }
    if (transcript.includes('type')){
        type.style.background = 'green';
    }
    if (transcript.includes('robot')){
        robot.style.background = 'green';
    }
})

micro.addEventListener('click', function(e) {
    recognition.start();
})
