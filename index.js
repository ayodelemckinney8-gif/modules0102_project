document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("intro-overlay");
  const video = document.getElementById("intro-video");

  // Check if the user has already seen the intro during this session
  if (localStorage.getItem("hasSeenIntro") === "true") {
    overlay.style.display = "none"; // Skip the video entirely
    return;
  }

  // When the video finishes playing, fade it out
  video.addEventListener("ended", () => {
    overlay.classList.add("fade-out");

    // Completely remove element from DOM after fade animation finishes
    setTimeout(() => {
      overlay.style.display = "none";
    }, 500); // Matches the 0.5s CSS transition

    // Mark intro as seen so it doesn't play on next refresh
    localStorage.setItem("hasSeenIntro", "true");
  });
});
