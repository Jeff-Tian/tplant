import {Converter} from '../src/Helpers/Converter';
import {Extractor} from '../src/Helpers/Extractor';

describe('Extract', () => {
    it('extracts', () => {
        expect(Extractor.extract('@column({comments: \'test\'})', 'comments'))
            .toEqual('test');
    });

    it('converts', () => {
        Converter.convert('test.svg', `@startuml
Bob -> Alice : hello 你好
@enduml`,                 'svg');
    });
});
