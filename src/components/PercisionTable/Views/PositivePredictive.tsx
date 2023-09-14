import Table from '@/components/PercisionTable/Table';
import TableHeaderCell from '@/components/PercisionTable/TableHeaderCell';
import Typography from '@/components/Typography/Typography';
import TableDataCell from '@/components/PercisionTable/TableDataCell';
import getPercentageColor from '@/utils/getPercentageColor';
import getComparativeColor from '@/utils/getComparativeColor';
import {PrecisionResults} from '@/types';
import {FC} from 'react';
import getPositivePredictiveValue from '@/utils/getPositivePredictiveValue';
import getComparativePpvRate from '@/utils/getComparativePpvRate';

export interface PositivePredictiveProps {
    data: PrecisionResults
}

const PositivePredictive:FC<PositivePredictiveProps> = ({data}) => {
    const {clients} = data;
    const clientNames = Object.keys(clients)


    return (
        <Table>
            <thead>
            <tr className="border-b border-dark200">
                <th></th>
                {clientNames.map((name, index) => (
                    <TableHeaderCell key={index} text={name}/>
                ))}
            </tr>
            </thead>
            <tbody>
            {clientNames.map((cName, index) => (
                <tr key={index}>
                    <td className="p-4">
                        <Typography isBold type="text-tiny">{cName}</Typography>
                    </td>
                    {clientNames.map((rName, cIndex) => {
                        const data = clients[cName]
                        const ppvData = getPositivePredictiveValue(data);
                        const isTPR = cName === rName;
                        const comparativePpv = getComparativePpvRate(data, rName);
                        const result = isTPR ? ppvData : comparativePpv

                        return (
                            <TableDataCell key={cIndex} animDelay={(cIndex * 25) * index}
                                           isDarkText={isTPR}
                                           cellColor={isTPR ? getPercentageColor(ppvData) : getComparativeColor(comparativePpv) }
                                           data={result}/>
                        )
                    })}
                </tr>
            ))}
            </tbody>
        </Table>
    )
}

export default PositivePredictive