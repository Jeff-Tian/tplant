/**
 * Test
 *
 * A class to test if @attributes works
 */
class TestClass2 {
    @Column({comment: 'test', type: 'bigint'})
    public testField: string = '';

    @Column({comment: '中文', type: 'varchar'})
    public testField2: string = '';
}

// tslint:disable-next-line:function-name
function Column({comment, type}: { comment: string; 'type': string }): Function {
    // tslint:disable-next-line:no-console
    console.log('Column(): evaluated');

    return (target: TestClass2, propertyKey: string, descriptor: PropertyDescriptor): void => {
        // tslint:disable-next-line:no-console
        console.log('Column(): called', target, propertyKey, descriptor, comment, type);
    };
}
