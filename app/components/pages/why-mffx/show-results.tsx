import React, { useState, useEffect } from 'react';

interface Props {
    activeNumber: number;
    totalProfilt: number;
    averageProfit: number;
    entered?: boolean;
}

export const WhyMFFXShowResults: React.FC<Props> = (props) => {
    const [displayActiveNumber, setDisplayActiveNumber] = useState(0);
    const [displayTotalProfilt, setDisplayTotalProfilt] = useState(0);
    const [displayAverageProfit, setDisplayAverageProfit] = useState(0);

    let timerActive: NodeJS.Timeout, timerTotal: NodeJS.Timeout, timerAverage: NodeJS.Timeout;

    const calc: any = (n: number) => {
        if (n / 1000 >= 1) {
            let r = n % 1000 || '000';
            return `${calc(Math.floor(n / 1000))},${r}`;
        }
        return `${n}`;
    };

    const changeNum2Short = (n: number) => {
        if (n % 1000000 === 0) return calc(n / 1000000) + 'M';
        if (n % 1000 === 0) return calc(n / 1000) + 'K';
        return calc(n);
    };

    useEffect(() => {
        if (props.entered) {
            if (displayActiveNumber >= props.activeNumber) {
                clearTimeout(timerActive);
                setDisplayActiveNumber(props.activeNumber);
            } else {
                timerActive = setTimeout(() => {
                    setDisplayActiveNumber((displayActiveNumber) => Math.ceil((displayActiveNumber || 1) * 1.005));
                }, 1);
            }
            if (displayTotalProfilt >= props.totalProfilt) {
                clearTimeout(timerTotal);
                setDisplayTotalProfilt(props.totalProfilt);
            } else {
                timerTotal = setTimeout(() => {
                    setDisplayTotalProfilt((displayTotalProfilt) => Math.ceil((displayTotalProfilt || 1) * 1.01));
                }, 1);
            }
            if (displayAverageProfit >= props.averageProfit) {
                clearTimeout(timerAverage);
                setDisplayAverageProfit(props.averageProfit);
            } else {
                timerAverage = setTimeout(() => {
                    setDisplayAverageProfit((displayAverageProfit) => Math.ceil((displayAverageProfit || 1) * 1.005));
                }, 100);
            }
        } else {
            clearTimeout(timerActive);
            setDisplayActiveNumber(0);
            clearTimeout(timerTotal);
            setDisplayTotalProfilt(0);
            clearTimeout(timerAverage);
            setDisplayAverageProfit(0);
        }
    });

    return (
        <div
            data-testid="mffx-why-mffx-show-results"
            className="flex flex-col items-center space-y-10 lg:space-y-[96px]">
            <h2 className="text-2xl lg:text-4.5xl text-center font-semibold">
                Together we shows <span className="text-funded-80">results</span>
            </h2>
            <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8">
                <div className="flex flex-col items-center space-y-3 text-center">
                    <div className="flex">
                        <span className="text-3.5xl lg:text-6.5xl hidden lg:block">{calc(displayActiveNumber)}+</span>
                        <span className="text-3.5xl lg:text-6.5xl lg:hidden">
                            {changeNum2Short(displayActiveNumber)}
                        </span>
                    </div>
                    <span className="text-sm text-funded-400 lg:text-xl">number of active traders</span>
                </div>
                <div className="flex flex-col items-center space-y-3 text-center">
                    <div className="flex items-end">
                        <img src="/svg/idollar.svg" alt="idollar" className="w-3 h-4 mb-3 lg:mb-7" />
                        <>
                            <span className="text-3.5xl lg:text-6.5xl hidden lg:block">
                                {calc(displayTotalProfilt)}
                            </span>
                            <span className="text-3.5xl lg:text-6.5xl lg:hidden">
                                {changeNum2Short(displayTotalProfilt)}
                            </span>
                        </>
                    </div>
                    <span className="text-sm text-funded-400 lg:text-xl">total profit of all traders for 2022</span>
                </div>
                <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="flex items-end">
                        <img src="/svg/idollar.svg" alt="idollar" className="w-3 h-4 mb-3 lg:mb-7" />
                        <>
                            <span className="text-3.5xl lg:text-6.5xl hidden lg:block">
                                {calc(displayAverageProfit)}
                            </span>
                            <span className="text-3.5xl lg:text-6.5xl lg:hidden">
                                {changeNum2Short(displayAverageProfit)}
                            </span>
                        </>
                    </div>
                    <span className="text-sm text-funded-400 lg:text-xl">average profit of our traders per month</span>
                </div>
            </div>
        </div>
    );
};
