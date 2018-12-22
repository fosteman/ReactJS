import Modash from './Modash';
describe(`ModashLib`, () => {
    it('`truncate()`', () => {
        const string = 'there was one catch, and that was CATCH-22';
        expect(Modash.truncate(string, 19)).toEqual('there was one catch...');
    });
    it('`camelCase()`', () => {
        const string = 'there was one catch';
        expect(Modash.camelCase(string)).toEqual('thereWasOneCatch');
    });
});