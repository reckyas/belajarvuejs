new Vue({
    el: '#vue-app',
    data: {
        healt: 100,
        ended: false,
    },
    methods: {
        punch: function () {
            this.healt -= 10;
            if (this.healt <= 0) {
                this.ended = true;
            }
        },
        restart: function () {
            this.healt = 100;
            this.ended = false;
        }
    },
})