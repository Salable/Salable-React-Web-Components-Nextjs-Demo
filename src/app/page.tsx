'use client';

import {defineCustomElements, SalableCheckout, SalablePricingTable} from "@salable/react-web-components";

defineCustomElements();

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col gap-8 p-24">
            <h1>Salable React Components Demo</h1>
            <h2>Pricing Table</h2>
            <SalablePricingTable
                apiKey="test_19fda9530350e27eb3948749d511c9d51d09e7c5"
                uuid="44363fe3-2607-437a-8b66-5375d7a762a2"
                globalSuccessUrl="https://google.co.uk"
                globalCancelUrl="https://google.co.uk"
                globalGranteeId="123"
                member="456"
                isCustomPricingTable={false}
            />
            <h2>Checkout</h2>
            <SalableCheckout
                apiKey="test_19fda9530350e27eb3948749d511c9d51d09e7c5"
                planUuid="390fe44d-33d9-48fc-9863-eb641e148249"
                member='example-member-123'
                granteeId='example-grantee-123'
                successUrl="https://www.google.com"
            />
        </main>
    );
}
