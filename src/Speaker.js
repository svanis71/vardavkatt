class Speaker {
    static defaultVoice = 'Swedish Female';
    static enabled = true;
    
    static speak(text) {
        if (this.enabled) {
            window.responsiveVoice.speak(text, this.defaultVoice);
        }
        else {
            console.log(text);
        }
    }

    static cancel() {
        window.responsiveVoice.cancel();
    }
} 

 export default Speaker;