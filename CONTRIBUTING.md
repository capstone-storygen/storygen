# Contributor Guidelines

Before your code is merged into the main branch it will be peer reviewed so that it can be deployed for everyone to use. Your PR will be gone through line by line to make sure that everything is on the up and up. You should always carefully craft your code submission in order for your reviewer to be able to more easily understand your changes.

## PR and Branching

### Creation

A feature branch must be created to solve a single issue. Code from the feature branch must be pushed to the main branch via a pull request. Hence each PR should almost always be linked to just one issue.

### Maintainence

If changes have been made to the main branch since you created your branch, make sure to merge the main branch into your branch before a review.

This can be done by checking out into your branch and then executing `git merge main`.

### Review

If you are a reviewer than review the PR line by line. Provide detailed description of the changes you want, if any. The reviewer must not merge a PR after approving it. Each PR may only be merger either by the assignee, or in cases of urgency by the admin.

If you are the assignee, then tag the admin to have him assign your PR a reviewer. If your PR has been approved then you should always squash and then merge your PR.

## Commits

### Golden Rule of Commits

Commit often with meaningful commit messages.

### Commit Message

The commit message very often consists of `type: subject`.

- `type` is usually one of add, chore, docs, feat, fix, hotfix, revert, rfct, test
- no space between type and the colon
- `subject` is the commit message

### Commiting Process

Make small commits. A commit should be a small chunk of logic that is easy to understand and follow.

Before committing you should do a file compare on every file that you want to commit. Here, you will check to make sure that you are not committing temporary code, dead code, or test code. You will also check for warnings, code formatting, and unneeded includes.

Commit often. The process of adding commits keeps track of your progress as you work. Commits also create a transparent history of your work that others can follow to understand what you’ve done and why. Moreover this makes reverting process much easier.

Write clear, concise commit messages. Each commit has an associated commit message, which is a description explaining why a particular change was made.

### No Warnings

There must be no warnings in the development or main branches. No developer should check-in code that contains warnings. This is to facilitate finding warnings and errors while you are coding. It would be extremely difficult for you to see that your code has warnings if the code base was already polluted with hundreds of warnings.

### No TODOs

TODOs are an awesome tool. However, just like for warnings, it would be very difficult for you to track your TODOs if there were already hundreds in the code base.

## Issues

### Creating

Always be as much detailed and helpful as possible when creating an issue. Always choose the appropriate type of issue form.

After creating an issue tag the admin informing him of creation of a new issue, and wait for the admin to add assignee(s), label(s), project(s), milestone(s), or any other metadata. You are advised not to add or modify issue the metadata yourself and leave that up to the admin. This ensures an efficient workflow is maintained throughout the project.

## Sources

- [Appflow Contributing Guidelines](https://appflowy.gitbook.io/docs/essential-documentation/contribute-to-appflowy/software-contributions/submitting-code)