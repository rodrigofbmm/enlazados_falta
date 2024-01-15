import { GraphQLError } from "graphql";
import { PersonModelType, Persona } from "../db/Person.ts";
import { CharacterAPIType, Characters } from "../type.ts";


export const Query={
    character:async (_:unknown,args:{id:string}):Promise<CharacterAPIType> =>{
        const id= args.id;
        const data = await fetch(`https://rickandmortyapi.com/api/character/${id}`);

        if(data.status !== 200){
            throw new GraphQLError("erroe")
        }
        const json =  await data.json();
        const a:CharacterAPIType ={
            id: json.id,
            name: json.name,
            episode: json.episode,
        }
        return a;
    },
}