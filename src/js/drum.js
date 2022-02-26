import '../scss/drums.scss';
import clap from '../sounds/drum/clap.wav';
import crash from '../sounds/drum/crash.wav';
import hihat from '../sounds/drum/hihat.wav';
import kick from '../sounds/drum/kick.wav';
import openhat from '../sounds/drum/openhat.wav';
import snare from '../sounds/drum/snare.wav';
import tom from '../sounds/drum/tom.wav';

class Drum {
    constructor(element) {
        this.element = element;
        this.sounds = {
            clap: new Audio(clap),
            crash: new Audio(crash),
            hihat: new Audio(hihat),
            kick: new Audio(kick),
            openhat: new Audio(openhat),
            snare: new Audio(snare),
            tom: new Audio(tom)
        };
    }
    play(type) {
        // Get element to display and update class
        let drumElement = this.element.querySelector(`[data-type="${type}"]`);
        drumElement.classList.add('drums__drum--active');
        switch(type){
            case 'clap':
                // Stop sound if current playing and reset class
                stop(this.sounds.clap);
                // Play sound
                this.sounds.clap.play();
                // When sound finished switch back
                this.sounds.clap.addEventListener('ended', () => {
                    drumElement.classList.remove('drums__drum--active');
                });
                break;
            case 'crash':
                stop(this.sounds.crash);
                this.sounds.crash.play();
                this.sounds.crash.addEventListener('ended', () => {
                    drumElement.classList.remove('drums__drum--active');
                });
                break;
            case 'hihat':
                stop(this.sounds.hihat);
                this.sounds.hihat.play();
                this.sounds.hihat.addEventListener('ended', () => {
                    drumElement.classList.remove('drums__drum--active');
                });
                break;
            case 'kick':
                stop(this.sounds.kick);
                this.sounds.kick.play();
                this.sounds.kick.addEventListener('ended', () => {
                    drumElement.classList.remove('drums__drum--active');
                });
                break;
            case 'openhat':
                stop(this.sounds.openhat);
                this.sounds.openhat.play();
                this.sounds.openhat.addEventListener('ended', () => {
                    drumElement.classList.remove('drums__drum--active');
                });
                break;
            case 'snare':
                stop(this.sounds.snare);
                this.sounds.snare.play();
                this.sounds.snare.addEventListener('ended', () => {
                    drumElement.classList.remove('drums__drum--active');
                });
                break;
            case 'tom':
                stop(this.sounds.tom);
                this.sounds.tom.play();
                this.sounds.tom.addEventListener('ended', () => {
                    drumElement.classList.remove('drums__drum--active');
                });
                break;
        }
        function stop(sound) {
            sound.pause();
            sound.currentTime = 0;
        }
    }
}

export { Drum as default }