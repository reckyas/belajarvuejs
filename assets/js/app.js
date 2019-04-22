Vue.component('greeting', {
    template: `
        <strong>My name is {{ name }} <button @click="changeName">Change Name</button></strong>
    `,
    data: function () {
        return {
            name: 'Mario'
        }
    },
    methods: {
        changeName: function () {
            this.name = 'Yhosi'
        }
    },
})
var one = new Vue({
    el: '#vue-app-one'
})

var two = new Vue({
    el: '#vue-app-two'
})