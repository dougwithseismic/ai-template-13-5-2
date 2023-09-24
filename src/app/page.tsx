/* eslint-disable react/no-unescaped-entities */

import { ExportAssets } from "@/components/export-assets";

export default function Home() {
  return (
    <main className="container max-w-4xl p-4 flex items-center justify-center h-full">
        <div className="content flex flex-col gap-4 justify-center items-center">

        <h1 className="font-bold">Ai Chat Starter</h1>
        <p>An opinionated Next.js for building dope AI experiences</p>
       
       <ExportAssets />
       
       </div>
    </main>
  )
}
