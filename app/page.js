import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h2 className="text-[30px] mt-0 text-center">골라보세요</h2>
      <ul className="flex justify-center gap-5 mt-3 ">
        <li className="text-white bg-black rounded text-[25px] px-3 py-1">
          <Link href="/dog">강아지</Link>
        </li>
        <li className="text-white bg-black rounded text-[25px] px-3 py-1">
          <Link href="/cat">고양이</Link>
        </li>
      </ul>
    </div>
  );
}
