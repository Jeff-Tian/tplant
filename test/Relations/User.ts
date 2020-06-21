import {Column} from './Column';
import {UserAttribute} from './UserAttribute';

// tslint:disable-next-line:completed-docs
export class User {
    @Column({type: 'boolean'})
    public enabled: boolean = false;

    @OneToMany(
        () => UserAttribute,
        (userAttr: UserAttribute) => userAttr.user_id
    )
    public userAttributes: UserAttribute[] = [];
}

// tslint:disable-next-line:function-name
function OneToMany(typeMapping: Function, attrMapping: Function): Function {
    // tslint:disable-next-line:no-console
    console.log('OneToMany(): evaluated');

    return (target: User | UserAttribute, propertyKey: string, descriptor: PropertyDescriptor): void => {
        // tslint:disable-next-line:no-console
        console.log('OneToMany(): called', target, propertyKey, descriptor, typeMapping, attrMapping);
    };
}
