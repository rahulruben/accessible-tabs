const tabExample = document.getElementById('tab-example');
const panels = tabExample.querySelectorAll('[role="tabpanel"]');
const tabBtns = tabExample.querySelectorAll('[role="tab"]');

const getActiveTabButton = () => {
  return [...tabBtns].find(tab => tab.getAttribute('aria-selected') == "true");
}

const setActiveTabButton = (tabButton, state) => {
  tabButton.setAttribute('aria-selected', state);
}

const setInitialTabState = () => {
  panels[0].setAttribute('active', '');
}

const addEventListeners = () => {
  tabBtns.forEach(tab => tab.addEventListener('click', e => {
    const panelId = tab.getAttribute('aria-controls');
    [...panels].map(panel => {
      if (panel.id === panelId) {
        panel.setAttribute('active', '');
      } else {
        panel.removeAttribute('active');
      }
    })
    setActiveTabButton(getActiveTabButton(), false);
    setActiveTabButton(e.target, true);
  }))
  
}

setInitialTabState();
addEventListeners();