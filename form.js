var data= new Array();
var count=0;

//nếu dùng getElementsByName phải lấy phần tử đầu tiên của mảng
//let hoten=document.getElementsByName("hoten")[0];
//let tuoi=document.getElementsByName("tuoi")[0];
let hoten= document.getElementById("hoten");
let tuoi= document.getElementById("tuoi");
let mau= document.getElementById("mau");
//button dùng getElementById
let btnadd= document.getElementById("add");
let btncancel= document.getElementById("cancel");
let result= document.getElementById("result");

btnadd.addEventListener("click", function(){
	// lấy giá trị của đối tượng hoten, tuoi, mau
	let oj= new Array(count, hoten.value, tuoi.value, mau.value);
	//thêm giá trị nhập từ form vào mảng data
	data.push(oj);
	// tạo button ở đối tượng result
	let tnode = document.createElement("button");
	//set thuộc tính cho button
	tnode.setAttribute("id", count);//(name, value)
	tnode.setAttribute("class","btn m-1");
	tnode.textContent = hoten.value;
	tnode.style.backgroundColor = mau.value;
	//tạo event khi click vào button 
	tnode.addEventListener("click",function(){
		//tìm mảng chứa giá trị của button trong mảng data
		let id=this.id;//id bằng với giá trị hiện tại
		//tìm hàng chứa count có giá trị bằng của button trong mảng data
		let index=0;//hàng
		for(let i=0; i<data.length;i++)
			//tìm mảng có count=id của button đang click vào
			if(data[i][0]==id){
				index=i;
				break;
			}
			//gán giá trị của các đối tượng trên form = với giá trị của mảng tìm được
			hoten.value= data[index][1];
			tuoi.value= data[index][2];
			mau.value= data[index][3];		
	});	
	//thêm node con vào node cha, node cha = result, node con = tnode
		result.appendChild(tnode);
		//count đếm mảng được thêm vào mảng data
		count++;
});

btncancel.addEventListener("click", function(){
	hoten.value="";
	tuoi.value=0;
	mau.value="";
});