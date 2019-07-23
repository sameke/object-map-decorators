// export abstract class Mapped {
//     public map: (source: object) => void;
// }

export const Mapped: () => ClassDecorator = () => {
    return (target: Function) => {

    };
};

export type Type = typeof Function;

export class Mapper {
    public static map(source: any, destination: Type): any {
        return null;
    }

    public static mapTo<T>(source: any, destination: T) {

    }
}