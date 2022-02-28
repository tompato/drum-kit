import './scss/base.scss';
import Drum from './js/drum';

const drumElement = document.querySelector('.drums');
let drum = new Drum(drumElement);

// Bass
const drumBass = document.querySelector('[data-type="bass"]');
drumBass.addEventListener('click', e => {
    e.preventDefault();
    drum.play('bass');
});

// Tom
const drumTom = document.querySelector('[data-type="tom"]');
drumTom.addEventListener('click', e => {
    e.preventDefault();
    drum.play('tom');
});

// Snare
const drumSnare = document.querySelector('[data-type="snare"]');
drumSnare.addEventListener('click', e => {
    e.preventDefault();
    drum.play('snare');
});

// Hihat
const drumHihat = document.querySelector('[data-type="hihat"]');
drumHihat.addEventListener('click', e => {
    e.preventDefault();
    drum.play('hihat');
});

// OpenHat
const drumOpenHat = document.querySelector('[data-type="openhat"]');
drumOpenHat.addEventListener('click', e => {
    e.preventDefault();
    drum.play('openhat');
});

// Crash
const drumCrash = document.querySelector('[data-type="crash"]');
drumCrash.addEventListener('click', e => {
    e.preventDefault();
    drum.play('crash');
});

// Play drums with keyboard
document.addEventListener('keyup', e => {
    if(e.key === "1") {
        drum.play('bass');
    }
    if(e.key === "2") {
        drum.play('tom');
    }
    if(e.key === "3") {
        drum.play('snare');
    }
    if(e.key === "4") {
        drum.play('hihat');
    }
    if(e.key === "5") {
        drum.play('openhat');
    }
    if(e.key === "6") {
        drum.play('crash');
    }
});