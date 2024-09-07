// document.addEventListener("DOMContentLoaded", () => {
//     showHistory();
//     const input = document.querySelector("#input");
//     const showBalance = document.querySelector("#balance");
//     const addBtn = document.querySelector("#addBtn");
//     const confirmBtn = document.querySelector("#confirmBtn");
//     const withdrawBtn = document.querySelector("#withdrawBtn");
//     const historyBtn = document.querySelector("#historyBtn");

//     window.addEventListener("click", ()=>{
//       input.focus();
//     })

//     let currentBalance = 0;
//     let transactions = [];

//     // Current Balance Display
//     function updateBalanceDisplay() {
//         let history = localStorage.getItem("localHistory");
//         let historyObj = history ? JSON.parse(history) : [];
//         let balance = 0;


//         historyObj.forEach(transaction => {
//             if (transaction.type === "Add") {
//                 balance += parseFloat(transaction.amount);
//             } else if (transaction.type === "Withdraw") {
//                 balance -= parseFloat(transaction.amount);
//             }
//         });

//         showBalance.textContent = `Current Balance: $ ${balance}`;
//         return balance;
//     }

//     // After Add/Withdraw Money
//     currentBalance = updateBalanceDisplay();

//     addBtn.addEventListener("click", () => {
//       input.focus();
//       let amount = input.value.trim();
//       if (amount >= 10) {
//         addBtn.setAttribute("class", "hidden");
//         confirmBtn.setAttribute(
//           "class",
//           "show  bg-yellow-700 hover:bg-yellow-500 text-white px-3 py-2 rounded-md"
//         );
//         withdrawBtn.setAttribute("class", "hidden")
//       } else {
//         alert("Input a valid number minimum $10");
//         return;
//       }
//     });

//     withdrawBtn.addEventListener("click", () => {
//       input.focus();
//       let amount = input.value.trim();
//       if (amount >= 10) {
//         withdrawBtn.setAttribute("class", "hidden");
//         confirmBtn2.setAttribute(
//           "class",
//           "show  bg-purple-500 hover:bg-purple-600 text-white px-3 py-2 rounded-md"
//         );
//         addBtn.setAttribute("class", "hidden")
//       } else {
//         alert("Input a valid number minimum $10");
//         return;
//       }
//     });

//     // Add money Confirm
//     confirmBtn.addEventListener("click", () => {
//       let amount = parseFloat(input.value);
//       let history = localStorage.getItem("localHistory");
//       let historyObj = history ? JSON.parse(history) : [];

//       currentBalance += amount;

//       const transaction = {
//         date: new Date().toLocaleString(),
//         type: "Add",
//         amount: amount,
//         balanceAfter: currentBalance,
//       };

//       historyObj.push(transaction);
//       localStorage.setItem("localHistory", JSON.stringify(historyObj));

//       updateBalanceDisplay();
//       showHistory();

//       input.value = "";
//       confirmBtn.setAttribute("class", "hidden");
//       addBtn.setAttribute(
//         "class",
//         "show bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-md"
//       );
//       withdrawBtn.setAttribute("class", "show bg-pink-700 hover:bg-pink-500 text-white px-3 py-2 rounded-md")
//     });

//     // Withdraw money Confirm
//     confirmBtn2.addEventListener("click", () => {
//       let amount = parseFloat(input.value);
//       let history = localStorage.getItem("localHistory");
//       let historyObj = history ? JSON.parse(history) : [];

//       if (currentBalance >= amount) {
//         currentBalance -= amount;

//         const transaction = {
//           date: new Date().toLocaleString(),
//           type: "Withdraw",
//           amount: amount,
//           balanceAfter: currentBalance,
//         };

//         historyObj.push(transaction);
//         localStorage.setItem("localHistory", JSON.stringify(historyObj));

//         updateBalanceDisplay();
//         showHistory();
//       } else {
//         alert("Insufficient balance");
//       }

//       input.value = "";
//       confirmBtn2.setAttribute("class", "hidden");
//       addBtn.setAttribute("class", "show bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-md")
//       withdrawBtn.setAttribute(
//         "class",
//         "show bg-pink-700 hover:bg-pink-500 text-white px-3 py-2 rounded-md"
//       );
//     });

//     // Function to show history
//     function showHistory() {
//       let history = localStorage.getItem("localHistory");
//       let historyObj = history ? JSON.parse(history) : [];

//       const historyId = document.querySelector("#historyId");
//       historyId.innerHTML = ""; // Clear previous history

//       historyObj.forEach((transaction) => {
//         const row = document.createElement("tr");
//         row.innerHTML = `
//           <td>${transaction.date}</td>
//           <td>${transaction.type}</td>
//           <td>$${transaction.amount}</td>
//           <td>$${transaction.balanceAfter}</td>
//         `;
//         historyId.appendChild(row);
//       });
//     }

//     //Show Transaction History / Bank Statement
//     const statement = document.querySelector("#statement");
//     const closeBtn = document.querySelector("#closeBtn");
//     historyBtn.addEventListener("click", ()=>{
//       statement.setAttribute("class", "show");
//       closeBtn.setAttribute("class", "show border bg-red-700 hover:bg-red-500 text-white p-2 rounded-md");
//     })

//     // close history
//     closeBtn.addEventListener("click", ()=>{
//       statement.setAttribute("class", "hidden");
//       closeBtn.setAttribute("class", "hidden");
//     })
//   });