"use client";

import React, { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ArrowDown,
  Check,
  X,
  Target,
  BarChart3,
  Users,
  Settings,
  Award,
  TrendingUp,
  Plus,
  FileText,
  Layers,
  GitBranch,
} from "lucide-react";

/* =============================
   FOOTER COMPONENT
   ============================= */
function SlideFooter() {
  return (
    <div className="slide-footer">
      <span className="footer-text">
        AKHLAK · Amanah, Kompeten, Harmonis, Loyal, Adaptif, Kolaboratif
      </span>
      <div className="footer-bar">
        <div
          className="footer-bar-segment"
          style={{ width: 80, background: "#1a5276" }}
        />
        <div
          className="footer-bar-segment"
          style={{ width: 80, background: "#0e6655" }}
        />
        <div
          className="footer-bar-segment"
          style={{ width: 60, background: "#e67e22" }}
        />
        <div
          className="footer-bar-segment"
          style={{ width: 40, background: "#f1c40f" }}
        />
      </div>
    </div>
  );
}

/* =============================
   ACCENT SHAPES
   ============================= */
function AccentShapes() {
  return (
    <>
      <div className="accent-circle" />
      <div className="accent-half-circle" />
    </>
  );
}

/* =============================
   COVER SLIDE
   ============================= */
function SlideCover() {
  return (
    <div
      className="slide"
      style={{
        display: "flex",
        flexDirection: "column",
        background: "radial-gradient(circle at 50% 50%, #f0f7f4 0%, #ffffff 100%)",
        overflow: "hidden",
        padding: "2rem 4rem 1rem", // Added padding top/sides/bottom
        height: "100%",
        position: "relative"
      }}
    >
      {/* Dynamic Background Accents - Keep them absolute as they are deco */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.12, 0.08],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        style={{
          width: "800px",
          height: "800px",
          top: "-300px",
          left: "-200px",
          background: "var(--color-primary)",
          filter: "blur(100px)",
          position: "absolute",
          borderRadius: "50%",
        }}
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.05, 0.08, 0.05],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        style={{
          width: "600px",
          height: "600px",
          bottom: "-200px",
          right: "-100px",
          background: "var(--color-secondary)",
          filter: "blur(120px)",
          position: "absolute",
          borderRadius: "50%",
        }}
      />

      {/* Main Content Area - Flex Grow to push footer down */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ maxWidth: "1000px" }}
        >
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.2rem" }}>
            <div style={{
              position: "relative",
              width: "60px",
              height: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#fff",
              borderRadius: "50%",
              boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
            }}>
              <Target size={30} color="var(--color-primary)" strokeWidth={1.5} />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{
                  position: "absolute",
                  inset: -5,
                  border: "1px dashed var(--color-primary)",
                  borderRadius: "50%",
                  opacity: 0.3
                }}
              />
            </div>
          </div>

          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              fontSize: "0.75rem",
              fontWeight: 800,
              color: "var(--color-primary)",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "1rem",
              letterSpacing: "0.5em",
            }}
          >
            Strategic Initiative Presentation
          </motion.span>

          <h1
            className="slide-title"
            style={{
              fontSize: "3.8rem",
              lineHeight: 1.05,
              marginBottom: "1.8rem",
              fontStyle: "italic",
              color: "#1a3a3a",
              letterSpacing: "-0.01em",
              fontWeight: 400,
            }}
          >
            Framework <br />
            Agro Performance <br />
            <span style={{ color: "var(--color-secondary)" }}>Management System (APMS) 2026</span>
          </h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
            style={{
              height: "2px",
              background: "linear-gradient(to right, transparent, var(--color-accent), transparent)",
              margin: "0 auto 2rem",
            }}
          />

          <p
            style={{
              fontSize: "1.5rem",
              fontWeight: 600,
              color: "#34495e",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            PT Perkebunan Nusantara III (Persero)
          </p>
        </motion.div>
      </div>

      {/* Footer Info Section removed as requested */}
      <SlideFooter />
    </div>
  );
}

/* =============================
   SLIDE 1: LATAR BELAKANG
   ============================= */
function SlideLatar() {
  const sections = [
    {
      title: "EXTERNALLY DRIVEN",
      subtitle: "BUMN & DAM Directives",
      icon: <Layers size={24} />,
      color: "#e67e22",
      items: [
        "Akselerasi produktivitas SDM melalui SMART Systems yang selaras dengan strategi bisnis.",
        "Adopsi People Analytics & Teknologi untuk pengambilan keputusan berbasis data akurat."
      ],
      source: "DAM Directive No. SR.122/2025"
    },
    {
      title: "STRATEGICALLY ALIGNED",
      subtitle: "Board of Commissioners",
      icon: <GitBranch size={24} />,
      color: "#0e6655",
      items: [
        "Integrasi Sistem KPI (Cascading) dari Holding hingga Anak Perusahaan.",
        "Cakupan Dimensi Keuangan & Non-Keuangan (Digitalisasi, Efisiensi, Keberlanjutan).",
        "Evaluasi Triwulanan berbasis Root Cause Analysis."
      ],
      source: "DEKOM Directive No. KOM/DIR/119/2025"
    },
    {
      title: "INTERNALLY VERIFIED",
      subtitle: "Survey & Employee Feedback",
      icon: <Users size={24} />,
      color: "#1a5276",
      items: [
        "Peningkatan Transparansi & Evaluasi Sistem Kuota Penilaian.",
        "Sinkronisasi KPI secara Vertikal & Horizontal antar Departemen.",
        "Evaluasi berkala untuk menjamin relevansi dengan dinamika bisnis."
      ],
      source: "Employee Engagement & AKHLAK Survey 2024"
    }
  ];

  return (
    <div className="slide" style={{ padding: "0.8rem 3rem 1.2rem" }}>
      <AccentShapes />
      <div className="slide-header" style={{ marginBottom: "1rem" }}>
        <h1 className="slide-title" style={{ fontSize: "2.3rem" }}>Latar Belakang</h1>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ height: "1px", flex: 1, background: "linear-gradient(to right, transparent, rgba(26, 82, 118, 0.2), transparent)" }}></div>
          <p className="slide-subtitle" style={{ fontSize: "1rem", opacity: 0.9, fontWeight: 600 }}>Pondasi Strategis & Arahan Perbaikan Sistem 2026</p>
          <div style={{ height: "1px", flex: 1, background: "linear-gradient(to right, transparent, rgba(26, 82, 118, 0.2), transparent)" }}></div>
        </div>
      </div>

      <div style={{ flex: 1, display: "flex", gap: "2rem" }}>
        {sections.map((sec, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + idx * 0.1 }}
            style={{
              flex: 1,
              background: "#fff",
              border: `1px solid ${sec.color}22`,
              borderRadius: "20px",
              padding: "1.2rem",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 20px 50px rgba(0,0,0,0.05)",
              position: "relative",
              overflow: "hidden"
            }}
          >
            <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "6px", background: sec.color }}></div>

            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.2rem" }}>
              <div style={{ background: `${sec.color}15`, color: sec.color, padding: "10px", borderRadius: "14px", boxShadow: `0 8px 20px ${sec.color}15`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                {sec.icon}
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: "0.8rem", fontWeight: 900, color: sec.color, letterSpacing: "1.5px", marginBottom: "4px", textTransform: "uppercase" }}>{sec.title}</h3>
                <h4 style={{ fontSize: "1rem", fontWeight: 850, color: "#1a202c", lineHeight: 1.2, letterSpacing: "-0.01em" }}>{sec.subtitle}</h4>
              </div>
            </div>

            <div style={{ flex: 1 }}>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {sec.items.map((item, i) => (
                  <li key={i} style={{
                    fontSize: "0.88rem",
                    lineHeight: 1.4,
                    color: "#2d3748",
                    marginBottom: "10px",
                    display: "flex",
                    gap: "10px",
                    fontWeight: 600
                  }}>
                    <span style={{ color: sec.color, fontWeight: 900, fontSize: "1.2rem", marginTop: "-4px" }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{
              marginTop: "auto",
              paddingTop: "1.5rem",
              borderTop: "1px solid #f0f4f8",
              fontSize: "0.85rem",
              fontWeight: 800,
              color: "#94a3b8",
              fontStyle: "italic",
              textAlign: "right"
            }}>
              Source: {sec.source}
            </div>
          </motion.div>
        ))}
      </div>

      <div style={{ marginTop: "1rem", marginBottom: "2.5rem", textAlign: "center", background: "linear-gradient(135deg, rgba(230, 126, 34, 0.1) 0%, rgba(230, 126, 34, 0.05) 100%)", padding: "12px 30px", borderRadius: "14px", border: "2px dashed #e67e22", boxShadow: "0 10px 30px rgba(230,126,34,0.08)" }}>
        <p style={{ fontSize: "1rem", color: "#d35400", fontWeight: 900, margin: 0, display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
          <TrendingUp size={20} />
          <span>Fokus Utama: SMART System, Integrasi Data, dan Adopsi Teknologi.</span>
        </p>
      </div>

      <SlideFooter />
    </div>
  );
}

/* =============================
   SLIDE 2: PRINSIP DASAR KPI
   ============================= */
function SlidePrinsipKPI() {
  const efektif = [
    { text: "Alat ukur OUTPUT/KINERJA (Bukan Sikap/Kompetensi)", icon: <Check size={18} /> },
    { text: "Selaras dengan VISI & STRATEGI Perusahaan", icon: <Check size={18} /> },
    { text: "Berbasis kriteria SMART (Objektif & Terukur)", icon: <Check size={18} /> },
    { text: "Mendorong FAIRNESS antara Perusahaan & Karyawan", icon: <Check size={18} /> },
    { text: "Identifikasi ruang PENGEMBANGAN yang nyata", icon: <Check size={18} /> },
  ];

  const tidakEfektif = [
    { text: "Mengukur AKTIVITAS yang ambigu (Process vs Result)", icon: <X size={18} /> },
    { text: "Data sulit diambil, MANIPULATIF, atau tidak akurat", icon: <X size={18} /> },
    { text: "Jumlah TERLALU BANYAK (Loss of Focus)", icon: <X size={18} /> },
    { text: "Target tidak masuk akal (UNREALISTIC Goals)", icon: <X size={18} /> },
    { text: "Tidak memiliki dampak SIGNIFIKAN terhadap bisnis", icon: <X size={18} /> },
  ];

  return (
    <div className="slide" style={{ padding: "1rem 4rem 1.5rem" }}>
      <AccentShapes />
      <div className="slide-header" style={{ marginBottom: "1rem" }}>
        <h1 className="slide-title" style={{ fontSize: "2.6rem" }}>Prinsip Dasar KPI</h1>
        <p className="slide-subtitle" style={{ fontSize: "1.1rem", fontWeight: 600 }}>Kunci Efektivitas Performance Management System</p>
      </div>

      {/* Philosophy Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{
          background: "linear-gradient(135deg, #1a5276 0%, #2980b9 100%)",
          color: "#fff",
          padding: "15px 30px",
          borderRadius: "15px",
          textAlign: "center",
          marginBottom: "1.2rem",
          boxShadow: "0 10px 25px rgba(26, 82, 118, 0.15)",
          border: "2px solid rgba(255,255,255,0.1)"
        }}
      >
        <p style={{ fontSize: "1.2rem", fontWeight: 800, margin: 0, lineHeight: 1.4 }}>
          "KPI adalah alat ukur <span style={{ color: "#f1c40f", textDecoration: "underline" }}>HASIL (RESULT)</span>—bukan alat ukur kepribadian atau proses administratif."
        </p>
      </motion.div>

      <div className="two-columns" style={{ flex: 1, gap: "1.5rem" }}>
        {/* IDEAL STATE */}
        <motion.div
          className="column-card"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ border: "1px solid rgba(39, 174, 96, 0.2)", background: "rgba(39, 174, 96, 0.03)", borderRadius: "20px", display: "flex", flexDirection: "column" }}
        >
          <div className="column-header" style={{ background: "#27ae60", color: "#fff", border: "none", padding: "12px 25px", display: "flex", alignItems: "center", gap: "12px" }}>
            <Check size={24} strokeWidth={3} />
            <span style={{ fontSize: "1.1rem", fontWeight: 900, letterSpacing: "0.5px" }}>PRINSIP KPI EFEKTIF (THE DO&apos;S)</span>
          </div>
          <div className="column-body" style={{ padding: "1.2rem", flex: 1 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {efektif.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "12px", alignItems: "center", background: "#fff", padding: "12px", borderRadius: "12px", boxShadow: "0 4px 10px rgba(0,0,0,0.03)", border: "1px solid #f0f2f5" }}>
                  <div style={{ background: "#27ae6015", color: "#27ae60", padding: "5px", borderRadius: "50%", display: "flex" }}>{item.icon}</div>
                  <span style={{ fontSize: "0.95rem", color: "#2d3436", fontWeight: 700 }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* PITFALLS */}
        <motion.div
          className="column-card"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ border: "1px solid rgba(231, 76, 60, 0.2)", background: "rgba(231, 76, 60, 0.03)", borderRadius: "20px", display: "flex", flexDirection: "column" }}
        >
          <div className="column-header" style={{ background: "#e74c3c", color: "#fff", border: "none", padding: "12px 25px", display: "flex", alignItems: "center", gap: "12px" }}>
            <X size={24} strokeWidth={3} />
            <span style={{ fontSize: "1.1rem", fontWeight: 900, letterSpacing: "0.5px" }}>JEBAKAN KPI (THE DON&apos;TS)</span>
          </div>
          <div className="column-body" style={{ padding: "1.2rem", flex: 1 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {tidakEfektif.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "12px", alignItems: "center", background: "#fff", padding: "12px", borderRadius: "12px", boxShadow: "0 4px 10px rgba(0,0,0,0.03)", border: "1px solid #f0f2f5" }}>
                  <div style={{ background: "#e74c3c15", color: "#e74c3c", padding: "5px", borderRadius: "50%", display: "flex" }}>{item.icon}</div>
                  <span style={{ fontSize: "0.95rem", color: "#2d3436", fontWeight: 700 }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <SlideFooter />
    </div>
  );
}

/* =============================
   SLIDE: WHY CHANGE PMS
   ============================= */
