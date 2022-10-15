import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx'


export interface ButtonProps {
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    asChild?: boolean;
}

export function Button({ size = 'md', children, asChild }: ButtonProps){

    const Comp = asChild ? Slot : 'button';

    return (
        <Comp
            className={clsx(
            'py-4 px-12 bg-cyan-300 rounded font-semibold text-black text-sm w-full transition-colors cursor-pointer hover:bg-cyan-500 focus:ring-2 ring-White',
            )}>
            {children}
            </Comp>
    )
}