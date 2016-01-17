import expect from 'expect';
import createId from './createId';

describe('createId', () => {
    it('should convert a description into a unique id', ()=> {
        const actual = createId(123, 'Example description');
        const expected = '123-Example description';
        expect(actual).toEqual(expected);
    });
});
