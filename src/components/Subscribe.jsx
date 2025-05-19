export default function Subscribe() {
    return (
      <div className="min-h-screen bg-gradient-to-b from-yellow-100 to-white px-6 py-20">
        <h2 className="text-3xl font-bold mb-6 text-center">소식지 구독하기</h2>
        <p className="text-center mb-10">
          선문화원의 새로운 소식과 프로그램 일정을 메일로 받아보세요.
        </p>
        <form className="max-w-md mx-auto space-y-4">
          <input
            type="email"
            placeholder="이메일 주소"
            className="w-full border p-3 rounded"
          />
          <button
            type="submit"
            className="w-full bg-black text-white px-6 py-3 rounded hover:bg-yellow-400 transition"
          >
            구독 신청
          </button>
        </form>
      </div>
    );
  }
  