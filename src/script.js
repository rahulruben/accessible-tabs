const tabExample = document.getElementById('tab-example');
const panels = tabExample.querySelectorAll('[role="tabpanel"]');
const tabBtns = tabExample.querySelectorAll('[role="tab"]');

const setInitialTabState = () => {
  tabBtns[0].setAttribute('aria-selected', true);
  panels[0].setAttribute('active', '');
}


setInitialTabState();