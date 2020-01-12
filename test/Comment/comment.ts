namespace CJK {
    /**
     * ChineseCharacters
     *
     * Some classes might contains some Chinese characters
     */
    class Comment {
        @f({ comment: '显示的名称' })
        public 你好: string = '';
    }
}

function f() {
    console.log("f(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("f(): called");
    }
}