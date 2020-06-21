import * as os from 'os';
import {tplant} from '../src/tplant';

describe('Parse relations', () => {

    // tslint:disable-next-line:mocha-avoid-only
    it.only('generate PlantUML for classes with relations', () => {
        expect(tplant.convertToPlant(
            tplant.generateDocumentation([
                'test/Relations/Column.ts',
                'test/Relations/User.ts',
                'test/Relations/UserAttributes.ts'
            ])))
            .toEqual(
                [`@startuml
class UserAttribute {
    +user_id: character varying(36)
}
class User {
    +enabled: boolean
    +userAttributes: UserAttribute[]
}
User --> UserAttribute
@enduml`].join(os.EOL)
            );
    });
});
