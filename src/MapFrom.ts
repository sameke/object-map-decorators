import 'reflect-metadata';
import { MAPPINGS } from './constants';
import { IMappingRule } from './IMappingRule';

export const MapFrom:
    <TSource>(map?: string | ((obj: TSource) => any), sourceKey?: (() => Function) | string | Function) => PropertyDecorator =
    <TSource>(map?: string | ((obj: TSource) => any), sourceKey?: (() => Function) | string | Function) => {
        return (target: Object, key: string | symbol) => {
            let mappings: IMappingRule[] = Reflect.getMetadata(MAPPINGS, target.constructor);
            if (mappings == null) {
                mappings = [];
            }

            mappings.push({
                sourceKey: sourceKey,
                map: map
            });

            Reflect.defineMetadata(MAPPINGS, mappings, target.constructor);
        };
    };