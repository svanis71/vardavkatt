
class Listener {

    constructor() {
        this.yes = ['ja', 'japp', 'jepp', 'yes'];
        this.no = ['nej', 'nix', 'nope', 'no'];
        this.grammar = '#JSGF V1.0; grammar yes_answer; public <yes_answer> = ' + this.yes.join(' | ') + '; grammar no_answer; public <no_answer> = ' + this.no.join(' | ') + ' ;';

        /* eslint-disable no-undef */
        this.speechRecognition = webkitSpeechRecognition;
        this.speechGrammarList = webkitSpeechGrammarList;
        this.speechRecognitionEvent = webkitSpeechRecognitionEvent;
        /* eslint-enable no-undef */

        this.recognition = new this.speechRecognition();
        this.speechRecognitionList = new this.speechGrammarList();
        this.speechRecognitionList.addFromString(this.grammar, 1);

        this.recognition.grammars = this.speechRecognitionList;
        this.recognition.continuous = false;
        this.recognition.lang = 'sv-SE';
        this.recognition.interimResults = false;
        this.recognition.maxAlternatives = 1;

    }

    test() {
        console.log(this.grammar);
        console.log(this.speechRecognition);
        console.log(this.speechGrammarList);
        console.log(this.speechRecognitionEvent);
    }

    startRecognition() {
        const promise = new Promise((resolve, reject) => {
            console.log("Lyssnar..");
            this.recognition.start();

            let transcript = '';

            this.recognition.onspeechend = () => {
                console.log('onspeechend');
                this.recognition.stop();
            };

            this.recognition.onresult = event => {
                console.log('onresult');
                let last = event.results.length - 1;
                console.log("Hört svar: " + event.results[last][0].transcript);
                console.log("Confidence: " + event.results[0][0].confidence);
                const result = event.results[last][0].transcript;
                this.recognition.stop();
                transcript = result;
            };
            
            this.recognition.onend = () => {
                console.log('onend', transcript);

                resolve(transcript);
            };

            this.recognition.onerror = event => {
                console.log('onerror');
            };

            this.recognition.onaudioend = () => {
                console.log('onaudioend');
            };

            this.recognition.onaudiostart = () => {
                console.log('onaudiostart');
            };

            this.recognition.onnomatch = () => {
                console.log('onnomatch');
            };

            this.recognition.onsoundend = () => {
                console.log('onsoundend');
            };

            this.recognition.onsoundstart = () => {
                console.log('onsoundstart');
            };

            this.recognition.onspeechstart = () => {
                console.log('onspeechstart');
            };

            this.recognition.onstart = () => {
                console.log('onstart');
            };
        });

        return promise;
    }

}

export default Listener;