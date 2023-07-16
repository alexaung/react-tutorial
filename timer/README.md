# React: Timer Component

Create a timer component from the base React code.

The component has the following functionalities:

- The timer value decreases by 1 every second. For example, if the initial value is 100, after 1 second it becoms 99, etc.
- The value starts to decrease when the component is mounted.
- The initial value of the timer is set by a prop, *initial*.
- One the counter reachers 0, it should stop.
- The "Stop Timer" button stops the timer at its current value.

The following `data-testid` attributes are required in the component for the tests to pass:

| Component         | Attribute     |
|-------------------|---------------|
| Title             | `app-title`   |
| Timer value       | `timer-value` |
| Stop timer button | `stop-button` |

Please note that the components have these `data-testid` attributes for test cases and certain classes and `id`s for rendering purposes. They should not be changed.

## Software Instructions

- React Version: 16.13.1
- Default Port: 8000

## Git Instructions

Use the following commands to work with this project

- Run: `npm start`
- Test: `npm test`
- Install: `npm install`