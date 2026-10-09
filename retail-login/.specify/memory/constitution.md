# Retail Login Constitution

## Core Principles

### I. Clean Code and Maintainability
All implementation work must prioritize clarity, readability, and long-term maintainability. Code must use meaningful names, small focused functions, consistent structure, and straightforward logic. Features should be decomposed into reusable, testable units rather than monolithic blocks. Unnecessary complexity, dead code, and duplication are not allowed. Every change must be easy to understand without requiring guesswork.

### II. Responsive Design and User-Centered Experience
The user experience must be mobile-first, responsive, and accessible across common screen sizes and devices. Layouts must adapt gracefully to smaller viewports without sacrificing readability or usability. The interface should be visually consistent, lightweight, and optimized for practical retail login interactions. Accessibility considerations such as readable contrast, clear focus states, and semantic markup are mandatory.

### III. Test-First Unit Testing Only
Unit tests are required for behavior that is implemented. Tests must be written to validate logic and UI behavior at the component or function level before final implementation is considered complete. End-to-end, integration, and browser automation tests are explicitly out of scope unless the project explicitly requires them. The default standard is focused, deterministic unit tests that verify the expected behavior without unnecessary setup.

### IV. Simplicity Before Scope Expansion
Features must be implemented in the smallest reasonable form that satisfies the requirement. Any added complexity must be justified by a demonstrated user or technical need. Avoid speculative abstractions, over-engineering, and unnecessary dependencies. Prefer straightforward solutions that remain easy to debug and extend.

### V. Quality Gates and Review Discipline
All work must be reviewed against these principles before it is considered complete. Code quality, responsive behavior, and test coverage must be checked in the same review pass. If a change conflicts with maintainability, responsiveness, or the unit-test-only standard, it is not acceptable.

## Additional Constraints

- Use modern, maintainable frontend patterns appropriate to the project stack.
- Favor component composition over duplication.
- Ensure all UI states are understandable and usable on both mobile and desktop screens.
- Keep styling and layout decisions intentional, simple, and consistent.
- Write only unit tests; do not add broader test frameworks or testing layers unless explicitly required by the task.

## Development Workflow

1. Start by clarifying the required behavior and scope.
2. Implement the smallest robust solution that meets the requirement.
3. Add focused unit tests that validate the expected behavior.
4. Check the result for clean code quality and responsive behavior.
5. Confirm the change aligns with this constitution before completion.

## Governance

This constitution supersedes ad hoc implementation shortcuts and unreviewed complexity. Any change to project behavior, structure, or standards must remain consistent with clean code, responsive design, and the unit-test-only approach. Exceptions require explicit documentation and clear justification.

**Version**: 1.0.0 | **Ratified**: 2026-10-09 | **Last Amended**: 2026-10-09
