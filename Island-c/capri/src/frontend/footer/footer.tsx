import PartnerLogo from "/partner-logo.png";

const PARTNER_WEBSITE = "https://fantometechnologies.com";

export default function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: "#fff",
        color: "#000",
      }}
    >
      {/* Main content block */}
      <div
        style={{
          position: "relative",
          width: "100%",
          padding: "40px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "32px",
          boxSizing: "border-box",
        }}
      >
        {/* Link group 1 */}
        <LinkGroup
          title="Company"
          links={[
            { label: "Contact Us", href: "#" },
            { label: "Support Forum", href: "#" },
            { label: "Free Trial", href: "#" },
          ]}
        />

        {/* Link group 2 */}
        <LinkGroup
          title="Resources"
          links={[
            { label: "Careers", href: "#" },
            { label: "Our Blog", href: "#" },
            { label: "Affiliates", href: "#" },
          ]}
        />

        {/* Link group 3 */}
        <LinkGroup
          title="Legal"
          links={[
            { label: "EULA", href: "#" },
            { label: "Privacy Policy", href: "#" },
            { label: "Terms & Conditions", href: "#" },
          ]}
        />

        {/* Social icons + address */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "16px",
          }}
        >
          {/* Social icons */}
          <div style={{ display: "flex", gap: "12px" }}>
            {[
              { label: "YouTube", icon: "▶" },
              { label: "Facebook", icon: "f" },
              { label: "Instagram", icon: "◎" },
            ].map(({ label, icon }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  border: "1.5px solid rgba(0,0,0,0.6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#000",
                  fontSize: "14px",
                  textDecoration: "none",
                  transition: "background 0.2s, border-color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "rgba(0,0,0,0.1)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    "#000";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "transparent";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    "rgba(0,0,0,0.6)";
                }}
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Address block */}
          <div style={{ textAlign: "right", lineHeight: 1.7 }}>
            <p
              style={{
                margin: 0,
                fontWeight: 700,
                fontSize: "18px",
                letterSpacing: "-0.01em",
              }}
            >
              IsItTrue
            </p>
            <p style={{ margin: 0, fontSize: "13px" }}>📍 123 Example Street</p>
            <p style={{ margin: 0, fontSize: "13px" }}>London, UK</p>
            <p style={{ margin: 0, fontSize: "13px" }}>📞 tel.: +44 0000 000 000</p>
            <p style={{ margin: 0, fontSize: "13px" }}>✉ email: hello@yourbrand.com</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          backgroundColor: "#e5e5e5",
          padding: "14px 40px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px",
          boxSizing: "border-box",
        }}
      >
        {/* Brand + legal links */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <span style={{ fontWeight: 800, fontSize: "16px", letterSpacing: "-0.02em" }}>
            IsItTrue<sup style={{ fontSize: "10px" }}>®</sup>
          </span>
          {["End User License Agreement", "Privacy Policy", "Terms & Conditions"].map(
            (link) => (
              <a
                key={link}
                href="#"
                style={{
                  color: "rgba(0,0,0,0.6)",
                  fontSize: "12px",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "#000")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color =
                    "rgba(0,0,0,0.6)")
                }
              >
                {link}
              </a>
            )
          )}
        </div>

        {/* Partner credit */}
        <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
          <span style={{ color: "rgba(0,0,0,0.6)", fontSize: "12px" }}>
            Powered and Designed by
          </span>
          <a
            href={PARTNER_WEBSITE}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              textDecoration: "none",
              opacity: 0.85,
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.85")}
          >
            <img
              src={PartnerLogo}
              alt="Partner Logo"
              style={{ height: "20px", width: "auto", objectFit: "contain" }}
            />
          </a>
        </div>
      </div>

      {/* Responsive overrides */}
      <style>{`
        @media (max-width: 768px) {
          footer > div:first-child {
            padding: 20px !important;
            justify-content: flex-start !important;
          }
          footer > div:last-child {
            padding: 14px 20px !important;
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          footer > div:first-child > div:last-child {
            align-items: flex-start !important;
            text-align: left !important;
          }
        }
      `}</style>
    </footer>
  );
}

/* Helper component */
function LinkGroup({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div style={{ minWidth: "120px" }}>
      <p
        style={{
          margin: "0 0 8px",
          fontWeight: 700,
          fontSize: "15px",
          paddingBottom: "6px",
          borderBottom: "1.5px solid rgba(0,0,0,0.35)",
          display: "inline-block",
        }}
      >
        {title}
      </p>
      <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "6px" }}>
        {links.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              style={{
                color: "rgba(0,0,0,0.7)",
                fontSize: "13px",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "#000")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(0,0,0,0.7)")
              }
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}