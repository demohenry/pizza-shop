import { GetDailyRevenueInPeriodResponse } from "./../get-daily-revenue-in-period";
import { http, HttpResponse } from "msw";

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>("/metrics/daily-receipt-in-period", () => {
  return HttpResponse.json([
    { date: "01/01/2024", receipt: 2000 },
    { date: "02/01/2024", receipt: 800 },
    { date: "03/01/2024", receipt: 3300 },
    { date: "04/01/2024", receipt: 2800 },
    { date: "05/01/2024", receipt: 450 },
    { date: "06/01/2024", receipt: 8000 },
  ]);
});
