import {SerializableClassInterface} from '../serializable/serializable.class.interface';
import {DataJSONInterface} from './data.json.interface';

export interface DataInterface extends SerializableClassInterface {
  setValue(value: number | string): void;

  getValue(): number | string | boolean | string[];

  getDisplayValue(): number | string | boolean | string[];

  getType(): string;

  getUnit(): string;

  getDisplayUnit(): string;

  getDisplayType(): string;

  getUnitSystem(): UnitSystem;

  toJSON(): DataJSONInterface;
}

export enum UnitSystem {
  Metric,
  Imperial
}
