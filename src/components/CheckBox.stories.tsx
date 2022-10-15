import {Meta, StoryObj} from "@storybook/react"
import { CheckBox, ICheckBoxProps } from "./CheckBox";
import {Text} from "./Text"
export default{
    title:'Components/CheckBox',
    component:CheckBox,
    args:{
        children:'Create Account',
    },
    argTypes:{},
    decorators:[
        (Story) => {
            return(
                <div className="flex items-center gap-2">
                    {Story()}
                    <Text size="sm">
                        Lembrar-me de mim por 30 dias
                    </Text>
                </div>
            )
        }
    ]
}as Meta<ICheckBoxProps>

export const Default:StoryObj<ICheckBoxProps>={}
