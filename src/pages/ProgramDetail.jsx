import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const programs = {
  "online-meditation": {
    title: "온라인 참선 체험",
    details: `
      온라인 참선 체험은 주말 동안 조용하고 집중할 수 있는 환경에서 진행됩니다.
      전문 지도자의 안내를 따라 참선과 명상법을 배우며,
      마음의 평화를 찾는 시간을 가질 수 있습니다.
      본 프로그램은 초보자도 쉽게 따라올 수 있도록 구성되어 있으며,
      일상에서 벗어나 내면의 고요함을 체험하는 특별한 기회를 제공합니다.

      • 진행 기간: 매주 토요일, 일요일 (오전 10시 ~ 오후 4시)
      • 주요 활동: 호흡 명상, 좌선, 마음챙김 명상, 질의응답
      • 준비물: 편안한 복장, 요가 매트 혹은 방석
    `,
  },
  "traditional-etiquette": {
    title: "전통예절 교육",
    details: `
      한복을 입고 한국의 전통 예절을 체험하며 다도와 절하는 법을 배워봅니다.
      전통 예절 강사의 상세한 설명과 실습을 통해
      한국 문화에 대한 깊은 이해와 존중을 배울 수 있는 소중한 기회입니다.

      • 프로그램 구성: 한복 착용법, 다도 예절, 절하는 법, 인사법, 전통 놀이 체험
      • 대상: 모든 연령층, 가족 단위 참가 환영
      • 준비물: 찻잎과 찻잔, 다도 용품
    `,
  },
  "korean-culture": {
    title: "한국 문화 소개",
    details: `
      한국의 전통 예술과 역사에 대해 배우는 프로그램입니다.
      각 분야 전문가의 강의를 통해 다양한 문화적 배경과 유산을 이해하며,
      체험 활동을 통해 직접 한국 문화를 몸소 느껴볼 수 있습니다.

      • 주요 내용: 한국의 고궁의 이해, 단청, 음식, 명절 문화
      • 체험 활동: 단청의 이해, 고궁의 이해, 단청 체험, 전통 음식 만들기
      • 참가 인원: 소규모 그룹 운영으로 질 높은 교육 제공
    `,
  },
};

export default function ProgramDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const program = programs[id];

  if (!program) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gray-100 p-12">
        <p className="text-red-600 text-xl font-semibold">존재하지 않는 프로그램입니다.</p>
      </section>
    );
  }

  return (
    <section
    className="min-h-screen relative bg-cover bg-center flex flex-col items-center justify-center p-12 text-gray-900"
    style={{ backgroundImage: "url('/bg-temple.png')" }}
    >
    {/* 어두운 오버레이 */}
    <div className="absolute inset-0 bg-black bg-opacity-50 pointer-events-none"></div>

    <div className="relative z-10 max-w-4xl bg-white bg-opacity-90 rounded-3xl p-10 shadow-xl w-full">
        {/* 뒤로가기 버튼 - 카드 내부 우측 상단 */}
        <button
        onClick={() => navigate(-1)}
        className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 bg-opacity-80 hover:bg-gray-200 transition-colors shadow-md"
        aria-label="뒤로가기"
        >
        {/* SVG 화살표 왼쪽 아이콘 */}
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        </button>

        <h2 className="text-5xl font-extrabold mb-8 border-b-4 border-yellow-400 pb-3">
        {program.title}
        </h2>
        <div
            className="whitespace-pre-wrap text-lg leading-relaxed text-gray-800 font-medium"
        >
            {program.details.trim()}
        </div>
    </div>
    </section>

  )
}
