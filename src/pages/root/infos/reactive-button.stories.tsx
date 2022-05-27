import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import ReactiveButton from "./reactive-button";
import {ReactComponent as PhoneIcon} from "../../../assets/icons/phone.svg";

export default {
    title: 'Root/Infos',
    component: ReactiveButton,
    argTypes: { setActive: { action: 'clicked' } },
} as ComponentMeta<typeof ReactiveButton>;

const Template: ComponentStory<typeof ReactiveButton> = (args) => <ReactiveButton {...args} />;

export const Reactive_Button = Template.bind({});
Reactive_Button.args = {
    Icon: PhoneIcon,
    active: false,
};
