# Brag Plan: GG EZ

## What is this app?
GG EZ is a squad-finder landing page for a competitive tactical shooter — it matches solo players into rank-matched, mic-on squads instead of leaving them to solo queue.

## The angle
The brand name doubles as the classic post-match taunt gamers type at the enemy team. Lean into that: the video plays like a highlight-reel callout aimed at solo queue itself. Hook on the site's own line ("Your Aim Is Fine. Your Team Wasn't.") then rapid-fire the product's real value props like a chat log of trash talk, closing on the name as the final taunt.

## Hook (first 2-3 seconds)
The headline slams in over the neon hero glow: "YOUR AIM IS FINE." Beat. "YOUR TEAM WASN'T." Full volume, full caps, matches the chaotic tone.

## Key moments (the middle)
- The Squad Finder card: roster rows (You, Zeal, Akari, Sy) arrive one by one with rank badges, "MATCHING NOW" pill pulsing live.
- Three stat values punching in rapid succession: 14,200+ squads, 1m 52s avg match time, 4.6/5 rating.
- Two feature claims as rapid-fire caption cards: "MIC-ON LOBBIES", "GRIEFERS GET FILTERED".

## Outro / punchline
Logo mark slams in full screen: "GG EZ" in Rajdhani caps over the magenta/cyan glow, tagline "FIND YOUR SQUAD" underneath, hard cut to black.

## User flow worth showing
none — landing-page only. Centerpiece is the Squad Finder card (Q3/Q4 strongest visual) framed by the stat strip and two feature claims.

## Tone
- Preset: chaotic
- Creative direction: overproduced gaming highlight-reel / clutch-moment montage energy
- Interpretation: rapid cuts (6-8 scenes, most under 3s), ALL CAPS Rajdhani type, hard cuts and flash/zoom transitions, confident and loud rather than polished — matches both the gamer audience and the trash-talk brand name.

## Format: landscape — 1920x1080
## Duration: 20s (locked to the provided audio track's exact length)

## Visual identity (from the project)
- Background: #0a0a0f (off-black)
- Accent: #ff2f76 (hot magenta/pink) — single locked accent
- Signature gradient partner (glow/logo only, never a competing accent): #2fe4ff (cyan)
- Text: #f5f5fa (off-white primary), #a3a3b5 (dim secondary)
- Display font: Rajdhani (700/600 weight, uppercase, tight tracking) — self-hosted at assets/fonts/rajdhani-*.woff2
- Body font: Manrope (variable weight) — self-hosted at assets/fonts/manrope-variable.woff2
- Strongest visual element: the Squad Finder card (dark elevated panel, pink-bordered "is-you" row, green pulsing "MATCHING NOW" live pill) against the magenta/cyan radial glow + grid-line hero background

## Share copy (draft)
Solo queue is dead. GG EZ matches your next five-stack before you'd have finished loading into a lobby.

## Audio direction
- Role: dense rhythmic layer, drives the cut timing
- Music: user-provided custom track (Kaien Sugar / M.Sasuke, instrumental/karaoke backing, 20.04s) — use in full as the single music bed, no bundled track
- Music treatment: full track from 0:00, volume 0.35-0.4 (chaotic tone allows slightly hotter than the 0.3-0.4 default ceiling but never above 0.5), no fade-in (hits at scene 1), quick fade-out in the last ~0.3s to avoid a hard audio cutoff under the final hard cut to black
- Music cue guidance: no bundled preset (custom track) — detect at composition time via `analyze_music_cues.py` (uv-provisioned librosa) or `npx hyperframes beats` as fallback. Target 2-3 strong cues: the hook slam (scene 1 start), the squad-card reveal (scene 3 start), and the logo slam (final scene start). Sequential roster-row reveals in Scene 3 should snap to every-other-beat spacing, not every beat, so each row holds long enough to read.
- Audio-reactive treatment: subtle; hero glow / card border presence may breathe with RMS, no waveform or equalizer graphics
- SFX posture: moderate-dense (chaotic tone) but motion-matched, not random — one hit per hard cut/reveal, not per frame
- Audio-coupled moments: hook line slams in sync with a strong beat; each roster row arrival gets a card-place/slide accent; each stat value gets a light impact tick as it lands; logo slam gets the biggest hit of the video
- Restraint rule: never let SFX density bury the music bed; skip a hit rather than stack two at once

