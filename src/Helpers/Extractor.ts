/**
 * Extractor
 *
 * Extract field from : separated string
 */
// tslint:disable-next-line:no-unnecessary-class
export class Extractor {
    // tslint:disable-next-line:function-name
    public static extract(source: string, field: string): string {
        const match: RegExpMatchArray | null = source.match(new RegExp(`${field}:\\s*['"]([^'"]+)`));

        return match !== null ? match[1] : '';
    }
}
