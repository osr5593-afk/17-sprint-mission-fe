export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="copyright">ⓒcodit-2024</p>
        <div className="footer-links">
          <a href="../../pages/privacy.html">Privacy Policy</a>
          <a href="../../pages/faq.html">FAQ</a>
        </div>
        <div className="social-links">
          <a href="https://www.facebook.com" target="_blank">
            <img src="/images/facebook_image.png" alt="페이스북 로고" />
          </a>
          <a href="https://x.com" target="_blank">
            <img src="/images/twitter_image.png" alt="트위터 로고" />
          </a>
          <a href="https://www.youtube.com" target="_blank">
            <img src="/images/youtube_image.png" alt="유튜브 로고" />
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <img src="/images/instagram_image.png" alt="인스타글램 로고" />
          </a>
        </div>
      </div>
    </footer>
  );
}
