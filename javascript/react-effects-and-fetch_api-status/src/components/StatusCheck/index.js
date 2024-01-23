import { useEffect, useState } from "react";
import "./StatusCheck.css";

const apiStatusUrl = "https://example-apis.vercel.app/api/status";

export default function StatusCheck() {
  const [statusIcon, setStatusIcon] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // Something needs to change here…
  // ↙️

  async function handleCheckApiStatus() {
    try {
      setIsLoading(true);
      const response = await fetch(apiStatusUrl);
      const data = await response.json();
      setIsLoading(false);
      console.log(data);
      response.ok ? setStatusIcon("✅") : setStatusIcon("❌");
    } catch {
      setStatusIcon("🚨");
      console.log("fetch error");
    }
    /**
     * Hint 1:
     * Use the `fetch()` function and pass the `apiStatusUrl` into it
     *
     * Hint 2:
     * The fetch function returns a promise which resolves to a Response
     * object once it is ready.
     *
     * Hint 3:
     * The Response object has a `ok` property which is true if the response
     * is okay and false if it is not.
     **/
    // --v-- write your code here --v--
    // --^-- write your code here --^--
  }

  return (
    <article className="status-check">
      <div className="status-check__wrapper">
        <h2 className="status-check__heading">Status:</h2>
        <span className="status-check__icon">
          {statusIcon === "🚨" ? "🚨" : isLoading ? "⏳" : statusIcon}
        </span>
      </div>
      <button
        type="button"
        className="status-check__button"
        onClick={handleCheckApiStatus}
      >
        Check API Status
      </button>
    </article>
  );
}
