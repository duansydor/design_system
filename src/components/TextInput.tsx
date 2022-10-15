import {clsx} from 'clsx';
import {Slot} from "@radix-ui/react-slot";
import { InputHTMLAttributes, ReactNode } from 'react';

export interface ITextInputRootProps{
    children:ReactNode;
}

function TextInputRoot(props:ITextInputRootProps){
    return(
        <div className='flex items-center h-12 gap-3 w-full py-4 px-3 rounded bg-gray-800 focus-within:ring-2 ring-cyan-300'>
            {props.children}
        </div>
    )
}
export interface ITextInputIconProps{
    children:ReactNode
}
function TextInputIcon(props:ITextInputIconProps){
    return(
        <Slot className='w-6 h-6 text-gray-400'>
            {props.children}
        </Slot>
    )
}
TextInputIcon.displayName="TextInputIcon"
export interface ITextInputInputProps extends InputHTMLAttributes<HTMLInputElement>{ }
function TextInputInput(props:ITextInputInputProps) {
    return(
        <input
        className="bg-transparent flex-1 text-gray-100 text-xs outline-none placeholder:text-gray-400"
        {...props}
        />
    )
}

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon:TextInputIcon
}