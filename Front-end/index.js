const btn = document.getElementById("form");

const handleSubmit = async (e) => {
  const fName = document.getElementById("fname").value;
  const lName = document.getElementById("surname").value;
  const email = document.getElementById("mail").value;
  const phone = document.getElementById("phone").value;
  const password = document.getElementById("pass").value;

  const data = {
    fname: fName,
    lname: lName,
    email: email,
    phone: phone,
    password: password,
  };

  e.preventDefault();

  const res = await fetch("http://localhost:5000/register", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const response = await res.json();
  console.log(response);
};

btn.addEventListener("submit", (e) => handleSubmit(e));
