import { Model } from 'mongoose';

import { Imac } from './imac.model';
import { IGlobalProducts } from '../globalProducts.interface';

export type Imac = {

  //interface for imac
  display: string;
  processor: string;
  memory: string;
  storage: string;
  graphics: string;
  ram: string,
  operating_system: string,
  keyboard:string,
  mouse:string,
  external_ports:string
}

export type IImac = IGlobalProducts & Imac

export type imacModel = Model<IImac, Record<string, unknown>>;