import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Switch from 'react-switch';
import classNames from 'classnames';
import { Progress } from 'flowbite-react';
import { Parallax } from 'react-scroll-parallax';

const mockCardData = [
    {
        title: 'Step 1',
        content: 'Take the Challenge',
    },
    {
        title: 'Verificationi',
        content: 'Submit documents',
    },
    {
        title: 'Step 2',
        content: 'Get Verified',
    },
    {
        title: "You're ready to",
        content: 'Get Funded',
    },
];

export const EvaluationProcessCard: React.FC<{
    title: string;
    content: string;
    className?: string;
}> = ({ title, content, className }) => {
    return (
        <div
            className={classNames(
                'flex flex-col gap-2 p-8 rounded-lg drop-shadow-xl bg-funded-700 text-funded-800 break-word',
                className
            )}>
            <h3 className="text-sm leading-5 text-funded-80">{title}</h3>
            <p className="text-base lg:text-2xl">{content}</p>
        </div>
    );
};

const progressStepPoints = [150, 200, 250, 300];

export const HowItWorksEvaluationProcess: React.FC = () => {
    const [checked, setChecked] = useState(false);
    const [progress, setProgress] = useState(0);
    const handleOnChecked = async (e: boolean) => {
        setChecked(e);
    };

    return (
        <div
            data-testid="mffx-how-it-works-evaluation-progress"
            className="grid justify-between grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-16">
            <div className="flex flex-col col-span-1 gap-4 lg:gap-8">
                <h1 className="text-2xl lg:text-4.5xl font-semibold flex items-center">
                    <Parallax
                        onProgressChange={(p) => {
                            setProgress(p * 500);
                        }}>
                        <div className="absolute z-0 flex items-center -left-10">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={3.5}
                                stroke="currentColor"
                                className={classNames('w-6 h-6', {
                                    'text-green-500': progress > 100,
                                })}>
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                />
                            </svg>
                        </div>
                        <span className="text-funded-80">Evaluation</span> process
                    </Parallax>
                </h1>
                <div className="text-base text-funded-400 lg:text-xl">
                    MFFX suggest you to complete 1-Step or 2-Steps Evaluation process which might consists of the MFFX
                    Challenge and the Verification. This process's main goal is to discover trading talents who will be
                    effectivly manage the MFFX account with a balance of up to $600,000
                </div>
            </div>
            <div className="flex flex-col col-span-2 gap-4 lg:gap-8">
                <div className="items-center hidden gap-1 lg:flex lg:gap-2">
                    <h2 className="text-funded-400">Select your challenge:</h2>
                    <div className="flex justify-center gap-2 lg:gap-x-5">
                        <div className="text-base lg:text-2xl text-funded-750">1-Step</div>
                        <Switch onChange={handleOnChecked} checked={checked} onColor="#EAC06F" />
                        <div
                            className={
                                !checked
                                    ? 'text-base lg:text-2xl text-funded-750'
                                    : 'text-base lg:text-2xl text-funded-50'
                            }>
                            2-Steps
                        </div>
                    </div>
                </div>
                <div className="relative">
                    {/* desktop mode */}
                    <div
                        className={classNames('hidden lg:grid gap-x-4 grid-cols-2', {
                            'lg:grid-cols-4': checked,
                        })}>
                        {mockCardData.map((item, index) => {
                            if (checked || index < 2)
                                return <EvaluationProcessCard className="col-span-1" key={uuidv4()} {...item} />;
                        })}
                    </div>
                    {/* mobile mode */}
                    <Parallax
                        onProgressChange={(p) => {
                            setProgress(p * 500);
                        }}></Parallax>
                    <div className={classNames('grid lg:hidden gap-4 grid-cols-2 w-full')}>
                        {progressStepPoints.map((item, index) => {
                            return (
                                <div className="relative flex items-center col-span-1" key={uuidv4()}>
                                    <EvaluationProcessCard className="z-20 w-full" {...mockCardData[index]} />
                                    <div
                                        className={classNames('absolute z-0', {
                                            '-ml-40': index,
                                            'w-20 lg:w-screen': index === 3,
                                            'w-screen': index != 3,
                                        })}>
                                        <Progress
                                            className="z-0 border-none"
                                            progress={progress > item ? (progress - item) * 2 : 0.001}
                                            size="sm"
                                            color="green"
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};
