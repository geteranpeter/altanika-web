"use client";

import { motion } from "framer-motion";

export default function HomePage() {
  const services = [
    {
      title: "Záhradný dizajn",
      text: "Navrhujeme záhrady a exteriéry s jasnou kompozíciou, atmosférou a dlhodobou funkčnosťou.",
    },
    {
      title: "Vizualizácie",
      text: "Klient vidí budúci priestor ešte pred realizáciou a získava istotu pri rozhodovaní.",
    },
    {
      title: "Realizácie",
      text: "Od prípravy terénu až po finálny detail. Všetko pod jednou strechou.",
    },
    {
      title: "Údržba",
      text: "Udržiavame hotové priestory v kondícii, aby si zachovali úroveň aj funkčnosť.",
    },
    {
      title: "Čistenie exteriérov",
      text: "Čistíme dlažby, fasády, strechy aj solárne a fotovoltické panely.",
    },
    {
      title: "Terasy a stavby",
      text: "Tvoríme altánky, terasy, vírivky, ohniská a remeselné prvky priestoru.",
    },
  ];

  return (
    <main
      style={{
        padding: "60px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        style={{
          position: "absolute",
          top: "-200px",
          left: "-200px",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "rgba(79,125,58,0.15)",
          filter: "blur(120px)",
          zIndex: 0,
        }}
      />

      <motion.div
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
        style={{
          position: "absolute",
          bottom: "-200px",
          right: "-200px",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "rgba(212,175,55,0.12)",
          filter: "blur(120px)",
          zIndex: 0,
        }}
      />

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: "40px",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div>
          <div
            style={{
              display: "inline-block",
              padding: "8px 14px",
              border: "1px solid rgba(0,0,0,0.08)",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.7)",
              fontSize: "11px",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#666",
            }}
          >
            Luxusný exteriér • návrh • realizácia • servis
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              fontSize: "72px",
              lineHeight: "0.95",
              letterSpacing: "-0.06em",
              marginTop: "24px",
              marginBottom: "24px",
              color: "#0f172a",
            }}
          >
            Exteriéry na kľúč,
            <br />
            <span style={{ color: "#4f7d3a" }}>
              navrhnuté s citom pre priestor.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            style={{
              fontSize: "20px",
              lineHeight: "1.8",
              color: "#555",
              maxWidth: "760px",
            }}
          >
            Altanika s.r.o. prepája záhradný dizajn, vizualizácie, realizácie,
            údržbu, čistenie exteriérov aj remeselné prvky do jedného
            konzistentného celku.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{ display: "flex", gap: "16px", marginTop: "30px" }}
          >
            <button
              style={{
                background: "#0f172a",
                color: "white",
                border: "none",
                borderRadius: "999px",
                padding: "14px 24px",
                fontSize: "14px",
                cursor: "pointer",
              }}
            >
              Preskúmať služby
            </button>

            <button
              style={{
                background: "white",
                color: "#0f172a",
                border: "1px solid rgba(0,0,0,0.08)",
                borderRadius: "999px",
                padding: "14px 24px",
                fontSize: "14px",
                cursor: "pointer",
              }}
            >
              Získať návrh
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          style={{
            height: "560px",
            borderRadius: "36px",
            background:
              "radial-gradient(circle at top left, rgba(79,125,58,0.18), transparent 25%), radial-gradient(circle at bottom right, rgba(212,175,55,0.12), transparent 25%), white",
            border: "1px solid rgba(0,0,0,0.06)",
            boxShadow: "0 30px 100px rgba(15,23,42,0.08)",
          }}
        />
      </section>

      <section
        style={{
          maxWidth: "1200px",
          margin: "80px auto 0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "8px 14px",
            border: "1px solid rgba(0,0,0,0.08)",
            borderRadius: "999px",
            background: "rgba(255,255,255,0.7)",
            fontSize: "11px",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "#666",
          }}
        >
          Kompletné portfólio
        </div>

        <h2
          style={{
            fontSize: "52px",
            lineHeight: "1",
            letterSpacing: "-0.05em",
            marginTop: "20px",
            marginBottom: "18px",
            color: "#0f172a",
          }}
        >
          Každá služba má vlastnú kapitolu.
        </h2>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
            color: "#555",
            maxWidth: "760px",
          }}
        >
          Web je navrhnutý ako showroom značky Altanika. Jednotlivé profesie sú
          oddelené tak, aby klient okamžite pochopil rozsah, úroveň aj štýl
          vašej práce.
        </p>

        <div
          style={{
            marginTop: "36px",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              style={{
                background: "white",
                border: "1px solid rgba(0,0,0,0.06)",
                borderRadius: "28px",
                padding: "24px",
                boxShadow: "0 12px 40px rgba(15,23,42,0.06)",
              }}
            >
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "18px",
                  background: "#f8faf7",
                  border: "1px solid rgba(0,0,0,0.06)",
                  marginBottom: "20px",
                }}
              />

              <h3
                style={{
                  fontSize: "28px",
                  lineHeight: "1.1",
                  letterSpacing: "-0.04em",
                  marginBottom: "12px",
                  color: "#0f172a",
                }}
              >
                {service.title}
              </h3>

              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.8",
                  color: "#555",
                }}
              >
                {service.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section
        style={{
          maxWidth: "1200px",
          margin: "80px auto 0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "24px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            background: "white",
            border: "1px solid rgba(0,0,0,0.06)",
            borderRadius: "32px",
            padding: "32px",
            boxShadow: "0 12px 40px rgba(15,23,42,0.06)",
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "8px 14px",
              border: "1px solid rgba(0,0,0,0.08)",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.7)",
              fontSize: "11px",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#666",
            }}
          >
            Kontakt
          </div>

          <h2
            style={{
              fontSize: "48px",
              lineHeight: "1",
              letterSpacing: "-0.05em",
              marginTop: "20px",
              marginBottom: "18px",
              color: "#0f172a",
            }}
          >
            Spojme sa.
          </h2>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.8",
              color: "#555",
              maxWidth: "620px",
            }}
          >
            Či ide o návrh záhrady, realizáciu, údržbu alebo čistenie exteriéru,
            pripravíme riešenie, ktoré bude pôsobiť hodnotne a profesionálne.
          </p>
        </div>

        <div
          style={{
            background: "#0f172a",
            color: "white",
            borderRadius: "32px",
            padding: "32px",
            boxShadow: "0 30px 100px rgba(15,23,42,0.18)",
          }}
        >
          <div
            style={{
              fontSize: "12px",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.45)",
              marginBottom: "20px",
            }}
          >
            Priamy kontakt
          </div>

          <div style={{ display: "grid", gap: "16px" }}>
            <a
              href="tel:+421918244959"
              style={{
                display: "block",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.10)",
                borderRadius: "22px",
                padding: "18px 20px",
                color: "white",
                textDecoration: "none",
                fontSize: "22px",
              }}
            >
              +421 918 244 959
            </a>

            <a
              href="mailto:info@altanika.sk"
              style={{
                display: "block",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.10)",
                borderRadius: "22px",
                padding: "18px 20px",
                color: "white",
                textDecoration: "none",
                fontSize: "22px",
              }}
            >
              info@altanika.sk
            </a>

            <a
              href="https://wa.me/421918244959"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "block",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.10)",
                borderRadius: "22px",
                padding: "18px 20px",
                color: "white",
                textDecoration: "none",
                fontSize: "20px",
              }}
            >
              WhatsApp kontakt
            </a>
          </div>
        </div>
      </section>

      <a
        href="https://wa.me/421918244959"
        target="_blank"
        rel="noreferrer"
        style={{
          position: "fixed",
          right: "20px",
          bottom: "20px",
          background: "white",
          border: "1px solid rgba(79,125,58,0.20)",
          borderRadius: "999px",
          padding: "14px 18px",
          textDecoration: "none",
          color: "#0f172a",
          boxShadow: "0 18px 60px rgba(15,23,42,0.12)",
          fontWeight: 600,
          zIndex: 100,
        }}
      >
        WhatsApp
      </a>
    </main>
  );
}