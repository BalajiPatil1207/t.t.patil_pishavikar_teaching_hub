document
  .getElementById("geography-quiz")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Stop the form from submitting normally

    const questions = document.querySelectorAll(".question-block");
    let score = 0;
    const resultsDiv = document.getElementById("quiz-results");
    const submitButton = document.getElementById("submit-quiz");

    questions.forEach((qBlock, index) => {
      const correctAnswer = qBlock.getAttribute("data-correct-answer");
      const questionName = `q${index + 1}`;
      const selectedOption = document.querySelector(
        `input[name="${questionName}"]:checked`
      );

      // 1. Clean up previous results
      qBlock.querySelectorAll(".option-label").forEach((label) => {
        label.classList.remove("correct-answer", "incorrect-answer");
      });
      qBlock.querySelector(".result-feedback")?.remove();

      if (selectedOption) {
        const selectedValue = selectedOption.value;
        const selectedLabel = document.querySelector(
          `label[for="${selectedOption.id}"]`
        );

        if (selectedValue === correctAnswer) {
          // Correct Answer
          score++;
          selectedLabel.classList.add("correct-answer");
        } else {
          // Incorrect Answer
          selectedLabel.classList.add("incorrect-answer");

          // Highlight the correct answer
          const correctId = `q${index + 1}${correctAnswer.toLowerCase()}`;
          const correctLabel = document.querySelector(
            `label[for="${correctId}"]`
          );
          if (correctLabel) {
            correctLabel.classList.add("correct-answer");
          }

          // Add feedback message
          const feedback = document.createElement("p");
          feedback.className =
            "result-feedback mt-2 text-sm incorrect-indicator";
          feedback.textContent = `❌ चूक! बरोबर उत्तर आहे: ${correctLabel.textContent.substring(
            3
          )}`; // Remove A/B/C/D from start
          qBlock.appendChild(feedback);
        }
      } else {
        // Not Answered
        const correctId = `q${index + 1}${correctAnswer.toLowerCase()}`;
        const correctLabel = document.querySelector(
          `label[for="${correctId}"]`
        );

        if (correctLabel) {
          correctLabel.classList.add("correct-answer");

          // Add feedback message
          const feedback = document.createElement("p");
          feedback.className = "result-feedback mt-2 text-sm correct-indicator";
          feedback.textContent = `उत्तर दिले नाही. बरोबर उत्तर आहे: ${correctLabel.textContent.substring(
            3
          )}`;
          qBlock.appendChild(feedback);
        }
      }

      // 2. Disable all radio buttons after submission
      qBlock.querySelectorAll('input[type="radio"]').forEach((radio) => {
        radio.disabled = true;
      });
    });

    // 3. Display Results
    document.getElementById("score-display").textContent = score;
    resultsDiv.classList.remove("hidden");

    // Scroll to the result
    window.scrollTo({
      top: resultsDiv.offsetTop - 80, // Scroll slightly above the result box
      behavior: "smooth",
    });

    // 4. Update submit button state
    submitButton.textContent = "निकाल दर्शविला आहे";
    submitButton.disabled = true;
    submitButton.classList.add("bg-gray-400", "cursor-not-allowed");
    submitButton.classList.remove("bg-green-600", "hover:bg-green-700");
  });

// navigation

document.getElementById('menu-btn').addEventListener('click', function() {
        var mobileMenu = document.getElementById('mobile-menu');
        var hamburgerIcon = document.getElementById('hamburger-icon');
        var closeIcon = document.getElementById('close-icon');

        // 1. Toggle the visibility of the mobile menu
        mobileMenu.classList.toggle('hidden');

        // 2. Toggle the visibility of the icons (Hamburger <-> X)
        hamburgerIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
    });


    
