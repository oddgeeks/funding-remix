import React, { useState } from 'react';
import Switch from 'react-switch';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

import { Tables, MobileTable, CTA } from '~/components/organisms';

import { oneStep, twoStep } from '~/data/mobileTableData';

const priceChallenge = [
    {
        value: 20,
        label: '$5k',
    },
    {
        value: 40,
        label: '$10K',
    },
    {
        value: 60,
        label: '$25K',
    },
    {
        value: 80,
        label: '$50K',
    },
    {
        value: 100,
        label: '$100K',
    },
    {
        value: 120,
        label: '$200K',
    },
];

export const HowItWorksTradingObjectives: React.FC = () => {
    const [checked, setChecked] = useState(false);
    const [selectedAmount, setSelectedAmount] = useState<{ id: number }>({
        id: 20,
    });

    const handleOnChecked = async (e: boolean) => {
        setChecked(e);
    };

    return (
        <div data-testid="mffx-how-it-works-trading-objectives" className="space-y-8">
            <div className="mb-4 text-2xl lg:text-4.5xl text-center font-lexend">Trading Objectives</div>
            <div className="flex justify-center space-x-5 font-lexend text-funded-750">
                <div className="text-base lg:text-2xl">1-Step</div>
                <Switch onChange={handleOnChecked} checked={checked} onColor="#EAC06F" />
                <div className={!checked ? 'text-base lg:text-2xl' : 'text-base lg:text-2xl text-funded-50'}>
                    2-Steps
                </div>
            </div>
            <div className="hidden md:block">
                <Tables checked={checked} />
            </div>
            <div className="md:hidden">
                <div className="px-8 mx-auto">
                    <Box>
                        <Slider
                            sx={{
                                '& input[type="range"]': {
                                    WebkitAppearance: 'slider-vertical',
                                },
                            }}
                            defaultValue={5}
                            onChange={(e) =>
                                setSelectedAmount({
                                    id: Number((e.target as HTMLInputElement).value),
                                })
                            }
                            step={null}
                            marks={priceChallenge}
                            min={20}
                            max={120}
                            valueLabelDisplay="off"
                        />
                    </Box>
                </div>
                <>
                    {!checked ? (
                        <>
                            <MobileTable challenge="1-Step" data={oneStep} selectedAmount={selectedAmount} />
                        </>
                    ) : (
                        <>
                            <MobileTable challenge="2-Steps" data={twoStep} selectedAmount={selectedAmount} />
                        </>
                    )}
                    <div className="inline-flex w-full rounded-md shadow">
                        <a
                            data-testid="mffx-make-your-selection-sign-up"
                            href="https://myfundedfx.tech/account/register/"
                            className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium border border-transparent rounded-md animate-bounce text-funded-150 bg-funded-90 hover:bg-funded-80">
                            Get Funded
                        </a>
                    </div>
                </>
            </div>
        </div>
    );
};
