/*
    1.Type:kiểu dữ liệu
    + primitive value: giá trị cơ bản (string ,boolean, number ,null,undefined)
    | :inion type
    + reference value (non primitive): giá trị tham chiếu

    + function type
    +type array



*/
let title: string = "abc";
let number: number = 123;
let valid: boolean = true;
let result1: null | string = null;
let result: undefined | string | number = null;

// Tạo ra type của object
// class sanPham {
//   maSP: string = "";
//   tenSP: string = "";
// }
// let sp: sanPham = new sanPham();
type SanPham = {
  maSP: string;
  tenSP: string;
};
type ResponseServer = SanPham | undefined;
let sp1: SanPham = { maSP: "01", tenSP: "Sản phẩm 01" };
interface Product {
  id: number | string;
  name: string;
  price: number;
}

//merge interface
interface Product {
  desc?: string;
}
let prod1: Product = { id: 1, name: "iphone", price: 1000 };
let prod2: Product = { id: 2, name: "iphone X", price: 2000, desc: "abc" };

interface ProductImage extends Product {
  image: string;
}
let prod3: ProductImage = {
  id: 3,
  name: "iphone XS",
  price: 2500,
  desc: "abc",
  image: "https://i.pavatar.cc",
};
interface IButton {
  id: string;
  innerHTML: string;
  className: string;
  color: string;
  backgroundColor: string;
}
class ButtonWed implements IButton {
  id: string = "";
  innerHTML: string = "";
  className: string = "";
  color: string = "";
  backgroundColor: string = "";
}
let btn = new ButtonWed();
class ButtonWedGradient extends ButtonWed {
  gradient: string = "";
}
let btnGradient: ButtonWedGradient = new ButtonWedGradient();

// function type
/*
    + Kiểu dữ liệu trả về của hàm (): kiểu trả về =>{//nội dung}
    + Kiểu dữ liệu của hàm :()=>number
*/
let tinhTong: (a: number, b: number) => number = (
  a: number,
  b: number
): number => {
  return a + b;
};
function main(callback: (content: string) => void) {
  callback("Hello cybersoft");
}

function renderH3(content: string) {
  document.getElementById("result").innerHTML = `
  <h3 class='p-5 text-center bg-dark text-white'>${content}</h3>`;
}
function renderDiv(content: string) {
  document.getElementById("result").innerHTML = `
    <div class='p-5 text-center bg-danger text-white'>${content}
    <i class='fa fa-heart fs-3'></i>
    </div>`;
}
main(renderDiv);

//HOF :higher order function (hàm nhận vào callback và trả về hàm)
//Closure function : hàm nhận vào tham số và trả về hàm

let action: () => (dispatch) => void = (): ((dispatch) => void) => {
  return async (dispatch) => {
    // Code abc
  };
};

type typeAction = ReturnType<typeof action>;
let action2: typeAction = (): ((dispatch) => void) => {
  return async (dispatch) => {
    // Code abc
  };
};

let tinhTong2So: (a: number, b: number) => number = (a: number, b: number) => {
  return a + b;
};

type TypeTong2So = ReturnType<typeof tinhTong2So>;

let arrNumber: number[] = [1, 2, 3, 4, 5];
let arrString: string[] = ["a", "b", "c"];
let arrProd: Product[] = [
  { id: "1", name: "iphone", price: 1000 },
  { id: "2", name: "iphone", price: 1000 },
  { id: "3", name: "iphone", price: 1000 },
];

// type: any,unknow
/*
    any,unknown thì sẽ chấp nhận tất cả các giá trị
    any: tránh lạm dụng,chỉ sử dụng để debug
*/
type ReponseTypeApi = Product[] | string | undefined;
function getApi() {
  return {
    id: 1,
    name: "Product 1",
    showInfo: (): void => {
      console.log("Info product");
    },
  };
}
type typeAPI = ReturnType<typeof getApi>;
class ResApi {
  id: number = 0;
  name: string = "";
  showInfo: () => void;
}
let resApi: unknown = getApi();
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
  arrProduct: Product[] = [];
  add = (newProduct: Product) => {
    this.arrProduct.push(newProduct);
  };
  del = (id: any | number) => {
    this.arrProduct = this.arrProduct.filter((item: Product) => item.id != id);
  };
}
interface Student {
  id: string;
  name: string;
  age: number;
}
class StudentList {
  arrStudent: Student[] = [];
  add = (newStudent: Student) => {
    this.arrStudent.push(newStudent);
  };
  del = (id: any | number) => {
    this.arrStudent = this.arrStudent.filter((item: Student) => item.id != id);
  };
}
class List<TypeParam> {
  arr: TypeParam[] = [];
  add = (item: TypeParam) => {
    this.arr.push(item);
  };
  del = (id: any | number) => {
    this.arr = this.arr.filter((item: TypeParam | any) => item.id != id);
  };
}
let listProd: List<Product> = new List<Product>();
//listProd.add()

let student: [number, string] = [1, "nguyễn văn a"];
