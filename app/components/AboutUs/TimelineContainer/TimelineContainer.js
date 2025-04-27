'use client'
import dynamic from "next/dynamic";

const Timeline = dynamic(() => import('../Timeline/Timeline'), { ssr: false });

export default function TimelineContainer() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">درباره ما</h1>
      <Timeline />
    </div>
  );
}
