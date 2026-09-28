const games = {

    shadow: {
        title: "Shadow Warrior",
        category: "Action",
        size: "250 MB",
        version: "1.0.0",
        description:
            "Fast action adventure fighting game with exciting battles and challenging enemies.",
        image:
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=80",
        download:
            "downloads/shadow-warrior.apk"
    },

    racing: {
        title: "Speed Racer",
        category: "Racing",
        size: "480 MB",
        version: "2.1.0",
        description:
            "High speed racing game with powerful cars and challenging tracks.",
        image:
            "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=900&q=80",
        download:
            "downloads/speed-racer.apk"
    },

    adventure: {
        title: "Adventure World",
        category: "Adventure",
        size: "720 MB",
        version: "1.5.2",
        description:
            "Explore a mysterious fantasy world and discover hidden locations.",
        image:
            "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80",
        download:
            "downloads/adventure-world.apk"
    },

    strategy: {
        title: "Battle Strategy",
        category: "Strategy",
        size: "350 MB",
        version: "3.0.1",
        description:
            "Build your army and create your own strategy.",
        image:
            "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=900&q=80",
        download:
            "downloads/battle-strategy.apk"
    },

    pixel: {
        title: "Pixel Fighter",
        category: "Arcade",
        size: "120 MB",
        version: "1.2.0",
        description:
            "Classic arcade fighting game.",
        image:
            "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=80",
        download:
            "downloads/pixel-fighter.apk"
    },

    war: {
        title: "War Zone",
        category: "Action",
        size: "850 MB",
        version: "4.0.0",
        description:
            "Tactical action combat game.",
        image:
            "https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&w=900&q=80",
        download:
            "downloads/war-zone.apk"
    },

    island: {
        title: "Lost Island",
        category: "Adventure",
        size: "620 MB",
        version: "1.8.0",
        description:
            "Survive and explore a mysterious lost island.",
        image:
            "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80",
        download:
            "downloads/lost-island.apk"
    },

    street: {
        title: "Street Racing",
        category: "Racing",
        size: "540 MB",
        version: "2.5.0",
        description:
            "Realistic street racing game.",
        image:
            "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80",
        download:
            "downloads/street-racing.apk"
    }

};


/* ELEMENTS */

const searchInput =
    document.getElementById("searchInput");

const searchBtn =
    document.getElementById("searchBtn");

const cards =
    document.querySelectorAll(".game-card");

const categories =
    document.querySelectorAll(".category");

const count =
    document.getElementById("gameCount");

const noResult =
    document.getElementById("noResult");


/* SEARCH */

function searchGames() {

    const text =
        searchInput.value
        .toLowerCase()
        .trim();

    let visible = 0;

    cards.forEach(card => {

        const title =
            card.dataset.title.toLowerCase();

        const category =
            card.dataset.category.toLowerCase();

        if (
            title.includes(text) ||
            category.includes(text)
        ) {

            card.style.display = "";

            visible++;

        } else {

            card.style.display = "none";

        }

    });

    updateCount(visible);

}


/* SEARCH BUTTON */

searchBtn.addEventListener(
    "click",
    searchGames
);


/* LIVE SEARCH */

searchInput.addEventListener(
    "input",
    searchGames
);


/* ENTER */

searchInput.addEventListener(
    "keydown",
    event => {

        if (event.key === "Enter") {
            searchGames();
        }

    }
);


/* CATEGORY */

categories.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            categories.forEach(btn => {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            searchInput.value = "";

            const selected =
                button.dataset.category;

            let visible = 0;

            cards.forEach(card => {

                if (
                    selected === "all" ||
                    card.dataset.category === selected
                ) {

                    card.style.display = "";

                    visible++;

                } else {

                    card.style.display = "none";

                }

            });

            updateCount(visible);

        }
    );

});


/* COUNT */

function updateCount(number) {

    count.textContent =
        number +
        (number === 1 ? " Game" : " Games");

    if (number === 0) {

        noResult.style.display =
            "block";

    } else {

        noResult.style.display =
            "none";

    }

}


/* MODAL */

const modal =
    document.getElementById("gameModal");

const closeModal =
    document.getElementById("closeModal");

const modalImage =
    document.getElementById("modalImage");

const modalTitle =
    document.getElementById("modalTitle");

const modalCategory =
    document.getElementById("modalCategory");

const modalDescription =
    document.getElementById("modalDescription");

const modalSize =
    document.getElementById("modalSize");

const modalVersion =
    document.getElementById("modalVersion");

const downloadBtn =
    document.getElementById("downloadBtn");


/* OPEN GAME */

document
.querySelectorAll(".details-btn")
.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            const id =
                button.dataset.game;

            const game =
                games[id];

            if (!game) return;

            modalImage.src =
                game.image;

            modalTitle.textContent =
                game.title;

            modalCategory.textContent =
                game.category;

            modalDescription.textContent =
                game.description;

            modalSize.textContent =
                game.size;

            modalVersion.textContent =
                game.version;

            downloadBtn.href =
                game.download;

            modal.classList.add("show");

            document.body.style.overflow =
                "hidden";

        }
    );

});


/* CLOSE */

function closeGame() {

    modal.classList.remove("show");

    document.body.style.overflow =
        "";

}

closeModal.addEventListener(
    "click",
    closeGame
);


/* OUTSIDE CLICK */

modal.addEventListener(
    "click",
    event => {

        if (event.target === modal) {
            closeGame();
        }

    }
);


/* ESC */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            modal.classList.contains("show")
        ) {
            closeGame();
        }

    }
);


/* MOBILE MENU */

const menuBtn =
    document.getElementById("menuBtn");

const nav =
    document.getElementById("nav");

menuBtn.addEventListener(
    "click",
    () => {

        nav.classList.toggle("show");

        menuBtn.textContent =
            nav.classList.contains("show")
                ? "✕"
                : "☰";

    }
);


/* CLOSE MENU */

document
.querySelectorAll(".nav a")
.forEach(link => {

    link.addEventListener(
        "click",
        () => {

            nav.classList.remove("show");

            menuBtn.textContent = "☰";

        }
    );

});


/* INITIAL */

updateCount(cards.length);