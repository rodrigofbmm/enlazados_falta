import { GraphQLError } from "graphql";
import { EpisodeAPIType } from "../type.ts";
import { CharacterAPIType } from "../type.ts";

export const characters = {
  characters: async (parent: EpisodeAPIType): Promise<CharacterAPIType[]> => {
    const Characters = parent.characters;
    const characterapi = await Promise.all(
      Characters.map(async (url) => {
        const data = await fetch(url);
        if (data.status !== 200) throw new GraphQLError("error");
        return await data.json();
      }),
    );
    return characterapi;
  },
};
