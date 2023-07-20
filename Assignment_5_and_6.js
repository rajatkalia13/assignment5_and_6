
/** 
 * 
 * Name : Rajat
 * ID : C0886487
 */
class Car {

    constructor(brand, model, year, color, price, gas)
    {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color= color;
        this.price = price;
        this.gas = gas;
    }


    // honk method to print the values
     honk()
     {
        console.log("Tuut tuut");
        console.log("Brand:", this.brand);
        console.log("Model:", this.model);
        console.log("Year:", this.year);
        console.log("Color:", this.color);
        console.log("Price:", this.price);
     }

    




}

// pass the values to the parameter 
const cars = [
    new Car("Honda", "CR-V", 2023, "Red", 50000, 45),
    new Car("Ford", "F-150", 2020, "Black", 25000, 30),
    new Car("BMW", "X5", 2022, "Green", 60000, 65),
    new Car("Mazda", "CX-5", 2019, "White", 15000, 60),
    new Car("Audi", "Q7", 2018, "Silver", 52000, 47),
    new Car("Kia", "Forte", 2020, "Blue", 21000, 56),
];

function calculateGas() {
    const currentYear = 2023;
    const total_turns = 7;

    for (let turn = 1; turn <= total_turns; turn++) {
        console.log("----Turn "+turn+"----");
        cars.forEach((car) => {
            const age = currentYear - car.year;
            const gasLost = age > 0 ? 5 + age : 5;
            car.gas = Math.max(0, car.gas - gasLost);
            car.honk();
            console.log("Remaining Gas:", car.gas, "L");
        });
        console.log("\n");
    }
}

calculateGas();


