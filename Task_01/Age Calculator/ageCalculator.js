const formElem = document.querySelector("form");

formElem.addEventListener("submit", (e) => {
  e.preventDefault();
  const dateOfBirth = new Date(document.querySelector("#date-input").value);

  if (document.querySelector("#date-input").value.trim() !== "") {
    const results = document.querySelector(".results");
    const now = new Date();
    const ageDifference = now - dateOfBirth;
    const ageDate = new Date(ageDifference);

    const ageYear = ageDate.getUTCFullYear() - 1970;

    const ageMonths = ageDate.getUTCMonth();
    const ageDays = ageDate.getUTCDate() - 1;
    console.log(ageDays, ageMonths, ageYear);

    results.innerHTML = `Your age is ${ageYear} years, ${ageMonths} months and ${ageDays} days`;
  }
});
