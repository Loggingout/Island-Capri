import React from "react";

const teamMembers = [
  {
    name: "Anna Dean",
    role: "React engineer",
    color: "#F4A7C3",
    offset: "0px",
    imgBg: "#e8909d",
  },
  {
    name: "Chris Mezy",
    role: "Data engineer",
    color: "#B8D8D8",
    offset: "80px",
    imgBg: "#98bfc0",
  },
  {
    name: "Leslie Schnider",
    role: "Backend developer",
    color: "#D9C9B0",
    offset: "0px",
    imgBg: "#c0aa91",
  },
  {
    name: "Jim Brickton",
    role: "AI specialist",
    color: "#F5C842",
    offset: "80px",
    imgBg: "#d4a820",
  },
];

export default function AboutUs() {
  return (
    <section
      style={{
        backgroundColor: "#0a0a0a",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 24px",
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        borderRadius: "0 0 20px 20px",
      }}
    >
      {/* Optional section label */}
      <p
        style={{
          color: "#555",
          fontSize: "12px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          marginBottom: "16px",
        }}
      >
        Meet the team
      </p>

      <h2
        style={{
          color: "#fff",
          fontSize: "clamp(28px, 5vw, 52px)",
          fontWeight: 800,
          marginBottom: "64px",
          textAlign: "center",
          letterSpacing: "-0.02em",
        }}
      >
        The people behind the work
      </h2>

      {/* Cards row */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "20px",
          width: "100%",
          maxWidth: "900px",
        }}
      >
        {teamMembers.map((member, i) => (
          <Card key={i} member={member} />
        ))}
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 640px) {
          .team-grid {
            flex-direction: row !important;
            flex-wrap: wrap !important;
            justify-content: center !important;
          }
          .team-card {
            width: 140px !important;
            height: 220px !important;
            margin-top: 0 !important;
          }
          .team-card-img {
            height: 140px !important;
          }
        }
      `}</style>
    </section>
  );
}

type Member = {
  name: string;
  role: string;
  color: string;
  offset: string;
  imgBg: string;
};

function Card({ member }: { member: Member }) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      className="team-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: member.color,
        borderRadius: "999px",
        width: "180px",
        height: "320px",
        marginTop: member.offset,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        flexShrink: 0,
        transform: hovered ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)",
        transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease",
        boxShadow: hovered
          ? `0 24px 48px rgba(0,0,0,0.5)`
          : "0 4px 20px rgba(0,0,0,0.3)",
        cursor: "default",
      }}
    >
      {/* Text area */}
      <div style={{ padding: "22px 18px 12px" }}>
        <p
          style={{
            margin: 0,
            fontWeight: 800,
            fontSize: "13px",
            letterSpacing: "0.03em",
            color: "#111",
            textTransform: "uppercase",
            lineHeight: 1.2,
          }}
        >
          {member.name}
        </p>
        <p
          style={{
            margin: "4px 0 0",
            fontWeight: 400,
            fontSize: "12px",
            color: "#333",
          }}
        >
          {member.role}
        </p>
      </div>

      {/* Image placeholder */}
      <div
        className="team-card-img"
        style={{
          flex: 1,
          backgroundColor: member.imgBg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Silhouette placeholder */}
        <svg
          viewBox="0 0 80 100"
          style={{
            width: "70%",
            opacity: 0.3,
          }}
          fill="#fff"
        >
          <circle cx="40" cy="28" r="18" />
          <ellipse cx="40" cy="85" rx="30" ry="22" />
        </svg>
        <span
          style={{
            position: "absolute",
            bottom: "10px",
            fontSize: "10px",
            color: "rgba(255,255,255,0.5)",
            letterSpacing: "0.1em",
          }}
        >
          photo
        </span>
      </div>
    </div>
  );
}