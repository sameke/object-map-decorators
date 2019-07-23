import { Type } from "./types";

export interface IMappingRule {
    map: string | ((obj: any) => any);
    sourceKey?: string | Type;
    targetKey: string;
}