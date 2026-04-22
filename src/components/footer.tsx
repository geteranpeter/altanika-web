export default function Footer() {
  return (
    <footer
      style={{
        marginTop: "80px",
        borderTop: "1px solid rgba(0,0,0,0.06)",
        background: "rgba(255,255,255,0.6)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "40px 60px",
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr 1fr",
          gap: "30px",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "22px",
              fontWeight: 600,
              letterSpacing: "-0.04em",
              color: "#0f172a",
              marginBottom: "12px",
            }}
          >
            Altanika s.r.o.
          </div>
          <p
            style={{
              fontSize: "15px",
              lineHeight: "1.8",
              color: "#555",
              maxWidth: "360px",
            }}
          >
            Prémiové exteriéry na kľúč. Návrh, vizualizácia, realizácia,
            údržba, čistenie a remeselné prvky pod jednou strechou.
          </p>
        </div>

        <div>
          <div
            style={{
              fontSize: "12px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#666",
              marginBottom: "14px",
            }}
          >
            Navigácia
          </div>

          <div style={{ display: "grid", gap: "10px", color: "#444" }}>
            <div>Domov</div>
            <div>Služby</div>
            <div>Kontakt</div>
          </div>
        </div>

        <div>
          <div
            style={{
              fontSize: "12px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#666",
              marginBottom: "14px",
            }}
          >
            Kontakt
          </div>

          <div style={{ display: "grid", gap: "10px" }}>
            <a
              href="tel:+421918244959"
              style={{ color: "#444", textDecoration: "none" }}
            >
              +421 918 244 959
            </a>
            <a
              href="mailto:info@altanika.sk"
              style={{ color: "#444", textDecoration: "none" }}
            >
              info@altanika.sk
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}