import { Skeleton } from "@/components/ui/skeleton";

/** Skeleton grid shown while ProjectGallery fetches/loads */
export function ProjectsSkeleton() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* Section heading skeleton */}
      <div className="flex flex-col items-center gap-3 mb-16">
        <Skeleton className="h-5 w-24 bg-slate-800" />
        <Skeleton className="h-10 w-64 bg-slate-800" />
        <Skeleton className="h-4 w-80 bg-slate-800/60" />
      </div>

      {/* Card grid skeleton — matches 3-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="rounded-2xl border border-white/5 bg-slate-900/60 p-6 space-y-4"
          >
            {/* Gradient header bar */}
            <Skeleton className="h-32 w-full rounded-xl bg-slate-800" />
            {/* Role badge */}
            <Skeleton className="h-5 w-20 rounded-full bg-slate-800" />
            {/* Title */}
            <Skeleton className="h-7 w-3/4 bg-slate-800" />
            {/* Description lines */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-full bg-slate-800/70" />
              <Skeleton className="h-4 w-5/6 bg-slate-800/70" />
              <Skeleton className="h-4 w-4/6 bg-slate-800/70" />
            </div>
            {/* Tech badge row */}
            <div className="flex gap-2 pt-2">
              {Array.from({ length: 3 }).map((_, j) => (
                <Skeleton
                  key={j}
                  className="h-5 w-16 rounded-full bg-slate-800/60"
                />
              ))}
            </div>
            {/* Link button */}
            <Skeleton className="h-9 w-full rounded-lg bg-slate-800/60" />
          </div>
        ))}
      </div>
    </div>
  );
}
