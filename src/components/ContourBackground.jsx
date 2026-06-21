// Decorative topographic contour lines used as a faint background texture
// throughout the site. This is the page's visual signature: the whole app
// is framed as a trail map, and these lines are the elevation contours
// you'd find on a real one.
export default function ContourBackground() {
  return (
    <svg
      className="contour-bg"
      viewBox="0 0 1440 900"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M-100,120 C200,60 400,180 650,110 C900,40 1100,140 1540,90"
        className="contour-line"
      />
      <path
        d="M-100,260 C250,200 450,320 700,250 C950,180 1150,280 1540,230"
        className="contour-line"
      />
      <path
        d="M-100,420 C300,360 500,460 760,400 C1000,340 1200,440 1540,390"
        className="contour-line"
      />
      <path
        d="M-100,600 C280,540 520,640 780,580 C1020,520 1240,610 1540,560"
        className="contour-line"
      />
      <path
        d="M-100,760 C300,710 540,800 800,750 C1040,700 1260,780 1540,740"
        className="contour-line"
      />
    </svg>
  )
}
