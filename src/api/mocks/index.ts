import { env } from "@/env";
import { setupWorker } from "msw/browser";
import { signInMock } from "./sign-in-mock";
import { registerRestaurantMock } from "./register-restaurant-mock";
import { getDayOrdersAmountMock } from "./get-day-orders-amout-mock";
import { getMonthOrdersAmountMock } from "./get-month-orders-amount-mock";
import { getMonthCanceledOrdersAmountMock } from "./get-month-canceled-orders-amount-mock";
import { getMonthRevenueMock } from "./get-month-revenue-mock";
import { getDailyRevenueInPeriodMock } from "./get-daily-revenue-in-period-mock";
import { getPopularProductsMock } from "./get-popular-products-mock";
import { getProfileMock } from "./get-profile-mock";
import { getManagedRestaurantMock } from "./get-managed-restaurant-mock";
import { updateProfileMock } from "./update-profile-mock";
import { getOrdersMock } from "./get-orders-mock";
import { GetOrdersDetailsMock } from "./get-orders-details-mock";
import { CancelOrderMock } from "./cancel-order-mock";
import { ApproveOrderMock } from "./approve-order-mock";
import { DeliverOrderMock } from "./deliver-order-mock";
import { DispatchOrderMock } from "./dispatch-order-mock";

export const worker = setupWorker(
  signInMock,
  registerRestaurantMock,
  getDayOrdersAmountMock,
  getMonthOrdersAmountMock,
  getMonthCanceledOrdersAmountMock,
  getMonthRevenueMock,
  getDailyRevenueInPeriodMock,
  getPopularProductsMock,
  getProfileMock,
  getManagedRestaurantMock,
  updateProfileMock,
  getOrdersMock,
  GetOrdersDetailsMock,
  CancelOrderMock,
  ApproveOrderMock,
  DeliverOrderMock,
  DispatchOrderMock,
);

export async function enableMSW() {
  if (env.MODE !== "test") {
    return;
  }

  await worker.start();
}
