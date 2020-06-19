import * as os from 'os';
import {tplant} from '../src/tplant';

describe('Parse attributes', () => {

    // tslint:disable-next-line:mocha-avoid-only
    it.only('generate PlantUML for classes with attributes', () => {
        expect(tplant.convertToPlant(tplant.generateDocumentation(['test/Attributes/TestClass2.ts'])))
            .toEqual(
                ['@startuml',
                    'class TestClass2 {',
                    '    +testField: bigint (test)',
                    '    +testField2: varchar(255) (中文)',
                    '}',
                    '@enduml'].join(os.EOL)
            );
    });
});
