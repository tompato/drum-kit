import '../scss/drums.scss';
import crash from '../sounds/crash.wav';
import hihat from '../sounds/hihat.wav';
import bass from '../sounds/bass.wav';
import openhat from '../sounds/openhat.wav';
import snare from '../sounds/snare.wav';
import tom from '../sounds/tom.wav';

class Drum {
    constructor(element) {
        this.element = element;
        this.sounds = {
            crash: new Audio(crash),
            hihat: new Audio(hihat),
            bass: new Audio(bass),
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
            case 'bass':
                // Stop sound if current playing and reset class
                stop(this.sounds.bass);
                // Play sound
                this.sounds.bass.play();
                // When sound finished switch back
                this.sounds.bass.addEventListener('ended', () => {
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
            case 'snare':
                stop(this.sounds.snare);
                this.sounds.snare.play();
                this.sounds.snare.addEventListener('ended', () => {
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
            case 'openhat':
                stop(this.sounds.openhat);
                this.sounds.openhat.play();
                this.sounds.openhat.addEventListener('ended', () => {
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
        }
        function stop(sound) {
            sound.pause();
            sound.currentTime = 0;
        }
    }
}

export { Drum as default }