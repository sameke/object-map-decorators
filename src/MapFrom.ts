import 'reflect-metadata';
import { MAPPINGS } from './constants';
import { IMappingRule } from './IMappingRule';
import { Type } from './types';

export const MapFrom:
    <TSource>(map?: string | ((obj: TSource) => any), sourceKey?: string | Type) => PropertyDecorator =
    <TSource>(map?: string | ((obj: TSource) => any), sourceKey?: string | Type) => {
        return (target: Object, key: string | symbol) => {
            let mappings: IMappingRule[] = Reflect.getMetadata(MAPPINGS, target.constructor);
            if (mappings == null) {
                mappings = [];
            }

            mappings.push({
                sourceKey: sourceKey,
                map: map,
                targetKey: key.toString()
            });

            Reflect.defineMetadata(MAPPINGS, mappings, target.constructor);
        };
    };