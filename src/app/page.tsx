"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const services = [
  {
    title: "Záhradný dizajn",
    text: "Navrhujeme záhrady a exteriéry s jasnou kompozíciou, atmosférou a dlhodobou funkčnosťou.",
    image: "/altanika-assets/service-garden.jpg",
  },
  {
    title: "Vizualizácie",
    text: "Klient vidí budúci priestor ešte pred realizáciou a získava istotu pri rozhodovaní.",
    image: "/altanika-assets/service-visualization.jpg",
  },
  {
    title: "Realizácie",
    text: "Od prípravy terénu až po finálny detail. Všetko pod jednou strechou.",
    image: "/altanika-assets/service-realization.jpg",
  },
  {
    title: "Údržba",
    text: "Udržiavame hotové priestory v kondícii, aby si zachovali úroveň aj funkčnosť.",
    image: "/altanika-assets/service-maintenance.jpg",
  },
  {
    title: "Čistenie exteriérov",
    text: "Čistíme dlažby, fasády, strechy aj solárne a fotovoltické panely.",
    image: "/altanika-assets/service-cleaning.jpg",
  },
  {
    title: "Terasy a stavby",
    text: "Tvoríme altánky, terasy, vírivky, ohniská a remeselné prvky priestoru.",
    image: "/altanika-assets/service-builds.jpg",
  },
];

const gallery = [
  "/altanika-assets/gallery-1.jpg",
  "/altanika-assets/gallery-2.jpg",
  "/altanika-assets/gallery-3.jpg",
  "/altanika-assets/gallery-4.jpg",
  "/altanika-assets/gallery-5.jpg",
];

const features = [
  { title: "Komplexné služby", text: "Všetko pod jednou strechou" },
  { title: "Prémiový dizajn", text: "Estetika, funkčnosť, detail" },
  { title: "Dlhodobá starostlivosť", text: "Údržba, servis, čistenie" },
];

const companyPoints = [
  "Viac ako 7 rokov skúseností",
  "Stovky úspešných projektov",
  "Individuálny prístup ku každému klientovi",
  "Používame prémiové materiály a technológie",
];

