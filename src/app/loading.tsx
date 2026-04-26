export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 rounded-full border-4 border-[#e5e5e5] border-t-[#196FD2] animate-spin" />
        <p className="text-[13px] font-semibold uppercase tracking-[2px] text-[#999]">Loading</p>
      </div>
    </div>
  )
}
