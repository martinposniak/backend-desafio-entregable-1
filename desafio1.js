class ProductManager {
    constructor() {
      this.products = [];
    }
  
    addProduct = (title, description, price, thumbnail, code, stock) => {
      if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.log("Todos los campos son obligatorios, por favor intentelo nuevamente");
        return;
      }
      const codigoRepetido = this.products.some(
        (product) => product.code === code
      );
      if (codigoRepetido) {
        console.log("el codigo de este producto ya existe, por favor intente con otro");
        return;
      }
  
      let id = 0;
      if (this.products.length === 0) {
        id = 1;
      } else {
        id = this.products.slice(-1)[0].id + 1;
      }
      this.products.push({
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
        id,
      });
    };
    getProducts = () => {
      return this.products;
    };
    getProductById = (id) => {
      const resultado = this.products.find((element) => {
        return element.id === id;
      });
      if (!resultado) {
        return "No existe el producto que estas buscando";
      }
      return resultado;
    };
  }
  
  
  const productManager = new ProductManager();
  productManager.addProduct("Raqueta Babolat Pure Stike", "Su nueva raqueta de tenis Babolat Pure Strike 18x20 viene encordada con tripa sintética blanca Babolat de calibre 16 a una tensión de rango medio sin costo adicional.", 200, "acá iría la foto", 1231, 100, 1);
  productManager.addProduct("Raqueta Babolat Pure Aero Drive", "Su nueva raqueta de tenis Babolat Pure Aero Drive 18x20 viene encordada con tripa sintética blanca Babolat de calibre 16 a una tensión de rango medio sin costo adicional.", 200, "acá iría la foto", 1232, 100, 2);
  productManager.addProduct("Raqueta Babolat Pure Control", "Su nueva raqueta de tenis Babolat Pure Control 18x20 viene encordada con tripa sintética blanca Babolat de calibre 16 a una tensión de rango medio sin costo adicional.", 200, "acá iría la foto", 1233, 100, 3);
  productManager.addProduct("Raqueta Babolat Boost USA", "Su nueva raqueta de tenis Babolat Boost USA 18x20 viene encordada con tripa sintética blanca Babolat de calibre 16 a una tensión de rango medio sin costo adicional.", 200, "acá iría la foto", 1234, 100, 4);

  
  console.log("respuesta a getproducts", productManager.getProducts());
  console.log("respuesta a getproductbyId1", productManager.getProductById(1));
  console.log("respuesta a getproductbyId2", productManager.getProductById(2));
  console.log("respuesta a getproductbyId2", productManager.getProductById(3));
  console.log("respuesta a getproductbyId2", productManager.getProductById(4));