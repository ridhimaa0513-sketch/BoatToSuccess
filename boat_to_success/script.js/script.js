// Chat
function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value;
    if (message.trim() !== "") {
        const chatBox = document.getElementById('chatBox');
        const p = document.createElement('p');
        p.textContent = "You: " + message;
        chatBox.appendChild(p);
        input.value = "";
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}

// Test
function startTest() {
    const testArea = document.getElementById('testArea');
    testArea.innerHTML = `<p>Q1: What is 2 + 2?</p>
                          <button onclick="alert('Correct!')">4</button>
                          <button onclick="alert('Try Again')">5</button>`;
}

// Media Upload
document.getElementById('mediaUpload').addEventListener('change', function(event){
    const mediaDiv = document.getElementById('mediaFiles');
    mediaDiv.innerHTML = "";
    Array.from(event.target.files).forEach(file => {
        const p = document.createElement('p');
        p.textContent = file.name;
        mediaDiv.appendChild(p);
    });
});
