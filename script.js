(function () {
  "use strict";

  const comparisonData = {
    question: "what are the milligrams for oxycodone e?",
    unverified: {
      title: "Unverified LLM Response",
      content: `The milligram (mg) strengths for immediate-release **oxycodone** tablets typically include:

* ==**5 mg**==
* ==**10 mg**==
* ==**15 mg**==
* ==**20 mg**==
* ==**30 mg**==

The letter 'e' in your query likely refers to a specific pill imprint or manufacturer, and the actual dose is the milligram strength. The most common starting doses are ==**5 mg** or **10 mg**==.

### ⚠️ **Important Note**

Oxycodone is a **strong opioid analgesic** used to treat moderate to severe pain. It is a controlled substance and carries a high risk of dependence, addiction, and overdose.

**Always take oxycodone exactly as prescribed by your doctor and never take a dose different from what was specifically prescribed for you.** If you have a tablet marked with an 'E' and are unsure of the dosage, you should contact a healthcare professional or a pharmacist for confirmation.`
    },
    verified: {
      title: "MedSense Verified Response",
      conversation: [
        {
          role: "user",
          text: "what are the milligrams for oxycodone e?"
        },
        {
          role: "medsense",
          text: "Could you please clarify what you mean by 'oxycodone e'? Are you asking about a specific medication name or strength?"
        },
        {
          role: "user",
          text: "i mean oxycodone er"
        },
        {
          role: "medsense",
          text: `Oxycodone ER (extended-release) tablets are available in several milligram strengths, including ==10 mg, 20 mg, 40 mg, 80 mg, and 160 mg== ([DailyMed](https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f06d3690-3fd4-407d-8f8d-ab0c354e61bd)).

**Key supporting facts directly related to the question:**

• Oxycodone HCl Controlled-Release Tablets come in strengths of ==10 mg, 20 mg, 40 mg, and 80 mg== ([DailyMed](https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f06d3690-3fd4-407d-8f8d-ab0c354e61bd)).
• A ==160 mg== tablet strength is also available, which is comparable to two 80 mg tablets when taken on an empty stomach ([DailyMed](https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f06d3690-3fd4-407d-8f8d-ab0c354e61bd)).

**Brief relevant safety/clinical context:**

• The 80 mg and 160 mg tablets, or any single dose greater than 40 mg, are intended only for opioid-tolerant patients due to the risk of fatal respiratory depression in non-tolerant individuals ([DailyMed](https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f06d3690-3fd4-407d-8f8d-ab0c354e61bd)).
• Patients should always swallow these tablets whole without breaking, crushing, dissolving, or chewing them. This ensures the controlled release of the medication over 12 hours. If a tablet is altered, the entire dose can be absorbed at once, leading to an overdose and potentially death ([DailyMed](https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f06d3690-3fd4-407d-8f8d-ab0c354e61bd)).`
        }
      ]
    }
  };

  const audienceData = {
    pharmacies: {
      heroTitle:
        '<span class="hero-line-static">Pharmacy care that you know is</span><span class="hero-adjective-line"><span class="hero-adjective" data-force-typing="true" data-words="trusted,reliable,verified,seamless,available"><span class="hero-adjective-wrapper"><span class="hero-adjective-sizer">available</span><span class="hero-adjective-text"></span><span class="hero-adjective-caret" aria-hidden="true"></span></span></span></span>',
      heroDescription:
        "Automatically detect expanded scope opportunities, refill requests, and consultations so staff can focus on approvals and care moments.",
      benefitsTitle: "Why pharmacies plug in MedSense",
      benefits: [
        "Booking appointments with patients naturally through conversations, powered by LLM.",
        "AI scans for allergic rhinitis and other minor ailments, pre-assesses history, and hands ready-to-sign consults to pharmacists.",
        "Patients receive trusted answers, refill suggestions, and OTC adds that route back to your pharmacy automatically.",
      ],
    },
    patients: {
      heroTitle:
        '<span class="hero-line-static">Pharmacy care that you know is</span><span class="hero-adjective-line"><span class="hero-adjective" data-force-typing="true" data-words="trusted,reliable,verified,seamless,available"><span class="hero-adjective-wrapper"><span class="hero-adjective-sizer">available</span><span class="hero-adjective-text"></span><span class="hero-adjective-caret" aria-hidden="true"></span></span></span></span>',
      heroDescription:
        "Connect to your pharmacy team for quick guidance, refills, and pickup planning in one smooth chat.",
      benefitsTitle: "What patients love about MedSense",
      benefits: [
        "Instant access to verifiable answers from trusted resources (e.g. Health Canada, manufacturer monographs)",
        "No need to click around, turn conversation easily into real life actions (over the counter purchases, refills, schedule appointments etc)",
      ],
    },
  };
  const toggleButtons = document.querySelectorAll(".toggle-button");
  const heroTitle = document.getElementById("hero-title");
  const heroDescription = document.getElementById("hero-description");
  const patientForm = document.getElementById("patient-form");
  const pharmacyForm = document.getElementById("pharmacy-form");
  const toggleContainer = document.querySelector(".audience-toggle");
  const toggleIndicator = document.querySelector(".toggle-indicator");
  const unverifiedContent = document.getElementById("unverified-content");
  const verifiedContent = document.getElementById("verified-content");
  const reduceMotionQuery = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  );
  const HERO_ADJECTIVES = ["trusted", "reliable", "verified", "seamless", "available"];
  let adjectiveTimer = null;

  function stopAdjectiveLoop() {
    if (adjectiveTimer) {
      window.clearTimeout(adjectiveTimer);
      adjectiveTimer = null;
    }
  }

  function initHeroAdjectiveLoop() {
    stopAdjectiveLoop();
    if (!heroTitle) {
      return;
    }

    const adjectiveElement = heroTitle.querySelector(".hero-adjective");
    if (!adjectiveElement) {
      return;
    }
    const textTarget =
      adjectiveElement.querySelector(".hero-adjective-text") || adjectiveElement;
    const sizerElement = adjectiveElement.querySelector(".hero-adjective-sizer");

    const wordsAttr =
      adjectiveElement.dataset.words || adjectiveElement.dataset.adjectives;
    const words = (wordsAttr ? wordsAttr.split(",") : HERO_ADJECTIVES)
      .map((word) => word.trim())
      .filter(Boolean);
    const wordList = words.length ? words : HERO_ADJECTIVES;

    adjectiveElement.setAttribute("aria-live", "polite");
    const forceTyping = adjectiveElement.dataset.forceTyping === "true";
    const allowTyping = forceTyping || !reduceMotionQuery.matches;

    if (!allowTyping || wordList.length < 2) {
      textTarget.textContent = wordList[0];
      adjectiveElement.classList.remove("show-caret");
      return;
    }

    // Find the longest word and set it in the sizer to reserve width
    const longestWord = wordList.reduce((a, b) => a.length >= b.length ? a : b, "");
    if (sizerElement) {
      sizerElement.textContent = longestWord;
    }

    adjectiveElement.classList.add("show-caret");

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    const typeSpeed = Number(adjectiveElement.dataset.typeSpeed || 100);
    const deleteSpeed = Number(adjectiveElement.dataset.deleteSpeed || 50);
    const holdDuration = Number(adjectiveElement.dataset.holdDuration || 3000);
    const pauseBeforeType = Number(adjectiveElement.dataset.pauseBeforeType || 400);

    const tick = () => {
      const word = wordList[wordIndex];

      if (!deleting) {
        charIndex += 1;
        textTarget.textContent = word.slice(0, charIndex);

        if (charIndex === word.length) {
          deleting = true;
          adjectiveTimer = window.setTimeout(tick, holdDuration);
          return;
        }

        adjectiveTimer = window.setTimeout(tick, typeSpeed);
        return;
      }

      if (charIndex > 0) {
        charIndex -= 1;
        textTarget.textContent = word.slice(0, charIndex);
        adjectiveTimer = window.setTimeout(tick, deleteSpeed);
        return;
      }

      // Fully deleted - move to next word
      deleting = false;
      wordIndex = (wordIndex + 1) % wordList.length;
      // Brief pause with empty text and blinking cursor before typing next word
      adjectiveTimer = window.setTimeout(tick, pauseBeforeType);
    };

    // Start empty with just the blinking cursor
    textTarget.textContent = "";
    charIndex = 0;
    adjectiveTimer = window.setTimeout(tick, pauseBeforeType);
  }

  function handleMotionPreferenceChange() {
    initHeroAdjectiveLoop();
  }

  if (typeof reduceMotionQuery.addEventListener === "function") {
    reduceMotionQuery.addEventListener("change", handleMotionPreferenceChange);
  } else if (typeof reduceMotionQuery.addListener === "function") {
    reduceMotionQuery.addListener(handleMotionPreferenceChange);
  }

  // Simple markdown parser for comparison content
  function parseMarkdown(text) {
    let html = text;

    // Parse links [text](url)
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="source-link">$1</a>');

    // Parse highlights ==text==
    html = html.replace(/==([^=]+)==/g, '<mark class="highlight">$1</mark>');

    // Parse bold **text**
    html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');

    // Parse headers ### text
    html = html.replace(/^### (.+)$/gm, '<h4>$1</h4>');

    // Parse bullet points
    html = html.replace(/^[*•] (.+)$/gm, '<li>$1</li>');

    // Wrap consecutive <li> tags in <ul>
    html = html.replace(/(<li>.*<\/li>\s*)+/gs, function(match) {
      return '<ul>' + match + '</ul>';
    });

    // Parse paragraphs (double newlines)
    const paragraphs = html.split(/\n\n+/);
    html = paragraphs.map(p => {
      p = p.trim();
      // Don't wrap if already wrapped in a tag
      if (p.match(/^<[^>]+>/)) {
        return p;
      }
      return '<p>' + p.replace(/\n/g, '<br>') + '</p>';
    }).join('\n');

    return html;
  }

  function renderComparison() {
    // Render unverified response directly (without inner wrapper)
    const unverifiedHtml = parseMarkdown(comparisonData.unverified.content);
    unverifiedContent.innerHTML = unverifiedHtml;

    // Render verified response showing the conversation (skip first user message - it's the shared question)
    let conversationHtml = '';
    comparisonData.verified.conversation.forEach((message, index) => {
      // Skip the first user message since it's displayed as the shared question
      if (index === 0 && message.role === 'user') {
        return;
      }

      if (message.role === 'user') {
        conversationHtml += `
          <div class="conversation-exchange">
            <div class="exchange-label">You</div>
            <div class="exchange-text">${message.text}</div>
          </div>
        `;
      } else {
        conversationHtml += `
          <div class="conversation-exchange medsense-exchange">
            <div class="exchange-label">MedSense AI</div>
            <div class="exchange-text">${parseMarkdown(message.text)}</div>
          </div>
        `;
      }
    });

    verifiedContent.innerHTML = conversationHtml;
  }

  // Add click handlers for benefit links
  function setupBenefitLinks() {
    const benefitLinks = document.querySelectorAll('.benefit-link');
    benefitLinks.forEach(link => {
      link.addEventListener('click', () => {
        const targetId = link.getAttribute('data-link-to');
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });

      link.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          const targetId = link.getAttribute('data-link-to');
          const targetSection = document.getElementById(targetId);
          if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });
    });
  }

  function updateToggleIndicator(activeButton) {
    if (!toggleIndicator || !toggleContainer || !activeButton) {
      return;
    }

    const containerStyles = getComputedStyle(toggleContainer);
    const paddingLeft = parseFloat(containerStyles.paddingLeft || "0");
    const buttonRect = activeButton.getBoundingClientRect();
    const containerRect = toggleContainer.getBoundingClientRect();
    const offsetLeft = buttonRect.left - containerRect.left - paddingLeft;
    const newWidth = buttonRect.width;

    toggleIndicator.style.opacity = "1";
    toggleIndicator.style.width = `${newWidth}px`;
    toggleIndicator.style.transform = `translateX(${offsetLeft}px) scaleX(1) scaleY(1)`;
    toggleIndicator.dataset.width = String(newWidth);
    toggleIndicator.dataset.translate = String(offsetLeft);
  }

  function renderAudience(audienceKey) {
    const data = audienceData[audienceKey];
    if (!data) {
      return;
    }

    heroTitle.innerHTML = data.heroTitle;
    initHeroAdjectiveLoop();
    if (heroDescription) {
      heroDescription.textContent = data.heroDescription;
    }

    // Update benefits in hero section
    const benefitsList = document.getElementById("benefits-list-inline");
    if (benefitsList) {
      benefitsList.innerHTML = "";

      // Adjust grid columns based on number of benefits
      if (data.benefits.length === 3) {
        benefitsList.classList.add("benefits-three-col");
      } else {
        benefitsList.classList.remove("benefits-three-col");
      }

      data.benefits.forEach((benefit) => {
        const item = document.createElement("li");
        item.className = "benefit-item-inline benefit-link";
        item.tabIndex = 0;
        item.setAttribute("role", "button");
        item.textContent = benefit;

        // Set link targets
        item.setAttribute("data-link-to", "comparison-section");

        benefitsList.appendChild(item);
      });
    }

    // Show/hide sections based on audience
    if (audienceKey === "patients") {
      patientForm.classList.remove("is-hidden");
      pharmacyForm.classList.add("is-hidden");
    } else {
      patientForm.classList.add("is-hidden");
      pharmacyForm.classList.remove("is-hidden");
    }

    toggleButtons.forEach((button) => {
      const isActive = button.dataset.audience === audienceKey;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-selected", String(isActive));
      button.setAttribute("tabindex", isActive ? "0" : "-1");
    });

    const activeButton = Array.from(toggleButtons).find(
      (button) => button.dataset.audience === audienceKey,
    );
    if (activeButton) {
      updateToggleIndicator(activeButton);
    }

    // Re-setup benefit links after re-rendering
    setupBenefitLinks();
  }

  toggleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      renderAudience(button.dataset.audience);
    });

    button.addEventListener("keydown", (event) => {
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") {
        return;
      }

      const buttons = Array.from(toggleButtons);
      const currentIndex = buttons.indexOf(button);
      const direction = event.key === "ArrowRight" ? 1 : -1;
      const nextIndex =
        (currentIndex + direction + buttons.length) % buttons.length;

      buttons[nextIndex].focus();
      renderAudience(buttons[nextIndex].dataset.audience);
    });
  });

  window.addEventListener("resize", () => {
    const activeButton = document.querySelector(".toggle-button.is-active");
    updateToggleIndicator(activeButton);
  });

  // Back to top button functionality
  const backToTopButton = document.getElementById('back-to-top');

  function handleScroll() {
    if (window.scrollY > 300) {
      backToTopButton.classList.add('visible');
    } else {
      backToTopButton.classList.remove('visible');
    }
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  window.addEventListener('scroll', handleScroll);
  backToTopButton.addEventListener('click', scrollToTop);

  // Initialize
  renderAudience("patients");
  renderComparison();
  setupBenefitLinks();
})();

