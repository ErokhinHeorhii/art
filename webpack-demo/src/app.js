import Router from "./components/Router"
import Game from "./components/Game";
// import DataBase from "./components/DataBase";
import Categories from "./components/Categories"



  const App = () => {
    

    const router = new Router()
    
    router.mainPage()
    // router.settingPage()
    // router.categoriesPage()
    // router.questionArtistsPage()
    // router.questionPaintingPage()
    
    const artist = new Game()
    //  const base = new DataBase.getInstance()
    const category = new Categories()
    // category.setQuestionsByAuthorByName()
    category.setPortrait()
 }

 export default App