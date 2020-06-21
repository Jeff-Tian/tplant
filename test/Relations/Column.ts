import {User} from './User';
import {UserAttribute} from './UserAttribute';

// tslint:disable-next-line:function-name
export function Column({type, length}: { 'type': string; length?: number }): Function {
    // tslint:disable-next-line:no-console
    console.log('Column(): evaluated');

    return (target: User | UserAttribute, propertyKey: string, descriptor: PropertyDescriptor): void => {
        // tslint:disable-next-line:no-console
        console.log('Column(): called', target, propertyKey, descriptor, type, length);
    };
}
