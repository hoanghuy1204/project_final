var productList = [];

function addProduct() {
	// Lấy giá trị từ các input
	var productName = document.getElementById("product-name").value;
	var productPrice = document.getElementById("product-price").value;

	// Tạo đối tượng sản phẩm mới
	var product = {
		name: productName,
		price: productPrice
	};

	// Thêm sản phẩm vào mảng
	productList.push(product);

	// Hiển thị danh sách sản phẩm
	displayProducts();
}

function displayProducts() {
	// Lấy vùng hiển thị danh sách sản phẩm
	var productDisplay = document.getElementById("product-list");

	// Xóa nội dung hiện tại của vùng hiển thị
	productDisplay.innerHTML = "";

	// Duyệt qua danh sách sản phẩm và thêm vào vùng hiển thị
	for (var i = 0; i < productList.length; i++) {
		var product = productList[i];
		var productItem = document.createElement("div");
		productItem.innerHTML = "<h3>" + product.name + "</h3><p>Price: $" + product.price + "</p>";
		productDisplay.appendChild(productItem);
	}
}
