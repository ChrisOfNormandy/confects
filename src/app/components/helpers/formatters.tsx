import { HTMLDivProps, getClassName } from "@lib/main";

function Show({ children, ...props }: HTMLDivProps) {
    return <div
        className='show'
        {...props}
    >
        {children}
    </div>
}

export function Display({ heading, children, ...props }: HTMLDivProps & { heading: string }) {
    return <div
        className={getClassName('display', heading.toLowerCase())}
        {...props}
    >
        <h2>
            {heading}
        </h2>

        <Show>
            {children}
        </Show>
    </div>
}