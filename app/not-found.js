// app/not-found.js

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 style={{ fontSize: "50px", marginBottom: "20px" }}>404</h1>
      <p style={{ fontSize: "20px" }}>죄송합니다, 페이지를 찾을 수 없습니다.</p>
      <a
        href="/"
        style={{
          color: "blue",
          textDecoration: "underline",
          marginTop: "20px",
          display: "inline-block",
        }}
      >
        🔙 홈으로 돌아가기
      </a>
    </div>
  );
}
