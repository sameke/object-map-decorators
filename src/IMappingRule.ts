export interface IMappingRule {
    map: string | ((obj: any) => any);
    sourceKey?: (() => Function) | string | Function;
}