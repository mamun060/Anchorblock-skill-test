import { apiSlice } from "../api/apiSlice";



export const userApi = apiSlice.injectEndpoints({
    tagTypes: ['Users' , 'User'],
    endpoints: (builder)=> ({
        getUsers: builder.query({
            query: "/api/users",
            providesTags: ["Users"]
        }),

        getUser: builder.query({
            query: (userID) => `/api/users/${userID}`,
            providesTags: (result, error, arg )=> [
                {
                    type: "User",
                    id: arg,
                }
            ] 
        }),
    }),
    
})

export const { useGetUsersQuery, useGetUserQuery } = userApi