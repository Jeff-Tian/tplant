import {Relation} from '../Components/Relation';
import {ComponentKind} from './ComponentKind';

export interface IComponentComposite {
    readonly componentKind: ComponentKind;
    readonly name: string;

    toPUML(): string;
}

export interface IMaybeRelation {
    getRelation(fromObject: string): Relation | undefined;
}

export type Member = IComponentComposite & IMaybeRelation;
