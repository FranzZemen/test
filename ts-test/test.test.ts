import 'mocha';
import chai from 'chai';
import {getJSON} from '../publish';

const expect = chai.expect;
const should = chai.should();

describe('Test Tests', ()=> {
  it('should return JSON', done => {
    getJSON().should.equal('{"hello":"world","from":"test"}');
    done();
  });
});
