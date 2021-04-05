import { Module, VuexModule, Mutation, MutationAction, Action } from 'vuex-module-decorators'
import  get  from 'axios'

interface Category
{
    id: number;
    name: string;
    parentId: number;
}

@Module({
    name:"categories",
    stateFactory: true,
    namespaced: true
})


export default class CategoryModule  extends VuexModule {
    public categories:Category[] = [{
        id:0,
        name:"",
        parentId:0
    }];

    @Mutation
    Childs(parentId:number):Category[]{
        return this.categories.filter(cat =>cat.parentId == parentId);
    }

    @Mutation
    UpdateCategories(categories: Category[])
    {
        this.categories = categories;
    }

    @Action({commit:'UpdateCategories'})
    async fetchCategories(){
        return get('http://localhost:10001/cats')
    }

    


}


