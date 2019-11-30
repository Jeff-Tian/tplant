import * as os from 'os';
import {tplant} from '../src/tplant';

describe('Parse attributes', () => {

    // tslint:disable-next-line:mocha-avoid-only
    it.only('generate PlantUML for classes with attributes', () => {
        expect(tplant.convertToPlant(tplant.generateDocumentation(['test/Attributes/testClass.ts'])))
            .toEqual(
                ['@startuml',
                    'class TestClass {',
                    '    +testField: string (test)',
                    '}',
                    '@enduml'].join(os.EOL)
            );
    });
});
