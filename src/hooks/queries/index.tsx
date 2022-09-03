import { useQuery } from "@tanstack/react-query"
import { getAwards } from "../../services/api"

export const useGetAwards = () => {
    return useQuery(['awards'],getAwards)
}


