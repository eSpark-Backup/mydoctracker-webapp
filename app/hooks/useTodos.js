import { useQuery, useMutation, useQueryClient } from "react-query";
import { request } from "../utils/axios-utils";


const fetchTodos = () => {
    return request({ url: "/todos" });
  };

export const useTodosData = () => {
    return useQuery("getall-todos", fetchTodos);
  };
  
  