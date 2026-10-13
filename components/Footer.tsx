export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <a className="brand" href="/#top">
            <img src="/images/logo.png" alt="" width={377} height={271} className="brand-mark" />
            <span className="brand-text">
              <span className="brand-name">SXW Carpentry Ltd</span>
              <span className="brand-sub">Contractors</span>
            </span>
          </a>
          <p>Carpentry and joinery for development construction, based in Devizes, Wiltshire.</p>
          <h2>Follow</h2>
          <ul className="socials">
            <li>
              <a href="https://www.instagram.com/sxw_carpentry_ltd_/" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
                  <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/sxw-carpentry-ltd" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M4.7 3.2a1.8 1.8 0 1 0 .1 3.6 1.8 1.8 0 0 0-.1-3.6zM3.1 8.3h3.2v12.4H3.1V8.3zm6.1 0h3.1v1.7h.1c.4-.8 1.5-1.7 3.1-1.7 3.3 0 3.9 2.2 3.9 5v7.4h-3.2v-6.6c0-1.6 0-3.6-2.2-3.6s-2.5 1.7-2.5 3.5v6.7H9.2V8.3z"
                  />
                </svg>
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <nav aria-label="Footer">
          <h2>Explore</h2>
          <ul>
            <li><a href="/#about">About us</a></li>
            <li><a href="/#services">Services</a></li>
            <li><a href="/#work">Work</a></li>
            <li><a href="/#accreditations">Accreditations</a></li>
            <li><a href="/#faq">Questions</a></li>
            <li><a href="/#contact">Contact</a></li>
          </ul>
        </nav>
        <div>
          <h2>Services</h2>
          <ul>
            <li><a href="/#services">Development construction</a></li>
            <li><a href="/#services">Stand-alone projects</a></li>
            <li><a href="/#services">Carpentry and joinery</a></li>
            <li><a href="/#accreditations">Fire door installation</a></li>
          </ul>
        </div>
        <div>
          <h2>Contact</h2>
          <ul>
            <li><a href="tel:+447834454106">07834 454106</a></li>
            <li><a href="mailto:sxwcarpentry@outlook.com">sxwcarpentry@outlook.com</a></li>
            <li>Devizes, Wiltshire</li>
          </ul>
        </div>
      </div>
      <div className="wrap footer-base">
        <p>Copyright © 2026 SXW Carpentry Ltd. Company No. 09853140</p>
        <a href="/#top">Back to top</a>
      </div>
    </footer>
  );
}
