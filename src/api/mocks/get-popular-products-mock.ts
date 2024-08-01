import { http, HttpResponse } from "msw";
import { getPopularProductsResponse } from "../get-popular-products";

export const getPopularProductsMock = http.get<
  never,
  never,
  getPopularProductsResponse
>("/metrics/popular-products", () => {
  return HttpResponse.json([
    { product: "pizza 01", amount: 5 },
    { product: "pizza 02", amount: 12 },
    { product: "pizza 03", amount: 8 },
    { product: "pizza 04", amount: 16 },
    { product: "pizza 05", amount: 11 },
  ]);
});
