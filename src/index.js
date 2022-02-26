import './scss/base.scss';
import Drum from './js/drum';

const drumElement = document.querySelector('.drums');
let drum = new Drum(drumElement);

// Clap
const drumClap = document.querySelector('[data-type="clap"]');
drumClap.addEventListener('click', e => {
    e.preventDefault();
    drum.play('clap');
});

// Crash
const drumCrash = document.querySelector('[data-type="crash"]');
drumCrash.addEventListener('click', e => {
    e.preventDefault();
    drum.play('crash');
});

// Hihat
const drumHihat = document.querySelector('[data-type="hihat"]');
drumHihat.addEventListener('click', e => {
    e.preventDefault();
    drum.play('hihat');
});

// Kick
const drumKick = document.querySelector('[data-type="kick"]');
drumKick.addEventListener('click', e => {
    e.preventDefault();
    drum.play('kick');
});

// OpenHat
const drumOpenHat = document.querySelector('[data-type="openhat"]');
drumOpenHat.addEventListener('click', e => {
    e.preventDefault();
    drum.play('openhat');
});

// Snare
const drumSnare = document.querySelector('[data-type="snare"]');
drumSnare.addEventListener('click', e => {
    e.preventDefault();
    drum.play('snare');
});

// Tom
const drumTom = document.querySelector('[data-type="tom"]');
drumTom.addEventListener('click', e => {
    e.preventDefault();
    drum.play('tom');
});