function SlideWhyChange() {
  const gaps = [
    { area: "Cascading KPI", existing: "Tidak terintegrasi dari Holding ke Individu", target: "Strategy Map → Scorecard → KPI Individu end-to-end", icon: <GitBranch size={20} /> },
    { area: "Scoring Model", existing: "Hanya kuantitatif KPI, tanpa behavior & corporate score", target: "Multi-dimensional: Performance + Behavior + Corporate", icon: <BarChart3 size={20} /> },
    { area: "Rating Scale", existing: "2 tier (≥90 & <90), tidak terdiferensiasi", target: "5 tier global (Outstanding → Poor) berbasis achievement %", icon: <Target size={20} /> },
    { area: "Teknologi", existing: "AGHRIS + Excel manual, rawan error", target: "APMS 2.0 — fully digital, real-time dashboard", icon: <Settings size={20} /> },
    { area: "Talent Linkage", existing: "Rating tidak terhubung ke talent pool & IDP", target: "Rating → Priority Pool → IDP & Career Development", icon: <TrendingUp size={20} /> },
    { area: "Review Cycle", existing: "Annual review, feedback terlambat", target: "Quarterly RBK + Semester behavior assessment", icon: <FileText size={20} /> }
  ];

  return (
    <div className="slide" style={{ padding: "0.8rem 3rem 1.2rem" }}>
      <AccentShapes />
      <div className="slide-header" style={{ marginBottom: "0.8rem" }}>
        <h1 className="slide-title" style={{ fontSize: "2.2rem" }}>
          <em>Why Change? — Gap Analysis PMS</em>
        </h1>
        <p className="slide-subtitle" style={{ fontSize: "0.9rem", fontWeight: 600 }}>Identifikasi kelemahan sistem existing dan kebutuhan transformasi</p>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
        {/* Header Row */}
        <div style={{ display: "flex", gap: "0.8rem", padding: "0 0 0.3rem" }}>
          <div style={{ width: "180px" }}></div>
          <div style={{ flex: 1, background: "#e74c3c", color: "#fff", padding: "8px", borderRadius: "8px", textAlign: "center", fontSize: "0.85rem", fontWeight: 900 }}>🔴 Existing PMS (2022–2025)</div>
          <div style={{ width: "30px" }}></div>
          <div style={{ flex: 1, background: "#27ae60", color: "#fff", padding: "8px", borderRadius: "8px", textAlign: "center", fontSize: "0.85rem", fontWeight: 900 }}>🟢 Target PMS 2026</div>
        </div>

        {gaps.map((gap, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08 }}
            style={{ display: "flex", gap: "0.8rem", alignItems: "stretch" }}
          >
            <div style={{ width: "180px", background: "#1a5276", color: "#fff", borderRadius: "10px", padding: "10px 14px", display: "flex", alignItems: "center", gap: "10px", fontSize: "0.78rem", fontWeight: 800 }}>
              <div style={{ opacity: 0.8 }}>{gap.icon}</div>
              {gap.area}
            </div>
            <div style={{ flex: 1, background: "#fdf2f2", border: "1px solid #f5b7b1", borderRadius: "10px", padding: "10px 14px", fontSize: "0.78rem", color: "#922b21", fontWeight: 600, display: "flex", alignItems: "center" }}>
              <X size={14} style={{ marginRight: "8px", flexShrink: 0 }} /> {gap.existing}
            </div>
            <div style={{ display: "flex", alignItems: "center" }}><ArrowRight size={18} color="#27ae60" /></div>
            <div style={{ flex: 1, background: "#eafaf1", border: "1px solid #a9dfbf", borderRadius: "10px", padding: "10px 14px", fontSize: "0.78rem", color: "#1e8449", fontWeight: 600, display: "flex", alignItems: "center" }}>
              <Check size={14} style={{ marginRight: "8px", flexShrink: 0 }} /> {gap.target}
            </div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          style={{ marginTop: "auto", marginBottom: "1.5rem", background: "linear-gradient(135deg, #1a5276 0%, #2980b9 100%)", color: "#fff", padding: "14px 25px", borderRadius: "12px", textAlign: "center", fontSize: "0.9rem", fontWeight: 800 }}
        >
          💡 Transformasi PMS 2026 menjawab seluruh gap di atas secara sistematis melalui redesign arsitektur, scoring model, dan teknologi.
        </motion.div>
      </div>
      <SlideFooter />
    </div>
  );
}

/* =============================
   SLIDE: MODEL KINERJA APMS
   ============================= */
function SlideModelKinerja() {
  return (
    <div className="slide" style={{ padding: "0.8rem 3rem 1.2rem" }}>
      <AccentShapes />
      <div className="slide-header" style={{ marginBottom: "0.8rem" }}>
        <h1 className="slide-title" style={{ fontSize: "2.2rem" }}>
          <em>Model Kinerja APMS 2026</em>
        </h1>
        <p className="slide-subtitle" style={{ fontSize: "0.9rem", fontWeight: 600 }}>End-to-end: KPI → Score → Rating → Reward & Talent</p>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1rem", justifyContent: "center" }}>
        {/* STEP 1: Score Inputs */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: "flex", gap: "1rem", justifyContent: "center", alignItems: "center" }}>
          {[
            { label: "KPI Individu", sub: "Performance Score", pct: "70%", color: "#1a5276" },
            { label: "ONE / Mission / Innovation", sub: "Behavior Score", pct: "20%", color: "#27ae60" },
            { label: "KPI Bersama", sub: "Corporate Score", pct: "10%", color: "#e67e22" }
          ].map((item, i) => (
            <React.Fragment key={i}>
              {i > 0 && <Plus size={24} color="#7f8c8d" strokeWidth={3} />}
              <div style={{ background: item.color, color: "#fff", borderRadius: "14px", padding: "18px 20px", textAlign: "center", minWidth: "200px", boxShadow: `0 8px 20px ${item.color}30` }}>
                <div style={{ fontSize: "1rem", fontWeight: 900, marginBottom: "4px" }}>{item.label}</div>
                <div style={{ fontSize: "0.75rem", opacity: 0.9, marginBottom: "6px" }}>{item.sub}</div>
                <div style={{ background: "rgba(255,255,255,0.2)", padding: "4px 16px", borderRadius: "20px", display: "inline-block", fontSize: "1.1rem", fontWeight: 900 }}>{item.pct}</div>
              </div>
            </React.Fragment>
          ))}
        </motion.div>

        {/* Arrow Down */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ background: "#fff", padding: "6px", borderRadius: "50%", boxShadow: "0 4px 10px rgba(0,0,0,0.1)", border: "1px solid #dee2e6" }}>
            <ArrowDown size={24} color="#1a5276" strokeWidth={3} />
          </div>
        </div>

        {/* STEP 2: Individual Score */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ background: "linear-gradient(135deg, #1a5276 0%, #2980b9 100%)", color: "#fff", padding: "18px 60px", borderRadius: "14px", textAlign: "center", boxShadow: "0 10px 30px rgba(26,82,118,0.25)" }}>
            <div style={{ fontSize: "1.3rem", fontWeight: 900 }}>Individual Score</div>
            <div style={{ fontSize: "0.8rem", opacity: 0.9, marginTop: "4px" }}>(Performance 70% + Behavior 20% + Corporate 10%)</div>
          </div>
        </motion.div>

        {/* Arrow Down */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ background: "#fff", padding: "6px", borderRadius: "50%", boxShadow: "0 4px 10px rgba(0,0,0,0.1)", border: "1px solid #dee2e6" }}>
            <ArrowDown size={24} color="#8e44ad" strokeWidth={3} />
          </div>
        </div>

        {/* STEP 3: Rating Distribusi */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ background: "#8e44ad", color: "#fff", padding: "18px 50px", borderRadius: "14px", textAlign: "center", boxShadow: "0 10px 30px rgba(142,68,173,0.25)" }}>
            <div style={{ fontSize: "1.2rem", fontWeight: 900 }}>Rating Distribusi → Performance Rating</div>
            <div style={{ fontSize: "0.78rem", opacity: 0.9, marginTop: "4px" }}>Outstanding · Exceed · Meet · Below · Poor</div>
          </div>
        </motion.div>

        {/* Arrow Down */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ background: "#fff", padding: "6px", borderRadius: "50%", boxShadow: "0 4px 10px rgba(0,0,0,0.1)", border: "1px solid #dee2e6" }}>
            <ArrowDown size={24} color="#e67e22" strokeWidth={3} />
          </div>
        </div>

        {/* STEP 4: Outcomes */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} style={{ display: "flex", gap: "1.5rem", justifyContent: "center" }}>
          {[
            { label: "Merit Increment", sub: "Kenaikan gaji berbasis rating", color: "#e67e22", icon: <Award size={24} /> },
            { label: "Performance Bonus", sub: "Insentif berbasis capaian", color: "#f39c12", icon: <TrendingUp size={24} /> },
            { label: "Talent Pool & IDP", sub: "Prioritas pengembangan karir", color: "#27ae60", icon: <Users size={24} /> }
          ].map((item, i) => (
            <div key={i} style={{ background: `linear-gradient(135deg, ${item.color} 0%, ${item.color}dd 100%)`, color: "#fff", borderRadius: "14px", padding: "16px 24px", textAlign: "center", flex: 1, maxWidth: "260px", boxShadow: `0 8px 20px ${item.color}30`, display: "flex", alignItems: "center", gap: "14px" }}>
              <div style={{ opacity: 0.9 }}>{item.icon}</div>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: "0.95rem", fontWeight: 900 }}>{item.label}</div>
                <div style={{ fontSize: "0.7rem", opacity: 0.9 }}>{item.sub}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      <SlideFooter />
    </div>
  );
}

/* =============================
   SLIDE: PERUBAHAN KUNCI PMS 2026
   ============================= */
