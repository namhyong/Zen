export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-20">
      <h2 className="text-3xl font-bold mb-6">문의하기</h2>
      <form className="max-w-xl space-y-4">
        <input
          type="text"
          placeholder="이름"
          className="w-full border p-3 rounded"
        />
        <input
          type="email"
          placeholder="이메일"
          className="w-full border p-3 rounded"
        />
        <textarea
          rows="5"
          placeholder="문의 내용"
          className="w-full border p-3 rounded"
        ></textarea>
        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded hover:bg-yellow-500 transition"
        >
          보내기
        </button>
      </form>
    </div>
  );
}
