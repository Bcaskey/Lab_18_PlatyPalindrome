import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');

    context: any = {
        word: '',
    };
    
    toTest(word: string): void {
        this.navigator.navigate('test-vc', {
            parameters: {
                word: word
            }
        });
    }
}  

register.viewControl('home-vc', HomeViewControl);
