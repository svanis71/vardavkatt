class Speaker {
    static defaultVoice = 'Swedish Female';
    static enabled = true;
    
    static speak(text, endCallback) {
        if (this.enabled) {
            window.responsiveVoice.speak(text, this.defaultVoice, {onend: endCallback});
        }
        else {
            console.log(text);
            if(endCallback) {
                endCallback();
            }
        }
    }

    static cancel() {
        window.responsiveVoice.cancel();
    }
} 

export default Speaker;