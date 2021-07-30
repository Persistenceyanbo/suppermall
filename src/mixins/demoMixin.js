export const demoMixin = {
    data() {
        return {
            message: 'Hello DemoMixins'
        }
    },
    methods: {
        foo() {
            console.log('demo mixin foo');
        }
    },
    created() {
        console.log('我是created');
    }

}