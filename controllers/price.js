exports.getPrice = (req, res, next) => {
    res.status(200).json({
        pricePerNight: 200,
        pricePerWeek: 800
    })
}