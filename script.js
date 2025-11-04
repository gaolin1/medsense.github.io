(function () {
  "use strict";

  const conversationPreview = {
    patients: `
            <div class="preview-card">
                <div class="preview-header">
                    <span class="preview-heading">From symptom to actions</span>
                </div>
                <div class="chat-thread" role="log" aria-live="polite">
                    <div class="chat-row patient">
                        <div class="chat-bubble patient" tabindex="0">
                            <span class="bubble-label">You</span>
                            <p>Hi MedSense, I have a fever and chills tonight. What can I take that is safe with my lisinopril?</p>
                        </div>
                        <div class="avatar patient" aria-hidden="true"><span>You</span></div>
                    </div>
                    <div class="chat-row">
                        <div class="avatar ai" aria-hidden="true"><span>AI</span></div>
                        <div class="chat-bubble medsense" tabindex="0">
                            <span class="bubble-label">MedSense AI</span>
                            <p>Thanks for checking in, Alex. Because of your hypertension and lisinopril, stick with acetaminophen (Tylenol) for fever relief tonight. Follow the dose on the box and reach out if it pushes past 38.5°C or you feel worse.</p>
                        </div>
                    </div>
                    <div class="chat-row">
                        <div class="avatar ai" aria-hidden="true"><span>AI</span></div>
                        <div class="chat-bubble medsense" tabindex="0">
                            <span class="bubble-label">MedSense AI</span>
                            <p>I pulled a few items you can add right now:</p>
                            <div class="product-tiles" role="list">
                                <div class="product-card" role="listitem" tabindex="0">
                                    <div class="product-name">Tylenol Extra Strength</div>
                                    <div class="product-detail">500 mg caplets · 24 count</div>
                                    <div class="product-cta">Add to pickup</div>
                                </div>
                                <div class="product-card" role="listitem" tabindex="0">
                                    <div class="product-name">Electrolyte Drink Mix</div>
                                    <div class="product-detail">Helps with hydration during fever</div>
                                    <div class="product-cta">Add to pickup</div>
                                </div>
                                <div class="product-card alt" role="listitem" tabindex="0">
                                    <div class="product-name">Cool-Mist Humidifier</div>
                                    <div class="product-detail">Eases congestion while you rest</div>
                                    <div class="product-cta">Add to pickup</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="chat-row patient">
                        <div class="chat-bubble patient" tabindex="0">
                            <span class="bubble-label">You</span>
                            <p>Great, add Tylenol, the drink mix, and I need my ramipril refill too please.</p>
                        </div>
                        <div class="avatar patient" aria-hidden="true"><span>You</span></div>
                    </div>
                    <div class="chat-row">
                        <div class="avatar ai" aria-hidden="true"><span>AI</span></div>
                        <div class="chat-bubble medsense" tabindex="0">
                            <span class="bubble-label">MedSense AI</span>
                            <p>On it. I am queueing your ramipril refill, packaging Tylenol plus the hydration bundle, and looping in your pharmacist for a quick review.</p>
                        </div>
                    </div>
                    <div class="chat-row">
                        <div class="avatar rx" aria-hidden="true"><span>RX</span></div>
                        <div class="chat-bubble pharmacist" tabindex="0">
                            <span class="bubble-label">MedSense Pharmacist</span>
                            <p>Hi Alex, I confirmed your ramipril refill and the comfort items. Everything will be ready in 30 minutes; request courier if you would rather stay in.</p>
                        </div>
                    </div>
                </div>
            </div>
        `,
    pharmacies: `
            <div class="preview-card">
                <div class="preview-header">
                    <span class="preview-heading">Minor Ailment Assessment Hand-off</span>
                </div>
                <div class="chat-thread" role="log" aria-live="polite">
                    <div class="chat-row patient">
                        <div class="chat-bubble patient" tabindex="0">
                            <span class="bubble-label">Patient</span>
                            <p>Hi MedSense, I am feeling burning when I urinate and need relief tonight. Can my pharmacist prescribe something?</p>
                        </div>
                        <div class="avatar patient" aria-hidden="true"><span>PT</span></div>
                    </div>
                    <div class="chat-row">
                        <div class="avatar ai" aria-hidden="true"><span>AI</span></div>
                        <div class="chat-bubble medsense" tabindex="0">
                            <span class="bubble-label">MedSense AI</span>
                            <p>Hi Jamie, let’s start with your symptoms. Which of these are you experiencing right now? Select all that apply.</p>
                        </div>
                    </div>
                    <div class="chat-row patient">
                        <div class="chat-bubble patient" tabindex="0">
                            <span class="bubble-label">Patient</span>
                            <p>Burning when peeing and needing to go more often than usual.</p>
                        </div>
                        <div class="avatar patient" aria-hidden="true"><span>PT</span></div>
                    </div>
                    <div class="chat-row">
                        <div class="avatar ai" aria-hidden="true"><span>AI</span></div>
                        <div class="chat-bubble medsense" tabindex="0">
                            <span class="bubble-label">MedSense AI</span>
                            <p>Thanks. Are any of these complicating factors happening right now? Select all that apply—they help us decide if a pharmacist needs to step in.</p>
                        </div>
                    </div>
                    <div class="chat-row patient">
                        <div class="chat-bubble patient" tabindex="0">
                            <span class="bubble-label">Patient</span>
                            <p>None of those apply.</p>
                        </div>
                        <div class="avatar patient" aria-hidden="true"><span>PT</span></div>
                    </div>
                    <div class="chat-row">
                        <div class="avatar ai" aria-hidden="true"><span>AI</span></div>
                        <div class="chat-bubble medsense" tabindex="0">
                            <span class="bubble-label">MedSense AI</span>
                            <p>Thanks. Have you experienced any of these patterns with recent urinary tract infections? Select all that apply so we can confirm whether a pharmacist can prescribe safely.</p>
                        </div>
                    </div>
                    <div class="chat-row patient">
                        <div class="chat-bubble patient" tabindex="0">
                            <span class="bubble-label">Patient</span>
                            <p>No, this is my first infection this year.</p>
                        </div>
                        <div class="avatar patient" aria-hidden="true"><span>PT</span></div>
                    </div>
                    <div class="chat-row">
                        <div class="avatar ai" aria-hidden="true"><span>AI</span></div>
                        <div class="chat-bubble medsense" tabindex="0">
                            <span class="bubble-label">MedSense AI</span>
                            <p>Great. I am packaging this minor-ailment assessment with your history and sending it to the pharmacist for prescribing. They will join shortly with next steps.</p>
                        </div>
                    </div>
                    <div class="chat-row">
                        <div class="avatar rx" aria-hidden="true"><span>RX</span></div>
                        <div class="chat-bubble pharmacist" tabindex="0">
                            <span class="bubble-label">Pharmacist</span>
                            <p>Hi Jamie, I reviewed your answers and chart. Nitrofurantoin is ready under our minor-ailment program, and I added hydration and analgesic guidance to your inbox. Let me know if you prefer pickup or delivery.</p>
                        </div>
                    </div>
                </div>
            </div>
        `,
  };
  const audienceData = {
    pharmacies: {
      heroTitle:
        "Deliver <u><em>trusted</em></u> guidance without stretching your counter time.",
      heroDescription:
        "MedSense triages minor-ailment screens, refill requests, and consultations so pharmacists focus on approvals and care moments.",
      benefitsTitle: "Why pharmacies plug in MedSense",
      benefits: [
        "Automated discovery and AI-led screening surface minor-ailment consults before escalations hit the counter.",
        "Deliver trusted answers, digital refills, and guided add-ons while automated follow-ups keep patients engaged.",
        "Log pharmacist interventions automatically for compliance and billing.",
      ],
    },
    patients: {
      heroTitle:
        "Get <u><em>trusted</em></u> pharmacy answers the moment you need them.",
      heroDescription:
        "MedSense keeps you connected to your pharmacy team for quick guidance, refills, and pickup planning in one smooth chat.",
      benefitsTitle: "What patients love about MedSense",
      benefits: [
        "Quick reassurance for new medications, side-effects, and everyday questions.",
        "Refill prescriptions and add vitamins or wellness items without waiting on hold.",
        "Chat with MedSense anytime and your pharmacist joins when it is time to make a decision.",
      ],
    },
  };
  const toggleButtons = document.querySelectorAll(".toggle-button");
  const heroTitle = document.getElementById("hero-title");
  const heroDescription = document.getElementById("hero-description");
  const benefitsTitle = document.getElementById("benefits-title");
  const benefitsList = document.getElementById("benefits-list");
  const preview = document.getElementById("conversation-preview");
  const patientForm = document.getElementById("patient-form");
  const pharmacyForm = document.getElementById("pharmacy-form");
  const pharmacyHighlights = document.getElementById("pharmacy-highlights");
  const toggleContainer = document.querySelector(".audience-toggle");
  const toggleIndicator = document.querySelector(".toggle-indicator");
  let indicatorFrame = null;
  let indicatorTimeouts = [];

  function clearIndicatorAnimationQueue() {
    if (indicatorFrame !== null) {
      cancelAnimationFrame(indicatorFrame);
      indicatorFrame = null;
    }

    indicatorTimeouts.forEach((timeoutId) => clearTimeout(timeoutId));
    indicatorTimeouts = [];
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

    const storedWidth = parseFloat(toggleIndicator.dataset.width || "");
    const storedTranslate = parseFloat(toggleIndicator.dataset.translate || "");
    const previousWidth = Number.isFinite(storedWidth) ? storedWidth : newWidth;
    const previousTranslate = Number.isFinite(storedTranslate)
      ? storedTranslate
      : parseFloat(
          toggleIndicator.style.getPropertyValue("--indicator-translate"),
        ) || 0;

    toggleIndicator.dataset.width = String(newWidth);
    toggleIndicator.dataset.translate = String(offsetLeft);

    clearIndicatorAnimationQueue();

    toggleIndicator.style.setProperty(
      "--indicator-width",
      `${previousWidth}px`,
    );
    toggleIndicator.style.setProperty(
      "--indicator-translate",
      `${previousTranslate}px`,
    );
    toggleIndicator.style.setProperty("--indicator-scale", "1");
    toggleIndicator.style.setProperty("--indicator-scale-y", "1");

    indicatorFrame = requestAnimationFrame(() => {
      indicatorFrame = null;

      toggleIndicator.style.setProperty("--indicator-scale", "0.88");
      toggleIndicator.style.setProperty("--indicator-scale-y", "0.96");

      indicatorTimeouts.push(
        setTimeout(() => {
          toggleIndicator.style.setProperty(
            "--indicator-width",
            `${newWidth}px`,
          );
          toggleIndicator.style.setProperty(
            "--indicator-translate",
            `${offsetLeft}px`,
          );
        }, 90),
      );

      indicatorTimeouts.push(
        setTimeout(() => {
          toggleIndicator.style.setProperty("--indicator-scale", "1.06");
          toggleIndicator.style.setProperty("--indicator-scale-y", "1.04");
        }, 220),
      );

      indicatorTimeouts.push(
        setTimeout(() => {
          toggleIndicator.style.setProperty("--indicator-scale", "1");
          toggleIndicator.style.setProperty("--indicator-scale-y", "1");
        }, 360),
      );
    });
  }

  function renderAudience(audienceKey) {
    const data = audienceData[audienceKey];
    if (!data) {
      return;
    }

    heroTitle.innerHTML = data.heroTitle;
    heroDescription.textContent = data.heroDescription;
    benefitsTitle.textContent = data.benefitsTitle;

    preview.innerHTML = conversationPreview[audienceKey] || "";
    preview.classList.toggle(
      "is-visible",
      Boolean(conversationPreview[audienceKey]),
    );

    benefitsList.innerHTML = "";
    data.benefits.forEach((benefit) => {
      const item = document.createElement("li");
      item.className = "benefit-item";
      item.tabIndex = 0;
      item.textContent = benefit;
      benefitsList.appendChild(item);
    });

    if (audienceKey === "patients") {
      patientForm.classList.remove("is-hidden");
      pharmacyForm.classList.add("is-hidden");
      pharmacyHighlights.classList.add("is-hidden");
      pharmacyHighlights.setAttribute("aria-hidden", "true");
    } else {
      patientForm.classList.add("is-hidden");
      pharmacyForm.classList.remove("is-hidden");
      pharmacyHighlights.classList.remove("is-hidden");
      pharmacyHighlights.setAttribute("aria-hidden", "false");
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

  renderAudience("patients");
})();
