import { MapFrom } from "src/MapFrom";

class Test {
    @MapFrom()
    public name!: string;

    @MapFrom('username')
    public username!: string;

    @MapFrom('username', () => SubTest)
    public email!: string;

    @MapFrom((t: SubTest) => t.foo)
    public bar!: string;
}

class SubTest {
    public foo!: string;
}