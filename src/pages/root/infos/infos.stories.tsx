import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import Infos from "./infos";

export default {
    title: 'Root/Infos',
    component: Infos,
    argTypes: {setActive: {action: 'clicked'}},
} as ComponentMeta<typeof Infos>;

const Template: ComponentStory<typeof Infos> = (args) => <Infos />;

export const InfosContainer = Template.bind({});
InfosContainer.args = {

};
