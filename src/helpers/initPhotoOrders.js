export default function initPhotoOrders(photos) {
    let lastidx = -1;
    photos.forEach((photo, idx) => {
        if (photo.portfolioOrder === null) {
            if (lastidx === -1) {
                photo.portfolioOrder = idx;
            } else {
                lastidx += 1;
                photo.portfolioOrder = lastidx;
            }
        } else if (lastidx == photo.portfolioOrder) {
            photo.portfolioOrder -= 1;
            lastidx = photo.portfolioOrder;
        } else {
            lastidx = photo.portfolioOrder;
        }
    });
}
