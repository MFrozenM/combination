import React from 'react'
import {act, render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Avatar from "../avatar";
import UserMockData from "../../container/mocks/user.mock"
import {useUserDataStore} from "../../store/apiDataStore";

const initialStoreState = useUserDataStore.getState()
const setUserData = initialStoreState.setUserData

beforeAll(() => {
    // Set the state from the mocked data
    useUserDataStore.setState(initialStoreState, true)
})

test('loads and displays avatar', async () => {
    render(<Avatar/>)
    await act(() => {
        setUserData(UserMockData)
    });

    const avatar = screen.getByRole("img")
    expect(avatar).toBeInTheDocument()
    expect(avatar.src !== "").toBeTruthy()
})
