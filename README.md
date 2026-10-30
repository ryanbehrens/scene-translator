# Scene Translator: EMS patient phrasebook

A phone-first web app for first responders. Pick the patient's language and the situation, tap a question, and the app speaks it aloud in the patient's language. The patient answers by tapping big Yes/No or 0–10 buttons, or by talking. Spoken answers are turned into text and translated to English.

## Files
| File | What it is |
|---|---|
| `index.html` | The app (layout, logic, translation and speech code) |
| `phrases.js` | **All built-in questions and translations.** Edit this file to add or fix phrases |
| `manifest.webmanifest`, `icon*.png`, `icon.svg` | Lets crews "Add to Home Screen" so it opens like a real app |
| `sw.js` | Caches the app so built-in phrases work with **no signal** |

## Hosting (free, about 5 minutes)
The site **must be served over HTTPS**. Browsers block the microphone on plain `http://` pages.

- **Netlify Drop**: go to app.netlify.com/drop and drag this folder onto the page. You get an `https://…netlify.app` link right away.
- **GitHub Pages / Cloudflare Pages**: push the folder to a repo and turn on Pages.

On the phone, open the link → **Share → Add to Home Screen** (iPhone) or **⋮ → Install app** (Android).

## What works where
| Feature | Needs internet? | Notes |
|---|---|---|
| Built-in phrases (Spanish, Mandarin, Vietnamese, Tagalog, Arabic, Russian) | No | Stored in the app |
| Speaking phrases aloud | No (usually) | Uses the phone's built-in voices. If a language voice is missing, the phone shows the text instead. iPhone: Settings → Accessibility → Spoken Content → Voices to download more |
| Patient tap answers (Yes/No, 0–10) | No | |
| Listening to the patient (speech → text) | Yes | Web Speech API. Safari on iPhone, Chrome on Android |
| Translating what the patient says | Yes | Uses the translation service in Settings |
| Other languages (Portuguese, French, Haitian Creole, Korean, etc.) | Yes | Machine translated |

## Translation API: recommended setup
**LibreTranslate** (open source, AGPL-3.0, self-hosted). Patient speech goes only to a server your department controls.

```bash
docker run -d -p 5000:5000 \
  -e LT_LOAD_ONLY=en,es,zh-Hans,vi,tl,ar,ru,pt,fr,ko \
  -e LT_API_KEYS=true \
  libretranslate/libretranslate
```
Put it behind HTTPS (for example Caddy, or a one-click host like Railway at roughly $5–15/month). Then in the app go to **Settings → LibreTranslate server URL** and **API key** → **Test translation**. Check `https://your-server/languages` to confirm which languages your install supports.

Other options built into the app:
- **Chrome on-device**: free and private, but desktop Chrome only. It does not work on phones.
- **MyMemory**: free, no setup, on by default so you can test right away. **It sends text to a third party, so turn it off in Settings before real patient use.**

## Privacy notes for the department
- Patient answers stay in memory only. They are never saved to the device and disappear when the app closes. Use **Copy all** to paste them into the PCR.
- Speech recognition is done by the phone's browser vendor. Chrome sends audio to Google, and Safari may use Apple's servers. Have whoever handles HIPAA questions in the department review this.
- Self-hosted LibreTranslate keeps translation traffic in-house.

## Before field use
1. Have a **certified medical interpreter** review every translation in `phrases.js`, starting with Spanish.
2. Have the **medical director** approve the question list. The aspirin, nitro, and ED-medication questions should match local protocols.
3. Arabic phrases use the masculine "you"; that is standard for general use, but an interpreter may want female variants for OB.

## Editing phrases
Each line in `phrases.js` looks like:
```js
P('O', 'yn', 'English', 'Spanish', 'Chinese', 'Vietnamese', 'Tagalog', 'Arabic', 'Russian'),
```
- 1st value: OPQRST/SAMPLE letter (or `''`)
- 2nd value: answer type: `yn` (Yes/No buttons), `scale` (0–10), `open` (spoken answer), `point` (patient points), `instr` (instruction, no answer)
