document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("[data-add-to-team]");
  const teamList = document.getElementById("team-list");

  let team = JSON.parse(localStorage.getItem("team")) || [];

  // On page load, populate the team
  updateTeamDisplay();

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const id = parseInt(button.getAttribute("data-add-to-team"));

      if (team.find((p) => p.id === id) || team.length >= 6) return;

      const name = button.getAttribute("data-name");
      const sprite = button.getAttribute("data-sprite");

      team.push({ id, name, sprite });
      localStorage.setItem("team", JSON.stringify(team));
      updateTeamDisplay();
    });
  });

  function updateTeamDisplay() {
    teamList.innerHTML = "";

    // Update sidebar display
    for (let i = 0; i < 6; i++) {
      const slot = document.createElement("li");

      if (team[i]) {
        slot.classList.add("filled-slot");
        slot.innerHTML = `
          <img src="${team[i].sprite}" alt="${team[i].name}" width="50" />
          <p>${team[i].name.charAt(0).toUpperCase() + team[i].name.slice(1)}</p>
          <button class="remove-from-team" data-index="${i}" title="Remove">×</button>
        `;
      } else {
        slot.className = "empty-slot";
        slot.textContent = `Slot ${i + 1}`;
      }

      teamList.appendChild(slot);
    }

    // Add remove button functionality
    document.querySelectorAll(".remove-from-team").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const index = parseInt(btn.getAttribute("data-index"));
        team.splice(index, 1);
        localStorage.setItem("team", JSON.stringify(team));
        updateTeamDisplay();
      });
    });

    // Disable add buttons for Pokémon already in team
    buttons.forEach((button) => {
      const id = parseInt(button.getAttribute("data-add-to-team"));
      if (team.find((p) => p.id === id)) {
        button.disabled = true;
        button.textContent = "In Team";
      } else {
        button.disabled = false;
        button.textContent = "Add to Team";
      }
    });
  }
});
