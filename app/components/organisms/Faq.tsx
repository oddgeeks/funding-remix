import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Markdown from 'markdown-to-jsx';
import { ArrowUpRightIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import classNames from 'classnames';

import type { FaqsType } from '~/types';

export const Faq = ({ faqsData, className }: { faqsData: FaqsType; className?: string }) => (
    <div data-testid="mffx-faq" id="faq" className={classNames('mx-auto md:max-w-4xl', className)}>
        <div className="mx-auto">
            <div className="py-10 text-center">
                {faqsData.attributes.Title && (
                    <div className="font-lexend text-2xl md:text-[40px] font-semibold">{faqsData.attributes.Title}</div>
                )}
                {faqsData.attributes.subTitle && (
                    <div className="mt-2 font-normal md:mt-8 text-md md:text-xl font-lexend text-funded-400">
                        {faqsData.attributes.subTitle}
                    </div>
                )}
            </div>
            {faqsData.attributes.Accordion && (
                <div>
                    {faqsData.attributes.Accordion.map((item) => (
                        <div key={item.id}>
                            <Accordion
                                sx={{
                                    padding: '10px',
                                    background: '#232323',
                                    color: '#A9A9A9',
                                }}>
                                <AccordionSummary
                                    expandIcon={<ChevronDownIcon className="w-4 h-4 text-funded-80" />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header">
                                    <div className="xl:text-xl">{item.Question}</div>
                                </AccordionSummary>

                                <AccordionDetails>
                                    <Markdown
                                        options={{
                                            overrides: {
                                                h4: {
                                                    component: 'h4',
                                                    props: {
                                                        style: {
                                                            fontSize: '18px',
                                                            fontFamily: 'Lexend',
                                                        },
                                                    },
                                                },
                                                p: {
                                                    component: 'p',
                                                    props: {
                                                        style: {
                                                            fontSize: '16px',
                                                        },
                                                    },
                                                },
                                            },
                                        }}>
                                        {item.Answer}
                                    </Markdown>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    ))}
                </div>
            )}
            {faqsData.attributes.faqSiteLink && (
                <a
                    href={faqsData.attributes.faqSiteLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-1 pt-5 mx-auto mt-2 no-underline text-funded-80">
                    Read all FAQs <ArrowUpRightIcon className="w-4 h-4" />
                </a>
            )}
        </div>
    </div>
);
