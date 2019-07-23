import { MapFrom } from '../../src/MapFrom';
import { Foo } from './Foo';
import { Mapper } from '../../src/Mapper';

export class Bar {
    constructor() {
        console.log('c called');
    }

    @MapFrom('firstName')
    public first: string;

    @MapFrom((f: Foo) => f.lastName)
    public last: string;

    @MapFrom((f: Foo) => f.userId, Foo)
    @MapFrom('userId')
    public username: string;

    @MapFrom()
    public email: string;
}