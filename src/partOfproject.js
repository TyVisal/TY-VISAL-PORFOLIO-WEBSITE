import img1 from "./assets/projects/1.png";
import img2 from "./assets/projects/2.png";
import img3 from "./assets/projects/3.png";
import img4 from "./assets/projects/4.png";
import img5 from "./assets/projects/5.png";
import img6 from "./assets/projects/6.png";

const projects = [
  {
    title: "TVS-Clothing-Store",
    shortText: "TVS-Clothing-Store",
    fullDetail:
      "TVS Clothing Store is a full-stack e-commerce web application for a clothing shop, featuring a customer shopping interface and an admin dashboard. Customers can browse, search, filter, purchase products through Cash on Delivery, and track orders. Administrators can manage products, categories, customers, orders, inventory, and sales analytics.",
    image: img1,
    tags: ["React.js", "Tailwind CSS", "Express API", "PostgreSQL "],
    siteUrl: "https://tvs-clothing-store.vercel.app/",
  },
  {
    title: "AEU Static Website",
    shortText: "AEU Static Website",
    fullDetail:
      "AEU Static Website is a frontend-only web application designed to provide users with a responsive and interactive website experience",
    image: img2,
    tags: ["HTML", "CSS", "Tailwind CSS", "Javascript"],
    siteUrl: "https://tyvisal.github.io/AEU-static-website/",
  },
  {
    title: "Task Timer",
    shortText: "Task Timer",
    fullDetail:
      "Task Timer is a frontend-only web application that allows users to manage tasks and track time using an interactive timer.",
    image: img3,
    tags: ["HTML", "CSS", "Javascript"],
    siteUrl: "https://tyvisal.github.io/task-timer/",
  },
  {
    title: "Button Change Color",
    shortText: "Button Change Color",
    fullDetail:
      "Button Change Color is a frontend-only web application that allows users to change button colors interactively using JavaScript.",
    image: img4,
    tags: ["HTML", "CSS", "Javascript"],
    siteUrl: "https://tyvisal.github.io/color-switcher/",
  },
  {
    title: "Countrol Time",
    shortText: "Countrol Time",
    fullDetail:
      "Control Time is a frontend-only web application that allows users to increase, decrease, and reset a counter using interactive buttons.",
    image: img5,
    tags: ["HTML", "CSS", "Javascript"],
    siteUrl: "https://tyvisal.github.io/simple-counter/",
  },
];

const grid = document.getElementById("card-grid");
const modal = document.getElementById("detail-modal");

// 1. Render all cards (built once, then inserted)
grid.innerHTML = projects
  .map(
    (item, index) => `
    <div class="bg-[#181818] border border-neutral-700 rounded-2xl overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-1 hover:border-amber-600/60">
      <div class="w-full h-52 bg-[#101010] border-b border-neutral-800 overflow-hidden">
        <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover block">
      </div>
      <div class="bg-[#2c2511] border-y border-[#4d411d] py-3 px-4 text-center">
        <p class="text-[#e6c656] text-base font-semibold tracking-wide">${item.shortText}</p>
      </div>
      <div class="flex justify-between items-center py-3 px-4 bg-[#141414] gap-2.5">
        <button data-index="${index}" class="view-detail-btn py-1.5 px-3.5 text-xs font-semibold rounded border border-neutral-700 bg-[#1f1f1f] text-neutral-100 transition-colors hover:bg-[#e6c656] hover:text-[#121212] hover:border-[#e6c656] cursor-pointer">
          view detail
        </button>
        <a href="${item.siteUrl}" target="_blank" class="py-1.5 px-3.5 text-xs font-semibold rounded border border-neutral-700 bg-[#1f1f1f] text-neutral-100 transition-colors hover:bg-[#e6c656] hover:text-[#121212] hover:border-[#e6c656]">
          view site
        </a>
      </div>
    </div>
  `,
  )
  .join("");

// 2. Open modal with the clicked card's data
function openModal(index) {
  const project = projects[index];
  if (!project) return;

  document.getElementById("modal-img").src = project.image;
  document.getElementById("modal-title").textContent = project.title;
  document.getElementById("modal-desc").textContent = project.fullDetail;
  document.getElementById("modal-site-link").href = project.siteUrl;

  // Render tags
  document.getElementById("modal-tags").innerHTML = project.tags
    .map(
      (tag) =>
        `<span class="text-xs bg-[#2c2511] text-[#e6c656] border border-[#4d411d] px-2.5 py-1 rounded-md">${tag}</span>`,
    )
    .join("");

  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

// 3. Close modal
function closeModal() {
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

// 4. Click "view detail" (event delegation, works for every card)
grid.addEventListener("click", (e) => {
  const btn = e.target.closest(".view-detail-btn");
  if (btn) openModal(Number(btn.dataset.index));
});

// 5. Close when clicking the dark background outside the box
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

// 6. Close with the Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// 7. Make functions reachable from inline onclick="..." in index.html
//    (needed because this file is an ES module)
window.openModal = openModal;
window.closeModal = closeModal;

export { projects };
