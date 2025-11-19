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
                        <div class="avatar patient" aria-hidden="true"><span>PT</span></div>
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
                        <div class="avatar patient" aria-hidden="true"><span>PT</span></div>
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
                            <p>Hi Jamie, let's start with your symptoms. Which of these are you experiencing right now? Select all that apply.</p>
                            <div class="assessment-options">
                                <div class="assessment-option selected">Burning or pain when peeing</div>
                                <div class="assessment-option selected">Needing to pee much more often than usual</div>
                                <div class="assessment-option">Strong urge to pee right away</div>
                                <div class="assessment-option danger">Blood in urine (pink, red, or cola-colored)</div>
                                <div class="assessment-option">Pressure or discomfort just above the pubic bone</div>
                                <div class="assessment-option secondary">None of these apply</div>
                            </div>
                        </div>
                    </div>
                    <div class="chat-row">
                        <div class="avatar ai" aria-hidden="true"><span>AI</span></div>
                        <div class="chat-bubble medsense" tabindex="0">
                            <span class="bubble-label">MedSense AI</span>
                            <p>Thanks. Are any of these complicating factors happening right now? Select all that apply—they help us decide if a pharmacist needs to step in.</p>
                            <div class="assessment-options">
                                <div class="assessment-option danger">Fever, chills, or feeling very unwell</div>
                                <div class="assessment-option danger">Flank or back pain near the kidneys</div>
                                <div class="assessment-option danger">Blood in urine</div>
                                <div class="assessment-option danger">Vomiting or unable to keep fluids down</div>
                                <div class="assessment-option danger">Weakened immune system (e.g., chemotherapy, transplant)</div>
                                <div class="assessment-option danger">Currently pregnant or <6 weeks postpartum</div>
                                <div class="assessment-option">Trouble peeing or feeling unable to empty bladder</div>
                                <div class="assessment-option secondary selected">None of these apply</div>
                            </div>
                        </div>
                    </div>
                    <div class="chat-row">
                        <div class="avatar ai" aria-hidden="true"><span>AI</span></div>
                        <div class="chat-bubble medsense" tabindex="0">
                            <span class="bubble-label">MedSense AI</span>
                            <p>Thanks. Have you experienced any of these patterns with recent urinary tract infections? Select all that apply so we can confirm whether a pharmacist can prescribe safely.</p>
                            <div class="assessment-options">
                                <div class="assessment-option danger">I recently finished UTI antibiotics but symptoms never cleared</div>
                                <div class="assessment-option danger">I've had another UTI diagnosed in the past 3 months</div>
                                <div class="assessment-option danger">I've had 3 or more UTIs within the last 12 months</div>
                                <div class="assessment-option danger">This episode has lasted longer than 7 days</div>
                                <div class="assessment-option secondary selected">None of these apply</div>
                            </div>
                        </div>
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
  const comparisonData = {
    question: "what are the milligrams for oxycodone e?",
    unverified: {
      title: "Unverified LLM Response",
      content: `The milligram (mg) strengths for immediate-release **oxycodone** tablets typically include:

* **5 mg**
* **10 mg**
* **15 mg**
* **20 mg**
* **30 mg**

The letter 'e' in your query likely refers to a specific pill imprint or manufacturer, and the actual dose is the milligram strength. The most common starting doses are **5 mg** or **10 mg**.

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
          text: `Oxycodone ER (extended-release) tablets are available in several milligram strengths, including 10 mg, 20 mg, 40 mg, 80 mg, and 160 mg ([DailyMed](https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f06d3690-3fd4-407d-8f8d-ab0c354e61bd)).

**Key supporting facts directly related to the question:**

• Oxycodone HCl Controlled-Release Tablets come in strengths of 10 mg, 20 mg, 40 mg, and 80 mg ([DailyMed](https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f06d3690-3fd4-407d-8f8d-ab0c354e61bd)).
• A 160 mg tablet strength is also available, which is comparable to two 80 mg tablets when taken on an empty stomach ([DailyMed](https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f06d3690-3fd4-407d-8f8d-ab0c354e61bd)).

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
        "Deliver <strong>trusted</strong> care and transform your pharmacy practice.",
      heroDescription:
        "Automatically detect expanded scope opportunities, refill requests, and consultations so staff can focus on approvals and care moments.",
      benefitsTitle: "Why pharmacies plug in MedSense",
      benefits: [
        "Booking appointments with patients naturally through conversations, powered by LLM.",
        "AI scans for UTIs and other minor ailments, pre-assesses history, and hands ready-to-sign consults to pharmacists.",
        "Patients receive trusted answers, refill suggestions, and OTC adds that route back to your pharmacy automatically.",
      ],
    },
    patients: {
      heroTitle:
        "Get <strong>trusted</strong> care the moment you need them.",
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
  const conversationHeading = document.getElementById("conversation-heading");
  const preview = document.getElementById("conversation-preview");
  const patientForm = document.getElementById("patient-form");
  const pharmacyForm = document.getElementById("pharmacy-form");
  const toggleContainer = document.querySelector(".audience-toggle");
  const toggleIndicator = document.querySelector(".toggle-indicator");
  const unverifiedContent = document.getElementById("unverified-content");
  const verifiedContent = document.getElementById("verified-content");
  let indicatorAnimation = null;

  // Simple markdown parser for comparison content
  function parseMarkdown(text) {
    let html = text;

    // Parse links [text](url)
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="source-link">$1</a>');

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

    const storedWidth = parseFloat(toggleIndicator.dataset.width || "");
    const storedTranslate = parseFloat(toggleIndicator.dataset.translate || "");
    let previousWidth = Number.isFinite(storedWidth)
      ? storedWidth
      : toggleIndicator.getBoundingClientRect().width;
    if (!previousWidth || previousWidth < 1) {
      previousWidth = newWidth;
    }

    let previousTranslate = Number.isFinite(storedTranslate)
      ? storedTranslate
      : 0;

    if (!Number.isFinite(previousTranslate)) {
      previousTranslate = 0;
    }

    const currentTransform = toggleIndicator.style.transform;
    if (!Number.isFinite(storedTranslate) && currentTransform) {
      const match = currentTransform.match(/translateX\((-?\d+(?:\.\d+)?)px\)/);
      if (match) {
        previousTranslate = parseFloat(match[1]);
      }
    }

    const applyFinalState = () => {
      toggleIndicator.style.width = `${newWidth}px`;
      toggleIndicator.style.transform = `translateX(${offsetLeft}px) scaleX(1) scaleY(1)`;
      toggleIndicator.dataset.width = String(newWidth);
      toggleIndicator.dataset.translate = String(offsetLeft);
    };

    toggleIndicator.style.opacity = "1";
    toggleIndicator.style.width = `${previousWidth}px`;
    toggleIndicator.style.transform = `translateX(${previousTranslate}px) scaleX(1) scaleY(1)`;
    toggleIndicator.dataset.width = String(previousWidth);
    toggleIndicator.dataset.translate = String(previousTranslate);

    if (!toggleIndicator.animate) {
      applyFinalState();
      return;
    }

    if (indicatorAnimation) {
      indicatorAnimation.cancel();
    }

    const distance = Math.abs(offsetLeft - previousTranslate);
    const midTranslate =
      previousTranslate + (offsetLeft - previousTranslate) * 0.5;
    const stretchWidth = Math.max(previousWidth, newWidth) + distance * 0.6;
    const settleWidth = newWidth + 12;

    indicatorAnimation = toggleIndicator.animate(
      [
        {
          width: `${previousWidth}px`,
          transform: `translateX(${previousTranslate}px) scaleX(1) scaleY(1)`,
          offset: 0,
        },
        {
          width: `${previousWidth * 0.85}px`,
          transform: `translateX(${previousTranslate}px) scaleX(1.15) scaleY(0.85)`,
          offset: 0.15,
        },
        {
          width: `${stretchWidth}px`,
          transform: `translateX(${midTranslate - stretchWidth * 0.15}px) scaleX(0.7) scaleY(1.35)`,
          offset: 0.45,
        },
        {
          width: `${stretchWidth * 0.9}px`,
          transform: `translateX(${offsetLeft - newWidth * 0.1}px) scaleX(0.85) scaleY(1.2)`,
          offset: 0.65,
        },
        {
          width: `${settleWidth}px`,
          transform: `translateX(${offsetLeft}px) scaleX(1.08) scaleY(0.92)`,
          offset: 0.82,
        },
        {
          width: `${newWidth * 0.98}px`,
          transform: `translateX(${offsetLeft}px) scaleX(0.98) scaleY(1.02)`,
          offset: 0.92,
        },
        {
          width: `${newWidth}px`,
          transform: `translateX(${offsetLeft}px) scaleX(1) scaleY(1)`,
          offset: 1,
        },
      ],
      {
        duration: 650,
        easing: "cubic-bezier(0.34, 1.56, 0.64, 1)",
        fill: "forwards",
      },
    );

    indicatorAnimation.onfinish = () => {
      applyFinalState();
      indicatorAnimation = null;
    };

    indicatorAnimation.oncancel = () => {
      indicatorAnimation = null;
    };
  }

  function renderAudience(audienceKey) {
    const data = audienceData[audienceKey];
    if (!data) {
      return;
    }

    heroTitle.innerHTML = data.heroTitle;
    heroDescription.textContent = data.heroDescription;
    conversationHeading.textContent = audienceKey === "patients"
      ? "See MedSense in action"
      : "See how MedSense streamlines your workflow";

    preview.innerHTML = conversationPreview[audienceKey] || "";
    preview.classList.toggle(
      "is-visible",
      Boolean(conversationPreview[audienceKey]),
    );

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

      data.benefits.forEach((benefit, index) => {
        const item = document.createElement("li");
        item.className = "benefit-item-inline benefit-link";
        item.tabIndex = 0;
        item.setAttribute("role", "button");
        item.textContent = benefit;

        // Set link targets - all pharmacy benefits link to preview
        if (audienceKey === "patients") {
          if (index === 0) {
            item.setAttribute("data-link-to", "comparison-section");
          } else {
            item.setAttribute("data-link-to", "preview-section");
          }
        } else {
          item.setAttribute("data-link-to", "preview-section");
        }

        benefitsList.appendChild(item);
      });
    }

    // Show/hide sections based on audience
    const comparisonSection = document.getElementById("comparison-section");
    const connectionDiagram = document.getElementById("connection-diagram");
    const previewSection = document.getElementById("preview-section");

    if (audienceKey === "patients") {
      if (comparisonSection) comparisonSection.classList.remove("is-hidden");
      if (connectionDiagram) connectionDiagram.classList.add("is-hidden");
      if (previewSection) previewSection.classList.remove("is-hidden");
      patientForm.classList.remove("is-hidden");
      pharmacyForm.classList.add("is-hidden");
    } else {
      if (comparisonSection) comparisonSection.classList.add("is-hidden");
      if (connectionDiagram) connectionDiagram.classList.remove("is-hidden");
      if (previewSection) previewSection.classList.remove("is-hidden");
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

  // Initialize
  renderAudience("patients");
  renderComparison();
  setupBenefitLinks();
})();
