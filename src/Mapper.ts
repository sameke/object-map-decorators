import { IMappingRule } from './IMappingRule';
import { MAPPINGS } from './constants';
import { Type, IndexableClass } from './types';

export class Mapper {
    public static map<T>(source: any, destination: Type, sourceKey: string | Type = null): T {
        if (source == null || destination == null) {
            return null;
        }

        let target = new destination();
        Mapper.mapTo(source, target, sourceKey);
        return target;
    }

    public static mapTo<T extends Object>(source: any, destination: T, sourceKey: string | Function = null): T {
        if (source == null || destination == null) {
            return destination;
        }

        let mappings: IMappingRule[] = (destination as any)[MAPPINGS];

        if (mappings == null) {
            return destination;
        }
        // fillter the mappings to match source key
        mappings = mappings.filter((mr: IMappingRule) => {
            return mr.sourceKey == sourceKey;
        });

        if (mappings == null || mappings.length <= 0) {
            return destination;
        }

        let target = destination as IndexableClass;

        for (let map of mappings) {
            if (map.map == null) {
                target[map.targetKey] = source[map.targetKey];
            } else if (typeof map.map === 'string') {
                target[map.targetKey] = source[map.map];
            } else if (typeof map.map === 'function') {
                target[map.targetKey] = map.map(source);
            }
        }
    }
}