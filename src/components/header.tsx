import Image from "next/image";

export default function Header() {
  return (
    <header
      style={{
        padding: "20px 60px",
        borderBottom: "1px solid #ddd",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "rgba(238, 242, 234, 0.85)",
        backdropFilter: "blur(10px)",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        <div
          style={{
            width: "48px",
            height: "48px",
            border: "1px solid rgba(0,0,0,0.08)",
            borderRadius: "16px",
            background: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 6px 20px rgba(15,23,42,0.08)",
          }}
        >
          <Image
            src="/altanika-logo.svg"
            alt="Altanika logo"
            width={30}
            height={30}
          />
        </div>

        <div>
          <div style={{ fontWeight: 600, fontSize: "18px" }}>Altanika s.r.o.</div>
          <div
            style={{
              fontSize: "11px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#666",
            }}
          >
            Premium exterior studio
          </div>
        </div>
      </div>

      <div style={{ display: "flex", gap: "20px", color: "#444" }}>
        <span>Domov</span>
        <span>Služby</span>
        <span>Kontakt</span>
      </div>
    </header>
  );
}