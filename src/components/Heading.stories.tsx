import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from './Heading'

export default{
    title: 'Components/Heading',
    component: Heading,
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

} as Meta<HeadingProps>

export const Default: StoryObj <HeadingProps> = {}

export const small: StoryObj <HeadingProps> = {
    args:{
        size: 'sm'
    }
}

export const large: StoryObj <HeadingProps> = {
    args:{
        size: 'lg'
    }
}

export const CustomComponent: StoryObj <HeadingProps> = {
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
