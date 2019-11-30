import {Extractor} from '../src/Helpers/Extractor';

describe('Extract', () => {
    it('extracts', () => {
        expect(Extractor.extract('@column({comments: \'test\'})', 'comments'))
            .toEqual('test');
    });
});
