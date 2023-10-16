import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform{
    id:number;
    name:string;
    slug:string;
}
export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms:{platform:Platform}[]
    metacritic:number;
  }
  
  interface FetchGamesResponse {
    count: number;
    results: Game[];
  }

  const useGame=()=>{
    const [games, setGames] = useState<Game[]>([]);
    const [err, setErr] = useState("");
    const [isLoading,setLoading]=useState(false);


    setLoading(true);
    useEffect(() => {
        const controller= new AbortController();
        apiClient
        .get<FetchGamesResponse>("/games",{signal:controller.signal})
        .then((res) => {
          setGames(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
            if (err instanceof CanceledError ) return;
            setErr(err.message)
        });
    return ()=> controller.abort();
  }, []);
    return { games, err, isLoading };
  }

  export default useGame;