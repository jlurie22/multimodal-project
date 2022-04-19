import Link from 'next/link';
import Image from 'next/image';
import headerPic from '../corona-logo.png';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <Image src={headerPic} alt="COVID-19 Icon" className="mb-4" />
      <p className="text-2xl dark:text-white text-center">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p>
    </header>
  );
}
