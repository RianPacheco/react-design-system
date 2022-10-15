import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from './Text'

export default{
    title: 'Components/Text',
    component: Text,
    args: {
        children: 'lorem ipsum.',
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        }
    }
} as Meta<TextProps>

export const Default: StoryObj <TextProps> = {}

export const small: StoryObj <TextProps> = {
    args:{
        size: 'sm'
    }
}

export const large: StoryObj <TextProps> = {
    args:{
        size: 'lg'
    }
}

export const CustomComponent: StoryObj <TextProps> = {
     args: {
        asChild: true,
        children: (
            <h1>Heading with H1</h1>
        )
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        },
        asChild: {
            table: {
                disable: true
            }
        }
    }
}
