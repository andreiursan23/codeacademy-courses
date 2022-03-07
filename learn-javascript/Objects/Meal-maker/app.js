let menu = {
  _courses: {
    _appetizers: [],
    _mains: [],
    _desserts: [],
    get appetizers() {
      return this._appetizers;
    },
    get mains() {
      return this._mains;
    },
    get desserts() {
      return this._desserts;
    },
    set appetizers(value) {
      return this._appetizers.push(value);
    },
    set mains(value) {
      return this._mains.push(value);
    },
    set desserts(value) {
      return this._desserts.push(value);
    },
  },
  get courses() {
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts,
    };
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    let dish = {
      name: dishName,
      price: dishPrice,
    };
    switch (courseName) {
      case "appetizers":
        this._courses.appetizers = dish;
        break;
      case "mains":
        this._courses.mains = dish;
        break;
      case "desserts":
        this._courses.desserts = dish;
        break;
      default:
        console.log("Error, this course does not exist!");
        break;
    }
  },
  getRandomDishFromCourse(courseName) {
    let dishes = [];
    switch (courseName) {
      case "appetizers":
        dishes = this._courses.appetizers;
        break;
      case "mains":
        dishes = this._courses.mains;
        break;
      case "desserts":
        dishes = this._courses.desserts;
        break;
      default:
        console.log("Error, this course does not exist!");
        break;
    }
    const randomIndex = Math.floor(Math.random() * dishes.length);

    return dishes[randomIndex];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse("appetizers");
    const main = this.getRandomDishFromCourse("mains");
    const dessert = this.getRandomDishFromCourse("desserts");

    let totalPrice = appetizer.price + main.price + dessert.price;
    return `Our recommendation is: 
  - appetizer: ${appetizer.name};
  - main: ${main.name};
  - dessert: ${dessert.name};

Total cost: $${totalPrice}.`;
  },
};

menu.addDishToCourse("appetizers", "Bruschetta Rustica", 8);
menu.addDishToCourse("appetizers", "Calamari Fritti", 7);
menu.addDishToCourse("appetizers", "Mozzarella Caprese", 9);
menu.addDishToCourse("mains", "Veal Parmigiana", 20);
menu.addDishToCourse("mains", "Grilled Salmon", 17);
menu.addDishToCourse("mains", "Chicken Parmigiana", 15);
menu.addDishToCourse("desserts", "Tiramisu", 6);
menu.addDishToCourse("desserts", "Gelato", 5);
menu.addDishToCourse("desserts", "Panna cotta", 7);

console.log(menu.generateRandomMeal());
