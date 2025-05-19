import React from "react";

const Apply = () => {
  return (
    <section id="apply" className="py-12">
      <h2 className="text-2xl font-bold text-green-700 mb-4">교육 신청</h2>
      <form className="max-w-md mx-auto space-y-4">
        <input type="text" placeholder="이름" className="w-full p-2 border rounded" />
        <input type="email" placeholder="이메일" className="w-full p-2 border rounded" />
        <textarea placeholder="참여 동기" className="w-full p-2 border rounded"></textarea>
        <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded">신청하기</button>
      </form>
    </section>
  );
};

export default Apply;
