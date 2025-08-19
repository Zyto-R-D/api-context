# @zyto/api-context

**Shared API contracts for Zyto** — request/response DTOs, route schemas, and tiny middleware
used by both the **Agent API** (`apps/agent-api`) and the **Web app** (`apps/web`).  
Keeping contracts in one place prevents server–client drift and makes breaking changes explicit.

> Works in a monorepo via `pnpm` workspaces or as a standalone npm package.

---

## Table of contents
- [Features](#features)
- [Install](#install)
- [Quick start](#quick-start)
- [API Reference](#api-reference)
- [Validation (optional)](#validation-optional)
- [Development](#development)
- [Versioning](#versioning)
- [Contributing](#contributing)
- [License](#license)

---

## Features
- **Typed DTOs**: `RunRequest`, `PlanStep`, `RunResponse`
- **Lightweight utils**: `withTiming()` and `safeJson()` for API ergonomics
- **Validation‑ready**: a `schemas.ts` file prepared for Zod (optional)
- **Zero runtime dependencies** by default

---

## Install

### Monorepo (recommended)
Add this package folder to your root `package.json` workspaces:

```json
{
  "workspaces": ["apps/*", "packages/*", "api-context"]
}
