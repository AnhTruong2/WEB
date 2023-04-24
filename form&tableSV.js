var students= new Array();
var count=0;

//nếu dùng getElementsByName phải lấy phần tử đầu tiên của mảng
//let hoten=document.getElementsByName("hoten")[0];
//let tuoi=document.getElementsByName("tuoi")[0];
let hoten= document.getElementById("hoten");
let tuoi= document.getElementById("tuoi");
let dtb= document.getElementById("dtb");
//button dùng getElementById
let btnadd= document.getElementById("add");
let btncancel= document.getElementById("cancel");
let result= document.getElementById("result");

btnadd.addEventListener("click", function (){
	// lấy giá trị của đối tượng hoten, tuoi, mau
	let oj= new Array(hoten.value, tuoi.value, dtb.value);
	//thêm giá trị nhập từ form vào mảng students
	students.push(oj);
	//gọi table
	const contentdata = document.getElementById("contentdata");
	let rs="";
	//nếu i<chiều dài mảng students (2 chiều) thì tạo 1 hàng
	for (let i=0; i<students.length; i++){
		rs +="<tr>";//tạo hàng
		let temp="<td>"+(i+1)+"</td>";//tạo số thứ tự
		//nếu j< chiều dài của mảng (1 chiều) tại hàng i thì gán giá trị cột j, hàng i vào biến temp
		for (let j=0; j<students[i].length;j++){
			temp +="<td>"+students[i][j]+"</td>"
		}
		rs +=(temp+"</tr>");//thêm chuỗi giá trị vào biến rs
		}	
	console.log(rs);//hiện giá tị của biến rs
    contentdata.innerHTML = rs;//gán giá trị của chuỗi vào phần tử contentdata
});
	

btncancel.addEventListener("click", function(){
	hoten.value="";
	tuoi.value="";
	dtb.value="";
});