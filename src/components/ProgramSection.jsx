import React from "react";
import { useNavigate } from "react-router-dom";

const programs = [
  {
    id: "online-meditation",
    title: "온라인 참선 체험",
    description: "고요한 온라인 환경에서 주말 동안 참선과 명상 체험을 할 수 있습니다.",
  },
  {
    id: "traditional-etiquette",
    title: "전통예절 교육",
    description: "한복을 입고 전통 예절과 다도, 절하는 법 등을 배워보는 프로그램입니다.",
  },
  {
    id: "korean-culture",
    title: "한국 문화 소개",
    description: "한국의 전통 문화에 대해 배우고 학습하는 프로그램입니다.",
  },
];

export default function ProgramSection() {
  const navigate = useNavigate();

  return (
    <section className="bg-white text-gray-800 py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">체험 프로그램</h2>
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {programs.map((prog) => (
          <div
            key={prog.id}
            className="bg-yellow-50 p-6 rounded-2xl shadow-lg border border-yellow-200 hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={() => navigate(`/program/${prog.id}`)}
          >
            <h3 className="text-xl font-semibold mb-4">{prog.title}</h3>
            <p className="text-sm text-gray-700">{prog.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
