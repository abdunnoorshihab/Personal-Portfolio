document.querySelectorAll(".filter-button").forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;

    document.querySelectorAll(".project-card").forEach(card => {
      card.style.display =
        filter === "all" || card.classList.contains(filter)
          ? "block"
          : "none";
    });
  });
});
