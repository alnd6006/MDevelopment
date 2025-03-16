document.addEventListener("DOMContentLoaded", () => {
    fetch('/api/scripts')
        .then(response => response.json())
        .then(data => {
            const scriptsDiv = document.getElementById('scripts');
            data.scripts.forEach(script => {
                const scriptItem = document.createElement('div');
                scriptItem.className = 'script-item';
                scriptItem.innerHTML = `
                    <h3>${script.name}</h3>
                    <p>${script.description}</p>
                    <p>Price: $${script.price}</p>
                `;
                scriptsDiv.appendChild(scriptItem);
            });
        });
});
