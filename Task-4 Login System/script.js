if (!localStorage.getItem('users')) {
  localStorage.setItem('users', JSON.stringify({}));
}

function getUsers() {
  return JSON.parse(localStorage.getItem('users'));
}

function saveUsers(users) {
  localStorage.setItem('users', JSON.stringify(users));
}

let alertTimeout;
function showAlert(message, type = 'danger') {
  const alertContainer = document.getElementById('alert-container');
  const alertMessage = document.getElementById('alert-message');

  alertMessage.className = `alert alert-${type}`;
  alertMessage.innerText = message;
  alertContainer.style.display = 'block';

  if (alertTimeout) clearTimeout(alertTimeout);
  alertTimeout = setTimeout(() => {
    alertContainer.style.display = 'none';
  }, 4000);
}

function navigateTo(viewName) {
  document.querySelectorAll('.active').forEach((el) => el.classList.remove('active'));

  if (viewName === 'dashboard') {
    const loggedInUser = sessionStorage.getItem('loggedInUser');
    if (!loggedInUser) {
      showAlert('Access denied. Please log in to view the dashboard.', 'danger');
      navigateTo('login');
      return;
    }
    document.getElementById('welcome-message').innerText = `Welcome, ${loggedInUser}`;
    document.title = 'Dashboard - Authentication System';
  } else if (viewName === 'login') {
    document.title = 'Login - Authentication System';
  } else if (viewName === 'register') {
    document.title = 'Register - Authentication System';
  }

  const activeCard = document.getElementById(`${viewName}-view`);
  if (activeCard) activeCard.classList.add('active');
}

document.getElementById('register-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('register-username').value.trim();
  const password = document.getElementById('register-password').value;
  const confirmPassword = document.getElementById('register-confirm-password').value;

  if (!username || !password) {
    showAlert('Username and password are required.', 'danger');
    return;
  }

  if (password !== confirmPassword) {
    showAlert('Passwords do not match.', 'danger');
    return;
  }

  const users = getUsers();

  if (users[username]) {
    showAlert('Username already exists. Please choose a different one.', 'danger');
    return;
  }

  users[username] = { password };
  saveUsers(users);

  showAlert('Registration successful! Please login.', 'success');

  document.getElementById('register-form').reset();
  navigateTo('login');
});

document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('login-username').value.trim();
  const password = document.getElementById('login-password').value;

  const users = getUsers();

  if (users[username] && users[username].password === password) {
    sessionStorage.setItem('loggedInUser', username);
    showAlert('Welcome back! You logged in successfully.', 'success');

    document.getElementById('login-form').reset();
    navigateTo('dashboard');
  } else {
    showAlert('Invalid username or password.', 'danger');
  }
});

document.getElementById('logout-btn').addEventListener('click', function () {
  sessionStorage.removeItem('loggedInUser');
  showAlert('You have been logged out successfully.', 'success');
  navigateTo('login');
});

window.addEventListener('DOMContentLoaded', () => {
  const loggedInUser = sessionStorage.getItem('loggedInUser');
  if (loggedInUser) {
    navigateTo('dashboard');
  } else {
    navigateTo('login');
  }
});