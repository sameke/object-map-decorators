import { assert, expect } from 'chai';
import { Foo } from './types/Foo';
import { Mapper } from '../src/Mapper';
import { Bar } from './types/Bar';
import { Test } from './types/Test';
import { Parent } from './types/Parent';

describe('Mapper', () => {
    describe('mapTo', () => {
        it('should map default (no source key) properties', () => {
            let foo = new Foo();
            foo.lastName = 'Archer';
            foo.firstName = 'Sterling';
            foo.email = 'archer@isis.com';
            foo.userId = 'sarcher';

            let bar: Bar = new Bar();
            Mapper.mapTo<Bar>(foo, bar);

            expect(bar.first).to.equal(foo.firstName);
            expect(bar.last).to.equal(foo.lastName);
            expect(bar.username).to.equal(foo.userId);
            expect(bar.email).to.equal(foo.email);
        });
    });

    describe('map', () => {
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

        it('should map sub objects', () => {
            let t = new Test();
            t.idk.lastName = 'Archer';
            t.idk.firstName = 'Sterling';
            t.idk.email = 'archer@isis.com';
            t.idk.userId = 'sarcher';

            let parent: Parent = Mapper.map(t, Parent);

            expect(parent.littleBar.first).to.equal(t.idk.firstName);
            expect(parent.littleBar.last).to.equal(t.idk.lastName);
            expect(parent.littleBar.username).to.equal(t.idk.userId);
            expect(parent.littleBar.email).to.equal(t.idk.email);

        });
    });
});