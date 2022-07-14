// window.onload = function () {
    let moon = document.querySelector(".moon");
    let sun = document.querySelector(".sun");
    let ThemeValue = localStorage.getItem("theme");
    if (ThemeValue === "light") {
        sun.style.display = "block";
        moon.style.display = "none";
    } else {
        sun.style.display = "none";
        moon.style.display = "block";
        document.documentElement.classList.add("dark");
    }
// }

// NAVBAR 
function NavDropdown() {
    return {
        drop1: 0,
        drop2: 0,
        NavDrop(index) {
            if (index === 1) {
                this.drop1 = index;
            } else {
                this.drop2 = index;
            }

        }
    }
}
// SIDEBAR 
function OpenSidebar() {
    return {
        overlay: false,
        menu: false,
        handleMenu() {
            this.overlay = true;
            this.menu = true;
            document.documentElement.classList.add("ScrollFixed");
        },
        closeMenuAndOverlay() {
            this.overlay = false;
            this.menu = false;
            document.documentElement.classList.remove("ScrollFixed");
        },
    }
}
// MODAL AND ALERT
function HandleModal() {
    return {
        isLoadingIcon: false,
        modal: false,
        alert: false,

        openModal() {
            this.isLoadingIcon = true;
            setTimeout(() => {
                this.modal = true;
            }, 2000)
            document.documentElement.classList.add("ScrollFixed");
        },
        closeModal() {
            this.isLoadingIcon = false;
            this.modal = false;
            document.documentElement.classList.remove("ScrollFixed");
        },

        handleAlert() {
            this.alert = true;
            let step = 100;
            let progressBar = document.querySelector(".progressBar");
            progressBar.style.width = `${step}%`;
            let progress = setInterval(() => {
                step -= 1;
                progressBar.style.width = `${step}%`
                if (step == 0) {
                    this.alert = false;
                    this.closeModal();
                    clearInterval(progress);
                }
            }, 20);
        }
    }
}
// SWITCH-TOGGLE 
function AirGroundToggle() {
    return {
        air: true,
        switchRight() {
            this.air = false;
        },
        switchLeft() {
            this.air = true;
        }
    }
}

// Dark Mode 
function HandleDarkMode() {
    let moon = document.querySelector(".moon");
    let sun = document.querySelector(".sun");
    return {
        setLight() {
            localStorage.setItem("theme", "light");
            sun.style.display = "block";
            moon.style.display = "none";
            document.documentElement.classList.remove("dark");
        },
        setDark() {
            localStorage.setItem("theme", "dark");
            sun.style.display = "none";
            moon.style.display = "block";
            document.documentElement.classList.add("dark");
        }

    }

}



// SWIPER SLIDE JS 
var swiper = new Swiper(".TopSlider", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var swiper = new Swiper(".SecondSlider", {
    slidesPerView: "auto",
    spaceBetween: 30,
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        }
    }
});