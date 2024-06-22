import { Input } from '../../../../../lib/main';
import './styles/inputs.scss';

function Row({ n, style = '' }: { n: number, style: string }) {

    const styleType = `${style}-${n}`

    return <div
        key={n}
        className='input-row'
    >
        <Input
            category={styleType}
            defaultValue='Edit Me!'
        />

        <Input
            category={styleType}
            placeholder='Add to Me!'
        />

        <Input
            category={styleType}
            defaultValue="Don't Edit Me!"
            disabled
        />

        <Input
            category={styleType}
            placeholder="Don't Add to Me!"
            disabled
        />

        <Input
            category={styleType}
            defaultValue='Read Me!'
            readOnly
        />

        <Input
            category={styleType}
            placeholder="Don't Read Me!"
            readOnly
            disabled
        />
    </div>
}

export default function Inputs() {
    return <div>
        <h3>
            Inputs
        </h3>

        {[0, 1, 2, 3, 4].map((n) => <Row key={n} n={n} style='default' />)}
        {[0, 1, 2, 3, 4].map((n) => <Row key={n} n={n} style='inverse' />)}
        {[0, 1, 2, 3, 4].map((n) => <Row key={n} n={n} style='compliment' />)}
    </div>
}