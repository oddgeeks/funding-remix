import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

interface Props {
    title?: string;
    description: string;
    videoSrc: string;
}

export const WhyMFFXWhyChose: React.FC<Props> = (p) => {
    const [isOpenModal, setOpenModal] = useState(false);

    return (
        <>
            <ModalVideo
                channel="youtube"
                isOpen={isOpenModal}
                videoId={'8TZ_qiOeC5U?t=1750'}
                onClose={() => setOpenModal(false)}
            />
            <div
                data-testid="mffx-why-mffx-why-chose"
                className="flex flex-col lg:flex-row items-center justify-around gap-x-8 gap-y-8 w-full pt-24 pb-24 lg:pt-[220px]">
                <div className="flex flex-col flex-1 gap-y-4 lg:gap-y-8 lg:px-16">
                    <h2 className="text-center lg:text-start text-2xl lg:text-4.5xl font-semibold">
                        Why our traders <span className="text-funded-80">chose us</span>
                    </h2>
                    <div className="textl-sm text-funded-400 lg:text-xl">{p.description}</div>
                </div>
                <div className="relative flex-1 mx-auto">
                    <button
                        onClick={() => setOpenModal(!isOpenModal)}
                        type="button"
                        className="relative block w-full overflow-hidden border-4 border-funded-80 rounded-3xl focus:outline-none focus:ring-2 focus:ring-funded-80 focus:ring-offset-4">
                        <div>
                            <video src={p.videoSrc} muted loop autoPlay />
                        </div>
                        <span
                            className="absolute inset-0 flex items-center justify-center w-full h-full transition duration-300 ease-in-out delay-150 shadow-lg hover:-translate-y-1 hover:scale-110 animate-ping"
                            aria-hidden="true">
                            <svg className="w-20 h-20 text-funded-80" fill="currentColor" viewBox="0 0 84 84">
                                <circle opacity="0.9" cx={42} cy={42} r={42} fill="white" />
                                <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </>
    );
};
