class Speaker {
    static speak(text, endCallback) {
        const storedSettings = sessionStorage.getItem("settings");
        const settings = storedSettings ? JSON.parse(storedSettings) : {};

        if (settings.playSound !== false) {
            console.log('Text', text || "Swedish Female");
            console.log('Language', settings.language);
            console.log('Rate', settings.rate || 1);
            
            window.responsiveVoice.speak(
                text,
                settings.language || "Swedish Female",
                {
                    rate: settings.rate || 1,
                    onend: endCallback
                });
        }
        else {
            console.log(text);

            if (endCallback) {
                endCallback();
            }
        }
    }

    static cancel() {
        window.responsiveVoice.cancel();
    }
}

export default Speaker;