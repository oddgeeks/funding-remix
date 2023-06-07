import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Switch from 'react-switch';

interface CardOneProps {
    type: string;
    title: string;
    description: string;
    profitTarget: string;
    tradingPeriod: string;
    minTradigDays: string;
    maxInitBalanceLoss: string;
    maxDailyLoss: string;
}

interface CardTwoProps {
    type: string;
    title: string;
    description: string;
    proofIdentity: string;
    proofAddress: string;
}

const mockDataStepOne = {
    type: 'Step 1',
    title: 'Take the Challenge',
    description:
        'Take the challenge in the MyFundedFX evaluation process and prove that you have what it takes to be a funded trader. Meet the trading objectives in as little as one trade',
    profitTarget: '10%',
    tradingPeriod: 'Unlimited',
    minTradigDays: '1',
    maxInitBalanceLoss: '6%',
    maxDailyLoss: '4%',
};

const mockDataStepTwo = {
    type: 'Step 2',
    title: 'Get Verified',
    description:
        'After you pass the first challenge, you will establish yourself as a consistent trader and move to the verification step with a 5% profit target',
    profitTarget: '5%',
    tradingPeriod: 'Unlimited',
    minTradigDays: '1',
    maxInitBalanceLoss: '8%',
    maxDailyLoss: '5%',
};

const mockDataVerification = {
    type: 'Verification',
    title: 'Submit documents',
    description:
        'After passing step-1/step-2 you will be required to submit your KYC documents. Once submitted and your documents are approved, your account would be activated if reviews have been completed',
    proofIdentity: "ID card, passport or driver's license",
    proofAddress: 'Utility bill, bank statement or credit card statement',
};

export const HowItWorksCardOne: React.FC<CardOneProps> = (props) => {
    return (
        <div className="flex flex-col gap-6 p-10 rounded-lg drop-shadow-xl bg-funded-700 text-funded-800">
            <div className="flex flex-col gap-2">
                <h3 className="text-base leading-5 text-funded-80 lg:text-xl">{props.type}</h3>
                <h2 className="text-2xl lg:text-3.5xl">{props.title}</h2>
            </div>
            <p className="text-sm text-funded-400 lg:text-base">{props.description}</p>
            <div>
                <div className="flex items-center justify-between py-5 border-b border-white/70">
                    <span className="text-sm text-funded-400 lg:text-base">Profit target</span>
                    <span className="text-xl font-semibold lg:text-2xl">{props.profitTarget}</span>
                </div>
                <div className="flex items-center justify-between py-5 border-b border-white/70">
                    <span className="text-sm text-funded-400 lg:text-base">Trading period</span>
                    <span className="text-base font-semibold">{props.tradingPeriod}</span>
                </div>
                <div className="flex items-center justify-between py-5 border-b border-white/70">
                    <span className="text-sm text-funded-400 lg:text-base">Minimum Trading Days</span>
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
    );
};

export const HowItWorksCardTwo: React.FC<CardTwoProps> = (props) => {
    return (
        <div className="flex flex-col gap-6 p-10 rounded-lg drop-shadow-xl bg-funded-700 text-funded-800">
            <div className="flex flex-col gap-2">
                <h3 className="text-xl leading-5 text-funded-80">{props.type}</h3>
                <h2 className="text-2xl lg:text-3.5xl">{props.title}</h2>
            </div>
            <p className="text-sm text-funded-400 lg:text-base">{props.description}</p>
            <div>
                <div className="flex items-center justify-between py-5 border-b border-white/70">
                    <span className="flex-1 text-sm lg:text-base text-funded-400">Proof of identity</span>
                    <span className="flex-1 text-base font-semibold text-right">{props.proofIdentity}</span>
                </div>
            </div>
        </div>
    );
};

export const HowItWorksAccountRules: React.FC = () => {
    const [checked, setChecked] = useState(false);
    const handleOnChecked = async (e: boolean) => {
        setChecked(e);
    };

    return (
        <div
            data-testid="mffx-how-it-works-account-rules"
            className="flex flex-col gap-8 mx-auto lg:gap-14 max-w-screen-2xl">
            <div className="flex flex-col gap-[3rem]">
                <h2 className="text-2xl lg:text-4.5xl text-center font-semibold">
                    Account <span className="text-funded-80">Rules</span>
                </h2>
                <div className="flex justify-center space-x-5 font-lexend text-funded-750">
                    <div className="text-base lg:text-2xl">1-Step</div>
                    <Switch onChange={handleOnChecked} checked={checked} onColor="#EAC06F" />
                    <div className={!checked ? 'text-base lg:text-2xl' : 'text-base lg:text-2xl text-funded-50'}>
                        2-Steps
                    </div>
                </div>
            </div>
            {(checked && (
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <HowItWorksCardOne {...mockDataStepOne} />
                    <HowItWorksCardOne {...mockDataStepTwo} />
                    <HowItWorksCardTwo {...mockDataVerification} />
                </div>
            )) || (
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    <HowItWorksCardOne {...mockDataStepOne} />
                    <HowItWorksCardTwo {...mockDataVerification} />
                </div>
            )}
        </div>
    );
};
