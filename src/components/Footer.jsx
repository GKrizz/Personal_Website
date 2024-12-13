import React from 'react';
import './footer.css'; // Make sure to add styling for the footer

function Footer() {
  return (
    <div className="footer-container">
      <p>&copy; 2024 Gobala Krishnan. All Rights Reserved.</p>
      <div className="footer-icons">
        <a href="https://www.linkedin.com/in/gobala-krishnan-b-5ab1a4231/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://github.com/GKrizz" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://www.instagram.com/gobala_krishnan/" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
        <a href="https://codolio.com/profile/Gobala_Krishnan" target="_blank" rel="noopener noreferrer">
          Codolio
        </a>
        <a href="https://www.geeksforgeeks.org/user/kbaskarankbaskaran72/" target="_blank" rel="noopener noreferrer">
          GeeksforGeeks
        </a>
        <a href="https://leetcode.com/u/Gobala_Krishnan_B/" target="_blank" rel="noopener noreferrer">
          LeetCode
        </a>
        <a href="https://www.hackerrank.com/profile/Gobala_krishnan" target="_blank" rel="noopener noreferrer">
          HackerRank
        </a>
      </div>
    </div>
  );
}

export default Footer;