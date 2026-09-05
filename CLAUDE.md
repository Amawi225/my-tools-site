# أدواتي (Adawati) — adawati.space

Free multi-tool Arabic website (calculators, converters, games, daily-info tools). Owner: Ahmed Amawi. This file exists so a new Claude Code session can resume work with zero ramp-up if this session is lost.

## Deployment — READ THIS FIRST

**There is no local git repo.** Do not run `git init`, `git commit`, etc. — they will not work as expected and are not how this project deploys.

Deployment is via a custom script that talks to the GitHub REST API directly:

```
node push-to-github.js "commit message here"
```

- Reads `GITHUB_PAT` from a local `.env` file (`GITHUB_PAT=...`, gitignored/excluded from the pushed tree).
- Repo: `adawati2027/my-tools-site`, branch `main`, pushed via blobs → tree → commit → ref update (not a real git working directory).
- **Always pushes every file in the project** (no diffing) — pushing after any edit is normal and expected, don't wait to "batch" unless GitHub's rate limit forces it.
- Site is served via GitHub Pages, custom domain `adawati.space` (CNAME on GitHub Pages auto-redirects `adawati2027.github.io/my-tools-site/` → `adawati.space/` with a real 301 — already verified working, don't re-verify).
- Has retry logic built in for transient network errors (`ECONNRESET` etc.) — exponential backoff, 4 attempts.
- After pushing, changes take roughly 30–90 seconds to actually go live; poll with `curl` + `grep` for a known string rather than assuming instant.

### GitHub API rate limiting (hits this OFTEN with ~260 files/push)

Two different things can fail with a 403:
- A short secondary/abuse-detection throttle — usually clears in 1–3 minutes.
- The real hourly quota (5000 req/hr) — tied to a fixed reset epoch.

**`GET /rate_limit` is unreliable** — it has repeatedly shown "5000/5000 fresh" moments before/after real failures this project. Do not trust it.

The correct way to get the real reset time: make one direct failing call (e.g. `POST /repos/adawati2027/my-tools-site/git/blobs`) and read the `X-RateLimit-Reset` response header from that actual call. Compute wait seconds from `epoch - now`, then use `ScheduleWakeup` for exactly that delay (capped at 3600s). Do not guess, do not poll in a tight loop, do not retry more than once without getting a fresh real reset time.

## Verification policy — the load-bearing rule of this whole project

**Never publish a legal/financial/religious fact without verifying it via WebSearch/WebFetch first.** This site has real calculators (taxes, zakat, customs, social security) that Jordanians and others actually rely on. If a fact can't be verified, or sources conflict, either:
- Say so transparently in the UI (a disclaimer, not a fabricated number), or
- Don't build that feature at all.

Concrete precedent: an income-tax calculator bug was reported where "extra expense exemption" was a flat 5,000 JOD for everyone. Investigation found the real law (Article 9, Income Tax Law 34/2014, as amended 2020+) breaks it down as 1,000 self + 1,000 spouse + up to 1,000/child (max 3 kids) = up to 5,000. A different official government page ("الجديد في أحكام القانون" on istd.gov.jo) shows totally different numbers (28,000 cap, 7/14/20% brackets) — that page turned out to describe the law's *original 2014 enactment*, superseded by later amendments; it's just an outdated government page, not current law. This took 5+ rounds of WebFetch on conflicting sources to resolve. **Government pages are not automatically authoritative over other corroborated sources — cross-reference multiple sources and reason about which is actually current before trusting any single one, including official ones.**

When genuinely unresolvable, say so in the page's own disclaimer text rather than picking a number with false confidence.

## Site structure

- Root-level tool pages (English-first, generic): `age-calculator.html`, `bmi-calculator.html`, etc. — ~29 tools.
- Language variants: `/ar/`, `/fr/`, `/es/`, `/de/`, `/ru/<tool>/`.
- Country verticals: `/om/` (Oman, deepest/original), `/ae/`, `/sa/`, `/us/`, `/uk/`, `/jo/` (Jordan — actively being built out, now the second-deepest vertical, ~20+ pages across `calculators/`, `students/`, `games/`, `tools/`, plus daily-info pages like `prayer-times/`, `weather/`, `fuel-prices/`, `holidays/`, `emergency-numbers/`, `gold-price/`).
- Shared `style.css`, shared `i18n.js` (site-wide translations, language switching, country auto-detection and the "📍 Recommended for X" / "✨ You might like" widgets on hub pages).
- `build-sitemap.js` — regenerate `sitemap.xml` after adding any new page (`node build-sitemap.js`), then add the new URL to the `countryTools` array inside it first.

### Standard template for a new `/jo/...` page
Copy `om/salary-calculator/index.html` as the reference. Must include: `<base href="https://adawati.space/">` in `<head>` (makes all relative links resolve from site root regardless of nesting depth), GA + AdSense script tags, JSON-LD (`BreadcrumbList` + `WebApplication` + `FAQPage`), shared CSS classes (`.card`, `.tool-page`, `.option-toggle`/`.option-btn`, `.result-box`, `.stat-grid`, `.row`), standard nav/footer.

## Firebase (quiz "friend challenge" feature)

Project: **`adawati-challenges`** (Firebase console, Spark/free plan), owned by the same Google account as Analytics/Search Console/AdSense (all already correctly configured for `adawati.space` — verified, don't redo that audit).

Currently wired into `jo/games/jordan-quiz/index.html` only (the "شو بتعرف عن الأردن؟" quiz — 129 questions... wait, quiz questions ≠ wordle words, see below). Firebase JS SDK loaded via compat build from `gstatic.com` CDN (not npm). Config object is inline in the page `<script>` — safe to be public (Firebase web API keys aren't secrets; access is controlled by Firestore security rules).

**Firestore collections** (`challenges/{challengeId}`):
- `challenges` — doc has `creatorName`, `questions` (locked array for this challenge), `game`, `createdAt`.
- `challenges/{id}/players/{autoId}` — `name`, `score`, `total`, `timeMs`, `submittedAt`. Leaderboard sort: `orderBy('score','desc').orderBy('timeMs','asc')` — **requires a composite index**, already created (players: score desc, timeMs asc, scope Collection).
- `challenges/{id}/accepts/{autoId}` — `name`, `acceptedAt`. Written when the joiner clicks "قبول التحدي"; the creator listens on this via `onSnapshot` to know when to unlock their own "ابدأ اللعب" button.
- `challenges/{id}/starts/{autoId}` — `startedAt`. Written when the creator clicks "ابدأ اللعب"; the joiner listens on this via `onSnapshot` and starts playing at the same moment (full sync — was explicitly requested after the first version let the joiner start immediately on accept, which felt unfair).

Security rules: public `read: true` everywhere, `create` allowed with field validation, **`update`/`delete` always `false`** (deliberate — prevents score tampering; means replay-prevention is done client-side via `localStorage` keyed by challenge ID instead, see `getPlayedRecord`/`savePlayedRecord` in the quiz JS).

### Editing Firestore Rules via the console (gotcha)
When typing into the Rules Monaco editor via browser automation, **it auto-inserts a matching closing brace for every `{` you type**, so appending a new `match {...}` block via keystrokes reliably produces one extra stray `}`. Fix: click Publish, read the exact line number from the "Unexpected '}'" error, delete that one line, Publish again. This has happened every single time rules were edited this way — expect it, don't be surprised by it.

### Adding a new game to the challenge system
The Firestore doc already has a `game` field for exactly this. To add a challenge mode to a different game (planned — see below), reuse the same `challenges`/`players`/`accepts`/`starts` collections with a different `game` value; don't create parallel collections per game.

## Planned but not started: 14-game arcade expansion

User wants 14 total trivia/game categories under `/jo/games/`, each with **≥300 questions, 12 random per playthrough**, matching the Jordan quiz's format and challenge system. List (Jordan quiz is the only one built so far, at 238 questions as of the last count — check current `QUESTIONS.length` in `jo/games/jordan-quiz/index.html`, it may have grown further):

1. 🇯🇴 شو بتعرف عن الأردن؟ (`jo/games/jordan-quiz/`) — **built**, in progress toward 300.
2. رياضة عالمية (world sports)
3. كرة قدم عالمية (world football)
4. أغاني — **by song TITLE only, guess the singer.** User originally wanted lyrics; **reproducing song lyrics is a hard copyright line, refused** — agreed alternative is title-only.
5. طبخ (ingredients → dish name)
6. أدوات المكياج (makeup tools)
7. الرياضيات (math trivia — facts/history, not live-generated arithmetic problems, since the user's "300 static questions, 12 random" spec applies uniformly)
8. معلومات عامة (general knowledge)
9. ثقافي (cultural)
10. 🌍 جغرافيا عالمية (world geography — my suggestion, user approved)
11. ☪️ تاريخ إسلامي (Islamic history — my suggestion, approved)
12. 🔬 علوم وتكنولوجيا (science & tech — my suggestion, approved)
13. 🦁 حيوانات وطبيعة (animals & nature — my suggestion, approved)
14. 💡 اختراعات واكتشافات (inventions — my suggestion, approved)

**Architecture note (not yet done):** rather than copy-pasting the ~700-line quiz page 14 times, build one shared quiz engine (challenge/leaderboard/Firebase code + UI shell) that takes a per-category question-bank file as data. Proposed to the user, not yet built — do this before starting game #2 rather than duplicating the Jordan quiz's file.

**Verification workload:** 14 × 300 ≈ 4,200 questions needing real fact-checking per the verification policy above. Build one category at a time; a background `fork` agent doing WebSearch-verified question generation for one category at a time has worked well (got 132/200 verified Jordan questions in one pass, honestly reported which topics it couldn't verify and dropped rather than guess).

## Known content/UX bugs already fixed this project (don't reintroduce)

- Country-recommendation widget (`i18n.js`) used to freeze in the wrong language after switching site language via the dropdown — fixed by making `initCountryDetect()` actually write `sessionStorage.adawati_country` on the path-based detection branch (it only did this on the IP-geolocation fallback before).
- Zakat calculator: the "your gold is above nisab by X grams" info line was worded in a way users mistook for the zakat amount owed (it's just a weight-threshold note, unrelated to the actual JOD zakat figure computed separately). Reworded to remove the misleading number entirely.
- Wordle-style daily word game (`jo/games/wordle/`): the on-screen keyboard was missing the letter **ذ**, silently making any word containing it (e.g. "نافذة") impossible to guess. Fixed by adding it to `KEY_ROWS`. If adding more words to `WORDS`, validate every letter exists in `KEY_ROWS` first (script pattern used: build a `Set` from `KEY_ROWS.flat()`, check every char of every word is in it) — the keyboard still has **no key for أ/إ/آ** (only bare `ا` and the hamza forms `ء ئ ؤ`), so words must avoid those combined glyphs.
- The word-of-the-day mechanism was already correctly implemented before I was asked to add it (`dayIndex()` — deterministic by UTC date, same word for all visitors each calendar day) — don't rebuild it, just keep `WORDS` long enough that the cycle-repeat period stays reasonable (currently 129 words ≈ 4+ months before repeating).

## Style/tone conventions

- All Jordan-vertical copy is in Jordanian-dialect Arabic (not MSA), casual and direct — match existing pages' voice, not formal Arabic.
- Every calculator with a legal/financial figure gets a visible "ليست رسمية / أداة تقديرية" disclaimer and a link to the actual official source (istd.gov.jo, customs.gov.jo, ssc.gov.jo, etc.).
- Don't add comments to code explaining what it does; this codebase has none and it should stay that way except where a genuinely non-obvious constraint needs recording (see existing sparse examples in the quiz JS for the bar this should clear).
