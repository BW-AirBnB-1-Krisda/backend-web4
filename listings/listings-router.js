const router = require('express').Router();
const Listings = require('./listings-model.js');
// After clicking listings, direct to user listings with the given ID 

router.get('/', (req, res) => {
    Listings.findAllListings()
        .then(listings => {
            res.status(200).json(listings);
        })
        .catch(err => {
            res.status(500).json({message: 'Could not find ALL listings.', error: err})
        })
})

router.get('/user/:id', (req, res) => {
    const {id} = req.params;

    Listings.findListingsForUser(id)
        .then(listings => {
            res.status(200).json(listings);
        })
        .catch(err => {
            res.status(500).json({message: 'Could not find listings.', error: err})
        })
})

// After clicking a listing brings up the listing clicked.

router.get('/:id', (req, res) => {
    const {id} = req.params;

    Listings.findListingById(id)
        .then(listing => {
            res.status(200).json(listing)
        })
        .catch(err => {
            res.status(500).json({message: 'Could not find listing with specified ID.', error: err})
        })
})

// This is a table that stores all listings, not only the specific user.

router.post('/user/:id', (req, res) => {
    const listing = req.body;
    const {id} = req.params;
    listing.user_id = id;

    Listings.addListing(listing)
        .then(listing => {
            res.status(200).json(listing)
        })
        .catch(err => {
            console.log(listing)
            res.status(500).json({message: 'Failed to create new listing.', error: err})
        }) 
})

router.put('/:id', (req, res) => {
    const changes = req.body;
    const {id} = req.params;

    Listings.findListingById(id)
        .then(listing => {
            if(listing){
                Listings.update(changes, id)
                .then(updatedListing => {
                    res.status(200).json(updatedListing)
                });
            } else {
                res.status(404).json({message: 'Could not find listing with given ID.'})
            }
        })
        .catch(err => {
            res.status(500).json({message: 'Failed to update listing.', error: err})
        })
})

router.delete('/:id', (req, res) => {
    const {id} = req.params;

    Listings.remove(id)
    .then(deleted => {
        if(deleted){
            res.json({removed: deleted})
        } else {
            res.status(404).json({message: 'Could not find listing with specified ID.'})
        }
    })
    .catch(err => {
        res.status(500).json({message: 'Failed to delete listing.'})
    })
})

module.exports = router;