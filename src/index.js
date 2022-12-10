import './index.html';
import './styles/main.scss';

class Observer {
  constructor() {
    this.observers = [];
  }

  subscribe(callback) {
    this.observers.push(callback);
  }

  unsubscribe(callback) {
    this.observers = this.observers.filter(
      (subscriber) => subscriber !== callback
    );
  }

  broadcast(data) {
    this.observers.forEach((subscriber) => subscriber(data));
  }
}

// ===> <=== //
const ACTIVE_MOBILE_MENU_CLASSNAME = 'header__navigation_open';
const mobileMenu = document.getElementById('mobileMenu');
const mobileCloseIcon = document.getElementById('mobileCloseIcon');
const mobileNavigation = document.getElementById('mobileNavigation');
const mobileNavigationList = document.getElementById('mobileNavigationList');

mobileMenu.addEventListener('click', () => {
  mobileNavigation.classList.toggle(ACTIVE_MOBILE_MENU_CLASSNAME);
});

mobileCloseIcon.addEventListener('click', () => {
  mobileNavigation.classList.remove(ACTIVE_MOBILE_MENU_CLASSNAME);
});

[...mobileNavigationList.children].map(linkNode => (
  linkNode.addEventListener('click', () => {
    if ([...mobileNavigation.classList].includes(ACTIVE_MOBILE_MENU_CLASSNAME)) {
      mobileNavigation.classList.remove(ACTIVE_MOBILE_MENU_CLASSNAME);
    }
  })
));

// ===> <=== //
const ACTIVE_LABEL_CLASSNAME = 'form__label_active';
const ERRORS = {
  BAD_WORDS: 'please, do not use bad words!',
};

const fieldObserver = new Observer();
const errorObserver = new Observer();

const emailField = document.getElementById('email');
const nameField = document.getElementById('name');
const nameErrorNode = document.getElementById('nameError');
const emailErrorNode = document.getElementById('emailError');

const badWordsDic = ['fuck', 'bitch', 'suck', 'asshole', 'motherfucker'];
const errorState = {
  name: {
    node: nameErrorNode,
    text: '',
  },
  email: {
    node: emailErrorNode,
    text: '',
  },
};

fieldObserver.subscribe(validateEmptyField(emailField));
fieldObserver.subscribe(validateFieldByBadWords(emailField));
fieldObserver.subscribe(validateEmptyField(nameField));
fieldObserver.subscribe(validateFieldByBadWords(nameField));

errorObserver.subscribe(handleError);

emailField.addEventListener('keyup', (event) => fieldObserver.broadcast(event));
nameField.addEventListener('keyup', (event) => fieldObserver.broadcast(event));

function validateEmptyField(fieldNode) {
  return (event) => {
    if (event.target === fieldNode && event.target.value.length >= 1) {
      fieldNode.nextElementSibling.classList.add(ACTIVE_LABEL_CLASSNAME);
    } else {
      fieldNode.nextElementSibling.classList.remove(ACTIVE_LABEL_CLASSNAME);
    }
  };
}

function validateFieldByBadWords(fieldNode) {
  return (event) => {
    if (event.target === fieldNode) {
      const isBadWord = badWordsDic.some((word) =>
        event.target.value.toLowerCase().includes(word.toLowerCase())
      );

      const id = fieldNode.getAttribute('id');
      const errorText = isBadWord ? ERRORS.BAD_WORDS : ' ';

      errorObserver.broadcast({ id, text: errorText });
    }
  };
}

function handleError({ id, text }) {
  if (Object.prototype.hasOwnProperty.call(errorState, id)) {
    errorState[id] = Object.assign(errorState[id], { text });
    errorState[id].node.innerText = errorState[id].text;
  }
}
