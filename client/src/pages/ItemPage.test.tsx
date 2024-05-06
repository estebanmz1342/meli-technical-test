import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { render, fireEvent } from "@testing-library/react";
import { ItemPage } from "./ItemPage";
import { test, expect } from "vitest";

const fakeData = [
  {
    id: "MLA1400434399",
    title: "Samsung Galaxy S23 Fe 128gb 8gb Ram Negro",
    price: {
      currency: "ARS",
      amount: "1164999",
    },
    picture: "http://http2.mlstatic.com/D_968012-MLU74033800854_012024-I.jpg",
    condition: "new",
    free_shipping: true,
  },
  {
    id: "MLA1714363798",
    title: "Samsung Galaxy S23 Ultra 5g 256 Gb  Green 12 Gb Ram",
    price: {
      currency: "ARS",
      amount: "1699999",
    },
    picture: "http://http2.mlstatic.com/D_879579-MLA73065587208_112023-I.jpg",
    condition: "new",
    free_shipping: true,
  },
  {
    id: "MLA1371894629",
    title: "Samsung Galaxy S23 256 Gb Phantom Black 8 Gb",
    price: {
      currency: "ARS",
      amount: "2499999",
    },
    picture: "http://http2.mlstatic.com/D_889742-MLU74941619474_032024-I.jpg",
    condition: "new",
    free_shipping: true,
  },
  {
    id: "MLA1423533567",
    title: "Samsung Galaxy S23 Fe 256gb 8gb Ram Verde",
    price: {
      currency: "ARS",
      amount: "999999",
    },
    picture: "http://http2.mlstatic.com/D_905933-MLU73140758341_112023-I.jpg",
    condition: "new",
    free_shipping: true,
  },
];

test("ItemPage renders", async () => {
  const routes = [
    {
      path: "/",
      element: <ItemPage data={fakeData} />,
    },
    {
      path: "/items/MLA1400434399",
      element: <>FakePage</>,
    },
  ];

  const router = createMemoryRouter(routes, {
    initialEntries: ["/"],
  });

  const component = render(<RouterProvider router={router} />);

  expect(component.getAllByText(/Samsung Galaxy S23/)[0]).toBeDefined();
  fireEvent.click(component.getAllByText(/Samsung Galaxy S23/)[0]);
  expect(router.routes.find((route) => route.path === "/items/MLA1400434399"));
});
