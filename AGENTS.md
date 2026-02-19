# AGENTS.md - Project Guidelines for AI Assistants

## Project Overview

**nuturn-shop** is a **clothing ecommerce website** built with modern web technologies.

### Tech Stack
- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Backend/Auth**: Supabase (Auth, Database)
- **Package Manager**: Bun

### Current Status
This is an early-stage project with Supabase authentication infrastructure set up. The core e-commerce features (product catalog, cart, checkout) are yet to be implemented.

---

## Workflow Rules

### Before Every Task: Implementation Plan Required

**CRITICAL**: Before executing ANY task, an implementation plan MUST be created following these steps:

1. **Understand the Task**: Read relevant code, understand requirements, ask clarifying questions if needed
2. **Break Down**: Divide the task into smaller, actionable steps
3. **Identify Dependencies**: Note what needs to be done first
4. **Document Plan**: Write the plan clearly before coding

### Task Tracking with TodoWrite

After creating a plan, use the TodoWrite tool to:
- List all tasks with priority levels
- Update status as work progresses (`pending` → `in_progress` → `completed`)
- Log any new tasks discovered during work
- Keep the todo list current throughout the session

### Execution Flow

```
1. Analyze/understand the task
2. Create implementation plan (in plain text for user review)
3. Create/update todo list with TodoWrite
4. Execute tasks one by one
5. Update todo status after each task
6. Run lint/typecheck before considering done
```

---

## Development Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## Todo Tracking

All task logs are maintained in the `.todos/` directory. Each session creates a timestamped log file tracking what tasks were planned, in-progress, and completed.
