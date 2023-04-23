let students = new Array (
	new Array("Boo",22,10),
	new Array("Ngân",19,9),
	new Array("Ánh",19,8),
	new Array("My",20,7.5),
	new Array("Kim Ngân",19,9.5)
);

function fillData (){
	const contentdata =document.getElementById("contentdata");
	let rs ="";
	for (let i=0; i<students.length; i++){// tạo hàng
		if(students[i][1]>20){//index của collumn Tuổi là 1
			rs +="<tr>";
		let temp="<td>"+(i+1)+"</td>";// tạo số thứ tự
		for (let j=0; j<students[i].length;j++){//cột
			temp +="<td>"+students[i][j]+"</td>"//gán vào biến các giá trị theo hàng và cột
		}
		rs +=(temp+"</tr>");//thêm chuỗi giá trị vào biến
		}	
	}
	console.log(rs);//hiện giá tị của biến rs
    contentdata.innerHTML = rs;//gán giá trị của chuỗi vào phần tử contentdata
}


document.addEventListener("DOMContentLoaded", function(){
	fillData();
});