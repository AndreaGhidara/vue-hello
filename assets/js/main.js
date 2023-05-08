const { createApp } = Vue


createApp({
    data() {
        return {
            images:[
                {
                    id: 1,
                    src:"https://gametimers.it/wp-content/uploads/2021/10/Hunter-x-Hunter-Amazon-Prime-Video-doppiaggio-italiano-Dynit-Italia-trailer-Lucca-Comics-and-Games-2021-1200x900.jpg",
                },
                {
                    id: 2,
                    src:"https://www.staynerd.com/wp-content/uploads/5252-SeriesHeaders_HxH_2000x800.jpg",
                },
                {
                    id: 3,
                    src:"https://i.ytimg.com/vi/AI-QXQbuxrk/maxresdefault.jpg",
                },
                {
                    id: 4,
                    src:"https://top-mmo.fr/wp-content/uploads/2022/10/Hunter-x-Hunter-Manga-Gets-Official-Return-Date.jpg",
                },
                {
                    id: 5,
                    src:"https://capitolo.news/wp-content/uploads/2023/01/Hunter-x-Hunter-1.jpg",
                },
                {
                    id: 6,
                    src:"https://sm.ign.com/t/ign_in/screenshot/default/hunter-hunter-manga_3fvw.1280.jpg",
                },
                {
                    id: 7,
                    src:"https://img1.ak.crunchyroll.com/i/spire4/ec0454c13850f28256e410baa2a2fdc81672126697_main.jpg",
                }
            ],

            counter:0,

        }
    },
    methods: {            
        changeNextBg() {
            if (this.counter == this.images.length - 1) {
                this.counter = 0;
            } else {
                this.counter++;
            }
        },
        changePrevBg(){
            if (this.counter == 0) {
                this.counter = this.images.length;
            }
            this.counter--;
        }


        
    }
}).mount('#app');


