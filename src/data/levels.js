// XP level thresholds. Completing a lesson awards XP_PER_LESSON experience.
export const XP_PER_LESSON = 50

export const LEVELS = [
  { level: 1, name: 'Trailhead Scout', minXp: 0 },
  { level: 2, name: 'Pathfinder', minXp: 100 },
  { level: 3, name: 'Trail Runner', minXp: 250 },
  { level: 4, name: 'Ridge Walker', minXp: 500 },
  { level: 5, name: 'Highland Climber', minXp: 900 },
  { level: 6, name: 'Summit Seeker', minXp: 1400 },
  { level: 7, name: 'Peak Master', minXp: 2000 },
]

export function getLevelInfo(xp) {
  let current = LEVELS[0]
  for (const lvl of LEVELS) {
    if (xp >= lvl.minXp) current = lvl
  }
  const next = LEVELS.find((lvl) => lvl.minXp > xp)
  const progressPct = next
    ? Math.round(((xp - current.minXp) / (next.minXp - current.minXp)) * 100)
    : 100
  return {
    level: current.level,
    name: current.name,
    minXp: current.minXp,
    nextXp: next ? next.minXp : null,
    nextName: next ? next.name : null,
    progressPct,
  }
}
