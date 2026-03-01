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
  Calendar,
  PanelLeftOpen,
  PanelLeftClose,
  Factory,
  Wallet,
  Gauge,
  Database,
  Monitor,
  ShieldCheck,
  Download
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
   EXECUTIVE SUMMARY
   ============================= */
function SlideExecutiveSummary() {
  const summaryItems = [
    {
      label: "Latar Belakang",
      icon: <FileText size={24} />,
      content: "Transformasi pengelolaan kinerja PTPN Group yang terintegrasi dan berbasis data, menggantikan sistem yang belum berbasis Balanced Scorecard.",
      color: "#0e6655"
    },
    {
      label: "Lingkup Entitas",
      icon: <Factory size={24} />,
      content: "4 entitas di 2026 (PTPN III Holding, PTPN I, PTPN IV, SGN) → seluruh PTPN Group di 2027.",
      color: "#1a5276"
    },
    {
      label: "Kerangka Utama",
      icon: <Target size={24} />,
      content: "BSC → Scorecard (Korporat, Direktorat, Divisi) → KPI (Individu) dengan cascading dari strategi ke operasional.",
      color: "#0e6655"
    },
    {
      label: "Metodologi Pendukung",
      icon: <Settings size={24} />,
      content: "Lean / BPI untuk optimasi proses bisnis yang berfokus pada Productivity, Cost, dan Speed (PCS).",
      color: "#f97316"
    },
    {
      label: "Timeline Proyek",
      icon: <Calendar size={24} />,
      content: "Mulai Maret 2026, durasi 56 minggu (14 bulan). Deliverable: 9 output utama termasuk Perdir, Sistem IT, dan Proses Bisnis.",
      color: "#1a5276"
    },
    {
      label: "Siklus Review",
      icon: <Gauge size={24} />,
      content: "Quarterly Review di 2026 (fase adaptasi) → Monthly Review di 2027+ untuk seluruh PTPN Group.",
      color: "#0e6655"
    }
  ];

  return (
    <div className="slide" style={{ padding: "1.5rem 4rem", background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0e6655 100%)", position: "relative", overflow: "hidden" }}>
      {/* Decorative Elements */}
      <div style={{ position: "absolute", top: "-100px", right: "-100px", width: "400px", height: "400px", borderRadius: "50%", background: "rgba(14, 102, 85, 0.15)", filter: "blur(60px)" }} />
      <div style={{ position: "absolute", bottom: "-150px", left: "-100px", width: "500px", height: "500px", borderRadius: "50%", background: "rgba(26, 82, 118, 0.1)", filter: "blur(80px)" }} />

      <div style={{ position: "relative", zIndex: 1, height: "100%", display: "flex", flexDirection: "column" }}>
        {/* Header */}
        <div style={{ marginBottom: "1.2rem", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ borderLeft: "6px solid #fbbf24", paddingLeft: "1.2rem" }}>
            <h1 style={{ fontSize: "2.8rem", color: "#fff", fontWeight: 900, margin: 0, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              <em>Executive Summary</em>
            </h1>
            <p style={{ fontSize: "1rem", color: "#6ee7b7", fontWeight: 700, marginTop: "0.3rem", textTransform: "uppercase", letterSpacing: "2px" }}>
              Framework SMKTI 2026 — Ringkasan Direksi
            </p>
          </div>
          <div style={{ background: "rgba(251, 191, 36, 0.15)", border: "1px solid rgba(251, 191, 36, 0.3)", padding: "6px 16px", borderRadius: "10px" }}>
            <span style={{ color: "#fbbf24", fontWeight: 800, fontSize: "0.8rem", letterSpacing: "1px" }}>CONFIDENTIAL</span>
          </div>
        </div>

        {/* Grid Content */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.8rem", flex: 1 }}>
          {summaryItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              style={{
                background: "rgba(255, 255, 255, 0.06)",
                backdropFilter: "blur(10px)",
                borderRadius: "20px",
                padding: "1.2rem",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                display: "flex",
                flexDirection: "column",
                gap: "0.8rem"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: `${item.color}25`, color: item.color === "#f97316" ? "#fbbf24" : "#6ee7b7", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: "1rem", fontWeight: 900, color: "#fff", margin: 0 }}>{item.label}</h3>
              </div>
              <p style={{ fontSize: "0.85rem", color: "rgba(255, 255, 255, 0.8)", lineHeight: 1.4, margin: 0, fontWeight: 500, flex: 1 }}>
                {item.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Key Ask Section */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            marginTop: "1rem",
            background: "linear-gradient(135deg, rgba(251, 191, 36, 0.15) 0%, rgba(249, 115, 22, 0.1) 100%)",
            borderRadius: "18px",
            padding: "1.2rem 2rem",
            border: "1px solid rgba(251, 191, 36, 0.25)",
            display: "flex",
            alignItems: "center",
            gap: "1.5rem"
          }}
        >
          <div style={{ background: "#fbbf24", color: "#0f172a", padding: "10px 20px", borderRadius: "12px", fontWeight: 900, fontSize: "0.9rem", flexShrink: 0, letterSpacing: "1px" }}>KEY ASK</div>
          <p style={{ fontSize: "1rem", fontWeight: 700, color: "#fff", margin: 0, lineHeight: 1.4 }}>
            Persetujuan Direksi atas <strong style={{ color: "#fbbf24" }}>Framework SMKTI 2026</strong>, timeline implementasi, entitas target, serta <strong style={{ color: "#6ee7b7" }}>alokasi sumber daya</strong>.
          </p>
        </motion.div>
      </div>
      <SlideFooter />
    </div>
  );
}

/* =============================
   AGENDA / TABLE OF CONTENTS
   ============================= */
function SlideAgenda() {
  const sections = [
    { num: "01", title: "Strategic Context", desc: "Visi besar, DNA PCS, HC Strategic Initiatives, dan Gap Analysis", color: "#0e6655", slides: 6, targetTitle: "Strategic Drivers" },
    { num: "02", title: "Fondasi Konseptual & Strategis", desc: "Prinsip KPI, BSC, PDCA, Cascading, dan Model Kinerja", color: "#0e6655", slides: 10, targetTitle: "§ Fondasi Konseptual & Strategis" },
    { num: "03", title: "Evaluasi & Perubahan Regulasi", desc: "Review PMS existing, perubahan paradigma, dan komparasi Perdir", color: "#1a5276", slides: 6, targetTitle: "§ Evaluasi & Perubahan Regulasi" },
    { num: "04", title: "Desain Arsitektur SMKTI 2026", desc: "Opsi arsitektur, pro-contra, rating model, dan reward impact", color: "#064e3b", slides: 8, targetTitle: "§ Desain Arsitektur SMKTI 2026" },
    { num: "05", title: "Implementasi & Roadmap", desc: "Timeline, governance, change management, risk & mitigasi", color: "#e67e22", slides: 8, targetTitle: "§ Implementasi & Roadmap" },
    { num: "06", title: "Business Process Improvement", desc: "Lean methodology, eliminasi Muda, dan Value Stream Mapping", color: "#0e6655", slides: 6, targetTitle: "Mengapa BPI untuk SMKTI?" },
    { num: "07", title: "Penutup & Lampiran", desc: "Next steps, FAQ, terminologi, dan referensi global", color: "#334155", slides: 7, targetTitle: "§ Penutup & Lampiran" }
  ];

  const handleSectionClick = (targetTitle: string) => {
    window.dispatchEvent(new CustomEvent('navigateToSlide', { detail: { targetTitle } }));
  };

  return (
    <div className="slide" style={{ padding: "1.5rem 4.5rem", background: "linear-gradient(135deg, #f8fafc 0%, #fff 100%)" }}>
      <AccentShapes />
      <div className="slide-header" style={{ marginBottom: "1rem", textAlign: "center" }}>
        <motion.h1
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="slide-title"
          style={{ fontSize: "2.8rem", color: "#1a5276", marginBottom: "0.2rem" }}
        >
          Agenda Presentasi
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="slide-subtitle"
          style={{ fontSize: "1rem", color: "#64748b", fontWeight: 600 }}
        >
          Klik bagian untuk menuju section
        </motion.p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.2rem", flex: 1 }}>
        {sections.map((sec, i) => (
          <motion.button
            key={i}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.06 }}
            onClick={() => handleSectionClick(sec.targetTitle)}
            style={{
              display: "flex",
              gap: "1.5rem",
              padding: "1.5rem 2rem",
              borderRadius: "20px",
              background: "#fff",
              border: "1px solid #e2e8f0",
              boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
              cursor: "pointer",
              textAlign: "left",
              outline: "none",
              transition: "all 0.25s ease",
              position: "relative",
              overflow: "hidden"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `0 8px 25px ${sec.color}20`;
              e.currentTarget.style.borderColor = sec.color;
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.03)";
              e.currentTarget.style.borderColor = "#e2e8f0";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <div style={{ position: "absolute", top: 0, left: 0, width: "6px", height: "100%", background: sec.color }} />
            <div style={{
              background: sec.color,
              color: "#fff",
              width: "64px",
              height: "64px",
              borderRadius: "18px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              fontSize: "1.5rem",
              flexShrink: 0,
              boxShadow: `0 6px 15px ${sec.color}30`
            }}>
              {sec.num}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontWeight: 900, fontSize: "1.3rem", color: "#1e293b", marginBottom: "6px" }}>{sec.title}</div>
              <div style={{ fontSize: "1rem", color: "#64748b", fontWeight: 500, lineHeight: 1.4 }}>{sec.desc}</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontSize: "0.85rem", color: "#94a3b8", fontWeight: 700 }}>{sec.slides} slides</span>
              <ChevronRight size={22} color={sec.color} style={{ marginTop: "6px" }} />
            </div>
          </motion.button>
        ))}
      </div>
      <SlideFooter />
    </div>
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
        background: "radial-gradient(circle at 0% 0%, #0e6655 0%, #0a4f42 50%, #1a5276 100%)",
        overflow: "hidden",
        padding: "0",
        height: "100%",
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Premium Mesh Gradient Accents */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        style={{
          width: "1200px",
          height: "1200px",
          top: "-500px",
          left: "-400px",
          background: "radial-gradient(circle, #27ae60 0%, transparent 70%)",
          filter: "blur(120px)",
          position: "absolute",
          borderRadius: "50%",
        }}
      />
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 60, 0],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        style={{
          width: "1000px",
          height: "1000px",
          bottom: "-400px",
          right: "-300px",
          background: "radial-gradient(circle, #2980b9 0%, transparent 70%)",
          filter: "blur(150px)",
          position: "absolute",
          borderRadius: "50%",
        }}
      />
      <div style={{
        width: "150%",
        height: "150%",
        position: "absolute",
        top: "-25%",
        left: "-25%",
        backgroundImage: "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
        transform: "rotate(15deg)",
        zIndex: 0,
      }}
      />

      {/* Main Content Area */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        style={{
          zIndex: 10,
          textAlign: "center",
          maxWidth: "1100px",
          padding: "4rem",
          background: "rgba(255, 255, 255, 0.03)",
          backdropFilter: "blur(20px)",
          borderRadius: "30px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
        }}
      >
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "2.5rem" }}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", damping: 12, stiffness: 100, delay: 0.2 }}
            style={{
              position: "relative",
              width: "80px",
              height: "80px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #27ae60 0%, #0e6655 100%)",
              borderRadius: "22px",
              boxShadow: "0 15px 35px rgba(14, 102, 85, 0.4)",
              transform: "rotate(-10deg)"
            }}
          >
            <Target size={42} color="#fff" strokeWidth={2} />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              style={{
                position: "absolute",
                inset: -6,
                border: "2px dashed rgba(255,255,255,0.3)",
                borderRadius: "24px",
              }}
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <span
            style={{
              fontSize: "0.85rem",
              fontWeight: 900,
              color: "#e67e22",
              textTransform: "uppercase",
              display: "inline-block",
              padding: "6px 20px",
              background: "rgba(230, 126, 34, 0.15)",
              border: "1px solid rgba(230, 126, 34, 0.3)",
              borderRadius: "50px",
              marginBottom: "1.5rem",
              letterSpacing: "0.4em",
            }}
          >
            High-Performance Strategic Framework
          </span>
        </motion.div>

        <h1
          style={{
            fontSize: "4.5rem",
            lineHeight: 1,
            marginBottom: "2rem",
            color: "#fff",
            fontFamily: "'Playfair Display', serif",
            fontWeight: 800,
            letterSpacing: "-0.02em",
          }}
        >
          Sistem Manajemen <br />
          <span style={{
            background: "linear-gradient(90deg, #f1c40f, #e67e22)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontStyle: "italic"
          }}>
            Kinerja Karyawan Terintegrasi (SMKTI)
          </span>
        </h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "120px" }}
          transition={{ duration: 1.2, delay: 1, ease: "easeInOut" }}
          style={{
            height: "4px",
            background: "linear-gradient(to right, #f1c40f, #e67e22)",
            margin: "0 auto 2.5rem",
            borderRadius: "2px"
          }}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          style={{
            fontSize: "1.8rem",
            fontWeight: 700,
            color: "rgba(255,255,255,0.9)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          PTPN Group
        </motion.div>

        <div style={{ marginTop: "3rem", display: "flex", justifyContent: "center", gap: "2rem" }}>
          <div style={{ textAlign: "left", borderLeft: "2px solid rgba(255,255,255,0.2)", paddingLeft: "1rem" }}>
            <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.6)", textTransform: "uppercase" }}>Version</div>
            <div style={{ fontSize: "1rem", color: "#fff", fontWeight: 700 }}>2.0 EA-Performance</div>
          </div>
          <div style={{ textAlign: "left", borderLeft: "2px solid rgba(255,255,255,0.2)", paddingLeft: "1rem" }}>
            <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.6)", textTransform: "uppercase" }}>Focus</div>
            <div style={{ fontSize: "1rem", color: "#fff", fontWeight: 700 }}>Strategic & Operational Alignment</div>
          </div>
        </div>
      </motion.div>

      {/* Floating Decorative Elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 45, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: "absolute", top: "15%", right: "15%", opacity: 0.4 }}
      >
        <TrendingUp size={60} color="#fff" strokeWidth={1} />
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -45, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: "absolute", bottom: "20%", left: "10%", opacity: 0.3 }}
      >
        <Award size={80} color="#fff" strokeWidth={0.5} />
      </motion.div>

      <SlideFooter />
    </div>
  );
}

/* =============================
   UPDATE PERFORMANCE MANAGEMENT SLIDE
   ============================= */
function SlidePerformanceUpdate2026() {
  const tableData = [
    {
      no: 1,
      title: "Monitoring Pengisian Kinerja 2025",
      stats: [
        { name: "PTPN III (Persero)", val: "99,39%", num: 99.39, color: "#10b981" },
        { name: "PTPN I", val: "98,13%", num: 98.13, color: "#10b981" },
        { name: "PTPN IV", val: "93,04%", num: 93.04, color: "#f59e0b" },
        { name: "PT SGN", val: "98,26%", num: 98.26, color: "#10b981" },
      ],
      keterangan: (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          <span style={{ fontSize: "0.8rem", color: "#64748b", background: "#f1f5f9", padding: "4px 10px", borderRadius: "100px", fontWeight: 600 }}>PTPN I: Cetak ERP</span>
          <span style={{ fontSize: "0.8rem", color: "#64748b", background: "#f1f5f9", padding: "4px 10px", borderRadius: "100px", fontWeight: 600 }}>PTPN IV: Fokus KSO</span>
          <span style={{ fontSize: "0.8rem", color: "#64748b", background: "#f1f5f9", padding: "4px 10px", borderRadius: "100px", fontWeight: 600 }}>PT SGN: Rekap Nilai</span>
        </div>
      )
    },
    {
      no: 2,
      title: "Pengisian Matrix KPI Individu 2026",
      stats: [
        { name: "PTPN III (Persero)", val: "90%", num: 90, color: "#10b981" },
        { name: "PTPN I", val: "10%", num: 10, color: "#ef4444" },
        { name: "PTPN IV", val: "20%", num: 20, color: "#f97316" },
        { name: "PT SGN", val: "0%", num: 0, color: "#94a3b8" },
      ],
      keterangan: "Draft Matrix per Divisi sudah dibuat di Holding, Sub-Holding menyusul sesuai timeline regional."
    },
    {
      no: 3,
      title: "Form Program Kerja Individu 2026",
      stats: [
        { name: "PTPN III (Persero)", val: "50%", num: 50, color: "#3b82f6" },
        { name: "PTPN I", val: "-", num: 0, color: "#e2e8f0" },
        { name: "PTPN IV", val: "-", num: 0, color: "#e2e8f0" },
        { name: "PT SGN", val: "-", num: 0, color: "#e2e8f0" },
      ],
      keterangan: "Penyesuaian form untuk seluruh Divisi Holding masih dalam tahap drafting."
    }
  ];

  return (
    <div className="slide" style={{ padding: "1.5rem 4rem 2rem", background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)" }}>
      <AccentShapes />

      {/* Premium Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "2.5rem", borderBottom: "4px solid #1a5276", paddingBottom: "1.5rem" }}>
        <div>
          <h1 className="slide-title" style={{ fontSize: "3.2rem", color: "#1a5276", marginBottom: "0.2rem" }}>
            <em>Update Performance Management</em>
          </h1>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <span style={{ background: "#f97316", color: "#fff", padding: "4px 12px", borderRadius: "6px", fontSize: "0.9rem", fontWeight: 800, textTransform: "uppercase" }}>High Priority</span>
            <span style={{ fontSize: "1.1rem", color: "#64748b", fontWeight: 700 }}>Monitoring Progress — Eksekusi Fase 1</span>
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <p style={{ fontSize: "1.2rem", color: "#0e6655", margin: 0, fontWeight: 800 }}>Timestamp Data:</p>
          <p style={{ fontSize: "1.5rem", color: "#1e293b", margin: 0, fontWeight: 900 }}>1 Mar 2026 | <span style={{ color: "#f97316" }}>09.00 WIB</span></p>
        </div>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {tableData.map((section, idx) => (
          <motion.div
            key={section.no}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            style={{
              background: "#fff",
              borderRadius: "20px",
              padding: "1.5rem 2rem",
              boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
              border: "1px solid #f1f5f9",
              display: "flex",
              flexDirection: "column",
              gap: "1.2rem",
              position: "relative",
              overflow: "hidden"
            }}
          >
            {/* Background Decoration */}
            <div style={{ position: "absolute", top: 0, right: 0, width: "300px", height: "100%", background: "linear-gradient(90deg, transparent 0%, #f8fafc 100%)", zIndex: 0 }} />

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative", zIndex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                <div style={{ width: "45px", height: "45px", borderRadius: "12px", background: "#1a5276", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", fontWeight: 900 }}>
                  {section.no}
                </div>
                <h3 style={{ fontSize: "1.8rem", color: "#1e293b", fontWeight: 800, margin: 0 }}>{section.title}</h3>
              </div>
              <div style={{ width: "35%", fontSize: "0.9rem", color: "#64748b", fontWeight: 600, lineHeight: 1.5, fontStyle: "italic", borderLeft: "4px solid #f97316", paddingLeft: "1.2rem" }}>
                {section.keterangan}
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem", position: "relative", zIndex: 1 }}>
              {section.stats.map((stat, sIdx) => (
                <div key={sIdx} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                    <span style={{ fontSize: "0.85rem", fontWeight: 800, color: "#475569", textTransform: "uppercase", letterSpacing: "0.5px" }}>{stat.name}</span>
                    <span style={{ fontSize: "1.2rem", fontWeight: 900, color: stat.color }}>{stat.val}</span>
                  </div>
                  {/* Progress Bar Container */}
                  <div style={{ width: "100%", height: "10px", background: "#f1f5f9", borderRadius: "100px", overflow: "hidden" }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${stat.num}%` }}
                      transition={{ duration: 1, delay: 0.5 + idx * 0.1 }}
                      style={{ height: "100%", background: stat.color, borderRadius: "100px" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <SlideFooter />
    </div>
  );
}

/* =============================
   BIG DREAM SLIDE (RJPP 2026-2030)
   ============================= */
function SlideBigDream() {
  const pillars = [
    {
      title: "World-Class Smart Agri Company",
      en: "As a World-Class Smart Agri Company, PTPN establishes integrated, technology-driven agribusiness platform anchored in global best practices to enhance productivity, cost effectiveness, and speed (PCS), in support of timely and data-driven decision making.",
      id: "Sebagai World-Class Smart Agri Company, PTPN membangun agribisnis terintegrasi berbasis teknologi dan praktik terbaik global untuk meningkatkan produktivitas, efektifitas biaya, dan kecepatan (PCS) dalam pengambilan keputusan."
    },
    {
      title: "Empowering Indonesia's High-Impact EntrePlanters",
      en: "Empower EntrePlanters to lead global agribusiness transformation through strengthening future-ready workforce capabilities, focusing on high-tech operational excellence to enhance large-scale sustainable value creation.",
      id: "Penguatan SDM EntrePlanters (PTPN) untuk memimpin transformasi bisnis agro secara global melalui penguatan kapabilitas sumber daya manusia (masa depan), berfokus pada operasional bisnis berbasis teknologi untuk mendorong penciptaan nilai tambah berskala besar yang berkelanjutan."
    },
    {
      title: "Food & Energy Security",
      en: "Strengthen food and energy security by increasing domestic productivity and production capacity through smart cultivation, data-driven planning, integrated commodity development, and strong partnerships with smallholders to build sustainable resilient supply and global stability.",
      id: "Mendukung program ketahanan pangan dan energi dengan mendorong produktivitas dan kapasitas produksi dalam negeri melalui penerapan budidaya berbasis teknologi, perencanaan berbasis data, pengembangan komoditas terintegrasi (hilirisasi), serta kemitraan solid bersama plasma guna membangun ketahanan pangan secara berkelanjutan."
    }
  ];

  return (
    <div className="slide" style={{ padding: 0, background: "linear-gradient(135deg, #064e3b 0%, #065f46 100%)", position: "relative", overflow: "hidden" }}>
      {/* Background patterns */}
      <div style={{ position: "absolute", top: 0, right: 0, width: "100%", height: "100%", opacity: 0.05, pointerEvents: "none" }}>
        <img src="/images/bpi_landscape.png" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>

      <div style={{ position: "relative", zIndex: 2, padding: "2rem 4rem", height: "100%", display: "flex", flexDirection: "column" }}>
        <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          <h1 style={{ fontSize: "3rem", fontWeight: 800, color: "#fff", margin: 0 }}>
            Our (PTPN) <span style={{ color: "#fbbf24" }}>Big Dream</span> 2026-2030
          </h1>
          <p style={{ fontSize: "1.2rem", color: "#6ee7b7", margin: "0.4rem 0 0", fontWeight: 600 }}>Statement of RJPP - Strategic Pillars</p>
        </div>

        <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "2.5rem", alignItems: "center" }}>
          {/* Left Side: Main Vision */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ padding: "1.5rem", borderRight: "1px solid rgba(255,255,255,0.1)" }}
          >
            <h2 style={{ fontSize: "1.8rem", color: "#fff", fontWeight: 800, lineHeight: 1.2, marginBottom: "1.5rem" }}>
              World-Class Smart Agri Company, Empowering Indonesia’s High Impact EntrePlanters for Food & Energy Security
            </h2>
            <div style={{ width: "60px", height: "4px", background: "#fbbf24", marginBottom: "1.5rem" }} />
            <p style={{ fontSize: "1.3rem", color: "#fbbf24", fontWeight: 700, lineHeight: 1.3, fontStyle: "italic" }}>
              Perusahaan Perkebunan Berbasis Teknologi Kelas Dunia, Melalui Penguatan SDM EntrePlanters di Indonesia (PTPN) yang Berdampak Terhadap Ketahanan Pangan & Energi
            </p>
          </motion.div>

          {/* Right Side: Pillars Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            {pillars.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                style={{
                  background: "rgba(255, 255, 255, 0.08)",
                  backdropFilter: "blur(12px)",
                  padding: "1.2rem 1.6rem",
                  borderRadius: "14px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  position: "relative"
                }}
              >
                <div style={{ borderBottom: "2px solid rgba(251, 191, 36, 0.3)", paddingBottom: "0.4rem", marginBottom: "0.6rem" }}>
                  <h3 style={{ fontSize: "1rem", fontWeight: 900, color: "#6ee7b7", margin: 0, textTransform: "uppercase" }}>{p.title}</h3>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <p style={{ fontSize: "0.8rem", color: "#fff", margin: 0, lineHeight: 1.4, fontWeight: 500, opacity: 0.9 }}>&ldquo;{p.en}&rdquo;</p>
                  <div style={{ height: "1px", background: "rgba(255,255,255,0.05)", borderStyle: "dashed" }} />
                  <p style={{ fontSize: "0.75rem", color: "#6ee7b7", margin: 0, lineHeight: 1.4, fontWeight: 500, fontStyle: "italic" }}>{p.id}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <SlideFooter />
    </div>
  );
}

/* =============================
   WAYS OF WORKING SLIDE (PCS)
   ============================= */
function SlideWaysOfWorking() {
  const pillars = [
    {
      title: "Productivity",
      icon: <Factory size={48} color="#059669" />,
      color: "#10b981",
      desc: "Menghasilkan lebih banyak output berkualitas dari sumber daya yang ada – baik kebun, pabrik, maupun tenaga kerja."
    },
    {
      title: "Cost",
      icon: <Wallet size={48} color="#d97706" />,
      color: "#fbbf24",
      desc: "Menghasilkan produk dengan efisiensi waktu, tenaga, dan bahan untuk hemat biaya."
    },
    {
      title: "Speed",
      icon: <Gauge size={48} color="#2563eb" />,
      color: "#3b82f6",
      desc: "Keputusan & ritme kerja lebih cepat dari sebelumnya – tanpa mengorbankan arah strategis."
    }
  ];

  return (
    <div className="slide" style={{ padding: "3rem 4rem", background: "linear-gradient(135deg, #0e6655 0%, #064e3b 50%, #022c22 100%)", position: "relative" }}>
      <AccentShapes />
      <div style={{ textAlign: "center", marginBottom: "4rem" }}>
        <h1 style={{ fontSize: "3.8rem", fontWeight: 900, color: "#fff", margin: 0, letterSpacing: "-0.01em" }}>
          Ways Of Working Enhancement in PTPN
        </h1>
        <p style={{ fontSize: "1.4rem", color: "#fbbf24", margin: "0.5rem 0 0", fontWeight: 700, fontStyle: "italic" }}>
          &ldquo;Accelerating PTPN&rsquo;s BIG Dream: Productivity, Cost Effectiveness, and Speed as Our DNA&rdquo;
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2.5rem", flex: 1, alignItems: "stretch" }}>
        {pillars.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            style={{
              background: "#fff",
              borderRadius: "24px",
              padding: "3rem 2rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              position: "relative",
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
              borderTop: `12px solid ${p.color}`
            }}
          >
            <div style={{ position: "absolute", top: "15px", left: "15px", opacity: 0.1 }}>
              <h4 style={{ margin: 0, fontSize: "2rem", fontWeight: 900, color: p.color }}>PCS</h4>
            </div>
            <h3 style={{ fontSize: "2.2rem", fontWeight: 900, color: "#1a5276", marginBottom: "2rem" }}>{p.title}</h3>
            <div style={{ marginBottom: "2.5rem" }}>{p.icon}</div>
            <p style={{ fontSize: "1.15rem", color: "#334155", lineHeight: 1.6, fontWeight: 500 }}>
              {p.desc}
            </p>
          </motion.div>
        ))}
      </div>

      <div style={{ marginTop: "4rem" }}>
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "100%", opacity: 1 }}
          transition={{ delay: 0.8 }}
          style={{
            background: "rgba(255, 255, 255, 0.95)",
            padding: "1.5rem 2rem",
            borderRadius: "12px",
            textAlign: "center",
            boxShadow: "0 10px 20px rgba(0,0,0,0.2)"
          }}
        >
          <p style={{ fontSize: "1.2rem", fontWeight: 800, color: "#064e3b", margin: 0 }}>
            <span style={{ color: "#059669" }}>PCS bukan</span> sekadar metrik terpisah, melainkan sistem terintegrasi untuk transformasi menyeluruh.
          </p>
        </motion.div>
      </div>
      <SlideFooter />
    </div>
  );
}

/* =============================
   HC STRATEGIC INITIATIVES — PILAR 4
   ============================= */
function SlideHCStrategicPilar4() {
  const initiatives = [
    {
      id: "4.1",
      title: "Integrated Performance Management System",
      cols: [
        "KPI growth & revenue-based",
        "KPI yield: productivity & cost/unit",
        "KPI recovery: cost reduction"
      ]
    },
    {
      id: "4.2",
      title: "Excellence Performance-Driven Culture",
      cols: [
        "Target growth",
        "Target achievement",
        "Execution speed & ownership"
      ]
    },
    {
      id: "4.3",
      title: "Competitive Remuneration & Total Reward",
      cols: [
        "Attraction & retention talent kritikal",
        "Reward berbasis output & produktivitas",
        "Variable pay & control fixed cost"
      ]
    }
  ];

  const otherPillars = [
    { n: "PILAR 1", t: "HC Strategy & Corporate Culture", color: "#dc2626" },
    { n: "PILAR 2", t: "Learning & Leadership Development", color: "#ea580c" },
    { n: "PILAR 3", t: "Talent Management", color: "#ca8a04" },
    { n: "PILAR 5", t: "HC Governance, IR & Policy", color: "#7c3aed" }
  ];

  const bizHeaders = [
    { t: "Value Creation", s: "(Downstream)", color: "#0e6655" },
    { t: "Business Expansion", s: "(On & off-farm Excellence)", color: "#1a5276" },
    { t: "Business Turnaround", s: "", color: "#dc2626" }
  ];

  return (
    <div className="slide" style={{ padding: "1.2rem 3.5rem", background: "#fff" }}>
      <AccentShapes />
      <div className="slide-header" style={{ marginBottom: "1rem", textAlign: "center" }}>
        <h1 className="slide-title" style={{ fontSize: "2.8rem", color: "#1a5276", marginBottom: "0.2rem" }}>HC Strategic Initiatives to Business Priorities</h1>
        <p className="slide-subtitle" style={{ fontSize: "1.1rem", color: "#64748b", fontWeight: 700 }}>Focus: PILAR 4 — Performance Management & Reward</p>
      </div>

      {/* Business Priority Headers */}
      <div style={{ display: "grid", gridTemplateColumns: "250px 1fr 1fr 1fr", gap: "10px", marginBottom: "8px" }}>
        <div />
        {bizHeaders.map((h, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
            style={{ background: h.color, color: "#fff", padding: "10px 15px", borderRadius: "12px", textAlign: "center" }}
          >
            <div style={{ fontWeight: 900, fontSize: "1rem" }}>{h.t}</div>
            {h.s && <div style={{ fontSize: "0.75rem", opacity: 0.9, marginTop: "2px" }}>{h.s}</div>}
          </motion.div>
        ))}
      </div>

      {/* Other Pillars (dimmed) */}
      {otherPillars.slice(0, 3).map((p, i) => (
        <div key={i} style={{ display: "grid", gridTemplateColumns: "250px 1fr", gap: "10px", marginBottom: "6px", opacity: 0.25 }}>
          <div style={{ background: p.color, color: "#fff", padding: "8px 14px", borderRadius: "8px", display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontWeight: 900, fontSize: "0.85rem" }}>{p.n}</span>
            <span style={{ fontSize: "0.8rem", fontWeight: 600 }}>{p.t}</span>
          </div>
          <div style={{ background: "#f1f5f9", borderRadius: "8px", padding: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: "0.85rem", color: "#94a3b8", fontStyle: "italic" }}>...</span>
          </div>
        </div>
      ))}

      {/* PILAR 4 — HIGHLIGHTED */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{
          border: "3px solid #0e6655",
          borderRadius: "16px",
          padding: "1rem",
          background: "rgba(16, 185, 129, 0.04)",
          marginBottom: "8px",
          boxShadow: "0 10px 30px rgba(14,102,85,0.08)"
        }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "234px 1fr", gap: "12px" }}>
          <div style={{ background: "linear-gradient(135deg, #0e6655, #064e3b)", color: "#fff", padding: "15px", borderRadius: "12px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ fontWeight: 900, fontSize: "1.4rem", marginBottom: "4px" }}>PILAR 4</div>
            <div style={{ fontSize: "1rem", fontWeight: 700, lineHeight: 1.3 }}>Performance Management & Reward</div>
            <div style={{ marginTop: "10px", width: "40px", height: "3px", background: "#fbbf24" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {initiatives.map((init, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px" }}>
                {init.cols.map((col, j) => (
                  <motion.div key={j} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.1 + j * 0.05 }}
                    style={{ background: "#fff", border: "1px solid #e2e8f0", padding: "10px 12px", borderRadius: "10px", fontSize: "0.9rem", color: "#1e293b", fontWeight: 700, lineHeight: 1.25, display: "flex", alignItems: "center", boxShadow: "0 2px 4px rgba(0,0,0,0.02)" }}
                  >
                    {col}
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </div>
        {/* Initiative Labels */}
        <div style={{ display: "grid", gridTemplateColumns: "234px 1fr", gap: "12px", marginTop: "12px" }}>
          <div />
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            {initiatives.map((init, i) => (
              <div key={i} style={{ fontSize: "0.95rem", fontWeight: 800, color: "#0e6655", display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ color: "#f97316", background: "rgba(249, 115, 22, 0.1)", padding: "2px 8px", borderRadius: "6px" }}>{init.id}</span>
                {init.title}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Pilar 5 dimmed */}
      <div style={{ display: "grid", gridTemplateColumns: "250px 1fr", gap: "10px", opacity: 0.25 }}>
        <div style={{ background: otherPillars[3].color, color: "#fff", padding: "8px 14px", borderRadius: "8px", display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontWeight: 900, fontSize: "0.85rem" }}>{otherPillars[3].n}</span>
          <span style={{ fontSize: "0.8rem", fontWeight: 600 }}>{otherPillars[3].t}</span>
        </div>
        <div style={{ background: "#f1f5f9", borderRadius: "8px", padding: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontSize: "0.85rem", color: "#94a3b8", fontStyle: "italic" }}>...</span>
        </div>
      </div>

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
      icon: <Layers size={28} />,
      color: "#0e6655",
      accent: "#27ae60",
      items: [
        "Akselerasi produktivitas SDM melalui SMART Systems yang selaras dengan strategi bisnis.",
        "Adopsi People Analytics & Teknologi untuk pengambilan keputusan berbasis data akurat."
      ],
      source: "DAM Directive No. SR.122/2025"
    },
    {
      title: "STRATEGICALLY ALIGNED",
      subtitle: "Board of Commissioners",
      icon: <GitBranch size={28} />,
      color: "#1a5276",
      accent: "#2980b9",
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
      icon: <Users size={28} />,
      color: "#e67e22",
      accent: "#f39c12",
      items: [
        "Peningkatan Transparansi & Evaluasi Sistem Kuota Penilaian.",
        "Sinkronisasi KPI secara Vertikal & Horizontal antar Departemen.",
        "Evaluasi berkala untuk menjamin relevansi dengan dinamika bisnis."
      ],
      source: "Employee Engagement & AKHLAK Survey 2024"
    }
  ];

  return (
    <div className="slide" style={{ padding: "1.5rem 3rem", background: "linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)" }}>
      <AccentShapes />
      <div className="slide-header" style={{ marginBottom: "2rem", textAlign: "center" }}>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="slide-title"
          style={{ fontSize: "3.2rem", color: "#1a5276", marginBottom: "0.5rem" }}
        >
          Latar Belakang
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="slide-subtitle"
          style={{ fontSize: "1.3rem", color: "#64748b", fontWeight: 600, letterSpacing: "1px" }}
        >
          Pondasi Strategis & Arahan Perbaikan Sistem 2026
        </motion.p>
      </div>

      <div style={{ flex: 1, display: "flex", gap: "1.5rem", alignItems: "stretch" }}>
        {sections.map((sec, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + idx * 0.15 }}
            style={{
              flex: 1,
              background: "#fff",
              borderRadius: "24px",
              padding: "2.5rem 2rem",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 10px 40px rgba(0,0,0,0.04)",
              border: "1px solid #f1f5f9",
              position: "relative",
              overflow: "hidden"
            }}
          >
            <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "8px", background: `linear-gradient(90deg, ${sec.color}, ${sec.accent})` }}></div>

            <div style={{ marginBottom: "2rem" }}>
              <div style={{
                background: `${sec.color}10`,
                color: sec.color,
                width: "64px",
                height: "64px",
                borderRadius: "18px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1.5rem",
                boxShadow: `0 8px 20px ${sec.color}15`
              }}>
                {sec.icon}
              </div>
              <h3 style={{ fontSize: "0.95rem", fontWeight: 900, color: sec.color, letterSpacing: "2px", marginBottom: "0.5rem", textTransform: "uppercase" }}>{sec.title}</h3>
              <h4 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#1e293b", lineHeight: 1.2 }}>{sec.subtitle}</h4>
            </div>

            <div style={{ flex: 1 }}>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {sec.items.map((item, i) => (
                  <li key={i} style={{
                    fontSize: "1.1rem",
                    lineHeight: 1.5,
                    color: "#475569",
                    marginBottom: "18px",
                    display: "flex",
                    gap: "14px",
                    fontWeight: 500
                  }}>
                    <div style={{ marginTop: "7px" }}>
                      <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: sec.accent }}></div>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{
              marginTop: "auto",
              paddingTop: "1.5rem",
              borderTop: "1px solid #f1f5f9",
              fontSize: "0.85rem",
              fontWeight: 700,
              color: "#94a3b8",
              fontStyle: "italic",
              display: "flex",
              alignItems: "center",
              gap: "10px"
            }}>
              <FileText size={16} /> Source: {sec.source}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        style={{ marginTop: "2rem", textAlign: "center", background: "linear-gradient(135deg, rgba(230, 126, 34, 0.1) 0%, rgba(230, 126, 34, 0.05) 100%)", padding: "16px 30px", borderRadius: "16px", border: "1px solid rgba(230, 126, 34, 0.2)", boxShadow: "0 10px 30px rgba(230,126,34,0.05)" }}
      >
        <p style={{ fontSize: "1.2rem", color: "#d35400", fontWeight: 700, margin: 0, display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
          <TrendingUp size={24} />
          <span>Fokus Utama: SMART System, Integrasi Data Vertikal, dan Digitalisasi Kinerja.</span>
        </p>
      </motion.div>

      <SlideFooter />
    </div>
  );
}

/* =============================
   SLIDE 2: PRINSIP DASAR KPI
   ============================= */
function SlidePrinsipKPI() {
  const efektif = [
    { text: "Alat ukur OUTPUT/KINERJA (Bukan Sikap)", icon: <Check size={16} /> },
    { text: "Selaras dengan VISI & STRATEGI Perusahaan", icon: <Check size={16} /> },
    { text: "Berbasis kriteria SMART (Objektif & Terukur)", icon: <Check size={16} /> },
    { text: "Mendorong FAIRNESS antara Perusahaan & Karyawan", icon: <Check size={16} /> },
    { text: "Identifikasi ruang PENGEMBANGAN yang nyata", icon: <Check size={16} /> },
  ];

  const tidakEfektif = [
    { text: "Mengukur AKTIVITAS yang ambigu (Process vs Result)", icon: <X size={16} /> },
    { text: "Data sulit diambil, MANIPULATIF, atau tidak akurat", icon: <X size={16} /> },
    { text: "Jumlah TERLALU BANYAK (Loss of Focus)", icon: <X size={16} /> },
    { text: "Target tidak masuk akal (UNREALISTIC Goals)", icon: <X size={16} /> },
    { text: "Tidak memiliki dampak SIGNIFIKAN terhadap bisnis", icon: <X size={16} /> },
  ];

  return (
    <div className="slide" style={{ padding: "1.5rem 4rem 1.5rem", background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)" }}>
      <AccentShapes />
      <div className="slide-header" style={{ marginBottom: "1.5rem", textAlign: "center" }}>
        <h1 className="slide-title" style={{ fontSize: "2.8rem", color: "#1a5276" }}>Prinsip Dasar KPI</h1>
        <p className="slide-subtitle" style={{ fontSize: "1.1rem", color: "#64748b", fontWeight: 600 }}>Esensi Performance Management yang Berkelanjutan</p>
      </div>

      {/* Philosophy Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{
          background: "linear-gradient(135deg, #0e6655 0%, #1a5276 100%)",
          color: "#fff",
          padding: "1.2rem 2rem",
          borderRadius: "20px",
          textAlign: "center",
          marginBottom: "2rem",
          boxShadow: "0 15px 35px rgba(14, 102, 85, 0.2)",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", opacity: 0.1, background: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.83L.83 55.457l-.83-.83L54.627 0zM5.973 0l.83.83L0 6.803l-.83-.83L5.973 0zM59.17 54.027l.83.83L54.027 59.17l-.83-.83L59.17 54.027zM4.627 60l-.83-.83L59.17.83l.83.83L4.627 60zM0 53.197l.83.83L6.803 60l-.83-.83L0 53.197zM60 5.973l-.83-.83L53.197 0l.83.83L60 5.973z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E\")" }}></div>
        <p style={{ fontSize: "1.3rem", fontWeight: 800, margin: 0, lineHeight: 1.4, position: "relative", zIndex: 1 }}>
          <span style={{ color: "#f1c40f" }}>&ldquo;</span> KPI adalah alat ukur <span style={{ textDecoration: "underline", textUnderlineOffset: "4px", color: "#f1c40f" }}>HASIL (RESULT)</span> — bukan alat ukur kepribadian atau proses administratif. <span style={{ color: "#f1c40f" }}>&rdquo;</span>
        </p>
      </motion.div>
      <div style={{ flex: 1, display: "flex", gap: "2rem" }}>
        {/* IDEAL STATE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          style={{ flex: 1, background: "#fff", borderRadius: "24px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.03)", border: "1px solid #f1f5f9" }}
        >
          <div style={{ background: "#0e6655", color: "#fff", padding: "1.2rem 2rem", display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ background: "rgba(255,255,255,0.2)", padding: "6px", borderRadius: "50%" }}><Check size={20} strokeWidth={3} /></div>
            <span style={{ fontSize: "1.1rem", fontWeight: 900, letterSpacing: "1px" }}>OPTIMAL (THE DO&apos;S)</span>
          </div>
          <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "12px" }}>
            {efektif.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "14px", alignItems: "center", background: "#f8fafc", padding: "14px 18px", borderRadius: "16px", border: "1px solid #f1f5f9" }}>
                <div style={{ color: "#0e6655" }}>{item.icon}</div>
                <span style={{ fontSize: "1rem", color: "#1e293b", fontWeight: 600 }}>{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* PITFALLS */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          style={{ flex: 1, background: "#fff", borderRadius: "24px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.03)", border: "1px solid #f1f5f9" }}
        >
          <div style={{ background: "#e67e22", color: "#fff", padding: "1.2rem 2rem", display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ background: "rgba(255,255,255,0.2)", padding: "6px", borderRadius: "50%" }}><X size={20} strokeWidth={3} /></div>
            <span style={{ fontSize: "1.1rem", fontWeight: 900, letterSpacing: "1px" }}>PITFALLS (THE DON&apos;TS)</span>
          </div>
          <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "12px" }}>
            {tidakEfektif.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "14px", alignItems: "center", background: "#fff8f1", padding: "14px 18px", borderRadius: "16px", border: "1px solid #fef3c7" }}>
                <div style={{ color: "#e67e22" }}>{item.icon}</div>
                <span style={{ fontSize: "1rem", color: "#1e293b", fontWeight: 600 }}>{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <SlideFooter />
    </div>
  );
}

// --- SECTION: CONCEPT & FOUNDATION (NEW) ---

function SlideSectionConcept() {
  return (
    <div className="slide" style={{ padding: "0", background: "#fff", display: "flex", flexDirection: "row" }}>
      <div style={{ flex: 1.2, position: "relative", overflow: "hidden", background: "#0e6655" }}>
        {/* Abstract Farm/Sugar Cane Illustration Mockup */}
        <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "80%", background: "linear-gradient(to top, rgba(0,0,0,0.4), transparent)" }}></div>
        <div style={{ padding: "4rem", position: "relative", zIndex: 1, color: "#fff" }}>
          <div style={{ background: "#fff", padding: "10px", borderRadius: "8px", width: "fit-content", marginBottom: "2rem" }}>
            <div style={{ color: "#0e6655", fontWeight: 900, fontSize: "1.2rem", letterSpacing: "1px" }}>PTPN GROUP</div>
          </div>
          <h2 style={{ fontSize: "5rem", fontWeight: 900, lineHeight: 1, textTransform: "uppercase", letterSpacing: "-2px" }}>
            Concept of <br />
            <span style={{ color: "#f1c40f" }}>Strategy &</span> <br />
            Performance <br />
            Management
          </h2>
        </div>
        {/* Simple SVG Illustration placeholder */}
        <div style={{ position: "absolute", bottom: "10%", right: "5%", opacity: 0.1 }}>
          <Settings size={400} />
        </div>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "4rem", background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "#1a5276", marginBottom: "1rem", letterSpacing: "2px" }}>BAGIAN 02 :</div>
          <h1 style={{ fontSize: "3rem", fontWeight: 900, color: "#1e293b", marginBottom: "2rem", lineHeight: 1.1 }}>Fondasi Konseptual & Strategis</h1>
          <div style={{ width: "80px", height: "8px", background: "#0e6655", borderRadius: "4px", marginBottom: "2rem" }}></div>
          <p style={{ fontSize: "1.1rem", color: "#64748b", fontWeight: 600, lineHeight: 1.6 }}>
            Membangun pemahaman mengenai relasi antara visi korporasi, strategi, dan bagaimana hal tersebut diukur secara efektif melalui metode Balanced Scorecard & PDCA.
          </p>
        </motion.div>
      </div>
      <div style={{ position: "absolute", bottom: "6.5rem", right: "2rem", display: "flex", alignItems: "center", gap: "10px" }}>
        <div style={{ textAlign: "right", borderRight: "2px solid #0e6655", paddingRight: "15px" }}>
          <div style={{ fontWeight: 900, fontSize: "0.8rem", color: "#1e293b" }}>ONE PTPN</div>
          <div style={{ fontWeight: 700, fontSize: "0.6rem", color: "#64748b" }}>CULTURE</div>
        </div>
        <Award size={32} color="#0e6655" />
      </div>
    </div>
  );
}

function SlideBSCFoundation() {
  const bscSteps = [
    {
      num: 1,
      title: "MEASUREMENT",
      subtitle: "Pengukuran Kinerja",
      desc: "Mengukur pencapaian melalui KPI terukur di setiap level organisasi.",
      icon: <BarChart3 size={28} />,
      color: "#0e6655"
    },
    {
      num: 2,
      title: "MANAGEMENT",
      subtitle: "Pengelolaan Kinerja",
      desc: "Siklus PDCA untuk monitoring, coaching, dan perbaikan berkelanjutan.",
      icon: <Settings size={28} />,
      color: "#1a5276"
    },
    {
      num: 3,
      title: "DIRECTION",
      subtitle: "Penerjemahan Strategi",
      desc: "Menerjemahkan visi & RJPP menjadi target konkret di setiap unit kerja.",
      icon: <Target size={28} />,
      color: "#0e6655"
    }
  ];

  const perspectives = [
    { name: "Financial", label: "Keuangan", example: "Revenue, Cost Efficiency, EBITDA", color: "#0e6655" },
    { name: "Customer", label: "Pelanggan", example: "Kepuasan Buyer, Kualitas Produk", color: "#1a5276" },
    { name: "Internal Process", label: "Proses Internal", example: "Rendemen, OEE, Lead Time", color: "#f97316" },
    { name: "Learning & Growth", label: "SDM & Inovasi", example: "Kompetensi, Training Hours, Engagement", color: "#7c3aed" }
  ];

  const strategyFlow = [
    { num: "1", label: "Strategy Map", desc: "Peta Sasaran Strategis", color: "#0e6655" },
    { num: "2", label: "Scorecard", desc: "Indikator Terukur", color: "#f97316" },
    { num: "3", label: "Program Kerja", desc: "Inisiatif & Aktivitas", color: "#1a5276" },
    { num: "4", label: "Budget", desc: "Alokasi Anggaran", color: "#334155" }
  ];

  return (
    <div className="slide" style={{ padding: "1.8rem 4rem", background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)" }}>
      <AccentShapes />
      <div className="slide-header" style={{ marginBottom: "1rem", textAlign: "center" }}>
        <h1 className="slide-title" style={{ fontSize: "2.8rem", color: "#0e6655", marginBottom: "0.2rem" }}>
          <em>Balanced Scorecard (BSC)</em>
        </h1>
        <p className="slide-subtitle" style={{ fontSize: "1.1rem", color: "#64748b", fontWeight: 600 }}>
          Kerangka Penerjemahan Strategi menjadi Kinerja Terukur
        </p>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1rem" }}>
        {/* 3 BSC Steps */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr auto 1fr", gap: "0.6rem", alignItems: "center" }}>
          {bscSteps.map((s, i) => (
            <React.Fragment key={i}>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12 }}
                style={{
                  background: "#fff",
                  borderRadius: "20px",
                  padding: "1.2rem 1.5rem",
                  border: `2px solid ${s.color}20`,
                  boxShadow: `0 6px 20px ${s.color}08`,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.6rem"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ width: "42px", height: "42px", borderRadius: "12px", background: `${s.color}12`, color: s.color, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {React.cloneElement(s.icon as any, { size: 24 })}
                  </div>
                  <div>
                    <div style={{ fontSize: "0.7rem", fontWeight: 800, color: "#94a3b8", letterSpacing: "1px" }}>STEP {s.num}</div>
                    <div style={{ fontSize: "1.2rem", fontWeight: 900, color: s.color }}>{s.title}</div>
                  </div>
                </div>
                <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#334155" }}>{s.subtitle}</div>
                <p style={{ fontSize: "0.85rem", color: "#64748b", lineHeight: 1.3, margin: 0, fontWeight: 500 }}>{s.desc}</p>
              </motion.div>
              {i < 2 && (
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <ArrowRight size={20} color="#cbd5e1" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* 4 BSC Perspectives */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{ background: "#fff", borderRadius: "20px", padding: "1.2rem 1.8rem", border: "1px solid #e2e8f0" }}
        >
          <div style={{ fontSize: "0.9rem", fontWeight: 900, color: "#1a5276", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "0.8rem", textAlign: "center" }}>4 Perspektif BSC — Konteks PTPN</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0.8rem" }}>
            {perspectives.map((p, i) => (
              <div key={i} style={{ borderLeft: `4px solid ${p.color}`, paddingLeft: "0.8rem" }}>
                <div style={{ fontSize: "1rem", fontWeight: 900, color: p.color }}>{p.name}</div>
                <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "#475569", marginBottom: "3px" }}>{p.label}</div>
                <div style={{ fontSize: "0.8rem", fontWeight: 500, color: "#94a3b8", lineHeight: 1.2 }}>{p.example}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Strategy to Budget Flow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{ background: "linear-gradient(135deg, #1e293b, #0e6655)", borderRadius: "18px", padding: "1.2rem 2rem" }}
        >
          <div style={{ fontSize: "0.85rem", fontWeight: 900, color: "#6ee7b7", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "0.8rem", textAlign: "center" }}>Alur: Strategi → Kinerja → Anggaran</div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.8rem" }}>
            {strategyFlow.map((s, i) => (
              <React.Fragment key={i}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", background: s.color, padding: "8px 16px", borderRadius: "12px", boxShadow: `0 5px 15px ${s.color}40` }}>
                  <span style={{ color: "#fff", fontWeight: 900, fontSize: "1rem", opacity: 0.6 }}>{s.num}.</span>
                  <div>
                    <div style={{ color: "#fff", fontWeight: 900, fontSize: "0.9rem" }}>{s.label}</div>
                    <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.7rem", fontWeight: 600 }}>{s.desc}</div>
                  </div>
                </div>
                {i < 3 && <ChevronRight size={18} color="rgba(255,255,255,0.3)" />}
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </div>
      <SlideFooter />
    </div>
  );
}

function SlidePDCACycle() {
  const pdcaSteps = [
    {
      letter: "P",
      title: "PLAN",
      subtitle: "Perencanaan Kinerja",
      color: "#f59e0b",
      icon: <Target size={26} />,
      items: [
        "Penyusunan RKAP & sasaran strategis",
        "Cascading Scorecard & KPI ke seluruh level",
        "Penetapan Program Kerja (Proker) & milestone"
      ]
    },
    {
      letter: "D",
      title: "DO",
      subtitle: "Eksekusi & Realisasi",
      color: "#f97316",
      icon: <Settings size={26} />,
      items: [
        "Pelaksanaan Program Kerja sesuai target",
        "Input realisasi KPI secara berkala",
        "Dokumentasi progres di sistem APMS"
      ]
    },
    {
      letter: "C",
      title: "CHECK",
      subtitle: "Monitoring & Evaluasi",
      color: "#3b82f6",
      icon: <BarChart3 size={26} />,
      items: [
        "Review pencapaian KPI (Quarterly/Monthly)",
        "Monitoring realisasi Proker (Monev)",
        "Identifikasi deviasi & gap kinerja"
      ]
    },
    {
      letter: "A",
      title: "ACT",
      subtitle: "Tindak Lanjut & Perbaikan",
      color: "#8b5cf6",
      icon: <TrendingUp size={26} />,
      items: [
        "Penyusunan PICA (Problem, Cause, Action)",
        "Coaching & mentoring oleh atasan langsung",
        "Normalisasi perbaikan ke siklus berikutnya"
      ]
    }
  ];

  return (
    <div className="slide" style={{ padding: "2rem 4rem", background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)" }}>
      <AccentShapes />
      <div className="slide-header" style={{ marginBottom: "1.5rem", textAlign: "center" }}>
        <h1 className="slide-title" style={{ fontSize: "3.2rem", color: "#0e6655", marginBottom: "0.3rem" }}>
          <em>Siklus PDCA — Perbaikan Berkelanjutan</em>
        </h1>
        <p className="slide-subtitle" style={{ fontSize: "1.2rem", color: "#64748b", fontWeight: 600 }}>
          Kerangka Continuous Improvement untuk Pencapaian Kinerja Organisasi
        </p>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1.2rem" }}>
        {/* PDCA Grid with Center Hub */}
        <div style={{ position: "relative", flex: 1 }}>
          {/* Center RJPP Hub */}
          <div style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90px",
            height: "90px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #0e6655, #1a5276)",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 900,
            fontSize: "1.1rem",
            zIndex: 10,
            boxShadow: "0 8px 30px rgba(14, 102, 85, 0.35)",
            border: "4px solid #fff"
          }}>RJPP</div>

          {/* 2x2 Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.2rem", height: "100%" }}>
            {pdcaSteps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.12 }}
                style={{
                  background: "#fff",
                  borderRadius: "24px",
                  padding: "1.8rem 2rem",
                  border: `2px solid ${s.color}20`,
                  boxShadow: `0 8px 25px ${s.color}08`,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.8rem",
                  position: "relative",
                  overflow: "hidden"
                }}
              >
                {/* Color accent top */}
                <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "5px", background: s.color }} />

                {/* Header */}
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <div style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "16px",
                    background: s.color,
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 900,
                    fontSize: "1.5rem",
                    boxShadow: `0 6px 18px ${s.color}35`
                  }}>{s.letter}</div>
                  <div>
                    <div style={{ fontSize: "1.3rem", fontWeight: 900, color: "#1e293b" }}>{s.title}</div>
                    <div style={{ fontSize: "0.95rem", fontWeight: 700, color: s.color }}>{s.subtitle}</div>
                  </div>
                  <div style={{ marginLeft: "auto", opacity: 0.15, color: s.color }}>
                    {s.icon}
                  </div>
                </div>

                {/* Items */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {s.items.map((item, j) => (
                    <div key={j} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                      <Check size={15} color={s.color} style={{ marginTop: "3px", flexShrink: 0 }} />
                      <span style={{ fontSize: "0.95rem", fontWeight: 600, color: "#475569", lineHeight: 1.4 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Insight */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          style={{
            background: "linear-gradient(135deg, #1e293b, #0e6655)",
            borderRadius: "16px",
            padding: "1.2rem 2.5rem",
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            color: "#fff"
          }}
        >
          <div style={{ background: "#fbbf24", color: "#1e293b", padding: "8px 18px", borderRadius: "10px", fontWeight: 900, fontSize: "0.9rem", flexShrink: 0 }}>INSIGHT</div>
          <p style={{ fontSize: "1.05rem", fontWeight: 600, margin: 0, lineHeight: 1.4 }}>
            Di PTPN, siklus PDCA berjalan <strong style={{ color: "#fbbf24" }}>per kuartal (2026)</strong> dan akan menjadi <strong style={{ color: "#6ee7b7" }}>bulanan (2027+)</strong> — memastikan setiap deviasi terdeteksi dini dan segera ditindaklanjuti.
          </p>
        </motion.div>
      </div>
      <SlideFooter />
    </div>
  );
}

function SlideStrategicAlignment() {
  return (
    <div className="slide" style={{ padding: "1.5rem 3.5rem 1.5rem", background: "#f8fafc" }}>
      <AccentShapes />
      <div className="slide-header" style={{ marginBottom: "1rem" }}>
        <h1 className="slide-title" style={{ fontSize: "2.6rem", color: "#1a5276" }}>Cascading & Strategic Alignment</h1>
        <p className="slide-subtitle" style={{ fontSize: "1rem", color: "#64748b", fontWeight: 700 }}>Menyelaraskan Target dari Level Korporasi hingga Unit Produksi</p>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "2rem" }}>
        {/* Cascading Flow */}
        <div style={{ background: "#fff", borderRadius: "24px", padding: "2rem", border: "1px solid #e2e8f0", boxShadow: "0 10px 30px rgba(0,0,0,0.03)" }}>
          <div style={{ fontSize: "0.9rem", fontWeight: 900, color: "#0e6655", marginBottom: "1.5rem", textTransform: "uppercase", textAlign: "center" }}>Proses Cascading Scorecard</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}>
            {[
              { t1: "HOLDING", t2: "SCORECARD", color: "#0e6655" },
              { t1: "DIREKTORAT", t2: "SCORECARD", color: "#117a65" },
              { t1: "DIVISI", t2: "SCORECARD", color: "#148f77" },
              { t1: "REGIONAL", t2: "SCORECARD", color: "#17a589" }
            ].map((box, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ flex: 1, background: box.color, color: "#fff", padding: "15px", borderRadius: "12px", textAlign: "center", fontWeight: 900, fontSize: "0.85rem" }}>
                  <div>{box.t1}</div>
                  <div style={{ fontSize: "0.7rem", opacity: 0.8 }}>{box.t2}</div>
                </div>
                {i < 3 && <ArrowRight size={20} color="#cbd5e1" />}
              </div>
            ))}
          </div>
        </div>

        {/* Alignment Diagram Mockup */}
        <div style={{ display: "flex", gap: "2rem" }}>
          <div style={{ flex: 1, background: "#fff", borderRadius: "24px", padding: "1.5rem", border: "1px solid #e2e8f0" }}>
            <div style={{ fontSize: "0.85rem", fontWeight: 900, color: "#1a5276", marginBottom: "1rem" }}>Alignment Corporate & Business Unit</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ border: "2px dashed #cbd5e1", borderRadius: "16px", padding: "1rem" }}>
                <div style={{ fontSize: "0.7rem", fontWeight: 800, color: "#64748b", marginBottom: "8px" }}>CORPORATE LEVEL</div>
                <div style={{ background: "#1a5276", color: "#fff", padding: "10px", borderRadius: "8px", fontSize: "0.75rem", fontWeight: 800 }}>Enterprise Strategy Map</div>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}><ArrowDown size={20} color="#cbd5e1" /></div>
              <div style={{ border: "2px dashed #0e665550", borderRadius: "16px", padding: "1rem" }}>
                <div style={{ fontSize: "0.7rem", fontWeight: 800, color: "#0e6655", marginBottom: "8px" }}>BUSINESS UNIT (SBU/REGIONAL)</div>
                <div style={{ background: "#0e6655", color: "#fff", padding: "10px", borderRadius: "8px", fontSize: "0.75rem", fontWeight: 800 }}>SBU Strategy Map Update</div>
              </div>
            </div>
          </div>

          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1rem", justifyContent: "center" }}>
            <div style={{ background: "rgba(241, 196, 15, 0.1)", border: "1px solid #f1c40f", padding: "1.5rem", borderRadius: "20px" }}>
              <div style={{ fontWeight: 900, color: "#7d6608", fontSize: "0.9rem", marginBottom: "10px" }}>Synergy Checkpoint</div>
              <p style={{ fontSize: "0.8rem", color: "#92760b", fontWeight: 600 }}>Tiap target unit dipastikan selaras dengan Key Performance Indicator (KPI) Holding secara berkala.</p>
            </div>
            <div style={{ background: "#1e293b", color: "#fff", padding: "1.5rem", borderRadius: "20px" }}>
              <div style={{ fontWeight: 900, fontSize: "0.9rem", marginBottom: "10px" }}>Integrated Planning Process</div>
              <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.7)", fontWeight: 600 }}>Menjamin anggaran (Budgeting) mengikuti prioritas inisiatif yang telah ditetapkan.</p>
            </div>
          </div>
        </div>
      </div>
      <SlideFooter />
    </div>
  );
}

function SlideUnitIndividualPerformance() {
  return (
    <div className="slide" style={{ padding: "1.5rem 3.5rem 1.5rem", background: "#fff" }}>
      <AccentShapes />
      <div className="slide-header" style={{ marginBottom: "1rem" }}>
        <h1 className="slide-title" style={{ fontSize: "2.6rem", color: "#1a5276" }}>Integrasi Kinerja Unit & Individu</h1>
        <p className="slide-subtitle" style={{ fontSize: "1rem", color: "#64748b", fontWeight: 700 }}>Strategy Management (Unit) vs Performance Management (Individual)</p>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "2rem" }}>
        {/* Unit vs Individual Table */}
        <div style={{ display: "flex", gap: "2rem" }}>
          <div style={{ flex: 1, background: "#f8fafc", borderRadius: "24px", padding: "2rem", border: "1px solid #e2e8f0" }}>
            <div style={{ background: "#1a5276", color: "#fff", width: "fit-content", padding: "8px 15px", borderRadius: "8px", fontWeight: 900, fontSize: "0.8rem", marginBottom: "1.5rem" }}>STRATEGY MANAGEMENT</div>
            <div style={{ fontSize: "1.2rem", fontWeight: 900, color: "#1e293b", marginBottom: "1rem" }}>Unit Performance</div>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {["Corporate Level", "Directorate Level", "Group Level"].map((l, i) => (
                <li key={i} style={{ background: "#fff", padding: "10px 15px", borderRadius: "10px", border: "1px solid #e2e8f0", fontSize: "0.85rem", fontWeight: 700, color: "#475569", display: "flex", justifyContent: "space-between" }}>
                  {l} <ChevronRight size={16} />
                </li>
              ))}
            </ul>
            <div style={{ marginTop: "1.5rem", fontSize: "0.75rem", fontWeight: 800, color: "#0e6655" }}>Managed by: Strategic Planning / Performance Unit</div>
          </div>

          <div style={{ display: "flex", alignItems: "center" }}><ArrowRight size={32} color="#cbd5e1" /></div>

          <div style={{ flex: 1, background: "#f8fafc", borderRadius: "24px", padding: "2rem", border: "1px solid #e2e8f0" }}>
            <div style={{ background: "#e67e22", color: "#fff", width: "fit-content", padding: "8px 15px", borderRadius: "8px", fontWeight: 900, fontSize: "0.8rem", marginBottom: "1.5rem" }}>PERFORMANCE MANAGEMENT</div>
            <div style={{ fontSize: "1.2rem", fontWeight: 900, color: "#1e293b", marginBottom: "1rem" }}>Individual Performance</div>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {["Director Level", "VP / GM Level", "Staff / Operational"].map((l, i) => (
                <li key={i} style={{ background: "#fff", padding: "10px 15px", borderRadius: "10px", border: "1px solid #e2e8f0", fontSize: "0.85rem", fontWeight: 700, color: "#475569", display: "flex", justifyContent: "space-between" }}>
                  {l} <ChevronRight size={16} />
                </li>
              ))}
            </ul>
            <div style={{ marginTop: "1.5rem", fontSize: "0.75rem", fontWeight: 800, color: "#e67e22" }}>Managed by: Human Capital / SDM</div>
          </div>
        </div>

        {/* KPI Types Section */}
        <div style={{ background: "#1e293b", borderRadius: "24px", padding: "2rem", color: "#fff" }}>
          <div style={{ fontSize: "1rem", fontWeight: 900, marginBottom: "1.5rem", textAlign: "center", textTransform: "uppercase", letterSpacing: "1px" }}>Type of KPIs to Measure Objectives</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
            {[
              { t: "EXACT KPIs", d: "Semua aspek dari objektif terukur secara langsung.", dot: "#27ae60" },
              { t: "PROXY KPIs", d: "Mengukur aspek terbatas sebagai indikator pengganti.", dot: "#f1c40f" },
              { t: "ACTIVITY KPIs", d: "Menghitung input / aktivitas / usaha yang dilakukan.", dot: "#e67e22" }
            ].map((kpi, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.05)", padding: "1.5rem", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.1)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                  <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: kpi.dot }}></div>
                  <div style={{ fontWeight: 900, fontSize: "0.9rem" }}>{kpi.t}</div>
                </div>
                <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.6)", fontWeight: 600, lineHeight: 1.5 }}>{kpi.d}</p>
              </div>
            ))}
          </div>
        </div>
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
    { area: "Cascading KPI", existing: "Tidak terintegrasi dari Holding ke Individu", target: "Strategy Map → Scorecard → KPI Individu", icon: <GitBranch size={20} /> },
    { area: "Scoring Model", existing: "Hanya kuantitatif KPI, tanpa behavior score", target: "Multi-dimensional: Performance + Behavior + Corp", icon: <BarChart3 size={20} /> },
    { area: "Rating Scale", existing: "2 tier (≥90 & <90), tidak terdiferensiasi", target: "5 tier global (Outstanding → Poor)", icon: <Target size={20} /> },
    { area: "Teknologi", existing: "APMS 1.0, belum Support BSC", target: "APMS 2.0 — Fully digital, real-time analytics", icon: <Settings size={20} /> },
    { area: "Talent Linkage", existing: "Rating tidak terhubung ke karir / talent", target: "Rating → Priority Pool → IDP & Promotion", icon: <TrendingUp size={20} /> },
    { area: "Review Cycle", existing: "Annual review, feedback pasif", target: "Quarterly RBK + Monthly Performance Check", icon: <FileText size={20} /> }
  ];

  return (
    <div className="slide" style={{ padding: "1.5rem 3rem", background: "linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)" }}>
      <AccentShapes />
      <div className="slide-header" style={{ marginBottom: "2rem", textAlign: "center" }}>
        <h1 className="slide-title" style={{ fontSize: "3.2rem", color: "#1a5276" }}>
          <em>Why Change? — Gap Analysis</em>
        </h1>
        <p className="slide-subtitle" style={{ fontSize: "1.2rem", color: "#64748b", fontWeight: 600 }}>Identifikasi Kelemahan Sistem & Kebutuhan Transformasi</p>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1rem" }}>
        {/* Header Row */}
        <div style={{ display: "flex", gap: "1.2rem", padding: "0.5rem 0", alignItems: "center" }}>
          <div style={{ width: "220px" }}></div>
          <div style={{ flex: 1, background: "rgba(231, 76, 60, 0.1)", border: "1px solid rgba(231, 76, 60, 0.3)", color: "#c0392b", padding: "12px", borderRadius: "14px", textAlign: "center", fontSize: "1.05rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "1px" }}>Current State (2022–2025)</div>
          <div style={{ width: "45px" }}></div>
          <div style={{ flex: 1, background: "rgba(14, 102, 85, 0.1)", border: "1px solid rgba(14, 102, 85, 0.3)", color: "#0e6655", padding: "12px", borderRadius: "14px", textAlign: "center", fontSize: "1.05rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "1px" }}>Target State 2026</div>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.8rem" }}>
          {gaps.map((gap, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
              style={{ display: "flex", gap: "1.2rem", alignItems: "stretch" }}
            >
              <div style={{
                width: "220px",
                background: "#1a5276",
                color: "#fff",
                borderRadius: "16px",
                padding: "16px 22px",
                display: "flex",
                alignItems: "center",
                gap: "14px",
                fontSize: "1.1rem",
                fontWeight: 800,
                boxShadow: "0 4px 12px rgba(26, 82, 118, 0.1)"
              }}>
                <div style={{ opacity: 0.8 }}>{React.cloneElement(gap.icon as React.ReactElement<any>, { size: 24 })}</div>
                {gap.area}
              </div>
              <div style={{ flex: 1, background: "#fff", border: "1px solid #f1f5f9", borderRadius: "16px", padding: "16px 22px", fontSize: "1.05rem", color: "#c0392b", fontWeight: 600, display: "flex", alignItems: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.02)" }}>
                <X size={20} style={{ marginRight: "12px", flexShrink: 0, color: "#e74c3c" }} /> {gap.existing}
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ width: "45px", height: "45px", borderRadius: "50%", background: "#f1f5f9", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <ArrowRight size={24} color="#1a5276" />
                </div>
              </div>
              <div style={{ flex: 1, background: "#fff", border: "1px solid #f1f5f9", borderRadius: "16px", padding: "16px 22px", fontSize: "1.05rem", color: "#0e6655", fontWeight: 700, display: "flex", alignItems: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.02)" }}>
                <Check size={20} style={{ marginRight: "12px", flexShrink: 0, color: "#27ae60" }} /> {gap.target}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{
            marginTop: "2rem",
            background: "linear-gradient(135deg, #1a5276 0%, #0e6655 100%)",
            color: "#fff",
            padding: "1.2rem 2.5rem",
            borderRadius: "18px",
            textAlign: "center",
            fontSize: "1.2rem",
            fontWeight: 700,
            boxShadow: "0 10px 30px rgba(14, 102, 85, 0.2)"
          }}
        >
          💡 Akselerasi APMS 2026 menjawab seluruh gap melalui standarisasi metrics, integrasi vertikal, dan digitalisasi end-to-end.
        </motion.div>
      </div>
      <SlideFooter />
    </div>
  );
}

/* =============================
   SLIDE: MENGAPA BUSINESS ARCHITECTURE (BA)
   ============================= */
function SlideWhyBusinessArchitecture() {
  const eaLayers = [
    { title: "Business Architecture", sub: "Strategi, Organisasi, Proses, Value Stream", active: true, color: "#1a5276", icon: <GitBranch size={20} /> },
    { title: "Data Architecture", sub: "Aset Data, Struktur, Governance", active: false, color: "#64748b", icon: <Database size={20} /> },
    { title: "Application Architecture", sub: "Sistem, Interaksi App, Layanan", active: false, color: "#64748b", icon: <Monitor size={20} /> },
    { title: "Technology Architecture", sub: "Infrastruktur, Cloud, Network", active: false, color: "#64748b", icon: <Settings size={20} /> },
  ];

  const reasons = [
    {
      title: "Jembatan Strategi ke Eksekusi",
      desc: "Menghubungkan impian strategis (Visi, Misi, RJPP) menjadi aktivitas operasional (Proses, Kapabilitas) yang nyata.",
      icon: <GitBranch size={24} />,
      color: "#0e6655",
      bgc: "rgba(14, 102, 85, 0.08)"
    },
    {
      title: "Mendobrak Silo Organisasi",
      desc: "Memastikan semua unit kerja berjalan dalam satu alur (Value Stream) yang terintegrasi, bukan bekerja sendiri-sendiri.",
      icon: <Users size={24} />,
      color: "#c0392b",
      bgc: "rgba(192, 57, 43, 0.08)"
    },
    {
      title: "Fondasi Utama Struktur & KPI",
      desc: "Organisasi dan KPI dibentuk berdasarkan struktur proses bisnis (BA) yang telah disepakati, bukan berdasarkan status quo atau interest individu.",
      icon: <Target size={24} />,
      color: "#f39c12",
      bgc: "rgba(243, 156, 18, 0.08)"
    },
    {
      title: "Prasyarat Sukses Digitalisasi",
      desc: "Tidak ada otomasi atau digitalisasi (IT) yang sukses tanpa mendefinisikan dan merapikan proses bisnisnya terlebih dahulu.",
      icon: <Monitor size={24} />,
      color: "#2980b9",
      bgc: "rgba(41, 128, 185, 0.08)"
    }
  ];

  return (
    <div className="slide" style={{ padding: "1.5rem 4rem", background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)" }}>
      <AccentShapes />
      <div className="slide-header" style={{ marginBottom: "1.5rem", textAlign: "center" }}>
        <h1 className="slide-title" style={{ fontSize: "2.8rem", color: "#1a5276", marginBottom: "0.3rem" }}>
          <em>Enterprise Architecture</em>
        </h1>
        <p className="slide-subtitle" style={{ fontSize: "1.2rem", color: "#e67e22", fontWeight: 700 }}>
          Mengapa Business Architecture (BA) Begitu Krusial?
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1.8fr", gap: "2rem", flex: 1 }}>
        {/* Left Side: EA Tower */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div>
            <h2 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#1e293b", marginBottom: "0.3rem" }}>Arsitektur Enterprise (EA)</h2>
            <p style={{ fontSize: "0.9rem", color: "#64748b", margin: 0, lineHeight: 1.5 }}>
              EA adalah blueprint utama perusahaan. <strong style={{ color: "#1a5276" }}>Business Architecture</strong> adalah lapisan tertinggi yang memandu seluruh keputusan desain di bawahnya.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginTop: "0.5rem" }}>
            {eaLayers.map((layer, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.1 }}
                style={{
                  background: layer.active ? "linear-gradient(135deg, #1a5276 0%, #2980b9 100%)" : "#fff",
                  border: layer.active ? "none" : "1px solid #e2e8f0",
                  padding: "1rem 1.5rem",
                  borderRadius: "16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "1.2rem",
                  boxShadow: layer.active ? "0 10px 25px rgba(26, 82, 118, 0.2)" : "0 4px 10px rgba(0,0,0,0.02)",
                  transform: layer.active ? "scale(1.05) translateX(10px)" : "none",
                  zIndex: layer.active ? 10 : 1,
                  position: "relative"
                }}
              >
                {layer.active && (
                  <div style={{ position: "absolute", right: "-12px", top: "50%", transform: "translateY(-50%)", width: "24px", height: "24px", background: "#f8fafc", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "-4px 0 10px rgba(0,0,0,0.05)" }}>
                    <ArrowRight size={14} color="#1a5276" strokeWidth={3} />
                  </div>
                )}
                <div style={{ color: layer.active ? "#fff" : layer.color, opacity: layer.active ? 1 : 0.7 }}>
                  {layer.icon}
                </div>
                <div>
                  <div style={{ fontSize: layer.active ? "1.2rem" : "1.1rem", fontWeight: layer.active ? 800 : 700, color: layer.active ? "#fff" : "#334155" }}>
                    {layer.title}
                  </div>
                  <div style={{ fontSize: layer.active ? "0.9rem" : "0.85rem", color: layer.active ? "rgba(255,255,255,0.8)" : "#94a3b8", marginTop: "4px" }}>
                    {layer.sub}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side: Reasons Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.2rem" }}>
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              style={{
                background: "#fff",
                borderRadius: "20px",
                padding: "1.2rem",
                boxShadow: "0 8px 30px rgba(0,0,0,0.04)",
                border: "1px solid #f1f5f9",
                display: "flex",
                flexDirection: "column"
              }}
            >
              <div style={{
                background: reason.bgc,
                width: "45px",
                height: "45px",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: reason.color,
                marginBottom: "0.8rem"
              }}>
                {reason.icon}
              </div>
              <h3 style={{ fontSize: "1rem", fontWeight: 800, color: "#1e293b", marginBottom: "0.5rem", lineHeight: 1.2 }}>
                {reason.title}
              </h3>
              <p style={{ fontSize: "0.9rem", color: "#475569", lineHeight: 1.5, margin: 0 }}>
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <SlideFooter />
    </div>
  );
}

/* =============================
   SLIDE: BA & PERFORMANCE MANAGEMENT
   ============================= */
function SlideBAPerformance() {
  return (
    <div className="slide" style={{ padding: "1.5rem 3rem 1.5rem", background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)" }}>
      <AccentShapes />
      <div className="slide-header" style={{ marginBottom: "1.5rem", textAlign: "center" }}>
        <h1 className="slide-title" style={{ fontSize: "2.6rem", color: "#1a5276" }}>
          <em>Business Architecture & Manajemen Kinerja</em>
        </h1>
        <p className="slide-subtitle" style={{ fontSize: "1rem", color: "#64748b", fontWeight: 600 }}>BA sebagai fondasi struktural Corporate Performance Management</p>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1.2rem" }}>
        {/* Core Premise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ display: "flex", gap: "0", background: "linear-gradient(135deg, #1a5276 0%, #0e6655 100%)", borderRadius: "24px", padding: "1.5rem 3rem", color: "white", alignItems: "center", boxShadow: "0 15px 35px rgba(26, 82, 118, 0.2)", position: "relative", overflow: "hidden" }}
        >
          <div style={{ position: "absolute", top: 0, right: 0, width: "300px", height: "300px", background: "rgba(255,255,255,0.05)", borderRadius: "50%", transform: "translate(100px, -150px)" }}></div>
          <div style={{ flex: 1, borderRight: "1px solid rgba(255,255,255,0.15)", paddingRight: "2.5rem" }}>
            <div style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "2px", color: "rgba(255,255,255,0.6)", marginBottom: "0.6rem", fontWeight: 800 }}>Business Architecture (BA)</div>
            <div style={{ fontSize: "1.3rem", fontWeight: 700, display: "flex", alignItems: "center", gap: "1rem" }}>
              <div style={{ background: "rgba(255,255,255,0.1)", padding: "10px", borderRadius: "12px", display: "flex" }}><Layers size={24} /></div>
              <span>Struktur bagaimana organisasi bekerja</span>
            </div>
          </div>
          <div style={{ padding: "0 2rem", fontSize: "1.5rem", fontWeight: 300, color: "rgba(255,255,255,0.4)" }}>=</div>
          <div style={{ flex: 1, paddingLeft: "1.5rem" }}>
            <div style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "2px", color: "rgba(255,255,255,0.6)", marginBottom: "0.6rem", fontWeight: 800 }}>Manajemen Kinerja (BSC)</div>
            <div style={{ fontSize: "1.3rem", fontWeight: 700, display: "flex", alignItems: "center", gap: "1rem" }}>
              <div style={{ background: "rgba(255,255,255,0.1)", padding: "10px", borderRadius: "12px", display: "flex" }}><Target size={24} color="#facc15" /></div>
              <span>Alat ukur apakah struktur menghasilkan nilai</span>
            </div>
          </div>
        </motion.div>

        {/* 3 Columns for Details */}
        <div style={{ display: "flex", gap: "1.5rem", flex: 1 }}>
          {/* Kolom 1: Objek vs KPI */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            style={{ flex: 1, background: "#fff", borderRadius: "20px", padding: "1.5rem", border: "1px solid #f1f5f9", boxShadow: "0 4px 20px rgba(0,0,0,0.02)", display: "flex", flexDirection: "column" }}
          >
            <h3 style={{ fontSize: "1.1rem", color: "#1a5276", marginBottom: "1.2rem", display: "flex", alignItems: "center", gap: "10px", borderBottom: "1px solid #f1f5f9", paddingBottom: "0.8rem", fontWeight: 800 }}>
              <GitBranch size={22} /> Objek Ukur (BA)
            </h3>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.8rem" }}>
              {[
                { obj: "Value Stream", kpi: "KPI End-to-end (Nilai)" },
                { obj: "Capability", kpi: "KPI Kinerja & Maturity" },
                { obj: "Proses", kpi: "KPI SLA / Quality / Speed" },
                { obj: "Produk/Layanan", kpi: "KPI Customer Satisfaction" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.8rem 1rem", background: "#f8fafc", borderRadius: "12px", border: "1px solid #f1f5f9" }}>
                  <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#334155" }}>{item.obj}</span>
                  <ArrowRight size={14} color="#94a3b8" />
                  <span style={{ fontSize: "0.8rem", color: "#1e293b", fontWeight: 800 }}>{item.kpi}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Kolom 2: Strategy Map & Execution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{ flex: 1, background: "#fff", borderRadius: "20px", padding: "1.5rem", border: "1px solid #f1f5f9", boxShadow: "0 4px 20px rgba(0,0,0,0.02)", display: "flex", flexDirection: "column" }}
          >
            <h3 style={{ fontSize: "1.1rem", color: "#1a5276", marginBottom: "1.2rem", display: "flex", alignItems: "center", gap: "10px", borderBottom: "1px solid #f1f5f9", paddingBottom: "0.8rem", fontWeight: 800 }}>
              <TrendingUp size={22} /> Eksekusi Strategi
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", flex: 1, justifyContent: "center" }}>
              <div style={{ padding: "1rem", background: "#fff1f2", borderRadius: "14px", borderLeft: "5px solid #e11d48", boxShadow: "0 2px 8px rgba(225,29,72,0.05)" }}>
                <strong style={{ color: "#334155", fontSize: "0.9rem" }}>Strategic Objective (BSC)</strong> <br />
                <span style={{ color: "#64748b", fontSize: "0.8rem", fontWeight: 500 }}>Ditempatkan pada Capability terkait sebagai target capaian strategis.</span>
              </div>
              <div style={{ padding: "1rem", background: "#eff6ff", borderRadius: "14px", borderLeft: "5px solid #2563eb", boxShadow: "0 2px 8px rgba(37,99,235,0.05)" }}>
                <strong style={{ color: "#334155", fontSize: "0.9rem" }}>Strategic Initiative (BSC)</strong> <br />
                <span style={{ color: "#64748b", fontSize: "0.8rem", fontWeight: 500 }}>Program spesifik untuk meningkatkan atau membangun Capability baru.</span>
              </div>
              <div style={{ padding: "1rem", background: "#f0fdf4", borderRadius: "14px", borderLeft: "5px solid #16a34a", boxShadow: "0 2px 8px rgba(22,163,74,0.05)" }}>
                <strong style={{ color: "#334155", fontSize: "0.9rem" }}>KPI & Target (BSC)</strong> <br />
                <span style={{ color: "#64748b", fontSize: "0.8rem", fontWeight: 500 }}>Parameter ukur yang melekat langsung pada proses & Value Stream.</span>
              </div>
            </div>
          </motion.div>

          {/* Kolom 3: Menghindari Silo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            style={{ flex: 1, background: "#fff", borderRadius: "20px", padding: "1.5rem", border: "1px solid #f1f5f9", boxShadow: "0 4px 20px rgba(0,0,0,0.02)", display: "flex", flexDirection: "column" }}
          >
            <h3 style={{ fontSize: "1.1rem", color: "#1a5276", marginBottom: "1.2rem", display: "flex", alignItems: "center", gap: "10px", borderBottom: "1px solid #f1f5f9", paddingBottom: "0.8rem", fontWeight: 800 }}>
              <Users size={22} /> Eliminasi Silo KPI
            </h3>
            <p style={{ fontSize: "0.85rem", color: "#475569", marginBottom: "1.2rem", lineHeight: 1.6, flex: 1 }}>
              Tanpa pondasi BA, KPI sering terpusat pada unit kerja (Silo), memicu konflik antar departemen. BA memastikan KPI selaras dengan aliran nilai (Value Stream).
            </p>
            <div style={{ background: "#fef2f2", padding: "1rem", borderRadius: "14px", marginBottom: "0.8rem", border: "1px solid #fee2e2" }}>
              <div style={{ fontWeight: 800, color: "#991b1b", marginBottom: "0.4rem", display: "flex", alignItems: "center", gap: "6px", fontSize: "0.75rem", textTransform: "uppercase" }}><X size={14} strokeWidth={3} /> Tanpa EA/BA</div>
              <div style={{ color: "#7f1d1d", fontSize: "0.8rem", fontWeight: 600 }}>Cenderung mengukur Fungsi Individu (Silo)</div>
            </div>
            <div style={{ background: "#f0fdf4", padding: "1rem", borderRadius: "14px", border: "1px solid #dcfce7" }}>
              <div style={{ fontWeight: 800, color: "#166534", marginBottom: "0.4rem", display: "flex", alignItems: "center", gap: "6px", fontSize: "0.75rem", textTransform: "uppercase" }}><Check size={14} strokeWidth={3} /> Dengan EA/BA</div>
              <div style={{ color: "#14532d", fontSize: "0.8rem", fontWeight: 700 }}>Mengukur Kolaborasi Lintas Fungsi (Value)</div>
            </div>
          </motion.div>
        </div>
      </div>
      <SlideFooter />
    </div>
  );
}

/* =============================
   SLIDE: PROGRAM KERJA & HUBUNGAN KPI
   ============================= */
function SlideProgramKerja() {
  return (
    <div className="slide" style={{ padding: "1.5rem 3.5rem", background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)" }}>
      <AccentShapes />
      <div className="slide-header" style={{ marginBottom: "1rem", textAlign: "center" }}>
        <h1 className="slide-title" style={{ fontSize: "2.8rem", color: "#1a5276", marginBottom: "0.2rem" }}>
          <em>Program Kerja, KPI & Strategic Objective</em>
        </h1>
        <p className="slide-subtitle" style={{ fontSize: "1.2rem", color: "#64748b", fontWeight: 600 }}>
          Hubungan Tiga Elemen Kunci Manajemen Kinerja
        </p>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1rem" }}>
        {/* Main Visual: Hub & Spoke */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 60px 1.2fr 60px 1fr", alignItems: "stretch", gap: "0", flex: 1 }}>

          {/* LEFT: Program Kerja Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            style={{
              background: "#fff",
              borderRadius: "20px",
              padding: "1.5rem",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 10px 35px rgba(0,0,0,0.04)",
              border: "1px solid #f1f5f9",
              position: "relative",
              overflow: "hidden"
            }}
          >
            <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "6px", background: "#e67e22" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
              <div style={{
                background: "rgba(230, 126, 34, 0.1)",
                color: "#e67e22",
                width: "50px",
                height: "50px",
                borderRadius: "14px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <FileText size={24} />
              </div>
              <div>
                <div style={{ fontSize: "0.8rem", fontWeight: 900, color: "#e67e22", letterSpacing: "1px", textTransform: "uppercase" }}>THE HOW</div>
                <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#1e293b", margin: 0 }}>Program Kerja</h3>
              </div>
            </div>
            <p style={{ fontSize: "0.95rem", color: "#475569", lineHeight: 1.5, margin: "0 0 1rem 0" }}>
              <strong>Cara mencapai</strong> Strategic Objective. Berupa rencana aksi terstruktur yang memuat aktivitas, timeline, output, dan penanggung jawab.
            </p>
            <div style={{ marginTop: "auto" }}>
              <div style={{ fontSize: "0.75rem", fontWeight: 800, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "0.5rem" }}>Contoh</div>
              {["Replanting 500 Ha di Q2", "Workshop BSC untuk Divisi", "Audit Internal Unit Kebun"].map((ex, j) => (
                <div key={j} style={{
                  background: "rgba(230, 126, 34, 0.06)",
                  border: "1px solid rgba(230, 126, 34, 0.15)",
                  padding: "8px 12px",
                  borderRadius: "10px",
                  fontSize: "0.9rem",
                  color: "#e67e22",
                  fontWeight: 700,
                  marginBottom: "0.4rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px"
                }}>
                  <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#e67e22", flexShrink: 0 }} />
                  {ex}
                </div>
              ))}
            </div>
          </motion.div>

          {/* LEFT ARROW */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "0.4rem" }}>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}
            >
              <span style={{ fontSize: "0.7rem", color: "#e67e22", fontWeight: 800, textTransform: "uppercase", letterSpacing: "1px", writingMode: "vertical-rl", transform: "rotate(180deg)" }}>Cara</span>
              <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "linear-gradient(135deg, #fef3c7, #fde68a)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(230, 126, 34, 0.15)" }}>
                <ArrowRight size={18} color="#e67e22" strokeWidth={2.5} style={{ transform: "rotate(180deg)" }} />
              </div>
            </motion.div>
          </div>

          {/* CENTER: Strategic Objective */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 }}
            style={{
              background: "linear-gradient(135deg, #1a5276 0%, #2980b9 100%)",
              borderRadius: "24px",
              padding: "1.5rem 1.5rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 15px 40px rgba(26, 82, 118, 0.25)",
              color: "#fff",
              textAlign: "center",
              position: "relative",
              overflow: "hidden"
            }}
          >
            <div style={{ position: "absolute", top: "-50px", right: "-50px", width: "150px", height: "150px", borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />
            <div style={{ position: "absolute", bottom: "-30px", left: "-30px", width: "100px", height: "100px", borderRadius: "50%", background: "rgba(255,255,255,0.03)" }} />

            <div style={{
              background: "rgba(255,255,255,0.15)",
              width: "60px",
              height: "60px",
              borderRadius: "18px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1rem"
            }}>
              <Target size={32} />
            </div>
            <div style={{ fontSize: "0.8rem", fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", opacity: 0.7, marginBottom: "0.4rem" }}>THE WHAT</div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 900, margin: "0 0 0.8rem 0", lineHeight: 1.2 }}>Strategic Objective</h2>
            <p style={{ fontSize: "1rem", fontWeight: 500, lineHeight: 1.5, opacity: 0.9, margin: 0 }}>
              Tujuan strategis organisasi yang ditetapkan dalam RJPP & RKAP — menjadi arah utama seluruh aktivitas
            </p>
            <div style={{ marginTop: "1rem", display: "flex", flexWrap: "wrap", gap: "0.5rem", justifyContent: "center" }}>
              {["Revenue Growth 15%", "Cost Efficiency", "Market Expansion"].map((ex, j) => (
                <span key={j} style={{ background: "rgba(255,255,255,0.15)", padding: "6px 12px", borderRadius: "8px", fontSize: "0.85rem", fontWeight: 700 }}>{ex}</span>
              ))}
            </div>
          </motion.div>

          {/* RIGHT ARROW */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "0.4rem" }}>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}
            >
              <span style={{ fontSize: "0.7rem", color: "#0e6655", fontWeight: 800, textTransform: "uppercase", letterSpacing: "1px", writingMode: "vertical-rl", transform: "rotate(180deg)" }}>Ukuran</span>
              <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "linear-gradient(135deg, #d1fae5, #a7f3d0)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(14, 102, 85, 0.15)" }}>
                <ArrowRight size={18} color="#0e6655" strokeWidth={2.5} />
              </div>
            </motion.div>
          </div>

          {/* RIGHT: KPI Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            style={{
              background: "#fff",
              borderRadius: "20px",
              padding: "1.5rem",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 10px 35px rgba(0,0,0,0.04)",
              border: "1px solid #f1f5f9",
              position: "relative",
              overflow: "hidden"
            }}
          >
            <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "6px", background: "#0e6655" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
              <div style={{
                background: "rgba(14, 102, 85, 0.1)",
                color: "#0e6655",
                width: "50px",
                height: "50px",
                borderRadius: "14px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <BarChart3 size={24} />
              </div>
              <div>
                <div style={{ fontSize: "0.8rem", fontWeight: 900, color: "#0e6655", letterSpacing: "1px", textTransform: "uppercase" }}>THE MEASURE</div>
                <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#1e293b", margin: 0 }}>Scorecard & KPI</h3>
              </div>
            </div>
            <p style={{ fontSize: "0.95rem", color: "#475569", lineHeight: 1.5, margin: "0 0 1rem 0" }}>
              <strong>Ukuran keberhasilan</strong> pencapaian Strategic Objective. Disebut <strong style={{ color: "#1a5276" }}>Scorecard</strong> di Korporat/Divisi — dan <strong style={{ color: "#0e6655" }}>KPI</strong> Individu.
            </p>
            <div style={{ marginTop: "auto" }}>
              <div style={{ fontSize: "0.75rem", fontWeight: 800, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "0.5rem" }}>Contoh</div>
              {[
                { level: "Scorecard", ex: "Rev. Growth ≥ 15% (Korp)" },
                { level: "Scorecard", ex: "HPP/Ton ≤ RpX Juta (Dir)" },
                { level: "KPI", ex: "TBS/Ha ≥ 20 Ton (Individu)" }
              ].map((item, j) => (
                <div key={j} style={{
                  background: "rgba(14, 102, 85, 0.06)",
                  border: "1px solid rgba(14, 102, 85, 0.15)",
                  padding: "8px 12px",
                  borderRadius: "10px",
                  fontSize: "0.85rem",
                  color: "#0e6655",
                  fontWeight: 700,
                  marginBottom: "0.4rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px"
                }}>
                  <span style={{ fontSize: "0.65rem", fontWeight: 900, background: item.level === "KPI" ? "#0e6655" : "#1a5276", color: "#fff", padding: "2px 6px", borderRadius: "6px", flexShrink: 0 }}>{item.level}</span>
                  {item.ex}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Insight Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          style={{
            background: "linear-gradient(135deg, #1a5276 0%, #0e6655 100%)",
            color: "#fff",
            padding: "1rem 2rem",
            borderRadius: "16px",
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            boxShadow: "0 10px 30px rgba(14, 102, 85, 0.2)"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
            <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <TrendingUp size={20} />
            </div>
            <div style={{ fontSize: "1rem", fontWeight: 800 }}>Prinsip Utama</div>
          </div>
          <div style={{ height: "30px", width: "1px", background: "rgba(255,255,255,0.2)" }} />
          <div style={{ fontSize: "1rem", fontWeight: 600, lineHeight: 1.4 }}>
            <strong>Program Kerja</strong> adalah <em>cara</em> untuk mencapai Strategic Objective. <strong>Scorecard</strong> (Korporat–Divisi) dan <strong>KPI</strong> (Individu) adalah <em>ukuran keberhasilannya</em>.
          </div>
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
    <div className="slide" style={{ padding: "1.5rem 3.5rem 1.5rem", background: "linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)" }}>
      <AccentShapes />
      <div className="slide-header" style={{ marginBottom: "2rem", textAlign: "center" }}>
        <h1 className="slide-title" style={{ fontSize: "2.8rem", color: "#1a5276" }}>
          <em>Model Kinerja APMS 2026</em>
        </h1>
        <p className="slide-subtitle" style={{ fontSize: "1.1rem", color: "#64748b", fontWeight: 600 }}>End-to-end: KPI → Score → Rating → Outcomes</p>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.5rem", justifyContent: "center" }}>
        {/* STEP 1: Score Inputs */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} style={{ display: "flex", gap: "1.2rem", justifyContent: "center", alignItems: "center" }}>
          {[
            { label: "KPI Individu", sub: "Performance Score", pct: "70%", color: "#1a5276", grad: "linear-gradient(135deg, #1a5276 0%, #2980b9 100%)" },
            { label: "ONE / Mission / Innovation", sub: "Behavior Score", pct: "20%", color: "#0e6655", grad: "linear-gradient(135deg, #0e6655 0%, #16a34a 100%)" },
            { label: "KPI Bersama", sub: "Corporate Score", pct: "10%", color: "#d97706", grad: "linear-gradient(135deg, #d97706 0%, #f59e0b 100%)" }
          ].map((item, i) => (
            <React.Fragment key={i}>
              {i > 0 && <Plus size={24} color="#94a3b8" strokeWidth={3} />}
              <div style={{
                background: item.grad,
                color: "#fff",
                borderRadius: "20px",
                padding: "1.5rem 1.2rem",
                textAlign: "center",
                minWidth: "220px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                border: "1px solid rgba(255,255,255,0.1)"
              }}>
                <div style={{ fontSize: "1rem", fontWeight: 800, marginBottom: "0.4rem" }}>{item.label}</div>
                <div style={{ fontSize: "0.75rem", opacity: 0.8, marginBottom: "0.8rem", fontWeight: 600 }}>{item.sub}</div>
                <div style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.2)", padding: "4px 16px", borderRadius: "12px", display: "inline-block", fontSize: "1.1rem", fontWeight: 900 }}>{item.pct}</div>
              </div>
            </React.Fragment>
          ))}
        </motion.div>

        {/* Arrow Down */}
        <div style={{ display: "flex", justifyContent: "center", padding: "0.3rem 0" }}>
          <motion.div initial={{ y: -5 }} animate={{ y: 5 }} transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }} style={{ background: "#fff", padding: "6px", borderRadius: "50%", boxShadow: "0 4px 12px rgba(0,0,0,0.05)", border: "1px solid #f1f5f9" }}>
            <ArrowDown size={18} color="#1a5276" strokeWidth={3} />
          </motion.div>
        </div>

        {/* STEP 2: Individual Score */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ background: "#fff", border: "2px solid #1a5276", color: "#1a5276", padding: "1rem 3.5rem", borderRadius: "20px", textAlign: "center", boxShadow: "0 15px 40px rgba(26,82,118,0.1)", position: "relative" }}>
            <div style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: "0.4rem" }}>Individual Score (Final)</div>
            <div style={{ fontSize: "0.85rem", color: "#64748b", fontWeight: 600 }}>Bobot Terkalibrasi (Sum of 3 Inputs)</div>
          </div>
        </motion.div>

        {/* Arrow Down */}
        <div style={{ display: "flex", justifyContent: "center", padding: "0.3rem 0" }}>
          <div style={{ background: "#fff", padding: "6px", borderRadius: "50%", boxShadow: "0 4px 12px rgba(0,0,0,0.05)", border: "1px solid #f1f5f9" }}>
            <ArrowDown size={18} color="#7c3aed" strokeWidth={3} />
          </div>
        </div>

        {/* STEP 3: Rating Distribusi */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ background: "linear-gradient(135deg, #6d28d9 0%, #7c3aed 100%)", color: "#fff", padding: "1rem 2.5rem", borderRadius: "16px", textAlign: "center", boxShadow: "0 10px 30px rgba(109,40,217,0.2)" }}>
            <div style={{ fontSize: "1.2rem", fontWeight: 800, marginBottom: "0.4rem" }}>Rating Distribusi → Performance Grade</div>
            <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.8)", fontWeight: 700, letterSpacing: "1px" }}>OUTSTANDING · EXCEED · MEET · BELOW · POOR</div>
          </div>
        </motion.div>

        {/* Arrow Down */}
        <div style={{ display: "flex", justifyContent: "center", padding: "0.3rem 0" }}>
          <div style={{ background: "#fff", padding: "6px", borderRadius: "50%", boxShadow: "0 4px 12px rgba(0,0,0,0.05)", border: "1px solid #f1f5f9" }}>
            <ArrowDown size={20} color="#0e6655" strokeWidth={3} />
          </div>
        </div>

        {/* STEP 4: Outcomes */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} style={{ display: "flex", gap: "1.5rem", justifyContent: "center" }}>
          {[
            { label: "Merit Increment", sub: "Salary Adjustment", color: "#0e6655", icon: <Award size={22} /> },
            { label: "Performance Bonus", sub: "Annual Incentives", color: "#d97706", icon: <TrendingUp size={22} /> },
            { label: "Talent Pool & IDP", sub: "Career Path", color: "#1a5276", icon: <Users size={22} /> }
          ].map((item, i) => (
            <div key={i} style={{
              background: "#fff",
              borderRadius: "18px",
              padding: "1rem 1.5rem",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              boxShadow: "0 4px 15px rgba(0,0,0,0.04)",
              border: `1px solid ${item.color}22`
            }}>
              <div style={{ background: `${item.color}15`, color: item.color, padding: "10px", borderRadius: "12px", display: "flex" }}>{item.icon}</div>
              <div>
                <div style={{ fontSize: "0.9rem", fontWeight: 800, color: "#1e293b" }}>{item.label}</div>
                <div style={{ fontSize: "0.75rem", color: "#64748b", fontWeight: 600 }}>{item.sub}</div>
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
    { aspek: "Cascading Strategy", y2025: "Parsial — tidak terintegrasi end-to-end", y2026: "Strategy Map → Scorecard → KPI Individu (full cascade)", icon: <GitBranch size={16} /> },
    { aspek: "Komponen Score", y2025: "KPI Bersama (30%) + KPI Utama (70%)", y2026: "Performance (70%) + Behavior (20%) + Corp (10%)", icon: <Layers size={16} /> },
    { aspek: "Behavior Assess.", y2025: "Tidak ada secara sistemik", y2026: "ONE / Mission / Innovation — Semesterly", icon: <Users size={16} /> },
    { aspek: "Rating Scale", y2025: "2 tier: ≥90 dan <90", y2026: "5 tier: Outstanding → Poor (Global Standard)", icon: <Target size={16} /> },
    { aspek: "Rating Threshold", y2025: "Ambang Tunggal 90", y2026: "Diferensiasi: 110+ / 100 / 90 / 70 / <70", icon: <BarChart3 size={16} /> },
    { aspek: "Rating Distribusi", y2025: "Terbatas & Manual", y2026: "Curve control via Priority Pool per Direktorat", icon: <Settings size={16} /> },
    { aspek: "Teknologi", y2025: "AGHRIS", y2026: "APMS 2.0 — Fully Digital & Integrated", icon: <Settings size={16} /> },
    { aspek: "Review Cycle", y2025: "Annual Review", y2026: "Quarterly RBK + Monthly Check-ins", icon: <FileText size={16} /> }
  ];

  return (
    <div className="slide" style={{ padding: "1.5rem 3.5rem 1.5rem", background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)" }}>
      <AccentShapes />
      <div className="slide-header" style={{ marginBottom: "1.2rem", textAlign: "left" }}>
        <h1 className="slide-title" style={{ fontSize: "2.6rem", color: "#1a5276", borderLeft: "8px solid #0e6655", paddingLeft: "1.5rem" }}>
          Perubahan Kunci:
          <span style={{ color: "#0e6655", fontSize: "2rem", display: "block" }}>Paradigma Manajemen Kinerja 2026</span>
        </h1>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", background: "#fff", borderRadius: "24px", overflow: "hidden", border: "1px solid #e2e8f0", boxShadow: "0 10px 30px rgba(0,0,0,0.03)" }}>
        <div style={{ display: "flex", background: "#1e293b", color: "#fff", padding: "15px 25px", fontSize: "0.85rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "1px" }}>
          <div style={{ width: "200px" }}>Aspek Perubahan</div>
          <div style={{ flex: 1 }}>Eksisting (2025)</div>
          <div style={{ flex: 1, color: "#10b981" }}>Model APMS (2026)</div>
        </div>
        <div style={{ flex: 1, overflowY: "auto" }}>
          {changes.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              style={{
                display: "flex",
                padding: "12px 25px",
                borderBottom: "1px solid #f1f5f9",
                background: i % 2 === 0 ? "#fff" : "#fafbfc",
                alignItems: "center",
                minHeight: "60px"
              }}
            >
              <div style={{ width: "200px", display: "flex", alignItems: "center", gap: "10px", fontWeight: 800, color: "#1e293b", fontSize: "0.85rem" }}>
                <span style={{ color: "#0e6655" }}>{item.icon}</span>
                {item.aspek}
              </div>
              <div style={{ flex: 1, fontSize: "0.82rem", color: "#64748b", paddingRight: "20px", fontStyle: "italic" }}>{item.y2025}</div>
              <div style={{ flex: 1, fontSize: "0.85rem", color: "#1a5276", fontWeight: 900, paddingRight: "10px" }}>{item.y2026}</div>
            </motion.div>
          ))}
        </div>
      </div>
      <SlideFooter />
    </div>
  );
}

/* =============================
   NEW: SMKTI KONSEP 2026
   ============================= */
function SlideSMKTIKonsep() {
  const points = [
    "Aplikasi SMKTI sebagai sistem manajemen kinerja karyawan terintegrasi dan single source of truth",
    "Peralihan paradigma dari annual appraisal menjadi continuous & data-driven performance management",
    "Sasaran kinerja individu berlandaskan RKAP Korporasi dan termonitor secara bulanan (monthly review)",
    "Kontrol kualitas dan konsistensi penilaian kinerja diperkuat melalui skema verifikasi & validasi berjenjang",
    "Hasil kinerja menjadi basis terintegrasi untuk rating distribusi, reward & merit increment, serta coaching"
  ];

  const prinsip = ["OBJEKTIF", "AKUNTABEL", "TRANSPARAN", "TERUKUR", "BERKEADILAN"];

  const aspek = [
    { n: "01", t: "Kinerja Keuangan", s: "(Finance)" },
    { n: "02", t: "Kinerja Operasional", s: "(Internal Business Process)" },
    { n: "03", t: "Layanan Pelanggan", s: "(Customer Focus)" },
    { n: "04", t: "Pengembangan", s: "(Learning & Growth)" }
  ];

  return (
    <div className="slide" style={{ padding: "1.5rem 3.5rem 1.5rem", background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)" }}>
      <AccentShapes />
      <div className="slide-header" style={{ marginBottom: "1.2rem", textAlign: "left" }}>
        <h1 className="slide-title" style={{ fontSize: "2.4rem", color: "#1a5276", borderLeft: "8px solid #0e6655", paddingLeft: "1.5rem" }}>
          Konsep Sistem Manajemen Kinerja Karyawan <br />
          <span style={{ color: "#0e6655" }}>Terintegrasi (SMKTI) 2026</span>
        </h1>
      </div>

      <div style={{ flex: 1, display: "flex", gap: "1.5rem", overflow: "hidden" }}>
        {/* Critical Points */}
        <div style={{ flex: 1.2, display: "flex", flexDirection: "column", gap: "0.8rem" }}>
          <div style={{ fontSize: "1rem", fontWeight: 900, color: "#0e6655", letterSpacing: "1px", marginBottom: "0.4rem", fontStyle: "italic" }}>CRITICAL POINTS :</div>
          {points.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              style={{ display: "flex", gap: "12px", background: "#fff", padding: "12px 18px", borderRadius: "16px", border: "1px solid #e2e8f0", boxShadow: "0 4px 6px rgba(0,0,0,0.02)" }}
            >
              <div style={{ background: "#0e6655", color: "#fff", width: "24px", height: "24px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", fontWeight: 900, flexShrink: 0 }}>{i + 1}</div>
              <div style={{ fontSize: "0.82rem", color: "#334155", fontWeight: 700, lineHeight: 1.4 }}>{p}</div>
            </motion.div>
          ))}
        </div>

        {/* Principles & Aspects */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1rem" }}>
          {/* Prinsip */}
          <div style={{ background: "#1e293b", borderRadius: "24px", padding: "1.2rem", color: "#fff" }}>
            <div style={{ fontSize: "0.9rem", fontWeight: 900, color: "#94a3b8", marginBottom: "1rem", textAlign: "center", textTransform: "uppercase" }}>Prinsip Kerja SMKTI</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", justifyContent: "center" }}>
              {prinsip.map((p, i) => (
                <div key={i} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", padding: "10px 15px", borderRadius: "12px", fontSize: "0.75rem", fontWeight: 800 }}>{p}</div>
              ))}
            </div>
          </div>

          {/* Aspek */}
          <div style={{ flex: 1, background: "#fff", border: "1px solid #e2e8f0", borderRadius: "24px", padding: "1.2rem" }}>
            <div style={{ fontSize: "0.9rem", fontWeight: 900, color: "#0e6655", marginBottom: "1rem" }}>ASPEK SASARAN :</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.8rem" }}>
              {aspek.map((a, i) => (
                <div key={i} style={{ background: "#f8fafc", padding: "12px", borderRadius: "16px", border: "1px solid #f1f5f9" }}>
                  <div style={{ color: "#0e6655", fontWeight: 900, fontSize: "0.75rem", marginBottom: "4px" }}>#{a.n}</div>
                  <div style={{ color: "#1e293b", fontWeight: 800, fontSize: "0.8rem" }}>{a.t}</div>
                  <div style={{ color: "#64748b", fontWeight: 600, fontSize: "0.7rem" }}>{a.s}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Key Message Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ marginTop: "1.5rem", background: "linear-gradient(90deg, #0e6655 0%, #1a5276 100%)", padding: "1rem 2rem", borderRadius: "18px", color: "#fff", textAlign: "center", boxShadow: "0 10px 25px rgba(14,102,85,0.15)" }}
      >
        <span style={{ fontSize: "1rem", fontWeight: 900, fontStyle: "italic" }}>
          "Perdir SMKTI 2026 memposisikan manajemen kinerja sebagai instrument governance & value creation, bukan sekadar administrasi SDM."
        </span>
      </motion.div>

      <SlideFooter />
    </div>
  );
}

/* =============================
   NEW: SMKTI KOMPARASI #1
   ============================= */
function SlideSMKTIKomparasi1() {
  const data = [
    { no: 1, k: "Adm", a: "Status Regulasi", d25: "Berlaku 28 Mei 2025", d26: "Akan menggantikan 2025", c: "Mencabut eksplisit DIR/PER/05/2025", imp: "low" },
    { no: 2, k: "Adm", a: "Struktur Regulasi", d25: "Fokus operasional & teknis", d26: "Lebih sistematis: Umum s.d Peralihan", c: "Lebih terstruktur normatif", imp: "low" },
    { no: 3, k: "Adm", a: "Timeline Pelaksanaan", d25: "Diatur dalam lampiran", d26: "Diatur + kewenangan perubahan Holding", c: "Lebih sentralistik", imp: "low" },
    { no: 4, k: "Filo", a: "Filosofi Dasar", d25: "Performance control", d26: "Performance governance + meritocracy", c: "Strategic & governance-driven", imp: "high" },
    { no: 5, k: "Filo", a: "Pendekatan Sistem", d25: "SMKTI berbasis aplikasi", d26: "Berbasis aplikasi + audit trail", c: "Kuat di tata kelola & kontrol", imp: "high" },
    { no: 6, k: "Filo", a: "Cascading KPI", d25: "Diatur teknis", d26: "Tegas: Fully & Partial Cascade", c: "Memperjelas filosofi alignment", imp: "med" },
    { no: 7, k: "Filo", a: "Penetapan Sasaran", d25: "Berbasis RKAP & indikator", d26: "Tambahan 4 perspektif BSC", c: "Balanced Scorecard approach", imp: "med" },
    { no: 8, k: "Gov", a: "Process Owner", d25: "Belum eksplisit", d26: "SDM sebagai process owner", c: "Memperjelas akuntabilitas", imp: "high" },
    { no: 9, k: "Gov", a: "Audit Trail Sistem", d25: "Tidak ditegaskan", d26: "Wajib menyediakan audit trail", c: "Penguatan kontrol & governance", imp: "high" },
    { no: 10, k: "Gov", a: "Tinjauan Berkala (TKB)", d25: "Ada", d26: "Kewajiban triwulan", c: "Lebih rigid monitoring", imp: "high" },
    { no: 11, k: "Gov", a: "Validasi SDM", d25: "Tidak ditegaskan kuat", d26: "Validasi Triwulan IV oleh SDM", c: "Tambahan layer kontrol", imp: "high" },
  ];

  return (
    <div className="slide" style={{ padding: "1.5rem 2.5rem 1.5rem", background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)" }}>
      <AccentShapes />
      <div className="slide-header" style={{ marginBottom: "1rem", textAlign: "center" }}>
        <h1 className="slide-title" style={{ fontSize: "2.6rem", color: "#1a5276" }}>Komparasi #1: Perdir SMKTI</h1>
        <p className="slide-subtitle" style={{ fontSize: "1.1rem", color: "#64748b", fontWeight: 600 }}>Perubahan Regulasi 2025 vs Draft 2026</p>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", background: "#fff", borderRadius: "24px", overflow: "hidden", border: "1px solid #e2e8f0", boxShadow: "0 15px 45px rgba(0,0,0,0.04)" }}>
        <div style={{ display: "flex", background: "#1e293b", color: "#fff", padding: "15px 20px", fontSize: "0.9rem", fontWeight: 900, textTransform: "uppercase", textAlign: "center", alignItems: "center" }}>
          <div style={{ width: "45px" }}>No</div>
          <div style={{ width: "100px" }}>Klaster</div>
          <div style={{ width: "220px", textAlign: "left" }}>Aspek</div>
          <div style={{ flex: 1 }}>DIR/PER/5/2025</div>
          <div style={{ flex: 1 }}>Draft Perdir 2026</div>
          <div style={{ flex: 1 }}>Perubahan Utama</div>
        </div>
        <div style={{ flex: 1, overflowY: "auto" }}>
          {data.map((row, i) => (
            <div key={i} style={{ display: "flex", padding: "12px 20px", borderBottom: "1px solid #f1f5f9", fontSize: "0.88rem", alignItems: "center", minHeight: "60px", background: i % 2 === 0 ? "#fff" : "#fafbfc" }}>
              <div style={{ width: "45px", textAlign: "center", fontWeight: 800, color: "#94a3b8" }}>{row.no}</div>
              <div style={{ width: "100px", textAlign: "center", fontWeight: 900, color: "#1a5276", fontSize: "0.85rem" }}>{row.k}</div>
              <div style={{ width: "220px", fontWeight: 900, color: "#1e293b", lineHeight: 1.3 }}>{row.a}</div>
              <div style={{ flex: 1, padding: "0 15px", color: "#64748b", fontStyle: "italic", lineHeight: 1.4 }}>{row.d25}</div>
              <div style={{ flex: 1, padding: "0 15px", color: "#1a5276", fontWeight: 900, lineHeight: 1.4 }}>{row.d26}</div>
              <div style={{ flex: 1, padding: "0 15px", color: row.imp === "high" ? "#dc2626" : (row.imp === "med" ? "#d97706" : "#059669"), fontWeight: 800, lineHeight: 1.3 }}>{row.c}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div style={{ display: "flex", gap: "2rem", marginTop: "1rem", fontSize: "0.85rem", fontWeight: 900, justifyContent: "center", background: "rgba(248, 250, 252, 0.8)", padding: "10px", borderRadius: "12px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}><div style={{ width: "12px", height: "12px", background: "#dc2626", borderRadius: "50%" }}></div> High Impact Change</div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}><div style={{ width: "12px", height: "12px", background: "#d97706", borderRadius: "50%" }}></div> Medium Impact Change</div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}><div style={{ width: "12px", height: "12px", background: "#059669", borderRadius: "50%" }}></div> Low Impact Change</div>
      </div>
      <SlideFooter />
    </div>
  );
}

/* =============================
   NEW: SMKTI KOMPARASI #2
   ============================= */
function SlideSMKTIKomparasi2() {
  const data = [
    { no: 12, k: "Gov", a: "Kewenangan Komite", d25: "Evaluasi & Koreksi", d26: "Dapat meminta perbaikan evidence", c: "Penguatan fungsi kalibrasi", imp: "high" },
    { no: 13, k: "Gov", a: "Penetapan Hasil", d25: "SK oleh Pejabat Berwenang", d26: "SK / mekanisme lain dari Holding", c: "Fleksibilitas administratif", imp: "high" },
    { no: 14, k: "Gov", a: "Ketentuan Peralihan", d25: "Tidak mencabut 2025", d26: "Tegas mencabut 2023, 2024, 2025", c: "Konsolidasi regulasi", imp: "high" },
    { no: 15, k: "Rating", a: "Distribusi Rating", d25: "Guided distribution", d26: "Guided + top stop min-max", c: "Lebih terkendali", imp: "med" },
    { no: 16, k: "Rating", a: "Priority Pool", d25: "Ada dalam lampiran", d26: "Diperjelas berbasis level jabatan", c: "Klarifikasi mekanisme", imp: "med" },
    { no: 17, k: "Remun", a: "Merit Increment", d25: "Diatur detail", d26: "Tetap diatur detail", c: "Substansi relatif sama", imp: "low" },
    { no: 18, k: "Remun", a: "Person Grade", d25: "Diatur", d26: "Diatur + Grade Ceiling", c: "Konsistensi ceiling", imp: "low" },
    { no: 19, k: "Remun", a: "PhDP", d25: "Diatur detail", d26: "Tetap diatur detail", c: "Tidak berubah signifikan", imp: "low" },
    { no: 20, k: "Khusus", a: "Rangkap Jabatan", d25: "Ada", d26: "Diperjelas proporsionalitas", c: "Lebih sistematis", imp: "med" },
    { no: 21, k: "Khusus", a: "Mutasi/Rotasi", d25: "Ada", d26: "Diperjelas metode proporsional", c: "Lebih eksplisit", imp: "med" },
    { no: 22, k: "Khusus", a: "Assignment Non SMK", d25: "Ada", d26: "Mekanisme konversi & validasi", c: "Harmonisasi antar entitas", imp: "med" },
    { no: 23, k: "Fair", a: "Keberatan/Sanggahan", d25: "Tidak diatur eksplisit", d26: "Diatur khusus Pasal 25", c: "Fairness & Due Process", imp: "high" },
  ];

  return (
    <div className="slide" style={{ padding: "1.5rem 2.5rem 1.5rem", background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)" }}>
      <AccentShapes />
      <div className="slide-header" style={{ marginBottom: "1rem", textAlign: "center" }}>
        <h1 className="slide-title" style={{ fontSize: "2.6rem", color: "#1a5276" }}>Komparasi #2: Perdir SMKTI</h1>
        <p className="slide-subtitle" style={{ fontSize: "1.1rem", color: "#64748b", fontWeight: 600 }}>Governance, Remunerasi & Kondisi Khusus</p>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", background: "#fff", borderRadius: "24px", overflow: "hidden", border: "1px solid #e2e8f0", boxShadow: "0 15px 45px rgba(0,0,0,0.04)" }}>
        <div style={{ display: "flex", background: "#1e293b", color: "#fff", padding: "15px 20px", fontSize: "0.9rem", fontWeight: 900, textTransform: "uppercase", textAlign: "center", alignItems: "center" }}>
          <div style={{ width: "45px" }}>No</div>
          <div style={{ width: "100px" }}>Klaster</div>
          <div style={{ width: "220px", textAlign: "left" }}>Aspek</div>
          <div style={{ flex: 1 }}>DIR/PER/5/2025</div>
          <div style={{ flex: 1 }}>Draft Perdir 2026</div>
          <div style={{ flex: 1 }}>Perubahan Utama</div>
        </div>
        <div style={{ flex: 1, overflowY: "auto" }}>
          {data.map((row, i) => (
            <div key={i} style={{ display: "flex", padding: "12px 20px", borderBottom: "1px solid #f1f5f9", fontSize: "0.88rem", alignItems: "center", minHeight: "60px", background: i % 2 === 0 ? "#fff" : "#fafbfc" }}>
              <div style={{ width: "45px", textAlign: "center", fontWeight: 800, color: "#94a3b8" }}>{row.no}</div>
              <div style={{ width: "100px", textAlign: "center", fontWeight: 900, color: "#1a5276", fontSize: "0.85rem" }}>{row.k}</div>
              <div style={{ width: "220px", fontWeight: 900, color: "#1e293b", lineHeight: 1.3 }}>{row.a}</div>
              <div style={{ flex: 1, padding: "0 15px", color: "#64748b", fontStyle: "italic", lineHeight: 1.4 }}>{row.d25}</div>
              <div style={{ flex: 1, padding: "0 15px", color: "#1a5276", fontWeight: 900, lineHeight: 1.4 }}>{row.d26}</div>
              <div style={{ flex: 1, padding: "0 15px", color: row.imp === "high" ? "#dc2626" : (row.imp === "med" ? "#d97706" : "#059669"), fontWeight: 800, lineHeight: 1.3 }}>{row.c}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div style={{ display: "flex", gap: "2rem", marginTop: "1rem", fontSize: "0.85rem", fontWeight: 900, justifyContent: "center", background: "rgba(248, 250, 252, 0.8)", padding: "10px", borderRadius: "12px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}><div style={{ width: "12px", height: "12px", background: "#dc2626", borderRadius: "50%" }}></div> High Impact Change</div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}><div style={{ width: "12px", height: "12px", background: "#d97706", borderRadius: "50%" }}></div> Medium Impact Change</div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}><div style={{ width: "12px", height: "12px", background: "#059669", borderRadius: "50%" }}></div> Low Impact Change</div>
      </div>
      <SlideFooter />
    </div>
  );
}

/* =============================
   NEW: SMKTI TERMINOLOGI
   ============================= */
function SlideSMKTITerminologi() {
  const terms = [
    { t: "Audit Trail", d: "Rekam jejak digital atas seluruh perubahan data, input, validasi, dan keputusan dalam sistem." },
    { t: "Grade Ceiling", d: "Batas maksimum kenaikan person grade dalam satu jabatan atau tidak melebihi job grade." },
    { t: "Guided Distribution", d: "Pedoman distribusi rating agar proporsional dan tidak terjadi inflasi nilai." },
    { t: "IDP (Individual Dev Plan)", d: "Rencana pengembangan individu yang disusun berdasarkan aspirasi karir dan hasil penilaian." },
    { t: "Priority Pool", d: "Pengelompokkan karyawan berdasarkan level jabatan dalam penentuan rating distribusi kinerja." },
    { t: "Process Owner", d: "Unit/fungsi yang bertanggung jawab atas desain, kebijakan, dan pengendalian proses SMKTI." },
    { t: "Rating Kinerja", d: "Klasifikasi hasil penilaian: Outstanding (RD-1) s.d. Poor (RD-5)." },
    { t: "System Owner", d: "Unit/fungsi yang bertanggung jawab atas pengelolaan dan keamanan sistem aplikasi SMKTI." },
  ];

  return (
    <div className="slide" style={{ padding: "1.5rem 4rem 1.5rem", background: "linear-gradient(135deg, #1e293b 0%, #334155 100%)", color: "#fff" }}>
      <AccentShapes />
      <div className="slide-header" style={{ marginBottom: "1.5rem", textAlign: "left" }}>
        <h1 className="slide-title" style={{ fontSize: "2.8rem", color: "#fff" }}>
          <em>Terminologi Utama</em>
        </h1>
        <p className="slide-subtitle" style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.6)", fontWeight: 600 }}>Kamus Definisi Draft Perdir SMKTI 2026</p>
      </div>

      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", overflowY: "auto", paddingRight: "1rem" }}>
        {terms.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "20px", padding: "1.2rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}
          >
            <div style={{ color: "#10b981", fontWeight: 900, fontSize: "1.1rem", letterSpacing: "1px" }}>{item.t}</div>
            <div style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.85rem", fontWeight: 600, lineHeight: 1.5 }}>{item.d}</div>
          </motion.div>
        ))}
      </div>
      <SlideFooter />
    </div>
  );
}


/* =============================
   SLIDE 3: FRAMEWORK 2022–2025
   ============================= */
function SlideFramework2022() {
  return (
    <div className="slide" style={{ padding: "1.2rem 3.5rem", background: "#f8fafc" }}>
      <AccentShapes />
      <div className="slide-header" style={{ marginBottom: "0.8rem", textAlign: "center" }}>
        <div style={{ display: "inline-block", background: "rgba(225, 29, 72, 0.1)", color: "#e11d48", padding: "4px 16px", borderRadius: "20px", fontSize: "0.8rem", fontWeight: 800, marginBottom: "0.4rem", border: "1px solid rgba(225,29,72,0.2)" }}>EXISTING SYSTEM</div>
        <h1 className="slide-title" style={{ fontSize: "2.5rem", color: "#1a5276", marginBottom: "0.2rem" }}>
          <em>Performance Framework 2022 – 2025</em>
        </h1>
        <p className="slide-subtitle" style={{ fontSize: "1rem", color: "#64748b", fontWeight: 600 }}>Struktur Pengelolaan Kinerja Berbasis AGHRIS Legacy</p>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1rem" }}>
        {/* ROW 1: INPUT & KPI TYPE */}
        <div style={{ display: "flex", gap: "1rem" }}>
          {/* Inputs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ flex: 1, background: "#fff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "1rem 1.5rem", boxShadow: "0 4px 15px rgba(0,0,0,0.02)" }}
          >
            <div style={{ fontSize: "0.8rem", fontWeight: 850, color: "#1a5276", marginBottom: "0.8rem", textTransform: "uppercase", letterSpacing: "1px", borderBottom: "1px solid #f1f5f9", paddingBottom: "0.5rem" }}>Strategic Foundation</div>
            <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "12px", overflow: "hidden" }}>
              <div style={{ background: "#334155", color: "#fff", padding: "8px", textAlign: "center", fontSize: "0.8rem", fontWeight: 800 }}>External & Internal Inputs</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", padding: "1rem", justifyContent: "center" }}>
                {["Kontrak Manajemen", "RJPP / RKAP", "Top-Down Roadmap", "Aspirasi Pemegang Saham"].map((item, i) => (
                  <span key={i} style={{ background: "#fff", color: "#334155", fontSize: "0.75rem", padding: "6px 14px", borderRadius: "10px", fontWeight: 700, border: "1px solid #e2e8f0", boxShadow: "0 2px 4px rgba(0,0,0,0.03)" }}>{item}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* KPI Types */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ flex: 1, background: "#fff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "1rem 1.5rem", boxShadow: "0 4px 15px rgba(0,0,0,0.02)" }}
          >
            <div style={{ fontSize: "0.8rem", fontWeight: 850, color: "#1a5276", marginBottom: "0.8rem", textTransform: "uppercase", letterSpacing: "1px", borderBottom: "1px solid #f1f5f9", paddingBottom: "0.5rem" }}>KPI Configuration</div>
            <div style={{ display: "flex", gap: "1rem", height: "calc(100% - 35px)" }}>
              <div style={{ flex: 1, background: "#fff", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "0.8rem", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                <div style={{ fontSize: "0.75rem", fontWeight: 900, color: "#1a5276", textAlign: "center", borderBottom: "1px solid #f1f5f9", paddingBottom: "0.4rem" }}>KPI BERSAMA (30%)</div>
                <div style={{ background: "rgba(26, 82, 118, 0.1)", color: "#1a5276", padding: "8px", borderRadius: "8px", fontSize: "0.7rem", fontWeight: 800, textAlign: "center" }}>Kolegial / Unit</div>
              </div>
              <div style={{ flex: 1, background: "linear-gradient(135deg, #1a5276 0%, #0e7490 100%)", borderRadius: "14px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "1rem", boxShadow: "0 8px 20px rgba(26,82,118,0.15)" }}>
                <div style={{ color: "#fff", fontWeight: 900, fontSize: "1.1rem", textAlign: "center", lineHeight: 1.2 }}>KPI UTAMA</div>
                <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.75rem", fontWeight: 600, marginTop: "4px" }}>(70%)</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ROW 2: OPERATIONAL PROCESS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "20px", padding: "1.2rem 1.5rem", boxShadow: "0 10px 30px rgba(0,0,0,0.03)" }}
        >
          <div style={{ fontSize: "0.8rem", fontWeight: 850, color: "#1a5276", marginBottom: "0.8rem", textTransform: "uppercase", letterSpacing: "1px", borderBottom: "1px solid #f1f5f9", paddingBottom: "0.5rem" }}>Performance Cycle lifecycle</div>
          <div style={{ display: "flex", gap: "0.8rem", alignItems: "center" }}>
            {[
              { title: "Planing", desc: "Sasaran Kerja Pegawai" },
              { title: "Execution", desc: "Input Realisasi KPI" },
              { title: "Coaching", desc: "Review & Feedback" },
              { title: "Evaluation", desc: "Final Score Calcs" }
            ].map((step, i) => (
              <React.Fragment key={i}>
                <div style={{ flex: 1, background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "0.8rem 0.6rem", textAlign: "center", boxShadow: "0 4px 12px rgba(0,0,0,0.02)" }}>
                  <div style={{ color: "#1a5276", fontSize: "0.9rem", fontWeight: 900, marginBottom: "0.2rem" }}>{step.title}</div>
                  <div style={{ color: "#64748b", fontSize: "0.75rem", lineHeight: 1.3, fontWeight: 600 }}>{step.desc}</div>
                </div>
                {i < 3 && <div style={{ display: "flex", alignItems: "center" }}><ArrowRight size={20} color="#cbd5e1" strokeWidth={3} /></div>}
              </React.Fragment>
            ))}
            <div style={{ background: "#1a5276", color: "#fff", border: "3px solid #fff", borderRadius: "12px", padding: "0.8rem", fontSize: "0.7rem", fontWeight: 800, textAlign: "center", boxShadow: "0 10px 25px rgba(26,82,118,0.2)", minWidth: "100px" }}>
              PLATFORM <br /> <span style={{ fontSize: "0.9rem" }}>AGHRIS</span>
            </div>
          </div>
        </motion.div>

        {/* ROW 3: OUTCOMES */}
        <div style={{ display: "flex", gap: "1rem" }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            style={{ flex: 1.5, background: "#fff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "1rem 1.5rem", display: "flex", flexDirection: "column", boxShadow: "0 4px 15px rgba(0,0,0,0.02)" }}
          >
            <div style={{ fontSize: "0.8rem", fontWeight: 850, color: "#1a5276", marginBottom: "0.8rem", textTransform: "uppercase", letterSpacing: "1px", borderBottom: "1px solid #f1f5f9", paddingBottom: "0.5rem" }}>Outcome Structure</div>
            <div style={{ flex: 1, display: "flex", gap: "1rem", alignItems: "center" }}>
              <div style={{ flex: 1, background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "0.8rem", boxShadow: "inset 0 2px 10px rgba(0,0,0,0.02)" }}>
                <div style={{ textAlign: "center", fontSize: "0.8rem", fontWeight: 900, color: "#d97706", marginBottom: "0.6rem", textTransform: "uppercase", letterSpacing: "1px" }}>Scale Kinerja</div>
                <div style={{ display: "flex", justifyContent: "space-around", gap: "0.4rem" }}>
                  {["O", "E", "M", "B", "P"].map((r, i) => (
                    <div key={i} style={{ fontSize: "0.8rem", color: i < 3 ? "#059669" : "#dc2626", fontWeight: 900, background: "#fff", width: "28px", height: "28px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "6px", border: "1px solid #e2e8f0" }}>{r}</div>
                  ))}
                </div>
              </div>
              <ArrowRight size={24} color="#cbd5e1" strokeWidth={3} />
              <div style={{ flex: 1, background: "linear-gradient(135deg, #1e293b 0%, #334155 100%)", color: "#fff", padding: "1rem 0.8rem", borderRadius: "12px", textAlign: "center", fontWeight: 900, fontSize: "1rem", boxShadow: "0 10px 25px rgba(30,41,59,0.2)" }}>
                FINAL RATING <br /> <span style={{ fontSize: "0.75rem", opacity: 0.7 }}>(Single Dimension)</span>
              </div>
            </div>
          </motion.div>

          {/* Merit */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            style={{ flex: 1, background: "rgba(217, 119, 6, 0.05)", border: "1px dashed rgba(217, 119, 6, 0.3)", borderRadius: "16px", padding: "1rem", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}
          >
            <div style={{ background: "rgba(217, 119, 6, 0.1)", padding: "8px", borderRadius: "50%", marginBottom: "0.6rem" }}><Award size={24} color="#d97706" /></div>
            <div style={{ color: "#d97706", fontSize: "0.8rem", fontWeight: 850, textTransform: "uppercase", marginBottom: "0.5rem", letterSpacing: "1px" }}>Reward & Remuneration</div>
            <div style={{ fontSize: "0.8rem", color: "#92400e", fontWeight: 700, lineHeight: 1.4 }}>
              Merit Increment based on <br /> Performance Result Only
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
    <div className="slide" style={{ padding: "1.2rem 3.5rem 1.2rem", background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)" }}>
      <AccentShapes />
      <div className="slide-header" style={{ marginBottom: "1rem", textAlign: "center" }}>
        <h1 className="slide-title" style={{ fontSize: "2.4rem", color: "#1a5276", marginBottom: "0.2rem" }}>
          <em>Performance Framework 2026 (Opsi A)</em>
        </h1>
        <p className="slide-subtitle" style={{ fontSize: "0.95rem", color: "#64748b", fontWeight: 600 }}>Arsitektur Kinerja: Target Cascading → Unified Score → Rating Distribution</p>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.6rem" }}>

        {/* --- LAYER 1: STRATEGIC PLANNING --- */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "18px", padding: "1rem 2rem", position: "relative", boxShadow: "0 4px 15px rgba(0,0,0,0.02)" }}
        >
          <div style={{ position: "absolute", top: -12, left: 40, background: "#1a5276", color: "#fff", padding: "3px 18px", borderRadius: "20px", fontSize: "0.7rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "1px" }}>
            STRATEGIC PLANNING LAYER
          </div>

          <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
            {/* Input Group */}
            <div style={{ flex: 0.8, background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "12px", overflow: "hidden" }}>
              <div style={{ background: "#334155", color: "#fff", fontSize: "0.8rem", padding: "8px", textAlign: "center", fontWeight: 800 }}>Strategic Inputs</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", padding: "0.8rem", justifyContent: "center" }}>
                {["RKAP", "RJPP", "CM", "Roadmap"].map((item, i) => (
                  <span key={i} style={{ background: "#fff", color: "#334155", fontSize: "0.65rem", padding: "3px 10px", borderRadius: "8px", fontWeight: 700, border: "1px solid #e2e8f0" }}>{item}</span>
                ))}
              </div>
            </div>

            <ChevronRight size={28} color="#cbd5e1" />

            {/* Cascade Group */}
            <div style={{ flex: 1.2, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              {[
                { label: "Corporate", color: "#1a5276" },
                { label: "Direktorat", color: "#1f618d" },
                { label: "Unit / Divisi", color: "#2980b9" }
              ].map((lvl, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                  <div style={{ flex: 1, border: `1.5px solid ${lvl.color}`, color: lvl.color, padding: "6px 14px", borderRadius: "30px", textAlign: "center", fontSize: "0.75rem", fontWeight: 800 }}>Strategy Map {lvl.label}</div>
                  <div style={{ width: "20px", borderBottom: `2px dashed ${lvl.color}44` }}></div>
                  <div style={{ flex: 1, background: lvl.color, color: "#fff", padding: "6px 14px", borderRadius: "30px", textAlign: "center", fontSize: "0.75rem", fontWeight: 800, boxShadow: `0 4px 10px ${lvl.color}33` }}>Scorecard {lvl.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* --- CONNECTOR 1 --- */}
        <div style={{ display: "flex", justifyContent: "center", margin: "-0.5rem 0", zIndex: 5 }}>
          <div style={{ background: "#fff", padding: "4px", borderRadius: "50%", boxShadow: "0 4px 12px rgba(0,0,0,0.05)", border: "1px solid #e2e8f0" }}>
            <ArrowDown size={16} color="#1a5276" strokeWidth={3} />
          </div>
        </div>

        {/* --- LAYER 2: OPERATIONAL PROCESS --- */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "18px", padding: "1rem 2rem", position: "relative", boxShadow: "0 4px 15px rgba(0,0,0,0.02)" }}
        >
          <div style={{ position: "absolute", top: -12, left: 40, background: "#64748b", color: "#fff", padding: "3px 18px", borderRadius: "20px", fontSize: "0.7rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "1px" }}>
            OPERATIONAL PROCESS LAYER
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}>
            <div style={{ display: "flex", gap: "0.8rem", width: "100%", position: "relative" }}>
              {[
                { title: "Planning", desc: "Sasaran Kerja Pegawai" },
                { title: "Monitoring", desc: "Real-time Realisasi" },
                { title: "Coaching", desc: "Bimbingan & Feedback" },
                { title: "Review", desc: "Penilaian Akhir" }
              ].map((step, i) => (
                <div key={i} style={{ flex: 1, background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "14px", padding: "10px", textAlign: "center", position: "relative" }}>
                  <div style={{ background: "#1a5276", color: "#fff", fontSize: "0.75rem", fontWeight: 800, padding: "3px 8px", borderRadius: "6px", marginBottom: "6px", display: "inline-block" }}>{step.title}</div>
                  <div style={{ fontSize: "0.7rem", color: "#64748b", fontWeight: 600, lineHeight: 1.3 }}>{step.desc}</div>
                  {i < 3 && <div style={{ position: "absolute", right: "-12px", top: "50%", transform: "translateY(-50%)", zIndex: 10 }}><ChevronRight size={16} color="#cbd5e1" strokeWidth={3} /></div>}
                </div>
              ))}
              <div style={{ position: "absolute", right: "-8px", top: "-22px", background: "#0e6655", color: "#fff", border: "3px solid #fff", borderRadius: "10px", padding: "6px 12px", fontSize: "0.7rem", fontWeight: 850, boxShadow: "0 6px 15px rgba(14,102,85,0.2)", transform: "rotate(2deg)" }}>
                PLATFORM <br /> <span style={{ fontSize: "0.9rem" }}>APMS 2.0</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- CONNECTOR 2 --- */}
        <div style={{ display: "flex", justifyContent: "center", margin: "-0.5rem 0", zIndex: 5 }}>
          <div style={{ background: "#fff", padding: "4px", borderRadius: "50%", boxShadow: "0 4px 12px rgba(0,0,0,0.05)", border: "1px solid #e2e8f0" }}>
            <ArrowDown size={16} color="#1a5276" strokeWidth={3} />
          </div>
        </div>

        {/* --- LAYER 3: EVALUATION & OUTCOMES --- */}
        <div style={{ display: "flex", gap: "1.2rem", flex: 1 }}>
          <div style={{ flex: 1.4, display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "18px", padding: "1rem", boxShadow: "0 4px 15px rgba(0,0,0,0.02)" }}>
              <div style={{ textAlign: "center", fontSize: "0.75rem", fontWeight: 850, color: "#1a5276", borderBottom: "1px solid #f1f5f9", paddingBottom: "0.6rem", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "0.8rem" }}>Score Inputs Calculation</div>

              <div style={{ display: "flex", gap: "1rem", alignItems: "center", justifyContent: "center" }}>
                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "8px" }}>
                  <div style={{ background: "#0e6655", color: "#fff", padding: "8px", borderRadius: "10px", fontSize: "0.75rem", fontWeight: 800, textAlign: "center", boxShadow: "0 4px 10px rgba(14,102,85,0.2)" }}>Behavior (20%)</div>
                  <div style={{ background: "#d97706", color: "#fff", padding: "8px", borderRadius: "10px", fontSize: "0.75rem", fontWeight: 800, textAlign: "center", boxShadow: "0 4px 10px rgba(217,119,6,0.2)" }}>Corp Score (10%)</div>
                </div>
                <Plus size={20} color="#cbd5e1" strokeWidth={3} />
                <div style={{ flex: 1.2 }}>
                  <div style={{ background: "linear-gradient(135deg, #1a5276 0%, #1d4ed8 100%)", color: "#fff", padding: "1.2rem 0.8rem", borderRadius: "14px", fontSize: "0.9rem", fontWeight: 900, textAlign: "center", boxShadow: "0 8px 20px rgba(26,82,118,0.2)" }}>Individual Performance <br /> (70%)</div>
                </div>
              </div>
            </div>

            <div style={{ flex: 1, background: "#fff", border: "2px solid #1a5276", borderRadius: "18px", padding: "0.8rem 1.2rem", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ textAlign: "center", fontSize: "0.85rem", fontWeight: 900, color: "#1a5276", marginBottom: "0.6rem", textTransform: "uppercase", letterSpacing: "1px" }}>Rating Distribusi (Calibration)</div>
              <div style={{ display: "flex", gap: "1.2rem", alignItems: "center" }}>
                <div style={{ flex: 1, background: "#f8fafc", padding: "8px", borderRadius: "12px", border: "1px dashed #cbd5e1", textAlign: "center", fontSize: "0.75rem", fontWeight: 700, color: "#64748b" }}>Rating Score <br /> 0 – 120</div>
                <ArrowRight size={20} color="#cbd5e1" strokeWidth={3} />
                <div style={{ flex: 1.5, background: "linear-gradient(135deg, #4338ca 0%, #6366f1 100%)", color: "#fff", padding: "8px 18px", borderRadius: "40px", fontSize: "0.85rem", fontWeight: 900, textAlign: "center", boxShadow: "0 8px 20px rgba(67,56,202,0.2)" }}>PERFORMANCE RATING</div>
              </div>
            </div>
          </div>

          <div style={{ width: "260px", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            <div style={{ flex: 1, background: "#fff", border: "1px solid #e2e8f0", borderRadius: "18px", padding: "1rem", display: "flex", flexDirection: "column", gap: "0.8rem", boxShadow: "0 10px 25px rgba(0,0,0,0.03)" }}>
              <div style={{ background: "#d97706", color: "#fff", fontSize: "0.75rem", fontWeight: 900, padding: "6px", borderRadius: "8px", textAlign: "center", textTransform: "uppercase" }}>REWARD LINKAGE</div>
              <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "0.8rem", textAlign: "center" }}>
                <div style={{ color: "#334155", fontSize: "0.75rem", fontWeight: 800, marginBottom: "0.6rem" }}>Calibration Result</div>
                <div style={{ background: "#fff", border: "1.5px solid #fbd38d", color: "#d97706", padding: "8px", borderRadius: "30px", fontSize: "0.85rem", fontWeight: 900, boxShadow: "0 4px 10px rgba(217,119,6,0.1)" }}>Merit & Bonus</div>
              </div>
            </div>

            <div style={{ background: "linear-gradient(135deg, #0e6655 0%, #166534 100%)", color: "#fff", borderRadius: "18px", padding: "1.2rem", textAlign: "center", boxShadow: "0 10px 25px rgba(14,102,85,0.2)" }}>
              <div style={{ background: "rgba(255,255,255,0.15)", width: "42px", height: "42px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 0.8rem" }}><TrendingUp size={24} /></div>
              <div style={{ fontSize: "1rem", fontWeight: 900 }}>TALENT POOL</div>
              <div style={{ fontSize: "0.75rem", opacity: 0.8, marginTop: "0.3rem", fontWeight: 500 }}>Priority IDP & Promotion</div>
            </div>
          </div>
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
    <div className="slide" style={{ padding: "1.2rem 3.5rem 1.2rem", background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)" }}>
      <AccentShapes />
      <div className="slide-header" style={{ marginBottom: "1rem", textAlign: "center" }}>
        <h1 className="slide-title" style={{ fontSize: "2.4rem", color: "#1a5276", marginBottom: "0.2rem" }}>
          <em>Performance Framework 2026 (Opsi B)</em>
        </h1>
        <p className="slide-subtitle" style={{ fontSize: "0.95rem", color: "#64748b", fontWeight: 600 }}>Arsitektur Kinerja: Target Cascading → Unified Score → Direct Performance Rating</p>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
        {/* --- LAYER 1: STRATEGIC PLANNING --- */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "18px", padding: "1rem 2rem", position: "relative", boxShadow: "0 4px 15px rgba(0,0,0,0.02)" }}
        >
          <div style={{ position: "absolute", top: -12, left: 40, background: "#1a5276", color: "#fff", padding: "3px 18px", borderRadius: "20px", fontSize: "0.7rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "1px" }}>
            STRATEGIC PLANNING LAYER
          </div>

          <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
            {/* Input Group */}
            <div style={{ flex: 0.8, background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "12px", overflow: "hidden" }}>
              <div style={{ background: "#334155", color: "#fff", fontSize: "0.8rem", padding: "8px", textAlign: "center", fontWeight: 800 }}>Strategic Inputs</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", padding: "0.8rem", justifyContent: "center" }}>
                {["RKAP", "RJPP", "CM", "Roadmap"].map((item, i) => (
                  <span key={i} style={{ background: "#fff", color: "#334155", fontSize: "0.65rem", padding: "3px 10px", borderRadius: "8px", fontWeight: 700, border: "1px solid #e2e8f0" }}>{item}</span>
                ))}
              </div>
            </div>

            <ChevronRight size={28} color="#cbd5e1" />

            {/* Cascade Group */}
            <div style={{ flex: 1.2, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              {[
                { label: "Corporate", color: "#1a5276" },
                { label: "Direktorat", color: "#1f618d" },
                { label: "Unit / Divisi", color: "#2980b9" }
              ].map((lvl, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                  <div style={{ flex: 1, border: `1.5px solid ${lvl.color}`, color: lvl.color, padding: "6px 14px", borderRadius: "30px", textAlign: "center", fontSize: "0.75rem", fontWeight: 800 }}>Strategy Map {lvl.label}</div>
                  <div style={{ width: "20px", borderBottom: `2.5px dashed ${lvl.color}44` }}></div>
                  <div style={{ flex: 1, background: lvl.color, color: "#fff", padding: "6px 14px", borderRadius: "30px", textAlign: "center", fontSize: "0.75rem", fontWeight: 800, boxShadow: `0 4px 10px ${lvl.color}33` }}>Scorecard {lvl.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* --- CONNECTOR 1 --- */}
        <div style={{ display: "flex", justifyContent: "center", margin: "-0.5rem 0", zIndex: 5 }}>
          <div style={{ background: "#fff", padding: "4px", borderRadius: "50%", boxShadow: "0 4px 12px rgba(0,0,0,0.05)", border: "1px solid #e2e8f0" }}>
            <ArrowDown size={16} color="#1a5276" strokeWidth={3} />
          </div>
        </div>

        {/* --- LAYER 2: OPERATIONAL PROCESS --- */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "18px", padding: "1rem 2rem", position: "relative", boxShadow: "0 4px 15px rgba(0,0,0,0.02)" }}
        >
          <div style={{ position: "absolute", top: -12, left: 40, background: "#64748b", color: "#fff", padding: "3px 18px", borderRadius: "20px", fontSize: "0.7rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "1px" }}>
            OPERATIONAL PROCESS LAYER
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}>
            <div style={{ display: "flex", gap: "0.8rem", width: "100%", position: "relative" }}>
              {[
                { title: "Planning", desc: "Sasaran Kerja Pegawai" },
                { title: "Monitoring", desc: "Real-time Realisasi" },
                { title: "Coaching", desc: "Bimbingan & Feedback" },
                { title: "Review", desc: "Penilaian Akhir" }
              ].map((step, i) => (
                <div key={i} style={{ flex: 1, background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "14px", padding: "10px", textAlign: "center", position: "relative" }}>
                  <div style={{ background: "#1a5276", color: "#fff", fontSize: "0.75rem", fontWeight: 800, padding: "3px 8px", borderRadius: "6px", marginBottom: "6px", display: "inline-block" }}>{step.title}</div>
                  <div style={{ fontSize: "0.7rem", color: "#64748b", fontWeight: 600, lineHeight: 1.3 }}>{step.desc}</div>
                  {i < 3 && <div style={{ position: "absolute", right: "-12px", top: "50%", transform: "translateY(-50%)", zIndex: 10 }}><ChevronRight size={16} color="#cbd5e1" strokeWidth={3} /></div>}
                </div>
              ))}
              <div style={{ position: "absolute", right: "-8px", top: "-22px", background: "#0e6655", color: "#fff", border: "3px solid #fff", borderRadius: "10px", padding: "6px 12px", fontSize: "0.7rem", fontWeight: 850, boxShadow: "0 6px 15px rgba(14,102,85,0.2)", transform: "rotate(2deg)" }}>
                PLATFORM <br /> <span style={{ fontSize: "0.9rem" }}>APMS 2.0</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- CONNECTOR 2 --- */}
        <div style={{ display: "flex", justifyContent: "center", margin: "-0.5rem 0", zIndex: 5 }}>
          <div style={{ background: "#fff", padding: "4px", borderRadius: "50%", boxShadow: "0 4px 12px rgba(0,0,0,0.05)", border: "1px solid #e2e8f0" }}>
            <ArrowDown size={16} color="#1a5276" strokeWidth={3} />
          </div>
        </div>

        {/* --- LAYER 3: EVALUATION & OUTCOMES --- */}
        <div style={{ display: "flex", gap: "1.2rem", flex: 1 }}>
          <div style={{ flex: 1.4, display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "18px", padding: "1rem", boxShadow: "0 4px 15px rgba(0,0,0,0.02)" }}>
              <div style={{ textAlign: "center", fontSize: "0.75rem", fontWeight: 850, color: "#1a5276", borderBottom: "1px solid #f1f5f9", paddingBottom: "0.6rem", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "0.8rem" }}>Score Inputs Calculation</div>

              <div style={{ display: "flex", gap: "1rem", alignItems: "center", justifyContent: "center" }}>
                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "8px" }}>
                  <div style={{ background: "#0e6655", color: "#fff", padding: "8px", borderRadius: "10px", fontSize: "0.75rem", fontWeight: 800, textAlign: "center", boxShadow: "0 4px 10px rgba(14,102,85,0.2)" }}>Behavior (20%)</div>
                  <div style={{ background: "#d97706", color: "#fff", padding: "10px", borderRadius: "12px", fontSize: "0.75rem", fontWeight: 800, textAlign: "center", boxShadow: "0 4px 10px rgba(217,119,6,0.2)" }}>Corp Score (10%)</div>
                </div>
                <Plus size={20} color="#cbd5e1" strokeWidth={3} />
                <div style={{ flex: 1.2 }}>
                  <div style={{ background: "linear-gradient(135deg, #1a5276 0%, #1d4ed8 100%)", color: "#fff", padding: "1.2rem 0.8rem", borderRadius: "14px", fontSize: "0.9rem", fontWeight: 900, textAlign: "center", boxShadow: "0 8px 20px rgba(26,82,118,0.2)" }}>Individual Performance <br /> (70%)</div>
                </div>
              </div>
            </div>

            <div style={{ flex: 1, background: "#fff", border: "2px solid #1a5276", borderRadius: "18px", padding: "0.8rem 1.2rem", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ textAlign: "center", fontSize: "0.85rem", fontWeight: 900, color: "#1a5276", marginBottom: "0.6rem", textTransform: "uppercase", letterSpacing: "1px" }}>Rating Score System</div>
              <div style={{ display: "flex", gap: "1.2rem", alignItems: "center" }}>
                <div style={{ flex: 1, background: "#f8fafc", padding: "8px", borderRadius: "12px", border: "1px dashed #cbd5e1", textAlign: "center", fontSize: "0.75rem", fontWeight: 700, color: "#64748b" }}>Score Range <br /> 0 – 120</div>
                <ArrowRight size={20} color="#cbd5e1" strokeWidth={3} />
                <div style={{ flex: 1.5, background: "linear-gradient(135deg, #059669 0%, #10b981 100%)", color: "#fff", padding: "8px 18px", borderRadius: "40px", fontSize: "0.85rem", fontWeight: 900, textAlign: "center", boxShadow: "0 8px 20px rgba(5,150,105,0.2)" }}>DIRECT RATING</div>
              </div>
            </div>
          </div>

          <div style={{ width: "260px", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            <div style={{ flex: 1, background: "#fff", border: "1px solid #e2e8f0", borderRadius: "18px", padding: "1rem", display: "flex", flexDirection: "column", gap: "0.8rem", boxShadow: "0 10px 25px rgba(0,0,0,0.03)" }}>
              <div style={{ background: "#d97706", color: "#fff", fontSize: "0.75rem", fontWeight: 900, padding: "6px", borderRadius: "8px", textAlign: "center", textTransform: "uppercase" }}>REWARD LINKAGE</div>
              <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "0.8rem", textAlign: "center" }}>
                <div style={{ color: "#334155", fontSize: "0.75rem", fontWeight: 800, marginBottom: "0.6rem" }}>Score Result</div>
                <div style={{ background: "#fff", border: "1.5px solid #fbd38d", color: "#d97706", padding: "8px", borderRadius: "30px", fontSize: "0.85rem", fontWeight: 900, boxShadow: "0 4px 10px rgba(217,119,6,0.1)" }}>Single Merit</div>
              </div>
            </div>

            <div style={{ background: "linear-gradient(135deg, #1e293b 0%, #334155 100%)", color: "#fff", borderRadius: "18px", padding: "1.2rem", textAlign: "center", boxShadow: "0 10px 25px rgba(30,41,59,0.2)" }}>
              <div style={{ background: "rgba(255,255,255,0.15)", width: "42px", height: "42px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 0.8rem" }}><TrendingUp size={24} /></div>
              <div style={{ fontSize: "1rem", fontWeight: 900 }}>DEVELOPMENT</div>
              <div style={{ fontSize: "0.75rem", opacity: 0.8, marginTop: "0.3rem", fontWeight: 500 }}>Standard IDP Process</div>
            </div>
          </div>
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
      year: "Siklus 2025 (Existing)",
      type: "current",
      scenarios: [
        {
          title: "Unit Usaha & Operasional",
          id: 1,
          diagram: (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
              <div style={{ display: "flex", gap: "25px", alignItems: "center" }}>
                <div style={{
                  background: "linear-gradient(135deg, #065f46 0%, #047857 100%)",
                  color: "#fff",
                  padding: "1.2rem",
                  borderRadius: "16px",
                  fontSize: "0.9rem",
                  fontWeight: 900,
                  textAlign: "center",
                  width: "120px",
                  boxShadow: "0 10px 20px rgba(6, 95, 70, 0.15)",
                  border: "1px solid rgba(255,255,255,0.1)"
                }}>
                  KPI Bersama<br /><span style={{ fontSize: "1.3rem", color: "#6ee7b7" }}>30%</span>
                </div>
                <div style={{ fontSize: "1.8rem", fontWeight: 900, color: "#1a5276" }}>+</div>
                <div style={{ border: "2px dashed #f59e0b", padding: "12px", borderRadius: "20px", background: "rgba(245, 158, 11, 0.03)" }}>
                  <div style={{ textAlign: "center", fontSize: "0.85rem", fontWeight: 900, color: "#1a5276", marginBottom: "10px", textTransform: "uppercase", letterSpacing: "1px" }}>KPI Utama (70%)</div>
                  <div style={{ display: "flex", gap: "12px" }}>
                    <div style={{ background: "#1a5276", color: "#fff", padding: "1rem", borderRadius: "12px", fontSize: "0.85rem", fontWeight: 800, textAlign: "center", width: "100px", boxShadow: "0 4px 12px rgba(26,82,118,0.1)" }}>
                      Unit Kerja<br /><span style={{ fontSize: "1.1rem" }}>49%</span>
                    </div>
                    <div style={{ background: "#1a5276", color: "#fff", padding: "1rem", borderRadius: "12px", fontSize: "0.85rem", fontWeight: 800, textAlign: "center", width: "100px", boxShadow: "0 4px 12px rgba(26,82,118,0.1)" }}>
                      Individu<br /><span style={{ fontSize: "1.1rem" }}>21%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ background: "#fff", border: "1px solid #e2e8f0", padding: "8px 25px", borderRadius: "12px", fontSize: "0.9rem", fontWeight: 900, color: "#1a5276", boxShadow: "0 4px 12px rgba(0,0,0,0.03)" }}>
                Performance Score
              </div>
            </div>
          )
        },
        {
          title: "Holding & Head Office",
          id: 2,
          diagram: (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
              <div style={{ display: "flex", gap: "25px", alignItems: "center" }}>
                <div style={{
                  background: "linear-gradient(135deg, #065f46 0%, #047857 100%)",
                  color: "#fff",
                  padding: "1.2rem",
                  borderRadius: "16px",
                  fontSize: "0.9rem",
                  fontWeight: 900,
                  textAlign: "center",
                  width: "120px",
                  boxShadow: "0 10px 20px rgba(6, 95, 70, 0.15)",
                  border: "1px solid rgba(255,255,255,0.1)"
                }}>
                  KPI Bersama<br /><span style={{ fontSize: "1.3rem", color: "#6ee7b7" }}>30%</span>
                </div>
                <div style={{ fontSize: "1.8rem", fontWeight: 900, color: "#1a5276" }}>+</div>
                <div style={{ border: "2px dashed #1a5276", padding: "12px", borderRadius: "20px", background: "rgba(26, 82, 118, 0.03)", width: "150px" }}>
                  <div style={{ textAlign: "center", fontSize: "0.85rem", fontWeight: 900, color: "#1a5276", marginBottom: "10px", textTransform: "uppercase", letterSpacing: "1px" }}>KPI Utama (70%)</div>
                  <div style={{ background: "#1a5276", color: "#fff", padding: "1.2rem", borderRadius: "12px", fontSize: "0.9rem", fontWeight: 900, textAlign: "center" }}>
                    Individu<br /><span style={{ fontSize: "1.3rem" }}>100%</span>
                  </div>
                </div>
              </div>
              <div style={{ background: "#fff", border: "1px solid #e2e8f0", padding: "8px 25px", borderRadius: "12px", fontSize: "0.9rem", fontWeight: 900, color: "#1a5276", boxShadow: "0 4px 12px rgba(0,0,0,0.03)" }}>
                Performance Score
              </div>
            </div>
          )
        }
      ]
    },
    {
      year: "Desain Baru 2026 (Modernized)",
      type: "future",
      scenarios: [
        {
          title: "Struktur Penilaian Terintegrasi",
          id: 1,
          diagram: (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
              <div style={{ display: "flex", gap: "15px" }}>
                {[
                  { label: "Performance", sub: "Outcome", pct: "70%", color: "#1a5276" },
                  { label: "Behavior", sub: "ONE / Value", pct: "20%", color: "#065f46" },
                  { label: "Corporate", sub: "Strategic", pct: "10%", color: "#d97706" }
                ].map((box, bIdx) => (
                  <div key={bIdx} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
                    <div style={{
                      background: "white",
                      border: `2px solid ${box.color}`,
                      color: box.color,
                      padding: "1rem",
                      borderRadius: "16px",
                      fontSize: "0.85rem",
                      fontWeight: 900,
                      textAlign: "center",
                      width: "110px",
                      height: "80px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      boxShadow: "0 10px 25px rgba(0,0,0,0.04)"
                    }}>
                      <div style={{ fontSize: "1.2rem" }}>{box.pct}</div>
                      <div style={{ fontSize: "0.7rem", opacity: 0.8, textTransform: "uppercase" }}>{box.label}</div>
                    </div>
                    <div style={{ fontSize: "0.65rem", fontWeight: 700, color: "#64748b", background: "#f1f5f9", padding: "4px 10px", borderRadius: "20px" }}>{box.sub}</div>
                  </div>
                ))}
              </div>
              <div style={{ background: "linear-gradient(135deg, #1a5276 0%, #2980b9 100%)", color: "#fff", padding: "10px 40px", borderRadius: "16px", fontSize: "1rem", fontWeight: 900, boxShadow: "0 10px 25px rgba(26, 82, 118, 0.2)" }}>
                Total Individual Performance Score
              </div>
            </div>
          )
        },
        {
          title: "Siklus Reward & Meritocracy",
          id: 2,
          diagram: (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "15px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {[
                  { label: "Total Score", color: "#1a5276", icon: <Target size={14} /> },
                  { label: "Rating Distribution", color: "#065f46", icon: <Layers size={14} /> },
                  { label: "Merit Increment", color: "#d97706", icon: <TrendingUp size={14} /> }
                ].map((step, sIdx) => (
                  <div key={sIdx} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{ background: step.color, color: "#fff", padding: "12px 25px", borderRadius: "12px", fontSize: "0.9rem", fontWeight: 800, width: "200px", display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
                      {step.icon}
                      {step.label}
                    </div>
                    {sIdx < 2 && <ArrowDown size={18} color="#cbd5e1" style={{ transform: "rotate(-90deg)" }} />}
                  </div>
                ))}
              </div>
            </div>
          )
        }
      ]
    }
  ];

  return (
    <div className="slide" style={{ padding: "1rem 3.5rem", background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)" }}>
      <AccentShapes />
      <div className="slide-header" style={{ marginBottom: "0.8rem", textAlign: "center" }}>
        <h1 className="slide-title" style={{ fontSize: "2.6rem", color: "#1a5276", marginBottom: "0.2rem" }}>
          <em>Pembobotan Performance Appraisal</em>
        </h1>
        <p className="slide-subtitle" style={{ fontSize: "1.1rem", color: "#64748b", fontWeight: 600 }}>Struktur Penilaian Pegawai: Transformasi 2025 ke 2026</p>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1.2rem" }}>
        {years.map((y, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.3 }}
            style={{
              flex: 1,
              border: "1px solid #e2e8f0",
              borderRadius: "20px",
              padding: "1.2rem 1.5rem",
              position: "relative",
              background: "#fff",
              boxShadow: "0 20px 40px rgba(0,0,0,0.03)",
              display: "flex",
              flexDirection: "column"
            }}
          >
            <div style={{
              position: "absolute",
              top: "-18px",
              left: "40px",
              background: y.type === "current" ? "#f59e0b" : "#1a5276",
              color: "#fff",
              padding: "8px 24px",
              borderRadius: "30px",
              fontSize: "0.95rem",
              fontWeight: 900,
              boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
            }}>
              {y.year}
            </div>

            <div style={{ display: "flex", height: "100%", gap: "2rem", marginTop: "1rem" }}>
              <div style={{ flex: 2.5, display: "flex", gap: "1.5rem" }}>
                {y.scenarios.map((s, sIdx) => (
                  <div key={sIdx} style={{ flex: 1, border: "1px solid #f1f5f9", borderRadius: "20px", padding: "1.5rem", display: "flex", flexDirection: "column", background: "rgba(248, 250, 252, 0.5)" }}>
                    <div style={{ display: "flex", gap: "12px", marginBottom: "20px", alignItems: "center" }}>
                      <div style={{ background: y.type === "current" ? "#f59e0b" : "#1a5276", color: "#fff", width: "30px", height: "30px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", fontWeight: 900 }}>{s.id}</div>
                      <div style={{ fontSize: "1rem", fontWeight: 800, color: "#1e293b" }}>{s.title}</div>
                    </div>
                    <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {s.diagram}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ flex: 1, background: "linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)", padding: "1.5rem", borderRadius: "20px", border: "1px solid #e2e8f0" }}>
                <div style={{ fontSize: "0.95rem", color: "#475569", lineHeight: 1.6 }}>
                  {y.type === "current" ? (
                    <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                      <p style={{ margin: 0, fontWeight: 600 }}>Dominasi alignment KPI Unit Kerja pada level operasional.</p>
                      <ul style={{ margin: 0, paddingLeft: "1.5rem", fontWeight: 700, color: "#1a5276" }}>
                        <li>KPI Utama (Cascaded): 70%</li>
                        <li>KPI Bersama: 30%</li>
                      </ul>
                      <div style={{ padding: "12px", borderLeft: "4px solid #f59e0b", background: "rgba(245, 158, 11, 0.08)", borderRadius: "0 12px 12px 0" }}>
                        <span style={{ fontWeight: 900, color: "#92400e", fontSize: "0.8rem", textTransform: "uppercase" }}>Key Learning:</span><br />
                        <span style={{ fontSize: "0.85rem", color: "#92400e" }}>Proporsi individu murni (21%) relatif kecil dibanding alignment unit.</span>
                      </div>
                    </div>
                  ) : (
                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                      <p style={{ margin: 0, fontWeight: 600 }}>Fokus pada Outcome Individu & Culture (ONE).</p>
                      <ul style={{ margin: 0, paddingLeft: "1.5rem", fontWeight: 700, color: "#1a5276", fontSize: "0.9rem" }}>
                        <li>Individual Perf. (70%)</li>
                        <li>Behavioral Score (20%)</li>
                        <li>Corporate Score (10%)</li>
                      </ul>
                      <div style={{ padding: "12px", borderLeft: "4px solid #1a5276", background: "rgba(26, 82, 118, 0.08)", borderRadius: "0 12px 12px 0" }}>
                        <span style={{ fontWeight: 900, color: "#1a5276", fontSize: "0.8rem", textTransform: "uppercase" }}>Strategic Shift:</span><br />
                        <span style={{ fontSize: "0.85rem" }}>KPI Unit Kerja telah terakomodasi dalam cascading KPI Individu.</span>
                      </div>
                      <div style={{ padding: "12px", borderLeft: "4px solid #065f46", background: "rgba(6, 95, 70, 0.08)", borderRadius: "0 12px 12px 0" }}>
                        <span style={{ fontWeight: 900, color: "#065f46", fontSize: "0.8rem", textTransform: "uppercase" }}>Impact:</span><br />
                        <span style={{ fontSize: "0.85rem" }}>Diferensiasi reward lebih tajam dengan model rating distribusi.</span>
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
      a: "Kuat: Seluruh karyawan memiliki bagian nilai yang langsung dipengaruhi kinerja perusahaan.",
      scoreA: 5,
      b: "Moderat: Alignment hanya terjadi jika penurunan target (cascading) dilakukan dengan disiplin.",
      scoreB: 3
    },
    {
      aspect: "Akuntabilitas Individu",
      a: "Moderat: Sebagian nilai individu ditentukan oleh faktor kolektif/perusahaan.",
      scoreA: 3,
      b: "Kuat: Seluruh nilai berasal dari target yang berada dalam kendali jabatan individu.",
      scoreB: 5
    },
    {
      aspect: "Risiko Free Rider",
      a: "Lemah: Individu kontribusi rendah tetap bisa dapat nilai baik jika kinerja korporat tinggi.",
      scoreA: 2,
      b: "Kuat: Tidak ada komponen kolektif, individu tidak dapat bergantung pada capaian pihak lain.",
      scoreB: 4
    },
    {
      aspect: "Diferensiasi Kinerja",
      a: "Moderat: Karena ada komponen nilai yang sama, rentang nilai antar individu menyempit.",
      scoreA: 3,
      b: "Kuat: Nilai sepenuhnya ditentukan capaian masing-masing individu, performa lebih tajam.",
      scoreB: 5
    },
    {
      aspect: "Sinergi & Kolaborasi",
      a: "Kuat: Seluruh karyawan terdorong secara sistemik untuk mencapai hasil bersama.",
      scoreA: 5,
      b: "Moderat: Fokus pada target masing-masing unit dapat mengurangi kepedulian lintas fungsi.",
      scoreB: 3
    }
  ];

  const totalA = data.reduce((acc, curr) => acc + curr.scoreA, 0);
  const totalB = data.reduce((acc, curr) => acc + curr.scoreB, 0);

  return (
    <div className="slide" style={{ padding: "1.5rem 3.5rem 1.5rem", background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)" }}>
      <AccentShapes />
      <div className="slide-header" style={{ marginBottom: "1.5rem", textAlign: "center" }}>
        <h1 className="slide-title" style={{ fontSize: "2.6rem", color: "#1a5276" }}>
          <em>Decision Matrix: Opsi A vs Opsi B</em>
        </h1>
        <p className="slide-subtitle" style={{ fontSize: "1rem", color: "#64748b", fontWeight: 600 }}>Criteria-based scoring untuk pemilihan desain PMS global</p>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{ flex: 1, background: "#fff", borderRadius: "24px", border: "1px solid #e2e8f0", overflow: "hidden", boxShadow: "0 20px 50px rgba(0,0,0,0.04)" }}
      >
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.85rem" }}>
          <thead>
            <tr style={{ background: "#1a5276", color: "#fff" }}>
              <th style={{ padding: "1.2rem 1.5rem", textAlign: "left", width: "18%", fontWeight: 900, textTransform: "uppercase", letterSpacing: "1px" }}>Aspek Strategis</th>
              <th style={{ padding: "1.2rem 1.5rem", textAlign: "center", width: "33%", fontWeight: 900, textTransform: "uppercase", letterSpacing: "1px" }}>Opsi A (Dengan KPI Bersama)</th>
              <th style={{ padding: "1.2rem", textAlign: "center", width: "8%", fontWeight: 900, textTransform: "uppercase", letterSpacing: "1px" }}>Skor</th>
              <th style={{ padding: "1.2rem 1.5rem", textAlign: "center", width: "33%", fontWeight: 900, textTransform: "uppercase", letterSpacing: "1px" }}>Opsi B (Tanpa KPI Bersama)</th>
              <th style={{ padding: "1.2rem", textAlign: "center", width: "8%", fontWeight: 900, textTransform: "uppercase", letterSpacing: "1px" }}>Skor</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#f8fafc", transition: "all 0.2s" }}>
                <td style={{ padding: "1rem 1.5rem", fontWeight: 800, color: "#1a5276", borderBottom: "1px solid #eff2f5" }}>{row.aspect}</td>
                <td style={{ padding: "1rem 1.5rem", borderBottom: "1px solid #eff2f5", color: "#475569", lineHeight: 1.5, textAlign: "center" }}>{row.a}</td>
                <td style={{ padding: "1rem", borderBottom: "1px solid #eff2f5", textAlign: "center" }}>
                  <div style={{ background: row.scoreA >= 4 ? "#dcfce7" : "#f1f5f9", color: row.scoreA >= 4 ? "#166534" : "#475569", width: "32px", height: "32px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto", fontWeight: 900, fontSize: "1rem" }}>{row.scoreA}</div>
                </td>
                <td style={{ padding: "1rem 1.5rem", borderBottom: "1px solid #eff2f5", color: "#475569", lineHeight: 1.5, textAlign: "center" }}>{row.b}</td>
                <td style={{ padding: "1rem", borderBottom: "1px solid #eff2f5", textAlign: "center" }}>
                  <div style={{ background: row.scoreB >= 4 ? "#dcfce7" : "#f1f5f9", color: row.scoreB >= 4 ? "#166534" : "#475569", width: "32px", height: "32px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto", fontWeight: 900, fontSize: "1rem" }}>{row.scoreB}</div>
                </td>
              </tr>
            ))}
            <tr style={{ background: "rgba(26, 82, 118, 0.03)" }}>
              <td style={{ padding: "1.2rem 1.5rem", fontWeight: 900, color: "#1a5276", textAlign: "right", letterSpacing: "1px" }}>TOTAL SKOR</td>
              <td colSpan={1}></td>
              <td style={{ padding: "1.2rem", textAlign: "center" }}>
                <div style={{ background: "#1a5276", color: "#fff", padding: "8px 15px", borderRadius: "10px", fontWeight: 900, fontSize: "1.1rem", border: "2px solid #fff", boxShadow: "0 4px 12px rgba(26,82,118,0.2)" }}>{totalA}</div>
              </td>
              <td colSpan={1}></td>
              <td style={{ padding: "1.2rem", textAlign: "center" }}>
                <div style={{ background: "#475569", color: "#fff", padding: "8px 15px", borderRadius: "10px", fontWeight: 900, fontSize: "1.1rem", border: "2px solid #fff" }}>{totalB}</div>
              </td>
            </tr>
          </tbody>
        </table>
      </motion.div>

      <div style={{ display: "flex", gap: "1.5rem", marginTop: "1.5rem" }}>
        <div style={{ flex: 1, background: "rgba(14, 102, 85, 0.05)", border: "1px solid rgba(14, 102, 85, 0.2)", borderRadius: "16px", padding: "1rem 1.5rem", display: "flex", gap: "1rem", alignItems: "center" }}>
          <div style={{ background: "#0e6655", color: "#fff", padding: "8px", borderRadius: "12px" }}><Award size={20} /></div>
          <p style={{ fontSize: "0.85rem", color: "#0e6655", fontWeight: 600, margin: 0 }}>
            <strong>KESIMPULAN:</strong> Opsi B unggul pada akuntabilitas & diferensiasi (Meritocracy), Opsi A unggul pada alignment & sinergi (Collaboration).
          </p>
        </div>
        <div style={{ flex: 1, background: "rgba(217, 119, 6, 0.05)", border: "1px solid rgba(217, 119, 6, 0.2)", borderRadius: "16px", padding: "1rem 1.5rem", display: "flex", gap: "1rem", alignItems: "center" }}>
          <div style={{ background: "#d97706", color: "#fff", padding: "8px", borderRadius: "12px" }}><TrendingUp size={20} /></div>
          <p style={{ fontSize: "0.85rem", color: "#92400e", fontWeight: 600, margin: 0 }}>
            <strong>STRATEGIC INSIGHT:</strong> Disarankan pendekatan Hybrid: KPI Bersama tinggi untuk Eksekutif, dominan Individu untuk Operasional.
          </p>
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
      a: "Moderat: Berpotensi dianggap tidak adil secara individual jika kuota top performer sudah penuh.",
      scoreA: 3,
      b: "Kuat: Lebih terasa adil personal karena rating murni berdasarkan capaian tanpa pembatasan.",
      scoreB: 5
    },
    {
      aspek: "Motivasi Karyawan",
      a: "Kuat: Mendorong individu berlomba menjadi top performer dalam budaya kompetitif.",
      scoreA: 4,
      b: "Moderat: Kolaboratif secara natural, namun berisiko munculnya \"zona nyaman\".",
      scoreB: 3
    },
    {
      aspek: "Risiko Rating Inflation",
      a: "Sangat Kuat: Distribusi menjaga agar tidak terjadi penumpukan nilai tinggi (budget control).",
      scoreA: 5,
      b: "Lemah: Tanpa kontrol distribusi, muncul lonjakan rating tinggi yang tidak terkendali.",
      scoreB: 2
    },
    {
      aspek: "Budaya Kerja",
      a: "Sangat Kuat: Membentuk budaya meritocracy dan high-performance secara sistemik.",
      scoreA: 5,
      b: "Moderat: Suasana harmonis namun berisiko standar performa perlahan menurun.",
      scoreB: 3
    },
    {
      aspek: "Keterkaitan Reward",
      a: "Sangat Kuat: Diferensiasi bonus dan talent pool menjadi sangat tajam dan objektif.",
      scoreA: 5,
      b: "Lemah: Jika banyak yang mendapat rating tinggi, pembagian reward kurang terdiferensiasi.",
      scoreB: 2
    }
  ];

  const totalA = data.reduce((acc, curr) => acc + curr.scoreA, 0);
  const totalB = data.reduce((acc, curr) => acc + curr.scoreB, 0);

  return (
    <div className="slide" style={{ padding: "1.5rem 3.5rem 1.5rem", background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)" }}>
      <AccentShapes />
      <div className="slide-header" style={{ marginBottom: "1.5rem", textAlign: "center" }}>
        <h1 className="slide-title" style={{ fontSize: "2.6rem", color: "#1a5276" }}>
          <em>Decision Matrix: Rating Distribusi</em>
        </h1>
        <p className="slide-subtitle" style={{ fontSize: "1rem", color: "#64748b", fontWeight: 600 }}>Objektivitas pemilihan mekanisme diferensiasi performa</p>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1rem" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{ flex: 1, background: "#fff", borderRadius: "24px", border: "1px solid #e2e8f0", overflow: "hidden", boxShadow: "0 20px 50px rgba(0,0,0,0.04)" }}
        >
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.85rem" }}>
            <thead>
              <tr style={{ background: "#1a5276", color: "#fff" }}>
                <th style={{ padding: "1.2rem 1.5rem", textAlign: "left", width: "18%", fontWeight: 900, textTransform: "uppercase", letterSpacing: "1px" }}>Aspek Strategis</th>
                <th style={{ padding: "1.2rem 1.5rem", textAlign: "center", width: "33%", fontWeight: 900, textTransform: "uppercase", letterSpacing: "1px" }}>Opsi A (Dengan Distribusi)</th>
                <th style={{ padding: "1.2rem", textAlign: "center", width: "8%", fontWeight: 900, textTransform: "uppercase", letterSpacing: "1px" }}>Skor</th>
                <th style={{ padding: "1.2rem 1.5rem", textAlign: "center", width: "33%", fontWeight: 900, textTransform: "uppercase", letterSpacing: "1px" }}>Opsi B (Tanpa Distribusi)</th>
                <th style={{ padding: "1.2rem", textAlign: "center", width: "8%", fontWeight: 900, textTransform: "uppercase", letterSpacing: "1px" }}>Skor</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#f8fafc", transition: "all 0.2s" }}>
                  <td style={{ padding: "1rem 1.5rem", fontWeight: 800, color: "#1a5276", borderBottom: "1px solid #eff2f5" }}>{row.aspek}</td>
                  <td style={{ padding: "1rem 1.5rem", borderBottom: "1px solid #eff2f5", color: "#475569", lineHeight: 1.5, textAlign: "center" }}>{row.a}</td>
                  <td style={{ padding: "1rem", borderBottom: "1px solid #eff2f5", textAlign: "center" }}>
                    <div style={{ background: row.scoreA >= 4 ? "#dcfce7" : "#f1f5f9", color: row.scoreA >= 4 ? "#166534" : "#475569", width: "32px", height: "32px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto", fontWeight: 900, fontSize: "1rem" }}>{row.scoreA}</div>
                  </td>
                  <td style={{ padding: "1rem 1.5rem", borderBottom: "1px solid #eff2f5", color: "#475569", lineHeight: 1.5, textAlign: "center" }}>{row.b}</td>
                  <td style={{ padding: "1rem", borderBottom: "1px solid #eff2f5", textAlign: "center" }}>
                    <div style={{ background: row.scoreB >= 4 ? "#dcfce7" : "#f1f5f9", color: row.scoreB >= 4 ? "#166534" : "#475569", width: "32px", height: "32px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto", fontWeight: 900, fontSize: "1rem" }}>{row.scoreB}</div>
                  </td>
                </tr>
              ))}
              <tr style={{ background: "rgba(26, 82, 118, 0.03)" }}>
                <td style={{ padding: "1.2rem 1.5rem", fontWeight: 900, color: "#1a5276", textAlign: "right", letterSpacing: "1px" }}>TOTAL SKOR</td>
                <td colSpan={1}></td>
                <td style={{ padding: "1.2rem", textAlign: "center" }}>
                  <div style={{ background: "#1a5276", color: "#fff", padding: "8px 15px", borderRadius: "10px", fontWeight: 900, fontSize: "1.1rem", border: "2px solid #fff", boxShadow: "0 4px 12px rgba(26,82,118,0.2)" }}>{totalA}</div>
                </td>
                <td colSpan={1}></td>
                <td style={{ padding: "1.2rem", textAlign: "center" }}>
                  <div style={{ background: "#475569", color: "#fff", padding: "8px 15px", borderRadius: "10px", fontWeight: 900, fontSize: "1.1rem", border: "2px solid #fff" }}>{totalB}</div>
                </td>
              </tr>
            </tbody>
          </table>
        </motion.div>

        {/* Strategic Insight Summary */}
        <div style={{ display: "flex", gap: "1.5rem", marginTop: "1rem" }}>
          <div style={{ flex: 1, background: "rgba(220, 38, 38, 0.05)", border: "1px solid rgba(220, 38, 38, 0.2)", borderRadius: "16px", padding: "1rem 1.5rem", display: "flex", gap: "1rem", alignItems: "center" }}>
            <div style={{ background: "#dc2626", color: "#fff", padding: "8px", borderRadius: "12px" }}><TrendingUp size={20} /></div>
            <p style={{ fontSize: "0.85rem", color: "#991b1b", fontWeight: 600, margin: 0 }}>
              <strong>RISIKO INFLASI:</strong> Opsi B berisiko tinggi terjadi "Rating Inflation" (&gt;80% skor tinggi), merusak akurasi data talent korporat.
            </p>
          </div>
          <div style={{ flex: 1, background: "rgba(26, 82, 118, 0.05)", border: "1px solid rgba(26, 82, 118, 0.2)", borderRadius: "16px", padding: "1rem 1.5rem", display: "flex", gap: "1rem", alignItems: "center" }}>
            <div style={{ background: "#1a5276", color: "#fff", padding: "8px", borderRadius: "12px" }}><Award size={20} /></div>
            <p style={{ fontSize: "0.85rem", color: "#1a5276", fontWeight: 600, margin: 0 }}>
              <strong>KESIMPULAN:</strong> Opsi A (22 vs 15) unggul untuk membangun <strong>High Performance Culture</strong> dan diferensiasi reward yang tajam.
            </p>
          </div>
        </div>
      </div>
      <SlideFooter />
    </div>
  );
}

/* =============================
   SLIDE 10: ILUSTRASI PRIORITY POOL
   ============================= */
function SlidePriorityPool() {
  const divisions = [
    { name: "Divisi Operasional SDM", color: "#1a5276", items: [{ n: "Ali", l: "BOD-1", s: "95,19" }, { n: "Wahyu", l: "BOD-2", s: "95,28" }, { n: "Zaini", l: "BOD-3", s: "90,57" }] },
    { name: "Divisi Strategi & Pengembangan SDM", color: "#065f46", items: [{ n: "Rezky", l: "BOD-1", s: "90,78" }, { n: "Bakhri", l: "BOD-2", s: "90,34" }, { n: "Kintan", l: "BOD-3", s: "90,89" }] },
    { name: "Divisi Pengadaan & Umum", color: "#d97706", items: [{ n: "Yusuf", l: "BOD-1", s: "90,53" }, { n: "Deddy", l: "BOD-2", s: "90,38" }, { n: "Claro", l: "BOD-3", s: "95,71" }] }
  ];

  return (
    <div className="slide" style={{ padding: "1.2rem 3.5rem", background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)" }}>
      <AccentShapes />
      <div className="slide-header" style={{ marginBottom: "1rem", textAlign: "center" }}>
        <h1 className="slide-title" style={{ fontSize: "2.6rem", color: "#1a5276", marginBottom: "0.2rem" }}>
          <em>Ilustrasi Priority Pool & Klasifikasi Rating</em>
        </h1>
        <p className="slide-subtitle" style={{ fontSize: "1rem", color: "#64748b", fontWeight: 600 }}>Mekanisme Penentuan Rating Berbasis Level Jabatan</p>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1.2rem" }}>
        {/* Tables Row: Strategic Inputs */}
        <div style={{ display: "flex", gap: "1.2rem" }}>
          {divisions.map((div, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              style={{ flex: 1, border: "1px solid #e2e8f0", borderRadius: "20px", overflow: "hidden", background: "#fff", boxShadow: "0 10px 25px rgba(0,0,0,0.03)" }}
            >
              <div style={{ background: div.color, padding: "8px", textAlign: "center", fontSize: "0.8rem", fontWeight: 900, color: "#fff", letterSpacing: "0.5px" }}>{div.name}</div>
              <table style={{ width: "100%", fontSize: "0.75rem", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ background: "rgba(241, 245, 249, 1)", color: "#1e293b" }}>
                    <th style={{ padding: "8px", width: "15%" }}>No</th>
                    <th style={{ padding: "8px", textAlign: "left" }}>Nama</th>
                    <th style={{ padding: "8px" }}>Level</th>
                    <th style={{ padding: "8px" }}>Score</th>
                  </tr>
                </thead>
                <tbody>
                  {div.items.map((item, idx) => (
                    <tr key={idx} style={{ borderBottom: "1px solid #f1f5f9" }}>
                      <td style={{ textAlign: "center", padding: "8px", fontWeight: 700, color: "#64748b" }}>{idx + 1}</td>
                      <td style={{ padding: "8px", fontWeight: 600, color: "#1e293b" }}>{item.n}</td>
                      <td style={{ textAlign: "center", padding: "8px", color: "#64748b" }}>{item.l}</td>
                      <td style={{ textAlign: "center", padding: "8px", fontWeight: 900, color: div.color }}>{item.s}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          ))}
        </div>

        {/* Pool Section: Central Logic */}
        <div style={{
          flex: 1,
          background: "rgba(248, 250, 252, 0.8)",
          backdropFilter: "blur(10px)",
          border: "2px dashed #cbd5e1",
          borderRadius: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          padding: "1.2rem",
          position: "relative",
          boxShadow: "inset 0 2px 10px rgba(0,0,0,0.02)"
        }}>
          <div style={{ position: "absolute", top: "15px", right: "20px", opacity: 0.1 }}><Layers size={48} color="#1a5276" /></div>

          {[
            { l: "BOD-1 POOL", c: "#065f46", members: [{ n: "Rezky", s: "90,78", i: 2 }, { n: "Yusuf", s: "90,53", i: 3 }, { n: "Ali", s: "95,19", i: 1 }] },
            { l: "BOD-2 POOL", c: "#d97706", members: [{ n: "Wahyu", s: "95,28", i: 1 }, { n: "Deddy", s: "90,38", i: 2 }, { n: "Bakhri", s: "90,34", i: 3 }] },
            { l: "BOD-3 POOL", c: "#1a5276", members: [{ n: "Zaini", s: "90,57", i: 3 }, { n: "Claro", s: "95,71", i: 1 }, { n: "Kintan", s: "90,89", i: 2 }] }
          ].map((pool, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.2 + 0.5 }}
              style={{
                width: "170px",
                height: "170px",
                borderRadius: "50%",
                background: `linear-gradient(135deg, ${pool.c} 0%, ${pool.c}dd 100%)`,
                border: "4px solid #fff",
                color: "#fff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                position: "relative"
              }}
            >
              <div style={{
                position: "absolute",
                top: "-12px",
                background: "#fff",
                color: pool.c,
                fontSize: "0.75rem",
                fontWeight: 900,
                padding: "2px 12px",
                borderRadius: "20px",
                border: `2px solid ${pool.c}`,
                boxShadow: "0 8px 16px rgba(0,0,0,0.1)"
              }}>
                {pool.l}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px", alignItems: "center", width: "100%", padding: "0 10px" }}>
                {pool.members.map((m, idx) => (
                  <div key={idx} style={{ background: "rgba(255,255,255,0.95)", color: "#1e293b", fontSize: "0.65rem", padding: "4px 10px", borderRadius: "8px", textAlign: "center", width: "100%", boxShadow: "0 4px 8px rgba(0,0,0,0.05)" }}>
                    <div style={{ fontWeight: 900 }}>{m.n} <span style={{ color: pool.c }}>({m.i})</span></div>
                    <div style={{ fontSize: "0.55rem", opacity: 0.7 }}>Score: {m.s}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Row: Rating Results */}
        <div style={{ display: "flex", gap: "1.2rem" }}>
          {[
            { items: [{ n: "Ali", l: "BOD-1", r: "RD-1" }, { n: "Rezky", l: "BOD-1", r: "RD-2" }, { n: "Yusuf", l: "BOD-1", r: "RD-3" }] },
            { items: [{ n: "Wahyu", l: "BOD-2", r: "RD-1" }, { n: "Deddy", l: "BOD-2", r: "RD-2" }, { n: "Bakhri", l: "BOD-2", r: "RD-3" }] },
            { items: [{ n: "Claro", l: "BOD-3", r: "RD-1" }, { n: "Kintan", l: "BOD-3", r: "RD-2" }, { n: "Zaini", l: "BOD-3", r: "RD-3" }] }
          ].map((res, i) => (
            <div key={i} style={{ flex: 1, border: "1px solid #e2e8f0", borderRadius: "16px", overflow: "hidden", background: "#fff", boxShadow: "0 10px 25px rgba(0,0,0,0.03)" }}>
              <table style={{ width: "100%", fontSize: "0.75rem", borderCollapse: "collapse" }}>
                <thead style={{ background: "#1e293b", color: "#fff" }}>
                  <tr>
                    <th style={{ padding: "8px" }}>No</th>
                    <th style={{ padding: "8px", textAlign: "left" }}>Nama</th>
                    <th style={{ padding: "8px" }}>Level</th>
                    <th style={{ padding: "8px" }}>Final Rating</th>

                  </tr>
                </thead>
                <tbody>
                  {res.items.map((item, idx) => (
                    <tr key={idx} style={{ borderBottom: "1px solid #f1f5f9" }}>
                      <td style={{ textAlign: "center", padding: "8px", fontWeight: 700, color: "#64748b" }}>{idx + 1}</td>
                      <td style={{ padding: "8px", fontWeight: 700, color: "#1e293b" }}>{item.n}</td>
                      <td style={{ textAlign: "center", padding: "8px", color: "#64748b" }}>{item.l}</td>
                      <td style={{ textAlign: "center", padding: "8px", fontWeight: 900, color: "#1a5276" }}>{item.r}</td>
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
    <div className="slide" style={{ padding: "1.5rem 4rem", background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)" }}>
      <AccentShapes />
      <div className="slide-header" style={{ marginBottom: "1rem", textAlign: "center" }}>
        <h1 className="slide-title" style={{ fontSize: "2.6rem", color: "#1a5276", marginBottom: "0.3rem" }}>
          <em>Roadmap & Timeline Implementasi</em>
        </h1>
        <p className="slide-subtitle" style={{ fontSize: "1rem", color: "#64748b", fontWeight: 600 }}>Siklus Penilaian 2025 & Transisi ke APMS 2.0 (2026-2027)</p>
      </div>

      <div style={{ flex: 1, display: "flex", gap: "1.5rem", height: "100%", overflow: "hidden" }}>
        {/* Left Column: 2025 Closure */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div style={{
            background: "linear-gradient(90deg, #f59e0b 0%, #d97706 100%)",
            color: "#fff",
            padding: "12px",
            borderRadius: "16px",
            fontSize: "1rem",
            fontWeight: 900,
            textAlign: "center",
            textTransform: "uppercase",
            letterSpacing: "1.5px",
            boxShadow: "0 10px 20px rgba(245, 158, 11, 0.15)"
          }}>
            Pengukuran Kinerja Tahun 2025
          </div>

          <div style={{ background: "#fff", borderRadius: "20px", border: "1px solid #e2e8f0", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.03)" }}>
            <table style={{ width: "100%", fontSize: "0.85rem", borderCollapse: "collapse" }}>
              <thead style={{ background: "#f8fafc", color: "#475569" }}>
                <tr>
                  <th style={{ padding: "15px", borderBottom: "1px solid #e2e8f0", width: "12%" }}>#</th>
                  <th style={{ padding: "15px", borderBottom: "1px solid #e2e8f0", textAlign: "left" }}>Item Kegiatan Utama</th>
                  <th style={{ padding: "15px", borderBottom: "1px solid #e2e8f0", width: "30%" }}>Due Date</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { n: 1, i: "Usulan Rating & Pendukung", d: "27 Feb 2026" },
                  { n: 2, i: "Perhitungan Merit Increment", d: "5 Mar 2026" },
                  { n: 3, i: "Penetapan Indikator Ops/Keu", d: "5 Mar 2026" },
                  { n: 4, i: "Sidang Komite Penilaian", d: "2-14 Mar 2026" }
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid #f1f5f9" }}>
                    <td style={{ textAlign: "center", padding: "12px", fontWeight: 700, color: "#94a3b8" }}>{row.n}</td>
                    <td style={{ padding: "12px", fontWeight: 600, color: "#1e293b" }}>{row.i}</td>
                    <td style={{ textAlign: "center", padding: "12px", fontWeight: 800, color: "#d97706" }}>{row.d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ marginTop: "auto", padding: "15px 20px", background: "rgba(245, 158, 11, 0.05)", borderRadius: "16px", borderLeft: "4px solid #f59e0b", display: "flex", gap: "12px" }}>
            <div style={{ color: "#d97706" }}><Calendar size={20} /></div>
            <p style={{ margin: 0, fontSize: "0.85rem", color: "#64748b", fontWeight: 600, fontStyle: "italic" }}>
              Fase penyelesaian siklus 2025 untuk penetapan kenaikan merit (MI).
            </p>
          </div>
        </div>

        {/* Right Column: APMS 2.0 & 2026 Cycle */}
        <div style={{ flex: 1.3, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {/* APMS 2.0 System Go-Live */}
          <div style={{ background: "#fff", borderRadius: "20px", border: "1.5px solid #1a5276", overflow: "hidden", boxShadow: "0 15px 35px rgba(26, 82, 118, 0.08)" }}>
            <div style={{ background: "linear-gradient(90deg, #1a5276 0%, #2980b9 100%)", color: "#fff", padding: "12px 20px", fontSize: "0.95rem", fontWeight: 900, letterSpacing: "1px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span>APMS 2.0 (SYSTEM DEVELOPMENT)</span>
              <Settings size={18} />
            </div>
            <table style={{ width: "100%", fontSize: "0.8rem", borderCollapse: "collapse" }}>
              <tbody>
                <tr style={{ background: "#f8fafc" }}>
                  <td style={{ textAlign: "center", padding: "10px", width: "10%", fontWeight: 800, color: "#1a5276" }}>1</td>
                  <td style={{ padding: "10px", fontWeight: 800, color: "#1e293b" }}>User Acceptance Test (UAT)</td>
                  <td style={{ padding: "10px", textAlign: "center", fontWeight: 800, color: "#1a5276" }}>25-26 Feb 2026</td>
                </tr>
                <tr>
                  <td></td>
                  <td colSpan={2} style={{ padding: "8px 25px", color: "#475569", fontSize: "0.75rem" }}>
                    <div style={{ display: "flex", gap: "20px" }}>
                      <span>• PTPN I (Reg 3, 5) & PT SGN</span>
                      <span>• PTPN IV (Reg 1, 2)</span>
                    </div>
                  </td>
                </tr>
                {[
                  { n: 2, i: "Sosialisasi & Training APMS 2.0 (Online)", d: "10 Mar 2026", highlight: false },
                  { n: 3, i: "Go-live Readiness Check", d: "12 Mar 2026", highlight: false },
                  { n: 4, i: "GO-LIVE APMS 2.0", d: "30 MAR 2026", highlight: true }
                ].map((row, i) => (
                  <tr key={i} style={{ borderTop: "1px solid #f1f5f9", background: row.highlight ? "rgba(34, 197, 94, 0.05)" : "transparent" }}>
                    <td style={{ textAlign: "center", padding: "10px", fontWeight: 800, color: "#1a5276" }}>{row.n}</td>
                    <td style={{ padding: "10px", fontWeight: 700, color: row.highlight ? "#065f46" : "#1e293b" }}>{row.i}</td>
                    <td style={{ textAlign: "center", padding: "10px", fontWeight: 900, color: row.highlight ? "#065f46" : "#1a5276" }}>{row.d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Individual Performance 2026 Cycle */}
          <div style={{ background: "#fff", borderRadius: "20px", border: "1px solid #e2e8f0", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.03)" }}>
            <div style={{ background: "#f8fafc", color: "#1e293b", padding: "10px 20px", fontSize: "0.9rem", fontWeight: 800, borderBottom: "1px solid #e2e8f0", display: "flex", alignItems: "center", gap: "10px" }}>
              <Target size={18} color="#065f46" />
              SIKLUS PENGUKURAN KINERJA 2026
            </div>
            <div style={{ maxHeight: "300px", overflowY: "auto", padding: "5px" }}>
              <table style={{ width: "100%", fontSize: "0.75rem", borderCollapse: "collapse" }}>
                <tbody>
                  {[
                    { n: 1, i: "Surat Pelaksanaan 2026", d: "12 Mar 26", c: "#1e293b" },
                    { n: 2, i: "KSK (Kesepakatan Sasaran Kerja)", d: "Apr 26", c: "#1a5276" },
                    { n: 3, i: "Review Bimbingan Kerja (RBK) TW I", d: "Mei 26", c: "#1a5276" },
                    { n: 4, i: "Pengukuran ONE (Attitude) Sem. I", d: "Jul 26", c: "#065f46" },
                    { n: 5, i: "RBK TW II & TW III", d: "Ags-Nov 26", c: "#1a5276" },
                    { n: 6, i: "Pengukuran ONE (Attitude) Sem. II", d: "Jan 27", c: "#065f46" },
                    { n: 7, i: "Performance Appraisal (Final)", d: "Feb 27", c: "#1e293b" }
                  ].map((row, i) => (
                    <tr key={i} style={{ borderBottom: "1px solid #f1f5f9" }}>
                      <td style={{ textAlign: "center", padding: "8px", width: "10%", fontWeight: 800, color: "#94a3b8" }}>{row.n}</td>
                      <td style={{ padding: "8px", fontWeight: 700, color: "#334155" }}>{row.i}</td>
                      <td style={{ textAlign: "right", padding: "8px 20px", fontWeight: 900, color: row.c }}>{row.d}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
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
    { rating: "Outstanding (RP 1)", score2025: "≥ 90", score2026: "≥ 110", rowSpan2025: 2, color: "#065f46" },
    { rating: "Exceed (RP 2)", score2025: null, score2026: "100 – 109", color: "#047857" },
    { rating: "Meet (RP 3)", score2025: "< 90", score2026: "90 – 99", rowSpan2025: 2, color: "#b45309" },
    { rating: "Below (RP 4)", score2025: null, score2026: "70 – 89", color: "#d97706" },
    { rating: "Poor (RP 5)", score2025: "Punishment Only", score2026: "< 70", rowSpan2025: 1, color: "#991b1b" },
  ];

  return (
    <div className="slide" style={{ padding: "1.5rem 4rem 1.8rem", background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)" }}>
      <AccentShapes />
      <div className="slide-header" style={{ marginBottom: "1.5rem", textAlign: "center" }}>
        <h1 className="slide-title" style={{ fontSize: "2.8rem", color: "#1a5276" }}>
          <em>Rating Kinerja: Threshold Update</em>
        </h1>
        <p className="slide-subtitle" style={{ fontSize: "1.1rem", color: "#64748b", fontWeight: 600 }}>Perbandingan Ambang Batas Nilai 2025 vs 2026</p>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          style={{ width: "100%", maxWidth: "1000px" }}
        >
          <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0 8px" }}>
            <thead>
              <tr style={{ color: "#1a5276" }}>
                <th style={{ padding: "1rem", textAlign: "left", fontSize: "1.1rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "1px" }}>Performance Category</th>
                <th style={{ padding: "1rem", textAlign: "center", fontSize: "1.1rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "1px" }}>2025 Threshold</th>
                <th style={{ padding: "1rem", textAlign: "center", fontSize: "1.1rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "1px" }}>2026 Target</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, i) => (
                <tr key={i} style={{ background: "#fff", boxShadow: "0 4px 15px rgba(0,0,0,0.03)", borderRadius: "16px" }}>
                  <td style={{ padding: "1.2rem 2rem", borderRadius: i === 0 || i === 2 || i === 4 ? "16px 0 0 16px" : "0", border: "1px solid #e2e8f0", borderRight: "none" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                      <div style={{ width: "4px", height: "30px", background: row.color, borderRadius: "2px" }}></div>
                      <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#1a5276" }}>{row.rating}</div>
                    </div>
                  </td>
                  {row.score2025 !== null && (
                    <td
                      rowSpan={row.rowSpan2025}
                      style={{
                        padding: "1.2rem",
                        border: "1px solid #e2e8f0",
                        textAlign: "center",
                        fontSize: "1.2rem",
                        fontWeight: 700,
                        color: "#64748b",
                        background: "#f8fafc"
                      }}
                    >
                      {row.score2025}
                    </td>
                  )}
                  <td style={{ padding: "1.2rem", border: "1px solid #e2e8f0", borderLeft: "none", borderRadius: "0 16px 16px 0", textAlign: "center", fontSize: "1.4rem", fontWeight: 900, color: row.color }}>
                    {row.score2026}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ marginTop: "2.5rem", padding: "1.5rem 2rem", background: "rgba(26, 82, 118, 0.03)", borderRadius: "20px", border: "1.5px dashed #1a5276", display: "flex", gap: "1.5rem", alignItems: "center" }}>
            <div style={{ background: "#1a5276", color: "#fff", padding: "10px", borderRadius: "12px" }}><Settings size={24} /></div>
            <p style={{ margin: 0, fontSize: "1rem", color: "#475569", fontWeight: 600, lineHeight: 1.5 }}>
              <strong>STRATEGIC RATIONALE:</strong> Penyesuaian threshold dilakukan untuk mendorong <em>stretch achievement</em> dan memastikan diferensiasi yang lebih tajam antara Top vs Average performers.
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
        background: "linear-gradient(135deg, #064e3b 0%, #065f46 50%, #1a5276 100%)",
        overflow: "hidden",
        padding: "2rem 4rem",
        height: "100%",
        position: "relative",
        textAlign: "center"
      }}
    >
      {/* Premium Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -40, 0],
            rotate: [0, 360],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: "absolute",
            width: "300px",
            height: "300px",
            background: "white",
            borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
            filter: "blur(80px)",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            zIndex: 0
          }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{ zIndex: 1, position: "relative" }}
      >
        <div style={{ marginBottom: "2.5rem", display: "flex", justifyContent: "center" }}>
          <div style={{
            width: "100px",
            height: "100px",
            background: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(20px)",
            borderRadius: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
            border: "1px solid rgba(255,255,255,0.2)"
          }}>
            <Award size={50} color="#fff" strokeWidth={1.2} />
          </div>
        </div>

        <h1 style={{
          fontSize: "5.5rem",
          fontWeight: 400,
          fontStyle: "italic",
          color: "#fff",
          marginBottom: "1rem",
          letterSpacing: "-0.02em",
          textShadow: "0 10px 30px rgba(0,0,0,0.2)"
        }}>
          Terima Kasih
        </h1>

        <div style={{
          width: "80px",
          height: "4px",
          background: "linear-gradient(90deg, #fff 0%, transparent 100%)",
          margin: "0 auto 2.5rem",
          borderRadius: "2px",
          opacity: 0.6
        }} />

        <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "center" }}>
          <p style={{
            fontSize: "1.4rem",
            fontWeight: 800,
            color: "#fff",
            textTransform: "uppercase",
            letterSpacing: "0.3em",
            margin: 0
          }}>
            PT Perkebunan Nusantara III (Persero)
          </p>
          <p style={{
            fontSize: "1rem",
            fontWeight: 600,
            color: "rgba(255,255,255,0.7)",
            letterSpacing: "0.1em",
            margin: 0
          }}>
            Human Capital Management Portfolio
          </p>
        </div>
      </motion.div>

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
      title: "Mercer PMS Standard",
      color: "#1a5276",
      items: [
        { label: "Outstanding", score: "≥ 110%" },
        { label: "Exceed", score: "100–109%" },
        { label: "Meet", score: "90–99%" },
        { label: "Below", score: "70–89%" },
        { label: "Poor", score: "< 70%" }
      ],
      note: "Global industry standard for MNCs"
    },
    {
      title: "Korn Ferry / Hay Group",
      color: "#065f46",
      items: [
        { label: "Far Exceeds", score: "≥ 110%" },
        { label: "Exceeds", score: "100–109%" },
        { label: "Fully Meets", score: "90–99%" },
        { label: "Developing", score: "70–89%" },
        { label: "Does Not Meet", score: "< 70%" }
      ],
      note: "Fortune 500 calibration methodology"
    },
    {
      title: "Balanced Scorecard",
      color: "#d97706",
      items: [
        { label: "Stretch Limit", score: "> 110%" },
        { label: "Target (Budget)", score: "100%" },
        { label: "Threshold", score: "90–99%" },
        { label: "Risk Zone", score: "70–89%" },
        { label: "Failure Zone", score: "< 70%" }
      ],
      note: "Kaplan & Norton Strategic Performance"
    },
    {
      title: "SAP SuccessFactors",
      color: "#4a3399",
      items: [
        { label: "Scale 5", score: "≥ 110%" },
        { label: "Scale 4", score: "100–109%" },
        { label: "Scale 3", score: "90–99%" },
        { label: "Scale 2", score: "70–89%" },
        { label: "Scale 1", score: "< 70%" }
      ],
      note: "Default HRMS cloud best practice"
    }
  ];

  return (
    <div className="slide" style={{ padding: "1.5rem 3.5rem 1.5rem", background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)" }}>
      <AccentShapes />
      <div className="slide-header" style={{ marginBottom: "1.5rem", textAlign: "center" }}>
        <h1 className="slide-title" style={{ fontSize: "2.8rem", color: "#1a5276" }}>
          <em>Appendix: Referensi Skala Rating Global</em>
        </h1>
        <p className="slide-subtitle" style={{ fontSize: "1.1rem", color: "#64748b", fontWeight: 600 }}>Dasar Benchmark Penetapan Threshold 2026</p>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {/* Rating Scale Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            background: "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
            color: "#fff",
            borderRadius: "24px",
            padding: "1.5rem 2.5rem",
            display: "flex",
            alignItems: "center",
            gap: "2.5rem",
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
          }}
        >
          <div style={{ fontSize: "1.1rem", fontWeight: 900, whiteSpace: "nowrap", textTransform: "uppercase", letterSpacing: "2px", color: "#94a3b8" }}>PTPN 2026</div>
          <div style={{ display: "flex", gap: "12px", flex: 1 }}>
            {[
              { r: "Outstanding", s: "≥ 110", c: "#059669" },
              { i: "Exceed", s: "100–109", c: "#10b981" },
              { i: "Meet", s: "90–99", c: "#f59e0b" },
              { i: "Below", s: "70–89", c: "#ea580c" },
              { i: "Poor", s: "< 70", c: "#dc2626" }
            ].map((item, i) => (
              <div key={i} style={{ flex: 1, background: "rgba(255,255,255,0.05)", borderRadius: "16px", padding: "12px", textAlign: "center", border: "1px solid rgba(255,255,255,0.1)" }}>
                <div style={{ fontSize: "1.2rem", fontWeight: 900, color: item.c }}>{item.s}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 4-Column Sources */}
        <div style={{ flex: 1, display: "flex", gap: "1.2rem" }}>
          {sources.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              style={{
                flex: 1,
                background: "#fff",
                border: "1px solid #e2e8f0",
                borderRadius: "24px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 10px 25px rgba(0,0,0,0.03)"
              }}
            >
              <div style={{ background: src.color, color: "#fff", padding: "15px", fontSize: "0.9rem", fontWeight: 900, textAlign: "center", letterSpacing: "1px" }}>
                {src.title}
              </div>
              <div style={{ padding: "15px", flex: 1, display: "flex", flexDirection: "column", gap: "8px" }}>
                {src.items.map((item, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 12px", borderRadius: "12px", background: i % 2 === 0 ? "#f8fafc" : "#fff", fontSize: "0.8rem" }}>
                    <span style={{ fontWeight: 700, color: "#475569" }}>{item.label}</span>
                    <span style={{ fontWeight: 900, color: src.color }}>{item.score}</span>
                  </div>
                ))}
              </div>
              <div style={{ padding: "12px 15px", borderTop: "1px solid #f1f5f9", fontSize: "0.75rem", color: "#94a3b8", fontStyle: "italic", fontWeight: 600 }}>
                {src.note}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Insights */}
        <div style={{ display: "flex", gap: "1.5rem" }}>
          {[
            { q: "Mengapa ≥110 untuk Outstanding?", a: "100 = Target · 105 = Variance Normal · 110 = Stretch Achievement.", c: "#065f46" },
            { q: "Mengapa <70 untuk Poor?", a: "Toleransi variance global ±30%. <70% = Gagal signifikan.", c: "#991b1b" }
          ].map((insight, i) => (
            <div key={i} style={{ flex: 1, background: "rgba(255,255,255,0.7)", border: `1px solid ${insight.c}30`, padding: "15px 20px", borderRadius: "20px", display: "flex", gap: "15px", alignItems: "center" }}>
              <div style={{ background: insight.c, color: "#fff", width: "32px", height: "32px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontWeight: 900 }}>?</div>
              <div>
                <div style={{ fontSize: "0.9rem", fontWeight: 900, color: insight.c }}>{insight.q}</div>
                <div style={{ fontSize: "0.85rem", color: "#475569", fontWeight: 600 }}>{insight.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <SlideFooter />
    </div>
  );
}

/* =============================
   SLIDE: PROJECT CHARTER / GANTT
   ============================= */
function SlideProjectCharter() {
  const months = [
    "Mar", "Apr", "Mei", "Jun", "Jul", "Ags", "Sep", "Okt", "Nov", "Des",
    "Jan", "Feb", "Mar", "Apr"
  ];
  // Total 14 months = 14 * 4 weeks = 56 weeks

  const milestones = [
    { name: "1. Review Proker Div Holding", startIdx: 0, duration: 2, color: "#1a5276" },         // Mar W1-W2
    { name: "2. Review Scorecard Div & KPI HO & Regional PalmCo", startIdx: 2, duration: 2, color: "#1a5276" }, // Mar W3-W4
    { name: "3. Review Scorecard Div & KPI HO & Regional SuppCo", startIdx: 4, duration: 2, color: "#1a5276" }, // Apr W1-W2
    { name: "4. Review Scorecard Div & KPI HO & Cluster SGN", startIdx: 6, duration: 2, color: "#1a5276" },     // Apr W3-W4
    { name: "5. Tata Kelola Manajemen Kinerja Unit Kerja & Individu", startIdx: 8, duration: 3, color: "#1a5276" }, // Apr W4 - May W2 (starts slightly overlapping)
    { name: "6. Proses Bisnis Level 1-3 SGN", startIdx: 10, duration: 4, color: "#1a5276" },                    // May W3 - Jun W2
    { name: "7. Proses Bisnis Level 4 (FOP) SGN", startIdx: 14, duration: 12, color: "#1a5276" },               // Jun W3 - Sep W2
    { name: "8. Struktur Organisasi SGN", startIdx: 14, duration: 6, color: "#1a5276" },                        // Jun W3 - Jul W4
    { name: "9. Proses Bisnis Level 1-3 Holding", startIdx: 20, duration: 4, color: "#1a5276" },                // Aug W1 - Aug W4
    { name: "10. Proses Bisnis Level 4 (FOP) Holding", startIdx: 24, duration: 12, color: "#1a5276" },          // Sep W1 - Nov W4
    { name: "11. Matrix RACI Holding - Sub Holding", startIdx: 25, duration: 4, color: "#1a5276" },             // Sep W2 - Oct W1
    { name: "12. Pelatihan Scorecard & KPI Champion & BOD-1 Holding...", startIdx: 28, duration: 4, color: "#1a5276" }, // Oct W1 - Oct W4
    { name: "13. Review Scorecard & KPI Holding 2027", startIdx: 32, duration: 3, color: "#1a5276" },           // Nov W1 - Nov W3
    { name: "14. Review Scorecard & KPI PalmCo 2027 (HO & Regional)", startIdx: 35, duration: 3, color: "#1a5276" },// Nov W4 - Dec W2
    { name: "15. Review Scorecard & KPI SuppCo 2027 (HO & Regional)", startIdx: 38, duration: 3, color: "#1a5276" },// Dec W3 - Jan W1
    { name: "16. Review Scorecard & KPI SGN 2027 (HO & Cluster)", startIdx: 41, duration: 3, color: "#1a5276" }, // Jan W2 - Jan W4
    { name: "17. Penyusunan Scorecard & KPI Karpim Anper Non PTPN", startIdx: 44, duration: 12, color: "#1a5276" },// Feb W1 - Apr W4
  ];

  const deliverables = [
    "1. Scorecard & KPI Regional 2026 - PalmCo, SuppCo & SugarCo",
    "2. Tata Kelola Manajemen Kinerja Unit Kerja & Individu",
    "3. Proses Bisnis Level 1-4 SGN",
    "4. Struktur Organisasi SGN",
    "5. Proses Bisnis Level 1-4 Holding",
    "6. Matrix RACI Holding - Sub Holding",
    "7. Pelatihan Balanced Scorecard",
    "8. Scorecard & KPI 2027 (Holding, Sub Holding & Regional / Cluster)",
    "9. Scorecard & KPI 2027 (Anper Non PTPN Holding)"
  ];

  return (
    <div className="slide" style={{ padding: "0.8rem 3.5rem", background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)", display: "flex", flexDirection: "column" }}>
      <AccentShapes />
      <div className="slide-header" style={{ marginBottom: "0.5rem", textAlign: "left" }}>
        <h1 className="slide-title" style={{ fontSize: "2.4rem", color: "#1a5276", marginBottom: "0.2rem" }}>
          <em>Proyek Scorecard, KPI, Proses Bisnis & Struktur Organisasi</em>
        </h1>
        <p className="slide-subtitle" style={{ fontSize: "1rem", color: "#64748b", fontWeight: 700 }}>
          Project Start Date: Maret 2026
        </p>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.5rem", overflow: "hidden" }}>

        {/* Gantt Container */}
        <div style={{
          background: "#fff",
          borderRadius: "16px",
          border: "1px solid #e2e8f0",
          display: "flex",
          flexDirection: "column",
          flexShrink: 0,
          boxShadow: "0 10px 25px rgba(0,0,0,0.04)"
        }}>
          {/* Header */}
          <div style={{ display: "flex", background: "#f8fafc", borderBottom: "2px solid #1a5276" }}>
            <div style={{ width: "350px", padding: "10px 20px", fontWeight: 900, fontSize: "0.8rem", color: "#1a5276", textTransform: "uppercase", display: "flex", alignItems: "center", borderRight: "1px solid #e2e8f0" }}>
              Milestone Description
            </div>
            <div style={{ flex: 1, display: "flex" }}>
              {months.map((m, i) => (
                <div key={i} style={{ flex: 1, textAlign: "center", borderRight: "1px solid #e2e8f0" }}>
                  <div style={{ padding: "6px", background: "#f1f5f9", fontSize: "0.75rem", fontWeight: 800, color: "#475569", borderBottom: "1px solid #e2e8f0" }}>{m}</div>
                  <div style={{ display: "flex" }}>
                    {[1, 2, 3, 4].map(w => (
                      <div key={w} style={{ flex: 1, fontSize: "0.6rem", padding: "3px 0", color: "#94a3b8", textAlign: "center", borderRight: w !== 4 ? "1px dashed #e2e8f0" : "none" }}>{w}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Table Body */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {milestones.map((m, idx) => (
              <div key={idx} style={{ display: "flex", borderBottom: "1px solid #f1f5f9", minHeight: "22px" }}>
                <div style={{ width: "350px", padding: "2px 20px", fontSize: "0.65rem", fontWeight: 600, color: "#334155", borderRight: "1px solid #e2e8f0", display: "flex", alignItems: "center" }}>
                  {m.name}
                </div>
                <div style={{ flex: 1, position: "relative", display: "flex" }}>
                  {/* Grid Lines */}
                  {Array.from({ length: 56 }).map((_, i) => (
                    <div key={i} style={{ flex: 1, borderRight: (i + 1) % 4 === 0 ? "1px solid #e2e8f0" : "1px dashed #f1f5f9" }} />
                  ))}

                  {/* Progress Block */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(m.duration / 56) * 100}%` }}
                    transition={{ delay: 0.1 + idx * 0.05, duration: 0.8 }}
                    style={{
                      position: "absolute",
                      left: `${(m.startIdx / 56) * 100}%`,
                      top: "2px",
                      bottom: "2px",
                      background: "rgba(110, 142, 235, 0.8)", // close to the excel blue color
                      borderRadius: "2px",
                      border: "1px solid rgba(110, 142, 235, 1)"
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Delivery Output Container */}
        <div style={{
          flex: 1,
          background: "#fff",
          borderRadius: "16px",
          border: "2px solid #0e6655",
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.6rem",
          boxShadow: "0 10px 25px rgba(14, 102, 85, 0.06)",
          position: "relative"
        }}>
          <div style={{ fontSize: "1rem", fontWeight: 900, color: "#0e6655", display: "flex", alignItems: "center", gap: "8px" }}>
            <Check size={18} />
            Delivery Output :
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", columnGap: "3rem", rowGap: "0.4rem" }}>
            {deliverables.map((item, i) => (
              <div key={i} style={{
                fontSize: "0.85rem",
                fontWeight: 700,
                color: "#1e293b",
                display: "flex",
                alignItems: "center"
              }}>
                {item}
              </div>
            ))}
          </div>
        </div>

      </div>
      <SlideFooter />
    </div>
  );
}



/* =============================
   MAIN PAGE COMPONENT
   ============================= */
function SlideAppraisalReference() {
  const kinerjaWeights = [
    { level: "Kadiv", scorecard: "100%", nonScorecard: "-" },
    { level: "KasubDiv", scorecard: "100%", nonScorecard: "-" },
    { level: "Asistan", scorecard: "80%", nonScorecard: "20%" }
  ];

  const budayaWeights = [
    { kpi: "Penilaian Perilaku Budaya 40% (360 Derajat)", kadiv: "40%", asistan: "-" },
    { kpi: "Sharing Knowledge", kadiv: "30%", asistan: "20%" },
    { kpi: "Pembelajaran Mandiri", kadiv: "20%", asistan: "40%" },
    { kpi: "Coaching & Mentoring", kadiv: "20%", asistan: "-" }
  ];

  return (
    <div className="slide" style={{ padding: "1.5rem 3.5rem 1.5rem", background: "#f8fafc" }}>
      <AccentShapes />
      <div className="slide-header" style={{ marginBottom: "1.5rem" }}>
        <h1 className="slide-title" style={{ fontSize: "2.6rem", color: "#1a5276" }}>Historical Performance Appraisal Model</h1>
        <p className="slide-subtitle" style={{ fontSize: "1rem", color: "#64748b", fontWeight: 700 }}>Referensi Struktur Penilaian & Pembobotan Kinerja (Existing Variation)</p>
      </div>

      <div style={{ flex: 1, display: "flex", gap: "2rem" }}>
        <div style={{ flex: 1.2, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {/* Kinerja Weights */}
          <div style={{ background: "#fff", borderRadius: "20px", border: "1px solid #e2e8f0", overflow: "hidden" }}>
            <div style={{ background: "#0e6655", color: "#fff", padding: "12px 20px", fontSize: "0.85rem", fontWeight: 900 }}>KPI KINERJA (Kontribusi 90%)</div>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.8rem" }}>
              <thead>
                <tr style={{ background: "#f1f5f9", fontWeight: 900, color: "#475569" }}>
                  <th style={{ padding: "10px", textAlign: "left" }}>Level</th>
                  <th style={{ padding: "10px", textAlign: "center" }}>Scorecard</th>
                  <th style={{ padding: "10px", textAlign: "center" }}>Non-Scorecard</th>
                </tr>
              </thead>
              <tbody>
                {kinerjaWeights.map((w, i) => (
                  <tr key={i} style={{ borderTop: "1px solid #f1f5f9" }}>
                    <td style={{ padding: "10px", fontWeight: 800 }}>{w.level}</td>
                    <td style={{ padding: "10px", textAlign: "center" }}>{w.scorecard}</td>
                    <td style={{ padding: "10px", textAlign: "center" }}>{w.nonScorecard}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Budaya Weights */}
          <div style={{ background: "#fff", borderRadius: "20px", border: "1px solid #e2e8f0", overflow: "hidden" }}>
            <div style={{ background: "#1a5276", color: "#fff", padding: "12px 20px", fontSize: "0.85rem", fontWeight: 900 }}>KPI BUDAYA (Kontribusi 10%)</div>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.8rem" }}>
              <thead>
                <tr style={{ background: "#f1f5f9", fontWeight: 900, color: "#475569" }}>
                  <th style={{ padding: "10px", textAlign: "left" }}>KPI Budaya</th>
                  <th style={{ padding: "10px", textAlign: "center" }}>Kadiv/KasubDiv</th>
                  <th style={{ padding: "10px", textAlign: "center" }}>Asistan</th>
                </tr>
              </thead>
              <tbody>
                {budayaWeights.map((w, i) => (
                  <tr key={i} style={{ borderTop: "1px solid #f1f5f9" }}>
                    <td style={{ padding: "10px", fontWeight: 700 }}>{w.kpi}</td>
                    <td style={{ padding: "10px", textAlign: "center" }}>{w.kadiv}</td>
                    <td style={{ padding: "10px", textAlign: "center" }}>{w.asistan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <div style={{ background: "#1e293b", color: "#fff", borderRadius: "24px", padding: "2rem", textAlign: "center" }}>
            <div style={{ fontSize: "1rem", fontWeight: 900, marginBottom: "1.5rem", color: "#6ee7b7" }}>FORMULA NILAI AKHIR</div>
            <div style={{ fontSize: "1.2rem", fontWeight: 800, lineHeight: 1.4 }}>
              Nilai Akhir = <br />
              <span style={{ fontSize: "1.8rem", color: "#ffa500" }}>80%</span> Nilai Kinerja <br />
              <span style={{ fontSize: "1.5rem" }}>+</span> <br />
              <span style={{ fontSize: "1.8rem", color: "#6ee7b7" }}>20%</span> Nilai Budaya
            </div>
          </div>

          <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "24px", padding: "1.5rem" }}>
            <p style={{ fontSize: "0.85rem", color: "#475569", fontWeight: 600, fontStyle: "italic" }}>
              * Catatan: Model ini digunakan sebagai referensi perbandingan historis untuk menunjukkan pergeseran beban bobot antara Kinerja Hasil vs Perilaku/Budaya.
            </p>
          </div>
        </div>
      </div>
      <SlideFooter />
    </div>
  );
}

function SlideSMKTIFAQ() {
  const faqs = [
    {
      num: "#1",
      question: "Apa perubahan paling signifikan dibandingkan dengan Perdir 5/2025?",
      answer: "Struktur dasar (KPI, Nilai, Rating & Merit Increment) relatif sama. Perubahan difokuskan pada penguatan governance (process owner), fairness (mekanisme sanggahan), dan kontrol distribusi rating (guided distribution/grade ceiling) untuk legal defensibility."
    },
    {
      num: "#2",
      question: "Apabila karyawan merasa penilaiannya tidak adil, apa perlindungannya?",
      answer: "Draft Perdir SMKTI 2026 mengatur mekanisme sanggahan dengan batas waktu yang jelas, berdasarkan data/evidence, dan terdokumentasi dalam berita acara. Mekanisme formal ini sebelumnya belum diatur secara detail di Perdir 5/2025."
    },
    {
      num: "#3",
      question: "Apakah draft Perdir ini mengubah/menurunkan peluang merit increment?",
      answer: "Mekanisme merit increment tidak berubah. Namun, dilakukan pengetatan pada kategori skor dan kontrol distribusi rating. Tujuannya bukan menurunkan peluang, tapi menjaga agar merit increment benar-benar berbasis diferensiasi kinerja."
    },
    {
      num: "#4",
      question: "Bagaimana mekanisme penilaian bagi karyawan baru, mutasi, atau rangkap jabatan?",
      answer: "Penilaian dilakukan minimal setelah 3 bulan menjabat definitif. Untuk mutasi/rangkap jabatan dilakukan secara proporsional sesuai masa efektif. Penugasan ke entitas Non-SMKTI diselaraskan melalui formulir khusus dari Perusahaan Induk."
    }
  ];

  return (
    <div className="slide" style={{ padding: "1.5rem 3.5rem 1.5rem", background: "#051613" }}>
      <div style={{ position: "absolute", inset: 0, opacity: 0.1, background: "radial-gradient(circle at 70% 30%, #10b981 0%, transparent 70%)" }} />
      <AccentShapes />
      <div className="slide-header" style={{ marginBottom: "2rem", borderLeft: "8px solid #f97316", paddingLeft: "1.5rem" }}>
        <h1 className="slide-title" style={{ fontSize: "2.8rem", color: "#fff", margin: 0 }}>
          <em>Frequently Asked Questions (FAQ)</em>
        </h1>
        <p className="slide-subtitle" style={{ fontSize: "1.1rem", color: "#10b981", fontWeight: 700 }}>Draft Peraturan Direksi SMKTI 2026</p>
      </div>

      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", position: "relative" }}>
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              borderRadius: "24px",
              padding: "2.5rem",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              backdropFilter: "blur(10px)",
              justifyContent: "center"
            }}
          >
            <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
              <div style={{ background: "#f97316", color: "#000", fontWeight: 900, padding: "8px 14px", borderRadius: "8px", fontSize: "1.2rem", boxShadow: "0 4px 12px rgba(249,115,22,0.3)" }}>{faq.num}</div>
              <div style={{ fontSize: "1.45rem", fontWeight: 800, color: "#fff", lineHeight: 1.3, letterSpacing: "-0.01em" }}>{faq.question}</div>
            </div>
            <div style={{ fontSize: "1.05rem", color: "rgba(255, 255, 255, 0.8)", lineHeight: 1.7, marginLeft: "4.5rem", fontWeight: 500 }}>
              {faq.answer}
            </div>
          </motion.div>
        ))}
      </div>
      <SlideFooter />
    </div>
  );
}

function SlideBPIConcept() {
  const bpiSteps = [
    { num: "01", title: "IDENTIFIKASI", desc: "Menemukan proses yang membutuhkan perbaikan (bottleneck, biaya tinggi, atau waktu lama)." },
    { num: "02", title: "ANALISIS", desc: "Membedah proses saat ini (As-Is) untuk menemukan akar masalah dan pemborosan (Waste)." },
    { num: "03", title: "REDESAIN", desc: "Merancang proses baru (To-Be) yang lebih ramping, cepat, dan bernilai tambah tinggi." },
    { num: "04", title: "IMPLEMENTASI", desc: "Eksekusi perubahan, pemantauan hasil, dan perbaikan terus-menerus (Kaizen)." },
  ];

  return (
    <div className="slide" style={{ padding: 0, background: "#f8fafc", position: "relative", overflow: "hidden" }}>
      {/* Background with Overlay */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}>
        <img
          src="/images/bpi_landscape.png"
          alt="BPI Landscape"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(14, 102, 85, 0.95) 0%, rgba(26, 82, 118, 0.8) 100%)" }} />
      </div>

      <div style={{ position: "relative", zIndex: 1, height: "100%", display: "flex", flexDirection: "column", padding: "1.5rem 4rem" }}>
        {/* Header Section */}
        <div style={{ marginBottom: "1rem" }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ borderLeft: "8px solid #fbbf24", paddingLeft: "1.2rem" }}
          >
            <h1 style={{ fontSize: "2.4rem", color: "#fff", fontWeight: 900, lineHeight: 1.1, margin: 0, letterSpacing: "-0.03em" }}>
              KONSEP <span style={{ color: "#fbbf24" }}>BUSINESS PROCESS</span><br />
              <span style={{ opacity: 0.9 }}>IMPROVEMENT (BPI)</span>
            </h1>
            <p style={{ fontSize: "1rem", color: "#6ee7b7", fontWeight: 700, marginTop: "0.3rem", textTransform: "uppercase", letterSpacing: "2px" }}>Operasional Ekselen SMKTI</p>
          </motion.div>
        </div>

        {/* Content Section: Glassmorphism Card */}
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "1.2rem", flex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(12px)",
              borderRadius: "24px",
              padding: "1.5rem",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
              display: "flex",
              flexDirection: "column",
              gap: "1.2rem"
            }}
          >
            <h2 style={{ fontSize: "1.4rem", color: "#fbbf24", fontWeight: 900, margin: 0 }}>4 Pilar Utama Perbaikan Proses</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {bpiSteps.map((step, i) => (
                <div key={i} style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ fontSize: "0.8rem", fontWeight: 900, color: "#6ee7b7", background: "rgba(110, 231, 183, 0.15)", padding: "2px 6px", borderRadius: "4px" }}>{step.num}</span>
                    <h3 style={{ fontSize: "1rem", fontWeight: 900, color: "#fff", margin: 0 }}>{step.title}</h3>
                  </div>
                  <p style={{ fontSize: "0.8rem", color: "rgba(255, 255, 255, 0.8)", lineHeight: 1.4, margin: 0 }}>{step.desc}</p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "auto", background: "rgba(0, 0, 0, 0.2)", padding: "1rem", borderRadius: "16px", border: "1px solid rgba(255, 255, 255, 0.05)" }}>
              <p style={{ color: "#fff", fontSize: "0.9rem", fontWeight: 600, lineHeight: 1.4, margin: 0 }}>
                💡 <span style={{ color: "#fbbf24" }}>Tujuan Utama:</span> Memastikan setiap langkah mendukung target organisasi.
              </p>
            </div>
          </motion.div>

          {/* Right Section: Focus Box */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <div style={{ background: "#fff", borderRadius: "20px", padding: "1.5rem", boxShadow: "0 15px 30px rgba(0,0,0,0.2)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.6rem" }}>
                <Factory size={20} color="#0e6655" />
                <h3 style={{ fontSize: "1.1rem", fontWeight: 900, color: "#0e6655", margin: 0 }}>Kaitan dengan PTPN</h3>
              </div>
              <p style={{ fontSize: "0.9rem", color: "#475569", lineHeight: 1.5, margin: 0 }}>
                BPI membantu menyederhanakan birokrasi, mempercepat alur data, serta menjaga <strong>Productivity, Cost, & Speed</strong> terjaga di seluruh unit.
              </p>
            </div>

            <div style={{ background: "rgba(251, 191, 36, 0.1)", borderRadius: "20px", padding: "1.5rem", border: "2px dashed #fbbf24" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 900, color: "#fbbf24", margin: "0 0 0.6rem 0" }}>Mindset Kaizen</h3>
              <p style={{ fontSize: "1rem", color: "#fff", lineHeight: 1.5, margin: 0, opacity: 0.9 }}>
                "Proses bisnis yang baik tidak pernah 'selesai'. Ia harus terus disempurnakan seiring perkembangan teknologi."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <SlideFooter />
    </div>
  );
}

function SlideWhatIsLean() {
  const principles = [
    { icon: <Calendar size={20} />, title: "Zero Waiting Time", desc: "Hilangkan waktu tunggu tidak produktif" },
    { icon: <Layers size={20} />, title: "Zero Inventory", desc: "Minimalkan stok berlebih pengikat modal" },
    { icon: <ArrowRight size={20} />, title: "Pull System", desc: "Produksi berdasarkan permintaan aktual" },
    { icon: <TrendingUp size={20} />, title: "Batch to Flow", desc: "Ubah batch besar menjadi aliran kontinu" },
    { icon: <BarChart3 size={20} />, title: "Line Balancing", desc: "Seembangkan beban kerja antar divisi" },
  ];

  const expectations = [
    { num: "01", text: "Ubah mindset 'Push' menjadi 'Pull' — kerja sesuai kebutuhan" },
    { num: "02", text: "Memenuhi kebutuhan pelanggan secara tepat & akurat" },
    { num: "03", text: "Right from the first time — benar sejak awal" },
    { num: "04", text: "Continuous Improvement — perbaikan berkelanjutan" },
  ];

  return (
    <div className="slide" style={{ padding: "1.5rem 4rem", background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)" }}>
      <AccentShapes />
      <div className="slide-header" style={{ marginBottom: "1rem", textAlign: "center" }}>
        <h1 className="slide-title" style={{ fontSize: "2.8rem", color: "#1a5276", marginBottom: "0.2rem" }}>
          <em>Prinsip Dasar Lean</em>
        </h1>
        <p className="slide-subtitle" style={{ fontSize: "1rem", color: "#64748b", fontWeight: 600 }}>Menghapus Pemborosan (Muda) untuk Kinerja Maksimal</p>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "0.8rem" }}>
          {principles.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.08 }}
              style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "1rem", textAlign: "center", boxShadow: "0 4px 10px rgba(0,0,0,0.02)" }}
            >
              <div style={{ background: "#1a5276", color: "#fff", width: "40px", height: "40px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 10px" }}>{p.icon}</div>
              <div style={{ fontSize: "0.85rem", fontWeight: 900, color: "#1a5276", marginBottom: "4px" }}>{p.title}</div>
              <div style={{ fontSize: "0.75rem", color: "#64748b", fontWeight: 600, lineHeight: 1.3 }}>{p.desc}</div>
            </motion.div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.2rem", flex: 1 }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            style={{ background: "linear-gradient(135deg, #0e6655 0%, #166534 100%)", borderRadius: "24px", padding: "1.5rem", color: "#fff" }}
          >
            <h2 style={{ fontSize: "1.3rem", fontWeight: 900, marginBottom: "1rem", color: "#6ee7b7" }}>Harapan Outcome</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
              {expectations.map((e, i) => (
                <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <div style={{ background: "rgba(255,255,255,0.2)", width: "22px", height: "22px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.7rem", fontWeight: 900, flexShrink: 0 }}>{e.num}</div>
                  <div style={{ fontSize: "0.85rem", fontWeight: 600, lineHeight: 1.4 }}>{e.text}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "24px", padding: "1.5rem", display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center" }}
          >
            <div style={{ background: "#f8fafc", borderRadius: "50%", width: "50px", height: "50px", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1rem" }}><Check size={28} color="#0e6655" /></div>
            <h3 style={{ fontSize: "1.2rem", fontWeight: 900, color: "#1e293b", margin: "0 0 0.8rem 0" }}>Prinsip Kerja</h3>
            <p style={{ fontSize: "0.95rem", color: "#64748b", fontWeight: 600, lineHeight: 1.6, margin: 0 }}>
              "Mengerjakan hal yang <strong style={{ color: "#0e6655" }}>benar</strong>, pada waktu yang <strong style={{ color: "#0e6655" }}>tepat</strong>, dalam jumlah yang <strong style={{ color: "#0e6655" }}>sesuai</strong>."
            </p>
          </motion.div>
        </div>
      </div>
      <SlideFooter />
    </div>
  );
}

function SlideLeanPhilosophy() {
  const pillars = [
    {
      icon: <Target size={28} />,
      title: "Nilai Pelanggan",
      subtitle: "Customer Value First",
      desc: "Semua aktivitas harus menciptakan nilai bagi pelanggan (internal & eksternal). Jika tidak memberi nilai tambah — itu adalah pemborosan.",
      color: "#0e6655",
      accent: "#10b981"
    },
    {
      icon: <X size={28} />,
      title: "Eliminasi MUDA",
      subtitle: "Hapus Pemborosan",
      desc: "MUDA (無駄) — istilah Jepang untuk segala sesuatu yang menambah biaya tanpa menambah nilai. Lean mengidentifikasi dan menghapus 8 jenis muda secara sistematis.",
      color: "#f97316",
      accent: "#fbbf24"
    },
    {
      icon: <TrendingUp size={28} />,
      title: "Kaizen",
      subtitle: "Perbaikan Berkelanjutan",
      desc: "Budaya perbaikan kecil yang konsisten setiap hari. Tidak menunggu perubahan besar — setiap orang berkontribusi menyempurnakan proses yang dijalankan.",
      color: "#1a5276",
      accent: "#3b82f6"
    }
  ];

  return (
    <div className="slide" style={{ padding: "2rem 4rem", background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)" }}>
      <AccentShapes />
      <div className="slide-header" style={{ marginBottom: "1.5rem", textAlign: "center" }}>
        <h1 className="slide-title" style={{ fontSize: "3.2rem", color: "#0e6655", marginBottom: "0.3rem" }}>
          <em>Filosofi Lean</em>
        </h1>
        <p className="slide-subtitle" style={{ fontSize: "1.2rem", color: "#64748b", fontWeight: 600 }}>
          Prinsip dasar yang melandasi metodologi perbaikan proses bisnis
        </p>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {/* Hero Tagline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{
            background: "linear-gradient(135deg, #064e3b 0%, #0e6655 50%, #1a5276 100%)",
            borderRadius: "24px",
            padding: "2.5rem 3rem",
            color: "#fff",
            textAlign: "center",
            position: "relative",
            overflow: "hidden"
          }}
        >
          <div style={{ position: "absolute", top: "-60px", left: "-60px", width: "200px", height: "200px", borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />
          <div style={{ position: "absolute", bottom: "-40px", right: "-40px", width: "150px", height: "150px", borderRadius: "50%", background: "rgba(255,255,255,0.03)" }} />

          <h2 style={{ fontSize: "2.8rem", fontWeight: 900, margin: "0 0 0.8rem 0", lineHeight: 1.2 }}>
            Berpikir <span style={{ color: "#fbbf24" }}>BESAR</span>, Bertindak <span style={{ color: "#6ee7b7" }}>CEPAT</span>
          </h2>
          <p style={{ fontSize: "1.3rem", fontWeight: 500, opacity: 0.85, margin: 0, maxWidth: "800px", marginLeft: "auto", marginRight: "auto", lineHeight: 1.5 }}>
            Lean bukan hanya tentang efisiensi — ia adalah <strong>cara berpikir</strong> yang menempatkan pelanggan di pusat setiap keputusan dan menjadikan perbaikan sebagai kebiasaan sehari-hari.
          </p>
        </motion.div>

        {/* 3 Philosophy Pillars */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem", flex: 1 }}>
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.15 }}
              style={{
                background: "#fff",
                borderRadius: "22px",
                padding: "2rem",
                border: "1px solid #f1f5f9",
                boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                overflow: "hidden"
              }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "5px", background: p.color }} />

              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.2rem" }}>
                <div style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "16px",
                  background: `${p.color}12`,
                  color: p.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  {p.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#1e293b", margin: 0 }}>{p.title}</h3>
                  <span style={{ fontSize: "0.85rem", fontWeight: 700, color: p.accent, textTransform: "uppercase", letterSpacing: "1px" }}>{p.subtitle}</span>
                </div>
              </div>

              <p style={{ fontSize: "1.1rem", color: "#475569", lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Context Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{
            background: "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
            borderRadius: "16px",
            padding: "1.2rem 2.5rem",
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            color: "#fff"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
            <Factory size={22} />
            <span style={{ fontWeight: 900, fontSize: "1rem", textTransform: "uppercase", letterSpacing: "1px" }}>Konteks PTPN</span>
          </div>
          <div style={{ width: "1px", height: "35px", background: "rgba(255,255,255,0.15)" }} />
          <p style={{ fontSize: "1.05rem", fontWeight: 600, margin: 0, lineHeight: 1.4, opacity: 0.9 }}>
            Dengan kompleksitas operasional perkebunan di seluruh Indonesia, filosofi Lean membantu <strong style={{ color: "#fbbf24" }}>mengurangi pemborosan</strong> di setiap proses — dari kebun hingga kantor — sehingga sumber daya difokuskan pada aktivitas yang benar-benar <strong style={{ color: "#6ee7b7" }}>menciptakan nilai</strong>.
          </p>
        </motion.div>
      </div>

      <SlideFooter />
    </div>
  );
}

function SlideMudaWaste() {
  const mudaList = [
    { num: "1", t: "Produksi Berlebih", d: "Membuat laporan yang tidak dibutuhkan unit manapun", icon: <Plus size={18} />, color: "#ef4444" },
    { num: "2", t: "Transportasi", d: "Perpindahan dokumen yang tidak menambah nilai", icon: <ArrowRight size={18} />, color: "#f97316" },
    { num: "3", t: "Gerakan Sia-sia", d: "Pergerakan orang yang tidak produktif (mencari file)", icon: <Users size={18} />, color: "#eab308" },
    { num: "4", t: "Menunggu", d: "Waktu idle karena material atau approval belum siap", icon: <Calendar size={18} />, color: "#22c55e" },
    { num: "5", t: "Proses Berlebih", d: "Upaya atau tahapan kerja yang tidak memberikan nilai pelanggan", icon: <Settings size={18} />, color: "#14b8a6" },
    { num: "6", t: "Inventaris Berlebih", d: "Stok dokumen atau data yang lebih banyak dari kebutuhan", icon: <Layers size={18} />, color: "#3b82f6" },
    { num: "7", t: "Cacat / Defect", d: "Pekerjaan yang mengandung kesalahan atau perlu dikerjakan ulang", icon: <X size={18} />, color: "#8b5cf6" },
    { num: "8", t: "Silo Pengetahuan", d: "Miskomunikasi antar bagian yang menyebabkan duplikasi", icon: <GitBranch size={18} />, color: "#ec4899" }
  ];

  return (
    <div className="slide" style={{ padding: "1.5rem 4rem", background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)" }}>
      <AccentShapes />
      <div className="slide-header" style={{ marginBottom: "1rem", textAlign: "center" }}>
        <h1 className="slide-title" style={{ fontSize: "2.6rem", color: "#0e6655", marginBottom: "0.2rem" }}>
          <em>8 Jenis Pemborosan (MUDA)</em>
        </h1>
        <p className="slide-subtitle" style={{ fontSize: "1rem", color: "#64748b", fontWeight: 600 }}>
          <span style={{ color: "#f97316", fontWeight: 800 }}>無駄</span> — Aktivitas yang menambah biaya tanpa nilai tambah
        </p>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.8rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.6rem", flex: 1 }}>
          {mudaList.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -15 : 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              style={{
                background: "#fff",
                borderRadius: "14px",
                padding: "0.8rem 1.2rem",
                border: "1px solid #f1f5f9",
                boxShadow: "0 4px 10px rgba(0,0,0,0.02)",
                display: "flex",
                gap: "1rem",
                alignItems: "center",
                position: "relative",
                overflow: "hidden"
              }}
            >
              <div style={{ position: "absolute", left: 0, top: 0, width: "4px", height: "100%", background: m.color }} />
              <div style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                background: `${m.color}12`,
                color: m.color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0
              }}>
                {m.icon}
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={{ fontSize: "0.95rem", fontWeight: 800, color: "#1e293b", margin: "0 0 2px 0" }}>{m.num}. {m.t}</h4>
                <p style={{ fontSize: "0.8rem", color: "#64748b", margin: 0, lineHeight: 1.3, fontWeight: 500 }}>{m.d}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            background: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
            borderRadius: "14px",
            padding: "0.8rem 2rem",
            display: "flex",
            alignItems: "center",
            gap: "1.2rem",
            color: "#fff"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
            <Target size={18} />
            <span style={{ fontWeight: 900, fontSize: "0.85rem", textTransform: "uppercase" }}>Tujuan</span>
          </div>
          <p style={{ fontSize: "0.9rem", fontWeight: 600, margin: 0, lineHeight: 1.4 }}>
            Eliminasi ke-8 pemborosan ini di setiap unit (Kebun, Pabrik, Kantor) untuk meningkatkan efisiensi dan kecepatan (Speed).
          </p>
        </motion.div>
      </div>
      <SlideFooter />
    </div>
  );
}

function SlideVSM() {
  const benefits = [
    { label: "Value Added Ratio", metric: "PRODUKTIVITAS", icon: <BarChart3 size={24} />, color: "#0e6655" },
    { label: "Efisiensi", metric: "BIAYA", icon: <Wallet size={24} />, color: "#f97316" },
    { label: "Lead Time", metric: "KECEPATAN", icon: <TrendingUp size={24} />, color: "#1a5276" },
  ];

  const fromItems = ["Peta proses tanpa tindak lanjut", "Kaizen event tanpa ukur hasil", "Hanya andalkan koordinator Lean", "Tim tanpa kejelasan peran & target"];
  const toItems = ["Koneksi seluruh area & orang", "Pendekatan proses berkelanjutan", "Lean dipahami seluruh karyawan", "Rencana implementasi terukur"];

  return (
    <div className="slide" style={{ padding: "1.5rem 4rem", background: "linear-gradient(135deg, #f8fafc 0%, #fff 100%)" }}>
      <AccentShapes />
      <div className="slide-header" style={{ marginBottom: "1rem", textAlign: "center" }}>
        <h1 className="slide-title" style={{ fontSize: "2.6rem", color: "#1a5276", marginBottom: "0.2rem" }}>
          <em>Mengapa VSM (Value Stream Mapping)?</em>
        </h1>
        <p style={{ fontSize: "1rem", color: "#64748b", fontWeight: 600 }}>Menghubungkan Proses Menuju Arsitektur Lean</p>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "18px", padding: "1.2rem", textAlign: "center", borderTop: `5px solid ${b.color}` }}
            >
              <div style={{ color: b.color, marginBottom: "8px", display: "flex", justifyContent: "center" }}>{b.icon}</div>
              <div style={{ fontSize: "0.75rem", fontWeight: 800, color: "#94a3b8" }}>{b.label}</div>
              <div style={{ fontSize: "1.1rem", fontWeight: 900, color: b.color }}>{b.metric}</div>
            </motion.div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", flex: 1 }}>
          <div style={{ background: "#fef2f2", padding: "1.2rem", borderRadius: "18px", border: "1px solid #fee2e2" }}>
            <h3 style={{ fontSize: "1.1rem", color: "#991b1b", fontWeight: 800, marginBottom: "0.8rem", display: "flex", alignItems: "center", gap: "8px" }}><X size={18} /> Traditional Approach</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {fromItems.map((item, i) => (
                <div key={i} style={{ fontSize: "0.85rem", color: "#7f1d1d", fontWeight: 600, display: "flex", gap: "8px" }}>
                  <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#ef4444", marginTop: "8px" }} />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: "#f0fdf4", padding: "1.2rem", borderRadius: "18px", border: "1px solid #dcfce7" }}>
            <h3 style={{ fontSize: "1.1rem", color: "#166534", fontWeight: 800, marginBottom: "0.8rem", display: "flex", alignItems: "center", gap: "8px" }}><Check size={18} /> VSM / Lean Journey</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {toItems.map((item, i) => (
                <div key={i} style={{ fontSize: "0.85rem", color: "#14532d", fontWeight: 600, display: "flex", gap: "8px" }}>
                  <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#22c55e", marginTop: "8px" }} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <SlideFooter />
    </div>
  );
}

/* =============================
   SECTION DIVIDER: BAGIAN 3 — EXISTING VS 2026
   ============================= */
function SlideSectionExistingVs2026() {
  return (
    <div className="slide" style={{ padding: "0", background: "#fff", display: "flex", flexDirection: "row" }}>
      <div style={{ flex: 1.2, position: "relative", overflow: "hidden", background: "#1a5276" }}>
        <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "80%", background: "linear-gradient(to top, rgba(0,0,0,0.4), transparent)" }}></div>
        <div style={{ padding: "4rem", position: "relative", zIndex: 1, color: "#fff" }}>
          <div style={{ background: "#fff", padding: "10px", borderRadius: "8px", width: "fit-content", marginBottom: "2rem" }}>
            <div style={{ color: "#1a5276", fontWeight: 900, fontSize: "1.2rem", letterSpacing: "1px" }}>PTPN GROUP</div>
          </div>
          <h2 style={{ fontSize: "5rem", fontWeight: 900, lineHeight: 1, textTransform: "uppercase", letterSpacing: "-2px" }}>
            Evaluasi <br />
            <span style={{ color: "#f1c40f" }}>Regulasi &</span> <br />
            Perubahan <br />
            Paradigma
          </h2>
        </div>
        <div style={{ position: "absolute", bottom: "10%", right: "5%", opacity: 0.1 }}>
          <FileText size={400} />
        </div>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "4rem", background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "#1a5276", marginBottom: "1rem", letterSpacing: "2px" }}>BAGIAN 03 :</div>
          <h1 style={{ fontSize: "3rem", fontWeight: 900, color: "#1e293b", marginBottom: "2rem", lineHeight: 1.1 }}>Evaluasi Existing & Perubahan Regulasi</h1>
          <div style={{ width: "80px", height: "8px", background: "#1a5276", borderRadius: "4px", marginBottom: "2rem" }}></div>
          <p style={{ fontSize: "1.1rem", color: "#64748b", fontWeight: 600, lineHeight: 1.6 }}>
            Mengevaluasi kerangka PMS 2022–2025 yang berjalan, mengidentifikasi gap dan kelemahan, serta memahami perubahan kunci pada draft Perdir SMKTI 2026 yang memperkuat governance, fairness, dan legal defensibility.
          </p>
        </motion.div>
      </div>
      <div style={{ position: "absolute", bottom: "6.5rem", right: "2rem", display: "flex", alignItems: "center", gap: "10px" }}>
        <div style={{ textAlign: "right", borderRight: "2px solid #1a5276", paddingRight: "15px" }}>
          <div style={{ fontWeight: 900, fontSize: "0.8rem", color: "#1e293b" }}>ONE PTPN</div>
          <div style={{ fontWeight: 700, fontSize: "0.6rem", color: "#64748b" }}>CULTURE</div>
        </div>
        <Award size={32} color="#1a5276" />
      </div>
    </div>
  );
}

/* =============================
   SECTION DIVIDER: BAGIAN 4 — DESIGN 2026
   ============================= */
function SlideSectionDesign2026() {
  return (
    <div className="slide" style={{ padding: "0", background: "#fff", display: "flex", flexDirection: "row" }}>
      <div style={{ flex: 1.2, position: "relative", overflow: "hidden", background: "linear-gradient(135deg, #064e3b 0%, #0e6655 100%)" }}>
        <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "80%", background: "linear-gradient(to top, rgba(0,0,0,0.4), transparent)" }}></div>
        <div style={{ padding: "4rem", position: "relative", zIndex: 1, color: "#fff" }}>
          <div style={{ background: "#fff", padding: "10px", borderRadius: "8px", width: "fit-content", marginBottom: "2rem" }}>
            <div style={{ color: "#0e6655", fontWeight: 900, fontSize: "1.2rem", letterSpacing: "1px" }}>PTPN GROUP</div>
          </div>
          <h2 style={{ fontSize: "5rem", fontWeight: 900, lineHeight: 1, textTransform: "uppercase", letterSpacing: "-2px" }}>
            Desain <br />
            <span style={{ color: "#fbbf24" }}>Arsitektur</span> <br />
            SMKTI <br />
            2026
          </h2>
        </div>
        <div style={{ position: "absolute", bottom: "10%", right: "5%", opacity: 0.1 }}>
          <Layers size={400} />
        </div>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "4rem", background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "#0e6655", marginBottom: "1rem", letterSpacing: "2px" }}>BAGIAN 04 :</div>
          <h1 style={{ fontSize: "3rem", fontWeight: 900, color: "#1e293b", marginBottom: "2rem", lineHeight: 1.1 }}>Desain Arsitektur & Opsi Rating</h1>
          <div style={{ width: "80px", height: "8px", background: "#0e6655", borderRadius: "4px", marginBottom: "2rem" }}></div>
          <p style={{ fontSize: "1.1rem", color: "#64748b", fontWeight: 600, lineHeight: 1.6 }}>
            Menyajikan dua opsi arsitektur SMKTI 2026 (dengan dan tanpa distribusi rating), analisis pro-contra, serta mekanisme pembobotan dan dampak terhadap reward. Bagian ini memberikan landasan pengambilan keputusan bagi Direksi.
          </p>
        </motion.div>
      </div>
      <div style={{ position: "absolute", bottom: "6.5rem", right: "2rem", display: "flex", alignItems: "center", gap: "10px" }}>
        <div style={{ textAlign: "right", borderRight: "2px solid #0e6655", paddingRight: "15px" }}>
          <div style={{ fontWeight: 900, fontSize: "0.8rem", color: "#1e293b" }}>ONE PTPN</div>
          <div style={{ fontWeight: 700, fontSize: "0.6rem", color: "#64748b" }}>CULTURE</div>
        </div>
        <Award size={32} color="#0e6655" />
      </div>
    </div>
  );
}

/* =============================
   SECTION DIVIDER: BAGIAN 5 — IMPLEMENTATION
   ============================= */
function SlideSectionImplementation() {
  return (
    <div className="slide" style={{ padding: "0", background: "#fff", display: "flex", flexDirection: "row" }}>
      <div style={{ flex: 1.2, position: "relative", overflow: "hidden", background: "#e67e22" }}>
        <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "80%", background: "linear-gradient(to top, rgba(0,0,0,0.4), transparent)" }}></div>
        <div style={{ padding: "4rem", position: "relative", zIndex: 1, color: "#fff" }}>
          <div style={{ background: "#fff", padding: "10px", borderRadius: "8px", width: "fit-content", marginBottom: "2rem" }}>
            <div style={{ color: "#e67e22", fontWeight: 900, fontSize: "1.2rem", letterSpacing: "1px" }}>PTPN GROUP</div>
          </div>
          <h2 style={{ fontSize: "5rem", fontWeight: 900, lineHeight: 1, textTransform: "uppercase", letterSpacing: "-2px" }}>
            Implementasi <br />
            <span style={{ color: "#fff598" }}>&</span> <br />
            Roadmap
          </h2>
        </div>
        <div style={{ position: "absolute", bottom: "10%", right: "5%", opacity: 0.1 }}>
          <Calendar size={400} />
        </div>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "4rem", background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "#e67e22", marginBottom: "1rem", letterSpacing: "2px" }}>BAGIAN 05 :</div>
          <h1 style={{ fontSize: "3rem", fontWeight: 900, color: "#1e293b", marginBottom: "2rem", lineHeight: 1.1 }}>Implementasi, Timeline & Monitoring</h1>
          <div style={{ width: "80px", height: "8px", background: "#e67e22", borderRadius: "4px", marginBottom: "2rem" }}></div>
          <p style={{ fontSize: "1.1rem", color: "#64748b", fontWeight: 600, lineHeight: 1.6 }}>
            Rencana implementasi bertahap, project charter, serta update progress pengisian kinerja dan matriks KPI per entitas PTPN Group per Maret 2026. Memastikan transisi dari desain ke eksekusi berjalan terukur.
          </p>
        </motion.div>
      </div>
      <div style={{ position: "absolute", bottom: "6.5rem", right: "2rem", display: "flex", alignItems: "center", gap: "10px" }}>
        <div style={{ textAlign: "right", borderRight: "2px solid #e67e22", paddingRight: "15px" }}>
          <div style={{ fontWeight: 900, fontSize: "0.8rem", color: "#1e293b" }}>ONE PTPN</div>
          <div style={{ fontWeight: 700, fontSize: "0.6rem", color: "#64748b" }}>CULTURE</div>
        </div>
        <Award size={32} color="#e67e22" />
      </div>
    </div>
  );
}

