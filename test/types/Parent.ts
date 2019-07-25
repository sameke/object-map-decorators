import { Mapper } from "../../src/Mapper";
import { MapFrom } from '../../src/MapFrom';
import { Bar } from "./Bar";
import { Test } from './Test';

export class Parent {
    @MapFrom((t: Test) => Mapper.map(t.idk, Bar))
    public littleBar: Bar;
}