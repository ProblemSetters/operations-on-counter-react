import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Counter from "./components/Counter"

test('initial ui renders correctly', () => {
    const { getByTestId } = render(<Counter />)
    let headerEl = getByTestId("header")
    let counterEl = getByTestId("counter")
    let addEl = getByTestId("add-button")
    let inputEl = getByTestId("input-field")
    let subEl = getByTestId("sub-button")
    let resetEl = getByTestId("reset-button")

    expect(headerEl.textContent).toBe("Counter")
    expect(counterEl.textContent).toBe("0")
    expect(addEl.textContent).toBe("Add")
    expect(inputEl.value).toBe("")
    expect(subEl.textContent).toBe("Sub")
    expect(resetEl.textContent).toBe("Reset Counter")
});

test("reset counter button works correctly", () => {
    const {getByTestId } = render(<Counter />)
    let counterEl = getByTestId("counter")
    let inputEl = getByTestId("input-field")
    let resetEl = getByTestId("reset-button")

    fireEvent.click(resetEl)

    expect(counterEl.textContent).toBe("0")
    expect(inputEl.value).toBe("")
})

test("changing value of input works correctly", () => {
    const { getByTestId } = render(<Counter />)
    const inputEl = getByTestId("input-field")

    fireEvent.change(inputEl, {
        target: {
            value: 10
        }
    });

    expect(inputEl.value).toBe("10");
});

test("addition works correctly", () => {
    const { getByTestId } = render(<Counter />)
    const inputEl = getByTestId("input-field")
    const addEl = getByTestId("add-button")
    const counterEl = getByTestId("counter")

    fireEvent.change(inputEl, {
        target: {
            value: 10
        }
    });

    fireEvent.click(addEl);

    expect(counterEl.textContent).toBe("10")
});

test("subtraction works correctly", () => {
    const { getByTestId } = render(<Counter />)
    const inputEl = getByTestId("input-field")
    const subEl = getByTestId("sub-button")
    const counterEl = getByTestId("counter")

    fireEvent.change(inputEl, {
        target: {
            value: 5
        }
    });

    fireEvent.click(subEl);

    expect(counterEl.textContent).toEqual("-5")
});

test("consecutive addition and subtraction works correctly", () => {
    const { getByTestId } = render(<Counter />)
    const inputEl = getByTestId("input-field")
    const addEl = getByTestId("add-button")
    const subEl = getByTestId("sub-button")
    const counterEl = getByTestId("counter")

    fireEvent.change(inputEl, {
        target: {
            value: 5
        }
    })

    expect(inputEl.value).toBe("5")

    fireEvent.click(addEl)

    expect(counterEl.textContent).toBe("5")

    fireEvent.change(inputEl, {
        target: {
            value: 10
        }
    })

    expect(inputEl.value).toBe("10")

    fireEvent.click(addEl)

    expect(counterEl.textContent).toBe("15")

    fireEvent.change(inputEl, {
        target: {
            value: 15
        }
    })

    expect(inputEl.value).toBe("15")
    
    fireEvent.click(subEl)

    expect(counterEl.textContent).toBe("0")

    fireEvent.change(inputEl, {
        target: {
            value: 10 
        }
    })

    expect(inputEl.value).toBe("10")

    fireEvent.click(subEl)

    expect(counterEl.textContent).toBe("-10")
});

test("having a non numeric input in input field disables the buttons", () => {
    const { getByTestId } = render(<Counter />)
    const inputEl = getByTestId("input-field")
    const addEl = getByTestId("add-button")
    const subEl = getByTestId("sub-button")

    fireEvent.change(inputEl, {
        target: {
            value: "abcd"
        }
    })

    expect(addEl).toBeDisabled()
    expect(subEl).toBeDisabled()

    fireEvent.change(inputEl, {
        target: {
            value: 5
        }
    })

    expect(addEl).toBeEnabled()
    expect(subEl).toBeEnabled()
     
    fireEvent.change(inputEl, {
        target: {
            value: 12.123
        }
    })

    expect(addEl).toBeDisabled()
    expect(subEl).toBeDisabled()
});