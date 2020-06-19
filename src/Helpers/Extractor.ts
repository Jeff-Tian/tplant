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

    // tslint:disable-next-line:function-name
    public static extractNumberValue(source: string, field: string): number | undefined {
        const match: RegExpMatchArray | null = source.match(new RegExp(`${field}:\\s*(\\d+)[^\\d]+`));

        return match !== null ? Number(match[1]) : undefined;
    }
}
