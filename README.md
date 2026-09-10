# Code Blossom Mentor Hour Exercises

Welcome! This repo is where you'll practice both **JavaScript concepts** and the **GitHub collaboration workflow** you'll use in every real dev job.

Each topic has its own folder, and each task inside that folder is its own file. You'll create a branch, do the task, and open a pull request (PR) — just like a real team.

```
async-promises/
├── task-1-fetch-user.js
├── task-2-sequential.js
├── task-3-parallel.js
├── task-4-loading-state.js
└── stretch-retry.js
```

No prior GitHub experience needed — follow the steps below in order. If a command ever fails, copy the error and ask your mentor rather than guessing.

---

## One-time setup (do this once, before your first session)

### 1. Install Git
Check if you already have it:
```bash
git --version
```
If you see a version number, skip ahead. If not, install Git from [git-scm.com](https://git-scm.com/downloads).

### 2. Set your identity
Git needs to know who's making changes:
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### 3. Clone the repo
"Cloning" downloads a full copy of the repo to your computer.
```bash
git clone <repo-url>
cd namibia_one_mentor_hour_tasks
```

You only clone once. After this, you'll just update your copy each session (Step 1 below).

---

## The workflow — follow these steps for every task

### Step 1 — Make sure you're up to date
Before starting any new task, sync with the latest version of `main`:
```bash
git checkout main
git pull origin main
```

### Step 2 — Create a feature branch
Create a new branch named after the **topic and task** you're working on:
```
feature/<topic>-task<N>-<short-description>
```
```bash
git checkout -b feature/async-promises-task1-fetch-user
```
This creates your own private workspace — nothing you do here affects anyone else until you open a PR.

> **Why a branch per task?** Small, focused branches mean small, focused PRs — which are much easier (and less scary) for a peer to review.

### Step 3 — Do the task
Open the relevant file (e.g. `async-promises/task-1-fetch-user.js`) and write your solution.

Run it locally to check your work:
```bash
node async-promises/task-1-fetch-user.js
```

### Step 4 — Commit in small chunks
Don't wait until the whole task is done to make your first commit. Commit whenever you complete a meaningful piece — a working fetch call, a fixed bug, error handling added.

```bash
git status              # see what's changed
git diff                # review your actual changes before adding them
git add task-1-fetch-user.js
git commit -m "Add basic fetch and success logging"
```

Then keep working and commit again:
```bash
git add task-1-fetch-user.js
git commit -m "Add error handling for bad user ids"
```

**Good commit messages** describe *what changed*, in one short sentence:
- ✅ `"Add retry logic with backoff delay"`
- ❌ `"updates"` / `"fix stuff"` / `"wip"`

If your commit message needs the word "and," it's probably two commits.

### Step 5 — Push your branch
```bash
git push -u origin feature/async-promises-task1-fetch-user
```
The `-u` links your local branch to one on GitHub — after this first push, you can just type `git push`.

### Step 6 — Open a pull request
1. Go to the repo on GitHub — you'll see a banner suggesting your recently pushed branch. Click **"Compare & pull request."**
2. Fill in a short description using this template:

```markdown
## What
Implements Task 1 — fetches a user by id and handles errors.

## Why
Practicing basic async/await + try/catch.

## How to test
Run `node async-promises/task-1-fetch-user.js`. Try changing the id to 9999 to see the error path.
```
3. Click **"Create pull request."**

### Step 7 — Review a peer's PR
Pick one open PR from a fellow mentee and check it out locally so you can actually run it:
```bash
git fetch origin
git checkout feature/their-branch-name
node async-promises/their-task-file.js
```

Leave feedback on GitHub using this simple structure — it keeps feedback balanced and easy to give:
- **One thing you liked**
- **One question** (something you're curious about, not a criticism in disguise)
- **One suggestion** (optional — only if you spot something concrete)

Then switch back to your own branch:
```bash
git checkout feature/async-promises-task1-fetch-user
```

### Step 8 — Address feedback
If your reviewer suggested a change, make it, then commit and push again — no need to open a new PR, the same PR updates automatically:
```bash
git add task-1-fetch-user.js
git commit -m "Address PR feedback: handle empty response body"
git push
```

### Step 9 — Merge
Once your PR has at least one approval, merge it on GitHub using **"Squash and merge."** This combines all your small commits into one clean entry on `main`, while your original commit history stays visible on the PR itself.

After merging, clean up:
```bash
git checkout main
git pull origin main
git branch -d feature/async-promises-task1-fetch-user
```

---

## Quick command reference

| What you want to do | Command |
|---|---|
| Update `main` | `git checkout main && git pull origin main` |
| Start a new task | `git checkout -b feature/async-promises-task2-sequential` |
| See what changed | `git status` / `git diff` |
| Save a chunk of work | `git add <file>` → `git commit -m "message"` |
| Send your branch to GitHub | `git push -u origin <branch-name>` (first time), then `git push` |
| Check out a peer's branch | `git fetch origin && git checkout <their-branch>` |
| Go back to your own branch | `git checkout <your-branch>` |
| Clean up after merging | `git branch -d <branch-name>` |

---

## Common beginner mistakes (and how to avoid them)

- **Forgetting which branch you're on.** Run `git status` often — the first line always tells you.
- **One giant commit at the end.** Commit as you go, not just before pushing.
- **Committing debug `console.log`s by accident.** Always `git diff` before `git add`.
- **Force-pushing over review history.** Just `git push` normally after addressing feedback — don't rewrite history mid-review.
- **Working directly on `main`.** Always branch first (Step 2). If you catch yourself editing on `main`, stop and create a branch before committing.

If you get stuck, that's normal — ask your mentor rather than spending 30 minutes stuck on a Git error alone.
