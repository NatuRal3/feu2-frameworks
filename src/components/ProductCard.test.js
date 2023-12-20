import { fireEvent, render, screen } from "@testing-library/react";
import ProductCard from "./ProductCard";

describe("ProductCard", () => {
  test("displays information correctly", () => {
    const mockCallBack = jest.fn();
    render(
      <ProductCard
        title="Milk"
        description="Milk makes you grow"
        price="3.99"
        onAddToCartClick={mockCallBack}
      />
    );
    screen.debug();

    expect(screen.getByText("Milk")).toBeInTheDocument();
    expect(screen.getByText("Milk makes you grow")).toBeInTheDocument();
    expect(screen.getByText("3.99")).toBeInTheDocument();

    const onAddToCartButton = screen.getByRole("button");
    fireEvent.click(onAddToCartButton);

    expect(mockCallBack).toHaveBeenCalledTimes(1);
  });
});
