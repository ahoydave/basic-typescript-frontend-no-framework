import { updatedClickCount } from './click-counter'

const messageArea = document.getElementById('messageArea');
const messageChangeButton = document.getElementById('messageChangeButton');

if (messageArea != null && messageChangeButton != null) {
    messageChangeButton.onclick = (event: Event) => {
        event.preventDefault();
        messageArea.textContent = 'Button pressed: ' + updatedClickCount() + ' times';
    };
}