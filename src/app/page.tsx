"use client";

import {
  defineCustomElements,
  SalableCheckout,
  SalableInvoices,
  SalablePricingTable,
} from "@salable/react-web-components";

defineCustomElements();

export default function Home() {
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
