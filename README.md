# Real-Time File Processing System

## Overview
A Node.js backend system that monitors file processing with real-time behavior, logs, and conditional handling.

## Folder Structure
- `Processing/`: Where new files are generated.
- `In-Progress/`: Files being processed.
- `Completed/`: Successfully processed files.
- `Crashed/`: Failed file processes.
- `logs/logs.txt`: All logs, warnings, and errors.

## Logging Strategy
- Every file update is logged with timestamps.
- Warnings for long "In-Progress" times (>3s).
- Errors if processing takes more than 5s.

## Libraries Used
- Only Node.js built-in:
  - `fs`, `path`,`crypto`

## Sample Log Entry