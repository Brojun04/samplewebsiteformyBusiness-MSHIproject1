/**
 * Mustard Seed Harvest Ministries Inc. - Core JavaScript
 * Handles Navigation Toggle, Responsive Interactions, and Site Search
 */

function toggleMenu() {
    const navMenu = document.getElementById("navMenu");
    
    // Toggles class to show or hide the navigation items on mobile devices
    if (navMenu.style.display === "flex") {
        navMenu.style.display = "none";
    } else {
        navMenu.style.display = "flex";
        navMenu.style.flexDirection = "column";
        navMenu.style.position = "absolute";
        navMenu.style.top = "80px";
        navMenu.style.left = "0";
        navMenu.style.width = "100%";
        navMenu.style.backgroundColor = "rgba(28, 19, 12, 0.95)"; // Matching our CSS background
        navMenu.style.padding = "20px";
        navMenu.style.gap = "15px";
    }
}

/**
 * SITE SEARCH FEATURE
 * Maps keywords to section IDs on the home page (index.html)
 * Pag nag-search ang user, automatic mag-scroll papunta sa tamang section
 */
const searchIndex = [
    { keywords: ["missional", "communities", "small group", "small groups", "community"], id: "search-communities" },
    { keywords: ["sermon", "sermons", "previous sermons", "message", "messages"], id: "search-sermons" },
    { keywords: ["wedding", "weddings", "marriage", "union", "unions"], id: "search-weddings" },
    { keywords: ["special events", "events", "gathering", "gatherings"], id: "search-events" },
    { keywords: ["youth", "fellowship", "youth fellowship"], id: "search-youth" },
    { keywords: ["sunday", "worship schedule", "sanctuary", "9am", "9:00"], id: "search-sunday" },
    { keywords: ["anniversary", "church anniversary", "2026"], id: "search-anniversary" },
    { keywords: ["wednesday", "thursday", "prayer", "praise night", "fellowships"], id: "search-fellowships" }
];

function performSiteSearch(inputValue) {
    const query = inputValue.trim().toLowerCase();
    if (!query) return;

    let bestMatch = null;
    let highestScore = 0;

    searchIndex.forEach(item => {
        let score = 0;
        item.keywords.forEach(keyword => {
            if (keyword.includes(query) || query.includes(keyword)) {
                score++;
            }
        });
        if (score > highestScore) {
            highestScore = score;
            bestMatch = item;
        }
    });

    if (bestMatch) {
        const target = document.getElementById(bestMatch.id);
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "center" });
            target.classList.add("search-highlight");
            setTimeout(() => target.classList.remove("search-highlight"), 2000);
        }
    } else {
        alert("Walang nahanap na tugma. Subukan ulit gamit ang ibang keyword.");
    }
}

// Optional: Smooth scroll handling adjustments for the down arrow anchor
document.addEventListener("DOMContentLoaded", () => {
    const scrollAnchor = document.querySelector(".scroll-anchor-down a");
    
    if (scrollAnchor) {
        scrollAnchor.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    }

    // Hook up HEADER search bar
    const headerInput = document.querySelector(".search-input-field");
    const headerIcon = document.querySelector(".search-icon-trigger");

    if (headerInput) {
        headerInput.addEventListener("keypress", function(e) {
            if (e.key === "Enter") performSiteSearch(this.value);
        });
    }
    if (headerIcon) {
        headerIcon.addEventListener("click", function() {
            performSiteSearch(headerInput.value);
        });
    }

    // Hook up FOOTER search bar
    const footerInput = document.querySelector(".footer-search-bar-box input");
    const footerBtn = document.querySelector(".footer-search-action-btn");

    if (footerInput) {
        footerInput.addEventListener("keypress", function(e) {
            if (e.key === "Enter") performSiteSearch(this.value);
        });
    }
    if (footerBtn) {
        footerBtn.addEventListener("click", function() {
            performSiteSearch(footerInput.value);
        });
    }
});