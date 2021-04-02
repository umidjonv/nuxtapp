class Category{
    public id: number = 0;
    public name: string = "default";

    constructor(init?:Category)
    {
        Object.assign(this, init)
    }
}