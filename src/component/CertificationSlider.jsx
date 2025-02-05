import { useEffect, useRef } from "react";

export function CertificationSlider() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 1, behavior: "smooth" });
      }
    }, 30); // Adjust the speed of scrolling here

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="overflow-hidden">
      <div
        ref={scrollRef}
        className="flex space-x-4 p-4 animate-scroll"
        style={{ scrollBehavior: "smooth" }}
      >
        {[...Array(10)].map((_, index) => (
          <div key={index} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
            <img
              src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
              alt={`image ${index + 1}`}
              className="h-32 w-32 object-cover mb-2 rounded-lg"
            />
            <h2 className="text-xl font-bold">Title for Image {index + 1}</h2>
            <p className="text-gray-600">Description for Image {index + 1}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CertificationSlider;