const serviceOptions = [
  "Vyberte typ služby",
  "Záhradný dizajn",
  "Projektovanie exteriéru",
  "Vizualizácie",
  "Realizácia záhrady",
  "Realizácia exteriéru na kľúč",
  "Údržba záhrad",
  "Čistenie exteriérov",
  "Čistenie striech a fasád",
  "Čistenie solárnych a fotovoltických panelov",
  "Terasy a altánky",
  "Zámkové dlažby",
  "Ohniská a betónové prvky",
  "Zrezávanie stromov",
  "Pilčícke úkony",
  "Individuálna požiadavka",
];

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Vyberte typ služby",
    message: "",
  });

  const isBrowser = typeof window !== "undefined";
  const width = isBrowser ? window.innerWidth : 1400;
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1100;

  const pagePadding = isMobile ? "16px" : isTablet ? "28px" : "56px";
  const heroTitleSize = isMobile ? "42px" : isTablet ? "58px" : "84px";
  const sectionTitleSize = isMobile ? "34px" : isTablet ? "46px" : "62px";
  const contactTitleSize = isMobile ? "38px" : isTablet ? "46px" : "60px";

  const inputStyle: React.CSSProperties = {
    width: "100%",
    borderRadius: "14px",
    border: "1px solid rgba(255,255,255,0.14)",
    background: "rgba(255,255,255,0.08)",
    color: "white",
    padding: "16px 18px",
    fontSize: "15px",
    outline: "none",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "grid",
    gap: "8px",
    fontSize: "14px",
    color: "rgba(255,255,255,0.8)",
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const selectedService =
      formData.service === "Vyberte typ služby"
        ? "Nešpecifikovaná služba"
        : formData.service;

    const subject = encodeURIComponent(`Dopyt z webu Altanika – ${selectedService}`);
    const body = encodeURIComponent(
      `Meno a priezvisko: ${formData.name}\n` +
        `Telefón: ${formData.phone}\n` +
        `Email: ${formData.email}\n` +
        `Služba: ${selectedService}\n\n` +
        `Správa:\n${formData.message}\n\n` +
        `Poznámka: Každý projekt je individuálny a cenová ponuka sa tvorí na mieru.`
    );

    window.location.href = `mailto:info@altanika.sk?subject=${subject}&body=${body}`;
  };

  return (
    <main style={{ background: "#f3f1ec" }}>
      <section
        style={{
          minHeight: "92vh",
          position: "relative",
          overflow: "hidden",
          backgroundImage:
            "linear-gradient(rgba(5,10,8,0.55), rgba(5,10,8,0.85)), url('/altanika-assets/hero-clean.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-200px",
            left: "-200px",
            width: isMobile ? "280px" : "500px",
            height: isMobile ? "280px" : "500px",
            background: "rgba(154,195,72,0.12)",
            filter: "blur(120px)",
            borderRadius: "50%",
            zIndex: 0,
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "1280px",
            margin: "0 auto",
            padding: `20px ${pagePadding} 72px ${pagePadding}`,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            style={{
              position: "sticky",
              top: "0",
              zIndex: 100,
              padding: isMobile ? "12px 14px" : "14px 24px",
              borderRadius: "16px",
              background: "rgba(10,15,12,0.35)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr auto" : "1fr auto 220px",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <img
                  src="/altanika-logo.svg"
                  alt="Altanika logo"
                  style={{
                    width: isMobile ? "36px" : "42px",
                    height: isMobile ? "36px" : "42px",
                    objectFit: "contain",
                    filter: "brightness(1.2)",
                  }}
                />
                <div>
                  <div
                    style={{
                      fontSize: isMobile ? "24px" : "34px",
                      letterSpacing: "0.05em",
                      fontWeight: 500,
                      lineHeight: "1",
                    }}
                  >
                    ALTANIKA
                  </div>
                  <div
                    style={{
                      fontSize: "11px",
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.72)",
                      marginTop: "4px",
                    }}
                  >
                    Exteriéry na kľúč
                  </div>
                </div>
              </div>

              {isMobile ? (
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  aria-label="Otvoriť menu"
                  style={{
                    border: "1px solid rgba(255,255,255,0.16)",
                    background: "rgba(255,255,255,0.06)",
                    color: "white",
                    borderRadius: "12px",
                    width: "48px",
                    height: "48px",
                    fontSize: "22px",
                    cursor: "pointer",
                  }}
                >
                  {menuOpen ? "×" : "☰"}
                </button>
              ) : (
                <>
                  <nav
                    style={{
                      display: "flex",
                      gap: isTablet ? "18px" : "34px",
                      justifyContent: "center",
                      fontSize: "14px",
                      fontWeight: 600,
                      letterSpacing: "0.04em",
                    }}
                  >
                    <a href="#" style={{ color: "white", textDecoration: "none" }}>
                      DOMOV
                    </a>
                    <a href="#sluzby" style={{ color: "white", textDecoration: "none" }}>
                      SLUŽBY
                    </a>
                    <a href="#realizacie" style={{ color: "white", textDecoration: "none" }}>
                      REALIZÁCIE
                    </a>
                    <a href="#onas" style={{ color: "white", textDecoration: "none" }}>
                      O NÁS
                    </a>
                    <a href="#kontakt" style={{ color: "white", textDecoration: "none" }}>
                      KONTAKT
                    </a>
                  </nav>

                  <a
                    href="tel:+421918244959"
                    style={{
                      justifySelf: "end",
                      textDecoration: "none",
                      color: "white",
                      border: "1px solid rgba(255,255,255,0.35)",
                      borderRadius: "12px",
                      padding: "14px 18px",
                      fontWeight: 700,
                      fontSize: "15px",
                      background: "rgba(0,0,0,0.18)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    +421 918 244 959
                  </a>
                </>
              )}
            </div>

            {isMobile && menuOpen && (
              <div
                style={{
                  marginTop: "14px",
                  display: "grid",
                  gap: "10px",
                  paddingTop: "14px",
                  borderTop: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <a
                  href="#"
                  onClick={() => setMenuOpen(false)}
                  style={{
                    color: "white",
                    textDecoration: "none",
                    padding: "12px 8px",
                    borderRadius: "10px",
                    background: "rgba(255,255,255,0.04)",
                  }}
                >
                  DOMOV
                </a>
                <a
                  href="#sluzby"
                  onClick={() => setMenuOpen(false)}
                  style={{
                    color: "white",
                    textDecoration: "none",
                    padding: "12px 8px",
                    borderRadius: "10px",
                    background: "rgba(255,255,255,0.04)",
                  }}
                >
                  SLUŽBY
                </a>
                <a
                  href="#realizacie"
                  onClick={() => setMenuOpen(false)}
                  style={{
                    color: "white",
                    textDecoration: "none",
                    padding: "12px 8px",
                    borderRadius: "10px",
                    background: "rgba(255,255,255,0.04)",
                  }}
                >
                  REALIZÁCIE
                </a>
                <a
                  href="#onas"
                  onClick={() => setMenuOpen(false)}
                  style={{
                    color: "white",
                    textDecoration: "none",
                    padding: "12px 8px",
                    borderRadius: "10px",
                    background: "rgba(255,255,255,0.04)",
                  }}
                >
                  O NÁS
                </a>
                <a
                  href="#kontakt"
                  onClick={() => setMenuOpen(false)}
                  style={{
                    color: "white",
                    textDecoration: "none",
                    padding: "12px 8px",
                    borderRadius: "10px",
                    background: "rgba(255,255,255,0.04)",
                  }}
                >
                  KONTAKT
                </a>
                <a
                  href="tel:+421918244959"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    padding: "14px 16px",
                    borderRadius: "12px",
                    background: "rgba(150,187,69,0.18)",
                    border: "1px solid rgba(166,214,79,0.22)",
                    fontWeight: 700,
                    textAlign: "center",
                    marginTop: "4px",
                  }}
                >
                  +421 918 244 959
                </a>
              </div>
            )}
          </motion.div>

          <div style={{ maxWidth: "760px", marginTop: isMobile ? "52px" : "96px" }}>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1 }}
              style={{
                display: "inline-block",
                padding: "9px 14px",
                border: "1px solid rgba(166,214,79,0.45)",
                borderRadius: "10px",
                background: "rgba(166,214,79,0.10)",
                fontSize: "12px",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#a6d64f",
              }}
            >
              Luxusné exteriéry
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.18 }}
              style={{
                fontSize: heroTitleSize,
                lineHeight: "0.96",
                letterSpacing: "-0.06em",
                marginTop: "24px",
                marginBottom: "24px",
                fontWeight: 600,
              }}
            >
              Exteriéry, ktoré
              <br />
              <span style={{ color: "#a6d64f" }}>menia životný priestor</span>
              <br />
              na zážitok.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.28 }}
              style={{
                fontSize: isMobile ? "18px" : "22px",
                lineHeight: "1.7",
                color: "rgba(255,255,255,0.86)",
                maxWidth: "700px",
              }}
            >
              Kompletné riešenia exteriérov od návrhu, vizualizácie a realizácie
              až po údržbu a čistenie. Všetko pod jednou strechou.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.38 }}
              style={{
                display: "flex",
                gap: "16px",
                marginTop: "34px",
                flexDirection: isMobile ? "column" : "row",
              }}
            >
              <a
                href="#sluzby"
                style={{
                  textDecoration: "none",
                  background: "#96bb45",
                  color: "#10150e",
                  padding: "18px 24px",
                  borderRadius: "10px",
                  fontWeight: 800,
                  fontSize: "15px",
                  letterSpacing: "0.03em",
                  transition: "0.3s",
                  display: "inline-block",
                  textAlign: "center",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.18)",
                }}
              >
                POZRIEŤ SLUŽBY →
              </a>

              <a
                href="#kontakt"
                style={{
                  textDecoration: "none",
                  background: "transparent",
                  color: "white",
                  padding: "18px 24px",
                  borderRadius: "10px",
                  fontWeight: 800,
                  fontSize: "15px",
                  letterSpacing: "0.03em",
                  border: "1px solid rgba(255,255,255,0.34)",
                  transition: "0.3s",
                  display: "inline-block",
                  textAlign: "center",
                }}
              >
                ZÍSKAŤ NÁVRH
              </a>
            </motion.div>

            <div
              style={{
                marginTop: "58px",
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
                gap: "18px",
                maxWidth: "980px",
              }}
            >
              {features.map((feature) => (
                <div
                  key={feature.title}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "14px",
                    background: "rgba(0,0,0,0.16)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "18px",
                    padding: "18px",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div
                    style={{
                      width: "24px",
                      height: "24px",
                      borderRadius: "8px",
                      border: "1px solid rgba(166,214,79,0.95)",
                      marginTop: "2px",
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "18px" }}>
                      {feature.title}
                    </div>
                    <div
                      style={{
                        marginTop: "4px",
                        fontSize: "15px",
                        lineHeight: "1.6",
                        color: "rgba(255,255,255,0.74)",
                      }}
                    >
                      {feature.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="sluzby"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: `100px ${pagePadding} 0 ${pagePadding}`,
        }}
      >
        <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto" }}>
          <div
            style={{
              fontSize: "12px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#7d8668",
              marginBottom: "14px",
            }}
          >
            Naše služby
          </div>

          <h2
            style={{
              fontSize: sectionTitleSize,
              lineHeight: "1",
              letterSpacing: "-0.05em",
              color: "#252821",
              marginBottom: "18px",
            }}
          >
            Kompletné riešenia exteriérov
          </h2>

          <p
            style={{
              fontSize: isMobile ? "17px" : "20px",
              lineHeight: "1.8",
              color: "#666b5f",
            }}
          >
            Od prvého návrhu až po dlhodobú starostlivosť. Vytvárame priestory,
            ktoré sú krásne, funkčné a nadčasové.
          </p>
        </div>

        <div
          style={{
            marginTop: "48px",
            display: "grid",
            gridTemplateColumns: isMobile
              ? "1fr"
              : isTablet
              ? "repeat(2, 1fr)"
              : "repeat(3, 1fr)",
            gap: "24px",
          }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.25 }}
              style={{
                background: "#f9f7f2",
                borderRadius: "24px",
                overflow: "hidden",
                border: "1px solid rgba(0,0,0,0.06)",
                boxShadow: "0 14px 36px rgba(15,23,42,0.06)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  height: isMobile ? "240px" : "260px",
                  overflow: "hidden",
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.45 }}
                  style={{
                    height: "100%",
                    width: "100%",
                    backgroundImage: `url('${service.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>

              <div
                style={{
                  padding: isMobile ? "22px 18px" : "24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                  flex: 1,
                }}
              >
                <h3
                  style={{
                    fontSize: isMobile ? "26px" : "30px",
                    lineHeight: "1.12",
                    letterSpacing: "-0.04em",
                    color: "#252821",
                    margin: 0,
                  }}
                >
                  {service.title}
                </h3>

                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.85",
                    color: "#666b5f",
                    margin: 0,
                  }}
                >
                  {service.text}
                </p>

                <div
                  style={{
                    padding: "14px 16px",
                    borderRadius: "14px",
                    background: "#f2efe7",
                    border: "1px solid rgba(0,0,0,0.05)",
                    fontSize: "14px",
                    lineHeight: "1.75",
                    color: "#5b6055",
                  }}
                >
                  Každý projekt je ojedinelý a cenová ponuka sa vždy vytvára na
                  mieru podľa rozsahu, materiálov a konkrétnych požiadaviek
                  klienta.
                </div>

                <div style={{ marginTop: "auto", paddingTop: "6px" }}>
                  <a
                    href="#kontakt"
                    style={{
                      display: "inline-block",
                      textDecoration: "none",
                      background: "#89a240",
                      color: "white",
                      padding: "14px 20px",
                      borderRadius: "10px",
                      fontWeight: 800,
                      fontSize: "14px",
                      letterSpacing: "0.03em",
                      boxShadow: "0 10px 24px rgba(137,162,64,0.22)",
                    }}
                  >
                    ZISTIŤ VIAC →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section
        id="onas"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: `36px ${pagePadding} 0 ${pagePadding}`,
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1.5fr 0.9fr",
          gap: "20px",
        }}
      >
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(247,244,237,0.98) 0%, rgba(247,244,237,0.96) 40%, rgba(247,244,237,0.18) 72%), url('/altanika-assets/about-image.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "24px",
            minHeight: isMobile ? "auto" : "420px",
            padding: isMobile ? "24px" : "34px",
            border: "1px solid rgba(0,0,0,0.06)",
            boxShadow: "0 10px 28px rgba(15,23,42,0.05)",
          }}
        >
          <div
            style={{
              fontSize: "12px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#7d8668",
              marginBottom: "14px",
            }}
          >
            O Altanika
          </div>

          <h2
            style={{
              fontSize: isMobile ? "36px" : "58px",
              lineHeight: "0.98",
              letterSpacing: "-0.05em",
              color: "#252821",
              marginBottom: "18px",
              maxWidth: "500px",
            }}
          >
            Dizajn, remeslo
            <br />
            a vzťah k priestoru.
          </h2>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.8",
              color: "#575d52",
              maxWidth: "480px",
            }}
          >
            Altanika s.r.o. je značka postavená na tom, že exteriér nemá byť len
            funkčný. Má pôsobiť čisto, hodnotne a prirodzene zapadnúť do života
            klienta aj architektúry domu.
          </p>

          <div style={{ marginTop: "22px", display: "grid", gap: "10px" }}>
            {companyPoints.map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "#4f564b",
                  fontSize: "16px",
                }}
              >
                <div
                  style={{
                    width: "18px",
                    height: "18px",
                    borderRadius: "999px",
                    border: "1px solid #97b650",
                    flexShrink: 0,
                  }}
                />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div
          id="kontakt"
          style={{
            background:
              "linear-gradient(180deg, rgba(42,67,28,0.98), rgba(24,43,18,1))",
            color: "white",
            borderRadius: "24px",
            padding: isMobile ? "24px" : "34px",
            boxShadow: "0 18px 50px rgba(15,23,42,0.14)",
          }}
        >
          <div
            style={{
              fontSize: "12px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.5)",
              marginBottom: "14px",
            }}
          >
            Priamy kontakt
          </div>

          <h2
            style={{
              fontSize: contactTitleSize,
              lineHeight: "0.94",
              letterSpacing: "-0.05em",
              marginBottom: "18px",
            }}
          >
            Sme tu pre
            <br />
            Váš projekt
          </h2>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.8",
              color: "rgba(255,255,255,0.82)",
              marginBottom: "18px",
            }}
          >
            Ozvite sa nám a spoločne vytvoríme priestor, ktorý Vám bude robiť
            radosť každý deň.
          </p>

          <div
            style={{
              marginBottom: "24px",
              padding: "14px 16px",
              borderRadius: "14px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.10)",
              fontSize: "14px",
              lineHeight: "1.75",
              color: "rgba(255,255,255,0.76)",
            }}
          >
            Každý projekt riešime individuálne a cenová ponuka sa vždy tvorí na
            mieru podľa rozsahu, materiálov a konkrétneho zadania.
          </div>

          <form onSubmit={handleSubmit} style={{ display: "grid", gap: "14px" }}>
            <label style={labelStyle}>
              Meno a priezvisko
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Vaše meno"
                style={inputStyle}
              />
            </label>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                gap: "14px",
              }}
            >
              <label style={labelStyle}>
                Telefón
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+421..."
                  style={inputStyle}
                />
              </label>

              <label style={labelStyle}>
                Email
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="vas@email.sk"
                  style={inputStyle}
                />
              </label>
            </div>

            <label style={labelStyle}>
              O akú službu ide
              <div style={{ position: "relative" }}>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  style={{
                    ...inputStyle,
                    appearance: "none",
                    WebkitAppearance: "none",
                    MozAppearance: "none",
                    paddingRight: "52px",
                    cursor: "pointer",
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.05))",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
                  }}
                >
                  {serviceOptions.map((option) => (
                    <option key={option} value={option} style={{ color: "#10150e" }}>
                      {option}
                    </option>
                  ))}
                </select>

                <div
                  style={{
                    position: "absolute",
                    right: "18px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    pointerEvents: "none",
                    color: "rgba(255,255,255,0.78)",
                    fontSize: "14px",
                  }}
                >
                  ▼
                </div>
              </div>
            </label>

            <label style={labelStyle}>
              Správa
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Napíšte nám, čo plánujete..."
                rows={6}
                style={{ ...inputStyle, resize: "vertical" }}
              />
            </label>

            <button
              type="submit"
              style={{
                marginTop: "6px",
                border: "none",
                background: "#96bb45",
                color: "#10150e",
                padding: "16px 22px",
                borderRadius: "12px",
                fontWeight: 800,
                fontSize: "15px",
                letterSpacing: "0.03em",
                cursor: "pointer",
                boxShadow: "0 12px 30px rgba(150,187,69,0.22)",
              }}
            >
              ODOSLAŤ DOPYT →
            </button>
          </form>

          <div style={{ display: "grid", gap: "14px", marginTop: "24px" }}>
            <a
              href="tel:+421918244959"
              style={{
                textDecoration: "none",
                color: "white",
                border: "1px solid rgba(255,255,255,0.18)",
                background: "rgba(255,255,255,0.04)",
                borderRadius: "14px",
                padding: "18px 20px",
                fontSize: isMobile ? "18px" : "22px",
              }}
            >
              +421 918 244 959
            </a>

            <a
              href="mailto:info@altanika.sk"
              style={{
                textDecoration: "none",
                color: "white",
                border: "1px solid rgba(255,255,255,0.18)",
                background: "rgba(255,255,255,0.04)",
                borderRadius: "14px",
                padding: "18px 20px",
                fontSize: isMobile ? "18px" : "22px",
                wordBreak: "break-word",
              }}
            >
              info@altanika.sk
            </a>

            <a
              href="https://wa.me/421918244959"
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: "none",
                color: "white",
                border: "1px solid rgba(255,255,255,0.18)",
                background: "rgba(255,255,255,0.04)",
                borderRadius: "14px",
                padding: "18px 20px",
                fontSize: isMobile ? "17px" : "20px",
              }}
            >
              WhatsApp kontakt
            </a>
          </div>
        </div>
      </section>

      <section
        id="realizacie"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: `80px ${pagePadding} 48px ${pagePadding}`,
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <div
            style={{
              fontSize: "12px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#7d8668",
              marginBottom: "12px",
            }}
          >
            Realizácie
          </div>

          <h2
            style={{
              fontSize: isMobile ? "36px" : "60px",
              lineHeight: "1",
              letterSpacing: "-0.05em",
              color: "#252821",
              marginBottom: "14px",
            }}
          >
            Priestory, ktoré hovoria za nás
          </h2>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.8",
              color: "#666b5f",
            }}
          >
            Každý projekt je originál. Každý detail má svoj význam.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile
              ? "1fr"
              : isTablet
              ? "repeat(2, 1fr)"
              : "repeat(5, 1fr)",
            gap: "16px",
          }}
        >
          {gallery.map((image, index) => (
            <div
              key={index}
              style={{
                height: isMobile ? "220px" : "190px",
                borderRadius: "18px",
                overflow: "hidden",
                boxShadow: "0 10px 28px rgba(15,23,42,0.05)",
              }}
            >
              <motion.div
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.45 }}
                style={{
                  height: "100%",
                  width: "100%",
                  backgroundImage: `url('${image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <a
            href="#kontakt"
            style={{
              display: "inline-block",
              textDecoration: "none",
              background: "#89a240",
              color: "white",
              padding: "16px 28px",
              borderRadius: "10px",
              fontWeight: 800,
              fontSize: "14px",
              letterSpacing: "0.03em",
              boxShadow: "0 10px 24px rgba(137,162,64,0.22)",
            }}
          >
            ZOBRAZIŤ VIAC REALIZÁCIÍ →
          </a>
        </div>
      </section>

      <a
        href="https://wa.me/421918244959"
        target="_blank"
        rel="noreferrer"
        style={{
          position: "fixed",
          right: "22px",
          bottom: "22px",
          background: "#90a944",
          color: "white",
          textDecoration: "none",
          borderRadius: "999px",
          padding: isMobile ? "12px 18px" : "14px 22px",
          fontWeight: 800,
          boxShadow: "0 18px 50px rgba(15,23,42,0.18)",
          zIndex: 100,
          fontSize: isMobile ? "14px" : "16px",
        }}
      >
        WhatsApp
      </a>
    </main>
  );
}