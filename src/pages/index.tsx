import dynamic from "next/dynamic";
import { useEffect } from "react";

const SalablePricingTable = dynamic(
  () =>
    import("@salable/react-web-components").then(
      (module) => module.SalablePricingTable,
    ),
  { ssr: false },
);
const SalableCheckout = dynamic(
  () =>
    import("@salable/react-web-components").then(
      (module) => module.SalableCheckout,
    ),
  { ssr: false },
);

const SalableInvoices = dynamic(
  () =>
    import("@salable/react-web-components").then(
      (module) => module.SalableInvoices,
    ),
  { ssr: false },
);

export default function Home() {
  useEffect(() => {
    import("@salable/react-web-components").then((module) => {
      const { defineCustomElements } = module;
      defineCustomElements();
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col gap-8 p-24">
      <h1>Salable Web Components Next.js Demo</h1>

      <h2>Pricing Table</h2>
      <SalablePricingTable
        sessionToken="YOUR_SESSION_TOKEN"
        uuid="YOUR_PRICING_TABLE_UUID"
        globalSuccessUrl="https://example.com/success"
        globalCancelUrl="https://example.com/cancel"
        globalGranteeId="EXAMPLE_GRANTEE_ID"
        member="EXAMPLE_MEMBER"
        isCustomPricingTable={false}
        currency="GBP"
      />

      <h2>Checkout</h2>
      <SalableCheckout
        sessionToken="YOUR_SESSION_TOKEN"
        planUuid="YOUR_PLAN_UUID"
        successUrl="https://example.com/success"
        granteeId="EXAMPLE_GRANTEE_ID"
        member="EXAMPLE_MEMBER"
        currency="GBP"
      />

      <h2>Invoices</h2>
      <SalableInvoices
        sessionToken="YOUR_SESSION_TOKEN"
        subscriptionUuid="YOUR_SUBSCRIPTION_UUID"
        limit={3}
      />
    </main>
  );
}
