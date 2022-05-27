import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import InfosButtons from "../infos-buttons";

test('Info buttons wrapper should be rendered successfully', async () => {
    render(<InfosButtons active={0} setActive={() => jest.fn()}/>)

    const infoButtonsWrapper = screen.getByTestId("info-buttons")
    expect(infoButtonsWrapper).toBeInTheDocument()
})

test('Info buttons wrapper should have five buttons', async () => {
    render(<InfosButtons active={0} setActive={jest.fn}/>)

    const infoButtonsWrapper = screen.getByTestId("info-buttons")
    expect(infoButtonsWrapper.children).toHaveLength(5)
})
