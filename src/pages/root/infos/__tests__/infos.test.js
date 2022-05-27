import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import UserMockData from "../../container/mocks/user.mock"
import {useUserDataStore} from "../../store/apiDataStore";
import Infos from "../infos";
import {fireEvent} from "@testing-library/dom";

const initialStoreState = useUserDataStore.getState()
const setUserData = initialStoreState.setUserData

beforeAll(() => {
    // Set the state from the mocked data
    useUserDataStore.setState(initialStoreState, true)
    setUserData(UserMockData)
})

test('Text content on the first render should be true', async () => {
    render(<Infos/>)

    const dataText = screen.getByTestId("info-text")
    expect(dataText).toBeInTheDocument()
    expect(dataText).toHaveTextContent("brooklyn.robinson@example.com")
})

test('Info text should change on active button changing', async () => {
    render(<Infos active={0} setActive={jest.fn}/>)

    const infoButtonsWrapper = screen.getByTestId("info-buttons")
    const infoText = screen.getByTestId("info-text")

    expect(infoButtonsWrapper.children).toHaveLength(5)

    const reactiveButton = infoButtonsWrapper.children[0]
    const icon = reactiveButton.children[0]
    const shadowIcon = reactiveButton.children[1]

    // Get the second reactive button and icons
    const secondReactiveButton = infoButtonsWrapper.children[1]
    const secondIcon = secondReactiveButton.children[0]
    const secondShadowIcon = secondReactiveButton.children[1]

    const previousText = infoText.textContent
    fireEvent.mouseOver(secondReactiveButton)
    const currentText = infoText.textContent

    expect(previousText !== currentText).toBeTruthy()
})
