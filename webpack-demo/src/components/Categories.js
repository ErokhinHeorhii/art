import images from "./images";
import Router from "./Router";
import Game from "./Game";

export default class Categories {
    constructor() {
        this.arrPortrait = []
        this.arrLandscape = []
        this.arrStillLife = []
        this.linkPortrait = document.querySelector('.categories-card-last')
        this.buttonHome = document.querySelector('.button-home')
        this.router = new Router()
        this.game = new Game()

        this.buttonHome.addEventListener('click', () => {
            this.router.mainPage()
        })

    }



    setQuestionsByAuthorByName() {
        const questionByAuthor = [];
        const questionByName = [];

        images.forEach((item, index) => {
            if (index % 2 == 0) {
                questionByAuthor.push(item);

            }
            if (index % 2 !== 0) {
                questionByName.push(item)
            }
        })
        // console.log(questionByAuthor, questionByName);


    }

    setPortrait() {

        const categoryPortrait = images.slice(0, 11)
        this.arrPortrait = [...categoryPortrait]
   
        this.linkPortrait.addEventListener('click', () => {
            this.router.questionArtistsPage()

        });

    //     this.game.pictureQuizStart() {

    //         const currentPictureQuestion1 = this.arrPortrait.forEach(function (item) {
    //             console.log(item)
    //         }


    // };
    };

    setLandscape() {

        const categoryLandscape = images.slice(11, 21)
        this.arrLandscape.push(categoryLandscape)
        // console.log(arrLandscape)
    }

    // setStillLife() {
    //     const category
    // }
}
