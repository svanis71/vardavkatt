class Speaker {
    static speak(text, endCallback) {
        const storedSettings = sessionStorage.getItem("settings");
        const settings = storedSettings ? JSON.parse(storedSettings) : {};

        if (settings.playSound) {
            window.responsiveVoice.speak(
                text,
                settings.language || 'Swedish female',
                {
                    rate: settings.rate || 0.8,
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