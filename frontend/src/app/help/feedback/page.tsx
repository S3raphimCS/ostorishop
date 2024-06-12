'use client';
import { useState } from 'react';

interface FeedbackPageProps {
  className?: string;
}

const FeedbackPage: React.FC<FeedbackPageProps> = ({ className }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className={`container mx-auto px-4 ${className}`}>
      <div className="mx-auto mt-12 max-w-xl rounded-lg bg-white p-8 shadow-md">
        <h2 className="mb-6 text-center text-3xl font-bold">Обратная связь</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-lg font-medium text-gray-800"
            >
              Ваше имя
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-2 w-full rounded-md border border-gray-300 p-3 focus:border-blue-500 focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-800"
            >
              Ваш Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-2 w-full rounded-md border border-gray-300 p-3 focus:border-blue-500 focus:outline-none"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-lg font-medium text-gray-800"
            >
              Сообщение
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-2 h-32 w-full resize-none rounded-md border border-gray-300 p-3 focus:border-blue-500 focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-accent py-3 font-semibold text-white transition duration-300 "
          >
            Отправить сообщение
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackPage;
