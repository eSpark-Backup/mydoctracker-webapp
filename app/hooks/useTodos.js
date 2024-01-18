import { useQuery, useMutation, useQueryClient } from "react-query";
import { request } from "../utils/axios-utils";


const fetchTodos = () => {
    return request({ url: "http://universities.hipolabs.com/search?country=United+States" });
  };

export const useTodosData = () => {
    return useQuery("getall-todos", fetchTodos);
  };


//   import { API_URL_TIMER, THREE_MINUTES } from "../../helpers/constants"
// import { useQuery } from "@tanstack/react-query"
// import { T_BackendResponse } from "custom-validator"
// import Cookies from "js-cookie"
// import { useEffect, useState } from "react"
// import { useGetCategoriesQuery } from '../services/categories'

// export async function useLoginApi(
//   userName,
//   password,
//   isRemeber
// ) {
//   const token = Cookies.get("tfl")
//   const res = await fetch(
//     `${API_URL_TIMER}/count-machine-class?locationId=${locationId}&machineClassId=${machineClassId}`,
//     {
//       method: "GET",
//       headers: {
//         "content-type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     }
//   )
//   return (await res.json())
// }

// function useLoginMutation({username, password, agreement}) {
// //   const [country, setCountry] = useState("")
// //   const [machineClassIds, setMachineClassIds] = useState([])

//     const query = useLoginApi({userName:username, password:password, isRemeber: agreement})

//     return query;
// //   useEffect(() => {
// //     if (locationId && machineClassIds.length > 0) {
// //       query.refetch()
// //     }
// //   }, [locationId, machineClassIds])

// //   return { ...query, setLocationId, setMachineClassIds }
// }
// export default useLoginMutation;
