import React from "react";

function Footer() {
    return (
        <>
            <footer className="footer">
  <div className="social-icons">
    <a href="https://twitter.com" target="_blank" className="social-icon">
      <img src="twitter-icon.png" alt="Twitter" className="icon" />
    </a>
    <a href="https://reddit.com" target="_blank" className="social-icon">
      <img src="reddit-icon.png" alt="Reddit" className="icon" />
    </a>
    <a href="https://facebook.com" target="_blank" className="social-icon">
      <img src="./facebook.png" alt="Facebook" className="icon" />
    </a>
  </div>
  <p className="footer-text">Connect with us:</p>
  <p className="footer-text-small">Follow us on social media for the latest updates and news.</p>
  <p className="footer-text-small">Contact us: info@example.com</p>
</footer>

        </>
    
    )
}

export default Footer