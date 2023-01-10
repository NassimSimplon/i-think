import { useQuery , useInfiniteQuery } from "react-query"

const useQueriesHook = (stateName, functionName) => {
 
    return useInfiniteQuery(stateName, 
        functionName ,
      {
    getNextPageParam: (_lastPage, pages) => {
      if (pages.length < 4) {
        return pages.length + 1
      } else {
        return undefined
      }
    },
    keepPreviousData: true
  }
    
     
      
     
  
    )

}
export default useQueriesHook 
{/*
,
            cacheTime: 5000, staleTime: 0, refetchOnMount: true, refetchOnWindowFocus: true,
            refetchIntervalInBackground: true //  ,keepPreviousData: true,// enabled: false,
              */}