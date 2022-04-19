import Link from 'next/link';
import Image from 'next/image';
import headerPic from '../corona-logo.png';

export default function Header({ name }) {
  return (
    <header style="width: 50px; height: 50px;" className="pt-20 pb-12">
      <div className="block mx-auto mb-4">
        <Image src={headerPic} alt="COVID-19 Icon" />
      </div>
      <p className="text-2xl dark:text-white text-center">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p>
    </header>
  );
}
