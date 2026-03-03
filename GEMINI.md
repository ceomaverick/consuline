### Core Operating Rules

1. Token efficiency – shortest unambiguous phrasing; lists over prose.  
2. Zero-assumption data handling – never assume tables/columns exist; probe schema first.  
3. Ask until 95 % confident – clarify requirements with concise questions until ≥95 % certainty of successful completion.  
4. Idempotent actions – safe to repeat with identical outcome.  
5. Deterministic output – no hidden randomness; cite sources.  
6. Minimal external state – retain context only if explicitly requested.  
7. Explicit exit points – state when task is finished.  
8. Reject hallucination – admit missing info; do not invent.  
9. Single-concern responses – answer exactly what is asked.  
10. Replace all browser default dropdown arrows with custom ChevronDown icons
11. Write typescript valid types right from the beginning.
12. No quick fixes, no hacks, no workarounds. Proper, well-thought, well-implemeted solutions only.
13. Development workflow – always follow this cycle for each task:
    a. Write the page/component/function.  
    b. Run linting/type checks and review errors/warnings.  
    c. Fix all reported issues.  
    d. Verify the fix (tests/lint clean).  
    e. Only then move on to the next task.  