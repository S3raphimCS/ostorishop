import { FooterBottom } from './footer-bottom';
import { FooterMain } from './footer-main';
import { FooterTop } from './footer-top';

export const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 pb-6 sm:px-6 lg:px-8">
        <FooterMain />
        <FooterBottom />
      </div>
    </footer>
  );
};
