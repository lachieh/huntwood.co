"use client";

import type React from "react";

import { motion } from "framer-motion";
import { AdvancedTopographicalBackground } from "./advanced-topographical-background";

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset bg-[#ffdd18] text-[#1b1b1b] border-[#62776b]">
    {children}
  </span>
);

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <AdvancedTopographicalBackground />
      <div className="absolute inset-0 -z-10" aria-hidden>
        <div className="absolute -top-32 -right-20 h-80 w-80 rounded-full blur-3xl opacity-20 bg-[#e1ecc5]" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full blur-3xl opacity-10 bg-[#62776b]" />
      </div>
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center relative z-10">
        <div>
          <Pill>Geospatial Consulting Partner</Pill>
          <h1
            className="mt-4 text-4xl md:text-6xl font-semibold leading-tight uppercase text-[#344330]"
            style={{ letterSpacing: ".02em" }}
          >
            Make mapping a growth engine.
          </h1>
          <p className="mt-5 text-base md:text-lg text-[#2a2f2c]">
            Huntwood Co helps mining, utilities, and infrastructure
            organisations design, implement, and scale modern geospatial
            programs—across satellite (incl. SAR), drone, and field data—so
            teams ship faster, reduce risk, and unlock real ROI.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#services"
              className="rounded-xl px-4 py-2 text-sm font-medium text-white bg-[#344330] hover:bg-[#23301f] transition-colors"
            >
              Explore services
            </a>
            <a
              href="#contact"
              className="rounded-xl px-4 py-2 text-sm font-medium ring-1 ring-inset border-[#62776b] text-[#344330] hover:bg-gray-50 transition-colors"
            >
              Book a chat
            </a>
          </div>
          <div className="mt-6 text-xs text-[#62776b]">
            Trusted by Australian miners, contractors, and asset owners.
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl ring-1 ring-gray-200 bg-white p-4 md:p-6"
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl h-36 md:h-40 ring-1 ring-gray-200 bg-white p-4">
              <div className="text-xs text-[#62776b]">Platform Enablement</div>
              <div className="mt-1 font-semibold text-[#344330]">
                DroneDeploy
              </div>
              <p className="mt-1 text-sm text-gray-700">
                Licensing audits, workflows, governance, and training for scale.
              </p>
            </div>
            <div className="rounded-xl h-36 md:h-40 ring-1 ring-gray-200 bg-white p-4">
              <div className="text-xs text-[#62776b]">Remote Sensing</div>
              <div className="mt-1 font-semibold text-[#344330]">
                SAR & Optical
              </div>
              <p className="mt-1 text-sm text-gray-700">
                Tasking, monitoring, and change detection fused with GIS.
              </p>
            </div>
            <div className="rounded-xl h-36 md:h-40 ring-1 ring-gray-200 bg-white p-4">
              <div className="text-xs text-[#62776b]">Data Operations</div>
              <div className="mt-1 font-semibold text-[#344330]">
                Standards & QC
              </div>
              <p className="mt-1 text-sm text-gray-700">
                Templates, naming, metadata, and approvals designed to last.
              </p>
            </div>
            <div className="rounded-xl h-36 md:h-40 ring-1 ring-gray-200 bg-white p-4">
              <div className="text-xs text-[#62776b]">Change Management</div>
              <div className="mt-1 font-semibold text-[#344330]">
                People & Process
              </div>
              <p className="mt-1 text-sm text-gray-700">
                Champions, onboarding, and adoption programs that stick.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
