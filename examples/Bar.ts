import { MapFrom } from 'src/MapFrom';
import { Foo } from './Foo';
import { Mapped } from '../src/Mapper';

@Mapped()
export class Bar {
    @MapFrom('firstName')
    public first: string;

    @MapFrom((f: Foo) => f.lastName)
    public last: string;

    @MapFrom((f: Foo) => f.userId, Foo)
    public username: string;

    @MapFrom()
    public email: string;
}