import Link from 'next/link';
import { Car, Github, Twitter, Linkedin } from 'lucide-react';
import { navItems } from '@/lib/data';

const Footer = () => {
  return (
    <footer className="border-t border-border/40">
      <div className="container max-w-screen-2xl">
        <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <Car className="h-8 w-8 text-primary" />
              <span className="text-lg font-bold font-headline">
                Global Auto Connect
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Connecting you to your dream car, globally.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:col-span-2 md:grid-cols-3">
            <div>
              <h3 className="font-semibold text-foreground">Navigation</h3>
              <ul className="mt-4 space-y-2">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
              </ul>
            </div>
             <div>
              <h3 className="font-semibold text-foreground">Connect</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Facebook</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Instagram</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">X / Twitter</Link></li>
              </ul>
            </div>
          </div>
          <div className="md:col-span-1">
            <h3 className="font-semibold text-foreground">Subscribe to our newsletter</h3>
            <p className="mt-2 text-sm text-muted-foreground">Get the latest news and offers.</p>
            {/* Newsletter form can go here */}
          </div>
        </div>
        <div className="flex flex-col items-center justify-between border-t border-border/40 py-6 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Global Auto Connect. All rights reserved.
          </p>
          <div className="mt-4 flex space-x-4 md:mt-0">
            <Link href="#" className="text-muted-foreground hover:text-foreground"><Github className="h-5 w-5" /></Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground"><Twitter className="h-5 w-5" /></Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground"><Linkedin className="h-5 w-5" /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
