// "use client";
// import React, { useState, useEffect } from "react";

// export default function ChildrenPage() {
//   const [children, setChildren] = useState([]);
//   const [formData, setFormData] = useState({
//     name: "",
//     bio: "",
//     ebookLink: "",
//     file: null,
//   });

//   useEffect(() => {
//     const fetchChildren = async () => {
//       const response = await fetch("/api/children");
//       const data = await response.json();
//       setChildren(data);
//     };

//     fetchChildren();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === "file") {
//       setFormData((prev) => ({ ...prev, file: files[0] }));
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   // frontend function to handle form submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("name", formData.name);
//     formData.append("bio", formData.bio);
//     formData.append("ebookLink", formData.ebookLink);
//     formData.append("image", formData.imageFile); // imageFile should be set to the uploaded file

//     try {
//       const response = await fetch("/api/children", {
//         method: "POST",
//         body: formData,
//       });

//       if (response.ok) {
//         const newChild = await response.json();
//         // handle successful submission, e.g., update state or show message
//       } else {
//         console.error("Failed to create child");
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//     }
//   };

//   return (
//     <div>
//       <h1>Children Information</h1>

//       <form onSubmit={handleSubmit} encType="multipart/form-data">
//         <input
//           type="text"
//           name="name"
//           placeholder="Child's Name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//         <textarea
//           name="bio"
//           placeholder="Child's Bio"
//           value={formData.bio}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="url"
//           name="ebookLink"
//           placeholder="Ebook Link"
//           value={formData.ebookLink}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="file"
//           name="file"
//           onChange={handleChange}
//           accept="image/*"
//           required
//         />
//         <button type="submit">Add Child</button>
//       </form>
//     </div>
//   );
// }
