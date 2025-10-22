
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
  }

  // Function to open the Enquiry Modal
  function openEnquiryModal() {
    document.getElementById("enquiryModal").style.display = "block";
  }

  // Function to close the Enquiry Modal
  function closeEnquiryModal() {
    document.getElementById("enquiryModal").style.display = "none";

          window.onclick = function(event) {
      if (event.target == document.getElementById("enquiryModal")) {
        closeEnquiryModal();
      }
    }

  }
  
  
