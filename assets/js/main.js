const { createApp } = Vue
const drago = "variabile"

createApp({
    data() {
        return {
            message: 'Hello Vue.js',
            classProva: "red",
            nome: "",
            surname: "",
            narutoLink: "https://i0.wp.com/www.meganerd.it/wp-content/uploads/2023/03/Naruto-quattro-nuovi-episodi.jpg?resize=1024%2C576&ssl=1",
            linkCustom: "",
        }
    },
    methods: {            
        greting: function() {
            return 'ciao';
        },
        
    }
}).mount('#app')
