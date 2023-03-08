function Feedback() {
  const [buttonText, setButtonText] = React.useState("Give Feedback");
  const [buttonColor, setButtonColor] = React.useState("darkGreen");
  const [textAreaText, setTextAreaText] = React.useState("");
  const [showTextArea, setShowTextArea] = React.useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        width: "450px",
        position: "fixed",
        right: "15px",
        bottom: "15px",
        zIndex: "1000",
        alignItems: "flex-end",
      }}
    >
      <textarea
        placeholder="Type your feedback comments here..."
        style={{
          display: showTextArea ? "block" : "none",
          height: "150px",
          padding: "12px 20px",
          boxSizing: "border-box",
          border: "2px solid #ccc",
          borderRadius: "12px",
          backgroundColor: "#f8f8f8",
          fontSize: "16px",
          resize: "none",
          width: "100%",
        }}
        value={textAreaText}
        onChange={(e) => setTextAreaText(e.target.value)}
      ></textarea>
      <button
        style={{
          border: "3px solid " + buttonColor,
          borderRadius: "32px",
          backgroundColor: buttonColor,
          fontSize: "20px",
          color: "white",
          width: "150px",
          padding: "15px",
        }}
        onClick={() => {
          if (buttonColor === "darkGreen") {
            setButtonText("Submit Feedback");
            setButtonColor("orange");
            setShowTextArea(true);
          } else {
            // Make ajax post request to send the feedback to some endpoint
            setShowTextArea(false);
            setTextAreaText("");
            setButtonText("Submitted");
            setButtonColor("blue");
          }
        }}
      >
        {buttonText}
      </button>
    </div>
  );
}