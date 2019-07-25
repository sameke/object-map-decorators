import { MAPPINGS } from './constants';
import { IMappingRule } from './IMappingRule';
import { Type } from './types';

export const MapFrom:
    <TSource>(map?: string | ((obj: TSource) => any), sourceKey?: string | Type) => PropertyDecorator =
    <TSource>(map?: string | ((obj: TSource) => any), sourceKey?: string | Type) => {
        return (target: Object, key: string | symbol) => {
            let mappings: IMappingRule[] = (target as any)[MAPPINGS];
            if (mappings == null) {
                mappings = [];
                (target as any)[MAPPINGS] = mappings;
            }

            mappings.push({
                sourceKey: sourceKey,
                map: map,
                targetKey: key.toString()
            });
        };
    };