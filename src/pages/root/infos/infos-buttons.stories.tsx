import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import InfosButtons from "./infos-buttons";

export default {
    title: 'Root/Infos',
    component: InfosButtons,
    argTypes: {setActive: { action: 'clicked' }},
} as ComponentMeta<typeof InfosButtons>;

const Template: ComponentStory<typeof InfosButtons> = (args) => <InfosButtons {...args} />;

export const Infos_Buttons = Template.bind({});
Infos_Buttons.args = {
    active: 1,
};