/* =============================
   GOVERNANCE & TATA KELOLA
   ============================= */
function SlideGovernance() {
  const roles = [
    { level: "Steering Committee", who: "Direksi PTPN III (Holding)", role: "Sponsor & Approval", frequency: "Kuartal", color: "#0e6655" },
    { level: "Project Lead", who: "Direktorat HC / SDM", role: "P.J Implementasi", frequency: "Bulanan", color: "#1a5276" },
    { level: "Technical Team", who: "Tim IT & Analytics", role: "Sistem APMS 2.0", frequency: "Mingguan", color: "#f97316" },
    { level: "Entity PIC", who: "VP/GM SDM Entitas", role: "Koordinasi PTPN I, IV, SGN", frequency: "Bulanan", color: "#0e6655" },
    { level: "Change Agent", who: "HR Champion Unit", role: "Sosialisasi & Training", frequency: "Ongoing", color: "#1a5276" },
  ];

  return (
    <div className="slide" style={{ padding: "1.5rem 4rem", background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)" }}>
      <AccentShapes />
      <div className="slide-header" style={{ marginBottom: "1rem", textAlign: "center" }}>
        <h1 className="slide-title" style={{ fontSize: "2.6rem", color: "#0e6655", marginBottom: "0.2rem" }}>
          <em>Governance & Tata Kelola</em>
        </h1>
        <p className="slide-subtitle" style={{ fontSize: "1rem", color: "#64748b", fontWeight: 600 }}>
          Struktur Penanggung Jawab Implementasi SMKTI
        </p>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
        {/* Header Row */}
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1.3fr 1.8fr 0.8fr", gap: "0.6rem", padding: "0.5rem 1rem" }}>
          {["Level", "Penanggung Jawab", "Peran", "Freq"].map((h, i) => (
            <div key={i} style={{ fontSize: "0.8rem", fontWeight: 900, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "1px" }}>{h}</div>
          ))}
        </div>

        {roles.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08 }}
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr 1.3fr 1.8fr 0.8fr",
              gap: "0.6rem",
              background: "#fff",
              borderRadius: "14px",
              padding: "0.9rem 1.2rem",
              border: "1px solid #f1f5f9",
              boxShadow: "0 4px 10px rgba(0,0,0,0.02)",
              alignItems: "center",
              borderLeft: `5px solid ${r.color}`
            }}
          >
            <div style={{ fontWeight: 900, fontSize: "1rem", color: r.color }}>{r.level}</div>
            <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#334155" }}>{r.who}</div>
            <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "#64748b", lineHeight: 1.3 }}>{r.role}</div>
            <div style={{ background: `${r.color}10`, color: r.color, padding: "4px 10px", borderRadius: "8px", fontSize: "0.8rem", fontWeight: 800, textAlign: "center" }}>{r.frequency}</div>
          </motion.div>
        ))}

        {/* Escalation Path */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            marginTop: "0.4rem",
            background: "linear-gradient(135deg, #1e293b, #0e6655)",
            borderRadius: "16px",
            padding: "1rem 2rem",
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            color: "#fff"
          }}
        >
          <div style={{ background: "#fbbf24", color: "#1e293b", padding: "6px 14px", borderRadius: "8px", fontWeight: 900, fontSize: "0.8rem", flexShrink: 0 }}>ESKALASI</div>
          <p style={{ fontSize: "0.95rem", fontWeight: 600, margin: 0, lineHeight: 1.4 }}>
            Isu operasional → <strong style={{ color: "#6ee7b7" }}>Entity PIC</strong> → Project Lead → <strong style={{ color: "#fbbf24" }}>Steering Committee (Direksi)</strong>
          </p>
        </motion.div>
      </div>
      <SlideFooter />
    </div>
  );
}

