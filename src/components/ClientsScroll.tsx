const allImages = [
  'Screenshot 2026-02-22 111241.png',
  'Screenshot 2026-02-22 111247.png',
  'Screenshot 2026-02-22 111255.png',
  'Screenshot 2026-02-22 111304.png',
  'Screenshot 2026-02-22 111311.png',
  'Screenshot 2026-02-22 111321.png',
  'Screenshot 2026-02-22 111330.png',
  'Screenshot 2026-02-22 111339.png',
  'Screenshot 2026-02-22 111349.png',
  'Screenshot 2026-02-22 111357.png',
  'Screenshot 2026-02-22 111407.png',
  'Screenshot 2026-02-22 111417.png',
  'Screenshot 2026-02-22 111425.png',
  'Screenshot 2026-02-22 111435.png',
  'Screenshot 2026-02-22 111440.png',
  'Screenshot 2026-02-22 111448.png',
  'Screenshot 2026-02-22 111453.png',
  'Screenshot 2026-02-22 111501.png',
  'Screenshot 2026-02-22 111509.png',
  'Screenshot 2026-02-22 111520.png',
  'Screenshot 2026-02-22 111528.png',
  'Screenshot 2026-02-22 111534.png',
  'Screenshot 2026-02-22 111539.png',
  'Screenshot 2026-02-22 111546.png',
  'Screenshot 2026-02-22 111559.png',
  'Screenshot 2026-02-22 111613.png',
  'Screenshot 2026-02-22 111621.png',
  'Screenshot 2026-02-22 111628.png',
  'Screenshot 2026-02-22 111634.png',
  'Screenshot 2026-02-22 111640.png',
  'Screenshot 2026-02-22 111648.png',
  'Screenshot 2026-02-22 111655.png',
]

const row1 = allImages.slice(0, 16)
const row2 = allImages.slice(16)

function MarqueeRow({ images, direction }: { images: string[]; direction: 'left' | 'right' }) {
  const doubled = [...images, ...images]
  const cls = direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'

  return (
    <div className="overflow-hidden relative">
      {/* fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-[#f5f5f5] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-[#f5f5f5] to-transparent" />

      <div className={`flex gap-4 w-max ${cls}`}>
        {doubled.map((filename, i) => (
          <div
            key={i}
            className="shrink-0 w-[260px] h-[160px] rounded-[8px] overflow-hidden border border-[#e5e5e5] bg-white shadow-sm hover:shadow-md hover:scale-[1.02] transition-transform duration-300"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/scroll/${encodeURIComponent(filename)}`}
              alt={`InfinityX Global installation ${i + 1}`}
              className="w-full h-full object-contain p-1"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export function ClientsScroll() {
  return (
    <section className="py-16 md:py-24 bg-[#f5f5f5] overflow-hidden">
      <div className="mx-auto max-w-[1230px] px-[15px] text-center mb-12">
        <p className="text-[12px] font-semibold uppercase tracking-[3px] text-[#196FD2] mb-3">
          Our Work
        </p>
        <h2 className="font-heading text-[28px] md:text-[38px] font-bold uppercase tracking-wide text-[#333] mb-4">
          Installations Across India
        </h2>
        <p className="text-[15px] text-[#666] max-w-[520px] mx-auto leading-relaxed">
          4000+ deployments in enterprise boardrooms, classrooms, retail spaces, and public venues.
        </p>
      </div>

      <div className="flex flex-col gap-5">
        <MarqueeRow images={row1} direction="left" />
        <MarqueeRow images={row2} direction="right" />
      </div>
    </section>
  )
}
