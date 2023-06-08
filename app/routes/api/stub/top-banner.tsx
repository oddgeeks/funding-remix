import { json } from '@remix-run/node';

export function loader() {
    const topBannerAPI = {
        data: {
            id: 1,
            attributes: {
                Title: 'Hurry!',
                SubTitle: 'Grab our special offer and get funded more effective.',
                Discount: '12%',
                Profit: '110%',
                OfferEndTime: '2023-04-30T22:59:00.000Z',
                CouponLink: 'https://myfundedfx.tech/purchasechallenge',
                createdAt: '2023-03-28T16:01:06.472Z',
                updatedAt: '2023-03-29T19:08:29.797Z',
                publishedAt: '2023-03-28T16:01:54.270Z',
                CouponCode: 'TAKEOVER',
                PromotionBannerSlider: [
                    {
                        id: 4,
                        __component: 'slider-data.slider',
                        SliderText: 'Applies to both 1-Step and 2-Steps Programs',
                    },
                    {
                        id: 5,
                        __component: 'slider-data.slider',
                        SliderText: '110% fee refund paid at first payout',
                    },
                    {
                        id: 6,
                        __component: 'slider-data.slider',
                        SliderText: '5% from phase 1 and 2 profits',
                    },
                    {
                        id: 7,
                        __component: 'slider-data.slider',
                        SliderText: 'Promo valid until March 31th 11:59 PM CST',
                    },
                ],
            },
        },
    };

    return json(topBannerAPI);
}