/* =============================
   CHANGE MANAGEMENT & SOSIALISASI
   ============================= */
function SlideChangeManagement() {
  const phases = [
    {
      phase: "FASE 1",
      title: "Persiapan & Awareness",
      period: "Mar — Mei 2026",
      color: "#0e6655",
      items: ["Sosialisasi Direksi & VP", "Pembentukan Change Agent", "Kick-off Meeting 4 Entitas"]
    },
    {
      phase: "FASE 2",
      title: "Pelatihan & Uji Coba",
      period: "Jun — Sep 2026",
      color: "#1a5276",
      items: ["Training BSC & APMS 2.0", "Pilot run unit terpilih", "Feedback & Penyesuaian"]
    },
    {
      phase: "FASE 3",
      title: "Rollout & Stabilisasi",
      period: "Okt 2026 — Mar 2027",
      color: "#f97316",
      items: ["Go-live di 4 entitas", "Pendampingan Intensif", "Evaluasi & Penyempurnaan"]
    },
    {
      phase: "FASE 4",
      title: "Continuous Adoption",
      period: "Apr 2027 — Seterusnya",
      color: "#0e6655",
      items: ["Sustaining performance", "Talent management linkage", "Digital audit trail 100%"]
    }
  ];

  return (
    <div className="slide" style={{ padding: "1.5rem 3.5rem", background: "linear-gradient(135deg, #1e293b 0%, #334155 100%)", color: "#fff" }}>
      <AccentShapes />
      <div className="slide-header" style={{ marginBottom: "1.5rem", textAlign: "left" }}>
        <h1 className="slide-title" style={{ fontSize: "2.4rem", color: "#fff" }}>
          <em>Change Management & Roadmap</em>
        </h1>
        <p className="slide-subtitle" style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.6)", fontWeight: 600 }}>Timeline Sosialisasi & Implementasi Terintegrasi</p>
      </div>

      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}>
        {phases.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            style={{
              background: "rgba(255,255,255,0.05)",
              border: `1px solid ${p.color}aa`,
              borderRadius: "20px",
              padding: "1.2rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.8rem",
              position: "relative"
            }}
          >
            <div style={{ background: p.color, padding: "4px 12px", borderRadius: "10px", fontSize: "0.75rem", fontWeight: 900, display: "inline-block", width: "fit-content" }}>{p.phase}</div>
            <div>
              <div style={{ fontSize: "1.1rem", fontWeight: 900, marginBottom: "2px" }}>{p.title}</div>
              <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", fontWeight: 700 }}>{p.period}</div>
            </div>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "8px", marginTop: "0.5rem" }}>
              {p.items.map((item, idx) => (
                <div key={idx} style={{ display: "flex", gap: "8px", fontSize: "0.82rem", lineHeight: 1.3, fontWeight: 500 }}>
                  <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: p.color, marginTop: "6px", flexShrink: 0 }}></div>
                  {item}
                </div>
              ))}
            </div>
            {/* Progress indicator */}
            <div style={{ marginTop: "1.5rem", display: "flex", gap: "4px" }}>
              {[0, 1, 2, 3].map(j => (
                <div key={j} style={{ flex: 1, height: "4px", borderRadius: "2px", background: j <= i ? p.color : "#e2e8f0" }} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        style={{ marginTop: "1.2rem", background: "linear-gradient(135deg, #0e6655, #1a5276)", borderRadius: "16px", padding: "1.2rem 2.5rem", display: "flex", alignItems: "center", gap: "1.5rem", color: "#fff" }}
      >
        <Users size={22} />
        <p style={{ fontSize: "1.1rem", fontWeight: 700, margin: 0, lineHeight: 1.4 }}>
          Kunci keberhasilan: <strong style={{ color: "#fbbf24" }}>komitmen pimpinan</strong> di setiap level, komunikasi transparan, dan pendampingan berkelanjutan hingga perubahan menjadi budaya kerja baru.
        </p>
      </motion.div>
      <SlideFooter />
    </div>
  );
}

/* =============================
   RISK & MITIGASI
   ============================= */
function SlideRiskMitigation() {
  const risks = [
    {
      risk: "Resistensi Perubahan",
      level: "TINGGI",
      levelColor: "#dc2626",
      desc: "Karyawan dan pimpinan unit terbiasa dengan sistem lama, enggan beradaptasi.",
      mitigation: "Sosialisasi bertahap, dukungan Direksi secara eksplisit, quick wins sebagai bukti manfaat."
    },
    {
      risk: "Kualitas Data Tidak Konsisten",
      level: "TINGGI",
      levelColor: "#dc2626",
      desc: "Data KPI antar entitas belum terstandarisasi, risiko data tidak valid.",
      mitigation: "Data cleansing sebelum migrasi, standarisasi format, validasi oleh Entity PIC."
    },
    {
      risk: "Kapasitas Tim IT Terbatas",
      level: "SEDANG",
      levelColor: "#f59e0b",
      desc: "Pengembangan APMS 2.0 membutuhkan resource IT yang signifikan.",
      mitigation: "Prioritaskan fitur MVP, gunakan pendekatan agile, libatkan vendor jika perlu."
    },
    {
      risk: "Timeline Terlalu Optimis",
      level: "SEDANG",
      levelColor: "#f59e0b",
      desc: "14 bulan untuk 4 entitas bisa terlambat jika ada kendala regulasi.",
      mitigation: "Buffer time di setiap milestone, eskalasi cepat, fase pilot sebelum full rollout."
    },
    {
      risk: "Ketidakselarasan Regulasi",
      level: "RENDAH",
      levelColor: "#22c55e",
      desc: "Draft Perdir SMKTI bisa berbenturan dengan aturan Kementerian BUMN.",
      mitigation: "Review legal sejak awal, koordinasi dengan Biro Hukum dan Kementerian."
    }
  ];

  return (
    <div className="slide" style={{ padding: "1.2rem 3.5rem", background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)" }}>
      <AccentShapes />
      <div className="slide-header" style={{ marginBottom: "1rem", textAlign: "center" }}>
        <h1 className="slide-title" style={{ fontSize: "3rem", color: "#0e6655", marginBottom: "0.2rem" }}>
          <em>Risk & Mitigasi</em>
        </h1>
        <p className="slide-subtitle" style={{ fontSize: "1.1rem", color: "#64748b", fontWeight: 600 }}>
          Identifikasi Risiko Utama & Rencana Penanganan Proaktif
        </p>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
        {/* Header */}
        <div style={{ display: "grid", gridTemplateColumns: "0.8fr 0.5fr 2fr 2.5fr", gap: "0.8rem", padding: "0.5rem 1.2rem" }}>
          {["Risiko", "Level", "Deskripsi", "Rencana Mitigasi"].map((h, i) => (
            <div key={i} style={{ fontSize: "0.85rem", fontWeight: 900, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "1px" }}>{h}</div>
          ))}
        </div>

        {risks.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            style={{
              display: "grid",
              gridTemplateColumns: "0.8fr 0.5fr 2fr 2.5fr",
              gap: "0.8rem",
              background: "#fff",
              borderRadius: "16px",
              padding: "1rem 1.5rem",
              border: "1px solid #f1f5f9",
              boxShadow: "0 3px 10px rgba(0,0,0,0.02)",
              alignItems: "center"
            }}
          >
            <div style={{ fontWeight: 900, fontSize: "1rem", color: "#1e293b" }}>{r.risk}</div>
            <div style={{ background: `${r.levelColor}15`, color: r.levelColor, padding: "4px 12px", borderRadius: "8px", fontSize: "0.75rem", fontWeight: 900, textAlign: "center", letterSpacing: "0.5px" }}>{r.level}</div>
            <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "#64748b", lineHeight: 1.4 }}>{r.desc}</div>
            <div style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
              <ShieldCheck size={16} color="#0e6655" style={{ marginTop: "2px", flexShrink: 0 }} />
              <span style={{ fontSize: "0.9rem", fontWeight: 700, color: "#0e6655", lineHeight: 1.4 }}>{r.mitigation}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        style={{ marginTop: "0.8rem", background: "linear-gradient(135deg, #1e293b, #0e6655)", borderRadius: "16px", padding: "1rem 2rem", display: "flex", alignItems: "center", gap: "1.2rem", color: "#fff" }}
      >
        <ShieldCheck size={20} />
        <p style={{ fontSize: "1rem", fontWeight: 700, margin: 0 }}>
          Pendekatan <strong style={{ color: "#fbbf24" }}>proaktif</strong>: setiap risiko telah diidentifikasi sejak awal dengan rencana mitigasi spesifik untuk meminimalkan dampak terhadap timeline dan kualitas implementasi.
        </p>
      </motion.div>
      <SlideFooter />
    </div>
  );
}

/* =============================
   NEXT STEPS & TINDAK LANJUT
   ============================= */
function SlideNextSteps() {
  const steps = [
    {
      num: "01",
      title: "Persetujuan Framework SMKTI 2026",
      desc: "Direksi menyetujui kerangka kerja, arsitektur desain, dan model rating yang diusulkan.",
      deadline: "Maret 2026",
      owner: "Direksi",
      color: "#0e6655"
    },
    {
      num: "02",
      title: "Pengesahan Draft Peraturan Direksi",
      desc: "Finalisasi dan pengesahan Perdir SMKTI sebagai landasan hukum implementasi.",
      deadline: "April 2026",
      owner: "Sekretaris Perusahaan",
      color: "#1a5276"
    },
    {
      num: "03",
      title: "Mobilisasi Tim & Kick-off",
      desc: "Pembentukan tim project, penunjukan Entity PIC, dan kick-off meeting seluruh entitas.",
      deadline: "April 2026",
      owner: "Direktorat HC",
      color: "#f97316"
    },
    {
      num: "04",
      title: "Pengembangan APMS 2.0 dan Pengujian",
      desc: "Mulai development sistem digital APMS 2.0 dengan fitur BSC, cascading KPI, dan dashboard real-time.",
      deadline: "Des '25 — Mar '26",
      owner: "Subdiv Manajemen Kinerja & HCIS",
      color: "#0e6655"
    },
    {
      num: "05",
      title: "Implementasi",
      desc: "Implementasi di holding dan subholding",
      deadline: "April 2026",
      owner: "Entity PIC",
      color: "#1a5276"
    }
  ];

  return (
    <div className="slide" style={{ padding: "2rem 4rem", background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0e6655 100%)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "-80px", right: "-80px", width: "350px", height: "350px", borderRadius: "50%", background: "rgba(14, 102, 85, 0.12)", filter: "blur(50px)" }} />

      <div style={{ position: "relative", zIndex: 1, height: "100%", display: "flex", flexDirection: "column" }}>
        <div className="slide-header" style={{ marginBottom: "2rem", textAlign: "center" }}>
          <h1 style={{ fontSize: "3.5rem", color: "#fff", fontWeight: 900, margin: 0 }}>
            <em>Next Steps & Tindak Lanjut</em>
          </h1>
          <p style={{ fontSize: "1.2rem", color: "#6ee7b7", fontWeight: 700, marginTop: "0.5rem", letterSpacing: "1px" }}>
            Langkah Konkret Pasca-Persetujuan Direksi
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem", flex: 1 }}>
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.12 }}
              style={{
                background: "rgba(255, 255, 255, 0.07)",
                backdropFilter: "blur(10px)",
                borderRadius: "20px",
                padding: "1.3rem 2rem",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                display: "grid",
                gridTemplateColumns: "60px 1fr auto auto",
                gap: "1.5rem",
                alignItems: "center"
              }}
            >
              <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: s.color, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: "1.3rem", boxShadow: `0 6px 18px ${s.color}40` }}>
                {s.num}
              </div>
              <div>
                <div style={{ fontSize: "1.2rem", fontWeight: 900, color: "#fff", marginBottom: "4px" }}>{s.title}</div>
                <div style={{ fontSize: "0.95rem", fontWeight: 600, color: "rgba(255,255,255,0.7)", lineHeight: 1.4 }}>{s.desc}</div>
              </div>
              <div style={{ textAlign: "center", minWidth: "130px" }}>
                <div style={{ fontSize: "0.75rem", fontWeight: 800, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px" }}>Deadline</div>
                <div style={{ fontSize: "1rem", fontWeight: 900, color: "#fbbf24" }}>{s.deadline}</div>
              </div>
              <div style={{ textAlign: "center", minWidth: "130px" }}>
                <div style={{ fontSize: "0.75rem", fontWeight: 800, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px" }}>PIC</div>
                <div style={{ fontSize: "1rem", fontWeight: 800, color: "#6ee7b7" }}>{s.owner}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          style={{
            marginTop: "1rem",
            background: "linear-gradient(135deg, rgba(251, 191, 36, 0.15), rgba(249, 115, 22, 0.1))",
            borderRadius: "18px",
            padding: "1.3rem 2.5rem",
            border: "1px solid rgba(251, 191, 36, 0.25)",
            display: "flex",
            alignItems: "center",
            gap: "1.5rem"
          }}
        >
          <div style={{ background: "#fbbf24", color: "#0f172a", padding: "10px 22px", borderRadius: "12px", fontWeight: 900, fontSize: "0.95rem", flexShrink: 0 }}>KEY ASK</div>
          <p style={{ fontSize: "1.15rem", fontWeight: 700, color: "#fff", margin: 0, lineHeight: 1.4 }}>
            Mohon <strong style={{ color: "#fbbf24" }}>persetujuan prinsip</strong> atas framework SMKTI 2026 hari ini agar tim dapat segera memulai mobilisasi dan pengembangan sistem di bulan <strong style={{ color: "#6ee7b7" }}>April 2026</strong>.
          </p>
        </motion.div>
      </div>
      <SlideFooter />
    </div>
  );
}

/* =============================
   SECTION DIVIDER: CLOSING & APPENDIX
   ============================= */
function SlideSectionClosing() {
  return (
    <div className="slide" style={{ padding: "0", background: "#fff", display: "flex", flexDirection: "row" }}>
      <div style={{ flex: 1.2, position: "relative", overflow: "hidden", background: "linear-gradient(135deg, #1e293b 0%, #334155 100%)" }}>
        <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "80%", background: "linear-gradient(to top, rgba(0,0,0,0.4), transparent)" }}></div>
        <div style={{ padding: "4rem", position: "relative", zIndex: 1, color: "#fff" }}>
          <div style={{ background: "#fff", padding: "10px", borderRadius: "8px", width: "fit-content", marginBottom: "2rem" }}>
            <div style={{ color: "#1e293b", fontWeight: 900, fontSize: "1.2rem", letterSpacing: "1px" }}>PTPN GROUP</div>
          </div>
          <h2 style={{ fontSize: "5rem", fontWeight: 900, lineHeight: 1, textTransform: "uppercase", letterSpacing: "-2px" }}>
            Penutup <br />
            <span style={{ color: "#f1c40f" }}>&</span> <br />
            Lampiran
          </h2>
        </div>
        <div style={{ position: "absolute", bottom: "10%", right: "5%", opacity: 0.1 }}>
          <FileText size={400} />
        </div>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "4rem", background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "#475569", marginBottom: "1rem", letterSpacing: "2px" }}>BAGIAN 07 :</div>
          <h1 style={{ fontSize: "3rem", fontWeight: 900, color: "#1e293b", marginBottom: "2rem", lineHeight: 1.1 }}>Penutup, FAQ & Lampiran Referensi</h1>
          <div style={{ width: "80px", height: "8px", background: "#475569", borderRadius: "4px", marginBottom: "2rem" }}></div>
          <p style={{ fontSize: "1.1rem", color: "#64748b", fontWeight: 600, lineHeight: 1.6 }}>
            Menjawab pertanyaan umum terkait draft Perdir SMKTI 2026, dilengkapi lampiran terminologi, model penilaian historis, dan referensi rating global sebagai bahan pertimbangan tambahan bagi Direksi.
          </p>
        </motion.div>
      </div>
      <div style={{ position: "absolute", bottom: "6.5rem", right: "2rem", display: "flex", alignItems: "center", gap: "10px" }}>
        <div style={{ textAlign: "right", borderRight: "2px solid #475569", paddingRight: "15px" }}>
          <div style={{ fontWeight: 900, fontSize: "0.8rem", color: "#1e293b" }}>ONE PTPN</div>
          <div style={{ fontWeight: 700, fontSize: "0.6rem", color: "#64748b" }}>CULTURE</div>
        </div>
        <Award size={32} color="#475569" />
      </div>
    </div>
  );
}

