import { render } from "@testing-library/react";
import { OrderStatus } from "./order-status";

describe("Order Status", () => {
  it("should display the right text based when order status is Pending", () => {
    // Pending
    const wrapper = render(<OrderStatus status="pending" />);

    const statusText = wrapper.getByText("Pendente");
    const badgeElement = wrapper.getByTestId("badge");

    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass("bg-slate-400");
  });
  it("should display the right text when order status is Canceled", () => {
    /* Canceled */
    const wrapper = render(<OrderStatus status="canceled" />);

    const statusText = wrapper.getByText("Cancelado");
    const badgeElement = wrapper.getByTestId("badge");

    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass("bg-rose-500");
  });

  /* Delivering */
  const statuses: { status: OrderStatus; text: string }[] = [
    { status: "delivering", text: "Em entrega" },
    { status: "processing", text: "Em preparo" },
  ];

  statuses.forEach(({ status, text }) => {
    it(`should display the right text and badge when order status is ${status}`, () => {
      const wrapper = render(<OrderStatus status={status} />);

      const statusText = wrapper.getByText(text);
      const badgeElement = wrapper.getByTestId("badge");

      expect(statusText).toBeInTheDocument();
      expect(badgeElement).toHaveClass("bg-amber-500");
    });
  });

  // Delivered
  it("should display the right text and badge when order status is Delivered", () => {
    const wrapper = render(<OrderStatus status="delivered" />);

    const statusText = wrapper.getByText("Entregue");
    const badgeElement = wrapper.getByTestId("badge");

    wrapper.debug();

    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass("bg-emerald-500");
  });
});
