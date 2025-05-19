import React from "react";
import { useLocation } from "react-router-dom";

export default function Checkout() {
  const location = useLocation();
  const plan = location.state?.plan;

  if (!plan) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>선택한 플랜이 없습니다.</p>
      </div>
    );
  }

  return (
    <div
    className="min-h-screen bg-cover bg-center px-6 py-20"
    style={{
      backgroundImage: `url('/bg-temple.png')`, // temple 이미지 경로 맞춰주세요
    }}
    >
        <h2 className="text-3xl font-bold mb-4">결제하기</h2>
        <div className="max-w-md mx-auto bg-gray-100 p-6 rounded shadow">
            <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
            <p className="mb-4">{plan.description}</p>
            <p className="text-yellow-700 font-semibold">{plan.price}</p>

            <button className="mt-6 bg-black text-white px-6 py-3 rounded hover:bg-yellow-500 transition">
            결제 진행
            </button>
        </div>
    </div>
  );
}
