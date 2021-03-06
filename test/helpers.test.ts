import {Converter} from '../src/Helpers/Converter';
import {Extractor} from '../src/Helpers/Extractor';

describe('Extract', () => {
    it('extracts', () => {
        expect(Extractor.extract('@column({comments: \'test\'})', 'comments'))
            .toEqual('test');
    });

    it('extracts numbers', () => {
        expect(Extractor.extractNumberValue('@Column({length: 255})', 'length'))
            .toEqual(255);
    });

    it('converts', () => {
        Converter.convert('test.svg', `@startuml
Bob -> Alice : hello 你好
@enduml`,                 'svg');
    });

    it('extracts relation to', () => {
        const relationTo: string = Extractor.extractRelationTo(
            `@OneToMany(
        () => UserAttribute,
        (userAttr: UserAttribute) => userAttr.user_id
    )`);

        expect(relationTo)
            .toEqual('UserAttribute');
    });

    it('extracts relation to exactly', () => {
        const relationTo: string = Extractor.extractRelationTo(
            `@OneToMany(
        type => UserAttribute,
        userAttr => userAttr.user_id,
    )`);

        expect(relationTo)
            .toEqual('UserAttribute');
    });
});
