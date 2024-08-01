import { http, HttpResponse } from "msw";
import { GetMonthCanceledOrdersAmountResponse } from "../get-mouth-canceled-ordered-amouth";

export const getMonthCanceledOrdersAmountMock = http.get<
  never,
  never,
  GetMonthCanceledOrdersAmountResponse
>("/metrics/month-canceled-orders-amount", () => {
  return HttpResponse.json({
    amount: 5,
    diffFromLastMonth: 7,
  });
});
