import ApiEndPoints from "@/constants/ApiEndPoints";
import { EndpointBuilder } from "@reduxjs/toolkit/query";

export const ads = (builder: EndpointBuilder<any, any, any>) => ({
  ads: builder.query({
    query: (id) => ({
      url: ApiEndPoints.ads + `?screen=${id}`,
      method: "GET",
    }),
  }),
});

  