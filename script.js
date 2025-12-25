addTaskBtn.addEventListener('click', function() {
    const taskText = taskInput.value;

    if (taskText !== "") {
        const li = document.createElement('li');
        
        // Yeni Yapı: Sol tarafta checkbox, ortada metin, sağ tarafta sil butonu
        li.innerHTML = `
            <div class="task-left">
                <input type="checkbox" class="complete-checkbox">
                <span class="task-text">${taskText}</span>
            </div>
            <button class="delete-btn">🗑️</button>
        `;
        
        taskList.appendChild(li);
        taskInput.value = "";

        // --- 1. TİK KUTUSU MANTIĞI ---
        const checkbox = li.querySelector('.complete-checkbox');
        const span = li.querySelector('.task-text');

        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                span.style.textDecoration = "line-through";
                span.style.color = "gray"; // Tamamlanınca rengi solsun
            } else {
                span.style.textDecoration = "none";
                span.style.color = "black";
            }
        });

        // --- 2. SİLME MANTIĞI ---
        const deleteBtn = li.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', function() {
            li.remove();
        });

    } else {
        alert("Lütfen bir görev yazin!");
    }
});