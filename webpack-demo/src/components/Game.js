import Router from "../components/Router";
import images from "../components/images";
import Categories from "./Categories";
export default class Game {

    constructor() {
        this.buttonArtistQuiz = document.getElementById('artist-quiz')
        this.buttonPictureQuiz = document.getElementById('picture-quiz')
        this.buttonsQuestionHome = document.querySelectorAll(".question-home")
        this.questionPicture = document.querySelector('.question-text-painting')
        this.questionPaintingBlock = document.querySelector('.question-painting-block')
        this.questionPaintingItem1 = document.querySelector('.question-item-1')
        this.questionPaintingItem2 = document.querySelector('.question-item-2')
        this.questionPaintingItem3 = document.querySelector('.question-item-3')
        this.questionPaintingItem4 = document.querySelector('.question-item-4')
        this.buttonsPainting = document.querySelectorAll('.answer-block-painting')
        this.parentsButtonsPainting = document.querySelectorAll('.answer-2block')
        this.questionArtist = document.querySelector(".question-text")
        this.imageArtist = document.querySelector(".question-picture")
        this.buttons = document.querySelectorAll(".answer-block")
        this.parentButtons = document.querySelector('.question-answer')
        this.buttonNextQuestionPicture = document.querySelector('.next-question-painting')

        this.router = new Router()

        this.buttonArtistQuiz.addEventListener('click', () => {
            this.router.categoriesPage()
            this.artistQuizStart()
        });

        this.buttonPictureQuiz.addEventListener('click', () => {
            this.router.questionPaintingPage()
            this.pictureQuizStart()
        })

        this.buttonsQuestionHome.forEach(item => item.addEventListener('click', () => {
            this.router.mainPage()
            // console.log(123)
        }))
    }
    pictureQuizStart() {
        const categoryInstance = new Categories()
        categoryInstance.setPortrait()

        // переменная для вопросов
        let numberQuestion = 0

        function setNextQuestion() {

        const pictureForQuestion = categoryInstance.arrPortrait[numberQuestion]
        
            this.index1 = Math.ceil(Math.random() * 240)
            this.index2 = Math.ceil(Math.random() * 240)
            this.index3 = Math.ceil(Math.random() * 240)
            this.index4 = Math.ceil(Math.random() * 240)
           
           const currentPictureQuestion1 = pictureForQuestion
            const currentPictureQuestion2 = images[this.index2]
            const currentPictureQuestion3 = images[this.index3]
            const currentPictureQuestion4 = images[this.index4]

            this.questionPicture.textContent = `Что за картину нарисовал ${pictureForQuestion.author}`

            this.questionPaintingItem1.style.backgroundImage = `url('./img/${currentPictureQuestion1.imageNum}.jpg')`
            this.questionPaintingItem2.style.backgroundImage = `url('./img/${currentPictureQuestion2.imageNum}.jpg')`
            this.questionPaintingItem3.style.backgroundImage = `url('./img/${currentPictureQuestion3.imageNum}.jpg')`
            this.questionPaintingItem4.style.backgroundImage = `url('./img/${currentPictureQuestion4.imageNum}.jpg')`

            let i = 0;
            for (i = 0; i <= this.buttonsPainting.length; i++) {
                this.buttonsPainting[0].textContent = currentPictureQuestion1.name;
                // console.log(currentPictureQuestion1.name)
                this.buttonsPainting[1].textContent = images[this.index2].name;
                this.buttonsPainting[2].textContent = images[this.index3].name;
                this.buttonsPainting[3].textContent = images[this.index4].name;
            }
            let rightClick = currentPictureQuestion1.name
            this.buttonsPainting.forEach((item) => item.addEventListener('click', () => {

                if (item.textContent === rightClick) {
                    item.classList.add("answer-block-green")
                    console.log(this.buttonsPainting.textContent === rightClick)
                } else {
                    item.classList.add("answer-block-red")
                }
            }));
        }
         
        setNextQuestion()

        this.buttonNextQuestionPicture.addEventListener('click', () => {
            setNextQuestion();
            numberQuestion++
            console.log(123)
        }) 
        
    }





    artistQuizStart() {

        this.index = Math.ceil(Math.random() * 240)
        // console.log(index)
        const currentArtistQuestion = images[this.index]
        this.questionArtist.textContent = `Кто автор картины ${currentArtistQuestion.name}`

        this.imageArtist.style.backgroundImage = `url('./img/${currentArtistQuestion.imageNum}.jpg')`

        const authors = []
        this.index1 = Math.ceil(Math.random() * 240)
        this.index2 = Math.ceil(Math.random() * 240)
        this.index3 = Math.ceil(Math.random() * 240)
        // authors.push(images[this.index1])
        // authors.push(images[this.index2])
        // authors.push(images[this.index3])
        // authors.push(currentArtistQuestion);

        let i = 0;
        for (i = 0; i <= this.buttons.length; i++) {
            this.buttons[0].textContent = currentArtistQuestion.author;
            // console.log(currentArtistQuestion.author)
            this.buttons[1].textContent = images[this.index1].author;
            this.buttons[2].textContent = images[this.index2].author;
            this.buttons[3].textContent = images[this.index3].author;

        }
        let rightClick = currentArtistQuestion.author
        this.parentButtons.onclick = function (event) {
            if (event.target.textContent === rightClick) {
                event.target.classList.add("answer-block-green")

            } else {
                event.target.classList.add("answer-block-red")
            }
        }
    };
};
