export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="relative border-t border-border/50 bg-card/30 py-8 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <div>
            <h3 className="mb-1 font-extrabold gradient-primary bg-clip-text text-transparent text-2xl">
              Pat Press
            </h3>
            <p className="text-sm text-muted-foreground">
              Print It. Wear It. Stick It.
            </p>
          </div>
          
          <div className="text-sm text-muted-foreground">
            <p>&copy; {currentYear} Pat Press. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>;
};