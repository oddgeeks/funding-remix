import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Switch from 'react-switch';

interface CardOneProps {
    type: string;
    title: string;
    description: string;
    profitSplit: string;
    tradingTarget: string;
    tradingPeriod: string;
    minTradigDays: string;
    maxInitBalanceLoss: string;
    maxDailyLoss: string;
}

const mockData = {
    type: 'You’re ready to ',
    title: 'Get Funded',
    description:
        'You can now start trading MyFundedFX proprietary trading firm’s capital without profit targets as long as you won’t reach max. loss limits. Your commission is up to 80% of all profits made after each trading period of 14 calendar days',
    tradingTarget: 'None',
    profitSplit: '80%',
    tradingPeriod: 'Unlimited',
    minTradigDays: '1',
    maxInitBalanceLoss: '6%-8%',
    maxDailyLoss: '4%-5%',
};

export const CustomCard: React.FC<CardOneProps> = (props) => {
    return (
        <div className="flex justify-center w-full">
            <div className="flex flex-col w-full gap-3 p-10 rounded-lg lg:flex-row lg:gap-6 drop-shadow-xl bg-funded-700 text-funded-800 lg:w-2/3">
                <div className="flex-1 space-y-6">
                    <div className="flex flex-col gap-1 lg:gap-2">
                        <h3 className="text-base leading-5 text-funded-80 lg:text-2xl">{props.type}</h3>
                        <h2 className="text-2xl lg:text-3.5xl">{props.title}</h2>
                    </div>
                    <p className="text-sm text-funded-400 lg:text-base">{props.description}</p>
                </div>
                <div className="flex-1">
                    <div className="flex items-center justify-between py-5 border-b border-white/70">
                        <span className="text-sm text-funded-400 lg:text-base">Profit Split</span>
                        <span className="text-xl font-semibold lg:text-2xl">{props.profitSplit}</span>
                    </div>

                    <div className="flex items-center justify-between py-5 border-b border-white/70">
                        <span className="text-sm text-funded-400 lg:text-base">Trading period</span>
                        <span className="text-base font-semibold">{props.tradingPeriod}</span>
                    </div>
                    <div className="flex items-center justify-between py-5 border-b border-white/70">
                        <span className="text-sm text-funded-400">Minimum Trading Days</span>
                        <span className="text-base font-semibold">{props.minTradigDays}</span>
                    </div>
                    <div className="flex items-center justify-between py-5 border-b border-white/70">
                        <span className="text-sm text-funded-400 lg:text-base">Max Initial Account Balance Loss</span>
                        <span className="text-base font-semibold">{props.maxInitBalanceLoss}</span>
                    </div>
                    <div className="flex items-center justify-between py-5">
                        <span className="text-sm text-funded-400 lg:text-base">Maximum daily loss</span>
                        <span className="text-base font-semibold">{props.maxDailyLoss}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const HowItWorksLiveAccount: React.FC = () => {
    const [checked, setChecked] = useState(false);
    const handleOnChecked = async (e: boolean) => {
        setChecked(e);
    };

    return (
        <div
            data-testid="mffx-how-it-works-live-account"
            className="flex flex-col gap-8 mx-auto lg:gap-14 max-w-screen-2xl">
            <div className="flex flex-col gap-4 lg:gap-[3rem]">
                <h2 className="text-2xl lg:text-4.5xl text-center font-lexend">Now you have</h2>
                <h2 className="text-2xl lg:text-4.5xl text-center font-lexend text-funded-80">Live Account</h2>
            </div>
            <div>
                <CustomCard {...mockData} />
            </div>
        </div>
    );
};
