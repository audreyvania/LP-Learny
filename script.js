function handleGetFormData() {
  const nameInput = document.getElementById("name").value;
  const cityInput = document.getElementById("city").value;
  const emailInput = document.getElementById("email").value;
  const zipCodeInput = document.getElementById("zip-code").value;
  const statusInput = document.getElementById("status").checked;

  // Mengembalikan sebuah objek dengan properti yang telah disebutkan
  return {
      name: nameInput,
      email: emailInput,
      city: cityInput,
      zipCode: zipCodeInput,
      status: statusInput,
  };
}

function isNumber(str) {
  for (let i = 0; i < str.length; i++) {
      if (isNaN(str.charAt(i))) {
          return false;
      }
  }
  return true; 
}

function checkboxIsChecked() {
  const checkbox = document.getElementById('status');
  return checkbox.checked;
}


function validateFormData(formData) {
  if (
      formData && !isNaN(formData.zipCode) &&
      checkboxIsChecked(formData.status)
  ) {
      return true;
  } else {
      return false;
  }
}

function submit(event) {
  const formData = handleGetFormData();
  if (validateFormData(formData)) {

      document.getElementById('warning').innerHTML = '';

      console.log('data berhasil ditambah');
  } else {

      document.getElementById('warning').innerHTML = 'Periksa form anda sekali lagi';
  }
}

document.getElementById('form').addEventListener('submit', submit);