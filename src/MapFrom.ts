import 'reflect-metadata';
import { MAPPINGS } from './constants';
import { IMappingRule } from './IMappingRule';

export const MapFrom: (map?: string | ((...args: any[]) => any), sourceType?: () => { new(...args: any[]): any }) => PropertyDecorator = (map?: string | ((...args: any[]) => any), sourceType?: () => { new(...args: any[]): any }) => {
    return (target: Object, key: string | symbol) => {
        let mappings: IMappingRule[] = Reflect.getMetadata(MAPPINGS, target.constructor);
        if (mappings == null) {
            mappings = [];
        }

        mappings.push({

        });

        Reflect.defineMetadata(MAPPINGS, mappings, target.constructor);
    };
};