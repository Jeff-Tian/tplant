import {Column} from './Column';

// tslint:disable-next-line:completed-docs
export class UserAttribute {
    @Column({type: 'character varying', length: 36})
    // tslint:disable-next-line:variable-name
    public user_id: string = '1234';
}
