import products from "./Items";

function Variable() {
  let content;
  let isLoggedIn = true;

  if (isLoggedIn) {
    content = (
      <div>
        <p>Variable.js is true</p>
        <ul>
          {products.map((products) => (
            <li key={products.id}>
              {products.title} Price: {products.price}
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    content = (
      <div>
        <p>Variable.js is false</p>
      </div>
    );
  }
  return <div>{content}</div>;
}

export default Variable;
