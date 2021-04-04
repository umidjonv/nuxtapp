import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

interface Category
{
    id: number;
    name: string;
}

@Module({
    name:"category",
    stateFactory: true,
    namespaced: true
})


export class CategoryModule  extends VuexModule {
    public category:Category = {
        id:0,
        name:""

    }

    
}

