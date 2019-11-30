/**
 * Test
 *
 * A class to test if @attributes works
 */
class TestClass {
    @column({comments: 'test'})
    public testField: string = '';
}

function column({comments}: { comments: string }): Function {
    // tslint:disable-next-line:no-console
    console.log('Column(): evaluated');

    return (target: TestClass, propertyKey: string, descriptor: PropertyDescriptor): void => {
        // tslint:disable-next-line:no-console
        console.log('Column(): called', target, propertyKey, descriptor, comments);
    };
}
