'use client';

import {defineCustomElements, SalablePricingTable} from "@salable/react-library";

defineCustomElements();

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col gap-8 p-24">
            <h1>Salable React Components Demo</h1>
            <SalablePricingTable
                apiKey="s1tVhRx3WH2jUm2cWTl8g6dbNj7GJ8Zg21XuzEds"
                uuid="0b8fc07d-6707-491a-ad6e-1828d57fe1cc"
                globalSuccessUrl="https://google.co.uk"
                globalCancelUrl="https://google.co.uk"
                globalGranteeId="123"
                member="456"
                isCustomPricingTable={false}
            />
        </main>
    );
}
