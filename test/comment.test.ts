import { exec } from 'child_process';
import * as fs from 'fs';
import * as os from 'os';
import DoneCallback = jest.DoneCallback;

jest.setTimeout(20000);

describe('Parse comments', () => {

    it('generate PlantUML for fileds that contains comments', (done: DoneCallback) => {
        // tslint:disable-next-line:max-line-length
        exec('ts-node --project ./tsconfig.json ./src/index.ts -i ./test/Comment/comment.ts --output' +
            ' ./output-comment.puml', () => {
            const fileContent: string = fs.readFileSync('./output-comment.puml', 'utf-8');

            expect(fileContent)
                .toEqual(
                    ['@startuml',
                        'namespace CJK {',
                        '    class Comment {',
                        '        +你好: string (显示的名称)',
                        '    }',
                        '}',
                        '@enduml'].join(os.EOL)
                );

            done();
        });
    });
});