/* =============================
   BRIDGE SLIDE: WHY BPI MATTERS FOR SMKTI
   ============================= */
function SlideBPIImportance() {
  const connections = [
    {
      from: "SMKTI 2026",
      action: "Strategi & Objektif",
      to: "KPI & Target Karyawan",
      icon: <Target size={24} />,
      color: "#0e6655"
    },
    {
      from: "KPI & Target",
      action: "Eksekusi Operasional",
      to: "Proses Bisnis Sehari-hari",
      icon: <Settings size={24} />,
      color: "#1a5276"
    },
    {
      from: "Proses Bisnis",
      action: "Optimasi Berkelanjutan",
      to: "BPI / Lean Methodology",
      icon: <TrendingUp size={24} />,
      color: "#f97316"
    }
  ];

  const pcsCards = [
    {
      metric: "Productivity",
      title: "PRODUKTIVITAS",
      icon: <BarChart3 size={32} />,
      desc: "Lean meningkatkan rasio Output/Input — memastikan target KPI Produktivitas unit tercapai.",
      color: "#0e6655",
      accent: "#10b981"
    },
    {
      metric: "Cost",
      title: "EFISIENSI BIAYA",
      icon: <Wallet size={32} />,
      desc: "Eliminasi MUDA (pemborosan) secara sistematis untuk menekan biaya operasional (KPI Cost).",
      color: "#1a5276",
      accent: "#3b82f6"
    },
    {
      metric: "Speed",
      title: "KECEPATAN",
      icon: <TrendingUp size={32} />,
      desc: "VSM mempercepat Lead Time proses — memastikan target KPI Kecepatan/Ketepatan Waktu.",
      color: "#f97316",
      accent: "#fbbf24"
    }
  ];

  return (
    <div className="slide" style={{ padding: "1.5rem 4rem", background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)" }}>
      <AccentShapes />
      <div className="slide-header" style={{ marginBottom: "1.2rem", textAlign: "center" }}>
        <h1 className="slide-title" style={{ fontSize: "2.8rem", color: "#0e6655", marginBottom: "0.3rem" }}>
          <em>Mengapa BPI Penting bagi SMKTI?</em>
        </h1>
        <p className="slide-subtitle" style={{ fontSize: "1.1rem", color: "#64748b", fontWeight: 600 }}>
          Menghubungkan Target Kinerja dengan Realita Eksekusi di Lapangan
        </p>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1.2rem" }}>
        {/* Connection Flow Section */}
        <div style={{ background: "rgba(255,255,255,0.6)", borderRadius: "24px", padding: "1.5rem", border: "1px solid #e2e8f0", boxShadow: "0 15px 40px rgba(0,0,0,0.02)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: "0.8rem", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
              {connections.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15 }}
                  style={{
                    background: "#fff",
                    padding: "1.2rem 1.8rem",
                    borderRadius: "18px",
                    border: `1px solid ${item.color}20`,
                    boxShadow: "0 4px 15px rgba(0,0,0,0.03)",
                    display: "flex",
                    alignItems: "center",
                    gap: "1.2rem",
                    position: "relative"
                  }}
                >
                  <div style={{ width: "45px", height: "45px", borderRadius: "12px", background: `${item.color}15`, color: item.color, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "1px" }}>Langkah {i + 1}</div>
                    <div style={{ fontSize: "1.2rem", fontWeight: 900, color: "#1e293b" }}>{item.from}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div style={{ padding: "0 1rem", display: "flex", flexDirection: "column", gap: "2.8rem", alignItems: "center" }}>
              {[0, 1, 2].map(i => (
                <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px" }}>
                  <ArrowRight size={20} color={connections[i].color} />
                  <span style={{ fontSize: "0.65rem", fontWeight: 800, color: "#94a3b8", whiteSpace: "nowrap", textTransform: "uppercase" }}>{connections[i].action}</span>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
              {connections.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.15 }}
                  style={{
                    background: `linear-gradient(135deg, ${item.color} 0%, ${item.color}dd 100%)`,
                    padding: "1.2rem 1.8rem",
                    borderRadius: "18px",
                    color: "#fff",
                    boxShadow: `0 8px 20px ${item.color}30`,
                    display: "flex",
                    alignItems: "center",
                    minHeight: "75px"
                  }}
                >
                  <div style={{ fontSize: "1.1rem", fontWeight: 700 }}>{item.to}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* PCS Cards Section */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
          {pcsCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.15 }}
              style={{
                background: "#fff",
                borderRadius: "20px",
                padding: "1.2rem",
                border: "1px solid #f1f5f9",
                boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
                display: "flex",
                flexDirection: "column",
                gap: "0.8rem",
                position: "relative"
              }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "6px", background: card.color, borderRadius: "24px 24px 0 0" }} />
              <div style={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
                <div style={{ width: "60px", height: "60px", borderRadius: "16px", background: `${card.color}10`, color: card.color, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {card.icon}
                </div>
                <div>
                  <div style={{ fontSize: "0.8rem", fontWeight: 800, color: card.color, letterSpacing: "1px" }}>TARGET {card.metric}</div>
                  <h3 style={{ fontSize: "1.4rem", fontWeight: 900, color: "#1e293b", margin: 0 }}>{card.title}</h3>
                </div>
              </div>
              <p style={{ fontSize: "1.05rem", color: "#64748b", lineHeight: 1.5, margin: 0, fontWeight: 500 }}>
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            background: "linear-gradient(135deg, #1e293b 0%, #0e6655 100%)",
            borderRadius: "20px",
            padding: "1.5rem 2.5rem",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            boxShadow: "0 15px 35px rgba(0,0,0,0.15)"
          }}
        >
          <div style={{ background: "#fbbf24", color: "#1e293b", padding: "10px 20px", borderRadius: "12px", fontWeight: 900, fontSize: "1rem", flexShrink: 0 }}>INSIGHT</div>
          <p style={{ fontSize: "1.2rem", fontWeight: 700, margin: 0, lineHeight: 1.4 }}>
            BPI bukan bagian terpisah — ia adalah <strong style={{ color: "#fbbf24" }}>mesin eksekusi</strong> yang memastikan target <span style={{ color: "#6ee7b7" }}>Productivity, Cost, & Speed (PCS)</span> dalam SMKTI benar-benar tercapai secara konkret.
          </p>
        </motion.div>
      </div>
      <SlideFooter />
    </div>
  );
}

/* =============================
   REVIEW CYCLE STRATEGY: QUARTERLY vs MONTHLY
   ============================= */
function SlideReviewCycleStrategy() {
  const phases = [
    {
      phase: "FASE 1",
      label: "Triwulanan (Quarterly)",
      period: "Tahun 2026",
      color: "#0e6655",
      accent: "#10b981",
      status: "RECOMMENDED",
      pros: [
        "Waktu adaptasi cukup bagi 4 entitas (PTPN III, I, IV, SGN) untuk memahami mekanisme BSC-KPI baru",
        "Data perkebunan bersifat musiman (panen, tanam, olah) — siklus 3 bulan lebih representatif",
        "Mengurangi beban administratif di fase awal implementasi",
        "Cukup waktu untuk coaching, PICA, dan corrective action sebelum review berikutnya",
        "Selaras dengan siklus pelaporan keuangan (Q1-Q4) dan RKAP monitoring"
      ],
      cons: [
        "Deteksi deviasi kinerja lebih lambat (maks 3 bulan)",
        "Feedback loop ke karyawan tidak secepat monthly",
        "Risiko akumulasi masalah yang baru terdeteksi di akhir triwulan"
      ]
    },
    {
      phase: "FASE 2",
      label: "Bulanan (Monthly)",
      period: "Mulai 2027+",
      color: "#1a5276",
      accent: "#3b82f6",
      status: "TARGET MATURITY",
      pros: [
        "Early warning system — deviasi terdeteksi dalam 30 hari",
        "Continuous feedback meningkatkan employee engagement",
        "Koreksi cepat sebelum masalah membesar",
        "Mendorong budaya high-performance & accountability",
        "Data-driven decision making lebih granular"
      ],
      cons: [
        "Beban administratif tinggi — butuh sistem digital matang (APMS 2.0 full deployment)",
        "Risiko review fatigue jika budaya belum siap",
        "Membutuhkan kapabilitas manajer sebagai coach, bukan hanya evaluator",
        "Kompleksitas agregasi data untuk seluruh entitas PTPN Group setiap bulan"
      ]
    }
  ];

  return (
    <div className="slide" style={{ padding: "1.2rem 3rem", background: "#fff" }}>
      <AccentShapes />
      <div className="slide-header" style={{ marginBottom: "0.8rem", textAlign: "center" }}>
        <h1 className="slide-title" style={{ fontSize: "2.5rem", color: "#1a5276", marginBottom: "0.2rem" }}>Strategi Siklus Review Kinerja</h1>
        <p className="slide-subtitle" style={{ fontSize: "1.05rem", color: "#64748b", fontWeight: 600 }}>
          Pendekatan Bertahap: Triwulanan (Fase 1) → Bulanan (Fase 2)
        </p>
      </div>

      {/* Maturity Arrow */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0", marginBottom: "1rem" }}>
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
          style={{ background: "#0e6655", color: "#fff", padding: "10px 25px", borderRadius: "12px 0 0 12px", fontWeight: 900, fontSize: "1rem", display: "flex", alignItems: "center", gap: "8px" }}
        >
          <Calendar size={18} /> Quarterly Review (2026)
        </motion.div>
        <div style={{ width: 0, height: 0, borderTop: "22px solid transparent", borderBottom: "22px solid transparent", borderLeft: "18px solid #0e6655" }} />
        <div style={{ width: "50px", height: "4px", background: "linear-gradient(90deg, #10b981, #3b82f6)" }} />
        <div style={{ width: 0, height: 0, borderTop: "22px solid transparent", borderBottom: "22px solid transparent", borderRight: "18px solid #1a5276" }} />
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
          style={{ background: "#1a5276", color: "#fff", padding: "10px 25px", borderRadius: "0 12px 12px 0", fontWeight: 900, fontSize: "1rem", display: "flex", alignItems: "center", gap: "8px" }}
        >
          <TrendingUp size={18} /> Monthly Review (2027+)
        </motion.div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", flex: 1 }}>
        {phases.map((p, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            style={{
              borderRadius: "20px",
              border: `2px solid ${p.color}`,
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              boxShadow: `0 8px 25px ${p.color}15`
            }}
          >
            <div style={{ background: p.color, color: "#fff", padding: "1rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontSize: "0.8rem", fontWeight: 800, opacity: 0.8, letterSpacing: "2px" }}>{p.phase} • {p.period}</div>
                <div style={{ fontSize: "1.4rem", fontWeight: 900 }}>{p.label}</div>
              </div>
              <div style={{ background: idx === 0 ? "#fbbf24" : "rgba(255,255,255,0.15)", color: idx === 0 ? "#1e293b" : "#fff", padding: "6px 12px", borderRadius: "8px", fontSize: "0.7rem", fontWeight: 900, letterSpacing: "1px" }}>
                {p.status}
              </div>
            </div>

            <div style={{ padding: "1.2rem 1.5rem", flex: 1, display: "flex", flexDirection: "column", gap: "1rem" }}>
              {/* PROS */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                  <div style={{ background: "#dcfce7", padding: "4px", borderRadius: "50%" }}><Check size={12} color="#16a34a" strokeWidth={3} /></div>
                  <span style={{ fontSize: "0.85rem", fontWeight: 900, color: "#16a34a", textTransform: "uppercase", letterSpacing: "1px" }}>Kelebihan</span>
                </div>
                {p.pros.map((pro, i) => (
                  <div key={i} style={{ display: "flex", gap: "8px", marginBottom: "4px", fontSize: "0.85rem", color: "#334155", fontWeight: 600, lineHeight: 1.3 }}>
                    <span style={{ color: p.accent, fontWeight: 900, flexShrink: 0, fontSize: "1rem" }}>+</span>
                    <span>{pro}</span>
                  </div>
                ))}
              </div>

              {/* CONS */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                  <div style={{ background: "#fee2e2", padding: "4px", borderRadius: "50%" }}><X size={12} color="#dc2626" strokeWidth={3} /></div>
                  <span style={{ fontSize: "0.85rem", fontWeight: 900, color: "#dc2626", textTransform: "uppercase", letterSpacing: "1px" }}>Risiko / Tantangan</span>
                </div>
                {p.cons.map((con, i) => (
                  <div key={i} style={{ display: "flex", gap: "8px", marginBottom: "4px", fontSize: "0.85rem", color: "#64748b", fontWeight: 600, lineHeight: 1.3 }}>
                    <span style={{ color: "#dc2626", fontWeight: 900, flexShrink: 0, fontSize: "1rem" }}>–</span>
                    <span>{con}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Recommendation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        style={{ marginTop: "0.8rem", background: "linear-gradient(135deg, #0e6655, #1a5276)", padding: "1rem 2rem", borderRadius: "14px", display: "flex", alignItems: "center", gap: "1.2rem" }}
      >
        <div style={{ background: "#fbbf24", color: "#1e293b", padding: "6px 14px", borderRadius: "8px", fontWeight: 900, fontSize: "0.8rem", flexShrink: 0, letterSpacing: "1px" }}>REKOMENDASI</div>
        <p style={{ color: "#fff", fontWeight: 700, fontSize: "0.95rem", margin: 0, lineHeight: 1.4 }}>
          Mulai dengan <strong style={{ color: "#fbbf24" }}>quarterly review</strong> di tahun 2026. Transisi penuh ke <strong style={{ color: "#fbbf24" }}>monthly review</strong> untuk <strong>seluruh PTPN Group di tahun 2027</strong> setelah sistem APMS 2.0 siap mendukug kapasitas data skala besar.
        </p>
      </motion.div>
      <SlideFooter />
    </div>
  );
}

const slides = [
  // BAGIAN 1 — STRATEGIC CONTEXT
  { title: "Cover", component: SlideCover },
  { title: "Executive Summary", component: SlideExecutiveSummary },
  { title: "Agenda", component: SlideAgenda },
  { title: "Strategic Drivers", component: SlideLatar },
  { title: "Our Big Dream RJPP 2026-2030", component: SlideBigDream },
  { title: "Ways of Working (PCS) Enhancement", component: SlideWaysOfWorking },
  { title: "HC Initiatives — Pilar 4 PMS", component: SlideHCStrategicPilar4 },
  { title: "Gap Analysis — Why Change?", component: SlideWhyChange },

  // BAGIAN 2 — PMS DESIGN PRINCIPLES
  { title: "§ Fondasi Konseptual & Strategis", component: SlideSectionConcept },
  { title: "Prinsip Dasar KPI", component: SlidePrinsipKPI },
  { title: "BSC Principles", component: SlideBSCFoundation },
  { title: "PDCA & Improvement", component: SlidePDCACycle },
  { title: "Strategic Cascading", component: SlideStrategicAlignment },
  { title: "Unit vs Individual Performance", component: SlideUnitIndividualPerformance },
  { title: "Kenapa Perlu Business Architecture?", component: SlideWhyBusinessArchitecture },
  { title: "Hubungan BA & Kinerja", component: SlideBAPerformance },
  { title: "Model Kinerja APMS", component: SlideModelKinerja },
  { title: "Program Kerja & KPI", component: SlideProgramKerja },

  // BAGIAN 3 — EXISTING VS 2026
  { title: "§ Evaluasi & Perubahan Regulasi", component: SlideSectionExistingVs2026 },
  { title: "Existing PMS 2022–2025", component: SlideFramework2022 },
  { title: "Perubahan Kunci Paradigma", component: SlidePerubahanKunci },
  { title: "Konsep SMKTI 2026", component: SlideSMKTIKonsep },
  { title: "Komparasi Perdir #1", component: SlideSMKTIKomparasi1 },
  { title: "Komparasi Perdir #2", component: SlideSMKTIKomparasi2 },

  // BAGIAN 4 — DESIGN 2026
  { title: "§ Desain Arsitektur SMKTI 2026", component: SlideSectionDesign2026 },
  { title: "Arsitektur Opsi A", component: SlideFramework2026A },
  { title: "Arsitektur Opsi B", component: SlideFramework2026B },
  { title: "Pro Con Opsi A vs B", component: SlideProConOptions },
  { title: "Pro Con Rating Distribusi", component: SlideProConRating },
  { title: "Rating Model 2026", component: SlideRatingKinerja },
  { title: "Priority Pool & Talent", component: SlidePriorityPool },
  { title: "Weighting & Reward Impact", component: SlideWeighting },

  // BAGIAN 5 — IMPLEMENTATION & ROADMAP
  { title: "§ Implementasi & Roadmap", component: SlideSectionImplementation },
  { title: "Update PM Mar 2026", component: SlidePerformanceUpdate2026 },
  { title: "Timeline", component: SlideTimeline },
  { title: "Project Charter", component: SlideProjectCharter },
  { title: "Governance & Tata Kelola", component: SlideGovernance },
  { title: "Review Cycle: Quarterly vs Monthly", component: SlideReviewCycleStrategy },
  { title: "Change Management & Sosialisasi", component: SlideChangeManagement },
  { title: "Risk & Mitigasi", component: SlideRiskMitigation },

  // BAGIAN 6 — BUSINESS PROCESS IMPROVEMENT (LEAN)
  { title: "Mengapa BPI untuk SMKTI?", component: SlideBPIImportance },
  { title: "§ Business Process Improvement", component: SlideBPIConcept },
  { title: "What is Lean?", component: SlideWhatIsLean },
  { title: "Lean Philosophy", component: SlideLeanPhilosophy },
  { title: "Muda or Waste Klasifikasi", component: SlideMudaWaste },
  { title: "Value Stream Mapping (VSM)", component: SlideVSM },

  // BAGIAN 7 — CLOSING & APPENDIX
  { title: "§ Penutup & Lampiran", component: SlideSectionClosing },
  { title: "Next Steps & Tindak Lanjut", component: SlideNextSteps },
  { title: "FAQ — Perdir SMKTI 2026", component: SlideSMKTIFAQ },
  { title: "Terima Kasih", component: SlideThankYou },
  { title: "Appendix — Terminologi", component: SlideSMKTITerminologi },
  { title: "Appendix — Appraisal Model", component: SlideAppraisalReference },
  { title: "Appendix — Referensi Global", component: SlideRatingReference },
];

export default function PresentationPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const goNext = useCallback(() => {
    setCurrentSlide((p) => Math.min(p + 1, slides.length - 1));
  }, []);

  const goPrev = useCallback(() => {
    setCurrentSlide((p) => Math.max(p - 1, 0));
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goNext();
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      }

      // Quick jump with numbers 1-9 (1-indexed for user comfort)
      const numKey = parseInt(e.key);
      if (!isNaN(numKey) && numKey > 0 && numKey <= 9) {
        if (numKey <= slides.length) setCurrentSlide(numKey - 1);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goNext, goPrev]);

  // Listen for custom navigation events from Agenda slide
  useEffect(() => {
    const handler = (e: Event) => {
      const customEvent = e as CustomEvent<{ targetTitle: string }>;
      const targetTitle = customEvent.detail.targetTitle;
      const targetIndex = slides.findIndex(s => s.title === targetTitle);
      if (targetIndex !== -1) {
        setCurrentSlide(targetIndex);
      }
    };
    window.addEventListener('navigateToSlide', handler);
    return () => window.removeEventListener('navigateToSlide', handler);
  }, []);

  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallBtn, setShowInstallBtn] = useState(false);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallBtn(true);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setShowInstallBtn(false);
    }
    setDeferredPrompt(null);
  };

  useEffect(() => {
    if (isSidebarOpen) {
      const activeEl = document.getElementById(`side-slide-${currentSlide}`);
      if (activeEl) {
        activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  }, [currentSlide, isSidebarOpen]);

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div style={{ display: "flex", width: "100%", height: "100vh", background: "#f1f5f9", overflow: "hidden" }}>
      {/* SIDEBAR */}
      <motion.div
        initial={false}
        animate={{ width: isSidebarOpen ? 280 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{
          background: "#1e293b",
          color: "#fff",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          zIndex: 100,
          borderRight: isSidebarOpen ? "1px solid rgba(255,255,255,0.1)" : "none"
        }}
      >
        {/* Toggle Button Inside Sidebar (when expanded) */}
        {isSidebarOpen && (
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.2rem", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Layers size={18} className="text-emerald-400" />
              <span style={{ fontSize: "0.9rem", fontWeight: 800 }}>Slide Navigator</span>
            </div>
            <button
              onClick={() => setIsSidebarOpen(false)}
              style={{ background: "none", border: "none", color: "rgba(255,255,255,0.6)", cursor: "pointer", padding: "4px" }}
            >
              <PanelLeftClose size={20} />
            </button>
          </div>
        )}

        {/* Slide List */}
        {isSidebarOpen && (
          <div style={{ flex: 1, overflowY: "auto", padding: "10px" }} className="custom-scrollbar">
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {slides.map((slide, i) => (
                <button
                  key={i}
                  id={`side-slide-${i}`}
                  onClick={() => setCurrentSlide(i)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: "12px",
                    textAlign: "left",
                    background: i === currentSlide ? "rgba(16, 185, 129, 0.2)" : "transparent",
                    border: i === currentSlide ? "1px solid rgba(16, 185, 129, 0.4)" : "1px solid transparent",
                    color: i === currentSlide ? "#10b981" : "rgba(255,255,255,0.7)",
                    transition: "all 0.2s",
                    cursor: "pointer",
                    outline: "none"
                  }}
                  onMouseEnter={(e) => {
                    if (i !== currentSlide) e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                  }}
                  onMouseLeave={(e) => {
                    if (i !== currentSlide) e.currentTarget.style.background = "transparent";
                  }}
                >
                  <span style={{ fontSize: "0.75rem", fontWeight: 900, opacity: 0.5, minWidth: "20px" }}>{String(i + 1).padStart(2, '0')}</span>
                  <span style={{ fontSize: "0.8rem", fontWeight: 700, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {slide.title}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}
      </motion.div>

      {/* MAIN CONTENT AREA */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", position: "relative", height: "100%", overflow: "hidden" }}>

        {/* Toggle Button (when sidebar is closed) */}
        {!isSidebarOpen && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setIsSidebarOpen(true)}
            style={{
              position: "absolute",
              top: "20px",
              left: "20px",
              zIndex: 101,
              background: "#1e293b",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              padding: "10px",
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
            }}
          >
            <PanelLeftOpen size={20} />
          </motion.button>
        )}

        {/* Slide Display Area */}
        <div style={{ flex: 1, position: "relative", height: "100%", display: "flex", flexDirection: "column", paddingBottom: "5rem" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              style={{ width: "100%", height: "100%" }}
            >
              <CurrentSlideComponent />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Navigation HUD (Floating or Fixed) */}
        <div style={{
          position: "absolute",
          bottom: "2rem",
          right: "2.5rem",
          display: "flex",
          alignItems: "center",
          gap: "1.5rem",
          zIndex: 10
        }}>

          <div style={{
            background: "rgba(30, 41, 59, 0.8)",
            backdropFilter: "blur(10px)",
            padding: "4px 12px",
            borderRadius: "20px",
            color: "#fff",
            fontSize: "0.75rem",
            fontWeight: 900,
            border: "1px solid rgba(255,255,255,0.1)"
          }}>
            {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
          </div>

          <div style={{ display: "flex", gap: "8px" }}>
            <button
              className="nav-btn"
              onClick={goPrev}
              disabled={currentSlide === 0}
              style={{ background: "#1e293b", opacity: currentSlide === 0 ? 0.3 : 1 }}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              className="nav-btn"
              onClick={goNext}
              disabled={currentSlide === slides.length - 1}
              style={{ background: "#1e293b", opacity: currentSlide === slides.length - 1 ? 0.3 : 1 }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}