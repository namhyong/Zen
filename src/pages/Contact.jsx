import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PLANS = [
  {
    id: "zen",
    title: "온라인 참선 체험",
    description: "언제 어디서든 마음을 다스리는 참선",
    price: "₩9,900 / 월",
  },
  {
    id: "etiquette",
    title: "전통예절 교육",
    description: "예절과 마음가짐을 배우는 전통 교육",
    price: "₩12,000 / 월",
  },
  {
    id: "culture",
    title: "한국 문화 소개",
    description: "한국의 아름다움을 느끼는 문화 체험",
    price: "₩11,000 / 월",
  },
  {
    id: "all",
    title: "All Plan",
    description: "세 가지 모든 프로그램을 포함한 통합 패키지",
    price: "₩27,000 / 월",
  },
];

export default function Subscribe() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!selectedPlan) {
      alert("구독할 프로그램을 선택해주세요.");
      return;
    }
    navigate("/subscribe/checkout", { state: { plan: selectedPlan } });
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center px-6 py-20"
      style={{
        backgroundImage: `url("/assets/temple.jpg")`,
      }}
    >
      <h2 className="text-4xl font-bold mb-14 text-white text-center drop-shadow-lg">
        구독할 프로그램을 선택하세요
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {PLANS.map((plan) => (
          <div
            key={plan.id}
            onClick={() => setSelectedPlan(plan)}
            className={`cursor-pointer border rounded-2xl py-10 px-6 h-80 flex flex-col justify-between backdrop-blur-md bg-white/80 shadow-xl hover:scale-105 transition duration-300 ${
              selectedPlan?.id === plan.id ? "ring-4 ring-yellow-500" : ""
            }`}
          >
            <div>
              <h3 className="text-2xl font-bold mb-3">{plan.title}</h3>
              <p className="text-gray-700 text-sm">{plan.description}</p>
            </div>
            <p className="text-yellow-700 text-lg font-semibold">{plan.price}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <button
          onClick={handleSubmit}
          className="bg-yellow-500 text-white text-lg px-10 py-5 rounded-xl hover:bg-yellow-600 transition font-semibold shadow-lg"
        >
          구독 신청 및 결제하기
        </button>
      </div>
    </div>
  );
}
