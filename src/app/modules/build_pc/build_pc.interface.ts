import { Model } from 'mongoose';

export type IBuild_PC = {
  processor: string;
  motherboard: string;
  ram: string;
  storage: string;
  graphics_card: string;
  power_supply: string;
  casing: string;
  monitor: string;
  keyboard: string;
  mouse: string;
  headphones: string;
  ups: string;
};

export type Build_PCModel = Model<IBuild_PC, Record<string, unknown>>;