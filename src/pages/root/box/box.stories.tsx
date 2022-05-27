import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import Box from "./box";

export default {
    title: 'Root/Box',
    component: Box,
    argTypes: {setActive: {action: 'clicked'}},
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = () => <Box />;

export const BoxContainer = Template.bind({});
BoxContainer.args = {

};