function SlidePerubahanKunci() {
  const changes = [
    { aspek: "Cascading Strategy", y2025: "Parsial — tidak terintegrasi end-to-end", y2026: "Strategy Map → Scorecard → KPI Individu (full cascade)" },
    { aspek: "Komponen Score", y2025: "KPI Bersama (30%) + KPI Utama (70%)", y2026: "Performance Score (70%) + Behavior Score (20%) + Corporate Score (10%)" },
    { aspek: "Behavior Assessment", y2025: "Tidak ada", y2026: "ONE / Mission / Innovation — semester" },
    { aspek: "Rating Scale", y2025: "2 tier: ≥90 dan <90", y2026: "5 tier: Outstanding, Exceed, Meet, Below, Poor" },
    { aspek: "Rating Threshold", y2025: "Ambang ≥90 / <90", y2026: "≥110 / 100–109 / 90–99 / 70–89 / <70 (global standard)" },
    { aspek: "Rating Distribusi", y2025: "Terbatas, manual", y2026: "Curve control via Priority Pool per level/direktorat" },
    { aspek: "Teknologi", y2025: "AGHRIS + Excel", y2026: "APMS 2.0 — fully digital, integrated" },
    { aspek: "Review Cycle", y2025: "Annual", y2026: "Quarterly RBK + Semester Behavior" },
    { aspek: "Talent Linkage", y2025: "Tidak terintegrasi", y2026: "Rating → Talent Pool → IDP/Career Plan" }
  ];

  return (
    <div className="slide" style={{ padding: "0.8rem 2.5rem 1.2rem" }}>
      <AccentShapes />
      <div className="slide-header" style={{ marginBottom: "0.6rem" }}>
        <h1 className="slide-title" style={{ fontSize: "2.1rem" }}>
          <em>Perubahan Kunci: 2025 → 2026</em>
        </h1>
        <p className="slide-subtitle" style={{ fontSize: "0.85rem", fontWeight: 600 }}>Perbandingan komprehensif transformasi PMS</p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ flex: 1, background: "#fff", borderRadius: "14px", border: "1px solid #d1d9e0", overflow: "hidden", boxShadow: "0 15px 40px rgba(0,0,0,0.06)", marginBottom: "1.5rem" }}
      >
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.82rem", color: "#2c3e50" }}>
          <thead>
            <tr style={{ background: "linear-gradient(90deg, #1a3a3a 0%, #2c5353 100%)", color: "#fff" }}>
              <th style={{ padding: "10px 16px", textAlign: "left", width: "18%", fontSize: "0.85rem", fontWeight: 800, borderRight: "1px solid rgba(255,255,255,0.1)" }}>Aspek</th>
              <th style={{ padding: "10px 16px", textAlign: "center", width: "38%", fontSize: "0.85rem", fontWeight: 800, borderRight: "1px solid rgba(255,255,255,0.1)" }}>
                <span style={{ background: "rgba(231,76,60,0.3)", padding: "2px 10px", borderRadius: "10px" }}>PMS 2025</span>
              </th>
              <th style={{ padding: "10px 16px", textAlign: "center", width: "44%", fontSize: "0.85rem", fontWeight: 800 }}>
                <span style={{ background: "rgba(39,174,96,0.3)", padding: "2px 10px", borderRadius: "10px" }}>PMS 2026</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {changes.map((row, i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#f8fafc" }}>
                <td style={{ padding: "9px 16px", fontWeight: 900, borderRight: "1px solid #e2e8f0", borderBottom: "1px solid #e2e8f0", color: "#1a5276", fontSize: "0.78rem" }}>{row.aspek}</td>
                <td style={{ padding: "9px 16px", borderRight: "1px solid #e2e8f0", borderBottom: "1px solid #e2e8f0", color: "#922b21", fontWeight: 600 }}>{row.y2025}</td>
                <td style={{ padding: "9px 16px", borderBottom: "1px solid #e2e8f0", color: "#1e8449", fontWeight: 700 }}>{row.y2026}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
      <SlideFooter />
    </div>
  );
}

/* =============================
   SLIDE 3: FRAMEWORK 2022–2025
   ============================= */
function SlideFramework2022() {
  return (
    <div className="slide" style={{ padding: "1rem 4rem 1.5rem" }}>
      <AccentShapes />
      <div className="slide-header" style={{ marginBottom: "1rem" }}>
        <h1 className="slide-title" style={{ fontSize: "2.2rem", color: "#34495e" }}>
          <em>Existing: Performance Management Framework 2022 – 2025</em>
        </h1>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1rem" }}>
        {/* ROW 1: INPUT & KPI TYPE */}
        <div style={{ display: "flex", gap: "1.2rem" }}>
          {/* Inputs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ flex: 1, background: "#f8f9fa", border: "1px solid #dee2e6", borderRadius: "12px", padding: "12px", boxShadow: "0 4px 10px rgba(0,0,0,0.02)" }}
          >
            <div style={{ fontSize: "0.8rem", fontWeight: 900, color: "#1a5276", marginBottom: "10px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Strategic Foundation</div>
            <div style={{ background: "#fff", border: "1px solid #bdc3c7", borderRadius: "10px", overflow: "hidden", boxShadow: "0 4px 12px rgba(0,0,0,0.03)" }}>
              <div style={{ background: "#34495e", color: "#fff", padding: "6px", textAlign: "center", fontSize: "0.85rem", fontWeight: 800 }}>Strategic Inputs</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", padding: "12px", justifyContent: "center" }}>
                {["Kontrak Manajemen", "RJPP", "RKAP", "Roadmap", "Aspirasi Pemegang Saham"].map((item, i) => (
                  <span key={i} style={{ background: "#ecf0f1", color: "#2c3e50", fontSize: "0.7rem", padding: "4px 10px", borderRadius: "20px", fontWeight: 700, border: "1px solid #d1d9e0" }}>{item}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* KPI Types */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ flex: 1, background: "#f8f9fa", border: "1px solid #dee2e6", borderRadius: "12px", padding: "12px", boxShadow: "0 4px 10px rgba(0,0,0,0.02)" }}
          >
            <div style={{ fontSize: "0.8rem", fontWeight: 900, color: "#1a5276", marginBottom: "10px", textTransform: "uppercase", letterSpacing: "0.5px" }}>KPI Configuration</div>
            <div style={{ display: "flex", gap: "12px", height: "calc(100% - 30px)" }}>
              <div style={{ flex: 1, background: "#fff", border: "1px solid #bdc3c7", borderRadius: "10px", padding: "10px", display: "flex", flexDirection: "column", gap: "6px" }}>
                <div style={{ fontSize: "0.75rem", fontWeight: 900, color: "#1a5276", textAlign: "center", borderBottom: "1px solid #eee", paddingBottom: "4px" }}>KPI BERSAMA</div>
                <div style={{ background: "#1a5276", color: "#fff", padding: "6px", borderRadius: "6px", fontSize: "0.7rem", fontWeight: 800, textAlign: "center" }}>Kolegial</div>
                <div style={{ background: "#1a5276", color: "#fff", padding: "6px", borderRadius: "6px", fontSize: "0.7rem", fontWeight: 800, textAlign: "center" }}>Unit Kerja</div>
              </div>
              <div style={{ flex: 1, background: "linear-gradient(135deg, #fff 0%, #f4f7f8 100%)", border: "2px solid #1a5276", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", padding: "12px", boxShadow: "0 4px 10px rgba(26,82,118,0.05)" }}>
                <div style={{ color: "#1a5276", fontWeight: 900, fontSize: "0.95rem", textAlign: "center", lineHeight: 1.2 }}>KPI INDIVIDU</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ROW 2: OPERATIONAL PROCESS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{ background: "#fff", border: "1px solid #e9ecef", borderRadius: "16px", padding: "15px", boxShadow: "0 8px 25px rgba(0,0,0,0.04)" }}
        >
          <div style={{ fontSize: "0.8rem", fontWeight: 900, color: "#1a5276", marginBottom: "10px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Operational Execution Lifecycle</div>
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            {[
              { title: "PERENCANAAN", desc: "Identifikasi KPI & Target" },
              { title: "MONITORING", desc: "Realisasi Kinerja Triwulan" },
              { title: "BIMBINGAN", desc: "Coaching Semesteran" },
              { title: "PENILAIAN", desc: "Final Rating Year-End" }
            ].map((step, i) => (
              <React.Fragment key={i}>
                <div style={{ flex: 1, background: "#f8f9fa", border: "1.5px solid #dee2e6", borderRadius: "10px", padding: "10px", textAlign: "center", boxShadow: "0 4px 8px rgba(0,0,0,0.02)" }}>
                  <div style={{ color: "#1a5276", fontSize: "0.85rem", fontWeight: 900, marginBottom: "4px" }}>{step.title}</div>
                  <div style={{ color: "#566573", fontSize: "0.75rem", lineHeight: 1.3, fontWeight: 500 }}>{step.desc}</div>
                </div>
                {i < 3 && <ArrowRight size={20} color="#bdc3c7" strokeWidth={3} />}
              </React.Fragment>
            ))}
            <div style={{ background: "#27ae60", color: "#fff", border: "2px solid #fff", borderRadius: "10px", padding: "8px", fontSize: "0.65rem", fontWeight: 900, textAlign: "center", boxShadow: "0 6px 12px rgba(39,174,96,0.2)", minWidth: "90px" }}>
              AGHRIS <br /> (EXCEL SUPPORTED)
            </div>
          </div>
        </motion.div>

        {/* ROW 3: EVALUATION & REMUNERATION */}
        <div style={{ display: "flex", gap: "1.2rem", flex: 1 }}>
          {/* Ratings */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ flex: 1.5, background: "#f8f9fa", border: "1px solid #dee2e6", borderRadius: "12px", padding: "12px", display: "flex", flexDirection: "column", boxShadow: "0 4px 10px rgba(0,0,0,0.02)" }}
          >
            <div style={{ fontSize: "0.8rem", fontWeight: 900, color: "#1a5276", marginBottom: "10px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Evaluation Outcome</div>
            <div style={{ flex: 1, display: "flex", gap: "12px", alignItems: "center" }}>
              <div style={{ flex: 1, background: "#fff", border: "1px solid #bdc3c7", borderRadius: "10px", padding: "10px", boxShadow: "inset 0 2px 10px rgba(0,0,0,0.02)" }}>
                <div style={{ textAlign: "center", fontSize: "0.85rem", fontWeight: 900, color: "#e67e22", marginBottom: "8px", textTransform: "uppercase" }}>Rating Kinerja</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px" }}>
                  {["Outstanding", "Exceed", "Meet", "Below", "Poor"].map((r, i) => (
                    <div key={i} style={{ fontSize: "0.7rem", color: i < 3 ? "#27ae60" : "#e74c3c", fontWeight: 800 }}>• {r}</div>
                  ))}
                </div>
              </div>
              <ArrowRight size={24} color="#bdc3c7" strokeWidth={3} />
              <div style={{ flex: 1, background: "linear-gradient(135deg, #34495e 0%, #2c3e50 100%)", color: "#fff", padding: "15px 10px", borderRadius: "10px", textAlign: "center", fontWeight: 900, fontSize: "0.95rem", boxShadow: "0 6px 15px rgba(44,62,80,0.2)" }}>
                RATING <br /> KINERJA FINAL
              </div>
            </div>
          </motion.div>

          {/* Merit */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ flex: 1, background: "#fdf2e9", border: "2.5px solid #fadbd8", borderRadius: "12px", padding: "15px", display: "flex", flexDirection: "column", justifyContent: "center", boxShadow: "0 4px 15px rgba(230,126,34,0.05)" }}
          >
            <div style={{ textAlign: "center" }}>
              <div style={{ color: "#e67e22", fontSize: "0.8rem", fontWeight: 900, textTransform: "uppercase", marginBottom: "10px", letterSpacing: "1px" }}>Remuneration Impact</div>
              <div style={{ background: "#e67e22", color: "#fff", padding: "12px", borderRadius: "40px", fontSize: "0.85rem", fontWeight: 900, lineHeight: 1.3, boxShadow: "0 6px 15px rgba(230,126,34,0.2)" }}>
                Merit Increment based on Performance Based Remuneration
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <SlideFooter />
    </div>
  );
}



/* =============================
   SLIDE 4: FRAMEWORK 2026 OPSI A
   ============================= */
function SlideFramework2026A() {
  return (
    <div className="slide" style={{ padding: "0.8rem 3rem 1.2rem" }}>
      <AccentShapes />
      <div className="slide-header" style={{ marginBottom: "0.8rem" }}>
        <h1 className="slide-title" style={{ fontSize: "2.3rem", textAlign: "center", color: "#1a5276" }}>
          <em>Performance Management Framework 2026 (Opsi A)</em>
        </h1>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.5rem" }}>

        {/* --- LAYER 1: STRATEGIC PLANNING (Penyusunan Target) --- */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            background: "rgba(26, 82, 118, 0.03)",
            border: "1px solid #d1d9e0",
            borderRadius: "14px",
            padding: "0.8rem 1.2rem",
            position: "relative"
          }}
        >
          <div style={{ position: "absolute", top: -14, left: 30, background: "#1a5276", color: "#fff", padding: "4px 18px", borderRadius: "20px", fontSize: "0.8rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "1px" }}>
            STRATEGIC PLANNING LAYER
          </div>

          <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
            {/* Input Group */}
            <div style={{ flex: 0.8, background: "#fff", border: "1px solid #2c3e50", borderRadius: "10px", overflow: "hidden", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
              <div style={{ background: "#34495e", color: "#fff", fontSize: "0.9rem", padding: "8px", textAlign: "center", fontWeight: 700 }}>Strategic Inputs</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", padding: "1rem", justifyContent: "center" }}>
                {["Kontrak Manajemen", "RJPP", "RKAP", "Roadmap", "Aspirasi Pemegang Saham"].map((item, i) => (
                  <span key={i} style={{ background: "#2c3e50", color: "#fff", fontSize: "0.75rem", padding: "5px 12px", borderRadius: "20px", fontWeight: 500 }}>{item}</span>
                ))}
              </div>
            </div>

            <div style={{ opacity: 0.6 }}><ChevronRight size={32} color="#1a5276" /></div>

            {/* Cascade Group */}
            <div style={{ flex: 1.2, display: "flex", flexDirection: "column", gap: "0.8rem" }}>
              {[
                { label: "Corporate", color: "#1a5276" },
                { label: "Direktorat", color: "#1f618d" },
                { label: "Divisi", color: "#2980b9" }
              ].map((lvl, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{ flex: 1, border: `2px solid ${lvl.color}`, color: lvl.color, padding: "8px 12px", borderRadius: "25px", textAlign: "center", fontSize: "0.85rem", fontWeight: 800 }}>Strategy Map {lvl.label}</div>
                  <div style={{ width: "40px", borderBottom: `2px dashed ${lvl.color}` }}></div>
                  <div style={{ flex: 1, background: lvl.color, color: "#fff", padding: "8px 12px", borderRadius: "8px", textAlign: "center", fontSize: "0.85rem", fontWeight: 800, boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>Scorecard {lvl.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* --- CONNECTOR 1 --- */}
        <div style={{ display: "flex", justifyContent: "center", margin: "-0.8rem 0", zIndex: 2 }}>
          <div style={{ background: "#fff", padding: "4px", borderRadius: "50%", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", border: "1px solid #dee2e6" }}>
            <ArrowDown size={24} color="#1a5276" strokeWidth={3} />
          </div>
        </div>

        {/* --- LAYER 2: INDIVIDUAL PERFORMANCE PROCESS --- */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            background: "rgba(127, 140, 141, 0.03)",
            border: "1px solid #d1d9e0",
            borderRadius: "14px",
            padding: "1rem",
            position: "relative"
          }}
        >
          <div style={{ position: "absolute", top: -14, left: 30, background: "#7f8c8d", color: "#fff", padding: "4px 18px", borderRadius: "20px", fontSize: "0.8rem", fontWeight: 800, textTransform: "uppercase" }}>
            OPERATIONAL PROCESS LAYER
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}>
            <div style={{ background: "#1a5276", color: "#fff", padding: "10px 60px", borderRadius: "8px", fontWeight: 900, fontSize: "1.1rem", border: "2px solid #fff", boxShadow: "0 6px 15px rgba(26, 82, 118, 0.2)" }}>
              KPI INDIVIDU
            </div>

            <div style={{ display: "flex", gap: "0.8rem", width: "100%", position: "relative" }}>
              {[
                { title: "PERENCANAAN", desc: "Identifikasi & Kesepakatan Target" },
                { title: "MONITORING", desc: "Realisasi Kinerja Triwulan" },
                { title: "COACHING", desc: "Bimbingan & Tindak Lanjut" },
                { title: "PENILAIAN", desc: "Final Performance Score" }
              ].map((step, i) => (
                <div key={i} style={{ flex: 1, background: "#fff", border: "1px solid #dee2e6", borderRadius: "10px", padding: "10px", textAlign: "center", boxShadow: "0 4px 8px rgba(0,0,0,0.03)" }}>
                  <div style={{ background: "#1a5276", color: "#fff", fontSize: "0.85rem", fontWeight: 900, padding: "5px", borderRadius: "6px", marginBottom: "8px" }}>{step.title}</div>
                  <div style={{ fontSize: "0.75rem", color: "#34495e", lineHeight: 1.3 }}>{step.desc}</div>
                  {i < 3 && <div style={{ position: "absolute", right: `${75 - i * 25}%`, top: "50%", transform: "translate(50%, -50%)", zIndex: 1 }}><ChevronRight size={20} color="#bdc3c7" strokeWidth={3} /></div>}
                </div>
              ))}

              <div style={{ position: "absolute", right: "-15px", top: "-20px", transform: "rotate(12deg)", background: "#27ae60", color: "#fff", border: "3px solid #fff", borderRadius: "30px", padding: "6px 15px", fontSize: "0.7rem", fontWeight: 900, boxShadow: "0 6px 12px rgba(39,174,96,0.3)" }}>
                AGHRIS (APMS MODULE)
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- CONNECTOR 2 --- */}
        <div style={{ display: "flex", justifyContent: "center", margin: "-0.8rem 0", zIndex: 2 }}>
          <div style={{ background: "#fff", padding: "4px", borderRadius: "50%", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", border: "1px solid #dee2e6" }}>
            <ArrowDown size={18} color="#1a5276" strokeWidth={3} />
          </div>
        </div>

        {/* --- LAYER 3: EVALUATION & OUTCOMES --- */}
        <div style={{ display: "flex", gap: "1.2rem", flex: 1 }}>
          <div style={{ flex: 1.2, display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ background: "#fdfefe", border: "1px solid #d1d9e0", borderRadius: "14px", padding: "0.8rem 1.2rem", display: "flex", flexDirection: "column", gap: "0.8rem", boxShadow: "0 4px 15px rgba(0,0,0,0.02)" }}>
              <div style={{ textAlign: "center", fontSize: "0.85rem", fontWeight: 900, color: "#1a5276", borderBottom: "1px solid #f4f7f8", paddingBottom: "6px", textTransform: "uppercase" }}>INDIVIDUAL SCORE CALCULATION</div>

              <div style={{ display: "flex", gap: "1.2rem", alignItems: "center", justifyContent: "center" }}>
                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "8px" }}>
                  <div style={{ background: "#27ae60", color: "#fff", padding: "8px", borderRadius: "30px", fontSize: "0.8rem", fontWeight: 800, textAlign: "center" }}>Behavior Score</div>
                  <div style={{ background: "#2ecc71", color: "#fff", padding: "8px", borderRadius: "8px", fontSize: "0.8rem", fontWeight: 800, textAlign: "center" }}>KPI Kolegial</div>
                </div>
                <Plus size={20} color="#7f8c8d" strokeWidth={3} />
                <div style={{ flex: 1 }}>
                  <div style={{ background: "linear-gradient(135deg, #1a5276 0%, #2980b9 100%)", color: "#fff", padding: "15px 10px", borderRadius: "10px", fontSize: "0.9rem", fontWeight: 900, textAlign: "center", boxShadow: "0 4px 10px rgba(26,82,118,0.2)" }}>Individual Score</div>
                </div>
                <ChevronRight size={20} color="#7f8c8d" />
                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "8px" }}>
                  <div style={{ background: "#1a5276", color: "#fff", padding: "8px", borderRadius: "8px", fontSize: "0.8rem", fontWeight: 800, textAlign: "center" }}>Performance Score</div>
                  <div style={{ background: "#d6eaf8", color: "#1a5276", padding: "8px", borderRadius: "8px", fontSize: "0.75rem", fontWeight: 800, textAlign: "center", border: "1px solid #aed6f1" }}>Performance Score</div>
                </div>
              </div>
            </div>

            <div style={{ flex: 1, background: "#fff", border: "2px solid #1a5276", borderRadius: "14px", padding: "1.2rem", display: "flex", flexDirection: "column", position: "relative" }}>
              <div style={{ textAlign: "center", fontSize: "1rem", fontWeight: 900, color: "#1a5276", marginBottom: "1rem", letterSpacing: "0.5px" }}>RATING DISTRIBUSI (CURVE CONTROL)</div>
              <div style={{ display: "flex", gap: "1.5rem", flex: 1, alignItems: "center" }}>
                <div style={{ flex: 0.8, border: "2px solid #f2f3f4", borderRadius: "10px", padding: "10px", fontSize: "0.75rem", background: "#fcfdfd" }}>
                  <div style={{ background: "#1a5276", color: "#fff", padding: "4px", fontWeight: 900, textAlign: "center", marginBottom: "8px", borderRadius: "4px" }}>KLASIFIKASI RD</div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px", fontWeight: 700, color: "#2c3e50" }}>
                    <span>• RD 1</span><span>• RD 4</span>
                    <span>• RD 2</span><span>• RD 5</span>
                    <span>• RD 3</span>
                  </div>
                </div>
                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                  <div style={{ background: "linear-gradient(to right, #1a5276, #2980b9)", color: "#fff", padding: "10px", borderRadius: "8px", fontSize: "0.85rem", fontWeight: 900, textAlign: "center", position: "relative", boxShadow: "0 4px 12px rgba(26,82,118,0.2)" }}>
                    PRIORITY POOL (TALENT)
                    <div style={{ position: "absolute", top: -12, right: -5 }}><Settings size={20} color="#fff" fill="#fff" /></div>
                  </div>
                  <div style={{ background: "#d6eaf8", color: "#1a5276", border: "1.5px solid #1a5276", padding: "8px", borderRadius: "8px", fontSize: "0.85rem", fontWeight: 800, textAlign: "center" }}>PERFORMANCE RATING</div>
                </div>
                <div style={{ position: "absolute", top: "15px", right: "15px", background: "#27ae60", color: "#fff", width: "55px", height: "55px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", fontSize: "0.6rem", fontWeight: 900, textAlign: "center", lineHeight: 1.1, border: "3px solid #fff", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
                  <div>APPS</div>
                  <div>RATING</div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ width: "280px", display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ flex: 1, background: "#fff", border: "2px solid #e67e22", borderRadius: "14px", padding: "1.2rem", display: "flex", flexDirection: "column", justifyContent: "space-between", boxShadow: "0 4px 15px rgba(230,126,34,0.05)" }}>
              <div style={{ background: "#e67e22", color: "#fff", fontSize: "0.85rem", fontWeight: 900, padding: "6px", borderRadius: "8px", textAlign: "center", textTransform: "uppercase" }}>COMPENSATION IMPACT</div>
              <div style={{ textAlign: "center", fontSize: "0.9rem", padding: "10px", border: "2px solid #f8c471", borderRadius: "8px", background: "#fef5e7", fontWeight: 800, color: "#873b00" }}>Sidang Komite Kinerja</div>
              <div style={{ display: "flex", justifyContent: "center" }}><ArrowDown size={24} color="#e67e22" strokeWidth={3} /></div>
              <div style={{ background: "#e67e22", color: "#fff", fontSize: "0.95rem", fontWeight: 900, padding: "12px 10px", borderRadius: "40px", textAlign: "center", lineHeight: 1.2, boxShadow: "0 6px 15px rgba(230,126,34,0.2)" }}>Merit Increment & <br />Performance Bonus</div>
            </div>

            <div style={{ background: "linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)", color: "#fff", borderRadius: "14px", padding: "1.2rem", textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center", boxShadow: "0 6px 15px rgba(39, 174, 96, 0.2)" }}>
              <Award size={32} style={{ margin: "0 auto 8px" }} />
              <div style={{ fontSize: "1rem", fontWeight: 900 }}>INDIVIDUAL DEVELOPMENT PLAN</div>
              <div style={{ fontSize: "0.75rem", opacity: 0.9, marginTop: "4px" }}>Career Path & Competency Growth</div>
            </div>
          </div>
        </div>

        {/* Footer Roles */}
        <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem", marginTop: "0.3rem" }}>
          {["Mgt Kinerja & HCIS (DOPS)", "HI & Remunerasi (DOPS)", "Talent Mgt (DSPS)"].map((role, i) => (
            <div key={role} style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "#f4f7f8", border: "1px solid #d1d9e0", padding: "3px 12px", borderRadius: "30px", boxShadow: "0 2px 5px rgba(0,0,0,0.02)" }}>
              <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: i === 0 ? "#2980b9" : i === 1 ? "#e67e22" : "#27ae60" }}></div>
              <span style={{ fontSize: "0.7rem", fontWeight: 800, color: "#34495e" }}>{role}</span>
            </div>
          ))}
        </div>
      </div>

      <SlideFooter />
    </div>
  );
}

/* =============================
   SLIDE 5: FRAMEWORK 2026 OPSI B
   ============================= */
function SlideFramework2026B() {
  return (
    <div className="slide" style={{ padding: "0.8rem 2.5rem 1.2rem" }}>
      <AccentShapes />
      <div className="slide-header" style={{ marginBottom: "0.8rem" }}>
        <h1 className="slide-title" style={{ fontSize: "2.3rem", textAlign: "center", color: "#1a5276" }}>
          <em>Performance Management Framework 2026 (Opsi B)</em>
        </h1>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
        {/* LAYER 1: STRATEGIC PLANNING */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            display: "flex",
            background: "#f4f7f8",
            border: "1px solid #d1d9e0",
            borderRadius: "14px",
            overflow: "hidden",
            boxShadow: "0 4px 15px rgba(0,0,0,0.05)"
          }}
        >
          <div style={{ background: "#2c3e50", width: "35px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ transform: "rotate(-90deg)", whiteSpace: "nowrap", fontSize: "0.8rem", fontWeight: 900, color: "#fff", letterSpacing: "1px" }}>STRATEGIC</span>
          </div>
          <div style={{ flex: 1, padding: "1rem 1.5rem", display: "flex", gap: "1.5rem", alignItems: "center" }}>
            <div style={{ background: "#fff", border: "1px solid #2c3e50", borderRadius: "10px", padding: "12px", minWidth: "260px" }}>
              <div style={{ background: "#1a5276", color: "#fff", textAlign: "center", fontSize: "0.85rem", fontWeight: 800, padding: "6px", borderRadius: "6px", marginBottom: "8px", textTransform: "uppercase" }}>Strategic Inputs</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", justifyContent: "center" }}>
                {["Kontrak Manajemen", "RJPP", "RKAP", "Roadmap", "Aspirasi Pemegang Saham"].map((item, i) => (
                  <span key={i} style={{ background: "#000", color: "#fff", fontSize: "0.7rem", padding: "4px 10px", borderRadius: "20px", fontWeight: 600 }}>{item}</span>
                ))}
              </div>
            </div>
            <ArrowRight size={28} color="#7f8c8d" />
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "6px" }}>
              {["Corporate", "Direktorat", "Divisi"].map((level, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ background: "#1a5276", color: "#fff", padding: "6px 15px", borderRadius: "30px", fontSize: "0.8rem", fontWeight: 800, flex: 1, textAlign: "center" }}>Strategy Map {level}</div>
                  <div style={{ borderTop: "2px dashed #bdc3c7", width: "30px" }}></div>
                  <div style={{ background: "#1a5276", color: "#fff", padding: "6px 15px", borderRadius: "8px", fontSize: "0.8rem", fontWeight: 800, flex: 1, textAlign: "center", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>Scorecard {level}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div style={{ display: "flex", justifyContent: "center" }}><ArrowDown size={18} color="#bdc3c7" /></div>

        {/* LAYER 2: OPERATIONAL PROCESS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ display: "flex", background: "#fcfdfd", border: "1px solid #d1d9e0", borderRadius: "14px", overflow: "hidden", boxShadow: "0 4px 15px rgba(0,0,0,0.03)" }}
        >
          <div style={{ background: "#7f8c8d", width: "35px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ transform: "rotate(-90deg)", whiteSpace: "nowrap", fontSize: "0.8rem", fontWeight: 900, color: "#fff", letterSpacing: "1px" }}>OPERATIONAL</span>
          </div>
          <div style={{ flex: 1, padding: "1.2rem" }}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}>
              <div style={{ background: "#1a5276", color: "#fff", padding: "6px 40px", borderRadius: "8px", fontSize: "0.95rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "1px" }}>KPI Individu</div>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              {[
                { title: "Perencanaan", items: ["Identifikasi KPI", "Bobot & Target"] },
                { title: "Monitoring", items: ["Update Progress", "Triwulanan"] },
                { title: "Coaching", items: ["Umpan Balik", "Tindak Lanjut"] },
                { title: "Assessment", items: ["Final Review", "Rating"] }
              ].map((step, i) => (
                <div key={i} style={{ flex: 1, background: "#fff", border: "1px solid #e9ecef", borderRadius: "10px", overflow: "hidden", boxShadow: "0 4px 8px rgba(0,0,0,0.02)" }}>
                  <div style={{ background: "#34495e", color: "#fff", padding: "6px", fontSize: "0.8rem", fontWeight: 900, textAlign: "center" }}>{step.title}</div>
                  <div style={{ padding: "10px", fontSize: "0.7rem", color: "#2c3e50", fontWeight: 600, lineHeight: 1.4 }}>
                    {step.items.map((item, j) => <div key={j}>• {item}</div>)}
                  </div>
                </div>
              ))}
              <div style={{ background: "linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)", color: "#fff", borderRadius: "50%", width: "65px", height: "65px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.7rem", fontWeight: 900, textAlign: "center", alignSelf: "center", border: "3px solid #fff", boxShadow: "0 6px 12px rgba(39,174,96,0.2)" }}>
                MODUL <br /> APMS
              </div>
            </div>
          </div>
        </motion.div>

        <div style={{ display: "flex", justifyContent: "center" }}><ArrowDown size={18} color="#bdc3c7" /></div>

        {/* LAYER 3: EVALUATION & OUTCOMES */}
        <div style={{ flex: 1, display: "flex", gap: "1rem" }}>
          {/* LEFT: Scoring Logic */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ flex: 2, background: "#f8f9fa", border: "1px solid #dee2e6", borderRadius: "14px", padding: "1rem 1.2rem", boxShadow: "0 4px 15px rgba(0,0,0,0.02)" }}
          >
            <div style={{ fontSize: "0.8rem", fontWeight: 900, color: "#1a5276", marginBottom: "10px", textTransform: "uppercase", borderBottom: "1px solid #dee2e6", paddingBottom: "6px" }}>Individual Score Calculation</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", justifyContent: "center" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                  <div style={{ background: "#27ae60", color: "#fff", padding: "8px", borderRadius: "30px", fontSize: "0.75rem", fontWeight: 800, textAlign: "center", width: "110px" }}>Behavior Score</div>
                  <div style={{ background: "#1a5276", color: "#fff", padding: "8px", borderRadius: "8px", fontSize: "0.75rem", fontWeight: 800, textAlign: "center", width: "110px" }}>KPI Kolegial</div>
                </div>
                <Plus size={20} color="#7f8c8d" strokeWidth={3} />
                <div style={{ background: "linear-gradient(135deg, #1a5276 0%, #2980b9 100%)", color: "#fff", padding: "12px 25px", borderRadius: "10px", fontSize: "0.9rem", fontWeight: 900, boxShadow: "0 4px 12px rgba(26,82,118,0.2)" }}>Individual Score</div>
              </div>

              <div style={{ border: "2px solid #d1d9e0", borderRadius: "12px", background: "#fff", padding: "12px", boxShadow: "inset 0 2px 10px rgba(0,0,0,0.02)" }}>
                <div style={{ fontSize: "0.9rem", fontWeight: 900, color: "#2c3e50", marginBottom: "10px", textAlign: "center", letterSpacing: "0.5px" }}>RATING DISTRIBUSI (CURVE CONTROL)</div>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <div style={{ flex: 1, background: "#f8f9fa", borderRadius: "8px", padding: "10px", fontSize: "0.8rem", border: "1px solid #dee2e6" }}>
                    <div style={{ fontWeight: 900, marginBottom: "4px", color: "#1a5276" }}>KLASIFIKASI RD</div>
                    <div style={{ fontWeight: 700 }}>RD 1 - RD 5</div>
                  </div>
                  <ArrowRight size={20} color="#7f8c8d" />
                  <div style={{ flex: 1, background: "rgba(52, 152, 219, 0.08)", color: "#3498db", border: "1.5px dashed #3498db", borderRadius: "8px", padding: "10px", textAlign: "center" }}>
                    <div style={{ display: "flex", justifyContent: "center", marginBottom: "2px" }}><Settings size={18} /></div>
                    <div style={{ fontSize: "0.7rem", fontWeight: 900 }}>APPS RATING DISTRIBUSI</div>
                  </div>
                  <ArrowRight size={20} color="#7f8c8d" />
                  <div style={{ flex: 1, background: "#e9ecef", borderRadius: "8px", padding: "10px", fontSize: "0.8rem", textAlign: "center", border: "1px solid #dee2e6" }}>
                    <div style={{ fontWeight: 900, color: "#2c3e50" }}>PERFORMANCE</div>
                    <div style={{ fontWeight: 700 }}>RATING</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Compensation & IDP Pillars */}
          <motion.div
            initial={{ opacity: 20, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.8rem" }}
          >
            {/* Committee Pillar */}
            <div style={{ background: "#fdf2e9", border: "2px solid #fadbd8", borderRadius: "14px", padding: "10px", textAlign: "center", boxShadow: "0 4px 10px rgba(230,126,34,0.05)" }}>
              <div style={{ color: "#e67e22", fontSize: "0.75rem", fontWeight: 900, textTransform: "uppercase", marginBottom: "6px", letterSpacing: "1px" }}>Committee Approval</div>
              <div style={{ background: "#fff", border: "2px solid #e67e22", color: "#e67e22", padding: "8px", borderRadius: "30px", fontSize: "0.9rem", fontWeight: 900, boxShadow: "0 2px 8px rgba(230,126,34,0.1)" }}>Sidang Komite Kinerja</div>
            </div>

            {/* Compensation Pillar */}
            <div style={{ flex: 1.2, background: "linear-gradient(to bottom, #f39c12, #e67e22)", borderRadius: "14px", padding: "12px", display: "flex", flexDirection: "column", justifyContent: "center", color: "#fff", textAlign: "center", boxShadow: "0 6px 15px rgba(230,126,34,0.15)" }}>
              <Award size={28} style={{ margin: "0 auto 6px" }} />
              <div style={{ fontSize: "0.95rem", fontWeight: 900, marginBottom: "4px" }}>COMPENSATION IMPACT</div>
              <div style={{ fontSize: "0.7rem", opacity: 0.95, lineHeight: 1.3 }}>Merit Increment & Performance Bonus based on Rating</div>
            </div>

            {/* IDP Pillar */}
            <div style={{ flex: 1.2, background: "linear-gradient(to bottom, #27ae60, #1e8449)", borderRadius: "14px", padding: "12px", display: "flex", flexDirection: "column", justifyContent: "center", color: "#fff", textAlign: "center", boxShadow: "0 6px 15px rgba(39, 174, 96, 0.15)" }}>
              <TrendingUp size={28} style={{ margin: "0 auto 6px" }} />
              <div style={{ fontSize: "0.95rem", fontWeight: 900, marginBottom: "4px" }}>TALENT DEVELOPMENT</div>
              <div style={{ fontSize: "0.7rem", opacity: 0.95, lineHeight: 1.3 }}>IDP & Career Development Plan</div>
            </div>
          </motion.div>
        </div>

        {/* Footer Organization Labels */}
        <div style={{ display: "flex", justifyContent: "center", gap: "1.2rem", marginTop: "0.4rem" }}>
          {["Mgt Kinerja & HCIS (DOPS)", "HI & Remunerasi (DOPS)", "Talent Mgt (DSPS)"].map((role, i) => (
            <div key={i} style={{ background: "#f4f7f8", color: "#34495e", padding: "5px 15px", borderRadius: "30px", fontSize: "0.75rem", fontWeight: 800, border: "1px solid #d1d9e0" }}>{role}</div>
          ))}
        </div>
      </div>

      <SlideFooter />
    </div>
  );
}





/* =============================
   SLIDE 5: PEMBOBOTAN PERFORMANCE APPRAISAL
   ============================= */
function SlideWeighting() {
  const years = [
    {
      year: "Tahun 2025",
      type: "current",
      scenarios: [
        {
          title: "Kebun, Pabrik, Unit Kerja Lainnya",
          id: 1,
          diagram: (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "15px" }}>
              <div style={{ display: "flex", gap: "25px", alignItems: "center" }}>
                <div style={{ background: "#1e8449", color: "#fff", padding: "15px", borderRadius: "8px", fontSize: "0.85rem", fontWeight: 800, textAlign: "center", width: "110px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
                  KPI Bersama<br />30 %
                </div>
                <div style={{ fontSize: "1.8rem", fontWeight: 900, color: "#27ae60" }}>+</div>
                <div style={{ border: "3px dashed #f1c40f", padding: "10px", borderRadius: "10px", background: "rgba(241, 196, 15, 0.05)" }}>
                  <div style={{ textAlign: "center", fontSize: "0.8rem", fontWeight: 900, color: "#1a5276", marginBottom: "8px" }}>KPI Utama 70 %</div>
                  <div style={{ display: "flex", gap: "12px" }}>
                    <div style={{ background: "#1a5276", color: "#fff", padding: "12px", borderRadius: "6px", fontSize: "0.8rem", fontWeight: 700, textAlign: "center", width: "95px" }}>
                      KPI Unit Kerja<br />49%
                    </div>
                    <div style={{ background: "#1a5276", color: "#fff", padding: "12px", borderRadius: "6px", fontSize: "0.8rem", fontWeight: 700, textAlign: "center", width: "95px" }}>
                      KPI Individu<br />21%
                    </div>
                  </div>
                </div>
              </div>
              <ArrowDown size={18} color="#bdc3c7" />
              <div style={{ background: "#1a5276", color: "#fff", padding: "8px 30px", borderRadius: "8px", fontSize: "0.9rem", fontWeight: 900, boxShadow: "0 6px 15px rgba(26, 82, 118, 0.2)" }}>Performance Score</div>
            </div>
          )
        },
        {
          title: "Holding, Head Office, dan Kantor Regional",
          id: 2,
          diagram: (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "15px" }}>
              <div style={{ display: "flex", gap: "25px", alignItems: "center" }}>
                <div style={{ background: "#1e8449", color: "#fff", padding: "15px", borderRadius: "8px", fontSize: "0.85rem", fontWeight: 800, textAlign: "center", width: "110px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
                  KPI Bersama<br />30 %
                </div>
                <div style={{ fontSize: "1.8rem", fontWeight: 900, color: "#27ae60" }}>+</div>
                <div style={{ border: "3px dashed #f1c40f", padding: "10px", borderRadius: "10px", background: "rgba(241, 196, 15, 0.05)", width: "130px" }}>
                  <div style={{ textAlign: "center", fontSize: "0.8rem", fontWeight: 900, color: "#1a5276", marginBottom: "8px" }}>KPI Utama</div>
                  <div style={{ background: "#1a5276", color: "#fff", padding: "15px", borderRadius: "8px", fontSize: "0.85rem", fontWeight: 800, textAlign: "center" }}>
                    KPI Individu<br />70%
                  </div>
                </div>
              </div>
              <ArrowDown size={18} color="#bdc3c7" />
              <div style={{ background: "#1a5276", color: "#fff", padding: "8px 30px", borderRadius: "8px", fontSize: "0.9rem", fontWeight: 900, boxShadow: "0 6px 15px rgba(26, 82, 118, 0.2)" }}>Performance Score</div>
            </div>
          )
        }
      ]
    },
    {
      year: "Tahun 2026 dengan opsi A",
      type: "future",
      scenarios: [
        {
          title: "Mekanisme Bonus All Unit",
          id: 1,
          diagram: (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "15px" }}>
              <div style={{ display: "flex", gap: "15px" }}>
                {[
                  { label: "KPI Individu", sub: "Perform. Score", pct: "70%" },
                  { label: "ONE, Mission, Innovation", sub: "Behavior Score", pct: "20%" },
                  { label: "KPI Bersama", sub: "Corp. Score", pct: "10%" }
                ].map((box, bIdx) => (
                  <div key={bIdx} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                    <div style={{ background: "#73c6b6", color: "#145a32", padding: "12px 10px", borderRadius: "8px", fontSize: "0.75rem", fontWeight: 900, textAlign: "center", width: "95px", height: "65px", display: "flex", alignItems: "center", justifyContent: "center" }}>{box.label}</div>
                    <div style={{ height: "15px", borderLeft: "2px dashed #bdc3c7" }}></div>
                    <div style={{ background: "#d1f2eb", color: "#117864", padding: "10px 8px", borderRadius: "6px", fontSize: "0.7rem", fontWeight: 800, textAlign: "center", width: "95px" }}>{box.sub}<br />{box.pct}</div>
                  </div>
                ))}
              </div>
              <ArrowDown size={18} color="#bdc3c7" />
              <div style={{ background: "#1a5276", color: "#fff", padding: "8px 35px", borderRadius: "8px", fontSize: "0.9rem", fontWeight: 900 }}>Individual Score</div>
            </div>
          )
        },
        {
          title: "Mekanisme Merit Increment All Unit",
          id: 2,
          diagram: (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
              <div style={{ background: "#1a5276", color: "#fff", padding: "12px 35px", borderRadius: "8px", fontSize: "0.9rem", fontWeight: 800 }}>Individual Score</div>
              <ArrowDown size={20} color="#bdc3c7" />
              <div style={{ background: "#73c6b6", color: "#145a32", padding: "12px 35px", borderRadius: "8px", fontSize: "0.9rem", fontWeight: 900 }}>Rating Distribusi</div>
              <ArrowDown size={20} color="#bdc3c7" />
              <div style={{ background: "linear-gradient(135deg, #1a5276 0%, #2980b9 100%)", color: "#fff", padding: "12px 30px", borderRadius: "40px", fontSize: "0.85rem", fontWeight: 800, textAlign: "center", boxShadow: "0 6px 15px rgba(26, 82, 118, 0.2)" }}>Merit Increment based<br />on Rating</div>
            </div>
          )
        }
      ]
    }
  ];

  return (
    <div className="slide" style={{ padding: "0.8rem 3.5rem 1.5rem" }}>
      <AccentShapes />
      <div className="slide-header" style={{ marginBottom: "0.8rem" }}>
        <h1 className="slide-title" style={{ fontSize: "2.3rem" }}>
          <em>Pembobotan Performance Appraisal</em>
        </h1>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {years.map((y, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.3 }}
            style={{ flex: 1, border: "1px solid #d1d9e0", borderRadius: "16px", padding: "15px 25px", position: "relative", background: "#fff", boxShadow: "0 10px 25px rgba(0,0,0,0.05)" }}
          >
            <div style={{ position: "absolute", top: "-15px", left: "30px", background: "#f39c12", color: "#fff", padding: "4px 20px", borderRadius: "25px", fontSize: "0.9rem", fontWeight: 900, boxShadow: "0 4px 10px rgba(243, 156, 18, 0.3)" }}>{y.year}</div>
            <div style={{ display: "flex", height: "100%", gap: "1.5rem", marginTop: "10px" }}>
              <div style={{ flex: 2.2, display: "flex", gap: "1.5rem" }}>
                {y.scenarios.map((s, sIdx) => (
                  <div key={sIdx} style={{ flex: 1, border: "1px solid #f2f3f4", borderRadius: "12px", padding: "10px 15px", display: "flex", flexDirection: "column", background: "#fafbfc" }}>
                    <div style={{ display: "flex", gap: "10px", marginBottom: "12px" }}>
                      <div style={{ background: "#2ecc71", color: "#fff", width: "24px", height: "24px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.9rem", fontWeight: 900 }}>{s.id}</div>
                      <div style={{ background: "rgba(26, 82, 118, 0.05)", color: "#1a5276", padding: "4px 15px", borderRadius: "20px", fontSize: "0.85rem", fontWeight: 800, flex: 1, border: "1px solid rgba(26, 82, 118, 0.1)" }}>{s.title}</div>
                    </div>
                    <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {s.diagram}
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ flex: 1.1, background: "linear-gradient(180deg, #fcfdfd 0%, #f4f7f6 100%)", padding: "12px", borderRadius: "12px", border: "1px solid #e9ecef" }}>
                <div style={{ fontSize: "0.85rem", color: "#2c3e50", lineHeight: 1.6 }}>
                  {y.type === "current" ? (
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                      <p style={{ margin: 0 }}>Di tahun 2025, bobot penilaian kinerja individu terdiri dari:</p>
                      <ul style={{ margin: 0, paddingLeft: "1.2rem", fontWeight: 700 }}>
                        <li>KPI Utama 70%</li>
                        <li>KPI Bersama 30%</li>
                      </ul>
                      <div style={{ marginTop: "10px", padding: "10px", borderLeft: "4px solid #f1c40f", background: "rgba(241, 196, 15, 0.1)" }}>
                        <span style={{ fontWeight: 900, color: "#1a5276", fontSize: "0.75rem", textTransform: "uppercase" }}>Key Point:</span><br />
                        <span style={{ fontSize: "0.8rem" }}>KPI Utama pada Unit Usaha terdiri atas KPI Individu 21% dan KPI Unit Kerja 49%.</span>
                      </div>
                    </div>
                  ) : (
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                      <p style={{ margin: 0 }}>Bobot penilaian 2026 (Opsi A):</p>
                      <ul style={{ margin: 0, paddingLeft: "1.2rem", fontWeight: 700, fontSize: "0.8rem" }}>
                        <li>Performance Score (70%)</li>
                        <li>Behavior Score (20%)</li>
                        <li>Corporate Score (10%)</li>
                      </ul>
                      <div style={{ padding: "10px", borderLeft: "4px solid #2ecc71", background: "rgba(46, 204, 113, 0.1)", fontSize: "0.78rem" }}>
                        <span style={{ fontWeight: 900, color: "#1a5276", fontSize: "0.7rem", textTransform: "uppercase" }}>Key Point:</span><br />
                        KPI Unit Kerja telah terakomodasi dalam KPI Individu (cascading scorecard).
                      </div>
                      <div style={{ padding: "10px", borderLeft: "4px solid #1a5276", background: "rgba(26, 82, 118, 0.05)", fontSize: "0.78rem" }}>
                        <span style={{ fontWeight: 900, color: "#1a5276", fontSize: "0.7rem", textTransform: "uppercase" }}>Merit Increment:</span><br />
                        Terdapat perlakuan rating distribusi dalam penentuan kenaikan.
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <SlideFooter />
    </div>
  );
}

/* =============================
   SLIDE 8: PRO CON'S OPSI A VS OPSI B
   ============================= */
function SlideProConOptions() {
  const data = [
    {
      aspect: "Alignment Korporat",
      a: "Kuat → Seluruh karyawan memiliki bagian nilai yang langsung dipengaruhi kinerja perusahaan.",
      scoreA: 5,
      b: "Moderat → Alignment hanya terjadi jika penurunan target (cascading) dilakukan dengan disiplin.",
      scoreB: 3
    },
    {
      aspect: "Akuntabilitas Individu",
      a: "Moderat → Sebagian nilai individu ditentukan oleh faktor kolektif/perusahaan.",
      scoreA: 3,
      b: "Kuat → Seluruh nilai berasal dari target yang berada dalam kendali jabatan individu.",
      scoreB: 5
    },
    {
      aspect: "Risiko Free Rider",
      a: "Lemah → Individu kontribusi rendah tetap bisa dapat nilai baik jika kinerja korporat tinggi.",
      scoreA: 2,
      b: "Kuat → Tidak ada komponen kolektif, individu tidak dapat bergantung pada capaian pihak lain.",
      scoreB: 4
    },
    {
      aspect: "Diferensiasi Kinerja",
      a: "Moderat → Karena ada komponen nilai yang sama, rentang nilai antar individu menyempit.",
      scoreA: 3,
      b: "Kuat → Nilai sepenuhnya ditentukan capaian masing-masing individu, performa lebih tajam.",
      scoreB: 5
    },
    {
      aspect: "Kolaborasi",
      a: "Kuat → Seluruh karyawan terdorong secara sistemik untuk mencapai hasil bersama.",
      scoreA: 5,
      b: "Moderat → Fokus pada target masing-masing unit dapat mengurangi kepedulian lintas fungsi.",
      scoreB: 3
    }
  ];

  const totalA = data.reduce((acc, curr) => acc + curr.scoreA, 0);
  const totalB = data.reduce((acc, curr) => acc + curr.scoreB, 0);

  return (
    <div className="slide" style={{ padding: "0.8rem 3rem 1.2rem" }}>
      <AccentShapes />
      <div className="slide-header" style={{ marginBottom: "0.8rem" }}>
        <h1 className="slide-title" style={{ fontSize: "2.3rem" }}>
          <em>Decision Matrix: Opsi A vs Opsi B</em>
        </h1>
        <p className="slide-subtitle" style={{ fontSize: "0.9rem", fontWeight: 600 }}>Criteria-based scoring untuk pemilihan desain PMS global</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ flex: 1, background: "#fff", borderRadius: "16px", border: "1px solid #d1d9e0", overflow: "hidden", boxShadow: "0 15px 40px rgba(0,0,0,0.06)" }}
      >
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.82rem", color: "#2c3e50" }}>
          <thead>
            <tr style={{ background: "linear-gradient(90deg, #1a3a3a 0%, #2c5353 100%)", color: "#fff" }}>
              <th style={{ padding: "10px 15px", textAlign: "left", width: "15%", borderRight: "1px solid rgba(255,255,255,0.1)", fontSize: "0.85rem", fontWeight: 800 }}>Aspek Strategis</th>
              <th style={{ padding: "10px 15px", textAlign: "center", width: "35%", borderRight: "1px solid rgba(255,255,255,0.1)", fontSize: "0.85rem", fontWeight: 800 }}>Opsi A (Dengan KPI Bersama)</th>
              <th style={{ padding: "10px 15px", textAlign: "center", width: "7.5%", borderRight: "1px solid rgba(255,255,255,0.1)", fontSize: "0.85rem", fontWeight: 800 }}>Skor</th>
              <th style={{ padding: "10px 15px", textAlign: "center", width: "35%", borderRight: "1px solid rgba(255,255,255,0.1)", fontSize: "0.85rem", fontWeight: 800 }}>Opsi B (Tanpa KPI Bersama)</th>
              <th style={{ padding: "10px 15px", textAlign: "center", width: "7.5%", fontSize: "0.85rem", fontWeight: 800 }}>Skor</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#f8fafc" }}>
                <td style={{ padding: "10px 15px", fontWeight: 900, borderRight: "1px solid #e2e8f0", borderBottom: "1px solid #e2e8f0", color: "#1a5276" }}>{row.aspect}</td>
                <td style={{ padding: "10px 15px", borderRight: "1px solid #e2e8f0", borderBottom: "1px solid #e2e8f0", lineHeight: 1.4 }}>
                  <div dangerouslySetInnerHTML={{ __html: row.a.replace("→", "<span style='color: #27ae60; font-weight: 800; font-size: 0.9rem;'> → </span>") }} />
                </td>
                <td style={{ padding: "10px 15px", borderRight: "1px solid #e2e8f0", borderBottom: "1px solid #e2e8f0", textAlign: "center", fontWeight: 900, fontSize: "1.1rem", color: row.scoreA >= 4 ? "#27ae60" : "#7f8c8d" }}>{row.scoreA}</td>
                <td style={{ padding: "10px 15px", borderRight: "1px solid #e2e8f0", borderBottom: "1px solid #e2e8f0", lineHeight: 1.4 }}>
                  <div dangerouslySetInnerHTML={{ __html: row.b.replace("→", "<span style='color: #27ae60; font-weight: 800; font-size: 0.9rem;'> → </span>") }} />
                </td>
                <td style={{ padding: "10px 15px", borderBottom: "1px solid #e2e8f0", textAlign: "center", fontWeight: 900, fontSize: "1.1rem", color: row.scoreB >= 4 ? "#27ae60" : "#7f8c8d" }}>{row.scoreB}</td>
              </tr>
            ))}
            <tr style={{ background: "#f1f2f6" }}>
              <td style={{ padding: "12px 15px", fontWeight: 900, color: "#2c3e50", textAlign: "right", borderRight: "1px solid #bdc3c7" }}>TOTAL SKOR</td>
              <td style={{ padding: "12px 15px", borderRight: "1px solid #bdc3c7" }}></td>
              <td style={{ padding: "12px 15px", borderRight: "1px solid #bdc3c7", textAlign: "center", fontWeight: 900, fontSize: "1.2rem", color: "#1a5276", background: "rgba(26, 82, 118, 0.1)" }}>{totalA}</td>
              <td style={{ padding: "12px 15px", borderRight: "1px solid #bdc3c7" }}></td>
              <td style={{ padding: "12px 15px", textAlign: "center", fontWeight: 900, fontSize: "1.2rem", color: "#1a5276", background: "rgba(26, 82, 118, 0.1)" }}>{totalB}</td>
            </tr>
          </tbody>
        </table>
      </motion.div>

      {/* Strategic Insight Summary */}
      <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
        <div style={{ flex: 1, background: "rgba(230, 126, 34, 0.05)", border: "1px solid rgba(230, 126, 34, 0.2)", borderRadius: "10px", padding: "10px 15px", display: "flex", gap: "10px", alignItems: "center" }}>
          <div style={{ background: "#e67e22", color: "#fff", padding: "6px", borderRadius: "50%", display: "flex" }}><Settings size={18} /></div>
          <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#d35400" }}>
            <span style={{ fontWeight: 900 }}>REKOMENDASI HYBRID:</span> Perusahaan global sering menerapkan KPI Bersama tinggi di level Eksekutif, namun dominan Individu di level Operasional.
          </div>
        </div>
        <div style={{ flex: 1, background: "rgba(39, 174, 96, 0.05)", border: "1px solid rgba(39, 174, 96, 0.2)", borderRadius: "10px", padding: "10px 15px", display: "flex", gap: "10px", alignItems: "center" }}>
          <div style={{ background: "#27ae60", color: "#fff", padding: "6px", borderRadius: "50%", display: "flex" }}><Target size={18} /></div>
          <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#1e8449" }}>
            <span style={{ fontWeight: 900 }}>KESIMPULAN MATRIX:</span> Opsi B unggul pada akuntabilitas & diferensiasi (Meritocracy), Opsi A unggul pada alignment & sinergi (Collaboration).
          </div>
        </div>
      </div>
      <SlideFooter />
    </div>
  );
}

/* =============================
   SLIDE 9: PRO CON'S RATING DISTRIBUSI
   ============================= */
function SlideProConRating() {
  const data = [
    {
      aspek: "Keadilan Persepsi",
      a: "Moderat → Berpotensi dianggap tidak adil secara individual jika kuota top performer sudah penuh.",
      scoreA: 3,
      b: "Kuat → Lebih terasa adil personal karena rating murni berdasarkan capaian tanpa pembatasan.",
      scoreB: 5
    },
    {
      aspek: "Motivasi Karyawan",
      aspekLabel: "Motivasi",
      a: "Kuat → Mendorong individu berlomba menjadi top performer dalam budaya kompetitif.",
      scoreA: 4,
      b: "Moderat → Kolaboratif secara natural, namun berisiko munculnya \"zona nyaman\".",
      scoreB: 3
    },
    {
      aspek: "Risiko Rating Inflation",
      aspekLabel: "Inflation Control",
      a: "Sangat Kuat → Distribusi menjaga agar tidak terjadi penumpukan nilai tinggi (budget control).",
      scoreA: 5,
      b: "Lemah → Tanpa kontrol distribusi, muncul lonjakan rating tinggi yang tidak terkendali.",
      scoreB: 2
    },
    {
      aspek: "Budaya Kerja",
      a: "Sangat Kuat → Membentuk budaya meritocracy dan high-performance secara sistemik.",
      scoreA: 5,
      b: "Moderat → Suasana harmonis namun berisiko standar performa perlahan menurun.",
      scoreB: 3
    },
    {
      aspek: "Keterkaitan Reward",
      a: "Sangat Kuat → Diferensiasi bonus dan talent pool menjadi sangat tajam dan objektif.",
      scoreA: 5,
      b: "Lemah → Jika banyak yang mendapat rating tinggi, pembagian reward kurang terdiferensiasi.",
      scoreB: 2
    }
  ];

  const totalA = data.reduce((acc, curr) => acc + curr.scoreA, 0);
  const totalB = data.reduce((acc, curr) => acc + curr.scoreB, 0);

  return (
    <div className="slide" style={{ padding: "0.8rem 3rem 1.2rem" }}>
      <AccentShapes />
      <div className="slide-header" style={{ marginBottom: "0.8rem" }}>
        <h1 className="slide-title" style={{ fontSize: "2.3rem" }}>
          <em>Decision Matrix: Rating Distribusi</em>
        </h1>
        <p className="slide-subtitle" style={{ fontSize: "0.9rem", fontWeight: 600 }}>Objektivitas pemilihan mekanisme diferensiasi performa</p>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1rem" }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ flex: 1, background: "#fff", borderRadius: "16px", border: "1px solid #d1d9e0", overflow: "hidden", boxShadow: "0 15px 40px rgba(0,0,0,0.06)" }}
        >
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.82rem", color: "#2c3e50" }}>
            <thead>
              <tr style={{ background: "linear-gradient(90deg, #21618c 0%, #2e86c1 100%)", color: "#fff" }}>
                <th style={{ padding: "10px 15px", textAlign: "left", width: "15%", fontSize: "0.85rem", fontWeight: 800, borderRight: "1px solid rgba(255,255,255,0.1)" }}>Aspek Strategis</th>
                <th style={{ padding: "10px 15px", textAlign: "center", width: "35%", fontSize: "0.85rem", fontWeight: 800, borderRight: "1px solid rgba(255,255,255,0.1)" }}>Opsi A (Dengan Distribusi)</th>
                <th style={{ padding: "10px 15px", textAlign: "center", width: "7.5%", fontSize: "0.85rem", fontWeight: 800, borderRight: "1px solid rgba(255,255,255,0.1)" }}>Skor</th>
                <th style={{ padding: "10px 15px", textAlign: "center", width: "35%", fontSize: "0.85rem", fontWeight: 800, borderRight: "1px solid rgba(255,255,255,0.1)" }}>Opsi B (Tanpa Distribusi)</th>
                <th style={{ padding: "10px 15px", textAlign: "center", width: "7.5%", fontSize: "0.85rem", fontWeight: 800 }}>Skor</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#f0f7ff" }}>
                  <td style={{ padding: "10px 15px", fontWeight: 900, borderRight: "1px solid #d1d9e0", borderBottom: "1px solid #d1d9e0", color: "#21618c" }}>{row.aspek}</td>
                  <td style={{ padding: "10px 15px", borderRight: "1px solid #d1d9e0", borderBottom: "1px solid #d1d9e0", lineHeight: 1.4 }}>
                    <div dangerouslySetInnerHTML={{ __html: row.a.replace("→", "<span style='color: #27ae60; font-weight: 800; font-size: 0.9rem;'> → </span>") }} />
                  </td>
                  <td style={{ padding: "10px 15px", borderRight: "1px solid #d1d9e0", borderBottom: "1px solid #d1d9e0", textAlign: "center", fontWeight: 900, fontSize: "1.1rem", color: row.scoreA >= 4 ? "#27ae60" : "#7f8c8d" }}>{row.scoreA}</td>
                  <td style={{ padding: "10px 15px", borderRight: "1px solid #d1d9e0", borderBottom: "1px solid #d1d9e0", lineHeight: 1.4 }}>
                    <div dangerouslySetInnerHTML={{ __html: row.b.replace("→", "<span style='color: #27ae60; font-weight: 800; font-size: 0.9rem;'> → </span>") }} />
                  </td>
                  <td style={{ padding: "10px 15px", borderBottom: "1px solid #d1d9e0", textAlign: "center", fontWeight: 900, fontSize: "1.1rem", color: row.scoreB >= 4 ? "#27ae60" : "#7f8c8d" }}>{row.scoreB}</td>
                </tr>
              ))}
              <tr style={{ background: "#e9f2fb" }}>
                <td style={{ padding: "12px 15px", fontWeight: 900, color: "#2c3e50", textAlign: "right", borderRight: "1px solid #bdc3c7" }}>TOTAL SKOR</td>
                <td style={{ padding: "12px 15px", borderRight: "1px solid #bdc3c7" }}></td>
                <td style={{ padding: "12px 15px", borderRight: "1px solid #bdc3c7", textAlign: "center", fontWeight: 900, fontSize: "1.2rem", color: "#21618c", background: "rgba(33, 97, 140, 0.1)" }}>{totalA}</td>
                <td style={{ padding: "12px 15px", borderRight: "1px solid #bdc3c7" }}></td>
                <td style={{ padding: "12px 15px", textAlign: "center", fontWeight: 900, fontSize: "1.2rem", color: "#21618c", background: "rgba(33, 97, 140, 0.1)" }}>{totalB}</td>
              </tr>
            </tbody>
          </table>
        </motion.div>

        {/* Strategic Insight Summary */}
        <div style={{ display: "flex", gap: "1rem" }}>
          <div style={{ flex: 1, background: "rgba(231, 76, 60, 0.05)", border: "1px solid rgba(231, 76, 60, 0.2)", borderRadius: "10px", padding: "10px 15px", display: "flex", gap: "10px", alignItems: "center" }}>
            <div style={{ background: "#e74c3c", color: "#fff", padding: "6px", borderRadius: "50%", display: "flex" }}><TrendingUp size={18} /></div>
            <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#c0392b" }}>
              <span style={{ fontWeight: 900 }}>RISIKO INFLASI:</span> Opsi B memiliki risiko tinggi terjadi "Rating Inflation" dimana &gt;80% karyawan mendapat skor tinggi, merusak akurasi data talent korporat.
            </div>
          </div>
          <div style={{ flex: 1, background: "rgba(33, 97, 140, 0.05)", border: "1px solid rgba(33, 97, 140, 0.2)", borderRadius: "10px", padding: "10px 15px", display: "flex", gap: "10px", alignItems: "center" }}>
            <div style={{ background: "#21618c", color: "#fff", padding: "6px", borderRadius: "50%", display: "flex" }}><Award size={18} /></div>
            <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#1b4f72" }}>
              <span style={{ fontWeight: 900 }}>KESIMPULAN:</span> Opsi A unggul signifikan (22 vs 15) untuk membangun <span style={{ fontWeight: 800 }}>High Performance Culture</span> dan diferensiasi reward yang tajam.
            </div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        style={{ background: "#f8fbff", borderRadius: "12px", padding: "15px", border: "2px dashed #2e86c1", boxShadow: "0 4px 15px rgba(46,134,193,0.1)", marginTop: "1rem" }}
      >
        <div style={{ fontSize: "0.9rem", fontWeight: 900, color: "#21618c", marginBottom: "8px", textTransform: "uppercase" }}>Requirement Tanpa Rating Distribusi:</div>
        <ol style={{ fontSize: "0.85rem", color: "#2c3e50", paddingLeft: "2rem", lineHeight: 1.5, fontWeight: 600 }}>
          <li>Penyesuaian kategori skor dalam penetapan klasifikasi rating</li>
          <li>Penetapan klasifikasi jabatan sesuai fungsi Business Unit (BU) dan Supporting Unit (SU)</li>
          <li>Perhitungan persentase merit increment pada setiap klasifikasi rating</li>
        </ol>
      </motion.div>
      <SlideFooter />
    </div>
  );
}

/* =============================
   SLIDE 10: ILUSTRASI PRIORITY POOL
   ============================= */
function SlidePriorityPool() {
  const divisions = [
    { name: "Divisi Operasional SDM", color: "#2e86c1", items: [{ n: "Ali", l: "BOD-1", s: "95,19" }, { n: "Wahyu", l: "BOD-2", s: "95,28" }, { n: "Zaini", l: "BOD-3", s: "90,57" }] },
    { name: "Divisi Strategi & Pengembangan SDM", color: "#21618c", items: [{ n: "Rezky", l: "BOD-1", s: "90,78" }, { n: "Bakhri", l: "BOD-2", s: "90,34" }, { n: "Kintan", l: "BOD-3", s: "90,89" }] },
    { name: "Divisi Pengadaan & Umum", color: "#2980b9", items: [{ n: "Yusuf", l: "BOD-1", s: "90,53" }, { n: "Deddy", l: "BOD-2", s: "90,38" }, { n: "Claro", l: "BOD-3", s: "95,71" }] }
  ];

  return (
    <div className="slide" style={{ padding: "0.8rem 3rem 1.5rem" }}>
      <AccentShapes />
      <div className="slide-header" style={{ marginBottom: "0.8rem" }}>
        <h1 className="slide-title" style={{ fontSize: "2.3rem" }}>
          <em>Ilustrasi Priority Pool & Klasifikasi Rating</em>
        </h1>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "2rem" }}>
        {/* Tables Row: Strategic Inputs */}
        <div style={{ display: "flex", gap: "1.5rem" }}>
          {divisions.map((div, i) => (
            <div key={i} style={{ flex: 1, border: "1px solid #d1d9e0", borderRadius: "8px", overflow: "hidden", boxShadow: "0 4px 15px rgba(0,0,0,0.05)" }}>
              <div style={{ background: "#fff", padding: "10px", textAlign: "center", fontSize: "0.9rem", fontWeight: 800, borderBottom: "1px solid #d1d9e0", color: div.color }}>{div.name}</div>
              <table style={{ width: "100%", fontSize: "0.8rem", borderCollapse: "collapse" }}>
                <thead style={{ background: div.color, color: "#fff" }}>
                  <tr>
                    <th style={{ padding: "8px" }}>No</th>
                    <th style={{ padding: "8px", textAlign: "left" }}>Nama</th>
                    <th style={{ padding: "8px" }}>Level</th>
                    <th style={{ padding: "8px" }}>Score</th>
                  </tr>
                </thead>
                <tbody>
                  {div.items.map((item, idx) => (
                    <tr key={idx} style={{ background: idx % 2 === 0 ? "#f8f9fa" : "#fff" }}>
                      <td style={{ textAlign: "center", padding: "10px 8px", border: "1px solid #d1d9e0", fontWeight: 600 }}>{idx + 1}</td>
                      <td style={{ padding: "10px 8px", border: "1px solid #d1d9e0" }}>{item.n}</td>
                      <td style={{ textAlign: "center", padding: "10px 8px", border: "1px solid #d1d9e0" }}>{item.l}</td>
                      <td style={{ textAlign: "center", padding: "10px 8px", border: "1px solid #d1d9e0", fontWeight: 700 }}>{item.s}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>

        {/* Pool Section: Central Logic */}
        <div style={{ flex: 1, background: "linear-gradient(135deg, #f8f9fa 0%, #edf2f7 100%)", border: "1px solid #bdc3c7", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "space-around", padding: "1.2rem", position: "relative", boxShadow: "inset 0 2px 10px rgba(0,0,0,0.02)" }}>
          <div style={{ position: "absolute", top: "10px", right: "20px", opacity: 0.05 }}><Layers size={50} /></div>

          {[
            { l: "BOD-1", c: "#1e8449", members: [{ n: "Rezky", s: "90,78", i: 2 }, { n: "Yusuf", s: "90,53", i: 3 }, { n: "Ali", s: "95,19", i: 1 }] },
            { l: "BOD-2", c: "#f39c12", members: [{ n: "Wahyu", s: "95,28", i: 1 }, { n: "Deddy", s: "90,38", i: 2 }, { n: "Bakhri", s: "90,34", i: 3 }] },
            { l: "BOD-3", c: "#2e86c1", members: [{ n: "Zaini", s: "90,57", i: 3 }, { n: "Claro", s: "95,71", i: 1 }, { n: "Kintan", s: "90,89", i: 2 }] }
          ].map((pool, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.2 }}
              style={{ width: "160px", height: "160px", borderRadius: "50%", background: pool.c, border: "3px solid #fff", color: "#fff", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", boxShadow: "0 10px 25px rgba(0,0,0,0.15)", position: "relative" }}
            >
              <div style={{ position: "absolute", top: "-12px", background: "#fff", color: pool.c, fontSize: "0.8rem", fontWeight: 900, padding: "3px 12px", borderRadius: "20px", border: `2px solid ${pool.c}`, boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>{pool.l}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px", alignItems: "center", width: "100%", padding: "0 8px" }}>
                {pool.members.map((m, idx) => (
                  <div key={idx} style={{ background: "rgba(255,255,255,0.9)", color: "#1a202c", fontSize: "0.65rem", padding: "4px 10px", borderRadius: "8px", textAlign: "center", width: "90%", boxShadow: "0 2px 4px rgba(0,0,0,0.05)" }}>
                    <div style={{ fontWeight: 800 }}>{m.n} <span style={{ color: pool.c }}>({m.i})</span></div>
                    <div style={{ fontSize: "0.55rem", opacity: 0.8 }}>Score: {m.s}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Row: Rating Results */}
        <div style={{ display: "flex", gap: "1.5rem" }}>
          {[
            { items: [{ n: "Ali", l: "BOD-1", r: "RD-1" }, { n: "Rezky", l: "BOD-1", r: "RD-2" }, { n: "Yusuf", l: "BOD-1", r: "RD-3" }] },
            { items: [{ n: "Wahyu", l: "BOD-2", r: "RD-1" }, { n: "Deddy", l: "BOD-2", r: "RD-2" }, { n: "Bakhri", l: "BOD-2", r: "RD-3" }] },
            { items: [{ n: "Claro", l: "BOD-3", r: "RD-1" }, { n: "Kintan", l: "BOD-3", r: "RD-2" }, { n: "Zaini", l: "BOD-3", r: "RD-3" }] }
          ].map((res, i) => (
            <div key={i} style={{ flex: 1, border: "1px solid #dee2e6", borderRadius: "8px", overflow: "hidden", boxShadow: "0 4px 15px rgba(0,0,0,0.05)" }}>
              <table style={{ width: "100%", fontSize: "0.8rem", borderCollapse: "collapse" }}>
                <thead style={{ background: "#4a3399", color: "#fff" }}>
                  <tr>
                    <th style={{ padding: "8px" }}>No</th>
                    <th style={{ padding: "8px", textAlign: "left" }}>Nama</th>
                    <th style={{ padding: "8px" }}>Level</th>
                    <th style={{ padding: "8px" }}>Rating</th>
                  </tr>
                </thead>
                <tbody style={{ background: "#fff" }}>
                  {res.items.map((item, idx) => (
                    <tr key={idx} style={{ background: idx % 2 === 0 ? "#f4f4ff" : "#fff" }}>
                      <td style={{ textAlign: "center", padding: "8px", border: "1px solid #dee2e6", fontWeight: 600 }}>{idx + 1}</td>
                      <td style={{ padding: "8px", border: "1px solid #dee2e6" }}>{item.n}</td>
                      <td style={{ textAlign: "center", padding: "8px", border: "1px solid #dee2e6" }}>{item.l}</td>
                      <td style={{ textAlign: "center", padding: "8px", border: "1px solid #dee2e6", fontWeight: 800, color: "#4a3399" }}>{item.r}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
      <SlideFooter />
    </div>
  );
}

/* =============================
   SLIDE 11: TIMELINE
   ============================= */
function SlideTimeline() {
  return (
    <div className="slide" style={{ padding: "0.8rem 2.5rem 1.2rem" }}>
      <AccentShapes />
      <div className="slide-header" style={{ marginBottom: "0.6rem" }}>
        <h1 className="slide-title" style={{ fontSize: "2.2rem" }}>
          <em>Timeline</em>
        </h1>
      </div>

      <div style={{ flex: 1, display: "flex", gap: "1.5rem", height: "100%", overflow: "hidden" }}>
        {/* Left Table: 2025 */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "15px" }}>
          <div style={{ background: "linear-gradient(90deg, #f39c12 0%, #e67e22 100%)", color: "#fff", padding: "10px", borderRadius: "10px", fontSize: "0.9rem", fontWeight: 900, textAlign: "center", textTransform: "uppercase", letterSpacing: "1px" }}>
            Pengukuran Kinerja Tahun 2025
          </div>
          <table style={{ width: "100%", fontSize: "0.8rem", borderCollapse: "collapse", borderRadius: "10px", overflow: "hidden", border: "1px solid #dee2e6", boxShadow: "0 6px 15px rgba(0,0,0,0.05)" }}>
            <thead>
              <tr style={{ background: "#f8f9fa", color: "#2c3e50" }}>
                <th style={{ padding: "10px", border: "1px solid #dee2e6", width: "10%", fontSize: "0.85rem" }}>No</th>
                <th style={{ padding: "10px", border: "1px solid #dee2e6", textAlign: "left", fontSize: "0.85rem" }}>Item Kegiatan</th>
                <th style={{ padding: "10px", border: "1px solid #dee2e6", width: "30%", fontSize: "0.85rem" }}>Due Date</th>
              </tr>
            </thead>
            <tbody style={{ background: "#fff" }}>
              {[
                { n: 1, i: "Penyampaian Usulan Rating dan Pemenuhan kelengkapan pendukung", d: "27 Feb 2026" },
                { n: 2, i: "Perhitungan Merit Increment berdasarkan Distribusi Rating Kinerja", d: "5 Mar 2026" },
                { n: 3, i: "Penetapan dan pengaturan indikator kinerja aspek operasional dan keuangan pada aplikasi", d: "5 Mar 2026" },
                { n: 4, i: "Pelaksanaan Sidang Komite Penilaian Kinerja", d: "2 - 14 Mar 2026" }
              ].map((row, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#fafafa" }}>
                  <td style={{ textAlign: "center", padding: "8px 10px", border: "1px solid #dee2e6", fontWeight: 700, color: "#7f8c8d" }}>{row.n}</td>
                  <td style={{ padding: "8px 10px", border: "1px solid #dee2e6", lineHeight: 1.3, fontWeight: 600, color: "#2c3e50" }}>{row.i}</td>
                  <td style={{ textAlign: "center", padding: "8px 10px", border: "1px solid #dee2e6", fontWeight: 800, color: "#1a5276" }}>{row.d}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ marginTop: "auto", padding: "10px", background: "rgba(243, 156, 18, 0.08)", borderRadius: "10px", borderLeft: "4px solid #f39c12" }}>
            <p style={{ margin: 0, fontSize: "0.75rem", color: "#7f8c8d", fontWeight: 700, fontStyle: "italic" }}>
              * Milestone 2025: Penyelesaian siklus penilaian & penetapan reward.
            </p>
          </div>
        </div>

        {/* Right Area: App Development & 2026 */}
        <div style={{ flex: 1.2, display: "flex", flexDirection: "column", gap: "15px" }}>
          {/* App Dev */}
          <table style={{ width: "100%", fontSize: "0.75rem", borderCollapse: "collapse", borderRadius: "10px", overflow: "hidden", border: "1.5px solid #1a5276", boxShadow: "0 6px 15px rgba(26,82,118,0.1)" }}>
            <thead style={{ background: "linear-gradient(90deg, #1a5276 0%, #2980b9 100%)", color: "#fff" }}>
              <tr>
                <th style={{ padding: "8px 10px", border: "1px solid rgba(255,255,255,0.1)", width: "8%", fontSize: "0.8rem" }}>#</th>
                <th style={{ padding: "8px 15px", border: "1px solid rgba(255,255,255,0.1)", textAlign: "left", fontSize: "0.8rem", letterSpacing: "0.5px" }}>PENGEMBANGAN APLIKASI 2026 (APMS 2.0)</th>
                <th style={{ padding: "8px 10px", border: "1px solid rgba(255,255,255,0.1)", width: "30%", fontSize: "0.8rem" }}>DUE DATE</th>
              </tr>
            </thead>
            <tbody style={{ background: "#fff" }}>
              <tr style={{ background: "#f8fafc", fontWeight: 800, color: "#1a5276" }}>
                <td style={{ textAlign: "center", padding: "6px", border: "1px solid #e2e8f0" }}>1</td>
                <td style={{ padding: "6px 15px", border: "1px solid #e2e8f0" }}>User Acceptance Test (UAT)</td>
                <td style={{ padding: "6px", border: "1px solid #e2e8f0" }}></td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #e2e8f0" }}></td>
                <td style={{ padding: "5px 25px", border: "1px solid #e2e8f0", color: "#4a5568", fontWeight: 600 }}>• UAT PTPN I (Reg. 3 & 5) & PT SGN</td>
                <td style={{ padding: "5px", border: "1px solid #e2e8f0", textAlign: "center", fontWeight: 800, color: "#2d3748" }}>25 - 26 Feb 2026</td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #e2e8f0" }}></td>
                <td style={{ padding: "5px 25px", border: "1px solid #e2e8f0", color: "#4a5568", fontWeight: 600 }}>• UAT PTPN IV (Reg. 1 & 2)</td>
                <td style={{ padding: "5px", border: "1px solid #e2e8f0", textAlign: "center", fontWeight: 800, color: "#2d3748" }}>25 - 26 Feb 2026</td>
              </tr>
              {[
                { n: 2, i: "Sosialisasi & Training APMS 2.0 (Online)", d: "10 Mar 2026" },
                { n: 3, i: "Go-live Readiness Check", d: "12 Mar 2026" },
                { n: 4, i: "Go-live APMS 2.0", d: "30 Mar 2026" }
              ].map((row, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#f8fafc" }}>
                  <td style={{ textAlign: "center", padding: "6px", border: "1px solid #e2e8f0", fontWeight: 700, color: "#4a5568" }}>{row.n}</td>
                  <td style={{ padding: "6px 15px", border: "1px solid #e2e8f0", fontWeight: 700, color: "#2d3748" }}>{row.i}</td>
                  <td style={{ textAlign: "center", padding: "6px", border: "1px solid #e2e8f0", fontWeight: 900, color: i === 2 ? "#27ae60" : "#1a5276" }}>{row.d}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* 2026 Process */}
          <table style={{ width: "100%", fontSize: "0.72rem", borderCollapse: "collapse", borderRadius: "10px", overflow: "hidden", border: "1px solid #dee2e6", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
            <thead style={{ background: "linear-gradient(90deg, #f39c12 0%, #d35400 100%)", color: "#fff" }}>
              <tr>
                <th style={{ padding: "8px", border: "1px solid rgba(255,255,255,0.1)", width: "8%", fontSize: "0.8rem" }}>#</th>
                <th style={{ padding: "8px 12px", border: "1px solid rgba(255,255,255,0.1)", textAlign: "left", fontSize: "0.8rem", letterSpacing: "0.5px" }}>PENGUKURAN KINERJA INDIVIDU 2026</th>
                <th style={{ padding: "8px", border: "1px solid rgba(255,255,255,0.1)", width: "30%", fontSize: "0.8rem" }}>DUE DATE</th>
              </tr>
            </thead>
            <tbody style={{ background: "#fff" }}>
              {[
                { n: 1, i: "Surat pelaksanaan penilaian kinerja 2026", d: "12 Mar 2026" },
                { n: 2, i: "Kesepakatan Sasaran Kerja (KSK)", d: "1 - 17 Apr 2026" },
                { n: 3, i: "Pengisian realisasi triwulan I", d: "6 - 17 Apr 2026" },
                { n: 4, i: "Review Bimbingan Kerja (RBK) triwulan I", d: "20 Apr - 4 Mei 2026" },
                { n: 5, i: "Pengisian realisasi triwulan II", d: "6 - 20 Jul 2026" },
                { n: 6, i: "Pengukuran Key Attitude Indicator (ONE) Sem. I", d: "6 - 20 Jul 2026" },
                { n: 7, i: "Review Bimbingan Kerja (RBK) triwulan II", d: "20 Jul - 3 Ags 2026" },
                { n: 8, i: "Pengisian realisasi triwulan III", d: "19 - 30 Okt 2026" },
                { n: 9, i: "Review Bimbingan Kerja (RBK) triwulan III", d: "2 - 13 Nov 2026" },
                { n: 10, i: "Pengisian realisasi triwulan IV", d: "4 - 15 Jan 2027" },
                { n: 11, i: "Pengukuran Key Attitude Indicator (ONE) Sem. II", d: "4 - 15 Jan 2027" },
                { n: 12, i: "Evaluasi dan Rencana Pengembangan TW IV", d: "18 - 26 Jan 2027" },
                { n: 13, i: "Performance Appraisal", d: "27 Jan - 26 Feb 2027" }
              ].map((row, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#fff8f0" }}>
                  <td style={{ textAlign: "center", padding: "4px", border: "1px solid #fce5cd", fontWeight: 800, color: "#d35400" }}>{row.n}</td>
                  <td style={{ padding: "4px 12px", border: "1px solid #fce5cd", fontWeight: 600, color: "#2d3748" }}>{row.i}</td>
                  <td style={{ textAlign: "center", padding: "4px", border: "1px solid #fce5cd", fontWeight: 800, color: "#1a202c" }}>{row.d}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <SlideFooter />
    </div>
  );
}



/* =============================
   SLIDE 10: RATING KINERJA THRESHOLD
   ============================= */
function SlideRatingKinerja() {
  const tableData = [
    { rating: "Outstanding (RD 1)", score2025: ">= 90", score2026: "≥ 110", rowSpan2025: 2 },
    { rating: "Exceed (RD 2)", score2025: null, score2026: "100 – 109" },
    { rating: "Meet (RD 3)", score2025: "< 90", score2026: "90 – 99", rowSpan2025: 2 },
    { rating: "Below (RD 4)", score2025: null, score2026: "70 – 89" },
    { rating: "Poor (RD 5)", score2025: "Hanya yang terkena punishment", score2026: "< 70", rowSpan2025: 1 },
  ];

  return (
    <div className="slide" style={{ padding: "1.2rem 4rem 1.8rem" }}>
      <AccentShapes />
      <div className="slide-header" style={{ marginBottom: "1.2rem" }}>
        <h1 className="slide-title" style={{ fontSize: "2.5rem", textAlign: "center" }}>
          <em>Rating Kinerja</em>
        </h1>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          style={{ width: "100%", maxWidth: "1100px" }}
        >
          <table style={{ width: "100%", borderCollapse: "collapse", borderRadius: "16px", overflow: "hidden", boxShadow: "0 20px 50px rgba(0,0,0,0.12)" }}>
            <thead>
              <tr style={{ background: "linear-gradient(90deg, #1a5276 0%, #2980b9 100%)", color: "#fff" }}>
                <th style={{ padding: "1rem", textAlign: "center", fontSize: "1.1rem", fontWeight: 800, borderRight: "1px solid rgba(255,255,255,0.1)" }}>Performance Rating</th>
                <th style={{ padding: "1rem", textAlign: "center", fontSize: "1.1rem", fontWeight: 800, borderRight: "1px solid rgba(255,255,255,0.1)" }}>2025 (Threshold)</th>
                <th style={{ padding: "1rem", textAlign: "center", fontSize: "1.1rem", fontWeight: 800 }}>2026 (Threshold)</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#f8fafc" }}>
                  <td style={{ padding: "1rem 2rem", border: "1px solid #e2e8f0", fontSize: "1rem", fontWeight: 800, color: "#1a5276" }}>
                    {row.rating}
                  </td>
                  {row.score2025 !== null && (
                    <td
                      rowSpan={row.rowSpan2025}
                      style={{
                        padding: "1.5rem",
                        border: "1px solid #e2e8f0",
                        textAlign: "center",
                        fontSize: "1.2rem",
                        fontWeight: 800,
                        color: "#4a5568",
                        background: i % 2 === 0 ? "#f8fafc" : "#fff"
                      }}
                    >
                      {row.score2025}
                    </td>
                  )}
                  <td style={{ padding: "1.5rem", border: "1px solid #e2e8f0", textAlign: "center", fontSize: "1.25rem", fontWeight: 900, color: row.rating.includes("RD 1") ? "#27ae60" : row.rating.includes("RD 5") ? "#e74c3c" : "#1a202c" }}>
                    {row.score2026}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ marginTop: "3rem", padding: "20px 30px", background: "#f8fafc", borderRadius: "12px", borderLeft: "6px solid #1a5276", boxShadow: "0 4px 15px rgba(0,0,0,0.03)" }}>
            <p style={{ margin: 0, fontSize: "1.1rem", color: "#4a5568", fontStyle: "italic", fontWeight: 500, lineHeight: 1.5 }}>
              * Catatan: Penyesuaian threshold nilai dilakukan untuk memastikan diferensiasi yang lebih tajam dan akurat sesuai dengan dinamika target korporat 2026.
            </p>
          </div>
        </motion.div>
      </div>

      <SlideFooter />
    </div>
  );
}

/* =============================
   SLIDE 12: TERIMA KASIH
   ============================= */
function SlideThankYou() {
  return (
    <div
      className="slide"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "radial-gradient(circle at 50% 50%, #f0f7f4 0%, #ffffff 100%)",
        overflow: "hidden",
        padding: "2rem 4rem",
        height: "100%",
        position: "relative",
        textAlign: "center"
      }}
    >
      <AccentShapes />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ zIndex: 1 }}
      >
        <div style={{ marginBottom: "2rem", display: "flex", justifyContent: "center" }}>
          <div style={{
            width: "80px",
            height: "80px",
            background: "#fff",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
            border: "1px solid rgba(14, 102, 85, 0.1)"
          }}>
            <Award size={40} color="var(--color-primary)" strokeWidth={1.5} />
          </div>
        </div>

        <h1 style={{
          fontSize: "4.5rem",
          fontWeight: 400,
          fontStyle: "italic",
          color: "var(--color-secondary)",
          marginBottom: "1rem",
          letterSpacing: "-0.02em"
        }}>
          Terima Kasih
        </h1>

        <div style={{
          width: "60px",
          height: "3px",
          background: "var(--color-accent)",
          margin: "0 auto 2rem",
          borderRadius: "2px"
        }} />

        <p style={{
          fontSize: "1.2rem",
          fontWeight: 700,
          color: "var(--color-primary)",
          textTransform: "uppercase",
          letterSpacing: "0.2em",
          opacity: 0.8
        }}>
          PT Perkebunan Nusantara III (Persero)
        </p>
      </motion.div>

      {/* Background Decorative Circles */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.03, 0.05, 0.03] }}
        transition={{ duration: 8, repeat: Infinity }}
        style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          background: "var(--color-primary)",
          borderRadius: "50%",
          filter: "blur(100px)",
          top: "-200px",
          right: "-100px",
          zIndex: 0
        }}
      />

      <SlideFooter />
    </div>
  );
}

/* =============================
   SLIDE 14: APPENDIX — REFERENSI SKALA RATING GLOBAL
   ============================= */
function SlideRatingReference() {
  const sources = [
    {
      title: "Mercer PMS",
      color: "#1a5276",
      items: [
        { label: "Outstanding", score: "≥ 110%" },
        { label: "Exceed", score: "100–109%" },
        { label: "Meet", score: "90–99%" },
        { label: "Below", score: "70–89%" },
        { label: "Poor", score: "< 70%" }
      ],
      note: "Digunakan di energy, plantation, manufacturing multinationals"
    },
    {
      title: "Korn Ferry / Hay",
      color: "#0e6655",
      items: [
        { label: "Far Exceeds", score: "≥ 110%" },
        { label: "Exceeds", score: "100–109%" },
        { label: "Fully Meets", score: "90–99%" },
        { label: "Partially Meets", score: "70–89%" },
        { label: "Does Not Meet", score: "< 70%" }
      ],
      note: "Global PMS band standard untuk Fortune 500 companies"
    },
    {
      title: "Balanced Scorecard (Kaplan & Norton)",
      color: "#e67e22",
      items: [
        { label: "Stretch Achievement", score: "> 110%" },
        { label: "Target Met", score: "100%" },
        { label: "Near Target", score: "90–99%" },
        { label: "Underperform", score: "70–89%" },
        { label: "Fail", score: "< 70%" }
      ],
      note: "Achievement % = Actual / Target × 100"
    },
    {
      title: "SAP SuccessFactors",
      color: "#8e44ad",
      items: [
        { label: "5 — Far Exceeds", score: "≥ 110%" },
        { label: "4 — Exceeds", score: "100–109%" },
        { label: "3 — Meets", score: "90–99%" },
        { label: "2 — Partially Meets", score: "70–89%" },
        { label: "1 — Does Not Meet", score: "< 70%" }
      ],
      note: "Default performance form scaling guidance"
    }
  ];

  return (
    <div className="slide" style={{ padding: "0.8rem 2.5rem 1.2rem" }}>
      <AccentShapes />
      <div className="slide-header" style={{ marginBottom: "0.6rem" }}>
        <h1 className="slide-title" style={{ fontSize: "2rem" }}>
          <em>Appendix: Referensi Skala Rating Global</em>
        </h1>
        <p className="slide-subtitle" style={{ fontSize: "0.85rem", fontWeight: 600 }}>Dasar metodologis penetapan threshold rating kinerja 2026</p>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.8rem" }}>
        {/* Rating Scale Summary */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ background: "linear-gradient(135deg, #1a5276 0%, #2980b9 100%)", color: "#fff", borderRadius: "12px", padding: "12px 25px", display: "flex", alignItems: "center", gap: "2rem" }}
        >
          <div style={{ fontSize: "0.85rem", fontWeight: 900, whiteSpace: "nowrap", textTransform: "uppercase", letterSpacing: "1px" }}>Skala 2026</div>
          <div style={{ display: "flex", gap: "10px", flex: 1 }}>
            {[
              { r: "Outstanding", s: "≥ 110", c: "#27ae60" },
              { r: "Exceed", s: "100–109", c: "#2ecc71" },
              { r: "Meet", s: "90–99", c: "#f39c12" },
              { r: "Below", s: "70–89", c: "#e67e22" },
              { r: "Poor", s: "< 70", c: "#e74c3c" }
            ].map((item, i) => (
              <div key={i} style={{ flex: 1, background: "rgba(255,255,255,0.12)", borderRadius: "8px", padding: "8px", textAlign: "center", border: `1px solid ${item.c}40` }}>
                <div style={{ fontSize: "0.75rem", fontWeight: 900 }}>{item.r}</div>
                <div style={{ fontSize: "1rem", fontWeight: 900, color: item.c }}>{item.s}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 4-Column Sources */}
        <div style={{ flex: 1, display: "flex", gap: "0.8rem" }}>
          {sources.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              style={{
                flex: 1,
                background: "#fff",
                border: `1px solid ${src.color}20`,
                borderRadius: "14px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 8px 25px rgba(0,0,0,0.04)"
              }}
            >
              <div style={{ background: src.color, color: "#fff", padding: "10px 14px", fontSize: "0.8rem", fontWeight: 900, textAlign: "center", letterSpacing: "0.5px" }}>
                {src.title}
              </div>
              <div style={{ padding: "10px", flex: 1, display: "flex", flexDirection: "column", gap: "5px" }}>
                {src.items.map((item, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px 8px", borderRadius: "6px", background: i % 2 === 0 ? "#f8f9fa" : "#fff", fontSize: "0.72rem" }}>
                    <span style={{ fontWeight: 700, color: "#2c3e50" }}>{item.label}</span>
                    <span style={{ fontWeight: 900, color: src.color, fontSize: "0.78rem" }}>{item.score}</span>
                  </div>
                ))}
              </div>
              <div style={{ padding: "8px 12px", borderTop: "1px solid #f0f2f5", fontSize: "0.65rem", color: "#7f8c8d", fontStyle: "italic", fontWeight: 600 }}>
                {src.note}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Insights: Why 110 & Why 70 */}
        <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{ flex: 1, background: "#f0faf5", border: "1.5px solid #27ae60", borderRadius: "12px", padding: "12px 16px", display: "flex", gap: "12px", alignItems: "flex-start" }}
          >
            <div style={{ background: "#27ae60", color: "#fff", borderRadius: "50%", width: "28px", height: "28px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", fontWeight: 900, flexShrink: 0 }}>?</div>
            <div>
              <div style={{ fontSize: "0.8rem", fontWeight: 900, color: "#1e8449", marginBottom: "4px" }}>Mengapa ≥110 untuk Outstanding?</div>
              <div style={{ fontSize: "0.72rem", color: "#2d3748", lineHeight: 1.4, fontWeight: 600 }}>
                100 = target tercapai · 105 = varian normal · <strong>110 = stretch achievement</strong>. Jika Outstanding di 105, distribusi rusak karena terlalu mudah dicapai.
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            style={{ flex: 1, background: "#fef5f5", border: "1.5px solid #e74c3c", borderRadius: "12px", padding: "12px 16px", display: "flex", gap: "12px", alignItems: "flex-start" }}
          >
            <div style={{ background: "#e74c3c", color: "#fff", borderRadius: "50%", width: "28px", height: "28px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", fontWeight: 900, flexShrink: 0 }}>?</div>
            <div>
              <div style={{ fontSize: "0.8rem", fontWeight: 900, color: "#c0392b", marginBottom: "4px" }}>Mengapa &lt;70 untuk Poor?</div>
              <div style={{ fontSize: "0.72rem", color: "#2d3748", lineHeight: 1.4, fontWeight: 600 }}>
                Toleransi variance KPI global ±30%. <strong>&lt;70% = gagal signifikan</strong>, sedangkan 70–89% masih recoverable dan layak mendapat pembinaan.
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            style={{ flex: 1, background: "#f5f0ff", border: "1.5px solid #8e44ad", borderRadius: "12px", padding: "12px 16px", display: "flex", gap: "12px", alignItems: "flex-start" }}
          >
            <div style={{ background: "#8e44ad", color: "#fff", borderRadius: "50%", width: "28px", height: "28px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", fontWeight: 900, flexShrink: 0 }}>✓</div>
            <div>
              <div style={{ fontSize: "0.8rem", fontWeight: 900, color: "#6c3483", marginBottom: "4px" }}>Validitas untuk PTPN</div>
              <div style={{ fontSize: "0.72rem", color: "#2d3748", lineHeight: 1.4, fontWeight: 600 }}>
                Cocok untuk KPI kuantitatif: <strong>tonase, yield, biaya, produktivitas, EBITDA, utilisasi</strong> — semua berbasis target achievement.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <SlideFooter />
    </div>
  );
}

/* =============================
   MAIN PAGE COMPONENT
   ============================= */
const slides = [
  // BAGIAN 1 — STRATEGIC CONTEXT
  SlideCover,                // 1: Cover
  SlideLatar,                // 2: Strategic Drivers
  SlideWhyChange,            // 3: Why Change? — Gap Analysis ⭐ NEW

  // BAGIAN 2 — PMS DESIGN PRINCIPLES
  SlidePrinsipKPI,           // 4: Prinsip KPI
  SlideModelKinerja,         // 5: Model Kinerja APMS ⭐ NEW

  // BAGIAN 3 — EXISTING VS 2026
  SlideFramework2022,        // 6: Existing PMS 2022–2025
  SlidePerubahanKunci,       // 7: Perubahan Kunci ⭐ NEW

  // BAGIAN 4 — DESIGN 2026
  SlideFramework2026A,       // 8: Arsitektur Opsi A
  SlideFramework2026B,       // 9: Arsitektur Opsi B
  SlideProConOptions,        // 10: Pro Con Opsi A vs B
  SlideProConRating,         // 11: Pro Con Rating Distribusi
  SlideRatingKinerja,        // 12: Rating Model 2026
  SlidePriorityPool,         // 13: Priority Pool & Talent

  // BAGIAN 5 — IMPACT
  SlideWeighting,            // 14: Pembobotan & Dampak Reward

  // BAGIAN 6 — IMPLEMENTATION
  SlideTimeline,             // 15: Timeline

  // CLOSING & APPENDIX
  SlideThankYou,             // 16: Terima Kasih
  SlideRatingReference,      // 17: Appendix — Referensi Global
];

export default function PresentationPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goNext = useCallback(() => {
    setCurrentSlide((p) => Math.min(p + 1, slides.length - 1));
  }, []);

  const goPrev = useCallback(() => {
    setCurrentSlide((p) => Math.max(p - 1, 0));
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goNext();
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goNext, goPrev]);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="slide-container">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -60 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          style={{ width: "100%", height: "100%" }}
        >
          <CurrentSlideComponent />
        </motion.div>
      </AnimatePresence>

      {/* Slide Indicators */}
      <div className="slide-indicator">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`indicator-dot ${i === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(i)}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="nav-controls">
        <button
          className="nav-btn"
          onClick={goPrev}
          disabled={currentSlide === 0}
          aria-label="Previous slide"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          className="nav-btn"
          onClick={goNext}
          disabled={currentSlide === slides.length - 1}
          aria-label="Next slide"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
