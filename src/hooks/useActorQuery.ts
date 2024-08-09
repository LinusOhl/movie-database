import { useQuery } from "@tanstack/react-query";
import { getActorById } from "../services/TMDBAPI";

export const useActorQuery = (actorId: number) => {
  return useQuery({
    queryKey: ["actor", { actorId }],
    queryFn: () => getActorById(actorId),
  });
};
