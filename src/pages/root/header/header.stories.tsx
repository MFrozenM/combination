import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import Header from "./header";

export default {
    title: 'Root/Header',
    component: Header,
    argTypes: {setActive: {action: 'clicked'}},
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => <Header />;

export const InfosContainer = Template.bind({});
InfosContainer.args = {

};
