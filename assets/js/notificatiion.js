// create class for notification
class Notification {
    // create public variable for notification
    notification = document.querySelector('#notification');
    _title;
    _message;
    _type;

    // create constructor with title, message and type
    constructor() {
        // add class fixed inset-0 z-20 flex items-end px-4 py-6 pointer-events-none sm:items-start sm:p-6 to notification
        this.notification.classList.add('fixed', 'inset-0', 'z-20', 'flex', 'items-end', 'px-4', 'py-6', 'pointer-events-none', 'sm:items-start', 'sm:p-6');
        this.notification.setAttribute('aria-live', 'assertive');
        this.notification.innerHTML = `
        <div id="notification-item" class="flex w-full flex-col items-center space-y-4 sm:items-end"></div>
        `;
    }

    // create method for hide notification
    remove(id) {
        var item = document.getElementById(`${id}`);
        // remove class transform transition-transform ease-out duration-300 opacity-0 translate-y-2 sm:translate-y-0 sm:translate-x-2 sm:opacity-100 sm:translate-x-0
        item.classList.remove('transform', 'transition-transform', 'ease-out', 'duration-300', 'opacity-0', 'translate-y-2', 'sm:translate-y-0', 'sm:translate-x-2', 'sm:opacity-100', 'sm:translate-x-0');
        // remove class transform ease-out duration-300 transition from item
        // item.classList.remove('transform', 'ease-out', 'duration-300', 'transition');
        // add class transform ease-in duration-100 transition to item
        item.classList.add('transform', 'ease-in', 'duration-100', 'transition');
        // add class opacity-0 to item
        item.classList.add('opacity-0');
        // remove item after 100ms
        setTimeout(() => {
            item.remove();
        }, 100)

    }

    create(title, message, type) {
        // create private variable for title, message and type
        this._title = title;
        this._message = message;
        this._type = type;

        this.show();
    }

    // create method for show notification
    show() {
        // create random id for notification
        var id = `item-${Math.floor(Math.random() * 1000000000)}`;
        // add multiple notification to notification-item
        var item = document.querySelector('#notification-item');
        item.insertAdjacentHTML('afterbegin', `
        <div id="${id}"
                class="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg pointer-events-auto ring-1 ring-black ring-opacity-5 transform transition-transform ease-out duration-300 opacity-0 translate-y-2 sm:translate-y-0 sm:translate-x-2 sm:opacity-100 sm:translate-x-0">
                <div class="p-4">
                    <div class="flex items-start">
                        <div class="flex-shrink-0">
                            <svg class="w-6 h-6 text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div class="ml-3 w-0 flex-1 pt-0.5">
                            <p class="text-sm font-medium text-gray-900">
                                ${this._title}
                            </p>
                            <p class="mt-1 text-sm text-gray-500">
                                ${this._message}
                            </p>
                        </div>
                        <div class="flex flex-shrink-0 ml-4">
                            <button onclick="this.remove('${id}')" type="button"
                                class="inline-flex text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                <span class="sr-only">Close</span>
                                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                    fill="currentColor" aria-hidden="true">
                                    <path
                                        d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `);

        // hide notification after 5 seconds
        setTimeout(() => {
            this.remove(id);
        }, 2000);
    }
}