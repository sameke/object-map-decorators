# object-map-decorators
allows creating simple object maps using decorators


@MapFrom()  
@MapFrom('test')  
@MapFrom('test', () => Foo)  
@MapFrom((f: Foo) => f.test, () => Foo)  
