# Hyperframes Composition Brief: GG EZ

## Objective
Create a short launch-style brag video for GG EZ, a squad-finder landing page for a competitive tactical shooter.

## Output
- Composition directory: `brag-output/composition/`
- Rendered video: `brag-output/brag.mp4`
- Format: landscape — 1920x1080
- Duration: 19.99s (locked to the custom audio track's real length)

## Source Material
- Project root: `/home/user/theslop`
- Primary files read: `index.html`, `assets/css/styles.css`
- Product name: GG EZ
- Tagline / strongest claim: "Your Aim Is Fine. Your Team Wasn't."
- Key UI or visual moment to recreate: the Squad Finder card (roster rows with rank badges, pulsing "MATCHING NOW" live pill)
- Copy that must appear verbatim:
  - "YOUR AIM IS FINE."
  - "YOUR TEAM WASN'T."
  - "MIC-ON LOBBIES"
  - "GRIEFERS GET FILTERED"
  - "GG EZ"
  - "FIND YOUR SQUAD"
  - Stat values: "14,200+ SQUADS", "1M 52S AVG MATCH", "4.6/5 RATING"
  - Roster: You (Diamond II), Zeal (Diamond III), Akari (Platinum I), Sy (Diamond I)

## Creative Direction
- Tone preset: chaotic
- Creative direction: overproduced gaming highlight-reel / clutch-moment montage energy
- Interpretation: rapid cuts, ALL CAPS Rajdhani type, hard cuts / flash / zoom transitions, confident and loud
- Angle: the brand name doubles as the classic post-match taunt gamers type at the enemy team — the video plays like a highlight-reel callout aimed at solo queue itself
- Hook: "YOUR AIM IS FINE." → "YOUR TEAM WASN'T." slammed in full caps over the neon hero glow
- Outro / punchline: "GG EZ" slams full-screen, "FIND YOUR SQUAD" settles underneath, hard cut to black
- Avoid: generic SaaS language, abstract filler visuals, unrelated visual redesign

## Visual Identity
- Background: #0a0a0f (off-black, never pure black)
- Text: #f5f5fa (primary), #a3a3b5 (dim secondary)
- Accent: #ff2f76 (hot magenta/pink) — single locked accent for the whole video
- Signature gradient partner (glow only, never a competing accent): #2fe4ff (cyan)
- Positive/live indicator: #3ee08a (green, used only for the "MATCHING NOW" pulse, matching real semantic state)
- Display font: Rajdhani 700/600 (uppercase, tight tracking) — local files at `assets/fonts/rajdhani-{500,600,700}.woff2`
- Body font: Manrope variable — local file at `assets/fonts/manrope-variable.woff2`
- Visual references from the project: near-black background with a magenta/cyan radial glow + faint grid-line pattern behind the hero; dark elevated card panels with soft 20px radius; pill-shaped buttons and badges; a pulsing green "live" dot exactly as used for the real site's "MATCHING NOW" status

## Storyboard
Use the storyboard in `brag-plan.md` as the creative contract. Beat-locked scene boundaries (from `assets/music/cues/brag-track.music-cues.json`, 129.2 BPM):

1. Hook — 0.00-2.60s (2.60s) — "YOUR AIM IS FINE." slams in at t=0 (cold open)
2. Hook payoff — 2.60-4.48s (1.88s) — "YOUR TEAM WASN'T." replaces it, entrance beat-locked to 2.60s
3. Squad Finder reveal — 4.48-8.93s (4.45s) — card + 4 roster rows arriving one by one at 4.96s/5.89s/6.72s/7.56s (beat-grid, every-other-beat spacing for readability)
4. Stat burst — 8.93-11.27s (2.34s) — 3 stat values rapid-fire at 8.93s/9.87s/10.80s (beat-grid)
5. Feature claim 1 — 11.27-13.14s (1.87s) — "MIC-ON LOBBIES", entrance near strong_beat cue 11.74s
6. Feature claim 2 — 13.14-15.02s (1.88s) — "GRIEFERS GET FILTERED", scene start itself is strong_beat cue 13.14s
7. Logo slam / outro — 15.02-19.99s (4.97s) — background settles, "GG EZ" slams on strong_beat cue 15.49s, "FIND YOUR SQUAD" settles on onset_peak cue 16.18s, hard cut to black on final onset_peak cue 19.93s

## Audio
- Audio role: dense rhythmic layer, drives the cut timing (chaotic tone)
- Audio arc: opens at full posture (no fade-in), holds through the whole video, quick ~0.3s fade in the final frames so the hard cut to black doesn't clip the track
- Music: `assets/music/brag-track.mp3` (user-provided custom track, 19.99s, 129.2 BPM) — used in full, no bundled track
- Music treatment: volume 0.4 (chaotic ceiling), no fade-in, fade-out over the last 0.3s before the final cut
- Music cue guidance: `assets/music/cues/brag-track.music-cues.json` / `.md` — beat grid + strong cues detected via `analyze_music_cues.py`. Strong cues used: 2.60s, 13.14s, 15.49s, 16.18s, 19.93s. Beat grid used for the Scene 3 roster sequence and Scene 4 stat sequence (see Storyboard above).
- Audio-reactive treatment: subtle — hero glow / card border presence may breathe gently with RMS; no waveform or equalizer graphics
- Audio-coupled moments:
  - Scene 1/2 — hook and payoff text slam in sync with beat-locked cues
  - Scene 3 — each roster row gets a card-place/slide SFX at its beat-locked arrival
  - Scene 4 — each stat value gets a light impact tick at its beat-locked arrival
  - Scene 7 — logo slam gets the loudest/heaviest SFX hit of the video, on the 15.49s strong cue
- SFX selection guidance: moderate-dense (chaotic tone) but motion-matched — one hit per hard cut/reveal, never per frame; prefer low/medium high-frequency-risk files from `sfx-analysis.md` for the repeated roster/stat reveals, save a heavier hit for the logo slam
- SFX analysis guidance: `<skill-dir>/assets/sfx/sfx-analysis.md` (skill-dir: `/home/user/theslop/.agents/skills/brag`)
- Exact SFX choice: chosen during composition build, filenames copied into `assets/sfx/` as used
- Audio files: music already copied to `assets/music/`; SFX to be copied into `assets/sfx/` as selected

## Hyperframes Instructions
Requirements:
- Show real UI (the Squad Finder card) and real copy from the source project.
- Keep all text readable — hold every line to its reading-time floor before cutting.
- Total duration 19.99s (locked to the audio track).
- Include the music layer and motion-matched SFX per the audio section above.
- Beat-lock the 5 major-moment cues listed above (±0.15s); snap the two sequential reveals (roster rows, stat values) to the beat-grid timestamps listed (±0.10s).
- One locked accent color (#ff2f76) across every scene; the cyan (#2fe4ff) appears only inside glow/gradient treatments, never as a second competing accent.
- One corner-radius system: 20px soft radius on cards/panels, full-pill on badges — matching the real site.
- Animate only `transform` and `opacity`.
