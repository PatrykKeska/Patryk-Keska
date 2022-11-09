import { SliceDispatch } from '../../../../store';

export interface State {
  checked: boolean;
}

export interface ColorPickerProps {
  attributes?: Array<string>;
  dispatch?: SliceDispatch;
  selector?: any;
}