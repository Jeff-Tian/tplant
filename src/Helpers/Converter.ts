import fs from 'fs';
import http from 'http';
import {encode} from 'plantuml-encoder';

/**
 * Converter
 *
 * Convert from string to images
 */
// tslint:disable-next-line:no-unnecessary-class
export class Converter {
    // tslint:disable-next-line:function-name
    public static convert(output: string, input: string, extension: string): void {
        http.get({
                     host: 'www.plantuml.com',
                     path: `/plantuml/${extension}/${encode(input)}`
                     // tslint:disable-next-line:align
                 },       (res: http.IncomingMessage): void => {
            // tslint:disable-next-line non-literal-fs-path
            const fileStream: fs.WriteStream = fs.createWriteStream(output);
            res.setEncoding('utf-8');
            res.pipe(fileStream);
            res.on('error', (err: Error): void => {
                throw err;
            });
        });
    }
}
