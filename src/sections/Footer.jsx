const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=amplidevv@gmail.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src="/assets/gmail.svg" alt="github" className="w-1/2 h-1/2" />
        </a>
        </div>
        <div className="social-icon">
        <a href="https://wa.me/qr/N6HDJOSAFJ6AP1 " target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src="/assets/wp.svg" alt="twitter" className="w-1/2 h-1/2" />
        </a>
  
        </div>
        
        <div className="social-icon">
        <a href="https://www.linkedin.com/in/amplidev-solutions-54b587332/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src="/assets/lk.svg" alt="instagram" className="w-1/2 h-1/2" />
        </a>
        </div>
      </div>

      <p className="text-white-500">© 2024 Amplidev Solutions. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
