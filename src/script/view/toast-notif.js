const notifications = document.querySelector(".notifications");
const toastDetails = {
    timer: 6000,
    success: {
        icon: "bi-check-circle-fill",
    },
    error: {
        icon: "bi-x-circle-fill",
    },
    warning: {
        icon: "bi-exclamation-triangle-fill",
    },
    info: {
        icon: "bi-info-circle-fill",
    },
    random: {
        icon: "bi-star-fill",
    },
};

const removeToast = (toast) => {
    toast.classList.add("hide");
    if (toast.timeoutId) clearTimeout(toast.timeoutId);
    setTimeout(() => toast.remove(), 500);
};

const createToast = (id, text) => {
    const { icon } = toastDetails[id];
    const toast = document.createElement("li");
    toast.className = `my-toast toast-${id}`;
    toast.innerHTML = `<div class="column">
    <i class="bi ${icon}"></i>
    <span>${text}</span>
    </div>
    <i class="bi bi-x-lg"></i>`;
    notifications.appendChild(toast);
    if(id==="warning") console.warn(text);
    else if(id==="error") console.error(text);
    toast.timeoutId = setTimeout(() => removeToast(toast), toastDetails.timer);
    toast.lastChild.addEventListener("click", e => removeToast(e.target.parentElement));
};

export default createToast;