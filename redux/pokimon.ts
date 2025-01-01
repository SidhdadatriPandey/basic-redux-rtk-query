import { baseUrl } from "@/constants/ApiEndPoints";
import { BaseQueryApi, createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ads } from "./api/ads";


type RootState = {
    user: { 
      user: {
        access_token: string;
      };
    };
  };

const prepareHeaders = (
    headers: Headers,
    api: Pick<BaseQueryApi, "getState">
) => {
    const token = (api.getState() as RootState)?.user?.user?.access_token;
    // console.log("token", token);
    if (token) {
        headers.set("authorization", `Bearer ${token.replace(/"/g, "")}`);
    }
    return headers;
};

export const pokemonApi = createApi({
    reducerPath: "pokemonApi",
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
        prepareHeaders: prepareHeaders,
    }),
    endpoints: (builder) => ({
      ...ads(builder),
    }),
})

export const {useAdsQuery} =pokemonApi