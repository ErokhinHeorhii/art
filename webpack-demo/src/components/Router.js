class Router {
    constructor() {
        this.main = document.querySelector(".first-page")
        this.settings = document.querySelector(".setting-page")
        this.categories = document.querySelector(".categories")
        this.questionArtists = document.querySelector(".question-artists")
        this.questionPainting = document.querySelector(".question-painting")
    }

    mainPage() {

        this.main.classList.add("visible")

        this.settings.classList.remove("visible")
        this.settings.classList.add("invisible")

        this.categories.classList.remove("visible")
        this.categories.classList.add("invisible")

        this.questionArtists.classList.remove("visible")
        this.questionArtists.classList.add("invisible")

        this.questionPainting.classList.remove("visible")
        this.questionPainting.classList.add("invisible")

    }

    settingPage() {
        this.settings.classList.add("visible")

        this.main.classList.remove("visible")
        this.main.classList.add("invisible")

        this.categories.classList.remove("visible")
        this.categories.classList.add("invisible")


        this.questionArtists.classList.remove("visible")
        this.questionArtists.classList.add("invisible")

        this.questionPainting.classList.remove("visible")
        this.questionPainting.classList.add("invisible")

    }

    categoriesPage() {

        this.categories.classList.add("visible")

        this.main.classList.remove("visible")
        this.main.classList.add("invisible")

        this.settings.classList.remove("visible")
        this.settings.classList.add("invisible")

        this.questionArtists.classList.remove("visible")
        this.questionArtists.classList.add("invisible")

        this.questionPainting.classList.remove("visible")
        this.questionPainting.classList.add("invisible")
    }

    questionArtistsPage() {
        this.questionArtists.classList.add("visible")

        this.main.classList.remove("visible")
        this.main.classList.add("invisible")

        this.settings.classList.remove("visible")
        this.settings.classList.add("invisible")

        this.categories.classList.remove("visible")
        this.categories.classList.add("invisible")

        this.questionPainting.classList.remove("visible")
        this.questionPainting.classList.add("invisible")

    }

    questionPaintingPage() {
        this.questionPainting.classList.add("visible")

        this.main.classList.remove("visible")
        this.main.classList.add("invisible")

        this.settings.classList.remove("visible")
        this.settings.classList.add("invisible")

        this.categories.classList.remove("visible")
        this.categories.classList.add("invisible")


        this.questionArtists.classList.remove("visible")
        this.questionArtists.classList.add("invisible")

    }

}
export default Router;



