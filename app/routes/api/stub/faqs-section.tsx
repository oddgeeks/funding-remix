import { json } from '@remix-run/node';

export function loader() {
    const faqSectionApi = {
        data: {
            id: 1,
            attributes: {
                Title: 'Frequently asked questions',
                subTitle: 'Detailed Explanations of Trading Objectives',
                faqSiteLink: 'https://intercom.help/myfundedfx/en',
                createdAt: '2023-04-06T23:31:39.066Z',
                updatedAt: '2023-04-07T01:01:48.089Z',
                publishedAt: '2023-04-06T23:31:43.972Z',
                Accordion: [
                    {
                        id: 1,
                        Question: 'Trading Program phases',
                        Answer: "Before we allow you to trade for our Proprietary Trading Firm, we need to be sure that you can manage risk. For this reason, we developed Trading Objectives. By meeting the Trading Objectives, you prove that you are a disciplined and experienced trader. Your trading style is entirely up to you; we don't set any limits on instruments or position size you trade.\n\n<br/>\nSTEP 1: Trading Challenge phase\n\n<br/>\n####- Prove that you can trade by reaching min. profit target\n####- You can request an account review after you have closed all open positions and min. trading days objective have been met.\n####- Once the Challenge phase has been completed you are ready to enter Verification phase and start earning real money.\n####- If you will violate any rules or objectives, your challenge account will be failed. All MyFundedFX accounts have automatic 24/7 monitoring.\n<br/>\nSTEP 2: Verification phase    \n<br/>\n####- Continue trading with a verification account and prove you weren’t just lucky in the challenge phase.\n<br/>\nSTEP 3: MyFundedFX Trader\n<br/>\n####- You can now start trading MyFundedFX proprietary trading firm's capital without profit targets as long as you won't reach max. loss limits. Your commission is up to 85% of all profits made during the course of program.\n####- You can require an account review after you have closed all open positions and min. trading days objective have been met.\n",
                    },
                    {
                        id: 2,
                        Question: 'Trading Period',
                        Answer: 'All challenges both one and two step have unlimited trading time to complete',
                    },
                    {
                        id: 4,
                        Question: 'Minimum Trading Days',
                        Answer: 'To meet this objective, depending on your chosen trading strategy, you must trade for at least one day during the trading period. At least one position must be opened on each of these days.\n\n<br/>\n\n####- A trading day is considered any day when at least one trade is executed.\n\n####- If a trade is held over multiple days, the day when the trade was executed is considered as the trading day.\n\n####- You can proceed to the next phase without waiting.',
                    },
                    {
                        id: 3,
                        Question: 'Max Initial Account Balance Loss',
                        Answer: 'This rule can also be called the “account stop-loss” Maximum loss is a fixed figured representing the difference between your initial account balance and current equity which can not fall below the specified value for the plan.\n\nFor example, If your initial account balance is 10k and you have a max drawdown of 8%, your maximum loss value will remain at $9,200 for the duration of your challenge',
                    },
                    {
                        id: 5,
                        Question: 'Maximum Daily Loss',
                        Answer: 'This rule can also be called "trader\'s daily stop-loss". The rule says that at any moment of the day (EE(S)T – Eastern European Summer Time), the daily equity decrease must not hit the predetermined limit. The counting formula: Current daily loss = equity at the start of the day - current equity.',
                    },
                    {
                        id: 6,
                        Question: 'Maximum Leverage',
                        Answer: 'Maximum leverage with all accounts is 1:100',
                    },
                    {
                        id: 7,
                        Question: 'Profit Target',
                        Answer: 'Depending on chosen trading strategy and phase the minimum profit target to complete the phase or earn commission is set between 5-10% of the initial balance.\n\nProfit target means that a trader reaches a profit target specified in the plan of the initial account balance in the sum of closed positions. The trading period is unlimited and the profit target can be met at your leisure without any restrictions.\nFor example:\n\n####- If you trade Challenge with $10,000 capital targeting a minimum of 5%, your profit target is $500. After completing the Verification period (Phase 2), the minimum profit target will be removed. You can trade your Phase 3 account as long as you do not reach the maximum loss limits or violate other rules or objectives.',
                    },
                ],
            },
        },
    };

    return json(faqSectionApi);
}
