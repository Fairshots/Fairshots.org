export default function initPhotoOrders(photos) {
    let lastidx = -1;
    photos.forEach((photo, idx) => {
        if (!photo.portfolioOrder) {
            if (lastidx === -1) {
                photo.portfolioOrder = idx;
            } else {
                lastidx += 1;
                photo.portfolioOrder = lastidx;
            }
        } else {
            lastidx = photo.portfolioOrder;
        }
    });
}
