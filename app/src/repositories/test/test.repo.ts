import {async, register} from 'platypus';
import BaseRepository from '../base/base.repo';

export default class TestRepository extends BaseRepository {

}

register.injectable('test-repo', TestRepository);
