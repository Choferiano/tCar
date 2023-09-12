import {createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { realtime_database_url } from "../DataBase/fireBaseConfig"

export const shopApi = createApi({
    reducerPath: 'shopApi',
    baseQuery: fetchBaseQuery({baseUrl: realtime_database_url}),
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => `Categories.json`
        }),
        getProducts: builder.query({
            query: () => `Products.json`
        }),
        getProductsByCategory: builder.query({
            query: (category) => `Products.json?orderBy="category"&equalTo="${category}"`,
            transformResponse: (response) => {
                console.log(response);
                const productsTransformed = Object.values(response)
                console.log(productsTransformed)
                return (productsTransformed)
            }
        }),
        getProductById: builder.query({
            query: (productId) => `Products.json?orderBy="id"&equalTo=${productId}`,
            transformResponse: (response) => {
                const productTransformed = Object.values(response).pop()
                return (productTransformed)
            }
        }),
        postCart: builder.mutation({
            query: (order) => ({
                url: `Orders.json`,
                method: `POST`,
                body: order
            })
        }), 
        getProfileImage: builder.query({
            query: (localId) => `profileImages/${localId}.json`,
        }),
        //Aquí hacemos un put para que no me genere ninguna clave nueva de por medio.
        postProfileImage: builder.mutation({
            query: ({image, localId}) => ({
                url: `profileImages/${localId}.json`,
                method: "PUT",
                body: {
                    image: image
                },
            }),
        }),
    })
})

export const {
    useGetCategoriesQuery, 
    useGetProductsQuery, 
    useGetProductsByCategoryQuery,
    useGetProductByIdQuery,
    usePostCartMutation,
    useGetProfileImageQuery,
    usePostProfileImageMutation,
} = shopApi