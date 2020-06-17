import {Extractor} from '../Helpers/Extractor';
import {ComponentKind} from '../Models/ComponentKind';
import {IComponentComposite} from '../Models/IComponentComposite';
import {Modifier} from '../Models/Modifier';

/**
 * Represents the metadata for a property within typescript
 */
export class Property implements IComponentComposite {
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

    public toPUML(): string {
        let result: string = {public: '+', private: '-', protected: '#'}[this.modifier];
        result += (this.isAbstract ? '{abstract} ' : '');
        result += (this.isStatic ? '{static} ' : '');

        const typeFromDecorators: string = this.aggregateFromDecorators('type');
        result += `${this.name}${(this.isOptional ? '?' : '')}: ${typeFromDecorators !== '' ? typeFromDecorators :  this.returnType }`;

        const comment: string = this.aggregateFromDecorators('comment');

        if (comment !== '') {
            result += ` (${comment})`;
        }

        return result;
    }

    private aggregateFromDecorators(field: string): string {
        let comment: string = '';

        if (this.decorators.length > 0) {
            comment = `${this.decorators
                .map((d: string) => Extractor.extract(d, field))
                .filter((d: string) => d.trim() !== '')
                .join('; ')}`;
        }

        return comment;
    }
}
