import React from "react";
import Header from "./components/Header.jsx";
import Categories from "./components/Categories.jsx";
import SearchBar from "./components/SearchBar.jsx";
import Product from "./components/Product.jsx";
import NoResults from "./components/NoResults.jsx";
import LoadingSVG from "./components/LoadingSVG.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      category: "products",
      products: [],
      filteredProducts: [],
    };
    this.getProducts = this.getProducts.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.category !== this.state.category) {
      this.getProducts();
    }
  }

  getProducts() {
    this.setState({ products: [], filteredProducts: [], searchValue: "" });
    const base =
      this.state.category === "products"
        ? "https://fakestoreapi.com/products"
        : "https://fakestoreapi.com/products/category/" +
          encodeURIComponent(this.state.category);

    fetch(base)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          products: data,
        });
      });
  }

  handleSearchChange(event) {
    this.setState({
      searchValue: event.target.value,
      filteredProducts: this.state.products.filter((product) =>
        (product.title + " " + product.description)
          .toLowerCase()
          .includes(event.target.value.toLowerCase())
      ),
    });
  }

  handleCategoryChange(event) {
    this.setState({ category: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const productsLength = this.state.products.length;
    const filteredProductsLength = this.state.filteredProducts.length;

    return (
      <>
        <Header />
        {productsLength > 0 && (
          <form onSubmit={this.handleSubmit}>
            <SearchBar
              onChange={this.handleSearchChange}
              value={this.state.searchValue}
              category={this.state.category}
              showClear={Boolean(this.state.searchValue)}
              onClear={() => this.setState({ searchValue: "" })}
            />
            <Categories
              onChange={this.handleCategoryChange}
              value={this.state.category}
            />
          </form>
        )}

        {!productsLength && <LoadingSVG />}

        {filteredProductsLength > 0 && this.state.searchValue.length > 0 && (
          <h3 style={{ textAlign: "center" }}>
            {filteredProductsLength}{" "}
            {filteredProductsLength > 1 ? "Results" : "Result"}
          </h3>
        )}

        {filteredProductsLength === 0 &&
        this.state.searchValue.length !== 0 &&
        productsLength > 1 ? (
          <NoResults />
        ) : (
          <div className="products-container">
            {this.state.searchValue
              ? this.state.filteredProducts.map((product, index) => (
                  <Product
                    key={index}
                    name={product.title}
                    price={"$" + product.price}
                    image={product.image}
                    description={product.description}
                    rating={product.rating}
                  />
                ))
              : this.state.products.map((product, index) => (
                  <Product
                    key={index}
                    name={product.title}
                    price={"$" + product.price}
                    image={product.image}
                    description={product.description}
                    rating={product.rating}
                  />
                ))}
          </div>
        )}
        {productsLength > 0 && <Footer />}
      </>
    );
  }
}

export default App;
