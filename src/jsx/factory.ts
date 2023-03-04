import {Props, VirtualElement} from './VirtualElement'

function createVirtualElement(
    type: VirtualElement['type'] | typeof Fragment,
    props: Props & { children: VirtualElement | VirtualElement[] }
): VirtualElement | VirtualElement[] {
    if (type === Fragment)
        return props.children

    return new VirtualElement(type, props)
}

const Fragment = Symbol.for('Fragment')

export {
    createVirtualElement as jsx,
    createVirtualElement as jsxs,
    createVirtualElement as jsxDEV,
    Fragment
}
