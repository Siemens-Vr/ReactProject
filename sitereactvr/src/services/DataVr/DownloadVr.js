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

  const handleUseDownload = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.get("http://localhost:5004/product", {
        params: { email: "esteban.lavaux2@plop.fr", productName: "plop" },
        responseType: "blob", // This is important for downloading binary data
      });

      if (response) {
        setIsLoading(false);

        // Create a Blob from the response
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const a = document.createElement("a");
        a.href = url;

        // Attempt to extract filename from response headers, or fallback to default
        const contentDisposition = response.headers['content-disposition'];
        let fileName = "downloaded_file.txt"; // Default filename

        // If the filename is provided in the Content-Disposition header, extract it
        if (contentDisposition) {
          const matches = /filename="(.+)"/.exec(contentDisposition);
          if (matches != null && matches[1]) {
            fileName = matches[1];
          }
        }

        a.download = fileName; // Set the file name for download
        document.body.appendChild(a);
        a.click(); // Simulate a click on the anchor to trigger the download
        document.body.removeChild(a); // Clean up
        window.URL.revokeObjectURL(url); // Release the memory
      }
    } catch (error) {
      console.error("Download failed:", error);
      setIsLoading(false);
    }
  };

  return { handleUseDownload, isLoading };
};

export default useDownload;
