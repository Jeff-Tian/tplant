/**
 * Test
 *
 * A class to test if @attributes works
 */
class TestClass2 {
    @Column({comment: 'test', type: 'bigint'})
    public testField: string = '';

    @anotherDecorator()
    @Column({comment: '中文', type: 'varchar', length: 255})
    public testField2: string = '';
}

// tslint:disable-next-line:function-name
function Column({comment, type, length}: { comment: string; 'type': string; length?: number }): Function {
    // tslint:disable-next-line:no-console
    console.log('Column(): evaluated');

    return (target: TestClass2, propertyKey: string, descriptor: PropertyDescriptor): void => {
        // tslint:disable-next-line:no-console
        console.log('Column(): called', target, propertyKey, descriptor, comment, type, length);
    };
}

function anotherDecorator(): Function {
    return (target: TestClass2, propertyKey: string, descriptor: PropertyDescriptor): void => {
        // tslint:disable-next-line:no-console
        console.log('Column(): called', target, propertyKey, descriptor);
    };
}
