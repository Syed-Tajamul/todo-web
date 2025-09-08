
/* eslint-disable */
// @ts-nocheck
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Todos } from ".";

const useQueryGetTodos = () => useQuery({
    queryKey: ["todos"],
    queryFn: () => Todos.getAllTodos(),
});

const useMutationAddTodo = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (todo) => Todos.addTodos(todo),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["todos"],
            });
        }
    });
};

export default {
    useQueryGetTodos,
    useMutationAddTodo,
};
