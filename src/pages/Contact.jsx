import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [posts, setPosts] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    if (editIndex !== null) {
      const updated = [...posts];
      updated[editIndex] = form;
      setPosts(updated);
      setEditIndex(null);
    } else {
      setPosts([...posts, form]);
    }

    setForm({ name: "", email: "", message: "" });
    setShowForm(false);
  };

  const handleEdit = (index) => {
    setForm(posts[index]);
    setEditIndex(index);
    setShowForm(true);
  };

  const handleDelete = (index) => {
    setPosts(posts.filter((_, i) => i !== index));
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat px-6 py-20"
      style={{ backgroundImage: "url('/bg-temple.png')" }}
    >
      <div className="bg-stone-100/80 backdrop-blur-sm rounded-xl p-8 max-w-3xl mx-auto shadow-md">

        <h2 className="text-3xl font-bold mb-4">문의 게시판</h2>

        {/* 게시글 목록 */}
        <div className="space-y-4 mb-10">
          {posts.length === 0 && (
            <p className="text-gray-500">등록된 문의가 없습니다.</p>
          )}
          {posts.map((post, index) => (
            <div key={index} className="border bg-white p-4 rounded shadow">
              <p className="font-semibold">{post.name} ({post.email})</p>
              <p className="mt-2 whitespace-pre-wrap">{post.message}</p>
              <div className="mt-3 space-x-2">
                <button
                  onClick={() => handleEdit(index)}
                  className="text-blue-600 hover:underline text-sm"
                >
                  수정
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="text-red-600 hover:underline text-sm"
                >
                  삭제
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 토글 버튼 */}
        {!showForm && (
          <button
            onClick={() => setShowForm(true)}
            className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-2 rounded-lg transition-all"
          >
            문의하기
          </button>
        )}

        {/* 문의 폼 */}
        {showForm && (
          <form onSubmit={handleSubmit} className="space-y-6 mt-10 text-gray-800 font-serif">
          <div>
            <label className="block text-sm font-medium mb-1">이름</label>
            <input
              type="text"
              name="name"
              placeholder="홍길동"
              value={form.name}
              onChange={handleChange}
              className="w-full bg-white/60 border border-gray-300 px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:bg-white/80"
            />
          </div>
        
          <div>
            <label className="block text-sm font-medium mb-1">이메일</label>
            <input
              type="email"
              name="email"
              placeholder="example@email.com"
              value={form.email}
              onChange={handleChange}
              className="w-full bg-white/60 border border-gray-300 px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:bg-white/80"
            />
          </div>
        
          <div>
            <label className="block text-sm font-medium mb-1">문의 내용</label>
            <textarea
              name="message"
              placeholder="어떤 점이 궁금하신가요?"
              value={form.message}
              onChange={handleChange}
              className="w-full bg-white/60 border border-gray-300 px-4 py-2 rounded-lg shadow-sm h-32 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:bg-white/80"
            ></textarea>
          </div>
        
          <div className="flex space-x-4 justify-end">
            <button
              type="submit"
              className="bg-indigo-700 text-white px-6 py-2 rounded-lg hover:bg-indigo-800 transition-all"
            >
              {editIndex !== null ? "수정 완료" : "등록"}
            </button>
            <button
              type="button"
              onClick={() => {
                setShowForm(false);
                setForm({ name: "", email: "", message: "" });
                setEditIndex(null);
              }}
              className="bg-gray-400 text-white px-6 py-2 rounded-lg hover:bg-gray-500 transition-all"
            >
              취소
            </button>
          </div>
        </form>
        
        )}
      </div>
    </div>
  );
}
