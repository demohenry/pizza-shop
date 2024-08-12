import {
  GetOrderDetailsResponse,
  GetOrdersDetailsParams,
} from "./../get-oder-details";
import { http, HttpResponse } from "msw";

export const GetOrdersDetailsMock = http.get<
  GetOrdersDetailsParams,
  never,
  GetOrderDetailsResponse
>("/orders/:orderId", ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: "João Gordão",
      email: "joaopesado@email.com",
      phone: "856464895",
    },
    status: "pending",
    createdAt: new Date().toISOString(),
    totalInCents: 5000,
    orderItems: [
      {
        id: "order-item-1",
        priceInCents: 1000,
        product: { name: "Pizza Peperoni" },
        quantity: 1,
      },
      {
        id: "order-item-2",
        priceInCents: 2000,
        product: { name: "Pizza Calabresa" },
        quantity: 2,
      },
    ],
  });
});
