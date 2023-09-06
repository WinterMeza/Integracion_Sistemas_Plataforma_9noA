import { useEffect, useState } from "react";
const initialProductState = {
  name: "",
  code_erp: 0,
  tipo_item: "",
  tipo_envase: "",
  liquido_coberturas: "",
  unidades_cajas: 0,
  especie: "",
  peso_neto: 0,
  peso_drenado: 0,
};
const initialMovementState = { type: "Compra", quantity: 0 };

const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function Home() {
  const [selectedProductId, setSelectedProductId] = useState();
  const [product, setProduct] = useState(initialProductState);
  const [movement, setMovement] = useState(initialMovementState);
  const [products, setProducts] = useState([]);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    const inputName = e.target.name;
    setProduct({
      ...product,
      [inputName]: inputValue,
    });
  };
  const handleMovementChange = (e) => {
    const inputValue = e.target.value;
    setMovement({
      ...movement,
      quantity: +inputValue,
    });
  };

  const handleSelectType = (type) => {
    console.log({ type });
    setMovement({ ...movement, type });
  };

  const handleCreateProduct = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${baseUrl}/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
      const data = await res.json();
      setProduct(initialProductState);
      console.log({ data });
      const newProducts = [data.product, ...products];
      setProducts(newProducts);
    } catch (error) {
      console.log({ error });
    }
  };

  const handleCreateMovement = async (e) => {
    try {
      const res = await fetch(
        `${baseUrl}/products/movement/${selectedProductId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(movement),
        }
      );
      const data = await res.json();
      console.log({ data });
      setProduct(initialMovementState);
      setSelectedProductId(null);
      fetchProducts();
    } catch (error) {
      console.log({ error });
    }
  };

  const fetchProducts = () => {
    fetch(`${baseUrl}/products`)
      .then((res) => res.json())
      .then(({ products }) => {
        setProducts(products);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log({ products });

  return (
    <>
      <div className="container df jcsb">
        <div className="df fdc">
          <h2 style={{ margin: "0.3rem" }}>
            <u>Crear nuevo producto</u>
          </h2>
          <form>
            <h4> Nombre: </h4>
            <input
              type="text"
              name="name"
              className="onone"
              value={product.name}
              onChange={handleChange}
            />
            <h4> Código ERP: </h4>
            <input
              type="number"
              name="code_erp"
              className="onone"
              value={product.code_erp}
              onChange={handleChange}
            />
            <h4> Tipo de item: </h4>
            <input
              type="text"
              name="tipo_item"
              className="onone"
              value={product.tipo_item}
              onChange={handleChange}
            />
            <h4> Tipo de envase: </h4>
            <input
              type="text"
              name="tipo_envase"
              className="onone"
              value={product.tipo_envase}
              onChange={handleChange}
            />
            <h4> Liquido de coberturas: </h4>
            <input
              type="text"
              name="liquido_coberturas"
              className="onone"
              value={product.liquido_coberturas}
              onChange={handleChange}
            />
            <h4> Unidades en caja: </h4>
            <input
              type="number"
              name="unidades_cajas"
              className="onone"
              value={product.unidades_cajas}
              onChange={handleChange}
            />
            <h4> Especie: </h4>
            <input
              type="text"
              name="especie"
              className="onone"
              value={product.especie}
              onChange={handleChange}
            />
            <h4> Peso neto: </h4>
            <input
              type="number"
              name="peso_neto"
              className="onone"
              value={product.peso_neto}
              onChange={handleChange}
            />
            <h4> Peso drenado: </h4>
            <input
              type="number"
              name="peso_drenado"
              className="onone"
              value={product.peso_drenado}
              onChange={handleChange}
            />
            <button onClick={handleCreateProduct} className="cursorp">
              Crear producto
            </button>
          </form>
        </div>
        <div className="products-container">
          {products.map(({ _id, name, peso_neto, peso_drenado }) => (
            <div
              onClick={() => setSelectedProductId(_id)}
              className="shadow df aic jcsb p5 mb5 br5"
              style={{
                backgroundColor:
                  selectedProductId === _id ? "lightblue" : "white",
                width: "100%",
              }}
              key={_id}
            >
              <span>{name}</span>
              <div className="df aic">
                <div className="df fdc mr5">
                  <span>Peso neto: {peso_neto}</span>
                  <span>P. drenado: {peso_drenado}</span>
                </div>
                <i
                  className="fas fa-trash cursorp cred"
                  onClick={() => {
                    fetch(`${baseUrl}/products/${_id}`, { method: "DELETE" })
                      .then((res) => res.json())
                      .then((data) => {
                        console.log({ data });
                      });
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>
        {`
          form {
            display: flex;
            flex-direction: column;
            width: 20rem;
            margin: 0 auto;
          }

          .shadow {
            box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
          }

          h1 {
            text-align: center;
          }

          .products-container {
            overflow: hidden;
            overflow-y: auto;
            max-height: 20rem;
            padding: 0.5rem;
            width: 100%;
          }

          .container {
            background-color: white;
            width: 50rem;
            margin: 0 auto;
            margin-top: 5rem;
            border-radius: 0.5rem;
            padding: 1rem;
          }
        `}
      </style>
    </>
  );
}
