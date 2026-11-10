export default function Header() {
  return (
    <header className="market-header">
      <div className="header-inner">
        <a href="../../../index.html" className="market-logo">
          <img
            className="logo-img btn"
            src="/images/panda_face.png"
            alt="판다마켓 로고"
          />
          <span>판다마켓</span>
          <span className="header-text">자유게시판</span>
          <span className="header-text">중고마켓</span>
        </a>
        <a className="login-btn" href="../../../pages/login.html">
          로그인
        </a>
      </div>
    </header>
  );
}
