import React from 'react';
import {render, screen} from '@testing-library/react';
import {waitFor} from "@testing-library/dom";
import RootContainer from "../root.container";

test('Loading should be appear on the screen on first render', async () => {
    render(<RootContainer/>);

    const container = screen.getByTestId("root-container")

    expect(container.textContent).toBe("... Loading ...")
})

test('Error should be appear on the screen after wrong api call', async () => {
    render(<RootContainer url="https://randomuser.me/apia/"/>);

    const container = screen.getByTestId("root-container")

    await waitFor(() => expect(container.textContent).toBe("... Error ..."))
})

test('Error and loading should not be appear on the screen after correct api call', async () => {
    render(<RootContainer url="https://randomuser.me/api/"/>);

    const container = screen.getByTestId("root-container")

    await waitFor(() => expect(container.textContent).not.toBe("... Loading ..."))
    await waitFor(() => expect(container.textContent).not.toBe("... Error ..."))
})
