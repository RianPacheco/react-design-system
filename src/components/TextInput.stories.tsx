import { Meta, StoryObj } from '@storybook/react'
import { Envelope } from 'phosphor-react'
import {TextInput, TextInputProps} from './TextInput'

export default{
    title: 'Components/TextInput',
    component: TextInput.Root,
    args: {
        children: [
            <>
                <TextInput.Icon>
                    < Envelope />
                </TextInput.Icon>
                <TextInput.input placeholder="Envie Seu E-Mail Aqui" />
            </>
        ],
    },
    argTypes: {},

} as Meta<TextInputProps>

export const Default: StoryObj <TextInputProps> = {}

export const WithoutIcon: StoryObj <TextInputProps> = {
    args: {
        children: [
            <TextInput.input placeholder="Envie Seu E-Mail Aqui" />
        ],
    }
}
