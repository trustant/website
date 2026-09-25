// Mobile navigation. The menu is a plain anchor list, so the page stays
// usable without JavaScript; this only adds the collapsible behaviour.
function handleMobileNav() {
  const mobileToggle = document.querySelector("[data-mobile-toggle]");
  const navigation = document.querySelector("[data-navigation]");

  if (!mobileToggle || !navigation) return;

  const setOpen = (open) => {
    navigation.classList.toggle("open", open);
    mobileToggle.classList.toggle("active", open);
    mobileToggle.setAttribute("aria-expanded", String(open));
    mobileToggle.setAttribute("aria-label", open ? "Hide menu" : "Show menu");
  };

  setOpen(false);

  mobileToggle.addEventListener("click", () => {
    setOpen(!navigation.classList.contains("open"));
  });

  // Close once a section is selected.
  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) setOpen(false);
  });

  // Close on Escape, returning focus to the toggle.
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navigation.classList.contains("open")) {
      setOpen(false);
      mobileToggle.focus();
    }
  });

  document.documentElement.addEventListener("click", (event) => {
    if (!mobileToggle.contains(event.target) && !navigation.contains(event.target)) {
      setOpen(false);
    }
  });
}

// The motto composes one message at a time: type it, hold it, erase it, move
// on. The messages come out of the markup rather than being repeated here, so
// the no-JS list stays the single source of the copy.
function handleMotto() {
  const TYPE = 45;
  const ERASE = 25;
  const HOLD = 2200;
  const GAP = 400;

  const motto = document.getElementById("motto");
  const list = document.getElementById("motto-list");
  if (!motto || !list) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const messages = [...list.children].map((item) => item.textContent.trim());
  if (!messages.length) return;

  // The animated line is hidden from assistive tech — a half-composed string is
  // noise to a screen reader — and the full list stays in the DOM, visually
  // hidden, as the accessible copy.
  list.classList.remove("motto-list");
  list.classList.add("visually-hidden");

  const line = document.createElement("span");
  line.className = "motto-line";
  line.setAttribute("aria-hidden", "true");

  const text = document.createTextNode("");
  const caret = document.createElement("span");
  caret.className = "motto-caret";
  line.append(text, caret);
  motto.insertBefore(line, list);

  let index = 0;
  let count = 0;
  let erasing = false;
  let timer = null;

  const step = () => {
    const message = messages[index];
    let wait;

    if (!erasing) {
      count += 1;
      text.nodeValue = message.slice(0, count);
      if (count === message.length) {
        erasing = true;
        wait = HOLD;
      } else {
        wait = TYPE;
      }
    } else {
      count -= 1;
      text.nodeValue = message.slice(0, count);
      if (count === 0) {
        erasing = false;
        index = (index + 1) % messages.length;
        wait = GAP;
      } else {
        wait = ERASE;
      }
    }

    timer = setTimeout(step, wait);
  };

  const play = () => {
    if (timer === null) timer = setTimeout(step, GAP);
  };

  const pause = () => {
    if (timer === null) return;
    clearTimeout(timer);
    timer = null;
  };

  // Don't type into a backgrounded tab.
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) pause();
    else play();
  });

  play();
}

// The introduction video opens in a modal. <dialog> handles the focus trap,
// Escape and the inert backdrop itself, so this only opens it, closes it on a
// backdrop click, and stops playback on the way out.
function handleVideoDialog() {
  const dialog = document.querySelector("[data-video-player]")?.closest("dialog");
  const player = dialog?.querySelector("[data-video-player]");

  if (!dialog || !player || typeof dialog.showModal !== "function") return;

  const open = () => {
    dialog.showModal();
    player.play().catch(() => {
      // Autoplay can be refused; the visitor still has the controls.
    });
  };

  const close = () => {
    player.pause();
    dialog.close();
  };

  document.querySelectorAll("[data-video-open]").forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      open();
    });
  });

  dialog.querySelectorAll("[data-video-close]").forEach((trigger) => {
    trigger.addEventListener("click", close);
  });

  // A click on the backdrop lands on the dialog itself, never on its contents.
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) close();
  });

  // Escape fires `cancel` rather than the close button, so stop playback there.
  dialog.addEventListener("close", () => player.pause());
}

document.addEventListener("DOMContentLoaded", () => {
  handleMobileNav();
  handleMotto();
  handleVideoDialog();
});
