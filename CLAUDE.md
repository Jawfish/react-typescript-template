# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Template Repository

This is a React + TypeScript + shadcn + Tailwind project. Zustand is available for state management and Vitest for tests. Focus on conventions and paradigms that make the codebase maintainable and testable.

## Commands

### Docker

- `docker compose up` - Start development server in Docker (http://localhost:5173)
- `docker compose up -d` - Start in detached mode
- `docker compose down` - Stop and remove containers

### Testing

- `bun test` - Run vitest in watch mode
- `bun coverage` - Run tests with coverage report
  - Coverage enforces 100% on all `.ts` files (not `.tsx`)
  - Excludes: test files, generated files, type definitions, `src/lib/shadcn/**`
  - Output shows uncovered line numbers when thresholds fail

### Justfile Shortcuts

- `just fix`
- `just test`
- `just coverage`

## Type System

### Branded Types

Use branded types from `src/lib/brand.ts` to avoid primitive obsession:

```typescript
import type { Branded } from "@/lib/brand";

type UserId = Branded<string, "UserId">;
type Email = Branded<string, "Email">;

// This prevents accidentally using a string where a UserId is expected
function getUser(id: UserId) {
  /* ... */
}
```

## Architecture

### Functional Core, Imperative Shell

Separate business logic into pure functions in standalone `.ts` files, keeping side effects in the shell (React components, API calls, etc.):

- **Pure logic (.ts files)**: Functions that take inputs and return outputs without side effects.
- **Imperative shell (.tsx files)**: React components, routing, API calls, and other side effects.

Example structure:

```
src/
  lib/
    validation.ts      # Pure validation logic
    formatting.ts      # Pure formatting functions
  components/
    UserForm.tsx       # React component with side effects
```

## Testing Philosophy

### Test Pure Logic Only

Only `.ts` files require 100% coverage. These should contain pure functions that are easily testable:

```typescript
// src/lib/validation.ts
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
```

```typescript
// src/lib/validation.test.ts
import { describe, expect, test } from "vitest";
import { isValidEmail } from "./validation";

describe("isValidEmail", () => {
  test("valid email returns true", () => {
    expect(isValidEmail("user@example.com")).toBe(true);
  });

  test("invalid email returns false", () => {
    expect(isValidEmail("invalid")).toBe(false);
  });
});
```

### No Mocks

Write tests without mocks. Focus on behavior, not implementation:

- Prefer state-based testing over interaction-based testing
- Test what the code does, not how it does it
- Use real implementations or nullables/fakes for dependencies
- Write narrow, sociable tests that use real dependencies where possible

### Test Naming

Use plain English descriptions following the ACE pattern (Action, Condition, Expectation):

```typescript
// Good: Describes behavior in plain English
test("user with empty email is rejected");
test("order total includes tax for california residents");

// Bad: Includes implementation details
test("validateUser_emptyEmail_returnsFalse");
test("test_calculate_tax_for_ca");
```

## Project Structure

- `src/lib/` - Pure utility functions and business logic
- `src/lib/brand.ts` - Branded type definitions
- `src/lib/shadcn/` - Shadcn UI utilities (excluded from coverage)
- `src/components/shadcn/ui/` - Shadcn UI components
- `src/routes/` - TanStack Router route files
- `src/routeTree.gen.ts` - Auto-generated route tree (excluded from coverage)

## Path Aliases

The `@` alias maps to `src/`:

```typescript
import { Branded } from "@/lib/brand";
import { Button } from "@/components/shadcn/ui/button";
```

## Hooks

This repository has Claude Code hooks configured:

- **PostToolUse (Write/Edit)**: Runs `just lint` after file modifications
- **Stop**: Runs `just fix && just coverage` when conversation ends
  - Automatically formats code and enforces 100% coverage on `.ts` files
  - Will block if coverage is below 100% or tests fail
  - Shows which lines are uncovered when coverage fails

## Modern Tooling Preferences

This template uses modern tools over legacy alternatives:

- **bun** over npm/yarn/pnpm
- **biome** over eslint/prettier
- **vitest** over jest
- **vite** over webpack/parcel
- **v8 coverage** over istanbul

When suggesting dependencies or tools, prefer newer, faster alternatives that align with this philosophy.
