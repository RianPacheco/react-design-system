import { InputHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx'
import { Slot } from '@radix-ui/react-slot';


interface TextInputRootProps {
    children: ReactNode;
}

function TextInputRoot(props: TextInputProps) {
    return(
        <div className=" flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 w-full ">
        {props.children}
        </div>
    )
}

TextInputRoot.displayName = 'TextInput.Root';


export interface TextInputIconProps{
    children: ReactNode;
}


function TextInputIcon(props: TextInputIconProps) {
    return (
    <Slot className='w-6 h-6 text-gray-400'>
        {props.children}
    </Slot>
    )
}

TextInputIcon.displayName = 'TextInput.Icon';

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function TextInputInput(props: TextInputProps){
    return (
            <input
                className='bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400'
                {...props}
                />
    )
}

TextInputInput.displayName = 'TextInput.Input';


export const TextInput = {
    Root: TextInputRoot,
    Icon: TextInputIcon,
    input: TextInputInput
}