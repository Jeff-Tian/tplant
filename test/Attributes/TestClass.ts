/**
 * Test
 *
 * A class to test if @attributes works
 */
class TestClass {
    @column({comment: 'test'})
    public testField: string = '';
}

function column({comment}: { comment: string }): Function {
    // tslint:disable-next-line:no-console
    console.log('Column(): evaluated');

    return (target: TestClass, propertyKey: string, descriptor: PropertyDescriptor): void => {
        // tslint:disable-next-line:no-console
        console.log('Column(): called', target, propertyKey, descriptor, comment);
    };
}
