var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/*
    1.Type:kiểu dữ liệu
    + primitive value: giá trị cơ bản (string ,boolean, number ,null,undefined)
    | :inion type
    + reference value (non primitive): giá trị tham chiếu

    + function type
    +type array



*/
let title = "abc";
let number = 123;
let valid = true;
let result1 = null;
let result = null;
let sp1 = { maSP: "01", tenSP: "Sản phẩm 01" };
let prod1 = { id: 1, name: "iphone", price: 1000 };
let prod2 = { id: 2, name: "iphone X", price: 2000, desc: "abc" };
let prod3 = {
    id: 3,
    name: "iphone XS",
    price: 2500,
    desc: "abc",
    image: "https://i.pavatar.cc",
};
class ButtonWed {
    constructor() {
        this.id = "";
        this.innerHTML = "";
        this.className = "";
        this.color = "";
        this.backgroundColor = "";
    }
}
let btn = new ButtonWed();
class ButtonWedGradient extends ButtonWed {
    constructor() {
        super(...arguments);
        this.gradient = "";
    }
}
let btnGradient = new ButtonWedGradient();
// function type
/*
    + Kiểu dữ liệu trả về của hàm (): kiểu trả về =>{//nội dung}
    + Kiểu dữ liệu của hàm :()=>number
*/
let tinhTong = (a, b) => {
    return a + b;
};
function main(callback) {
    callback("Hello cybersoft");
}
function renderH3(content) {
    document.getElementById("result").innerHTML = `
  <h3 class='p-5 text-center bg-dark text-white'>${content}</h3>`;
}
function renderDiv(content) {
    document.getElementById("result").innerHTML = `
    <div class='p-5 text-center bg-danger text-white'>${content}
    <i class='fa fa-heart fs-3'></i>
    </div>`;
}
main(renderDiv);
//HOF :higher order function (hàm nhận vào callback và trả về hàm)
//Closure function : hàm nhận vào tham số và trả về hàm
let action = () => {
    return (dispatch) => __awaiter(this, void 0, void 0, function* () {
        // Code abc
    });
};
let action2 = () => {
    return (dispatch) => __awaiter(this, void 0, void 0, function* () {
        // Code abc
    });
};
let tinhTong2So = (a, b) => {
    return a + b;
};
let arrNumber = [1, 2, 3, 4, 5];
let arrString = ["a", "b", "c"];
let arrProd = [
    { id: "1", name: "iphone", price: 1000 },
    { id: "2", name: "iphone", price: 1000 },
    { id: "3", name: "iphone", price: 1000 },
];
function getApi() {
    return {
        id: 1,
        name: "Product 1",
        showInfo: () => {
            console.log("Info product");
        },
    };
}
class ResApi {
    constructor() {
        this.id = 0;
        this.name = "";
    }
}
let resApi = getApi();
if (resApi instanceof ResApi) {
    resApi.showInfo();
}
if (typeof resApi === undefined) {
    console.error("lỗi abc");
}
if (typeof resApi == "number") {
    resApi++;
}
//generic
class ProductList {
    constructor() {
        this.arrProduct = [];
        this.add = (newProduct) => {
            this.arrProduct.push(newProduct);
        };
        this.del = (id) => {
            this.arrProduct = this.arrProduct.filter((item) => item.id != id);
        };
    }
}
class StudentList {
    constructor() {
        this.arrStudent = [];
        this.add = (newStudent) => {
            this.arrStudent.push(newStudent);
        };
        this.del = (id) => {
            this.arrStudent = this.arrStudent.filter((item) => item.id != id);
        };
    }
}
class List {
    constructor() {
        this.arr = [];
        this.add = (item) => {
            this.arr.push(item);
        };
        this.del = (id) => {
            this.arr = this.arr.filter((item) => item.id != id);
        };
    }
}
let listProd = new List();
//listProd.add()
let student = [1, "nguyễn văn a"];
