import {Meta, StoryObj} from "@storybook/react"
import { Envelope} from "phosphor-react";
import { TextInput, ITextInputInputProps, ITextInputRootProps } from "./TextInput";
export default{
    title:'Components/TextInput',
    component:TextInput.Root,
    args:{
        children:(
            <>
                <TextInput.Icon>
                    <Envelope/>
                </TextInput.Icon>
                <TextInput.Input placeholder="Type your email address"/>
            </>
        ),
    },
    argTypes:{
        children:{
            table:{
                disable:true
            }
        },
    }
}as Meta<ITextInputRootProps>

export const Default:StoryObj<ITextInputRootProps>={}
export const WithoutIcon:StoryObj<ITextInputRootProps>={
    args:{
        children:<TextInput.Input placeholder="Type your email address"/>
    }
}
