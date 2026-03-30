const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <span className="text-xl font-display font-black text-gradient-gold tracking-wider">
          SCANERA
        </span>
        <p className="text-sm text-muted-foreground font-body mt-2">
          Smart, Stylish, Simple — Custom QR Code Standees
        </p>
        <p className="text-xs text-muted-foreground/60 font-body mt-4">
          © {new Date().getFullYear()} SCANERA. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
