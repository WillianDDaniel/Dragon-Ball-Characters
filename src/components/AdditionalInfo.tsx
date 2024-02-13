interface additionalInfoProps {
    additional: any
}

export default function AdditionalInfo(props: additionalInfoProps) {
    return (
        <div className={`
            flex flex-col items-center justify-center w-full 
            text-sm p-1 m-3 h-auto
            sm-2:m-2 sm-2:text-center
            lg:h-[22vh] lg:m-0
        `}>
            <p>
                <span className="text-amber-400 font-semibold">
                    Pai:&nbsp;
                </span>
                {props.additional.father}
            </p>

            <p>
                <span className="text-amber-400 font-semibold">
                    Mãe:&nbsp;
                </span>
                {props.additional.mother}
            </p>
            
            <p>
                <span className="text-amber-400 font-semibold">
                    Poder:&nbsp;
                </span>
                {props.additional.power}
            </p>

            <p className="text-base text-yellow-300">
                {props.additional.more}
            </p>
        </div>
    )
}