export default function initPhotoOrders(photos) {
    if (photos) {
        let lastidx = -1;
        photos.forEach((photo, idx) => {
            if (photo.portfolioOrder === null) {
                // null entry and haven't found a valid one yet
                if (lastidx === -1) {
                    photo.portfolioOrder = idx;
                } else {
                    // null entry and have seen a valid one
                    lastidx += 1;
                    photo.portfolioOrder = lastidx;
                }
                // duplicate entry check
            } else if (lastidx == photo.portfolioOrder) {
                photo.portfolioOrder += 1; // add one to order
                lastidx = photo.portfolioOrder;
            } else {
                lastidx = photo.portfolioOrder; // set last idx to each one
            }
        });
    }
}
