import { useState } from "react";
import axios from "axios";

/**
 * Hook for downloading a product.
 *
 * @typedef useDownload
 * @kind hook
 *
 * @returns {object} handleUseDownload and isLoading status.
 */
const useDownload = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleUseDownload = async (e, productName, id) => {
    e.preventDefault();
    setIsLoading(true);

    const email = sessionStorage.getItem("email");

    // Console log for debugging email and productName
    console.log("User Email:", email);
    console.log("Product Name:", productName);
    console.log("ProductId:", id);

    try {
      const response = await axios.get("https://api-dwl.onrender.com/product", {
        params: { email, productName, id }, // Pass email and productName dynamically
        responseType: "blob", // Expect binary data, but we handle JSON for URLs too
      });

      if (response) {
        setIsLoading(false);

        // Log response to see if the backend is returning the correct file path
        console.log("Backend response:", response);

        // Check if the response is a JSON object with a URL (indicating a Google Drive or remote file URL)
        const contentType = response.headers['content-type'];

        if (contentType && contentType.includes('application/json')) {
          // If response is JSON, extract the URL and open it in a new tab
          const reader = new FileReader();
          reader.onload = () => {
            const result = JSON.parse(reader.result); // Parse the JSON response
            if (result.url) {
              window.open(result.url, '_blank'); // Open the URL in a new tab
              console.log("Opening remote URL:", result.url);
            }
          };
          reader.readAsText(response.data); // Read the response as text to process JSON
        } else {
          // Handle binary data download (APK file or similar)
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const a = document.createElement("a");
          a.href = url;

          // Attempt to extract filename from response headers, or fallback to default
          const contentDisposition = response.headers["content-disposition"];
          let fileName = "downloaded_file.apk"; // Default filename should be APK

          // If the filename is provided in the Content-Disposition header, extract it
          if (contentDisposition) {
            const matches = /filename[^;=\n]=((['"]).?\2|[^;\n]*)/.exec(contentDisposition);
            if (matches != null && matches[1]) {
              fileName = matches[1].replace(/['"]/g, ''); // Clean up quotes
            }
          }

          a.download = fileName; // Set the file name for download
          document.body.appendChild(a);
          a.click(); // Simulate a click on the anchor to trigger the download
          document.body.removeChild(a); // Clean up
          window.URL.revokeObjectURL(url); // Release the memory
        }
      }
    } catch (error) {
      console.error("Download failed:", error);
      setIsLoading(false);
    }
  };

  return { handleUseDownload, isLoading };
};

export default useDownload;