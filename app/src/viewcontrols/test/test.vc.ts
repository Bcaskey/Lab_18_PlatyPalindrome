import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class TestViewControl extends BaseViewControl {
    templateString: string = require('./test.vc.html');

    context: any = {};
}

register.viewControl('test-vc', TestViewControl);
