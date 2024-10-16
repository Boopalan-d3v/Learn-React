import { useQuery, useMutation, useQueryClient} from "@tanstack/react-query"
import customFetch from "./utils"

export const useFetchTasks = () => {
    const {isLoading, data, error, isError} = useQuery({
        queryKey:['tasks'], 
        queryFn: async() => {
          const {data} = await customFetch.get('/')
          return data
        }
    })
  return { isLoading, data, isError}    
}

export const useCreateTask = () => {

}

export const useEditTask = () => {
    const queryClient = useQueryClient()
    const {mutate:editTask} = useMutation({
        mutationFn: ({taskId, isDone}) => {
            return customFetch.patch(`/${taskId}`, {isDone})
        },
        onSuccess:() => {
            queryClient.invalidateQueries({queryKey: ['tasks']})
        },
    })
    return { editTask }
}

export const useDeleteTask = () => {
    const queryClient = useQueryClient()
    const {mutate:deleteTask, isLoading:deleteTaskLoading} = useMutation({
        mutationFn:(taskId) => {
          return customFetch.delete(`/${taskId}`)
        },
        onSuccess:() => {
          toast.success("task deleted")
          queryClient.invalidateQueries({queryKey:['tasks']})
        }
    })
    return { deleteTask, deleteTaskLoading}
}