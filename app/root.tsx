import { useEffect } from 'react';

import type { MetaFunction, LinksFunction, LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import {
    useLoaderData,
    useLocation,
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from '@remix-run/react';
import { IntercomProvider } from 'react-use-intercom';

import globalStylesUrl from '~/styles/global.css';
import * as gtag from '~/utils/gtags.client';
// import { HydrationProvider, Server, Client } from "react-hydration-provider";
import useHotjar from 'react-use-hotjar';

import tailwindStylesheetUrl from './styles/tailwind.css';
import LogRocket from 'logrocket';

LogRocket.init('myfundedfx/myfundedfx');

export const links: LinksFunction = () => [
    { rel: 'stylesheet', href: tailwindStylesheetUrl },
    { rel: 'stylesheet', href: globalStylesUrl },
];

export const meta: MetaFunction = () => ({
    charset: 'utf-8',
    title: 'Top Trading Prop Firm | Manage Capital up to $600K | MyFundedFX',
    description:
        'Achieve success in forex trading with MyFundedFX. Our prop trading firm offers up to $600,000 in funded accounts, and we cover any losses. Sign up today!',
    viewport: 'width=device-width,initial-scale=1',
});

type LoaderData = {
    gaTrackingId?: string;
    INTERCOM_APP_ID: string;
    HOTJAR_APP_ID: string | number;
};

// Load the GA tracking id from the .env
export const loader: LoaderFunction = async () => {
    return json<LoaderData>({
        gaTrackingId: process.env.GA_TRACKING_ID,
        INTERCOM_APP_ID: process.env.INTERCOM_APP_ID ?? '',
        HOTJAR_APP_ID: process.env.HOTJAR_APP_ID ?? 0,
    });
};

export default function App() {
    const location = useLocation();
    const { initHotjar } = useHotjar();
    const { gaTrackingId, INTERCOM_APP_ID, HOTJAR_APP_ID } = useLoaderData<LoaderData>();

    useEffect(() => {
        initHotjar(Number(HOTJAR_APP_ID), 6, false);
    }, [initHotjar]);

    useEffect(() => {
        if (gaTrackingId?.length) {
            gtag.pageview(location.pathname, gaTrackingId);
        }
    }, [location, gaTrackingId]);

    return (
        <html lang="en">
            <head>
                <meta name="google-site-verification" content="fJtIw9qDViEq5SmrbU62n9UnPWr_iJA87apdVTIxruA" />
                <Meta />
                <Links />
                <script
                    id="pap_x2s6df8d"
                    src="https://myfundedfx.postaffiliatepro.com/scripts/4jn3a35f54o%22%3E"></script>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: `"@context": "https://schema.org/",
                            "@type": "Review",
                            "itemReviewed": {
                            "@type": "LocalBusiness",
                            "image": "https://myfundedfx.com/myfundedfx-white.png",
                            "name": "MyFundedFX",
                            "servesCuisine": "prop firm trading",
                            "priceRange": "$$$"
                            },
                            "reviewRating": {
                            "@type": "Rating",
                            "ratingValue": "5"
                            },
                            "name": "Prop Firm For the Traders",
                            "description": "I really like that MyFundedFX offers no commission on all their instruments. FX pairs has great tight spreads and hopefully indices spread will be improved soon. Along with that, their customer service is awesome and replies to you as quickly as possible to help you sort out any questions or problems you have. Pricing is also very competitive and the firm releases promo codes, allowing traders to lower the price. Overall, great firm by far and the CEO, Matt, is very transparent with his traders.",
                            "author": {
                            "@type": "Person",
                            "name": "Jomar Sarmiento"
                            },
                            "publisher": {
                            "@type": "Organization",
                            "name": "Washington Times"
                        }`,
                    }}
                />
                <script
                    async
                    id="ProveSource-init"
                    dangerouslySetInnerHTML={{
                        __html: `
                            !function(o,i){window.provesrc&&window.console&&console.error&&console.error("ProveSource is included twice in this page."),provesrc=window.provesrc={dq:[],display:function(){this.dq.push(arguments)}},o._provesrcAsyncInit=function(){provesrc.init({apiKey:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiI2M2JmNDZmMTJjMGFlNzBiM2E3YThjMjEiLCJpYXQiOjE2NzM0Nzk5MjF9.i4bnna4aOTg7auWdbQ0Qjvlx1q8naAyIE8t8jeQYTKM",v:"0.0.4"})};var r=i.createElement("script");r.type="text/javascript",r.async=!0,r["ch"+"ar"+"set"]="UTF-8",r.src="https://cdn.provesrc.com/provesrc.js";var e=i.getElementsByTagName("script")[0];e.parentNode.insertBefore(r,e)}(window,document);
                        `,
                    }}
                />
            </head>
            <body className="text-white bg-funded-600">
                {process.env.NODE_ENV === 'development' || !gaTrackingId ? null : (
                    <>
                        <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`} />
                        <script
                            async
                            id="gtag-init"
                            dangerouslySetInnerHTML={{
                                __html: `
                                    window.dataLayer = window.dataLayer || [];
                                    function gtag(){dataLayer.push(arguments);}
                                    gtag('js', new Date());
                                    gtag('config', '${gaTrackingId}', {
                                    page_path: window.location.pathname,
                                    });
                                `,
                            }}
                        />
                        {/* <script
                            async
                            id="hotjar-init"
                            dangerouslySetInnerHTML={{
                                __html: `
                                    (function(h,o,t,j,a,r){
                                        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                                        h._hjSettings={hjid:3231959,hjsv:6};
                                        a=o.getElementsByTagName('head')[0];
                                        r=o.createElement('script');r.async=1;
                                        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                                        a.appendChild(r);
                                    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
                                `,
                            }}
                        /> */}
                    </>
                )}
                <IntercomProvider appId={INTERCOM_APP_ID} autoBoot={true}>
                    <Outlet />
                </IntercomProvider>
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
                <script
                    async
                    dangerouslySetInnerHTML={{
                        __html: `
                                PostAffTracker.setAccountId('default1');
                                try { PostAffTracker.track(); } catch (err) { }
                        `,
                    }}></script>
            </body>
        </html>
    );
}
