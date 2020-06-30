exports.getReview = (req, res, next) => {
    res.status(200).json({
        reviews: [{ author: 'Mary', house: 'Drumboy', date: '20/05/2019', text: 'hopefully 10 sentences on why the house is super super good value for money and that she would totally go back again in a heart beat.' },
                  { author: 'Michael', house: 'Aughnashelin', date: '05/06/2019', text: 'hopefully another very positive review from a very sound man called Michael.' }]
    });
};