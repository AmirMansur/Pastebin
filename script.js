const repo = "YOUR_USERNAME/YOUR_REPO";
const token = "YOUR_TOKEN";

async function submitPaste() {
  const text = document.getElementById("paste").value;

  await fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: "POST",
    headers: {
      "Authorization": `token ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: "New Paste",
      body: text
    })
  });

  alert("Paste submitted!");
}

async function loadPastes() {
  const res = await fetch(`https://api.github.com/repos/${repo}/issues`);
  const data = await res.json();

  const container = document.getElementById("pastes");

  data.forEach(issue => {
    const div = document.createElement("div");
    div.className = "paste";
    div.innerText = issue.body;
    container.appendChild(div);
  });
}

loadPastes();
