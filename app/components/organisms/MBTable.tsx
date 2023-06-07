import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';

interface MobileData {
    challenge?: '1-Step' | '2-Steps';
    data: Array<{
        id: number;
        rows: { title: string; columns: string[] }[];
    }>;
    selectedAmount: {
        id: number;
    };
}

export const MobileTable = ({ data, challenge, selectedAmount }: MobileData) => (
    <div className="!px-0">
        <div className="flex flex-col items-center justify-center w-full px-8 py-2 mx-auto md:my-5">
            <table className="w-full my-5 drop-shadow-xl">
                <thead>
                    {data &&
                        data
                            .filter((el: { id: number }) => el.id === selectedAmount.id)
                            .map((el) =>
                                el.rows
                                    .filter((row) => row.title !== 'Refundable Registration Fee')
                                    .map((row) => (
                                        <tr key={uuidv4()}>
                                            <th
                                                className={classNames(
                                                    row.title === ''
                                                        ? 'px-6 py-3 md:text-lg bg-funded-600 font-medium text-left border-2 text-funded-300 border-b-funded-600 border-r-funded-600 border-l-funded-600 border-t-funded-600'
                                                        : 'px-6 py-3 md:text-lg bg-funded-700 font-medium text-left border-2 text-funded-300 border-b-funded-600 border-r-funded-600 border-l-funded-600 border-t-funded-600'
                                                )}>
                                                {row.title}
                                            </th>
                                            {row.columns.map((col) => (
                                                <th
                                                    key={uuidv4()}
                                                    className={classNames(
                                                        col === 'Phase 1' || col === 'Phase 2'
                                                            ? 'px-2 py-3 md:text-lg font-medium text-center text-funded-300 border-2 bg-funded-700 border-b-funded-600 border-r-funded-600 border-l-funded-600 border-t-funded-600'
                                                            : 'px-2 py-3 md:text-lg font-medium text-center text-white border-2 bg-funded-700 border-b-funded-600 border-r-funded-600 border-l-funded-600 border-t-funded-600'
                                                    )}>
                                                    {col}
                                                </th>
                                            ))}
                                        </tr>
                                    ))
                            )}
                    {data &&
                        challenge === '2-Steps' &&
                        data
                            .filter((el: { id: number }) => el.id === selectedAmount.id)
                            .map((el) => (
                                <tr key={uuidv4()}>
                                    <th className="px-6 py-3 font-medium text-left border-2 md:text-lg bg-funded-700 text-funded-300 border-b-funded-600 border-r-funded-600 border-l-funded-600 border-t-funded-600">
                                        {el.rows[7].title}
                                    </th>
                                    <th
                                        colSpan={2}
                                        className="px-2 py-3 font-medium text-center text-white border-2 md:text-lg bg-funded-700 border-b-funded-600 border-r-funded-600 border-l-funded-600 border-t-funded-600">
                                        {el.rows[7].columns[0]}
                                    </th>
                                </tr>
                            ))}
                    {data &&
                        challenge === '1-Step' &&
                        data
                            .filter((el: { id: number }) => el.id === selectedAmount.id)
                            .map((el) =>
                                el.rows
                                    .filter((row) => row.title === 'Refundable Registration Fee')
                                    .map((row) => (
                                        <tr key={uuidv4()}>
                                            <th className="px-6 py-3 font-medium text-left border-2 md:text-lg bg-funded-700 text-funded-300 border-b-funded-600 border-r-funded-600 border-l-funded-600 border-t-funded-600">
                                                {row.title}
                                            </th>
                                            {row.columns.map((col) => (
                                                <th
                                                    key={uuidv4()}
                                                    className="px-2 py-3 font-medium text-center text-white border-2 md:text-lg bg-funded-700 border-b-funded-600 border-r-funded-600 border-l-funded-600 border-t-funded-600">
                                                    {col}
                                                </th>
                                            ))}
                                        </tr>
                                    ))
                            )}
                </thead>
            </table>
        </div>
    </div>
);
