import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-6 px-4 bg-card relative border-t border-border mt-8 pt-6 flex flex-wrap justify-center items-center gap-4">
      <p className="text-sm text-muted-foreground text-center">
        &copy; {new Date().getFullYear()} Harishanan Thevarajah. All rights reserved.
      </p>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};