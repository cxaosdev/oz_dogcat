// app/layout.js
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className="h-[100vh] flex justify-center items-center bg-amber-300">
        <div className="flex-col justify-center items-center bg-white w-[400px] h-[300px] rounded-xl">
          <nav>
            <ul className="h-[50px] flex justify-center items-center bg-black text-white text-[20px] gap-[30px] rounded-t-xl">
              <li>
                <a href="/">홈</a>
              </li>
              <li>
                <a href="/dog">강아지</a>
              </li>
              <li>
                <a href="/cat">고양이</a>
              </li>
            </ul>
          </nav>
          <div className="h-[200px] flex items-center justify-center ">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
