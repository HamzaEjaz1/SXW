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
            <li>
              <a
                href="https://wa.me/447834454106?text=Hello%20SXW%20Carpentry%20Ltd%2C%20I%20would%20like%20to%20ask%20about%20some%20work."
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.39-1.4a10 10 0 0 0 4.65 1.18h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2zm5.76 13.95c-.24.68-1.4 1.3-1.94 1.38-.5.07-1.12.1-1.81-.11-.42-.13-.95-.31-1.64-.6-2.88-1.24-4.76-4.14-4.9-4.33-.14-.19-1.16-1.54-1.16-2.94s.73-2.08 1-2.37c.24-.26.64-.38 1.02-.38.12 0 .23 0 .33.01.3.01.45.03.65.5.24.58.82 2 .89 2.15.07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.16-.29.36-.42.49-.14.13-.28.28-.12.54.16.26.7 1.15 1.5 1.86 1.03.92 1.9 1.2 2.17 1.34.26.13.42.11.57-.07.16-.19.67-.78.85-1.05.18-.26.36-.22.6-.13.24.09 1.54.73 1.8.86.26.13.44.19.5.3.07.11.07.64-.17 1.32z"
                  />
                </svg>
                WhatsApp
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
            <li><a href="/guides">Guides</a></li>
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
