import {render, screen} from "@testing-library/react";
import InfosButtons from "../infos-buttons";
import {fireEvent} from "@testing-library/dom";
import React from "react";

test('The first button should be active on first render', async () => {
    render(<InfosButtons active={0} setActive={jest.fn}/>)

    const infoButtonsWrapper = screen.getByTestId("info-buttons")
    const reactiveButton = infoButtonsWrapper.children[0]
    const icon = reactiveButton.children[0]
    const shadowIcon = reactiveButton.children[1]

    expect(icon).toHaveStyle("transform: translateY(55px)")
    expect(shadowIcon).toHaveStyle("transform: translateY(0px)")
})

test('The first button should Not be active', async () => {
    render(<InfosButtons active={1} setActive={jest.fn}/>)

    const infoButtonsWrapper = screen.getByTestId("info-buttons")
    const reactiveButton = infoButtonsWrapper.children[0]
    const icon = reactiveButton.children[0]
    const shadowIcon = reactiveButton.children[1]

    expect(icon).toHaveStyle("transform: translateY(0px)")
    expect(shadowIcon).toHaveStyle("transform: translateY(-55px)")
})

test('The second button should be active on mouse over', async () => {
    render(<InfosButtons active={1} setActive={jest.fn}/>)

    const infoButtonsWrapper = screen.getByTestId("info-buttons")

    // Get the second reactive button and icons
    const secondReactiveButton = infoButtonsWrapper.children[1]
    const secondIcon = secondReactiveButton.children[0]
    const secondShadowIcon = secondReactiveButton.children[1]

    fireEvent.mouseEnter(secondReactiveButton)

    expect(secondIcon).toHaveStyle("transform: translateY(55px)")
    expect(secondShadowIcon).toHaveStyle("transform: translateY(0px)")
})

test('The first button should Not be active on mouse enters the second button', async () => {
    render(<InfosButtons active={1} setActive={jest.fn}/>)

    const infoButtonsWrapper = screen.getByTestId("info-buttons")

    // Get the first reactive button and icons
    const firstReactiveButton = infoButtonsWrapper.children[0]
    const icon = firstReactiveButton.children[0]
    const shadowIcon = firstReactiveButton.children[1]

    // Get the second reactive button
    const secondReactiveButton = infoButtonsWrapper.children[1]

    // Mouse enters the second reactive button
    fireEvent.mouseOver(secondReactiveButton)

    expect(icon).toHaveStyle("transform: translateY(0px)")
    expect(shadowIcon).toHaveStyle("transform: translateY(-55px)")
})

test('The second button should be active on mouse click', async () => {
    render(<InfosButtons active={1} setActive={jest.fn}/>)

    const infoButtonsWrapper = screen.getByTestId("info-buttons")

    // Get the second reactive button and icons
    const secondReactiveButton = infoButtonsWrapper.children[1]
    const secondIcon = secondReactiveButton.children[0]
    const secondShadowIcon = secondReactiveButton.children[1]

    fireEvent.click(secondReactiveButton)

    expect(secondIcon).toHaveStyle("transform: translateY(55px)")
    expect(secondShadowIcon).toHaveStyle("transform: translateY(0px)")
})

test('The first button should Not be active on mouse click the second button', async () => {
    render(<InfosButtons active={1} setActive={jest.fn}/>)

    const infoButtonsWrapper = screen.getByTestId("info-buttons")

    // Get the first reactive button and icons
    const firstReactiveButton = infoButtonsWrapper.children[0]
    const icon = firstReactiveButton.children[0]
    const shadowIcon = firstReactiveButton.children[1]

    // Get the second reactive button
    const secondReactiveButton = infoButtonsWrapper.children[1]

    // Mouse enters the second reactive button
    fireEvent.click(secondReactiveButton)

    expect(icon).toHaveStyle("transform: translateY(0px)")
    expect(shadowIcon).toHaveStyle("transform: translateY(-55px)")
})
