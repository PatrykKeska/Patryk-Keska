import { Component } from 'react';
import './styles.scss';
import { Props, State } from './types/types';
import clsx from 'clsx';
import { ProductShopCartButton } from '../Product-shop-cart-button';

class Product extends Component<Props, State> {
  state = {
    isActive: false,
  };
  
  Capitalize(str: number) {
    return str.toString().charAt(0).toUpperCase() + str.toString().slice(1);
  }
  handleActive = (enter: boolean) => {
    if (enter) {
      this.setState({
        isActive: true,
      });
    } else {
      this.setState({
        isActive: false,
      });
    }
  };
  render() {
    const { name, id, currency, prices, inStock, gallery, category } =
      this.props;
    const { isActive } = this.state;
    return (
      <section
        onMouseEnter={() => this.handleActive(true)}
        onMouseLeave={() => this.handleActive(false)}
        className={clsx(
          'product',
          !inStock && 'product--out-of-stock',
          isActive && 'product-is-active',
        )}
      >
        <img
          className="product__img"
          src={gallery[0]}
          alt={`this is product: ${name}`}
        />
        <h3 className="product__title">{name}</h3>
        <p className="product__currency">
          <span className="product__currency__span-symbol">{currency}</span>
          <span className="product__currency__span-first">
            {prices.toString()[0]}
          </span>
          <span className="product__currency__span-rest">
            {prices.toString().slice(1, prices.toString().length)}
          </span>
        </p>
        {isActive && (
          <ProductShopCartButton
            className="product__basket-button"
            productID={id}
            category={category}
          />
        )}
      </section>

    );
  }
}

export { Product };
