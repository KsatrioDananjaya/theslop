(() => {
  const heroVideo = document.getElementById("heroVideo");

  if (heroVideo && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    heroVideo.removeAttribute("autoplay");
    heroVideo.pause();
  }

  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("mobileMenu");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const revealTargets = document.querySelectorAll("[data-reveal]");

  if (revealTargets.length && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealTargets.forEach((el) => observer.observe(el));
  } else {
    revealTargets.forEach((el) => el.classList.add("is-visible"));
  }

  // ---------------- FAQ accordion ----------------
  document.querySelectorAll(".faq-item").forEach((item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    question.addEventListener("click", () => {
      const isOpen = item.classList.toggle("is-open");
      question.setAttribute("aria-expanded", String(isOpen));
      answer.style.maxHeight = isOpen ? answer.scrollHeight + "px" : "0px";
    });
  });

  // ---------------- Pricing monthly/annual toggle ----------------
  const priceToggle = document.getElementById("priceToggle");
  if (priceToggle) {
    const buttons = priceToggle.querySelectorAll("button");
    const proValue = document.querySelector(".price-amount .value[data-price-monthly]");

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        buttons.forEach((b) => b.classList.remove("is-active"));
        btn.classList.add("is-active");
        const period = btn.dataset.period;
        if (proValue) {
          proValue.textContent = period === "annual" ? proValue.dataset.priceAnnual : proValue.dataset.priceMonthly;
        }
      });
    });
  }

  // ---------------- Matcher demo ----------------
  const demoForm = document.getElementById("demoForm");
  if (demoForm) {
    const squadPool = [
      { name: "Zeal", role: "In-Game Lead", initials: "ZE" },
      { name: "Akari", role: "Sentinel", initials: "AK" },
      { name: "Sy", role: "Flex", initials: "SY" },
      { name: "Rook_Vega", role: "Controller", initials: "RV" },
      { name: "NoScope_Emi", role: "Duelist", initials: "NE" },
    ];
    const rankOrder = ["Gold", "Platinum", "Diamond", "Immortal"];

    const demoEmpty = document.getElementById("demoEmpty");
    const demoLoading = document.getElementById("demoLoading");
    const demoResultCard = document.getElementById("demoResultCard");
    const demoRoster = document.getElementById("demoRoster");
    const demoCode = document.getElementById("demoCode");
    const demoCopyBtn = document.getElementById("demoCopyBtn");

    function showDemoState(state) {
      [demoEmpty, demoLoading].forEach((el) => el.classList.remove("is-active"));
      demoResultCard.classList.remove("is-active");
      if (state === "empty") demoEmpty.classList.add("is-active");
      if (state === "loading") demoLoading.classList.add("is-active");
      if (state === "result") demoResultCard.classList.add("is-active");
    }

    function nearbyRank(rank) {
      const idx = rankOrder.indexOf(rank);
      const spread = [idx, idx, idx + (idx < rankOrder.length - 1 ? 1 : -1)];
      return spread.map((i) => rankOrder[Math.max(0, Math.min(rankOrder.length - 1, i))]);
    }

    demoForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const rankField = document.getElementById("rankField");
      const roleField = document.getElementById("roleField");
      const rank = document.getElementById("demoRank").value;
      const role = document.getElementById("demoRole").value;
      const region = document.getElementById("demoRegion").value;

      rankField.classList.toggle("has-error", !rank);
      roleField.classList.toggle("has-error", !role);
      if (!rank || !role) return;

      showDemoState("loading");

      window.setTimeout(() => {
        const ranks = nearbyRank(rank);
        demoRoster.innerHTML = "";

        const youRow = document.createElement("div");
        youRow.className = "roster-row is-you";
        youRow.innerHTML =
          '<span class="avatar" style="background:var(--accent);color:var(--on-accent);">YOU</span>' +
          '<div><div class="roster-name">You</div><div class="roster-role">' + role + '</div></div>' +
          '<span class="roster-rank">' + rank + '</span>';
        demoRoster.appendChild(youRow);

        const shuffled = squadPool.slice().sort((a, b) => a.name.localeCompare(b.name));
        shuffled.slice(0, 3).forEach((member, i) => {
          const row = document.createElement("div");
          row.className = "roster-row";
          row.innerHTML =
            '<span class="avatar" style="background:var(--bg-elevated-2);color:var(--accent);">' + member.initials + '</span>' +
            '<div><div class="roster-name">' + member.name + '</div><div class="roster-role">' + member.role + '</div></div>' +
            '<span class="roster-rank">' + ranks[i % ranks.length] + '</span>';
          demoRoster.appendChild(row);
        });

        const codeSuffix = (rank.slice(0, 2) + role.slice(0, 2) + region.replace(/\s/g, "").slice(0, 2)).toUpperCase();
        demoCode.textContent = "GGEZ-" + codeSuffix;

        showDemoState("result");
      }, 900);
    });

    if (demoCopyBtn) {
      demoCopyBtn.addEventListener("click", () => {
        const text = demoCode.textContent;
        const done = () => {
          const original = demoCopyBtn.textContent;
          demoCopyBtn.textContent = "Copied!";
          window.setTimeout(() => {
            demoCopyBtn.textContent = original;
          }, 1500);
        };
        if (navigator.clipboard) {
          navigator.clipboard.writeText(text).then(done).catch(done);
        } else {
          done();
        }
      });
    }
  }

  // ---------------- Newsletter form ----------------
  const newsletterForm = document.getElementById("newsletterForm");
  if (newsletterForm) {
    const emailInput = document.getElementById("newsletterEmail");
    const status = document.getElementById("newsletterStatus");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const value = emailInput.value.trim();

      if (!value) {
        status.textContent = "Enter an email to subscribe.";
        status.className = "newsletter-status is-error";
        return;
      }
      if (!emailPattern.test(value)) {
        status.textContent = "That doesn't look like an email.";
        status.className = "newsletter-status is-error";
        return;
      }

      status.textContent = "You're subscribed. Welcome to the squad.";
      status.className = "newsletter-status is-success";
      newsletterForm.reset();
    });
  }

  // ---------------- Scroll-spy nav ----------------
  const navLinks = document.querySelectorAll(".nav-links a[href^='#']");
  const spySections = Array.from(navLinks)
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (navLinks.length && spySections.length && "IntersectionObserver" in window) {
    const spyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = "#" + entry.target.id;
            navLinks.forEach((link) => {
              link.classList.toggle("is-active", link.getAttribute("href") === id);
            });
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    spySections.forEach((section) => spyObserver.observe(section));
  }

  // ---------------- Back to top ----------------
  const backToTop = document.getElementById("backToTop");
  if (backToTop) {
    window.addEventListener(
      "scroll",
      () => {
        backToTop.classList.toggle("is-visible", window.scrollY > 800);
      },
      { passive: true }
    );
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    });
  }

  // ---------------- Cookie banner ----------------
  const cookieBanner = document.getElementById("cookieBanner");
  const cookieAccept = document.getElementById("cookieAccept");
  if (cookieBanner && cookieAccept) {
    let dismissed = false;
    try {
      dismissed = window.localStorage.getItem("ggez-cookie-dismissed") === "1";
    } catch (err) {
      dismissed = false;
    }

    if (!dismissed) {
      window.setTimeout(() => cookieBanner.classList.add("is-visible"), 1200);
    }

    cookieAccept.addEventListener("click", () => {
      cookieBanner.classList.remove("is-visible");
      try {
        window.localStorage.setItem("ggez-cookie-dismissed", "1");
      } catch (err) {
        /* storage unavailable, dismiss for this view only */
      }
    });
  }
})();
