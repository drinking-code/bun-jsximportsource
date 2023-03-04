export interface Props {
    [key: string]: any
}

export class VirtualElement<P = Props> {
    type: string
    function?: (props: Props) => VirtualElement
    props: Props

    constructor(type: VirtualElement['type'], props: Props) {
        this.type = type
        if (typeof type === 'function') {
            this.type = 'function'
            this.function = type
        }
        this.props = props
    }
}
