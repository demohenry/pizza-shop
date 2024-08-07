import { http, HttpResponse } from "msw";
import { GetProfileResponse } from "../get-profile";

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  "/me",
  () => {
    return HttpResponse.json({
      id: "1",
      name: "Gordo",
      email: "gordo.com@gmail.com",
      phone: "8198553642",
      role: "manager",
      createdAt: new Date(),
      updateAt: null,
    });
  },
);
