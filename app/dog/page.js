"use client";

import { useEffect, useState } from "react";
export default function DogPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/dog")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div className="flex flex-col items-center justify-center h-full mt-12">
      <img className="w-[150px] " src={data.image} alt="dog" />
      <h1 className="text-[20px] ">{data.message}</h1>
      <a
        href="/"
        style={{
          color: "blue",
          textDecoration: "underline",
          marginTop: "10px",
          display: "inline-block",
        }}
      >
        🔙 홈으로 돌아가기
      </a>
    </div>
  );
}
