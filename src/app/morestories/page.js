// "use client";
// import { useState, useEffect } from "react";
// import Card from "../card/page";
// // import Container from "../container";

// export default function MoreStories() {
//   const [forms, setForms] = useState([]);

//   useEffect(() => {
//     // Simulating an API call with the provided JSON data
//     const data = {
//       success: true,
//       forms: [
//         {
//           _id: "673b9c065a82c73f736fe0b8",
//           name: "Shreddfy ",
//           bio: "lorem39lorem39llorem39lorem39llorem39lorem39llorem39lorem39llorem39lorem39llorem39lorem39l",
//           ebookLink: "https://example.com/ebook",
//           imageUrl:
//             "https://utfs.io/a/mf6ma49qe9/Fb7aze3lr5a4yQ2fGXKctGIjsQCpFmfgaiDZPnoB2r1WYl4e",
//         },
//         {
//           _id: "673b9c065a82c73f736fe0b8",
//           name: "Shrey ",
//           bio: "fg",
//           ebookLink: "https://example.com/ebook",
//           imageUrl:
//             "https://utfs.io/a/mf6ma49qe9/Fb7aze3lr5a4yQ2fGXKctGIjsQCpFmfgaiDZPnoB2r1WYl4e",
//         },
//         // other forms...
//       ],
//     };
//     setForms(data.forms);
//   }, []);

//   return (
//     <div className="">
//       <div className="text-center flex justify-center">
//         <p className="font-semibold text-center text-2xl py-3">
//           Read our Latest Stories
//         </p>
//       </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-12 bg-red-600 md:px-22">
//           {forms.map((form) => (
//             <Card
//               key={form._id}
//               name={form.name}
//               bio={form.bio}
//               ebookLink={form.ebookLink}
//               imageUrl={form.imageUrl}
//             />
//           ))}
//         </div>
//     </div>
//   );
// }

"use client";
import { useState, useEffect } from "react";
import Card from "../card/page";

export default function MoreStories() {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    // Fetching data from the API endpoint
    const fetchData = async () => {
      try {
        const response = await fetch("/api/getmorestories"); // Adjust API path as needed
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        console.log("API Response:", data); // Debugging: Log the response

        // Process and adjust the data structure if needed
        if (data.success && data.forms) {
          setForms(data.forms);
        } else {
          console.error("Unexpected API response format:", data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="">
      <div className="text-center flex justify-center">
        <p className="font-semibold text-center text-3xl underline py-3">
          Read our Latest Stories
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-12 md:px-22">
        {forms.map((form) => (
          <Card
            key={form._id}
            name={form.name}
            bio={form.bio}
            ebookLink={form.ebookLink}
            imageUrl={form.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}
