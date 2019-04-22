new Vue({
    el: '#app',
    data: {
        favFood: '',
        ref: ''
    },
    methods: {
        getRefs: function () {
            this.favFood = this.$refs.input.value;
            this.ref = this.$refs.test.innerText;
        }
    },
})