import * as os from 'os';
import {ComponentKind} from '../Models/ComponentKind';
import {IComponentComposite} from '../Models/IComponentComposite';

/**
 * Represents relations between classes
 */
export class Relation implements IComponentComposite {
    public relationType: string;
    public fromObject: string;
    public toObject: string;

    public readonly componentKind: ComponentKind = ComponentKind.RELATION;
    public readonly name: string;

    constructor(fromObject: string, toObject: string) {
        this.relationType = 'OneToMany';
        this.fromObject = fromObject;
        this.toObject = toObject;

        this.name = 'relation';
    }

    public toPUML(): string {
        return [`${this.fromObject} --> ${this.toObject}`].join(os.EOL);
    }
}
