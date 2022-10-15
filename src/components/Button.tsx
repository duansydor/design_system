import {clsx} from 'clsx';
import {Slot} from "@radix-ui/react-slot";
import { ReactNode } from 'react';
export interface IButtonProps{
    children:ReactNode;
    asChild?:boolean;
}

export function Button({children, asChild}:IButtonProps) {
    const Comp = asChild ? Slot:'button';
    return(
        <Comp 
            className={clsx(
                'w-full bg-cyan-500 font-bold px-4 py-2 rounded text-black text-sm hover:bg-cyan-300 '
            )}>
            {children}
        </Comp>
    )
}