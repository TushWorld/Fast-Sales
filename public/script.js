// to fix the productId into the hidden input value(so we can acces it from there)
function updateItemToDelete(productId) {
  document.getElementById("deleteId").value = productId;
}

// to fix the productId into the hidden input value(so we can acces it from there)
function updateItemToEdit(productId) {
  document.getElementById("editId").value = productId;
}
async function updateItem() {
  const detailsArray = document.getElementsByClassName("edit");

  const newObject = {
    name: detailsArray[0].value,
    img: detailsArray[1].value,
    price: detailsArray[2].value,
    quantity: detailsArray[3].value,
  };

  console.log(detailsArray);

  const productId = document.getElementById("editId").value;

  console.log(productId);

  const resp = await fetch(`http://localhost:5000/product/${productId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newObject),
  });

  const data = await resp.json();

  if (resp.status === 200) {
    location.reload();
  } else {
    alert(data.message);
  }
}
// this is to pass the method of the particulaer item to delete
async function deleteItem() {
  const productId = document.getElementById("deleteId").value;

  const resp = await fetch(`http://localhost:5000/product/${productId}`, {
    method: "DELETE",
  });

  const data = await resp.json();

  if (resp.status === 200) {
    location.reload();
  } else {
    alert(data.message);
  }
}

// to specify the items value to ADD and pass to the routes
async function addItem() {
  const detailsArray = document.getElementsByClassName("addit");

  const newObject = {
    name: detailsArray[0].value,
    img: detailsArray[1].value,
    price: detailsArray[2].value,
    quantity: detailsArray[3].value,
  };

  console.log(detailsArray);

  const resp = await fetch(`http://localhost:5000/product`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newObject),
  });

  const data = await resp.json();

  if (resp.status === 200) {
    location.reload();
  } else {
    alert(data.message);
  }
}
