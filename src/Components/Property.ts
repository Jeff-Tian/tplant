import {Extractor} from '../Helpers/Extractor';
import {ComponentKind} from '../Models/ComponentKind';
import {Member} from '../Models/IComponentComposite';
import {Modifier} from '../Models/Modifier';
import {Relation} from './Relation';

/**
 * Represents the metadata for a property within typescript
 */
export class Property implements Member {
    public readonly componentKind: ComponentKind = ComponentKind.PROPERTY;
    public readonly name: string;
    public modifier: Modifier = 'public';
    public returnType: string = 'any';
    public isAbstract: boolean = false;
    public isOptional: boolean = false;
    public isStatic: boolean = false;
    public decorators: string[] = [];

    constructor(name: string) {
        this.name = name;
    }

    public getRelation(fromObject: string): Relation | undefined {
        return this.decorators
            .filter((decorator: string) => decorator.startsWith('@OneToMany'))
            .map((decorator: string) => new Relation(fromObject, Extractor.extractRelationTo(decorator)))[0];
    }

    public toPUML(): string {
        let result: string = {public: '+', private: '-', protected: '#'}[this.modifier];
        result += (this.isAbstract ? '{abstract} ' : '');
        result += (this.isStatic ? '{static} ' : '');

        const typeFromDecorators: string = this.aggregateFromDecorators('type');
        result += `${this.name}${(this.isOptional ? '?' : '')}: ${typeFromDecorators !== '' ? typeFromDecorators : this.returnType}`;

        const length: string = this.aggregateFromDecorators('length');

        if (length !== '') {
            result += `(${length})`;
        }

        const comment: string = this.aggregateFromDecorators('comment');

        if (comment !== '') {
            result += ` (${comment})`;
        }

        return result;
    }

    private aggregateFromDecorators(field: string): string {
        let value: string = '';

        if (this.decorators.length > 0) {
            value = `${this.decorators
                // .map((d: string) => {
                //     // tslint:disable-next-line:no-console
                //     console.log('d = ', d);
                //
                //     return d;
                // })
                .map((d: string) => Extractor.extract(d, field) ||
                    Extractor.extractNumberValue(d, field))
                .filter((d: string | number | undefined) => d !== undefined && String(d)
                    .trim() !== '')
                .join('; ')}`;
        }

        return value;
    }
}
