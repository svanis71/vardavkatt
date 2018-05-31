
class Listener {
    /* eslint-disable no-undef */
    static speechRecognition = webkitSpeechRecognition;
    static speechGrammarList = webkitSpeechGrammarList;
    static speechRecognitionEvent = webkitSpeechRecognitionEvent;
    /* eslint-enable no-undef */

    static test() {

        console.log(this.speechRecognition);
        console.log(this.speechGrammarList);
        console.log(this.speechRecognitionEvent);
    }
}

export default Listener;