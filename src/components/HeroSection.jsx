import React from "react";

export default function HeroSection() {
  return (
    <div
      className="min-h-screen bg-cover bg-center pt-20"
      style={{ backgroundImage: "url('/bg-temple.png')" }}
    >
      <div className="bg-black/60 w-full h-full flex flex-col items-center justify-center text-white px-6 py-10">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 drop-shadow-xl">
          마음을 비우는 공간, 참선의 길
        </h1>
        <p className="max-w-2xl text-center text-lg md:text-xl mb-10 drop-shadow">
          한국의 전통 명상과 문화를 배우고 체험하는 공간입니다.
          고요한 자연 속에서 진정한 나를 찾아보세요.
        </p>

        <img
          src="/meditating-person.png"
          alt="명상하는 인물"
          className="w-full max-w-md rounded-3xl shadow-2xl ring-2 ring-white/30 hover:scale-105 transition-transform duration-300"
        />

        <button className="mt-10 px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-yellow-300 transition duration-300 shadow-lg">
          프로그램 알아보기
        </button>
      </div>
    </div>
  );
}
