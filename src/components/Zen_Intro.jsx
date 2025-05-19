import React from 'react';

const ZenIntro = () => {
  return (
    <section className="relative bg-gradient-to-br from-green-50 via-green-100 to-white p-10 rounded-xl shadow-lg max-w-4xl mx-auto my-10">
      {/* 배경 이미지 */}
      <div 
        className="absolute inset-0 opacity-20 mix-blend-multiply"
        style={{backgroundImage: "url('/images/zen-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center'}}
      />
      <div className="relative z-10">
        <h2 className="text-4xl font-extrabold text-green-900 mb-4 drop-shadow-md">
          한국 참선과 전통문화
        </h2>
        <p className="text-lg text-green-800 leading-relaxed mb-6">
          참선은 고요한 마음을 통해 진리를 깨닫는 수행법입니다. 우리 전통문화와 함께
          마음의 평화를 찾아보세요.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-6">
          <img 
            src="/images/zen_meditation.jpg" 
            alt="명상하는 사람" 
            className="rounded-lg shadow-xl w-full md:w-1/3 hover:scale-105 transition-transform duration-300"
          />
          <div className="text-green-700 md:w-2/3">
            <p className="mb-4">
              참선은 마음을 정화하고, 집중력과 내면의 평화를 증진시키는 한국 고유의 수행법입니다.
              본 사이트에서는 참선의 역사, 방법, 그리고 전통 문화 속 의미를 깊이 있게 소개합니다.
            </p>
            <button className="mt-3 bg-green-700 text-white py-2 px-5 rounded-lg hover:bg-green-800 transition-colors duration-300 shadow-md">
              더 알아보기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZenIntro;
