import { MapFrom } from '../src/MapFrom';
import { assert, expect } from 'chai';
import { Foo } from './types/Foo';
import { Mapper } from '../src/Mapper';
import { Bar } from './types/Bar';

describe('MapFrom', () => {
    it('should map default (no source key) properties', () => {
        let foo = new Foo();
        foo.lastName = 'Archer';
        foo.firstName = 'Sterling';
        foo.email = 'archer@isis.com';
        foo.userId = 'sarcher';

        let bar: Bar = Mapper.map(foo, Bar);

        expect(bar.first).to.equal(foo.firstName);
        expect(bar.last).to.equal(foo.lastName);
        expect(bar.username).to.equal(foo.userId);
        expect(bar.email).to.equal(foo.email);
    });
});

// class Test {
//     @MapFrom()
//     public name!: string;

//     @MapFrom('username')
//     public username!: string;

//     @MapFrom('username', () => SubTest)
//     public email!: string;

//     @MapFrom((t: SubTest) => t.foo, () => SubTest)
//     public bar!: string;
// }

// class SubTest {
//     public foo!: string;
// }