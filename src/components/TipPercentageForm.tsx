type TipPercertageFormProps = {
    setTip: React.Dispatch<React.SetStateAction<number>>,
    tip: number
}

const tipOptions = [

    {
        id: 'tip-1',
        value: 0,
        label: '0'
    },
    {
        id: 'tip-10',
        value: .10,
        label: '10%'
    },
    {
        id: 'tip-20',
        value: .20,
        label: '20%'
    },
    {
        id: 'tip-50',
        value: .50,
        label: '50%'
    },
]

export default function TipPercentageForm ( { setTip, tip }: TipPercertageFormProps ) {
    return (
        <div>
            <h3 className="font-black text-2xl">Propina: { }</h3>

            <form action="">
                { tipOptions.map( tipOption => (
                    <div className="flex gap-2 m-4 font-bold" key={ tipOption.id }>
                        <label htmlFor={ tipOption.id }> { tipOption.label }</label>
                        <input
                            id={ tipOption.id }
                            type="radio"
                            name="tip"
                            value={ tipOption.value }
                            onChange={ e => setTip( +e.target.value ) }
                            checked={ tipOption.value === tip }
                        />
                    </div>
                ) ) }
            </form>

        </div>
    )
}
