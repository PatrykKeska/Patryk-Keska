import React, { Component } from 'react';
import { SizePickerProps, State } from './types';
import { setProductSize } from '../../../../store/features/product-details/product-details-slice';
import './styles.scss';
import { HooksAccessComponent } from '../../../common/components/HooksAccessComponent';

class SizePicker extends Component<SizePickerProps, State> {
  state: State = {
    checked: false,
  };
  handleChangeSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { dispatch } = this.props;
    dispatch(setProductSize(e.target.value));
  };

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch(setProductSize(''));
  }

  render() {
    const { attributes, selector } = this.props;
    const { checked } = this.state;
    return (
      <section className='size-picker'>
        <h3 className='size-picker__name'>size:</h3>
        <div className='size-picker__select-options'>
          {attributes.map((size) => (
            <div key={size}>
              <label
                htmlFor={size}
                className={`size-picker__select-options__label ${
                  size === selector.size ? 'picked-size' : ''
                }`}
              >
                <span className='size-picker__select-options__label__span'>
                  {size}
                </span>
              </label>
              <input
                onChange={this.handleChangeSize}
                checked={checked}
                name={size}
                id={size}
                className='size-picker__select-options__input'
                type='radio'
                value={size}
              />
            </div>
          ))}
        </div>
      </section>
    );
  }
}

const SizePickerComponent = HooksAccessComponent(SizePicker);
export { SizePickerComponent };
