import { db } from "./firebase-config.js";
import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", async function() {
    const entryText = document.getElementById("entryText");
    const saveEntry = document.getElementById("saveEntry");
    const entriesDiv = document.getElementById("entries");

    // Function to save journal entry
    saveEntry.addEventListener("click", async () => {
        if (entryText.value.trim() === "") {
            alert("Please write something!");
            return;
        }

        try {
            await addDoc(collection(db, "entries"), {
                text: entryText.value,
                timestamp: new Date()
            });

            entryText.value = "";
            loadEntries();  // Refresh entries after saving
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    });

    // Function to load all journal entries
    async function loadEntries() {
        entriesDiv.innerHTML = "";  // Clear existing entries
        const querySnapshot = await getDocs(collection(db, "entries"));
        querySnapshot.forEach((doc) => {
            let entry = document.createElement("div");
            entry.classList.add("entry");
            entry.innerHTML = `<p>${doc.data().text}</p>`;
            entriesDiv.appendChild(entry);
        });
    }

    // Load entries when page loads
    loadEntries();
});
