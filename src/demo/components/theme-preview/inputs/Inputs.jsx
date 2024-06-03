import { Input } from '../../../../lib/interfaces/inputs/Input';
import './styles/inputs.scss';

function Row({ n, style = '' }) {

    const styleType = `${style}-${n}`

    return <div
        key={n}
        className='input-row'
    >
        <Input
            styleType={styleType}
            defaultValue='Edit Me!'
        />

        <Input
            styleType={styleType}
            placeholder='Add to Me!'
        />

        <Input
            styleType={styleType}
            defaultValue="Don't Edit Me!"
            disabled
        />

        <Input
            styleType={styleType}
            placeholder="Don't Add to Me!"
            disabled
        />

        <Input
            styleType={styleType}
            defaultValue='Read Me!'
            readOnly
        />

        <Input
            styleType={styleType}
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