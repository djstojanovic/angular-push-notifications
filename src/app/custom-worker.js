            //this.scope.addEventListener('notificationclick', (event) => this.onClick(event));
            this.scope.addEventListener('notificationclick', (event) => {
                event.notification.close();
                if (clients.openWindow && event.notification.data.url) {
                    event.waitUntil(clients.openWindow(event.notification.data.url));
                }
            });

            // more info about issue
            // https://stackoverflow.com/questions/54138763/open-pwa-when-clicking-on-push-notification-handled-by-service-worker-ng7-andr