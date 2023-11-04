import { apiSlice } from "../api/apiSlice";
import { userLogin } from "./authSlice";


export const authApi = apiSlice.injectEndpoints({
    tagTypes: [],
    endpoints:(builder) => ({
        register: builder.mutation({
            query: (data) => ({
                url: "/api/users",
                method: "POST",
                body: data
            }),
            async onQueryStarted(arg, {queryFulfilled, dispatch}){
                try {
                    const getuserData = await queryFulfilled;
                    localStorage.setItem(
                        "auth",
                        JSON.stringify({
                            accessToken: getuserData.data.accessToken,
                            user: getuserData.data.user
                        })
                    );

                    dispatch(
                        userLogin({
                            accessToken: getuserData.data.accessToken,
                            user: getuserData.data.user
                        })
                    );

                } catch (error) {
                    console.log(error);
                }
            }
             
        }),

        login: builder.mutation({
            query: (data) => ({
                url: "/api/login",
                method: "POST",
                body: data
            }),

            async onQueryStarted( arg, {queryFulfilled , dispatch}){
                try {
                    const getuserData = await queryFulfilled;
                    localStorage.setItem(
                        "auth",
                        JSON.stringify({
                            accessToken: getuserData.data.accessToken,
                            user:  getuserData.data.user
                        })
                    );

                    dispatch(
                        userLogin({
                            accessToken: getuserData.data.accessToken,
                            user: getuserData.data.user
                        })
                    );

                } catch (error) {
                    console.log(error);
                }
            }
        })

    })
})


export const {  useLoginMutation, useRegisterMutation } = authApi;