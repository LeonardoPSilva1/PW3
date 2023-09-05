document.addEventListener("DOMContentLoaded", () => {
    const productListElement = document.getElementById("product-list");
  
    fetch("http://localhost/Ajax_API_FETCH/backEnd/controller/produtoController.php")
      .then(response => response.json())
      .then(products => {
        products.forEach(product => {
          const productElement = document.createElement("div");
          productElement.innerHTML = `
            <h3>${product.nome}</h3>
            <p>Preço: $${product.preco}</p>
          `;
          productListElement.appendChild(productElement);
        });
      })
      .catch(error => {
        console.error("Error fetching products:", error);
      });
  });
  