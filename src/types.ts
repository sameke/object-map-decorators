export type Type = { new(): any };
export type IndexableClass = { new(): any, [key: string]: any };