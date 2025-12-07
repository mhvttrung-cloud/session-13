
//Bai 1

//Thực hiện tạo mảng và 
// sử dụng các phương thức thêm phần tử vào mảng các phần tử ngẫu nhiên 
// làm sao cho mảng đủ 10 phần tử, sau đó hiển thị mảng ra màn hình
let inc = [
    "a", "b", 6, 1, "p", "o"
];
console.log(inc);
inc.push(["e", 2, 3, 4, 5]);

//Bài 2

//Tạo mảng có sẵn với các phần tử số. 
// Cho người dùng nhập vào một số bất kỳ, sau đó tiến hành kiểm tra:

//Nếu số đó có trong mảng cho sẵn thì alert(“Bingo”)
//Nếu số đó không có trong mảng cho sẵn thì alert(“Chúc bạn may mắn lần sau”)

let int = +prompt("Hãy nhập số bạn cho là có trong dãy số")

let randum = [
    1, 2, 3, 7, 8, 12, 34,
];

if (randum.includes(int)){
    alert("Bingooooo .... !");
} else {
    alert("Chúc bạn may mắn lần sau");
}

//Bài 3
//Hãy thực hiện cho người dùng nhập vào dãy số bất kỳ. 
// Sử dụng split() để chuyển đổi kiểu dữ liệu từ string sang kiểu array. 
// Tiến hành đảo ngược các phần tử trong mảng

let input = prompt("Hãy nhập một dãy ký tự mà bạn muốn");
let arr = input.split("").reverse();//Đổi từ dạng nhập String > Array > Đảo ngược
console.log(input);
alert(arr);


// Bài 4
//Hãy thực hiện cho người dùng nhập vào dãy số bất kỳ. Sử dụng split() để chuyển đổi kiểu dữ liệu từ string sang kiểu array. 
// Tiến hành duyệt các phần tử và tìm ra phần tử có giá trị lớn nhất trong mảng và thực hiện in ra màn hình bằng alert()

let it = +prompt("Hãy nhập một dãy số bất kỳ nào để tìm giá trị lớn nhất");
let arrr = int.split("").map(Number);
let max = arrr[0];
    for (let i = 1;i < arrr.length; i++){
        if (arrr[i] > max ){
            max = arrr[i];  }
    };
    console.log(int);
    alert(max);


//Bài 5
//Bài toán yêu cầu khai báo mảng số nguyên 10 đến 20 phần tử ngẫu nhiên, thực hiện:
//Tính tổng các số lẻ và hiển thị ra màn hình bằng alert()
//Tính tổng các số chẵn và hiển thị ra màn hình alert()
    
let number = [
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
];
let suma = 0;
let sumb = 0;

for (let i = 0; i < number.length; i++){
    if (number[i] % 2 === 0){
        suma = suma + number[i];
    } else {
        sumb = sumb + number[i];
    }
}; alert("Tổng của số chẵn: " + suma);
alert("Tổng của số lẻ" + sumb);

//Bài 6

//Bài toán khai báo mảng số nguyên có sẵn các phần tử từ 10 đến 20 phần tử, 
// thực hiện nhập vào một số nguyên để kiểm tra (k), 
// thực hiện đếm số lần xuất hiện của k trong mảng. và hiển thị ra màn hình

let ber = [
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
];
//Thực hiện kiểm tra chẵn lẻ
let k = prompt("Nhập một số nguyên từ 10 đến 20 để kiểm tra");
    if (k % 2 === 0) {
        alert("Số chẵn");
    } else {
        alert("Số lẻ");
    }
//Thực hiện đếm số lần xuất hiện trong chuỗi
let count = 0
for (let i = 0; i < number.length; i++){
    if (number[i] === k){
        count++;
    }
};
 alert(`${k} Xuất hiện ${count} lần trong dãy số`);