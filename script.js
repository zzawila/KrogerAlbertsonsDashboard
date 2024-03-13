// const operatorsFilter = document.getElementById('operators');

// const items = document.querySelectorAll('.card');

// function filterByOperator() {
//     const selectedTypes = document.querySelectorAll('input[type="checkbox"]:checked');
//     const selectedTypeValues = Array.from(selectedTypes).map(checkbox => checkbox.value);
//     cards.forEach(item => {
//         const type = item.dataset.operator;
//         if (selectedTypes.length === 0 || selectedTypeValues.includes(type)) {
//             item.style.display = 'block';
//           } else {
//               item.style.display = 'none';
//           }
//         });
//       }
//     typeFilter.forEach(checkbox => checkbox.addEventListener('change', filterByType));

// document.querySelectorAll(".toggleCheckbox").forEach(function(checkbox) {
//     checkbox.addEventListener("change", function() {
//       var operator = this.value;
//       var cards = document.querySelectorAll(".card." + operator);
      
//       if (this.checked) {
//         cards.forEach(function(card) {
//           card.style.display = "block";
//         });
//       } else {
//         cards.forEach(function(card) {
//           card.style.display = "none";
//         });
//       }
//     });
//   });