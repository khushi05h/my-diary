// LOGIN LOGIC
const LOGIN_BTN = document.getElementById('loginBtn');
const RESET   = document.getElementById('resetLink');
const PWD_KEY  = 'diaryPassword';
const DEFAULT_PWD = '12345';

function getPwd() {
  return localStorage.getItem(PWD_KEY) || DEFAULT_PWD;
}

LOGIN_BTN.onclick = () => {
  const input = document.getElementById('password').value;
  if (input === getPwd()) {
    localStorage.setItem('loggedIn', '1');
    location.href = 'diary.html';
  } else {
    alert('❌ Wrong password');
  }
};

RESET.onclick = () => {
  const np = prompt('Enter new password:');
  if (np && np.trim()) {
    localStorage.setItem(PWD_KEY, np.trim());
    alert('✅ Password reset');
  }
};

// If not logged in, redirect to login page
if (!localStorage.getItem('loggedIn')) {
    location.href = 'index.html';
  }
  