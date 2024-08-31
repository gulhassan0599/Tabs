const btns = document.querySelectorAll("a");
const paragraphs = document.querySelectorAll(".detail div");

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        const btnID = e.target.hash.slice(1);

        // Remove the 'bg-color' class from all buttons
        btns.forEach((btn) => {
            console.log(btn);
            btn.classList.remove("bg-color");
        });

        // Add the 'bg-color' class to the clicked button
        btn.classList.add("bg-color");
        console.log(btn);

        // Show the associated paragraph and hide others
        paragraphs.forEach((paragraph) => {
            const paragraphID = paragraph.dataset.id;

            if (btnID === paragraphID) {
                paragraph.classList.remove("visibility");
            }
            else {
                paragraph.classList.add("visibility");
            }
        });
    });
});