## Storyboard

### Scene 1 — Hook — 2.5s
Hero glow (magenta/cyan radial) and grid-line background fill the frame. "YOUR AIM IS FINE." slams in, full caps, Rajdhani 700, centered, tight. Hard hold.
Sequential/interaction: none
Audio intent: full-volume opener, the video's loudest single moment after the outro
Audio-coupled idea: text entrance lands exactly on the first strong beat/cue
Music: track opens at full posture, no fade-in
Transition mood: flash cut → Scene 2

### Scene 2 — Hook payoff — 2s
"YOUR TEAM WASN'T." replaces the first line in the same position and weight. Brief hold.
Sequential/interaction: none
Audio intent: punchline snap, slightly harder hit than scene 1
Audio-coupled idea: short impact SFX on entrance
Transition mood: hard cut → Scene 3

### Scene 3 — Squad Finder reveal — 4.5s
The Squad Finder card recreated from the site: dark elevated panel, "SQUAD FINDER" label top-left, pulsing green "MATCHING NOW" pill top-right. Roster rows arrive one by one: You (Diamond II, pink-bordered), Zeal (Diamond III), Akari (Platinum I), Sy (Diamond I).
Sequential/interaction: yes — 4 roster rows slide/place in one at a time, snapped to every-other-beat spacing so each is readable
Audio intent: build energy through the sequence, each arrival reinforced
Audio-coupled idea: card-place or card-slide accent per row
Transition mood: hard cut → Scene 4

### Scene 4 — Stat burst — 2.5s
Three stat values punch in rapid succession, oversized Rajdhani numerals: "14,200+ SQUADS", "1M 52S AVG MATCH", "4.6/5 RATING". Fast rhythm, not simultaneous.
Sequential/interaction: yes — 3 stat values arrive in quick rapid-fire succession (chaotic pacing, not the slower Scene 3 spacing)
Audio intent: rapid-fire energy spike
Audio-coupled idea: one light impact tick per stat landing
Transition mood: zoom cut → Scene 5

### Scene 5 — Feature claim 1 — 1.8s
"MIC-ON LOBBIES" as a bold caption card over the neon glow, oversized type, brief hold.
Sequential/interaction: none
Audio intent: confident one-word-per-beat hit
Audio-coupled idea: entrance synced to a beat
Transition mood: hard cut → Scene 6

### Scene 6 — Feature claim 2 — 1.8s
"GRIEFERS GET FILTERED" in the same caption-card treatment, same position, same weight.
Sequential/interaction: none
Audio intent: matches scene 5's energy, no dip
Audio-coupled idea: entrance synced to a beat
Transition mood: hard cut → Scene 7

### Scene 7 — Logo slam / outro — 4.9s
"GG EZ" slams in full screen, largest type in the video, magenta/cyan glow behind it. "FIND YOUR SQUAD" settles underneath a beat later. Hold, then hard cut to black exactly as the track ends.
Sequential/interaction: none
Audio intent: the single biggest hit of the video, then the track's natural ending carries the hold
Audio-coupled idea: logo entrance lands on the strongest remaining cue; SFX hit is the loudest/heaviest in the video
Transition mood: hard cut → black (end)

**Music mood for this video:** chaotic
**Audio summary:** The full 20.04s custom track plays start to finish as a dense rhythmic bed; every hard cut and reveal is motion-matched to a beat or strong cue, peaking at the hook slam and the logo outro, with a quick fade in the last fraction of a second so the cut to black doesn't clip the audio.
