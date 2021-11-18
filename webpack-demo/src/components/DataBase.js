// import images from "../components/images";

 class DataBase {
    constructor() {}
    static instance = null;
    static getInstance() {
      if (DataBase.instance) {
        return DataBase.instance;
      } else {
        DataBase.instance = new DataBase();
        return DataBase.instance;
      }
    }
  
    // images = [1, 2, 3]; // put your array with all pictures and u can modify this it and always return current state of array
  
    // modifyImages() {
    //   const newArr = this.images.map((item) => item + 10);
    //   this.images = newArr;
    //   return this.images;
    // }
  
    getImages() {
      return this.images;
    }
  }
  
  // export default DataBase;
  
  // const x = DataBase.getInstance();
  // const y = DataBase.getInstance();
  // console.log(x === y); // true because  DataBase is Singleton
  // console.log(x.getImages());
  // y.modifyImages();
  // console.log(x.getImages());
  // console.log(x)
  console.log(images)