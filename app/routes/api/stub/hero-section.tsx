import { json } from '@remix-run/node';

export function loader() {
    const heroSectionAPI = {
        data: {
            id: 1,
            attributes: {
                Title: ' Manages Capital up to $600K',
                subTitle: 'Our Funds, Your Profit',
                getFundedLink: 'https://myfundedfx.tech/account/register/',
                discordUrl: 'https://discord.gg/Zd8FVT9uSH',
                Description:
                    'Learn to trade for our Proprietary Trading Firm. Complete the Trading Challenge and manage accounts up to $600,000',
                Stars: 4.8,
                featuredVideoUrl: '/video/MFFXN.mp4',
                createdAt: '2023-04-03T19:27:56.083Z',

                updatedAt: '2023-04-03T19:27:58.654Z',
                publishedAt: '2023-04-03T19:27:58.648Z',
                descriptionFeatures: [
                    {
                        id: 1,
                        Feature: 'Receive 80% of profits',
                    },
                    {
                        id: 2,
                        Feature: 'No Scaling plan required',
                    },
                ],
            },
        },
    };

    return json(heroSectionAPI);
}
