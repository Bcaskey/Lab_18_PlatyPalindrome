import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class TestViewControl extends BaseViewControl {
    templateString: string = require('./test.vc.html');

    context: any = {
        word: '',
        lwrWord: '',
        revWord: '',
        testResults: '',
        // showMeResult: False
    };
    
    navigatedTo(parameters: any){
        let newWord = parameters.word;
        let lwrWord = newWord.toLowerCase();
        let revWord = '';
        for (var i = lwrWord.length - 1; i >= 0; i--) {
            revWord += lwrWord[i];
        }
        let testResults = '';
        if (lwrWord === revWord) {
            testResults = 'a palindrome.';
        } else {
            testResults = 'not a palindrome.';
        }
        this.context.lwrWord = lwrWord;
        this.context.revWord = revWord;
        this.context.testResults = testResults;
    }
}

register.viewControl('test-vc', TestViewControl);
