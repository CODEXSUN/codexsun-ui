"use client";

import type { ReactNode } from "react";

export function WorkspacePrintPreview({
  children,
  className,
  label = "Print Preview"
}: {
  children: ReactNode;
  className?: string;
  label?: string;
}) {
  return (
    <section className={className}>
      <div className="mb-2 flex items-center gap-2">
        <div className="h-px flex-1 bg-border/70" />
        <span className="shrink-0 text-xs font-medium text-muted-foreground">{label}</span>
        <div className="h-px flex-1 bg-border/70" />
      </div>
      <div className="overflow-hidden rounded-md border border-border/70 bg-white shadow-sm print:border-0 print:shadow-none">
        {children}
      </div>
    </section>
  );
}

export function WorkspacePrintSheet({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`print-sheet mx-auto w-[210mm] max-w-full origin-top bg-white font-sans text-[10px] text-black print:mx-0 print:mt-0 print:w-[202mm] print:max-w-none ${className ?? ""}`}
    >
      <style>{`
        @page { size: A4 portrait; margin: 4mm; }
        @media print {
          html, body {
            background: #fff !important;
            height: auto !important;
            margin: 0 !important;
            min-height: 0 !important;
            width: auto !important;
          }
          .print-sheet {
            max-width: 202mm !important;
            width: 202mm !important;
          }
          body:has(.print-sheet) *:has(.print-sheet) {
            height: auto !important;
            min-height: 0 !important;
            overflow: visible !important;
          }
          body:has(.print-sheet) *:has(.print-sheet) > *:not(.print-sheet):not(:has(.print-sheet)) {
            display: none !important;
          }
          body:has(.print-sheet) [data-sidebar="sidebar"],
          body:has(.print-sheet) [data-sidebar="gap"],
          body:has(.print-sheet) [data-sidebar="rail"] {
            display: none !important;
          }
          .print-sheet {
            display: block !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          .print-sheet {
            overflow: visible !important;
            break-inside: auto;
            color: #000 !important;
          }
          .print-sheet article {
            break-inside: avoid-page;
            page-break-inside: avoid;
          }
          .print-sheet,
          .print-sheet * { border-color: #475569 !important; }
        }
      `}</style>
      {children}
    </div>
  );
}
